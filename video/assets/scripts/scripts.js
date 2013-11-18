// SETUP

// $(".nano").nanoScroller();

player.init({
	video: '#video',
	progress: '.progress',
	volume: '#volume',
	control: '#progress-bar',
	button: '#play-btn',
	file: 'random.json',
	loaded: function(){
		console.log('loaded');
		player.playPause();
		player.getDuration();
	},
	playing: function(){
		console.log('playing');
		$(player.prop.video).addClass('play');
		$(player.prop.button).find('img').attr('src', 'assets/images/template/btn-pause.png');
	},
	randomized: function(){
		// behaviors
	},
	paused: function(){
		$(player.prop.video).removeClass('play');
		$(player.prop.button).find('img').attr('src', 'assets/images/template/btn-play.png');
	},
	onTimeUpdate: function(currentTime){
		checkTime(currentTime);
		player.getCurrentTime();
	},
	muted: function(muted){
		if(muted){
			$('img.mute').attr('src', 'assets/images/template/btn-volume-muted.png');
			$('#volume .handle').addClass('muted');
		} else {
			$('img.mute').attr('src', 'assets/images/template/btn-volume.png');
			$('#volume .handle').removeClass('muted');
		}
	}
});

player.load();


function setWidth(){
	$('#player').width($(window).width() - 230);
	$('#timeline.nano, #badges.nano, #feed').height($(window).height() - 40);
	if($('#feed #tweet-box').hasClass('focused')){
		$('#feed #tweet-feed').height($(window).height() - 75);
	} else {
		$('#feed #tweet-feed').height($(window).height() - 165);
	}
}
setWidth();


var isFullscreen = false;
function enterFullscreen() {
	var element = document.documentElement;
	if(!isFullscreen){
		if(element.requestFullScreen) { element.requestFullScreen(); } 
		else if(element.mozRequestFullScreen) { element.mozRequestFullScreen(); } 
		else if(element.webkitRequestFullScreen) { element.webkitRequestFullScreen(); } 
		else { alert('Your browser does not support fullscreen.') }  	
	} else {
		if(document.cancelFullScreen) { document.cancelFullScreen(); } 
		else if(document.mozCancelFullScreen) { document.mozCancelFullScreen(); } 
		else if(document.webkitCancelFullScreen) { document.webkitCancelFullScreen(); }
	}
}

$(document).on('fullscreenchange, mozfullscreenchange, webkitfullscreenchange', function(e) {
	if(!isFullscreen){
		isFullscreen = true;
		$('#fullscreen-btn').find('img').attr('src', 'assets/images/template/btn-windowed.png').attr('alt', 'Quit fullscreen');
	} else {
		isFullscreen = false;
		$('#fullscreen-btn').find('img').attr('src', 'assets/images/template/btn-fullscreen.png').attr('alt', 'Enter fullscreen');
	}
});

var currentSidebar = 'timeline';
function changeSidebar(e){
	e.preventDefault();
	var futureSidebar = $(this).attr('href');
	if(futureSidebar == currentSidebar) { return; } 
	
	if(futureSidebar == 'timeline'){
		if(currentSidebar == 'feed'){ $('#feed').addClass('hidden'); } 
		else if (currentSidebar == 'badges'){ $('#badges').addClass('hidden'); } 
		$('#timeline').removeClass('hidden');
	} else if(futureSidebar == 'feed'){
		if(currentSidebar == 'timeline'){ $('#timeline').addClass('hidden'); } 
		else if (currentSidebar == 'badges'){ $('#badges').addClass('hidden'); }
		$('#feed').removeClass('hidden');
		
	} else if(futureSidebar == 'badges'){
		if(currentSidebar == 'timeline'){ $('#timeline').addClass('hidden'); } 
		else if (currentSidebar == 'feed'){ $('#feed').addClass('hidden'); }
		$('#badges').removeClass('hidden');
	}

	if($('#tweet-box').hasClass('focused')){ $('#tweet-box').removeClass('focused'); }
	currentSidebar = futureSidebar;
}

var cards = cards;

timeline.init({
	timeline: '#timeline .content',
	rendered: function(){
		console.log('displayed');
	}
});

function checkTime(currentTime) {
	for (key in cards) {
		var card = cards[key];

		if(currentTime > card.displayTime && !card.displayed){
			timeline.render(card);
			timeline.addMarker(card);
		} 

		if(currentTime > card.hiddenTime && !card.hidden){
			timeline.move(card);
		}
	}
}


function showBrowser(e){
	e.preventDefault();
	player.pause();
	var url = $(this).data('url');

	$('div.close-browser').addClass('visible');

	if(!$('#wrapper-rel').hasClass('display-browser')){
		$('#wrapper-rel').addClass('display-browser');
		$('.close-browser').on('click', hideBrowser);
	}

	$.ajax({
		url: url,
		beforeSend: function(){
			$('#browser > div').html($('<div>').addClass('loader'));
		},
		success: function(data){
			$('#browser > div').html(data);
		}
	});
}

function hideBrowser(e){
	e.preventDefault();
	$('#wrapper-rel').removeClass('display-browser');
	$('div.close-browser').removeClass('visible');
	$('.close-browser').off('click', hideBrowser);
	player.play();
}

function goToMarker(e){
	e.preventDefault();
	player.setTime(e, $(this).data('key'));
}

function extendForm(){
	if(!$('#tweet-box').hasClass('focused')){
		$('#tweet-box').addClass('focused');
		$('#feed #tweet-feed').height($(window).height() - 165);
	} 
}

function submitTweet(e){
	e.preventDefault();
	$.ajax({
        url: 'assets/twitter/sendTweet.php', 
        type: 'post', 
        data: {
        	tweet: $('#tweet-box textarea').val(),
        	hashtag: 'GoT',
        	minutes: getPlayerTime()
        },
        success: function() { 
            $('.nb-chars').html('Tweet envoyé');
            $('#tweet-box textarea').val('');
            $('#tweet-box').removeClass('focused');
			$('#feed #tweet-feed').height($(window).height() - 75);
        }
    });
}

$('#video, #play-btn').on('click', player.playPause);
$('#progress-bar').on('click', player.setTime);
$('#volume .level').on('click', player.setVolume);
$('#volume .mute').on('click', player.mute);
$('#sidebar nav').find('a').on('click', changeSidebar);
$('#main').on('click', 'a.browser', showBrowser);
$('#progress-bar').on('click', 'a.marker', goToMarker);
$(window).on('resize', setWidth);
$('#fullscreen-btn').on('click', enterFullscreen);
$('#tweet-box textarea[name=tweet]').on('click', extendForm);
$('#tweet-box form').submit(submitTweet);

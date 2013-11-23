// SETUP
var badgeSavant = 0;
// $(".nano").nanoScroller();
if(signedInTwitter){
	$('#homepage #unlock-badges .sign-in').addClass('hidden');
	$('#homepage #unlock-badges .signed-in').removeClass('hidden');
	$("#homepage #unlock-badges .signed-in h2 span").html('Welcome');
}
$('.tweets').tweetMachine('#GoT');
player.init({
	video: '#video',
	progress: '.progress',
	volume: '#volume',
	control: '#progress-bar',
	button: '#play-btn',
	file: 'random.json',
	loaded: function(){
		console.log('loaded');
		
		player.getDuration();
		$(player.prop.video).removeClass('hidden');
		if(localStorage.getItem("currentTime") == null){
			localStorage.setItem('currentTime', JSON.stringify(0));
		} 
	},
	playing: function(){
		console.log('playing');
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
		localStorage.setItem("currentTime", JSON.stringify(player.media.currentTime));
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
	$('div.close-browser').width(($(window).width() / 2) - 260);
	$('#player').width($(window).width() - 260);
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
	$('#timeline, #feed, #badges').removeClass('visible');
	$('#sidebar nav i.current').removeClass('current');
	if(futureSidebar == 'timeline'){
		$('#timeline').addClass('visible');
		$('#sidebar nav i.timeline').addClass('current');
	} else if(futureSidebar == 'feed'){
		$('#feed').addClass('visible');
		$('#sidebar nav i.feed').addClass('current');
	} else if(futureSidebar == 'badges'){
		$('#badges').addClass('visible');
		$('#sidebar nav i.badges').addClass('current');
	} 
	// if(futureSidebar == 'timeline'){
	// 	if(currentSidebar == 'feed'){ $('#feed').addClass('hidden'); } 
	// 	else if (currentSidebar == 'badges'){ $('#badges').addClass('hidden'); } 
	// 	$('#timeline').removeClass('hidden');
	// } else if(futureSidebar == 'feed'){
	// 	if(currentSidebar == 'timeline'){ $('#timeline').addClass('hidden'); } 
	// 	else if (currentSidebar == 'badges'){ $('#badges').addClass('hidden'); }
	// 	$('#feed').removeClass('hidden');
	// 	$('#sidebar nav i.feed').addClass('current');
		
	// } else if(futureSidebar == 'badges'){
	// 	if(currentSidebar == 'timeline'){ $('#timeline').addClass('hidden'); } 
	// 	else if (currentSidebar == 'feed'){ $('#feed').addClass('hidden'); }
	// 	$('#badges').removeClass('hidden');
	// }

	if($('#tweet-box').hasClass('focused') && $('#tweet-box textarea').val().length == 0){ $('#tweet-box').removeClass('focused'); }
	currentSidebar = futureSidebar;
}

var cards = cards;

timeline.init({
	timeline: '#timeline .content',
	rendered: function(){
		console.log('displayed');
		$('#timeline article.card.hidden').removeClass('hidden');
	}
});



function checkTime(currentTime) {
	for (key in cards) {
		var card = cards[key];
		if(currentTime > card.displayTime && !card.displayed){
			timeline.render(card);
			timeline.addMarker(card);
		}
	}
}


function showBrowser(e){
	e.preventDefault();
	player.pause();
	badgeSavant++;
	if(badgeSavant == 8){
		badges.claim('savant');
	}
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
	if($(this).hasClass('gif')){
		$.getScript('assets/scripts/tumblr.js');
		$.getScript('http://platform.tumblr.com/v1/share.js');
	}
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
	var key = $(this).data('key');
	player.setTime(e, key);

	$('#timeline div').animate({
		scrollTop: $('article.card[data-key=' + key + ']').offset().top + 'px'
	}, {
		duration: 500,
		easing: 'swing'
	});
}

tweet.init({
	textarea: '#tweet-box textarea[name=tweet]',
	replying: function(){
		extendForm();
	},
	submitted: function(){
		badges.claim('envoy');
		$('.nb-chars').html('Tweet envoyé');
        $('#tweet-box textarea').val('');
        $('#tweet-box').removeClass('focused');
		$('#feed #tweet-feed').height($(window).height() - 75);
	}
})

function extendForm(){
	if(!$('#tweet-box').hasClass('focused')){
		$('#tweet-box').addClass('focused');
		$('#feed #tweet-feed').height($(window).height() - 165);
	} 
}

function countChar(){
	// If user didn't press enter
	var length = 140 - $('#tweet-box textarea').val().length;
	if(length == 0){
		$('.nb-chars').addClass('visible').html('no char left!').addClass('error');
	} else {
		$('.nb-chars').addClass('visible').html(length + ' chars left').removeClass('error')
	}
}

function launchPlayer(e){
	e.stopPropagation();
	$('#homepage div').stop().animate({
		scrollTop: 0 + 'px'
	}, {
		duration: '300',
		easing: 'swing',
		complete: function(){
			$('#homepage').addClass('hidden');
			window.setTimeout(function(){
				$('#homepage').hide();
				$('#sidebar').addClass('visible');
				window.setTimeout(function(){
					$('#player div').addClass('visible');
					window.setTimeout(function(){
						$('#player div').removeClass('visible');
						player.play();
					}, 1000);
				}, 300);
			}, 600);
		}
	});
}


badges.init({
	rendered: function(name){
		console.log('badge ' + name + ' rendered');
		$('.' + name).parent().addClass('claimed');
	},
	claimed: function(name){
		console.log('badge ' + name + ' claimed');
	}
});

$('a.launch-player').on('click', launchPlayer);
$('#video, #play-btn').on('click', player.playPause);
$('#progress-bar').on('click', player.setTime);
$('#volume .level').on('click', player.setVolume);
$('#volume .mute').on('click', player.mute);
$('#sidebar nav').find('a').on('click', changeSidebar);
$('#main').on('click', 'a.browser', showBrowser);
$('#progress-bar').on('click', 'a.marker', goToMarker);
$(window).on('resize', setWidth);
$('#fullscreen-btn').on('click', enterFullscreen);
$('#tweet-feed').on('click', 'button.reply', tweet.reply);
$('#tweet-feed').on('click', 'button.retweet', tweet.retweet);
$('#tweet-feed').on('click', 'button.favorite', tweet.favorite);
$('#tweet-box textarea[name=tweet]').on('click', extendForm);
$('#tweet-box form').submit(tweet.submit);
$('#tweet-box textarea').on({
	'keydown': countChar, 
	'change': countChar
});
$(document).on('keydown', function(e){ 
	console.log(e);
	if(!$('#tweet-box').hasClass('focused')){
		if(e.keyCode == 32){
			player.playPause();
		
		}
	}
	
	
})



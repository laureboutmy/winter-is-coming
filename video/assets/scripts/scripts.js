// SETUP

$(".nano").nanoScroller();

player.init({
	video: '#video',
	progress: '.progress',
	control: '#progress-bar',
	button: '#play-button',
	file: 'random.json',
	loaded: function(){
		console.log('loaded');
		player.playPause();
	},
	playing: function(){
		console.log('playing');
		$(player.prop.video).addClass('play');
		$(player.prop.button).text('pause');

	},
	randomized: function(){
		// behaviors
	},
	paused: function(){
		$(player.prop.video).removeClass('play');
		$(player.prop.button).text('play');
	},
	onTimeUpdate: function(currentTime){
		checkTime(currentTime);
	}
});

player.load();
$('#video, #play-button').on('click', player.playPause);
$('#progress-bar').on('click',player.setTime);

console.log(timeline);

var timeline = timeline;

function checkTime(currentTime) {
	for (key in timeline) {
		var evt = timeline[key];

		if(currentTime > evt.displayTime && !evt.displayed){
			if(evt.browser){
				var evtA = $('<a>').attr('data-url', evt.url).attr('href', '#').addClass('browser').attr('data-key', evt.displayTime);
				var evtDiv = $('<div>').text(evt.content).addClass('evt visible').attr('data-key', evt.displayTime);
				evtDiv = evtA.append(evtDiv);
				console.log(evtDiv);
			} else {
				var evtDiv = $('<div>').text(evt.content).addClass('evt visible').attr('data-key', evt.displayTime);
			}

			evt.displayed = true;
			$('#main').append(evtDiv);
			if(evt.browser){ evtDiv.on('click', showBrowser); }
			displayMarker(evt);
		} 

		if(currentTime > evt.hiddenTime && !evt.hidden){
			if(evt.browser){
				$('#main').find('a.browser[data-key=' + evt.displayTime + ']').prependTo('#timeline .content');
				unbindLinks();
				bindLinks();
			} else {
				$('#main').find('div[data-key=' + evt.displayTime + ']').prependTo('#timeline .content');
			}
			evt.hidden = true;
		}
	}
}

function displayMarker(evt){
	console.log('hey');
	var evtMarker = $('<a>').addClass('evt').attr('href', '#').attr('data-key', evt.displayTime).text('.');
	evtMarker.css({
		left: 50 * 100 / $('#player nav').width() + evt.displayTime * 100 / player.media.duration + '%'
	}).appendTo('#player nav')
	evtMarker.on('click', goToMarker);
}

function goToMarker(e){
	e.preventDefault();
	player.setTime(e, $(this).data('key'));
}

function bindLinks(){
	$('a.browser').on('click', showBrowser);
}

function unbindLinks(){
	$('a.browser').off('click', showBrowser);
}

function showBrowser(e){
	e.preventDefault();
	player.pause();
	var url = $(this).data('url');

	if(!$('#wrapper-rel').hasClass('display-browser')){
		$('#wrapper-rel').addClass('display-browser');
		$('#close-browser').on('click', hideBrowser);
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
	$('#close-browser').off('click', hideBrowser);
	player.play();
}

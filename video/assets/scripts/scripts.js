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
$('#progress-bar').on('click', player.setTime);


var cards = cards;

timeline.init({
	timeline: '#timeline .content',
	rendered: function(){
		console.log('displayed');
	}
});

// markers.init({

// })

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

$('#main').on('click', 'a.browser', showBrowser);
$('#player nav').on('click', 'a.evt', goToMarker);

function showBrowser(e){
	e.preventDefault();
	player.pause();
	var url = $(this).data('url');

	$('div#close-browser').addClass('visible');

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
	$('div#close-browser').removeClass('visible');
	$('#close-browser').off('click', hideBrowser);
	player.play();
}

function displayMarker(card){
	console.log('hey');
	var evtMarker = $('<a>').addClass('evt').attr('href', '#').attr('data-key', card.displayTime).text('.');
	evtMarker.css({
		left: 50 * 100 / $('#player nav').width() + card.displayTime * 100 / player.media.duration + '%'
	}).appendTo('#player nav')
	
}

function goToMarker(e){
	e.preventDefault();
	player.setTime(e, $(this).data('key'));
}





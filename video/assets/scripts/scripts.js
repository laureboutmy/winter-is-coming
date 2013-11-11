// SETUP
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
				var evtDiv = $('<div>').text(evt.content).addClass('evt visible').attr('data-key', evt.displayTime);
				evt.displayed = true;
				console.log(evt.displayed);
				$('#main').append(evtDiv);
				// placeMarker();
				var evtMarker = $('<a>').addClass('evt').attr('href', '#').attr('data-key', evt.displayTime).text('.');
				evtMarker.css({
					left: 50 * 100 / $('#player nav').width() + evt.displayTime * 100 / player.media.duration + '%'
				}).appendTo('#player nav')
				evtMarker.on('click', goToMarker);
			} 
			if(currentTime > evt.hiddenTime && !evt.hidden){
				$('#main').find('div[data-key=' + evt.displayTime + ']').prependTo('#timeline');
				evt.hidden = true;
			}
		}
	}

	function goToMarker(e){
		e.preventDefault();
		player.setTime(e, $(this).data('key'));
	}

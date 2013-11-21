var player = {
	params: {
		video: '#video',
		buffer: '#buffer',
		progress: '#progress',
		controller: '#control',
		button: '#button',
		duration: '#duration',
		volume: '#volume',
		file: 'random.json',
		loaded: function(){},
		playing: function(){},
		paused: function(){},
		randomized: function(){},
		onTimeUpdate: function(){},
		onVolumeChange: function(){},
		muted: function(){},

	},

	init: function(options){
		// this -> l'objet player
		this.prop = $.extend(this.params, options);
		this.media = $(this.prop.video)[0];
		
		$(this.prop.video).bind('timeupdate',this.updateProgress);
		$(this.prop.video).bind('volumechange',this.updateVolume);
	},

	load: function(){
		this.media.load();
		$(this.prop.video).on('canplaythrough', function(){
			player.prop.loaded.call(this);
			// Si on veut ajouter des arguments, on met this, blim, blam
		})
	},

	playPause: function(){
		if(player.media.paused){
			player.media.play();
			player.prop.playing.call(this);
		} else {
			player.media.pause();
			player.prop.paused.call(this);
		}
	}, 

	play: function(){
		if(player.media.paused){
			player.media.play();
			player.prop.playing.call(this);
		} 
	}, 

	pause: function(){
		if(!player.media.paused){
			player.media.pause();
			player.prop.paused.call(this);
		}
	},

	setTime: function(e, time){
		e.stopPropagation();

		if(time){
			player.media.currentTime = time;
			return;
		} else {
			console.log(e);
			if(e.offsetX == undefined){
				xPos = e.pageX - $(player.prop.control).offset().left;
			} else {
				xPos = e.offsetX;
			}
			console.log(player.media.duration);
			player.media.currentTime = xPos * player.media.duration / $(player.prop.control).width();
		}
		
	},

	updateProgress: function(){
		player.prop.onTimeUpdate.call(this, player.media.currentTime);

		var progressW = player.media.currentTime * 100 / player.media.duration;
		$(player.prop.progress).width(progressW + '%');
		
		var bufferW = player.media.buffered.end(0) * 100 / player.media.duration;
		$(player.prop.buffer).width(bufferW + '%');
	}, 

	random: function(e){
		e.stopPropagation();
		$.ajax({
			url: player.prop.file,
			dataType: 'json', 
			success: function(data){
				// $(player.property.video).children(0).attr('src', data);
				console.log(data);
				var source = data[Math.floor(Math.random() * data.length)];
				$(player.prop.video).children(0).attr('src', source.src);
				player.load();
				player.prop.randomized.call(this);
			}
		});
		// $.getJSON(player.prop.file, function(data){
		// 	console.log(data);
		// });
	},

	setVolume: function(e){
		player.media.volume = e.offsetX * 1 / $(player.prop.volume).find('.level').width();
	},

	updateVolume: function(){
		player.prop.onVolumeChange.call(this);
		var volumeW = player.media.volume * 100 / 1;
		$(player.prop.volume).find('.handle').width(volumeW + '%'); 
	},

	mute: function(){
		if(player.media.muted){
			player.media.muted = false;

		} else {
			player.media.muted = true;
		}
		 
		player.prop.muted.call(this, player.media.muted);
	},

	getDuration: function(){
		var duration = Math.floor(player.media.duration);
		var durationMin = Math.floor(duration/60) + '';
		var durationSec = Math.floor(duration%60) + '';
		if(durationSec.length < 2){ durationSec = ' 0'+ durationSec; }
		if(durationMin.length < 2){ durationMin = ' 0' + durationMin; }
		$(player.prop.duration).find('.duration').text(durationMin + ':' + durationSec);
	},

	getCurrentTime: function(){
		var currentTime = Math.floor(player.media.currentTime);
		var currentTimeSec = Math.floor(currentTime%60) + '';
		var currentTimeMin = Math.floor(currentTime/60) + '';
		if(currentTimeSec.length < 2){ currentTimeSec = '0' + currentTimeSec; }
		if(currentTimeMin.length < 2){ currentTimeMin = '0' + currentTimeMin; }
		$(player.prop.duration).find('.current-time').text(currentTimeMin + ':' + currentTimeSec );
	},
	// Returns the current time for Twitter hashtag
	getTime : function(){
		return parseInt(player.media.currentTime/60);
	}
}

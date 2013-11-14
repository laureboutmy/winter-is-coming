var player = {
	params: {
		video: '#video',
		buffer: '#buffer',
		progress: '#progress',
		controller: '#control',
		button: '#button',
		file: 'random.json',
		loaded: function(){},
		playing: function(){},
		paused: function(){},
		randomized: function(){},
		onTimeUpdate: function(){}
	},

	init: function(options){
		// this -> l'objet player
		this.prop = $.extend(this.params, options);
		this.media = $(this.prop.video)[0];
		$(this.prop.video).bind('timeupdate',this.updateProgress);
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
		if(time){
			player.media.currentTime = time;
		} else {
			player.media.currentTime = e.offsetX * player.media.duration / $(this).width();
		}
		
	},

	/* Rajout Dorian */
	getTime : function()
	{
		return parseInt(player.media.currentTime/60);
	},
	/* /Rajout Dorian */

	updateProgress: function(){
		player.prop.onTimeUpdate.call(this, player.media.currentTime);

		var progressW = player.media.currentTime * 100 / player.media.duration;
		$(player.prop.progress).width(progressW + '%');
		
		var bufferW = player.media.buffered.end(0) * 100 / player.media.duration;
		$(player.prop.buffer).width(bufferW + '%');
	}, 

	random: function(e){
		e.preventDefault();
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
	}
}

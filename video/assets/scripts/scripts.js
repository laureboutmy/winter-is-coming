$(function(){
	// var player = document.getElementById('player');
	// player.addEventListener('timeupdate', checkTime);

	

	var p = new player({
	    media: '#video',
	  	controller: '#progress-bar',
	  	progress: '#progress-bar :nth-child(1)',
	  	buffer: '#progress-bar :nth-child(2)',
	  	loaded: function(player){ 
	  		document.getElementById('button').classList.remove('loading');
	  		console.log('loaded');
	  		player.playPause(); 
	  	},
	  	played: function(){
	  		document.getElementById('video').classList.add('play');
	  		document.getElementById('button').classList.add('off');
	  		console.log('playing'); 
	  	},
	  	paused: function(){
	  		document.getElementById('button').classList.remove('off');
	  		console.log('paused'); 
	  	},
	  	moved: function(){
	  	  	console.log('video moved'); 
	  	},
	  	onTimeUpdate: checkTime
	});
  	document.getElementById('button').addEventListener('click', p.playPause, false);
  	document.getElementById('progress-bar').addEventListener('click', p.setVideoTime, false);
  	document.getElementById('video').addEventListener('click', p.playPause, false);



  	function checkTime() {
		if(this.currentTime > 2){
			$('.e').addClass('visible');
		}
		if(this.currentTime > 4){
			$('.e').prependTo('#feed')
		}
		if(this.currentTime > 5){
			$('.f').addClass('visible');
		}
		if(this.currentTime > 7){
			$('.f').prependTo('#feed')
		}

		if(this.currentTime > 7){
			$('.g').addClass('visible');
		}
		if(this.currentTime > 8){
			$('.g').prependTo('#feed')
		}

		if(this.currentTime > 9){
			$('.h').addClass('visible');
		}
		if(this.currentTime > 12){
			$('.h').prependTo('#feed')
		}
	}
});
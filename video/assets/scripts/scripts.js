$(function(){
	var player = document.getElementById('player');
	player.addEventListener('timeupdate', checkTime);

	function checkTime(e) {
		console.log(player.currentTime)
		if(player.currentTime > 2.927947){
			$('p.current-time').text('BOUM' + player.currentTime);
		}
	}

});
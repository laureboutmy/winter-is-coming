var mCurrentTime = {
	time:'',
	sendTime: function(){
		pusher.timeAction('sendTime', {'message': player.media.currentTime} );
		console.log(JSON.stringify(player.media.currentTime));
	}
}
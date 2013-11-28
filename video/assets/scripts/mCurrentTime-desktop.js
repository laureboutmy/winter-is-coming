var mCurrentTime = {
	time:'',
	sendTime: function(){
		pusher.action('sendTime', {'message': player.media.currentTime} );
		console.log(JSON.stringify(player.media.currentTime));
	}
}
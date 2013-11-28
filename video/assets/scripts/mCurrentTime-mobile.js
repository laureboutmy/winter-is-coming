var mCurrentTime = {
	time:"0",
	getTime: function(){
		pusher.action('getTime', {'message':''});
		return this.time;
	}
}
var mCurrentTime = {
	time:"0",
	getTime: function(){
		pusher.timeAction('getTime', {'message':''});
		return this.time;
	}
}
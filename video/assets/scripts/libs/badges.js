var badges={
	default:{
		acolyte:"unclaimed",
		envoy:"unclaimed",
		dovecot:"unclaimed",
		lannister:"unclaimed",
		couch_potato:"unclaimed",
		please_not_the_wolf:"unclaimed",
		savant:"unclaimed",
		walder_frey:"unclaimed"
	},
	init:function(){
		if(localStorage.getItem("badges") == null){
			localStorage.setItem("badges", JSON.stringify(badges.default));
		}
	},


	claim:function(data){
			temp_storage = JSON.parse(localStorage["badges"]);
			temp_storage[data] = "claimed";
			localStorage.setItem("badges", JSON.stringify(temp_storage));
	},
	render:function(data){
	if(localStorage.getItem("badges")== null){
		return false;
		}
		else{
			return JSON.parse(localStorage["badges"])[data];
		}
	}
}
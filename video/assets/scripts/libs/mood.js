var mood = {

	params : {
		shared : function(){}
	},

	init : function(){
		this.prop = $.extend(this.params);
	},

	shareMood : function(moodId){
		console.log("MOOD : "+moodId);
		FB.api("/me/gotplayer:feel",
			"POST",
			{amazed : moodId},
			function(response){
				console.log(response);
			}
		);
		mood.prop.shared.call(this);
	}
}
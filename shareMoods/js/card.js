var card = {

	params : {
		showed : function(){},
		hid : function(){},
		shared : function(){}
	},

	init : function(){
		this.prop = $.extend(this.params);
	},

	show : function(e){
		e.preventDefault();
		card.prop.showed.call(this);
	},

	hide : function(e){
		e.preventDefault();
		card.prop.hid.call(this);
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
		card.prop.shared.call(this);
	}

}
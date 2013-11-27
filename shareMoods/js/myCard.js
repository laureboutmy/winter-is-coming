card.init({

	showed : function(){
		// Show the card
		// $("#card").addClass('visible');
		console.log("showed");
	},

	hid : function(){
		// Hide the card
		// $("#card").addClass('hidden');
		console.log("showed");
	},

	shared : function(){
		// Shared the mood on Facebook
		console.log("shared");
	}
});


$(".shareMood").on("click", function(e)
{
	card.shareMood($(e.target).attr('data-mood'));
});
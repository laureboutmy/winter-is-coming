$(document).ready(function() {

	

	$('#tweet-box textarea').keypress(function(e){
		// If user didn't press enter
		if(e.keyCode != 13){

			var length  = 140 - $('#tweet-box textarea').val().length;
			$('.nb-chars').html(length);
			if(length == 0){
				$('.nb-chars').css('color', 'red');
			} else {
				$('.nb-chars').css('color', '#fff');
			}

		} 
	});


});
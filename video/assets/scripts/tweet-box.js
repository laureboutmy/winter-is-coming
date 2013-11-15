$(document).ready(function() {

	$('#tweet-box textarea').on('click', function() {
		console.log('hey');
		$("#tweet-box textarea").addClass('.focus')
	});

	$('#tweet-box textarea').keypress(function(e){
		// If user didn't press enter
		if(e.keyCode != 13){

			var length  = 140 - $('#tweet-box textarea').val().length;
			$('.nb-chars').html(length);
			if(length == 0){
				$('.nb-chars').css('color', 'red');
			} else {
				$('.nb-chars').css('color', 'black');
			}

		} else {
			$.ajax({
                url: 'assets/twitter/sendTweet.php', 
                type: 'post', 
                data: {
                	tweet: $('#tweet-box textarea').val(),
                	hashtag: 'GoT',
                	minutes: getPlayerTime()
                },
                success: function() { 
                    $('.nb-chars').html('Tweet envoyé');
                    $('#tweet-box textarea').val('')
                }
            });
		}
	});


});
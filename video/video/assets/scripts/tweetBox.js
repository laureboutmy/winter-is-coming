$(document).ready(function() {

	$("#tweetBox textarea").on("click", function()
	{
		$("#tweetBox textarea").animate(
			{height : '60'}, 400);
	});

	$("#tweetBox textarea").keypress(function(e)
	{
		// If user didn't press enter
		if(e.keyCode != 13){

			var length  = 140 - $("#tweetBox textarea").val().length;
			$(".nbCharacter").html(length);
			if(length == 0){
				$(".nbCharacter").css("color","red");
			}
			else
			{
				$(".nbCharacter").css("color","black");
			}
		}
		// If he did
		else
		{
			$.ajax({
                url: 'assets/twitter/sendTweet.php', 
                type: 'post', 
                data: {
                	tweet : $("#tweetBox textarea").val(),
                	hashtag : 'GoT',
                	minutes : getPlayerTime()
                },
                success: function() { 
                    $(".nbCharacter").html("Tweet envoyé");
                    $("#tweetBox textarea").val("")
                }
            });
		}
	});
});
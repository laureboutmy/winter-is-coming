
var tweet = {
	params: {
		textarea: 'textarea',
		favorited: function(){},
		replying: function(){},
		retweeted: function(){},
		submitted: function(){}
	},
	init: function(options){
		this.prop = $.extend(this.params, options);
	},

	reply: function(e){

		/*
			Get the username 
			Of the user we want to reply to
		*/
		e.preventDefault();
		var screenName = $('.reply').attr('data-username');
		$(tweet.prop.textarea).val("@" + screenName);
		tweet.prop.replying.call(this);
	},
	retweet: function(e){

		/*
			Retweet or Unretweet a tweet
			Calling the retweeting or unretweetting PHP function
		*/

		e.preventDefault();
		var _this = $(this);
		var idTweet = $(e.target).attr('data-tweetid');
		// If the element has class retweeted, we unretweet it 
		if($("button.retweet[data-tweetid='"+idTweet+"']").hasClass('retweeted')){
			$.ajax({
		        url: 'assets/twitter/actions/unretweet.php', 
		        type: 'post', 
		        data: {
		        	id: idTweet
		        },
		        success: function() { 
		        	tweet.prop.unretweeted.call(this, _this);
		        }
		    });
		}
		// If the element doesn't have class retweeted, we retweet it
		else{
			$.ajax({
		        url: 'assets/twitter/actions/retweet.php', 
		        type: 'post', 
		        data: {
		        	id: idTweet
		        },
		        success: function() { 
		        	tweet.prop.retweeted.call(this, _this);
		        }
		    });
		}
	},

	favorite: function(e){

		/*
			Favorite or Unfavorite a tweet
			Calling the favoriting or unfavoriting PHP function
		*/

		e.preventDefault();
		var _this = $(this);
		var idTweet = $(e.target).attr('data-tweetid');
		// If the element has class favorited, we unfavorite it 
		if($("button.favorite[data-tweetid='"+idTweet+"']").hasClass('favorited')){

			$.ajax({
		        url: 'assets/twitter/actions/unfavorite.php', 
		        type: 'post', 
		        data: {
		        	id: idTweet
		        },
		        success: function() { 
		        	tweet.prop.unfavorited.call(this, _this);
		        }
		    });
		}
		else{
			$.ajax({
		        url: 'assets/twitter/actions/favorite.php', 
		        type: 'post', 
		        data: {
		        	id: idTweet
		        },
		        success: function() { 
		        	tweet.prop.favorited.call(this, _this);
		        }
		    });
		}
	},

	submit: function(e){

		/*
			Submit a tweet
			Calling the retweeting PHP function
		*/

		e.preventDefault();
		if($(tweet.prop.textarea).val() == ''){
			return;
		}
		$.ajax({
	        url: 'assets/twitter/sendTweet.php', 
	        type: 'post', 
	        data: {
	        	tweet: $(tweet.prop.textarea).val(),
	        	hashtag: 'GoT',
	        	minutes: player.getTime()
	        },
	        success: function() { 
	        	tweet.prop.submitted.call(this);
	        }
	    });
	}
}

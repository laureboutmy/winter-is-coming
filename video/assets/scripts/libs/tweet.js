
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
		e.preventDefault();
		var screenName = $('.reply').attr('data-username');
		$(tweet.prop.textarea).val("@" + screenName);
		tweet.prop.replying.call(this);
	},
	retweet: function(e){
		e.preventDefault();
		var _this = $(this);
		var idTweet = $(e.target).attr('data-tweetid');
		// If the element has class retweeted, we unretweet it 
		if($("button.retweet[data-tweetid='"+idTweet+"']").hasClass('retweeted')){
			console.log("DEJA RETWEET");
			$.ajax({
		        url: 'assets/twitter/actions/unretweet.php', 
		        type: 'post', 
		        data: {
		        	id: idTweet
		        },
		        success: function() { 
		        	//tweet.prop.retweeted.call(this, _this);
		        	/* RAJOUT DORIAN */
		        		// removing class retweeted 
		        		$("button.retweet[data-tweetid='"+idTweet+"']").removeClass('retweeted');
		        	/* /RAJOUT DORIAN */
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
		        	/* RAJOUT DORIAN */
		        		// Adding class retweeted 
		        		$("button.retweet[data-tweetid='"+idTweet+"']").addClass('retweeted');
		        	/* /RAJOUT DORIAN */
		        }
		    });
		}
	},

	favorite: function(e){
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
		        	//tweet.prop.favorited.call(this, _this);

		        	/* RAJOUT DORIAN */
		        		// Removing class favorited 
		        		$("button.favorite[data-tweetid='"+idTweet+"']").removeClass('favorited');
		        	/* /RAJOUT DORIAN */
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

		        	/* RAJOUT DORIAN */
		        		// Adding class favorited 
		        		$("button.favorite[data-tweetid='"+idTweet+"']").addClass('favorited');
		        	/* /RAJOUT DORIAN */
		        }
		    });
		}
	},

	submit: function(e){
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


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
	},

	favorite: function(e){
		e.preventDefault();
		var _this = $(this);
		var idTweet = $(e.target).attr('data-tweetid');
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
	},

	submit: function(e){
		e.preventDefault();
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

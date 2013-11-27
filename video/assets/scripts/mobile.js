pusher.subscribe("mobile");

var current = 'remote';
function changeWindow(e){
    e.preventDefault();
    var future = $(this).attr('href');
    if(future == current){ return; }
    if(future == 'remote'){
        $('section#feed').addClass('hidden');
        $('section#remote').removeClass('hidden');
        $('a.remote').addClass('hidden');
        $('a.feed').removeClass('hidden');
    } else if(future == 'feed'){
        $('section#feed').removeClass('hidden');
        $('section#remote').addClass('hidden');
        $('a.feed').addClass('hidden');
        $('a.remote').removeClass('hidden');
    }
    current = future;
}

tweet.init({

    textarea: '#tweet-box textarea[name=tweet]',
    
    submitted: function(){
        // badges.claim('envoy');
        // badgeDovecot++;
        // localStorage.setItem('badgeDovecot', JSON.stringify(badgeDovecot));
        // if(badgeDovecot == 5){ badges.claim('dovecot'); }
        $('#tweet-box textarea').blur();
        $('.nb-chars').html('Tweet envoyé');
        $('#tweet-box textarea').val('');
        // $('#tweet-box').removeClass('focused');
        $('#feed #tweet-feed').height($(window).height() - 75);
        
    },

    retweeted: function(){
        idTweet = this.data.replace('id=','');
        $("button.retweet[data-tweetid='"+idTweet+"']").addClass('retweeted');
    },

    favorited: function(){
        idTweet = this.data.replace('id=','');
        $("button.favorite[data-tweetid='"+idTweet+"']").addClass('favorited');
    },

    unretweeted: function(){
        $("button.retweet[data-tweetid='"+idTweet+"']").removeClass('retweeted');
    },

    unfavorited: function(){
        $("button.favorite[data-tweetid='"+idTweet+"']").removeClass('favorited');
    }
})

$('header nav').on('click', 'a', changeWindow);

$('ul#tweets').on('swipeleft', 'li.tweet', function(){
        $(this).find('div.actions').removeClass('visible');
    });
$('ul#tweets').on('swiperight', 'li.tweet', function(){
        $(this).find('div.actions').addClass('visible');
    });
$('#tweet-feed').on('click', 'button.reply', tweet.reply);
$('#tweet-feed').on('click', 'button.retweet', tweet.retweet);
$('#tweet-feed').on('click', 'button.favorite', tweet.favorite);
$(document).on('keydown', function(e){ 
    if(e.keyCode == 13){
       tweet.submit();
    }
});

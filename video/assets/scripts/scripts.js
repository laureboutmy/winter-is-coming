/*
    Badge Setup
*/
var badgeSavant = 0;
if(localStorage.getItem('badgeDovecot') == null){
	localStorage.setItem('badgeDovecot', JSON.stringify(0));
	var badgeDovecot = 0;
} else {
	var badgeDovecot = JSON.parse(localStorage.getItem('badgeDovecot'))
}

var CURRENTTIME = 0;
// $(".nano").nanoScroller();

/*
    Badge Initialization
*/
badges.init({
	rendered: function(name){
		$('.' + name).parent().addClass('claimed');
		$('span.nb-badges').text(badges.getNumber());
	},
	claimed: function(name){
		$('span.nb-badges').text(badges.getNumber());
		$('div.notification').find('.badge').addClass(name);
		$('div.notification').addClass('visible');
		$('div.notification').delay(4000).queue(function(){ 
			$('div.notification').removeClass('visible').delay(4000).queue(function(){ 
				$('div.notification').find('.badge').removeClass(name);
			}) 
		})
		
	}
});

/*
    Video Initialization
*/
player.init({
	video: '#video',
	progress: '.progress',
	volume: '#volume',
	control: '#progress-bar',
	button: '#play-btn',
	file: 'random.json',
	loaded: function(){
		console.log('loaded');
		player.setTime('undefined', CURRENTTIME);
		player.getDuration();
		$(player.prop.video).removeClass('hidden');
		
	},
	playing: function(){
		console.log('playing');
		$(player.prop.button).find('img').attr('src', 'assets/images/template/btn-pause.png');
	},
	paused: function(){
		$(player.prop.video).removeClass('play');
		$(player.prop.button).find('img').attr('src', 'assets/images/template/btn-play.png');
	},
	onTimeUpdate: function(currentTime){
		checkTime(currentTime);
		player.getCurrentTime();
		localStorage.setItem("currentTime", JSON.stringify(player.media.currentTime));
	},
	muted: function(muted){
		if(muted){
			$('img.mute').attr('src', 'assets/images/template/btn-volume-muted.png');
			$('#volume .handle').addClass('muted');
		} else {
			$('img.mute').attr('src', 'assets/images/template/btn-volume.png');
			$('#volume .handle').removeClass('muted');
		}
	}
});

player.load();

/*
    Set Video Width
*/
function setWidth(){
	$('div.close-browser').width(($(window).width() / 2) - 260);
	$('#player').width($(window).width() - 260);
	$('#timeline.nano, #badges.nano, #feed').height($(window).height() - 40);
	if($('#feed #tweet-box').hasClass('focused')){
		$('#feed #tweet-feed').height($(window).height() - 75);
	} else {
		$('#feed #tweet-feed').height($(window).height() - 165);
	}
}
setWidth();

/*
    Enter in Fullcreen Mode
*/
var isFullscreen = false;
function enterFullscreen() {
	var element = document.documentElement;
	if(!isFullscreen){
		if(element.requestFullScreen) { element.requestFullScreen(); } 
		else if(element.mozRequestFullScreen) { element.mozRequestFullScreen(); } 
		else if(element.webkitRequestFullScreen) { element.webkitRequestFullScreen(); } 
		else { alert('Your browser does not support fullscreen.') }  	
	} else {
		if(document.cancelFullScreen) { document.cancelFullScreen(); } 
		else if(document.mozCancelFullScreen) { document.mozCancelFullScreen(); } 
		else if(document.webkitCancelFullScreen) { document.webkitCancelFullScreen(); }
	}
}

/*
    Fullscreen Listeners
*/
$(document).on('fullscreenchange, mozfullscreenchange, webkitfullscreenchange', function(e) {
	if(!isFullscreen){
		isFullscreen = true;
		$('#fullscreen-btn').find('img').attr('src', 'assets/images/template/btn-windowed.png').attr('alt', 'Quit fullscreen');
	} else {
		isFullscreen = false;
		$('#fullscreen-btn').find('img').attr('src', 'assets/images/template/btn-fullscreen.png').attr('alt', 'Enter fullscreen');
	}
});

/*
    Manage Sidebar and Navigation
*/
var currentSidebar = 'timeline';
function changeSidebar(e){
	e.preventDefault();
	var futureSidebar = $(this).attr('href');
	if(futureSidebar == currentSidebar) { return; } 
	$('#timeline, #feed, #badges').removeClass('visible');
	$('#sidebar nav i.current').removeClass('current');
	if(futureSidebar == 'timeline'){
		$('#timeline').addClass('visible');
		$('#sidebar nav i.timeline').addClass('current');
	} else if(futureSidebar == 'feed'){
		$('#feed').addClass('visible');
		$('#sidebar nav i.feed').addClass('current');
	} else if(futureSidebar == 'badges'){
		$('#badges').addClass('visible');
		$('#sidebar nav i.badges').addClass('current');
	} 

	if($('#tweet-box').hasClass('focused') && $('#tweet-box textarea').val().length == 0){ $('#tweet-box').removeClass('focused'); }
	currentSidebar = futureSidebar;
}

/*
    JSONP
*/
var cards = cards;

/*
    Timeline Initialization
*/
timeline.init({
	timeline: '#timeline .content',
	rendered: function(){
		$('#timeline div.wait').addClass('hidden');
		window.setTimeout(function(){
			$('#timeline article.card.hidden, #timeline article.card.facebook.hidden, #timeline article.card.soundtrack.hidden, #timeline article.card.stats.hidden').removeClass('hidden');

		}, 200);
	}
});

/*
    Link betweet
    The Video
    And The Cards
*/
function checkTime(currentTime) {
	for (key in cards) {
		var card = cards[key];
		if(currentTime > card.displayTime && !card.displayed){
			timeline.render(card);
			timeline.addMarker(card);
		}
	}
}

var sound = new buzz.sound("assets/audio/ramin-djawadi", {
    formats: [ "mp3" ],
    preload: true,
    autoplay: false,
    loop: true
});


/*
    Show Browser
*/
function showBrowser(e){
	e.preventDefault();
	player.pause();
	badgeSavant++;
	if(badgeSavant == 8){
		badges.claim('savant');
	}
	var url = $(this).data('url');

	$('div.close-browser').addClass('visible');
	if(sound.isPaused){
		sound.play().setVolume(10);
	}
	if(!$('#wrapper-rel').hasClass('display-browser')){
		$('#wrapper-rel').addClass('display-browser');
		$('.close-browser').on('click', hideBrowser);
	}

	$.ajax({
		url: url,
		beforeSend: function(){
			$('#browser > div').html($('<div>').addClass('loader'));
		},
		success: function(data){
			$('#browser > div').html(data);

		}
	});
	if($(this).hasClass('gif')){
		$.getScript('assets/scripts/tumblr.js');
		$.getScript('http://platform.tumblr.com/v1/share.js');
	}
	if($(this).hasClass('video')){ sound.stop(); }
}

/*
    Close Browser
*/
function hideBrowser(e){
	e.preventDefault();
	$('#wrapper-rel').removeClass('display-browser');
	$('div.close-browser').removeClass('visible');
	$('#browser div.content').html('');
	$('.close-browser').off('click', hideBrowser);
	if(!sound.isPaused()){ sound.stop(); }
	player.play();

}

/*
    Go To Marker
*/
function goToMarker(e){
	e.preventDefault();
	var key = $(this).data('key');
	player.setTime(e, key);

	$('#timeline div').animate({
		scrollTop: $('article.card[data-key=' + key + ']').offset().top + 'px'
	}, {
		duration: 500,
		easing: 'swing'
	});
}

/*
    Events to trigger 
    If Connected to Twitter
*/
if(signedInTwitter){
	$('#landing-page #unlock-badges .sign-in').addClass('hidden');
	$('#landing-page #unlock-badges .signed-in').removeClass('hidden');
	$("#landing-page #unlock-badges .signed-in h2 span.welcome").html('Welcome!');
	$("#landing-page #unlock-badges .signed-in .sign-in-twitter").hide();

	badges.claim('acolyte');
	$("#twitter-connect").hide();
	$("#user").show();
	$("#tweet-box").show();
	$('.tweets').tweetMachine('#GoT');
	$("#tweet-feed .content").show();
} else {
	$("#user").hide();
	$("#tweet-box").hide();
	$("#tweet-feed .content").hide();
}

/*
	Sign in with Twitter using jQuery Pop-up and Ajax
*/
function twitterSignIn(e){
	e.preventDefault();
	$.oauthpopup({
		path: 'assets/twitter/twitterConnect.php',
		callback: function(){
			$.ajax({
				url: 'assets/twitter/responseConnect.php', 
				success: function(response) { 
					$('#landing-page #unlock-badges .sign-in').addClass('hidden');
					$('#landing-page #unlock-badges .signed-in').removeClass('hidden');
					$("#landing-page #unlock-badges .signed-in h2 span").html('Welcome!');
					$("#landing-page #unlock-badges .signed-in .sign-in-twitter").hide();
					badges.claim('acolyte');

					$('#user img').attr('src', response.profile_image_url);
					$('#user .name').html(response.name);
					$('#user .screen_name a').attr('href', 'http://twitter.com/'+response.screen_name);
					$('#user .screen_name a').html('@'+response.screen_name);

					$('#twitter-connect').fadeOut(500, function(){
						$('#user').fadeIn(500);
						$('#tweet-box form').fadeIn(500);
					});

					$('.tweets').tweetMachine('#GoT');
					$('#tweet-feed .content').fadeIn(500);
	     	  }
	  		});
		}
	});
}

/*
    Initalize Tweet Actions
*/
tweet.init({
	textarea: '#tweet-box textarea[name=tweet]',
	replying: function(){
		extendForm();
	},
	submitted: function(){
		badges.claim('envoy');
		badgeDovecot++;
		localStorage.setItem('badgeDovecot', JSON.stringify(badgeDovecot));
		if(badgeDovecot == 5){ badges.claim('dovecot'); }
		$('.nb-chars').html('Tweet envoyé');
        $('#tweet-box textarea').val('');
        $('#tweet-box').removeClass('focused');
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
});

/*
    Exetends tweet-box
    On Focus
*/
function extendForm(){
	if(!$('#tweet-box').hasClass('focused')){
		$('#tweet-box').addClass('focused');
		$('#feed #tweet-feed').height($(window).height() - 165);
	} 
}

/*
    Count Characters
    For the Tweet
*/
function countChar(){
	// If user didn't press enter
	var length = 140 - $('#tweet-box textarea').val().length;
	if(length == 0){
		$('.nb-chars').addClass('visible').html('no char left!').addClass('error');
	} else {
		$('.nb-chars').addClass('visible').html(length + ' chars left').removeClass('error')
	}
}

/*
    Launch Player
    On click on 
    "Launch the episode"
*/
function launchPlayer(e){
	if(e != 'undefined') { e.preventDefault(); }
	$('#landing-page div').stop().animate({
		scrollTop: 0 + 'px'
	}, {
		duration: '300',
		easing: 'swing',
		complete: function(){
			$('#landing-page').addClass('hidden');
			window.setTimeout(function(){
				$('#landing-page').hide();
				$('#sidebar').addClass('visible');
				window.setTimeout(function(){
					$('#player div.nav').addClass('visible');
					$('#main nav.menu').addClass('visible');
					window.setTimeout(function(){
						$('#player div.nav').removeClass('visible');
						$('#main nav.menu').removeClass('visible');
						player.play();
					}, 1000);
				}, 300);
			}, 600);
		}
	});
}

//function displayMenu(){
//	$('#main nav.menu').addClass('visible');
//	$('#main nav.menu').on('mouseover', function(){
//		window.clearTimeout(timeout);
//	});
//	var timeout = window.setTimeout(function(){
//		$('#main nav.menu').removeClass('visible');
//		$('#main nav.menu').off('mouseover');
//	}, 2000)
//}

/*
    Display or Hide Popin
*/
function displayPopin(e){
	e.preventDefault();
	var pop = $(this).data('pop');
	player.pause();
	$('#wrapper-rel').find('#' + pop).addClass('visible').find('.close-browser').on('click', function(){
		$(this).parent().removeClass('visible');
	});
}
 
/*
    Facebook Custom Actions Initialization
*/
mood.init({
	shared : function(){
		// Shared the mood on Facebook
		console.log("Mood shared");
	}
});

/*
	Sharing moods on Facebook
*/
$('#timeline').on('click', 'ul.mood li', function(e){
	var _this = this;
	var moodId = $(_this).parent().attr("data-moodId");
	console.log(moodId);
	FB.getLoginStatus(function(response) {
	  if (response.status === 'connected') {
	  	mood.shareMood($(_this).attr('data-mood'));
	  	$(_this).addClass('current');
	  	$("#timeline ul.mood[data-moodId='"+moodId+"']").children().addClass('disabled');
	  	$("#timeline ul.mood li.disabled").on('click',function(){
	  		return false;
	  	});
	  } else {
	    FB.login(handleSessionReponse, {scope: scope});
	  }
	});
});

/*
	On Mobile, Subscripe to the desktop 
	With pusher
*/
pusher.subscribe('desktop');

/*
	Get Session Id 
	To Send It To Mobile
*/
function getSessionId(){
    var filePath = "assets/qrcode/getSessionId.php";
    xmlhttp = new XMLHttpRequest();
    xmlhttp.overrideMimeType('text/plain');
    xmlhttp.open("GET",filePath,false);
    xmlhttp.send(null); 
    var fileContent = xmlhttp.responseText;
    return fileContent;
}
 
/*
	Set QRcode
*/
$('#qrcode').attr('src', 'https://chart.googleapis.com/chart?cht=qr&chs=256x256&choe=UTF-8&chl=' + getSessionId() + '%23' + pusher.params.channel);

/*
	Listeners
*/
$('.sign-in-twitter').on('click', twitterSignIn);
$('a.launch-player').on('click', launchPlayer);
$('#video, #play-btn').on('click', player.playPause);
$('#progress-bar').on('click', player.setTime);
$('#volume .level').on('click', player.setVolume);
$('#volume .mute').on('click', player.mute);
$('#sidebar nav').find('a').on('click', changeSidebar);
$('#main').on('click', 'a.browser', showBrowser);
$('#main').on('click', 'a.pause-video', player.pause);
$('#progress-bar').on('click', 'a.marker', goToMarker);
$(window).on('resize', setWidth);
$('#fullscreen-btn').on('click', enterFullscreen);
$('#tweet-feed').on('click', 'button.reply', tweet.reply);
$('#tweet-feed').on('click', 'button.retweet', tweet.retweet);
$('#tweet-feed').on('click', 'button.favorite', tweet.favorite);
$('#tweet-box textarea[name=tweet]').on('click', extendForm);
$('#tweet-box form').submit(tweet.submit);
$('#tweet-box textarea').on({
	'keydown': countChar, 
	'change': countChar
});
// $('#player > div').on('mouseover', displayMenu);
$('a.about, a.mobile').on('click', displayPopin);

$(document).on('keydown', function(e){ 
	if(!$('#tweet-box').hasClass('focused')){
		if(e.keyCode == 32){
			player.playPause();
		}
	}
});

// $('#timeline').on('click', 'ul.mood li', function(e){
// 	var moodId = $(e.target).parent().attr("data-moodId");
// 	console.log(moodId);
// 	FB.getLoginStatus(function(response) {
// 	  if (response.status === 'connected') {
// 	  	mood.shareMood($(e.target).attr('data-mood'));
// 	  	$("#timeline ul.mood[data-moodId='"+moodId+"']").children().addClass('disabled');
// 	  	$("#timeline ul.mood li.disabled").on('click',function(){
// 	  		return false;
// 	  	});
// 	  } else {
// 	    FB.login(handleSessionReponse, {scope: scope});
// 	  }
// 	});
// });
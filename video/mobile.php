<?php
	session_start();
	include("assets/twitter/inc/twitterOAuth.php");

	$signed_in_twitter = isset($_SESSION['profile_image_url']) && !empty($_SESSION['profile_image_url'])
					    		&& isset($_SESSION['name']) && !empty($_SESSION['name']) 
					    		&& isset($_SESSION['screen_name']) && !empty($_SESSION['screen_name']);
	if($signed_in_twitter) { echo '<script>var signedInTwitter = true;</script>'; } 
	else { echo '<script>var signedInTwitter = false;</script>'; }
?>
<!DOCTYPE html>
<html lang="en"  prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# gotplayer: http://ogp.me/ns/fb/gotplayer#">
<head>

	<meta charset="utf-8" />
	
	<title>WINTER IS COMING</title>
	
	<meta name="description" content="">
	<meta name="robots" content="index, follow" />

	<!-- OPEN GRAPH -->
	<meta property="fb:app_id" content="452234728214767" /> 
    <meta property="og:type"   content="gotplayer:got_episode" /> 
    <meta property="og:url"    content="http://winter-is-coming.dev:8888/video/" /> 
    <meta property="og:title"  content="The Rains of Castamere" /> 
    <meta property="og:image"  content="http://doriancamilleri.fr/player/customActionsHome/img/hodor.png" /> 
	<!-- /OPEN GRAPH -->

	<meta name="viewport" content="initial-scale=1.0, maximum-scale=1.0, user-scalable=no">

	<!--[if lt IE 9]>
	  <script src="//html5shiv.googlecode.com/svn/trunk/html5.js"></script>
	  <script>window.html5 || document.write('<script src="js/vendor/html5shiv.js"><\/script>')</script>
	<![endif]-->

	<!-- STYLESHEETS -->      
	<link href="assets/styles/reset.css" rel="stylesheet" type="text/css" /> 
	<link href="assets/styles/fonts.css" rel="stylesheet" type="text/css" />
	<link href="assets/styles/mobile.css" rel="stylesheet" type="text/css" />
    <!-- /STYLESHEETS -->
	

</head>
<body>
<header>
	<h1>Game of Thrones</h1>
	<nav>
		<a href="feed" class="feed"><span><i class="feed">Feed</i></span></a>
		<a class="remote hidden" href="remote"><span><i class="remote">Remote</i></span></a>
	</nav>
</header>
<section id="remote">
	<div id="play-btn">
		<img src="assets/images/mobile/mob-i-play.png" alt="Play" />
	</div>
	<div class="episode">
		<h2>The Rains Of Castamere 
			<span>Game Of Thrones - S03E09</span></h2>
		<div id="volume">
			<img class="mute" src="assets/images/mobile/mob-i-volume.png" alt="Volume" />
		</div>
	</div>
</section>
<section id="feed" class="hidden">
	<div id="tweet-box">
		<div id="user">
    		<img src="http://pbs.twimg.com/profile_images/3703698859/06322cdabeb5587e5438aa7e0be5cb63_normal.jpeg" alt="profile_image">
    		<ul>
    			<li class="name">Laure</li>
    			<li class="screen_name"><a href="http://twitter.com/loupyestu" target="_blank">@loupyestu</a></li>
       		</ul>
       		<div class="clear"></div>
    	</div>
    	<form>
			<textarea name="tweet" placeholder="Post a tweet..." maxlength="140"></textarea>
			<span class="nb-chars"></span>
		</form>
	</div>
	<div id="tweet-feed">
		<ul id="tweets">
			<li class="tweet" style="opacity: 1;"><div class="meta"><img class="avatar" src="http://pbs.twimg.com/profile_images/378800000413394991/2cd24fe73a3483490ffcd68b8c28b59b_normal.jpeg"><a href="http://twitter.com/MonicaDema" class="name" target="_blank">Monica D</a><a href="http://twitter.com/MonicaDema" class="username" target="_blank">@MonicaDema</a><div class="clear"></div></div><p class="tweet-content">Fun fact - <a href="http://twitter.com/#!/search?q=%23tyrion" target="_blank">#tyrion</a> <a href="http://twitter.com/#!/search?q=%23lannister" target="_blank">#lannister</a>'s mom was my choir teacher <a href="http://twitter.com/#!/search?q=%23GoT" target="_blank">#GoT</a> <a href="http://t.co/vuAHInHE1Y" target="_blank">http://t.co/vuAHInHE1Y</a></p></li>
			<li class="tweet" style="opacity: 1;"><div class="meta"><img class="avatar" src="http://pbs.twimg.com/profile_images/378800000413394991/2cd24fe73a3483490ffcd68b8c28b59b_normal.jpeg"><a href="http://twitter.com/MonicaDema" class="name" target="_blank">Monica D</a><a href="http://twitter.com/MonicaDema" class="username" target="_blank">@MonicaDema</a><div class="clear"></div></div><p class="tweet-content">Fun fact - <a href="http://twitter.com/#!/search?q=%23tyrion" target="_blank">#tyrion</a> <a href="http://twitter.com/#!/search?q=%23lannister" target="_blank">#lannister</a>'s mom was my choir teacher <a href="http://twitter.com/#!/search?q=%23GoT" target="_blank">#GoT</a> <a href="http://t.co/vuAHInHE1Y" target="_blank">http://t.co/vuAHInHE1Y</a></p></li>
			<li class="tweet" style="opacity: 1;"><div class="meta"><img class="avatar" src="http://pbs.twimg.com/profile_images/378800000413394991/2cd24fe73a3483490ffcd68b8c28b59b_normal.jpeg"><a href="http://twitter.com/MonicaDema" class="name" target="_blank">Monica D</a><a href="http://twitter.com/MonicaDema" class="username" target="_blank">@MonicaDema</a><div class="clear"></div></div><p class="tweet-content">Fun fact - <a href="http://twitter.com/#!/search?q=%23tyrion" target="_blank">#tyrion</a> <a href="http://twitter.com/#!/search?q=%23lannister" target="_blank">#lannister</a>'s mom was my choir teacher <a href="http://twitter.com/#!/search?q=%23GoT" target="_blank">#GoT</a> <a href="http://t.co/vuAHInHE1Y" target="_blank">http://t.co/vuAHInHE1Y</a></p></li>
			<li class="tweet" style="opacity: 1;"><div class="meta"><img class="avatar" src="http://pbs.twimg.com/profile_images/378800000413394991/2cd24fe73a3483490ffcd68b8c28b59b_normal.jpeg"><a href="http://twitter.com/MonicaDema" class="name" target="_blank">Monica D</a><a href="http://twitter.com/MonicaDema" class="username" target="_blank">@MonicaDema</a><div class="clear"></div></div><p class="tweet-content">Fun fact - <a href="http://twitter.com/#!/search?q=%23tyrion" target="_blank">#tyrion</a> <a href="http://twitter.com/#!/search?q=%23lannister" target="_blank">#lannister</a>'s mom was my choir teacher <a href="http://twitter.com/#!/search?q=%23GoT" target="_blank">#GoT</a> <a href="http://t.co/vuAHInHE1Y" target="_blank">http://t.co/vuAHInHE1Y</a></p></li>
			<li class="tweet" style="opacity: 1;"><div class="meta"><img class="avatar" src="http://pbs.twimg.com/profile_images/378800000413394991/2cd24fe73a3483490ffcd68b8c28b59b_normal.jpeg"><a href="http://twitter.com/MonicaDema" class="name" target="_blank">Monica D</a><a href="http://twitter.com/MonicaDema" class="username" target="_blank">@MonicaDema</a><div class="clear"></div></div><p class="tweet-content">Fun fact - <a href="http://twitter.com/#!/search?q=%23tyrion" target="_blank">#tyrion</a> <a href="http://twitter.com/#!/search?q=%23lannister" target="_blank">#lannister</a>'s mom was my choir teacher <a href="http://twitter.com/#!/search?q=%23GoT" target="_blank">#GoT</a> <a href="http://t.co/vuAHInHE1Y" target="_blank">http://t.co/vuAHInHE1Y</a></p></li>
			<li class="tweet" style="opacity: 1;"><div class="meta"><img class="avatar" src="http://pbs.twimg.com/profile_images/378800000413394991/2cd24fe73a3483490ffcd68b8c28b59b_normal.jpeg"><a href="http://twitter.com/MonicaDema" class="name" target="_blank">Monica D</a><a href="http://twitter.com/MonicaDema" class="username" target="_blank">@MonicaDema</a><div class="clear"></div></div><p class="tweet-content">Fun fact - <a href="http://twitter.com/#!/search?q=%23tyrion" target="_blank">#tyrion</a> <a href="http://twitter.com/#!/search?q=%23lannister" target="_blank">#lannister</a>'s mom was my choir teacher <a href="http://twitter.com/#!/search?q=%23GoT" target="_blank">#GoT</a> <a href="http://t.co/vuAHInHE1Y" target="_blank">http://t.co/vuAHInHE1Y</a></p></li>
			<li class="tweet" style="opacity: 1;"><div class="meta"><img class="avatar" src="http://pbs.twimg.com/profile_images/378800000413394991/2cd24fe73a3483490ffcd68b8c28b59b_normal.jpeg"><a href="http://twitter.com/MonicaDema" class="name" target="_blank">Monica D</a><a href="http://twitter.com/MonicaDema" class="username" target="_blank">@MonicaDema</a><div class="clear"></div></div><p class="tweet-content">Fun fact - <a href="http://twitter.com/#!/search?q=%23tyrion" target="_blank">#tyrion</a> <a href="http://twitter.com/#!/search?q=%23lannister" target="_blank">#lannister</a>'s mom was my choir teacher <a href="http://twitter.com/#!/search?q=%23GoT" target="_blank">#GoT</a> <a href="http://t.co/vuAHInHE1Y" target="_blank">http://t.co/vuAHInHE1Y</a></p></li>
			<li class="tweet" style="opacity: 1;"><div class="meta"><img class="avatar" src="http://pbs.twimg.com/profile_images/378800000413394991/2cd24fe73a3483490ffcd68b8c28b59b_normal.jpeg"><a href="http://twitter.com/MonicaDema" class="name" target="_blank">Monica D</a><a href="http://twitter.com/MonicaDema" class="username" target="_blank">@MonicaDema</a><div class="clear"></div></div><p class="tweet-content">Fun fact - <a href="http://twitter.com/#!/search?q=%23tyrion" target="_blank">#tyrion</a> <a href="http://twitter.com/#!/search?q=%23lannister" target="_blank">#lannister</a>'s mom was my choir teacher <a href="http://twitter.com/#!/search?q=%23GoT" target="_blank">#GoT</a> <a href="http://t.co/vuAHInHE1Y" target="_blank">http://t.co/vuAHInHE1Y</a></p></li>

		</ul>
	</div>
</section>
<!-- SCRIPTS -->
<script src="http://js.pusher.com/2.1/pusher.min.js"></script>
<script src="http://code.jquery.com/jquery-1.10.2.min.js"></script>
<script src="assets/scripts/libs/pusher.js"></script>
<script src="assets/scripts/mobile.js"></script>

<!-- /SCRIPTS -->
</body>
</html>
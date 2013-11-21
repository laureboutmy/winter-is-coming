<?php
	session_start();
	include("assets/twitter/inc/twitterOAuth.php");
	include("assets/twitter/getUser.php");
?>
<!DOCTYPE html>
<html lang="en">
<head>

	<meta charset="utf-8" />
	
	<title>WINTER IS COMING</title>
	
	<meta name="description" content="">
	<meta name="robots" content="index, follow" />
	  
	<meta name="viewport" content="initial-scale=1.0, maximum-scale=1.0, user-scalable=no">

	<!--[if lt IE 9]>
	  <script src="//html5shiv.googlecode.com/svn/trunk/html5.js"></script>
	  <script>window.html5 || document.write('<script src="js/vendor/html5shiv.js"><\/script>')</script>
	<![endif]-->

	<!-- STYLESHEETS -->      
	<link href="assets/styles/reset.css" rel="stylesheet" type="text/css" /> 
	<link href="assets/styles/nanoscroller.css" rel="stylesheet" type="text/css" /> 
	<link href="assets/styles/fonts.css" rel="stylesheet" type="text/css" />
	<link href="assets/styles/global.css" rel="stylesheet" type="text/css" />
    <!-- /STYLESHEETS -->

</head>
<body>
<section id="homepage">
	<header>
		<div class="wrapper">
			<h1><img src="assets/images/template/hbo-hp.png" alt="HBO"></h1>
			<a href="#"><i class="left arrow">Arrow</i> Back to hbo.com</a>
			<div class="clear"></div>
		</div>
	</header>
	<section id="episode">
		<div class="wrapper">
			<h1><img src="assets/images/template/got-hp.png" alt="Game of thrones" /><span>Season 3 - Episode 9</span></h1>
			<h2>The Rains<br />of Castamere</h2>
			<h3>Live the real adventure. Discover the thrill.</h3>
			<a href="#" class="launch-player"><i class="play"></i>Play &quot;The Rains Of Castamere&quot;</a>
			<div id="countdown">
			</div>
		</div>
	</section>
	<div class="rain">
		<section id="unlock-badges">
			<div class="sign-in">
				<h2>Sign in to improve your experience, <span>start collecting badges!</span></h2>
				<a href="#" class="facebook"><i class="facebook"></i>Sign in with Facebook</a>
				<a href="#" class="twitter"><i class="twitter"></i>Sign in with Twitter</a>
			</div>
		</section>
		<footer>
			<p>This website is purely fictionnal.</p>
			<p>HBO and Game of Thrones logos are property of HBO.</p>
			<p>Game of Thrones is a registered trademark property of HBO.</p> 

			<p class="produced">Produced with passion by Laure Boutmy, Dorian Camilleri, Thomas Iturralde, Julien Perrière and Anthony Roux.</p>
		</footer>
	</div><!-- /sieste.rain -->
</section><!-- /section#homepage -->
<!-- SCRIPTS -->
<script src="http://code.jquery.com/jquery-1.10.2.min.js"></script>
<script src="assets/scripts/libs/jquery.nanoscroller.min.js"></script>
<script src="assets/scripts/libs/video.js"></script>
<script src="assets/data/cards.jsonp"></script>
<script src="assets/scripts/libs/timeline.js"></script>
<script src="assets/scripts/libs/tweet.js"></script>
<script src="assets/scripts/libs/jquery.tweetMachine-0.2.1.js"></script>
<script src="assets/scripts/scripts.js"></script>
<!-- /SCRIPTS -->
</body>
</html>
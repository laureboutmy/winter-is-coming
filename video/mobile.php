<?php
	ini_set('session.use_trans_sid', false);
	session_id($_GET['PHPSESSID']);
	session_start();
	$signed_in_twitter = isset($_SESSION['profile_image_url']) && !empty($_SESSION['profile_image_url'])
					    		&& isset($_SESSION['name']) && !empty($_SESSION['name']) 
					    		&& isset($_SESSION['screen_name']) && !empty($_SESSION['screen_name']);
	if($signed_in_twitter) { echo '<script>var signedInTwitter = true;</script>'; } 
	else { echo '<script>var signedInTwitter = false;</script>'; }
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
	<link href="assets/styles/fonts.css" rel="stylesheet" type="text/css" />
	<link href="assets/styles/mobile.css" rel="stylesheet" type="text/css" />
    <!-- /STYLESHEETS -->

    <!-- Favicon -->
	<link rel="icon" href="assets/images/favicon.ico" />
	<!-- /Favicon -->

     <!-- Google Analytics -->
    <script>
	  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
	  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

	  ga('create', 'UA-44675687-2', 'doriancamilleri.fr');
	  ga('send', 'pageview');
	</script>
	<!-- /Google Analytics -->

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
			<img class="mute" src="assets/images/mobile/mob-i-volume-mute.png" alt="Volume" />
		</div>
	</div>
</section>
<section id="feed" class="hidden">
	<div id="tweet-box">
		<div id="user">
    		<img src="<?php echo $_SESSION['profile_image_url']; ?>" alt="profile_image">
    		<ul>
    			<li class="name"><?php echo $_SESSION['name'] ?></li>
    			<li class="screen_name"><a href="http://twitter.com/<?php echo $_SESSION['screen_name'] ?>" target="_blank">@<?php echo $_SESSION['screen_name'] ?></a></li>
       		</ul>
       		<div class="clear"></div>
    	</div>
    	<form>
			<textarea name="tweet" placeholder="Post a tweet..." maxlength="140"></textarea>
			<span class="nb-chars"></span>
		</form>
	</div>
	<div id="tweet-feed">
		<ul id="tweets"></ul>
	</div>
</section>
<!-- SCRIPTS -->
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
<script src="http://js.pusher.com/2.1/pusher.min.js"></script>
<script src="assets/scripts/mCurrentTime-mobile.js"></script>
<script src="assets/scripts/libs/pusher.js"></script>
<script src="assets/scripts/libs/tweet.js"></script>
<script src="assets/scripts/libs/jquery.tweetMachine-mobile.js"></script>
<script>$('#tweet-feed #tweets').tweetMachine('#GoT');</script>
<script src="assets/scripts/mobile.js"></script>
<!-- /SCRIPTS -->
</body>
</html>
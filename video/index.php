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
	<link href="assets/styles/global.css" rel="stylesheet" type="text/css" />
    <!-- /STYLESHEETS -->

</head>
<body>
<section id="wrapper">
	<div id="close-browser"></div>
	<section id="wrapper-rel">
		<section id="main">
			<section id="player">
				<video id="video" preload="none" src="assets/videos/video.mp4" muted>
					Plz get Internet
				</video>
				<nav>
					<div id="play-button">
						play
						<span></span>
						<span></span>
					</div><!-- /div#play-button 
					 --><div id="progress-bar">
						<span class="progress"></span>
						<span class="buffer"></span>
					</div><!-- /div#progress-bar -->
				</nav>
			</section><!-- /section#player -->
			<section id="sidebar">
				<nav>
					<ul>
						<li><a href="timeline">Timeline</a></li>
						<li><a href="feed">Feed</a></li>
						<li><a href="badges">Badges</a></li>
					</ul>
				</nav>

				<section id="timeline" class="nano">
					<div class="content">
						
					</div>
				</section><!-- /section#timeline -->

				<section id="feed" class="hidden">
					
					<section id="tweet-box">
						<span class="nb-chars"></span>
					   
					    <?php if(isset($_SESSION['profile_image_url']) && !empty($_SESSION['profile_image_url'])
					    		&& isset($_SESSION['name']) && !empty($_SESSION['name']) 
					    		&& isset($_SESSION['screen_name']) && !empty($_SESSION['screen_name'])): ?>
					    	<div id="user">
					    		<img class="user-img" src="<?php echo $_SESSION['profile_image_url']; ?>" alt="profile_image" />
					    		<ul class="user-infos">
					    			<li class="name"><?php echo $_SESSION['name'] ?></li>
					    			<li class="screen_name"><a href="http://twitter.com/<?php echo $_SESSION['screen_name'] ?>" target="_blank">@<?php echo $_SESSION['screen_name'] ?></a></li>
					       		</ul>
					           
					    	</div>
							<form id="send-tweet">
								<textarea name="tweet" placeholder="Tweet something" maxlength="140"></textarea>
							</form>  

						<?php else: ?>
							<div id="twitter-connect">
						    	<a href="assets/twitter/twitterConnect.php">Se connecter avec Twitter</a> 
						    </div>
						<?php endif; ?>
					</section>
					<div id="tweet-feed">
					<?php if(isset($_SESSION['access_token']['oauth_token'])
							&& isset($_SESSION['access_token']['oauth_token_secret'])): ?>
						<ul class="tweets"></ul>
					<?php endif; ?>
					</div>
				</section><!-- /section#feed -->

				<section id="badges" class="hidden">
					heyeyeyeyyzhezeizrez rezuti uzreoitzeo rtiz
				</section><!-- /section#badges -->
			</section><!-- /section#sidebar -->
		</section><!-- /section#main -->

		<section id="browser">
			<a href="#" id="close-browser">x</a>
			<div>
			</div>
		</section><!-- /section#browser -->
	</section><!-- /section#wrapper-rel -->
</section><!-- /section#wrapper -->
<!-- SCRIPTS -->
<script src="http://code.jquery.com/jquery-1.10.2.min.js"></script>
<script src="assets/scripts/libs/jquery.nanoscroller.min.js"></script>
<script src="assets/scripts/libs/video.js"></script>
<script src="assets/data/cards.jsonp"></script>
<script src="assets/scripts/libs/timeline.js"></script>
<script src="assets/scripts/libs/jquery.tweetMachine-0.2.1.js"></script>
<script src="assets/scripts/scripts.js"></script>
<script src="assets/scripts/tweet-box.js"></script>
<script>
	
	$('.tweets').tweetMachine('#GoT');
</script>

<!-- /SCRIPTS -->
</body>
</html>
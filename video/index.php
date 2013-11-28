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
<html lang="en" prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# gotplayer: http://ogp.me/ns/fb/gotplayer#">
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
	<link href="assets/styles/nanoscroller.css" rel="stylesheet" type="text/css" /> 
	<link href="assets/styles/fonts.css" rel="stylesheet" type="text/css" />
	<link href="assets/styles/global.css" rel="stylesheet" type="text/css" />
    <!-- /STYLESHEETS -->
	

</head>
<body>
<section id="landing-page" class="nano">
	<div class="content">
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
				<div id="countdown">
					<span class="days1"></span>
					<span class="days2"></span>
					<span class="unity unity_days">Days</span>

					<span class="hours1" ></span>
					<span class="hours2" ></span>
					<span class="unity unity_hours">Hours</span>

					<span class="minutes1" ></span>
					<span class="minutes2" ></span>
					<span class="unity unity_minutes">Minutes</span>

					<span class="seconds1" ></span>
					<span class="seconds2" ></span>
					<span class="unity unity_seconds">Seconds</span>
				</div>
				<a href="#" class="launch-player"><i class="play"></i>Play &quot;The Rains Of Castamere&quot;</a>

			</div>
		</section>
		<!-- <div class="rain"> -->
		<div class="wrapper">
			<section id="unlock-badges">

				<div class="sign-in">
					<h2>Sign in to improve your experience, <span>start collecting badges!</span></h2>
					<a href="#" class="sign-in-facebook"><i class="facebook"></i>Sign in with Facebook</a>
					<a class="sign-in-twitter"><i class="twitter"></i>Sign in with Twitter</a>
				</div>
				<div class="signed-in hidden">
					<h2><span>Welcome.</span>
					You’ve unlocked 1 badge, congrats!</h2>

					<a href="#" class="sign-in-facebook"><i class="facebook"></i>Sign in with Facebook</a>
					<?php if(!$signed_in_twitter): ?>
						<a href="#" class="sign-in-twitter"><i class="twitter"></i>Sign in with Twitter</a>
					<?php endif; ?>
					<hr />
					<ul id="all-badges">
						<li>
							<div class="badge acolyte big">Acolyte</div>
							<h3>Acolyte</h3>
							<p>Join the adventure by signing in with Twitter or Facebook.</p>
						</li>
						<li>
							<div class="badge envoy big">Envoy</div>
							<h3>Envoy</h3>
							<p>Spread the word ! Tweet with #GoT to your followers.</p>
						</li>
						<li>
							<div class="badge dovecot big"></div>
							<h3>Dovecot</h3>
							<p>The whole Kingdom has heard about your tweets.</p>
						</li>
						<li>
							<div class="badge lannister big"></div>
							<h3>Lannister</h3>
							<p>A Lannister always listen to the Lannister song.</p>
						</li>
						<li>
							<div class="badge couch-potatoe big"></div>
							<h3>Couch Potatoe</h3>
							<p>Make yourself confortable, open the mobile website.</p>
						</li>
						<li>
							<div class="badge please-not-the-wolf big"></div>
							<h3>Please Not The Wolf</h3>
							<p>You’re a true animal advocate, people love you for that.</p>
						</li>
						<li>
							<div class="badge savant big"></div>
							<h3>Savant</h3>
							<p>You know approximately as much as encyclopaedia.</p>
						</li>
						<li>
							<div class="badge walder-frey big"></div>
							<h3>Walder Frey</h3>
							<p>The night is dark and full of terrors. You’re one of those.</p>
						</li>
						
					</ul>
				</div>
			</section>
			<footer>
				<p>This website is purely fictionnal.</p>
				<p>HBO and Game of Thrones logos are property of HBO.</p>
				<p>Game of Thrones is a registered trademark property of HBO.</p> 
				<p class="produced">Produced with passion by Laure Boutmy, Dorian Camilleri, Thomas Iturralde, Julien Perrière and Anthony Roux.</p>
			</footer>
		</div>
		<!-- </div> /sieste.rain -->
	</div><!-- /div.content -->
</section><!-- /section#homepage -->
<section id="wrapper">
	<div class="close-browser"></div>
	<section id="wrapper-rel">
		<section id="main">
			<nav class="menu">
				<ul>
					<li><a href="#" data-pop="about" class="about"><i class="info">Info</i>About the project</a></li>
					<li><a href="#" data-pop="mobile" class="mobile"><i class="mobile">Mobile</i>Connect to the player with your phone!</a></li>
				</ul>
			</nav>
			<section id="player">
				<video id="video" class="hidden" preload="none">
					<source src="assets/videos/video.mp4" type="video/mp4">
					<source src="assets/videos/video.ogv" type="video/ogg">
					
					Plz get Internet
				</video>
				<div>
					<nav>
						<h1><img src="assets/images/template/got-player-nav.png" alt="Game of Thrones" /></h1>
						<hr />
						<hr />
						<div id="play-btn">
							<img src="assets/images/template/btn-play.png" alt="Pause" />
						</div><!-- /div#play-button 
						 --><div id="progress-bar">
							<span class="progress"></span>
							<span class="buffer"></span>
						</div><!-- /div#progress-bar -->
						<div id="duration">
							<span class="current-time">22:22</span>
							<span class="duration">40:39</span>
						</div><!-- /div#duration -->
						<hr />
						<hr />
						<div id="volume">
							<img class="mute" src="assets/images/template/btn-volume.png" alt="Volume" />
							<span class="level">
								<span class="handle"> </span>
							</span>
						</div><!-- /div#volume -->
						<div id="fullscreen-btn">
							<img src="assets/images/template/btn-fullscreen.png" alt="Enter fullscreen" />
						</div><!-- /div#fullscreen-button -->
					</nav>
				</div>
			</section><!-- /section#player -->
			<section id="sidebar">
				<nav>
					<ul>
						<li><a href="timeline"><i class="current timeline">Timeline</i></a><hr /><hr /></li>
						<li><a href="feed"><i class="feed">Feed</i></a><hr /><hr /></li>
						<li><a href="badges"><i class="badges">Badges</i></a></li>
					</ul>
				</nav>

				<section id="timeline" class="nano visible">
					<div class="content">
						
					</div>
				</section><!-- /section#timeline -->

				<section id="feed">
					<div id="twitter-connect">
						<h3>Sign in with your Twitter account and join the conversation!</h3>
				    	<a class="sign-in-twitter">Se connecter avec Twitter</a> 
				   	</div>

					<section id="tweet-box">						
												     
				    	<div id="user">
				    		<img src="<?php echo $_SESSION['profile_image_url']; ?>" alt="profile_image" />
				    		<ul>
				    			<li class="name"><?php echo $_SESSION['name'] ?></li>
				    			<li class="screen_name"><a href="http://twitter.com/<?php echo $_SESSION['screen_name'] ?>" target="_blank">@<?php echo $_SESSION['screen_name'] ?></a></li>
				       		</ul>
				       		<div class="clear"></div>
				    	</div>
						<form>
							<textarea name="tweet" placeholder="Post a tweet..." maxlength="140"></textarea>
							<span class="nb-chars"></span>
							<button type="submit">Post to Twitter</button>
						</form>  
					
					</section>
					<div id="tweet-feed" class="nano">
						<div class="content">
								<ul class="tweets"></ul>
						</div>
					</div>
				</section><!-- /section#feed -->

				<section id="badges" class="nano">
					<div class="content">
						<ul>
							<li>
								<div class="badge acolyte small">Acolyte</div>
								<h3>Acolyte</h3>
								<p>Join the adventure by signing in with Twitter or Facebook.</p>
								<div class="clear"></div>
							</li>
							<li>
								<div class="badge envoy small">Envoy</div>
								<h3>Envoy</h3>
								<p>Spread the word ! Tweet with #GoT to your followers.</p>
								<div class="clear"></div>
							</li>
							<li>
								<div class="badge dovecot small"></div>
								<h3>Dovecot</h3>
								<p>The whole Kingdom has heard about your tweets.</p>
								<div class="clear"></div>
							</li>
							<li>
								<div class="badge lannister small"></div>
								<h3>Lannister</h3>
								<p>A Lannister always listen to the Lannister song.</p>
								<div class="clear"></div>
							</li>
							<li>
								<div class="badge couch-potatoe small"></div>
								<h3>Couch Potatoe</h3>
								<p>Make yourself confortable, open the mobile website.</p>
								<div class="clear"></div>
							</li>
							<li>
								<div class="badge please-not-the-wolf small"></div>
								<h3>Please Not The Wolf</h3>
								<p>You’re a true animal advocate, people love you for that.</p>
								<div class="clear"></div>
							</li>
							<li>
								<div class="badge savant small"></div>
								<h3>Savant</h3>
								<p>You know approximately as much as encyclopaedia.</p>
								<div class="clear"></div>
							</li>
							<li>
								<div class="badge walder-frey small"></div>
								<h3>Walder Frey</h3>
								<p>The night is dark and full of terrors. You’re one of those.</p>
								<div class="clear"></div>
							</li>
							
						</ul>
					</div>
				</section><!-- /section#badges -->
			</section><!-- /section#sidebar -->
		</section><!-- /section#main -->
		
		<section id="browser" class="nano">
			<i class="close-browser" aria-hidden="true">Close</i>
			<div class="content">
			</div>
		</section><!-- /section#browser -->
		<section id="about">
			<i class="close-browser" aria-hidden="true">Close</i>
			hui
		</section>
		<section id="mobile">
			<i class="close-browser" aria-hidden="true">Close</i>
			<div>
				<h2>Scan this QR Code with the app <br />&quot;GoT Player&quot; to connect your mobile !</h2>
				<img id="qrcode" src=""/>
			</div>
		</section>
	</section><!-- /section#wrapper-rel -->
</section><!-- /section#wrapper -->
<div id="fb-root"></div>

<!-- SCRIPTS -->
<script src="http://js.pusher.com/2.1/pusher.min.js"></script>
<script src="http://code.jquery.com/jquery-1.10.2.min.js"></script>
<script src="assets/scripts/libs/jquery.nanoscroller.min.js"></script>
<script src="assets/scripts/libs/jquery.tweetMachine-desktop.js"></script>
<script src="http://connect.facebook.net/en_US/all.js"></script>
<script src="assets/scripts/libs/jquery.oauthpopup.js"></script>
<script src="assets/scripts/libs/video.js"></script>
<script src="assets/scripts/libs/countdown.js"></script>
<script src="assets/data/cards.jsonp"></script>
<script src="assets/scripts/libs/badges.js"></script>
<script src="assets/scripts/libs/timeline.js"></script>
<script src="assets/scripts/libs/tweet.js"></script>
<script src="assets/scripts/mCurrentTime-desktop.js"></script> 
<script src="assets/scripts/libs/pusher.js"></script>
<script src="assets/scripts/libs/mood.js"></script>
<script src="assets/scripts/scripts.js"></script>
<script src="assets/scripts/myCountdown.js"></script>
<script src="assets/scripts/fbconnect.js"></script>
<!-- /SCRIPTS -->
</body>
</html>
<?php
  session_start();
  include("assets/twitter/lib/twitteroauth.php");
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

	<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>

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
				<section id="timeline" class="nano">

					<!-- Rajout Dorian -->
					<section id="menu">
						<span class="menuTimeline" >Timeline</span>
						<span class="menuTweets" >Tweets</span>
					</section>

					<section class="tweets">
						<div id="twitterConnect">
					      <a href="assets/twitter/twitterConnect.php">Se connecter avec Twitter</a> 
					      <!-- <a href="#" onclick="window.open('http://doriancamilleri.fr/player/video/video/assets/twitter/twitterConnect.php', 'Twitter', 'width=640,height=480');">Login to Twitter</a> -->
					    </div>
						<section id="tweetBox">
							<span class="nbCharacter"></span>
						    <div id="user">
						        <?php
						          if(isset($_SESSION['profile_image_url']) && !empty($_SESSION['profile_image_url']) && isset($_SESSION['name']) && !empty($_SESSION['name'])&& isset($_SESSION['screen_name']) && !empty($_SESSION['screen_name'])){
						            echo("<img class='user_img' src='".$_SESSION['profile_image_url']."' alt='profile_image' />
						                  <ul class='user_caract'>
						                  	<li class='name'>".$_SESSION['name']."</li>
						                  	<li class='screen_name'><a href='http://twitter.com/".$_SESSION['screen_name']."' target='_blank'>@".$_SESSION['screen_name']."</a></li>
						                  </ul>");
						        ?>
					            <script type="text/javascript">
					              $('#twitterConnect').hide();
					            </script>
						        
						     </div>
						     <form id="sendTweet">
						       <textarea name="tweet" placeholder="Tweet something" maxlength="140"></textarea>
						     </form>  
						     	<?php
						          }
						          else
						          {
						            ?>
						            <script type="text/javascript">
						              $('.user_img').hide();
						              $('.user_caract').hide();
						            </script>
						            <?php
						          }
						        ?>
						</section>
						<div id="tweet_feed"></div>
					</section>
					<!-- /Rajout Dorian -->
					<div class="content">
						<a href="#" class="browser">FEEEEEED</a>
					</div>
				</section><!-- /section#timeline -->
			</section>

			<section id="browser">
				<a href="#" id="close-browser">x</a>
				<div>
				</div>
			</section><!-- /section#browser -->
		</section><!-- /section#wrapper-rel -->
	</section><!-- /section#wrapper -->

	<!-- SCRIPTS -->
	<script src="assets/scripts/libs/jquery-1.10.1.min.js"></script>
	<script src="assets/scripts/libs/jquery.nanoscroller.js"></script>
	<script src="assets/scripts/libs/video.js"></script>
	<script src="assets/data/timeline.jsonp"></script>
	<script src="assets/scripts/scripts.js"></script>

	<!-- Rajout Dorian -->
	<script src="assets/scripts/tweetBox.js"></script>
	<script src="assets/scripts/menu.js"></script>
	<!-- /Rajout Dorian -->
	<!-- /SCRIPTS -->
</body>
</html>
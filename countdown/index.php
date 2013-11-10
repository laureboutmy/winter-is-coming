<?php
  session_start();
  include("twitter/lib/twitteroauth.php");
  include("twitter/db/dbConnect.php");
  include("twitter/createUser.php");
?>

<!DOCTYPE html> 
	<head>
    <title>GoT CountDown</title>
	  <meta http-equiv="Content-Type" content="text/html; charset=utf8" />
    <link rel="stylesheet"  type="text/css" href="styles.css" />
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
 </head>
 
  <body>

    <!-- Facebook Connect  -->
    <div id="fb-root"></div>
    <script src="facebook/facebookConnect.js" type="text/javascript"></script>
    <div id="facebookContent"></div>
    <!-- TODO: Updater les permissions -->
    <fb:login-button show-faces="false" width="200" perms="email,publish_actions" id="fbConnectButton"></fb:login-button>
    <!--  --> 


    <!-- Twitter Connect -->
    <div id="twitterConnect">
      <a href="twitter/twitterConnect.php">Se connecter avec Twitter</a>
    </div>
    <?php
      if(isset($_SESSION['username']) && !empty($_SESSION['username']))
      {
        echo("<h2>Hi @".$_SESSION['username']." <3 </h2>");
        ?>
        <script type="text/javascript">
          $('#twitterConnect').hide();
        </script>
        <?php
      }
    ?>
    <!--  -->

    <div id="countdown">
      <span class="days1"></span>
      <span class="days2"></span>
      <span class="unity_days">d</span>

      <span class="hours1" ></span>
      <span class="hours2" ></span>
      <span class="unity_hours">h</span>

      <span class="minutes1" ></span>
      <span class="minutes2" ></span>
      <span class="unity_minutes">m</span>

      <span class="seconds1" ></span>
      <span class="seconds2" ></span>
      <span class="unity_seconds">s</span>
    </div>

   </body>
   <script src="js/countdown.js" type="text/javascript"></script>
   <script src="js/myCountDown.js" type="text/javascript"></script>
</html>



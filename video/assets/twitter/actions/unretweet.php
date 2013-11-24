<?php
	session_start();
	require_once("../inc/twitterOAuth.php");

	if(isset($_POST['id']) && !empty($_POST['id'])){

		$id = $_SESSION["retweet".$_POST["id"]];
		$tweet = new TwitterOAuth($_SESSION['CONSUMER_KEY'], $_SESSION['CONSUMER_SECRET'], $_SESSION['access_token']['oauth_token'] , $_SESSION['access_token']['oauth_token_secret']);
		$tweet->post('statuses/destroy/'.$id);
		// var_export($tweet->http_info);

		// Destroy useless session value
		unset($_SESSION["retweet".$_POST["id"]]);
	}
?>
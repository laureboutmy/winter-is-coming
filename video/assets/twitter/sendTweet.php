<?php
	session_start();
	require_once("inc/twitterOAuth.php");

	if(isset($_POST['tweet']) && !empty($_POST['tweet']) &&
	   isset($_POST['hashtag']) && !empty($_POST['hashtag']) &&
	   isset($_POST['minutes'])
	   ){

		/*
			Send a new tweet
			With the hashtag 
			And Player currentTime
		*/

		$content = $_POST['tweet']." #".$_POST['hashtag']." #".$_POST['minutes']."min";
		$tweet = new TwitterOAuth($_SESSION['CONSUMER_KEY'], $_SESSION['CONSUMER_SECRET'], $_SESSION['access_token']['oauth_token'] , $_SESSION['access_token']['oauth_token_secret']);
		$tweet->post('statuses/update', array('status' => "$content"));
	}
?>
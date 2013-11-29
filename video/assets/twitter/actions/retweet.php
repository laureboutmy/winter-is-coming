<?php
	session_start();
	require_once("../inc/twitterOAuth.php");

	if(isset($_POST['id']) && !empty($_POST['id'])){

		/*
			Send a post request to Twitter API to Retweet
		*/

		$id = intval($_POST['id']);
		$tweet = new TwitterOAuth($_SESSION['CONSUMER_KEY'], $_SESSION['CONSUMER_SECRET'], $_SESSION['access_token']['oauth_token'] , $_SESSION['access_token']['oauth_token_secret']);
		$retweet = $tweet->post('statuses/retweet/'.$id);

		/* 
			Get the id of the retweeted tweet to be able to unretweet it
		*/
			
		$_SESSION["retweet".$id] = $retweet->id_str;
	}
?>
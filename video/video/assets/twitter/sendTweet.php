<?php
	session_start();
	require_once("lib/twitteroauth.php");

	if(isset($_POST['tweet']) && !empty($_POST['tweet']) &&
	   isset($_POST['hashtag']) && !empty($_POST['hashtag']) &&
	   isset($_POST['minutes']))
	{
		$CONSUMER_KEY = 'lzljK0zCWnUlzqvERrtdiw';
		$CONSUMER_SECRET = 'vZJMQXCzPZ42aa3F8ve6D7lqgoBm72froHDFJMuFpOQ';

		$content = $_POST['tweet']." #".$_POST['hashtag']." #".$_POST['minutes']."min";

		$tweet = new TwitterOAuth($CONSUMER_KEY, $CONSUMER_SECRET, $_SESSION['access_token']['oauth_token'] , $_SESSION['access_token']['oauth_token_secret']);
		$tweet->post('statuses/update', array('status' => "$content"));
	}
?>
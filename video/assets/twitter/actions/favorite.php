<?php
	session_start();
	require_once("../inc/twitterOAuth.php");

	if(isset($_POST['id']) && !empty($_POST['id'])){

		/*
			Send a post request to Twitter API to Favorite
		*/

		$id = intval($_POST['id']);
		$tweet = new TwitterOAuth($_SESSION['CONSUMER_KEY'], $_SESSION['CONSUMER_SECRET'], $_SESSION['access_token']['oauth_token'] , $_SESSION['access_token']['oauth_token_secret']);
		$tweet->post('favorites/create', array('id' => "$id"));
	}
?>
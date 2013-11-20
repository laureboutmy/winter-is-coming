<?php
	require("inc/twitterOAuth.php");  
	session_start(); 

	$_SESSION['CONSUMER_KEY'] = 'lzljK0zCWnUlzqvERrtdiw';
	$_SESSION['CONSUMER_SECRET'] = 'vZJMQXCzPZ42aa3F8ve6D7lqgoBm72froHDFJMuFpOQ';

	// $callback = 'http://winter-is-coming.dev:8888/video/index.php';
	$callback = 'http://doriancamilleri.fr/player/player_v2/video/';
	// $callback = 'http://localhost:8888/player_v2/video/';
	


	$twitteroauth = new TwitterOAuth($_SESSION['CONSUMER_KEY'], $_SESSION['CONSUMER_SECRET']);  
	// Requesting authentication tokens, the parameter is the URL we will be redirected to  
	$request_token = $twitteroauth->getRequestToken($callback);  
	  
	// Saving them into the session  
	$_SESSION['oauth_token'] = $request_token['oauth_token'];  
	$_SESSION['oauth_token_secret'] = $request_token['oauth_token_secret'];  
	  
	// If everything goes well..  
	if($twitteroauth->http_code==200){  
	    // Let's generate the URL and redirect  
	    $url = $twitteroauth->getAuthorizeURL($request_token['oauth_token']); 
	    header('Location: '.$url); 
	} else { 
	    // It's a bad idea to kill the script, but we've got to know when there's an error.  
	    die('Something wrong happened.');  
	} 

?>
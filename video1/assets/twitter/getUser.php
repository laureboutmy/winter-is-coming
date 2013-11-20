 <?php
	session_start();

	/*
		If user successfully connected
	*/
	if(!empty($_GET['oauth_verifier']) && !empty($_SESSION['oauth_token']) && !empty($_SESSION['oauth_token_secret']) && empty($_SESSION['oauth_verifier'])){ 
		$_SESSION['oauth_verifier'] = $_GET['oauth_verifier'];  
		$twitteroauth = new TwitterOAuth($_SESSION['CONSUMER_KEY'], $_SESSION['CONSUMER_SECRET'], $_SESSION['oauth_token'], $_SESSION['oauth_token_secret']);  
	    $access_token = $twitteroauth->getAccessToken($_SESSION['oauth_verifier']);
	    $_SESSION['access_token'] = $access_token; 
	    $user_info = $twitteroauth->get('account/verify_credentials'); 
	    $_SESSION['screen_name'] = $user_info->screen_name;
	    $_SESSION['profile_image_url'] = $user_info->profile_image_url;
	    $_SESSION['name'] = $user_info->name;
	}
?>
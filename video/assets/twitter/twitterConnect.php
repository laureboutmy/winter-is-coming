<?php
    require("inc/twitterOAuth.php");  
    session_start(); 

    if(!empty($_GET['oauth_verifier']) && !empty($_SESSION['oauth_token']) && !empty($_SESSION['oauth_token_secret'])){ 

        /*
            If oAuth session values are set
            We get the Screen Name
            Profile Image and Name
            Of the user
        */

        $_SESSION['oauth_verifier'] = $_GET['oauth_verifier'];  
        $twitteroauth = new TwitterOAuth($_SESSION['CONSUMER_KEY'], $_SESSION['CONSUMER_SECRET'], $_SESSION['oauth_token'], $_SESSION['oauth_token_secret']);  
        $access_token = $twitteroauth->getAccessToken($_SESSION['oauth_verifier']);
        $_SESSION['access_token'] = $access_token; 
        $user_info = $twitteroauth->get('account/verify_credentials'); 
        $_SESSION['screen_name'] = $user_info->screen_name;
        $_SESSION['profile_image_url'] = $user_info->profile_image_url;
        $_SESSION['name'] = $user_info->name;

        // ?><script type="text/javascript">// <![CDATA[
        window.close();
        // // // ]]></script><?php
    }

    else{

        /*
            Connect to Twitter App
            Using Consumer Key
            And Consumer Secret
        */

        $_SESSION['CONSUMER_KEY'] = 'lzljK0zCWnUlzqvERrtdiw';
        $_SESSION['CONSUMER_SECRET'] = 'vZJMQXCzPZ42aa3F8ve6D7lqgoBm72froHDFJMuFpOQ';

        $callback = 'http://doriancamilleri.fr/player/video/assets/twitter/twitterConnect.php';

        $twitteroauth = new TwitterOAuth($_SESSION['CONSUMER_KEY'], $_SESSION['CONSUMER_SECRET']);  
        $request_token = $twitteroauth->getRequestToken($callback);  
        $_SESSION['oauth_token'] = $request_token['oauth_token'];  
        $_SESSION['oauth_token_secret'] = $request_token['oauth_token_secret'];  
          
        if($twitteroauth->http_code==200){  
            $url = $twitteroauth->getAuthorizeURL($request_token['oauth_token']); 
            header('Location: '.$url); 
            
        } else { 
            die('Something wrong happened.');  
        } 
    }

?>






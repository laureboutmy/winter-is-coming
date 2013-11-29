<?php
	header('Content-Type: application/json');
	session_start();

	/*
		Get the User Twitter
		Screen Name
		Profile Image
		And Name
	*/
		
	$response = array(
		'screen_name' => $_SESSION['screen_name'],
		'profile_image_url' => $_SESSION['profile_image_url'],
		'name' => $_SESSION['name']
	);
    echo json_encode($response);
?>
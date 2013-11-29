<?php
require_once('Pusher.php');
require_once('config.php');

/*
    Initalize Pusher
*/

$pusher = new Pusher(APP_KEY, APP_SECRET, APP_ID);

$action = sanitize( $_GET['action'] );

$channel = sanitize( $_GET['channel'] );

$message = sanitize( $_GET['message'] );
$data = array('action' => $action);

$pusher->trigger($channel, $action, $message);

function sanitize($data) {
  return htmlspecialchars($data);
}
?>
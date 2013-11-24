<?php
require_once('Pusher.php');
require_once('config.php');

$pusher = new Pusher(APP_KEY, APP_SECRET, APP_ID);

$action = sanitize( $_GET['action'] );

$channel1 = sanitize( $_GET['channel'] );
$data = array('action' => $action);


$pusher->trigger($channel1, $action, $data);

function sanitize($data) {
  return htmlspecialchars($data);
}
?>
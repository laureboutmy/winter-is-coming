var NOTIFY_ENDPOINT;
var channelname;

function pusher_init(channel_name){ 
 
  var pusher = new Pusher('d6d5c184ca85e911a2df');
  channelname = channel_name;
  NOTIFY_ENDPOINT = "/winter-is-coming/video/assets/pusher/mobile.php";
  var channel = pusher.subscribe(channelname);
}

function pusher_test(action) {
  
          $.ajax({
            url: NOTIFY_ENDPOINT,
            data: {"action": action, "channel": channelname}
          });
          console.log("ok");
        }

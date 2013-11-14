window.fbAsyncInit = function() {
  FB.init({
    appId      : '607900009248024',
    channelUrl : 'http://www.doriancamilleri.fr/countdown/channel.html',
    status     : true, 
    cookie     : true, 
    xfbml      : true  
  });
      
  FB.Event.subscribe('auth.authResponseChange', function(response) {
    
    if (response.status === 'connected')
    {
      FB.api('/me', function(response) {
        $('#facebookContent').html('Welcome ' + response.name + ' ! <3');
        $('#fbConnectButton').hide();
      });
    } 
    else 
    {
      FB.login();
    } 
  });

};

(function(d){
   var js, id = 'facebook-jssdk', ref = d.getElementsByTagName('script')[0];
   if (d.getElementById(id)) {return;}
   js = d.createElement('script'); js.id = id; js.async = true;
   js.src = "//connect.facebook.net/en_US/all.js";
   ref.parentNode.insertBefore(js, ref);
 }(document));

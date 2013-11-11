window.fbAsyncInit = function() {
  FB.init({
    appId      : '452234728214767',
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

        $('#happy').click(function()
        {
          FB.api('/me/feed', 'post',
           {message : 'is watching the last episode of GoT ! I\'m feeling happy :)',
           name : 'GoT Player',
           description : 'Watching a new episode on Game of Thrones season 4 social player',
           link : 'http://doriancamilleri.fr',
           picture : 'http://doriancamilleri.fr/player/facebookSharing/img/happy.png',
           caption : 'Coucou'}, function(response) {
            if (!response || response.error) {
              $("#shareCallback").html("Erreur");
            } else {
               $("#moods").hide();
              $("#shareCallback").html("Message publié ! <3");
            }
          });
        });

        $('#asto').click(function()
        {
          FB.api('/me/feed', 'post',
           {message : 'is watching the last episode of GoT ! I\'m feeling astonished :|',
           name : 'GoT Player',
           description : 'Watching a new episode on Game of Thrones season 4 social player',
           link : 'http://doriancamilleri.fr',
           picture : 'http://doriancamilleri.fr/player/facebookSharing/img/astonished.png',
           caption : 'Coucou'}, function(response) {
            if (!response || response.error) {
              $("#shareCallback").html("Erreur");
            } else {
              $("#moods").hide();
              $("#shareCallback").html("Message publié ! <3");
            }
          });
        });

        $('#sad').click(function()
        {
         FB.api('/me/feed', 'post',
           {message : 'is watching the last episode of GoT ! I\'m feeling sad :(',
           name : 'GoT Player',
           description : 'Watching a new episode on Game of Thrones season 4 social player',
           link : 'http://doriancamilleri.fr',
           picture : 'http://doriancamilleri.fr/player/facebookSharing/img/sad.png',
           caption : 'Coucou'}, function(response) {
            if (!response || response.error) {
              $("#shareCallback").html("Erreur");
            } else {
               $("#moods").hide();
              $("#shareCallback").html("Message publié ! <3");
            }
          });
        });
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

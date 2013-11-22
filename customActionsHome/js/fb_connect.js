var scope = "publish_actions";
FB.init({
	apiKey : '452234728214767',
	scope : scope,
	status : true,
	oauth : true,
	cookie : true,
	xfbml : true
});

FB.getLoginStatus(handleSessionReponse);

$("a.fb-login").on('click', function(){
	FB.login(handleSessionReponse, {scope: scope});
})

function handleSessionReponse(session){
	if(!session.authResponse){
		return false;
	}

	FB.api("/me", function(user){
		$(".fb-infos").html('Hi '+user.name);
		return false;
	});
}

function shareHome(){
	var url = "http://doriancamilleri.fr/player/customActionsHome/";
	FB.api("/me/wictesthetic:Play",
		"POST",
		{got_episode : url},
		function(response){
			console.log("Réponse ");
			console.log(response);
		}
	);
}



// Event Listeners 
$(".shareHome").on("click", shareHome);


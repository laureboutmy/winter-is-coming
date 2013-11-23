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

$("a.sign-in-facebook").on('click', function(){
	FB.login(handleSessionReponse, {scope: scope});
})

function handleSessionReponse(session){
	if(!session.authResponse){
		return false;
	}

	FB.api("/me", function(user){
		console.log('heyyy');
		$('#homepage #unlock-badges .sign-in').addClass('hidden');
		$('#homepage #unlock-badges .signed-in').removeClass('hidden');
		$("#homepage #unlock-badges .signed-in h2 span").html('Welcome, ' + user.name);
		
		return false;
	});
}

// function shareHome(){
	// var url = "http://doriancamilleri.fr/player/customActionsHome/";
	// FB.api("/me/gotplayer:Play",
		// "POST",
		// {got_episode : url},
		// function(response){
			// console.log("Réponse ");
			// console.log(response);
		// }
	// );
// }
// 
// 
// 
// Event Listeners 
// $(".shareHome").on("click", shareHome);
// 

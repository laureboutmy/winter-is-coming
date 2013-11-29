var scope = "publish_actions";
FB.init({
	apiKey : '452234728214767',
	scope : scope,
	status : true,
	oauth : true,
	cookie : true,
	xfbml : true
});

/*
	Sign in with twitter
	And request for Publish Actions
*/
FB.getLoginStatus(handleSessionReponse);

$("a.sign-in-facebook").on('click', function(){
	FB.login(handleSessionReponse, {scope: scope});
})

function handleSessionReponse(session){
	if(!session.authResponse){
		return false;
	}

	FB.api("/me", function(user){
		badges.claim('acolyte');
		$('#landing-page #unlock-badges .sign-in').addClass('hidden');
		$('#landing-page #unlock-badges .signed-in a.sign-in-facebook').hide();
		$('#landing-page #unlock-badges .signed-in').removeClass('hidden');
		$('#landing-page #unlock-badges .signed-in h2 span.welcome').html('Welcome, ' + user.name);
		
		return false;
	});
}
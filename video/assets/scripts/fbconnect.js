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
		badges.claim('acolyte');
		$('#homepage #unlock-badges .sign-in').addClass('hidden');
		$('#homepage #unlock-badges .signed-in a.sign-in-facebook').hide();
		$('#homepage #unlock-badges .signed-in').removeClass('hidden');
		$('#homepage #unlock-badges .signed-in h2 span').html('Welcome, ' + user.name);
		
		return false;
	});
}
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


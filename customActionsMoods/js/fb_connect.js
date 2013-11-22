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

function shareMood(moodId){
	console.log("MOOD : "+moodId);
		FB.api("/me/wictesthetic:feel",
		"POST",
		{amazed : moodId, title : "coucou"},
		function(response){
			console.log("Réponse ");
			console.log(response);
		}
	);
}

// Event Listeners 

$(".shareAmazed").on("click", function()
{
	shareMood('616568065051679');
});
$(".shareConfused").on("click", function()
{
	shareMood('550595425022406');
});
$(".shareShocked").on("click", function()
{
	shareMood('241044959387086');
});



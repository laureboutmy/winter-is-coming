$(document).ready(function() {

	$("#timeline .tweets").hide();

	$("#menu .menuTimeline").on("click", function()
	{
		$("#timeline .tweets").hide();
		$("#timeline .content").show();
	});

	$("#menu .menuTweets").on("click", function()
	{
		$("#timeline .content").hide();
		$("#timeline .tweets").show();
	});
});
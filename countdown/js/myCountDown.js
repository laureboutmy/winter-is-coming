countdown.init({
	now : new Date(),
	targetDate : new Date('Dec 20 18:00:00 2013')
});

(function() {
  var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
                              window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
  window.requestAnimationFrame = requestAnimationFrame;
})();

function anim()
{
	setInterval("countdown.count();", 1000);
}

requestAnimationFrame(anim);





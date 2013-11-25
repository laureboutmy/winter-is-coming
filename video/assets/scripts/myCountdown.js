$("#countdown").hide();
// $(".unity").hide();

countdown.init({

	// Enter countdown duration here :
	days : 0,
	hours : 0,
	minutes : 0,
	seconds : 10,
	//-----------------------//

	fadeCountDown : function(){
		$("#countdown").fadeIn(2000);
	}, 

	showDays : function(){
		$(".unity").addClass('visible');
		$('.days1').html(this.tab[0]);
		$('.days2').html(this.tab[1]);
	},

	showHours : function(){
		$('.hours1').html(this.tab[2]);
		$('.hours2').html(this.tab[3]);
	},

	showMinutes : function(){
		$('.minutes1').html(this.tab[4]);
		$('.minutes2').html(this.tab[5]);
	},

	showSeconds : function(){
		$('.seconds1').html(this.tab[6]);
		$('.seconds2').html(this.tab[7]);
	},

	fadeNewDate : function(target,figure){
		$("."+target).animate(
		{
			"top" : "+=40",
			"opacity" : 0
		}, 100,
		function()
		{
			$("."+target).html(figure);
			$("."+target).css('top', "-=80");
			$("."+target).animate({
				"top" : "+=40",
				"opacity" : 1
			}, 100);
		});
	},

	stop : function(){
		anim.stop();
		$("#countdown").fadeOut(1000).queue(function(){
			$('a.launch-player').addClass('visible');
		});
		
	}
});


(function() {
  var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
                              window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
  window.requestAnimationFrame = requestAnimationFrame;
})();

var anim = {

	interval : 0,

	play : function(){
		interval = setInterval("countdown.count()", 1000);
	},

	stop : function(){
		clearInterval(interval);
	}
}

requestAnimationFrame(anim.play);

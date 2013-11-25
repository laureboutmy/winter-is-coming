$("#countdown").hide();
$(".unity").hide();

countdown.init({

	// Enter countdown duration :
	days : 0,
	hours : 0,
	minutes : 2,
	seconds : 40,
	//-----------------------//

	fadeCountDown : function(){
		$("#countdown").fadeIn(2000);
	}, 

	showDays : function(){
		$('.days1').show();
		$('.days2').show();
		$('.unity_days').show();
		$('.days1').html(this.tab[0]);
		$('.days2').html(this.tab[1]);
	},

	hideDays : function(){
		$('.days1').fadeOut();
		$('.days2').hide();
		$('.unity_days').hide();
	},

	showHours : function(){
		$('.hours1').show();
		$('.hours2').show();
		$('.unity_hours').show();
		$('.hours1').html(this.tab[2]);
		$('.hours2').html(this.tab[3]);
	},

	hideHours : function(){
		$('.hours1').hide();
		$('.hours2').hide();
		$('.unity_hours').hide();
	},

	showMinutes : function(){
		$('.minutes1').show();
		$('.minutes2').show();
		$('.unity_minutes').show();
		$('.minutes1').html(this.tab[4]);
		$('.minutes2').html(this.tab[5]);
	},

	hideMinutes : function(){
		$('.minutes1').hide();
		$('.minutes2').hide();
		$('.unity_minutes').hide();
	},

	showSeconds : function(){
		$('.seconds1').show();
		$('.seconds2').show();
		$('.unity_seconds').show();
		$('.seconds1').html(this.tab[6]);
		$('.seconds2').html(this.tab[7]);
	},

	hideSeconds : function(){
		$('.seconds1').hide();
		$('.seconds2').hide();
		$('.unity_seconds').hide();
	},

	fadeNewDate : function(target,figure){
		$("."+target).animate(
		{
			"top" : "+=100",
			"opacity" : 0
		}, 100,
		function()
		{
			$("."+target).html(figure);
			$("."+target).css('top', "-=200");
			$("."+target).animate({
				"top" : "+=100",
				"opacity" : 1
			}, 100);
		});
	},

	stop : function(){
		anim.stop();
		$("#countdown").fadeOut(200);
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

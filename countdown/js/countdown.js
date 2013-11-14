var countdown = 
{
	defaults : {},

	init : function(options)
	{
		this.params = $.extend(this.defaults,options);
		this.days = 0;
		this.hours = 0;
		this.minutes = 0;
		this.seconds = 0;
	},

	count : function()
	{
		var countSeconds = (this.params.targetDate - this.params.now)/1000;
		var days = Math.floor(countSeconds / (60 * 60 * 24));
		var hours = Math.floor((countSeconds - (days * 60 * 60 * 24)) / (60 * 60));
		var minutes = Math.floor((countSeconds - ((days * 60 * 60 * 24 + hours * 60 * 60))) / 60);
		var seconds = Math.floor(countSeconds - ((days * 60 * 60 * 24 + hours * 60 * 60 + minutes * 60)));

		var tab = new Array();
		tab[0] = parseInt(days/10).toString();
		tab[1] = (days%10).toString();
		tab[2] = parseInt(hours/10).toString();
		tab[3] = (hours%10).toString();
		tab[4] = parseInt(minutes/10).toString();
		tab[5] = (minutes%10).toString();
		tab[6] = parseInt(seconds/10).toString();
		tab[7] = (seconds%10).toString();
		
		if(this.days != days){
			if(parseInt(this.days/10) != parseInt(days/10))
			{
				this.fadeNewDate('days1',tab[0]);
			}
			this.fadeNewDate('days2',tab[1]);
		}
		else{
			if(days != 0){
				$('.unity_days').show();
				$('.days1').html(tab[0]);
				$('.days2').html(tab[1]);
			}
			else{
				$('.unity_days').hide();
			}	
		}

		if(this.hours != hours){
			if(parseInt(this.hours/10) != parseInt(hours/10))
			{
				this.fadeNewDate('hours1',tab[2]);
			}
			this.fadeNewDate('hours2',tab[3]);
		}
		else{
			if(hours != 0){
				$('.unity_hours').show();
				$('.hours1').html(tab[2]);
				$('.hours2').html(tab[3]);
			}	
			else{
				$('.unity_hours').hide();
			}
		}

		if(this.minutes != minutes){
			if(parseInt(this.minutes/10) != parseInt(minutes/10))
			{
				this.fadeNewDate('minutes1',tab[4]);
			}
			this.fadeNewDate('minutes2',tab[5]);
		}
		else{
			if(minutes != 0){
				$('.unity_minutes').show();
				$('.minutes1').html(tab[4]);
				$('.minutes2').html(tab[5]);
			}	
			else{
				$('.unity_minutes').hide();
			}	
		}

		if(this.seconds != seconds){
			if(parseInt(this.seconds/10) != parseInt(seconds/10))
			{
				this.fadeNewDate('seconds1',tab[6]);
			}
			this.fadeNewDate('seconds2',tab[7]);
		}
		else{
			if(seconds != 0){
				$('.unity_seconds').show();
				$('.seconds1').html(tab[6]);
				$('.seconds2').html(tab[7]);
			}	
			else{
				$('.unity_seconds').hide();
			}	
		}
		this.update(days,hours,minutes,seconds);
	},

	update : function(days,hours,minutes,seconds)
	{
		this.params.now = new Date();
		this.days = days;
		this.hours = hours;
		this.minutes = minutes;
		this.seconds = seconds;
	},

	fadeNewDate : function(target,figure)
	{	
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
	}
}
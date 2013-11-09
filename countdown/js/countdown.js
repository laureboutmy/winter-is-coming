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
		if(this.days != days)
		{
			this.fadeNewDate('date',date);
		}
		else
		{
			$('.days').html(days);
		}

		if(this.hours != hours)
		{

			this.fadeNewDate('hours',hours);
		}
		else
		{
			$('.hours').html(hours);
		}

		if(this.minutes != minutes)
		{

			this.fadeNewDate('minutes',minutes);
		}
		else
		{
			$('.minutes').html(minutes);
		}

		this.fadeNewDate('seconds',	seconds);
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

	fadeNewDate : function(target,value)
	{		
		$("."+target).animate(
		{
			"top" : "+=100",
			"opacity" : 0
		}, 100,
		function()
		{
			$("."+target).html(value);
			$("."+target).css('top', "-=200");
			$("."+target).animate({
				"top" : "+=100",
				"opacity" : 1
			}, 100);
		});
	}
}
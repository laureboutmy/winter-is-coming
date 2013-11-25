var countdown = {

	params : {
		fadeCountDown : function(){},

		showDays: function(){},
		hideDays: function(){},

		showHours: function(){},
		hideHours: function(){},

		showMinutes: function(){},
		hideMinutes: function(){},

		showSeconds: function(){},
		hideSeconds: function(){},

		fadeNewDate : function(){},

		stop : function(){}
	},

	init : function(options){
		this.params = $.extend(this.defaults,options);
		this.days = this.params.days;
		this.hours = this.params.hours;
		this.minutes = this.params.minutes;
		this.seconds = this.params.seconds;
		this.params.fadeCountDown.call(this);
	},

	count : function(){

		var countSeconds = this.convertDate(this.params.days,this.params.hours,this.params.minutes,this.params.seconds);

		if(countSeconds == 0) this.end();

		var days = Math.floor(countSeconds / (60 * 60 * 24));
		var hours = Math.floor((countSeconds - (days * 60 * 60 * 24)) / (60 * 60));
		var minutes = Math.floor((countSeconds - ((days * 60 * 60 * 24 + hours * 60 * 60))) / 60);
		var seconds = Math.floor(countSeconds - ((days * 60 * 60 * 24 + hours * 60 * 60 + minutes * 60)));

		this.tab = new Array();
		this.tab[0] = parseInt(days/10).toString();
		this.tab[1] = (days%10).toString();
		this.tab[2] = parseInt(hours/10).toString();
		this.tab[3] = (hours%10).toString();
		this.tab[4] = parseInt(minutes/10).toString();
		this.tab[5] = (minutes%10).toString();
		this.tab[6] = parseInt(seconds/10).toString();
		this.tab[7] = (seconds%10).toString();
		
		if(this.days != days){
			if(parseInt(this.days/10) != parseInt(days/10))
			{
				this.params.fadeNewDate.call(this,'days1',this.tab[0]);
			}
			this.params.fadeNewDate.call(this,'days2',this.tab[1]);
		}

		if(this.hours != hours){
			
			if(parseInt(this.hours/10) != parseInt(hours/10))
			{
				this.params.fadeNewDate.call(this,'hours1',this.tab[2]);
			}
			this.params.fadeNewDate.call(this,'hours2',this.tab[3]);
		}

		if(this.minutes != minutes){
			
			if(parseInt(this.minutes/10) != parseInt(minutes/10))
			{
				this.params.fadeNewDate.call(this,'minutes1',this.tab[4]);
			}
			this.params.fadeNewDate.call(this,'minutes2',this.tab[5]);
		}

		if(this.seconds != seconds){
			
			if(parseInt(this.seconds/10) != parseInt(seconds/10))
			{
				this.params.fadeNewDate.call(this,'seconds1',this.tab[6]);
			}
			this.params.fadeNewDate.call(this,'seconds2',this.tab[7]);
		}

		this.params.showDays.call(this);
		this.params.showHours.call(this);
		this.params.showMinutes.call(this);
		this.params.showSeconds.call(this);

		this.update(countSeconds,days,hours,minutes,seconds);
	},

	update : function(countSeconds,days,hours,minutes,seconds){

		countSeconds--;
		this.params.days = 	Math.floor(countSeconds / (60 * 60 * 24));
		this.params.hours = Math.floor((countSeconds - (this.params.days * 60 * 60 * 24)) / (60 * 60));
		this.params.minutes = Math.floor((countSeconds - ((this.params.days * 60 * 60 * 24 + this.params.hours * 60 * 60))) / 60);
		this.params.seconds = Math.floor(countSeconds - ((this.params.days * 60 * 60 * 24 + this.params.hours * 60 * 60 + this.params.minutes * 60)));

		this.days = days;
		this.hours = hours;
		this.minutes = minutes;
		this.seconds = seconds--;		
	},

	convertDate : function(days,hours,minutes,seconds){
		target = days*24*60*60+hours*60*60+minutes*60+seconds;
		return target;
	},

	end : function(){
		this.params.stop.call(this);
	}
}
var badges = {
	params: {
		rendered: function(){},
		claimed: function(){}
	},

	// Badges
	default: {
		acolyte: false,
		envoy: false,
		dovecot: false,
		lannister: false,
		couch_potato: false,
		please_not_the_wolf: false,
		savant: false,
		walder_frey: false
	},

	// Initialization, check if there is already a localStorage called badges
	init: function(options){
		this.prop = $.extend(this.params, options);
		if(localStorage.getItem("badges") == null){
			localStorage.setItem("badges", JSON.stringify(this.default));
		} else {
			var allBadges = JSON.parse(localStorage["badges"]);
			for (badge in allBadges){
				if(allBadges[badge]){
					badges.render(badge);
				}
			}
		}
	},

	// To snatch a badge
	claim: function(name){
		var tempStorage = JSON.parse(localStorage["badges"]);
		if(tempStorage[name]){
			return;
		} else {
			tempStorage[name] = true;
			localStorage.setItem("badges", JSON.stringify(tempStorage));
			this.prop.claimed.call(this, name);
			this.render(name);
		}
		
	},

	// To display badge
	render: function(name){
		this.prop.rendered.call(this, name);
	},

	// Check if badge is claimed
	isClaimed: function(data){
		if(localStorage.getItem("badges")== null){
			return false;
		} else {
			return JSON.parse(localStorage["badges"])[data];
		}
	},

	// Get number of snatched badges
	getNumber: function(){
		var i = 0;
		var allBadges = JSON.parse(localStorage["badges"]);
		for (badge in allBadges){
			console.log(allBadges[badge]);
			if(allBadges[badge]){ i ++ }
		}
		if(i > 1){ return i + ' badges'; } else { return i + ' badge'; }
		
	}
}
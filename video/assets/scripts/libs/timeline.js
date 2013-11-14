var timeline = {
	params: {
		main: '#main',
		timeline: '#timeline',
		rendered: function(){},
		moved: function(){}
	},

	init: function(options){
		this.prop = $.extend(this.params, options);
	},

	render: function(card){
		if(card.browser){
			var evtA = $('<a>').attr('data-url', card.url).attr('href', '#').addClass('browser').attr('data-key', card.displayTime);
			var evtDiv = $('<div>').text(card.content).addClass('evt visible').attr('data-key', card.displayTime);
			evtDiv = evtA.append(evtDiv);
		} else {
			var evtDiv = $('<div>').text(card.content).addClass('evt visible').attr('data-key', card.displayTime);
		}

		card.displayed = true;

		$(timeline.prop.main).append(evtDiv);

		timeline.prop.rendered.call(this);
	},

	move: function(card){
		if(card.browser){
			$(timeline.prop.main).find('a.browser[data-key=' + card.displayTime + ']').prependTo(timeline.prop.timeline);
		} else {
			$(timeline.prop.main).find('div[data-key=' + card.displayTime + ']').prependTo(timeline.prop.timeline);
		}
		card.hidden = true;
		timeline.prop.moved.call(this);

	},

	addMarker: function(card){
		var evtMarker = $('<a>').addClass('evt').attr('href', '#').attr('data-key', card.displayTime).text('.');
		evtMarker.css({
			left: 50 * 100 / $('#player nav').width() + card.displayTime * 100 / player.media.duration + '%'
		}).appendTo('#player nav')
	}

}

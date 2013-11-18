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
			var evtDiv = $('<article>').addClass('card').attr('data-key', card.displayTime).append(
					$('<div>').addClass('time').text(card.time).append($('<span>').text('min')),
					$('<div>').addClass('img').append(
						$('<img>').attr('src', card.imgTimeline).attr('alt', card.title),
						$('<span>')
					),
					$('<div>').addClass('text').append(
						$('<h2>').text(card.title),
						$('<p>').text(card.description),
						$('<span>').text(card.cta)
					)
				);
			evtDiv = evtA.append(evtDiv);
		} else {
			var evtDiv = $('<div>').text(card.content).addClass('card').attr('data-key', card.displayTime);
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
		var evtMarker = $('<a>').addClass('marker').attr('href', '#').attr('data-key', card.displayTime).append($('<span>').addClass('gradient').text(''));
		if(card.title && card.imgMarker && card.category && card.time){
			var tooltip = $('<div>').addClass('tooltip').append(
				$('<img>').attr('src', card.imgMarker).attr('alt', card.title), 
				$('<h3>').append(
					$('<span>').addClass('time').text(card.time + 'min'), 
					$('<span>').addClass('category').text(card.category),
					$('<span>').addClass('title').text(card.title)
				)
			);
			evtMarker = evtMarker.append(tooltip);
		}
		
		evtMarker.css({
			left: card.displayTime * 100 / player.media.duration + '%'
		}).appendTo('#player nav #progress-bar')
		setTimeout(function(){
			evtMarker.addClass('visible');
		}, 1000);
	}

}

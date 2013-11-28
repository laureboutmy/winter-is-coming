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

		if(card.url){
			var evtA = $('<a>').attr('data-key', card.displayTime);
			if(card.browser){
				evtA.addClass('browser').attr('data-url', card.url);
			} else {
				evtA.attr('href', card.url).addClass('pause-video').attr('target', '_blank');
			}

			if(card.category == 'GIF'){
				var evtDiv = $('<article>').addClass('card hidden').attr('data-key', card.displayTime).append(
					$('<div>').addClass('time').text(card.time).append($('<span>').text('min')),
					$('<div>').addClass('img').append(
						$('<img>').attr('src', card.imgTimeline).attr('alt', card.title),
						$('<span>').addClass('inset'),
						$('<span>').addClass('sticker').text('GIF')
					),
					$('<div>').addClass('text').append(
						$('<h2>').text(card.title),
						$('<p>').text(card.description),
						$('<span>').text(card.cta).append($('<i>'))
					)
				);
			} else {
				var evtDiv = $('<article>').addClass('card hidden').attr('data-key', card.displayTime).append(
						$('<div>').addClass('time').text(card.time).append($('<span>').text('min')),
						$('<div>').addClass('img').append(
							$('<img>').attr('src', card.imgTimeline).attr('alt', card.title),
							$('<span>').addClass('inset')
						),
						$('<div>').addClass('text').append(
							$('<h2>').text(card.title),
							$('<p>').text(card.description),
							$('<span>').text(card.cta).append($('<i>'))
						)
					);
			}
			
			evtDiv = evtA.append(evtDiv);

		} else if(card.facebook){
			var evtDiv = $('<article>').addClass('card hidden facebook').attr('data-key', card.displayTime).append(
					$('<div>').addClass('time').text(card.time).append($('<span>').text('min')),
					$('<div>').addClass('img').append(
						$('<img>').attr('src', card.imgTimeline).attr('alt', card.title),
						$('<span>').addClass('inset')
					),
					$('<div>').addClass('text').append(
						$('<h2>').text(card.title),
						$('<ul>').addClass('mood').append(
							$('<li>').attr('data-mood', card.id1).text(card.mood1),
							$('<li>').attr('data-mood', card.id2).text(card.mood2),
							$('<li>').attr('data-mood', card.id3).text(card.mood3)
						)
					)
				);
			console.log(evtDiv);
		} else {
			var evtDiv = $('<article>').addClass('card hidden').attr('data-key', card.displayTime).append(
					$('<div>').addClass('time').text(card.time).append($('<span>').text('min')),
					$('<div>').addClass('img').append(
						$('<img>').attr('src', card.imgTimeline).attr('alt', card.title),
						$('<span>').addClass('inset')
					),
					$('<div>').addClass('text').append(
						$('<h2>').text(card.title),
						$('<p>').text(card.description)
					)
				);
		}
		
		if(card.category == 'GIF'){ evtDiv.addClass('gif'); }
		card.displayed = true;

		$(timeline.prop.timeline).prepend(evtDiv);

		timeline.prop.rendered.call(this);

	},

	// move: function(card){
	// 	if(card.browser){
	// 		$(timeline.prop.main).find('a.browser[data-key=' + card.displayTime + ']').prependTo(timeline.prop.timeline);
	// 	} else {
	// 		$(timeline.prop.main).find('div[data-key=' + card.displayTime + ']').prependTo(timeline.prop.timeline);
	// 	}
	// 	card.hidden = true;
	// 	timeline.prop.moved.call(this);

	// },

	addMarker: function(card){
		var evtMarker = $('<a>').addClass('marker').attr('href', '#').attr('data-key', card.displayTime).append($('<span>').addClass('gradient').text(''));
		if(card.title && card.imgMarker && card.category && card.time){
			var tooltip = $('<div>').addClass('tooltip').append(
				$('<img>').attr('src', card.imgMarker).attr('alt', card.title), 
				$('<h3>').append(
					$('<span>').addClass('time').text(card.time + 'min').append($('<i>')), 
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

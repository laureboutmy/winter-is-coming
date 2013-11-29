/*
	Initialize Tumblr Sharing
*/
var img = $('#browser div.gif img')
var href = 'http://www.tumblr.com/share/photo?source=' + encodeURIComponent(img.attr('src')) + '&caption=' + encodeURIComponent(img.attr('alt')) + '&click_thru=' + encodeURIComponent('http://www.google.fr');
$('#tumblr_share_gif').attr('href', href);
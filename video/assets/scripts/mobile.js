pusher.subscribe("mobile");

var current = 'remote';
function changeWindow(e){
    e.preventDefault();
    var future = $(this).attr('href');
    if(future == current){ return; }
    if(future == 'remote'){
        $('section#feed').addClass('hidden');
        $('section#remote').removeClass('hidden');
        $('a.remote').addClass('hidden');
        $('a.feed').removeClass('hidden');
    } else if(future == 'feed'){
        $('section#feed').removeClass('hidden');
        $('section#remote').addClass('hidden');
        $('a.feed').addClass('hidden');
        $('a.remote').removeClass('hidden');
    }
    current = future;
}
$('header nav').on('click', 'a', changeWindow);
$('ul#tweets li.tweet').swipe({
    //Generic swipe handler for all directions
    swipe:function(event, direction, distance, duration, fingerCount) {
        if(direction == 'right'){
            $(this).find('div.actions').addClass('visible');
        } else {
            $(this).find('div.actions').removeClass('visible');

        }
    }
});

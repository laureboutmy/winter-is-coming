countdown.init({
	now : new Date(),
	targetDate : new Date('Nov 9 23:00:00 2013')
});

// Lauches the countdown
function play() {
	countdown.count();
    return(setInterval("countdown.count();", 1000));
}
play();





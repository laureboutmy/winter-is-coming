var pusher = {
    params: {
        channel: window.location.hash.substring(1),
        path: "/winter-is-coming/video/assets/pusher/mobile.php",
        instance: new Pusher('d6d5c184ca85e911a2df')
    },
    listen: function() {
        this.params.instance.subscribe(this.params.channel).bind('play', function(data) {
            player.playPause();
        });
        this.params.instance.subscribe(this.params.channel).bind('mute', function(data) {
            player.mute();
        });
    },
    createGuid: function() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = Math.random() * 16 | 0,
                v = c === 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    },
    action: function(action) {
        $.ajax({
            url: this.params.path,
            data: {
                "action": action,
                "channel": this.params.channel
            }
        });
    },
    subscribe: function(platform) {
        if (platform == "mobile") {
            this.params.instance.subscribe(this.params.channel);
            console.log(this.params.channel);
        } else if (platform == "desktop") {
            this.params.channel = this.createGuid();
            this.params.instance.subscribe(this.params.channel);
            this.listen();
            console.log(this.params.channel);
        }
    }
}
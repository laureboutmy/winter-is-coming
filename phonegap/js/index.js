var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    bindEvents: function() {
        document.getElementById('scan').addEventListener('click', this.scan, false);    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    },

    scan: function() {
        console.log('scanning');
        // Hiding the content of the web page so that it does not display while the mobile version is loading.
        document.getElementById('phonegap').style.display='none';
        
        var scanner = cordova.require("cordova/plugin/BarcodeScanner");

        scanner.scan( function (result) { 

           /* alert("We got a barcode\n" + 
            "Result: " + result.text + "\n" + 
            "Format: " + result.format + "\n" + 
            "Cancelled: " + result.cancelled);  

           console.log("Scanner result: \n" +
                "text: " + result.text + "\n" +
                "format: " + result.format + "\n" +
                "cancelled: " + result.cancelled + "\n");
            document.getElementById("info").innerHTML = result.text;
            console.log(result);*/
            
          // Opening the mobile version in a web-view.
            window.open("http://doriancamilleri.fr/winter-is-coming/mobile.php?PHPSESSID="+result.text, '_self', 'location=yes');

        }, function (error) { 
            console.log("Scanning failed: ", error); 
            document.getElementById('phonegap').style.display='block';
        } );
    }
};

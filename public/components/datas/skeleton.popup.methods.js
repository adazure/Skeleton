/////////////////////////////////////////////////////////////////////////
//          SKELETON POPUP METHOD
/////////////////////////////////////////////////////////////////////////

(function (_) {

    _.MODULE(function () {

        var method = _.popup.method;
        var popup = _.popup.objects;



        //....................................................................................



        function open(url) {

            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    popup.content.innerHTML = xhttp.responseText;
                }
            };

            xhttp.open("GET", url, true);
            xhttp.send();

        }



        //....................................................................................



        //Formu onayladığında yapılacak işlemler
        function accept() {
            console.log('Kabul edildi');
        }



        //....................................................................................



        //İptal ettiğinde yapılacak işlemler
        function reject() {
            console.log('Reddedildi');
        }



        //....................................................................................



        function watch() {
            console.log('Takibe alındı');
        }



        //....................................................................................



        function close() {
            if (popup.container)
                popup.container.parentNode.removeChild(popup.container);
        }



        //....................................................................................



        method.open = open;
        method.close = close;
        method.accept = accept;
        method.reject = reject;
        method.watch = watch;

    }); // MODULE


})(SkeletonAction);
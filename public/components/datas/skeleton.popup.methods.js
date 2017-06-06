/////////////////////////////////////////////////////////////////////////
//          SKELETON POPUP METHOD
/////////////////////////////////////////////////////////////////////////

(function (_) {

    _.MODULE(function () {

        var method = _.popup.method;
        var popup = _.popup.objects;
        var coll = _.collection.create;



        //....................................................................................



        function open(url) {

            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {

                    create();

                    var text = xhttp.responseText;

                    // Yüklenen sayfa içerisinde script tag'ı varsa çalıştır
                    var regex = _.regex.rules.scriptTag;
                    var src = text.match(regex);
                    text = text.replace(regex, '');
                    popup.content.setHTML(text);
                    popup.container.show();
                    parent.Skeleton.popupmodal = {
                        // Popup ile ilgili veriler
                        content: {
                            title: '',
                            url: url,
                            html: xhttp.responseText
                        },
                        // Kaydet/onayla butonuna basıldığında işletilecek
                        accept: accept,
                        // Sayfadan çıkıldığında/iptal edildiğinde çalıştırılacak method
                        reject: reject,
                        watch: watch,
                        // Popup pencereyi kapatmak için kullanılmaktadır
                        close: close
                    }

                    if (src) {
                        var _script = new coll('script')
                            .setHTML(src[1])
                            .insert(popup.content.target);

                    }

                }
            };

            xhttp.open("GET", url, true);
            xhttp.send();

        }


        //....................................................................................


        function create() {


            // Popup container 
            var container = new coll('div', {
                id: 'skeleton-popup-container'
            })
                // Style
                .setCSS({
                    backgroundColor: 'rgba(0,0,0,.4)',
                    position: 'fixed',
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0,
                    display: 'none'
                });


            // Popup Content
            var content = new coll('div', {
                id: 'skeleton-popup-content'
            })
                //.setClass('animated','jello')
                // Style
                .setCSS({
                    position: 'fixed',
                    backgroundColor: 'white',
                    left: '50%',
                    top: '50%',
                    transform: 'translate(-50%,-50%)',
                    border: '2px solid #fff',
                    padding: 0,
                    boxShadow: '3px 3px 17px -3px #000',
                    animation: 'skeleton-popup-modal .5s forwards',
                    minWidth: '500px'
                });

            popup.container = container;
            popup.content = content;

            container.target.appendChild(content.target);
            parent.document.body.appendChild(container.target);

        }


        //....................................................................................



        //Formu onayladığında yapılacak işlemler
        function accept() {
            console.log('Kabul edildi', _.data);
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

        // Popup modalın verilerini sıfırlayalım

        function reset() {
            popup.data = null;
        }

        //....................................................................................

        
        function close() {
            if (popup.container) {
                popup.container.target.parentNode.removeChild(popup.container.target);
                reset();
            }

        }



        //....................................................................................



        method.open = open;
        method.close = close;
        method.accept = accept;
        method.reject = reject;
        method.watch = watch;

    }); // MODULE


})(SkeletonAction);
/////////////////////////////////////////////////////////////////////////
//          SKELETON POPUP METHOD
/////////////////////////////////////////////////////////////////////////

(function(_) {

    _.MODULE(function() {

        var method = _.popup.method;
        var popup = _.popup.objects;
        var coll = _.collection.create;
        var helper = _.helper.method;



        //....................................................................................



        function open(url) {

            helper.http(url, function(data) {

                create();

                var text = data;

                // Yüklenen sayfa içerisinde script tag'ı varsa çalıştır
                var regex = _.regex.rules.scriptTag;
                var src = text.match(regex);
                text = text.replace(regex, '');
                popup.content.setHTML(text);
                popup.container.show();


                popup.header = {
                    title: '',
                    url: url,
                    html: data
                };

                if (src) {
                    var _script = new coll('script')
                        .setHTML(src[1])
                        .insert(popup.content.target);

                }

            });


        }




        //....................................................................................


        function openData(htmlData) {

            create();
            if (typeof htmlData != 'object')
                popup.content.setHTML(htmlData);
            else
                popup.content.append(htmlData);
            popup.container.show();
        }


        //....................................................................................


        function create() {


            // Popup container 
            var container = new coll('div', {
                id: 'skeleton-popup-container'
            });


            // Popup Content
            var content = new coll('div', {
                    id: 'skeleton-popup-content'
                })
                .setClass('animated', 'fadeIn');

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



        _.popup.open = method.open = open;
        _.popup.openData = method.openData = openData;
        _.popup.close = method.close = close;
        _.popup.accept = method.accept = accept;
        _.popup.reject = method.reject = reject;
        _.popup.watch = method.watch = watch;

    }); // MODULE


})(Skeleton);
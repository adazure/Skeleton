/////////////////////////////////////////////////////////////////////////
//          SKELETON INIT
/////////////////////////////////////////////////////////////////////////

(function (_) {

    // Init Module

    _.MODULE(function () {

        var path = _.path;
        var menu = _.menuObject;
        var helper = _.helper;
        var popup = _.popup;
        var method = _.method;
        var globMethod = _.globalMethod;

        //....................................................................................



        // Sahne üzerinde kullanılacak nesneler
        _.container = document.querySelector('svg');
        _.content = document.querySelector('#conteiner_content');



        //....................................................................................



        // Uygulamanın Tablet ve mobilde çalışmasını istemediğimizden dolayı bazı işlemler yapacağız

        if (helper.method.ismobile()) {
            try {

                // Path'lerin bulunduğu nesneyi seç
                var q = document.querySelector('#container_path_models');

                // Sahneden kaldır
                q.parentNode.removeChild(q);

                // Menuyü sahneden kaldır
                menu.container.parentNode.removeChild(menu.container);

                // Bir uyarı penceresi açalım
                popup.open('modals/error.html');


            } catch (e) {

            }
        }



        //....................................................................................



        // Debug modda kullanılmak üzere oluşturuldu
        // Amaç uygulamanın kurulum aşamasında, içerik olmadığından rasgele ilgili path'lere keyname oluşturması için yapıldı
        if (_.debugmode) {


            //Rasgele içerik üreterek ilgili path alanlarına atama yapmakta
            function get(count) {
                var rndCount = Math.round(Math.random() * tempNames.length);
                var result = [];
                var tempNum = 0;
                while (tempNum < count) {
                    result.push(tempNames[rndCount]);
                    tempNum++;
                }
                return result;
            }

            var tempNames = Object.keys(menu.data);
            Object.keys(path.data).forEach(function (e) {
                var tempRnd = Math.random(6) + 1;
                path.data[e].data = get(tempRnd);
            });

        }



        //....................................................................................



        // Sağ tuş menu etkileşimi sağlayalım
        window.addEventListener('contextmenu', method.contextmenu, false);


        //....................................................................................


        // Uygulamanın can damarı aslında burası.
        // Uygulama sürükle bırak üzerine kurulduğu için, mouseup ve move işlemleri üzerinde kontrollerimizi yapacağız
        // Bu alan sadece SVG dosyaları için
        window.addEventListener('mouseup', method.windowMouseUp);
        window.addEventListener('mousemove', method.windowMouseMove);
        window.addEventListener('mousedown', method.windowMouseDown);
        window.addEventListener('keyup', path.method.removeSelectedClone);

        // Bu alan hem parent hem de SVG alanı için ortak
        for (var n = 0, l = [window, parent.window]; n < l.length; n++) {
            l[n].addEventListener('mouseup', globMethod.triggerUp);
            l[n].addEventListener('mousedown', globMethod.triggerDown);
            l[n].addEventListener('mousemove', globMethod.triggerMove);
        }

        //....................................................................................



        _.path.method.loadData(_.data);

        _.prompter.show({
            message:'Exercise used to be discouraged among people with cystic fibrosis (CF) because it was thought that overexertion would increase breathing problems. Now we know that the opposite is actually true. Studies have shown that regular physical activity provides many benefits to people with cystic fibrosis.'
        });

    }); // MODULE




    // Tüm modülleri çalıştır
    _.MODULE();



})(Skeleton);
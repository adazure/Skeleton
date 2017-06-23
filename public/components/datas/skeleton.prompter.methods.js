/////////////////////////////////////////////////////////////////////////
//          SKELETON PROMPTER METHOD
/////////////////////////////////////////////////////////////////////////

(function (_) {

    _.MODULE(function () {

        var prom = _.prompter;
        var coll = _.collection.create;
        var isRemoved = true;
        var time = 0;

        function removeContainer(ev, action) {

            isRemoved = false;
            prom.container.setClass('prev');
            prom.content.setClass('prev');

            if (time)
                clearTimeout(time);

            time = setTimeout(function () {

                // kaldır
                prom.container.remove();
                // Sıfırla
                prom.container = null;

                // Sayfada animasyon ve silme işlemi tamamlandı
                isRemoved = true;

            }, 1000);
        }


        function show(args) {
            // Sahnede işlemi bitmemiş bir şey varsa  iptal et
            if (!isRemoved) return;

            function setting() { }
            setting.close = removeContainer;

            isRemoved = false;
            time = setTimeout(function () {

                if (!prom.container)
                    prom.container = new coll('div', { id: 'skeleton-prompter-container' })
                        .insert(parent.document.body);

                change(args);
                isRemoved = true;
            }, args.delay || 0);


            return setting;
        }

        function removeContent(action) {

            if (prom.content)
                prom.content.remove();

            if (action)
                action();

        }

        // Prompter'in mesajının görüntülendiği alan
        // Burada mesaj alanı oluşturuluyor
        function change(args) {

            // Önce var olan mesaj alanını kaldır
            removeContent(function () {

                // Mesajın görüneceği container nesnesini oluştur
                prom.content = new coll('div', { id: 'skeleton-prompter-content' })
                    .insert(prom.container.target);

                // Başlık metni varsa başlığın görüneceği nesneyi oluştur ve başlığı ekle
                if (args.title)
                    prom.title = prom.content.create('div', { id: 'skeleton-prompter-title' })
                        .setHTML(args.title);

                // Metnin görüneceği nesneyi oluştur
                prom.text = prom.content.create('div', { id: 'skeleton-prompter-text' });

                // Görünecek metnin öncesinde gelen datanın array mi yoksa normal string mi olduğuna göre işlem yapılacak
                if (typeof args.message === 'object')
                    for (var i = 0, y = ""; i < args.message.length; i++) {
                        var o = new coll('label')
                        .setCSS({'display':'block','margin-bottom':'7px'})
                            .setHTML(args.message[i])
                            .insert(prom.text.target);
                    }
                else
                {
                    prom.text.setHTML(args.message);
                }

                if (args.closeVisible == undefined || args.closeVisible === true)
                    prom.close = prom.content.create('div', { id: 'skeleton-prompter-close' })
                        .setBind('click', args.close || removeContainer);
                else {
                    setTimeout(removeContainer, args.timer || 3000);
                }

            });

        }



        prom.show = show;
        prom.close = removeContainer;
        prom.change = change;


    });


})(Skeleton);
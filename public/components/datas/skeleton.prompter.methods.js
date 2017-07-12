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

        function change(args) {

            removeContent(function () {

                prom.content = new coll('div', { id: 'skeleton-prompter-content' })
                    .insert(prom.container.target);

                prom.title = prom.content.create('div', { id: 'skeleton-prompter-title' })
                    .setHTML(args.title);

                prom.text = prom.content.create('div', { id: 'skeleton-prompter-text' })
                    .setHTML(args.message);

                prom.close = prom.content.create('div', { id: 'skeleton-prompter-close' })
                    .setBind('click', args.close || removeContainer);

            });

        }



        prom.show = show;
        prom.close = removeContainer;
        prom.change = change;


    });


})(Skeleton);
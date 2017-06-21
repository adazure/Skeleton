/////////////////////////////////////////////////////////////////////////
//          SKELETON DIALOG METHOD
/////////////////////////////////////////////////////////////////////////

(function(_) {

    _.MODULE(function() {

        var dialog = _.dialog;
        var coll = _.collection.create;



        //....................................................................................



        function show(args) {
            create(args);
            if (args.content)
                dialog.content.setHTML(args.content);

            if (args.title)
                dialog.title.setHTML(args.title);

            if (dialog.button1) {
                dialog.button1.setVal(args.button1.text);
                dialog.button1.setBind('click', args.button1.action);
            }
            if (dialog.button2) {
                dialog.button2.setVal(args.button2.text);
                dialog.button2.setBind('click', args.button2.action);
            }
            dialog.container.show();
            dialog.shadow.show();
        }




        //....................................................................................



        function basic(title, message) {
            create({
                button1: true
            });
        }


        //....................................................................................


        function prompt(args) {

            show({
                title: args.title,
                button1: {
                    text: args.button1.text,
                    action: function(e) {
                        args.button1.action(e, inp);
                    }
                }
            });

            var inp = new coll('input', { type: 'text', id: 'dialog-prompt-input' })
                .setCSS('width', '100%')
                .insert(dialog.content.target);

        }



        //....................................................................................




        function hide() {
            if (dialog.shadow) {
                dialog.shadow.remove();
                dialog.container.remove();
                dialog.shadow = null;
                dialog.container = null;
                dialog.button1 = null;
                dialog.button2 = null;
            }
        }




        //....................................................................................

        // Dialog penceresini oluşturur
        function create(args) {

            hide();
            // Gölge katmanı
            dialog.shadow = new coll('div', { id: 'skeleton-dialog-shadow' })
                .insert(parent.document.body);

            // Görünen dialog penceresi
            dialog.container = new coll('div', { id: 'skeleton-dialog' })
                .insert(parent.document.body);

            // Dialog mesajının başlık
            if (args.title)
                dialog.title = new coll('div', { id: 'skeleton-dialog-title' })
                .insert(dialog.container.target);

            // Dialog mesajının görünen kısmı
            dialog.content = new coll('div', { id: 'skeleton-dialog-content' })
                .insert(dialog.container.target);

            // Butonların bulunduğu bölüm
            dialog.footer = new coll('div', { id: 'skeleton-dialog-footer' })
                .insert(dialog.container.target);

            // Buton nesneleri
            if (args.button1)
                dialog.button1 = new coll('input', { type: 'button', id: 'skeleton-dialog-button1' })
                .setClass('skeleton-dialog-button')
                .insert(dialog.footer.target);

            if (args.button2)
                dialog.button2 = new coll('input', { type: 'button', id: 'skeleton-dialog-button2' })
                .setClass('skeleton-dialog-button')
                .insert(dialog.footer.target);

        }


        //....................................................................................

        // Dialog penceresindeki butonları aktif yapar
        function active() {

            dialog.button1.remClass('disabled-btn');
            dialog.button2.remClass('disabled-btn');

        }


        //....................................................................................



        // Dialog penceresindeki butonları pasifize eder.
        // Veritabanı gibi işlem sırasında belki yükleme sürmesi dolayısıyla butonları pasif duruma getirmek isteyebiliriz.

        function passive() {

            dialog.button1.setClass('disabled-btn');
            dialog.button2.setClass('disabled-btn');

        }


        //....................................................................................


        dialog.show = show;
        dialog.basic = basic;
        dialog.hide = hide;
        dialog.passive = passive;
        dialog.active = active;
        dialog.prompt = prompt;



    }); // MODULE

})(Skeleton);
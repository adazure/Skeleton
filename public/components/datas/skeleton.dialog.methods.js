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
            dialog.content.setHTML(args.content);
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
                title: title,
                message: message,
                button1: {
                    text: 'TAMAM',
                    action: hide
                }
            });
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



    }); // MODULE

})(Skeleton);
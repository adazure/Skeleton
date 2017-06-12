/////////////////////////////////////////////////////////////////////////
//          SKELETON DIALOG METHOD
/////////////////////////////////////////////////////////////////////////

(function(_) {

    _.MODULE(function() {

        var dialog = _.dialog;
        var coll = _.collection.create;



        //....................................................................................



        function show(args) {
            create();
            dialog.content.setHTML(args.content);
            dialog.button1.setVal(args.button1.text);
            dialog.button2.setVal(args.button2.text);
            dialog.button1.setBind('click', args.button1.action);
            dialog.button2.setBind('click', args.button2.action);
            dialog.container.show();
            dialog.shadow.show();
        }



        //....................................................................................



        function hide() {
            dialog.shadow.remove();
            dialog.container.remove();
        }




        //....................................................................................

        // Dialog penceresini oluşturur
        function create() {


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
            dialog.button1 = new coll('input', { type: 'button', id: 'skeleton-dialog-button1' })
                .setClass('skeleton-dialog-button')
                .insert(dialog.footer.target);


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
        dialog.hide = hide;
        dialog.passive = passive;
        dialog.active = active;



    }); // MODULE

})(Skeleton);
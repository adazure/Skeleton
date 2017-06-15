/////////////////////////////////////////////////////////////////////////
//          SKELETON GALLERY INIT
/////////////////////////////////////////////////////////////////////////

(function(_) {


    _.MODULE(function() {


        var gall = _.gallery;
        var coll = _.collection.create;
        var helper = _.helper;


        //....................................................................................




        gall.container = new coll('div', { id: 'skeleton-upload-files' })
            .setClass('animated', 'flipInX');



        //....................................................................................



        gall.container
            .create('div', { id: 'skeleton-upload-files-header' })
            .setHTML('Upload Files');



        //....................................................................................



        gall.content = new coll('div', { id: 'skeleton-upload-files-content' });



        //....................................................................................



        gall.loader = new coll('div', { id: 'skeleton-upload-loader' })
            .hide()
            .insert(gall.content.target)
            .setClass('animated', 'bounceIn')
        gall.loaderIcon = gall.loader
            .create('div')
            .createParent('label')
            .setClass('animation', 'bounceInLeft')
            .setHTML('YÜKLENİYOR');



        //....................................................................................



        gall.content
            .insert(gall.container.target);



        //....................................................................................



        gall.container
            .insert(parent.document.body);



        //....................................................................................



        gall.footer = new coll('div', { id: 'skeleton-upload-files-footer' })
            .insert(gall.container.target);



        //....................................................................................



        gall.footerForm = new coll('form', {
                method: 'POST',
                'url': '/upload',
                enctype: 'multipart/form-data'
            })
            .insert(gall.footer.target);

        gall.footerInput = new coll('input', { type: 'file', name: 'uploadfile' })
            .insert(gall.footer.target)
            .setBind('change', function(e) {
                if (e.target.value) {
                    gall.loader.show();

                    var fn = gall.footerInput.target.files[0];

                    helper.method.http('/upload', function(f) {
                        console.log(f);
                    }, {
                        enctype: 'multipart/form-data',
                        method: 'POST',
                        data: fn,
                        progress: function(now, total, per) {
                            console.log(now, total, per * 100);
                        }
                    });

                } else {
                    gall.loader.hide();
                }
            });



        //....................................................................................


        gall.footerButton = new coll('input', { type: 'button', id: 'skeleton-upload-button' })
            .setVal('YENİ YÜKLE')
            .insert(gall.footer.target);



        //....................................................................................




    }); // MODULES


})(Skeleton);
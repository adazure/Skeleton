/////////////////////////////////////////////////////////////////////////
//          SKELETON GALLERY INIT
/////////////////////////////////////////////////////////////////////////

(function(_) {


    _.MODULE(function() {


        var gall = _.gallery;
        var coll = _.collection.create;

        gall.container = new coll('div', { id: 'skeleton-upload-files' })
            .setClass('animated', 'flipInX');

        gall.container
            .create('div', { id: 'skeleton-upload-files-header' })
            .setHTML('Upload Files');

        gall.content = new coll('div', { id: 'skeleton-upload-files-content' });

        gall.loader = new coll('div', { id: 'skeleton-upload-loader' })
            .insert(gall.content.target)
            .setClass('animated', 'bounceIn')
            .create('div')
            .createParent('label')
            .setHTML('Yükleniyor...');

        gall.content
            .insert(gall.container.target);

        gall.container
            .insert(parent.document.body);

        gall.footer = new coll('div', { id: 'skeleton-upload-files-footer' })
            .insert(gall.container.target);

        gall.footerButton = new coll('input', { type: 'button', id: 'skeleton-upload-button' })
            .setVal('YENİ YÜKLE')
            .insert(gall.footer.target);


    }); // MODULES


})(Skeleton);
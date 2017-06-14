/////////////////////////////////////////////////////////////////////////
//          SKELETON GALLERY INIT
/////////////////////////////////////////////////////////////////////////

(function(_) {


    _.MODULE(function() {


        var gall = _.gallery;
        var coll = _.collection.create;

        gall.container = new coll('div', { id: 'skeleton-upload-files' })
            .setClass('animated', 'flipInX');
        gall.container.create('div', { id: 'skeleton-upload-files-header' }).setHTML('Upload Files');
        gall.content = new coll('div', { id: 'skeleton-upload-files-content' });

        gall.content.insert(gall.container.target);
        gall.container.insert(parent.document.body);

    }); // MODULES


})(Skeleton);
/////////////////////////////////////////////////////////////////////////
//          SKELETON LAYERS INIT
/////////////////////////////////////////////////////////////////////////

(function (_) {

    _.MODULE(function () {


        var layer = _.layers;
        var coll = _.collection.create;


        layer.objects.container = new coll('div', {
            id: 'skeleton-layer-container'
        }).insert(parent.document.body);

        layer.objects.header = new coll('div', {
            id: 'skeleton-layer-header'
        }).insert(layer.objects.container.target)
            .setHTML(_.lang.current.infoLayerTitle);

        layer.objects.content = new coll('div', {
            id: 'skeleton-layer-content'
        }).insert(layer.objects.container.target);

        layer.objects.footer = new coll('div', {
            id: 'skeleton-layer-footer'
        }).insert(layer.objects.container.target)
            .setHTML(_.lang.current.infoMenuShowHide)
            .setBind('click', function() {
                layer.objects.content.toggleClass('showhide');
            })


        // Init
        layer.method.add({
            text: 'Baş/Boyun/Mide/İnce Bağırsak', change: function (e) {
                console.log(e);
            }
        });
        layer.method.add({
            text: 'Kalın Bağırsak', change: function (e) {
                console.log(e);
            }
        });
        layer.method.add({
            text: 'Karaciğer', change: function (e) {
                console.log(e);
            }
        });


    });

})(Skeleton);
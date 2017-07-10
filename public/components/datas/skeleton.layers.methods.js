/////////////////////////////////////////////////////////////////////////
//          SKELETON LAYERS METHODS
/////////////////////////////////////////////////////////////////////////

(function (_) {

    _.MODULE(function () {

        var coll = _.collection.create;
        var layer = _.layers;



        //....................................................................................



        function add(args) {

            var length = Object.keys(layer.items).length;

            var context = new coll('div')
                .setClass('layer-item')
                .insert(layer.objects.content.target);

            var chkdiv = new coll('div', { id: 'layer' + length })
                .setClass('layer-item-chk')
                .insert(context.target);

            var chk = new coll('input', { type: 'checkbox' })
                .insert(chkdiv.target)
                .setBind('click', args.change);

            var text = new coll('div', { id: 'layer-text' + length })
                .setClass('layer-text')
                .setHTML(args.text)
                .insert(context.target);

            var n = {
                context: context,
                checkbox: {
                    container: chkdiv,
                    target: chk
                },
                text: {
                    container: text
                }
            }

            context.target.__root =
                chkdiv.target.__root =
                chk.target.__root =
                text.target.__root = n;

            layer.items['layer' + length] = n;

            return context;

        }



        //....................................................................................




        layer.method.add = add;

    });

})(Skeleton);
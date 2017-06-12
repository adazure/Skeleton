/////////////////////////////////////////////////////////////////////////
//          SKELETON CONTEXTMENU METHOD
/////////////////////////////////////////////////////////////////////////


(function(_) {

    _.MODULE(function() {

        var context = _.contextmenu;
        var coll = _.collection.create;


        //....................................................................................



        // Contextmenu içerisindeki data listesine yeni bir item eklemek için kullanılır
        // <param item> Object tipinde bir değer alır. {title:'Delete Item',action:functionName}
        function add(args) {
            var what = {};
            what = typeof args == 'object' ? args : { title: args, action: arguments[1] };

            // <div><label></label></div>
            var el = new coll('div', { id: 'cntxmnitem' + context.data.length });
            el.setClass('cntx-item')
                .setBind('click', what.action)
                .insert(context.content.target)
                .create('label')
                .setClass('cntx-item-label')
                .setHTML(what.title)
                .insert(el.target);
            what.el = el;
            context.data.push(what);

        }

        //....................................................................................


        // Toplu olarak item eklemek için method
        function load(items) {
            if (typeof items == 'object') {
                for (var i = 0; i < items.length; i++) {
                    var it = items[i];
                    add(it);
                }
            }
        }

        //....................................................................................


        // Listeyi temizler
        function clear() {
            for (var i = 0; i < data.length; i++) {
                var it = data[i];
                data.el.remBind('click', it.action);
                data.el.parentNode.remove(data.el);
                delete id;
            }
            console.log(data);
        }

        //....................................................................................


        context.method.add = add;
        context.method.load = load;
        context.method.clear = clear;


    }); // MENU

})(Skeleton);
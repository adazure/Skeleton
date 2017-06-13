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
        function clear(action) {
            //hide();
            for (var i = 0, f = context.data; i < f.length; i++) {
                var it = f[i];
                it.el.remove();
            }
            context.data = [];
            if (action)
                action();
        }


        //....................................................................................


        function show(e) {

            context.container.setCSS({
                left: e.pageX + 'px',
                top: e.pageY + 'px'
            });


            context.container.show();
            // Context menüsünü, window sınıfımızda mouseup olayında her durumda kapatalım
            window.addEventListener('mouseup', context.method.hide);
        }



        //....................................................................................


        function hide() {
            window.removeEventListener('mouseup', context.method.hide);
            context.container.hide();
        }




        //....................................................................................



        context.method.add = add;
        context.method.load = load;
        context.method.clear = clear;
        context.method.show = show;
        context.method.hide = hide;


    }); // MENU

})(Skeleton);
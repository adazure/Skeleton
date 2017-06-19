/////////////////////////////////////////////////////////////////////////
//          SKELETON GALLERY METHOD
/////////////////////////////////////////////////////////////////////////

(function(_) {


    _.MODULE(function() {

        var gall = _.gallery;
        var method = gall.method;
        var coll = _.collection.create;


        //....................................................................................


        function add(item) {
            var galItem = new coll('div')
                .setClass('gall-item-name')
                .repeat(2, 'span')

            galItem.first().setHTML(item.title);
            galItem.last().setHTML(item.file);
            galItem.insert(gall.contentList.target);
            return galItem;
        }

        function clear() {
            if (gall.contentList) {
                var list = gall.contentList.target.children;
                while (list.length > 0) {
                    list[0].remove();
                }
            }
        }

        function load(items) {
            clear();
            if (items)
                for (var n = 0; n < items.length; n++) {
                    add(items[n]);
                }
        }


        method.add = add;
        method.clear = clear;
        method.load = load;


    }); // MODULES


})(Skeleton);
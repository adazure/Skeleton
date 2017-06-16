/////////////////////////////////////////////////////////////////////////
//          SKELETON GALLERY METHOD
/////////////////////////////////////////////////////////////////////////

(function(_) {


    _.MODULE(function() {

        var method = _.gallery.method;
        var coll = _.collection.create;


        //....................................................................................


        function add(item) {
            var galItem = new coll('div')
                .setClass('gall-item-name')
                .setHTML(item.desc);
            return galItem;
        }


        method.add = add;

    }); // MODULES


})(Skeleton);
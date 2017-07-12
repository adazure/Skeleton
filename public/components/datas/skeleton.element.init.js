/////////////////////////////////////////////////////////////////////////
//          SKELETON ELEMENT INIT
/////////////////////////////////////////////////////////////////////////

(function(_) {


    _.MODULE(function() {

        // Yardımcılar
        var glob = _.globalPrototype;
        var el = _.element.method;
        var global = _.element.globals;



        //....................................................................................



        for (var e = [parent.HTMLElement], i = 0; i < e.length; i++) {

            // Global

            Object.keys(glob.method).forEach(function(n) {
                //extend(e[i], n, glob[n]);
                e[i].prototype[n] = glob.method[n];
            });

            // Elements

            Object.keys(el).forEach(function(n) {
                //extend(e[i], n, el[n]);
                e[i].prototype[n] = el[n];
            });
        }

    });



})(Skeleton);
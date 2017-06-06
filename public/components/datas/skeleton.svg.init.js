/////////////////////////////////////////////////////////////////////////
//          SKELETON SVG INIT
/////////////////////////////////////////////////////////////////////////

(function (_) {


    _.MODULE(function () {
        // Bu alandaki prototype tanımlamaları sadece SVG nesnelerine tanımlanmıştır

        var glob = _.globalPrototype;
        var method = _.svg.method;



        //....................................................................................



        // Sadece SVG elementleri alacakları prototype methodları aktarılıyor

        for (var e = [SVGGElement, SVGPathElement, SVGPolygonElement, SVGPolylineElement, SVGLineElement, SVGRectElement, SVGImageElement, SVGTextElement, SVGCircleElement], i = 0; i < e.length; i++) {

            // Global

            Object.keys(glob.method).forEach(function (n) {
                e[i].prototype[n] = glob.method[n];
            });

            // Sadece SVG için

            Object.keys(method).forEach(function (n) {
                e[i].prototype[n] = method[n];
            });


        }

    }); // MODULE

})(SkeletonAction);
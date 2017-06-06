/////////////////////////////////////////////////////////////////////////
//          SKELETON COLLECTION INIT
/////////////////////////////////////////////////////////////////////////
(function (_) {


    // MODULE INIT
    _.MODULE(function () {

        var method = _.collection.globals.method;

        parent.window.addEventListener('mouseup', method.up);
        parent.window.addEventListener('mousedown', method.down);
        parent.window.addEventListener('mousemove', method.move);

    });

})(SkeletonAction);
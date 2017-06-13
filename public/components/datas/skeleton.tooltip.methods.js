/////////////////////////////////////////////////////////////////////////
//          SKELETON TOOLTIP METHOD
/////////////////////////////////////////////////////////////////////////
(function(_) {

    _.MODULE(function() {


        var tooltip = _.tooltip;

        function message(message, opts) {

            if (!message) return;
            opts = opts || { x: null, y: null, ev: parent.window.event };
            tooltip.container.target.setCSS({
                left: (opts.x || opts.ev.pageX || parent.window.event.pageX) + 'px',
                top: (opts.y || opts.ev.pageY || parent.window.event.pageY) + 'px'
            });

            tooltip.container.setHTML(message);
            show();

            setTimeout(hide, 2500);
        }


        //....................................................................................



        function show() {
            tooltip.container.target.setCSS('display', 'block');
        }



        //....................................................................................



        function hide() {
            tooltip.container.target.setCSS('display', 'none');
        }



        //....................................................................................


        tooltip.message = message;
        tooltip.show = show;
        tooltip.hide = hide;



    }); // MODULE

})(Skeleton);
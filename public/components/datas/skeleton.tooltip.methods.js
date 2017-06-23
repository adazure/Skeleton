/////////////////////////////////////////////////////////////////////////
//          SKELETON TOOLTIP METHOD
/////////////////////////////////////////////////////////////////////////
(function(_) {

    _.MODULE(function() {


        var tooltip = _.tooltip;
        var time = 0;
        function message(message, opts) {

            if (!message) return;
            opts = opts || { x: null, y: null, ev: parent.window.event };
            tooltip.container.target.setCSS({
                left: (opts.x || opts.ev.pageX || parent.window.event.pageX) + 20 + 'px',
                top: (opts.y || opts.ev.pageY || parent.window.event.pageY) + 20 + 'px'
            });

            tooltip.container.setHTML(message);
            show();
            if(time)
            clearTimeout(time);
            time = setTimeout(hide, 2500);
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
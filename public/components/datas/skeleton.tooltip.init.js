/////////////////////////////////////////////////////////////////////////
//          SKELETON TOOLTIP INIT
/////////////////////////////////////////////////////////////////////////
(function (_) {

    _.MODULE(function () {

        var tooltip = _.tooltip;
        var collection = _.collection.create;

        //....................................................................................


        var tool = new collection('div', { id: 'skeleton-tooltip' });


        tool.setCSS({
            position: 'absolute',
            backgroundColor: '#f9f9d5',
            borderWidth: '1px',
            borderStyle: 'solid',
            borderColor: '#ffd383',
            borderRadius: '4px',
            boxShadow: '1px 1px 3px #777',
            fontSize: '16px',
            fontFamily: 'Arial',
            transition: 'all .2s linear',
            display: 'none',
            padding: '10px',
            pointerEvents: 'none',
            zIndex: 9999
        });

        tooltip.container = tool;

        tool.insert(parent.document.body);



        //....................................................................................

        if (!parent.document.getElementById('skeleton-tool-tip-style'))
            var style = new collection('style', { id: 'skeleton-tool-tip-style' })
                .setSheet({
                    '.no-animate': {
                        transition: 'none !important'
                    }
                })
                .insert(parent.document.body);



    }); // MODULE

})(Skeleton);
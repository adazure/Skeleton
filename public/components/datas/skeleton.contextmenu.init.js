/////////////////////////////////////////////////////////////////////////
//          SKELETON CONTEXTMENU INIT
/////////////////////////////////////////////////////////////////////////

(function(_) {


    _.MODULE(function() {


        var context = _.contextmenu;
        var coll = _.collection.create;

        if (!parent.document.querySelector('#contextmenu-container')) {

            // CONTEXT
            context.container = new coll('div', { id: 'contextmenu-container' });
            context.container.insert(parent.document.body);
            // CONTENT
            context.content = new coll('div', { id: 'contextmenu-content' });
            context.content.insert(context.container.target);

            // STYLE
            context.style = new coll('style', { id: 'contextmenu-style' })
                .setSheet({
                    '#contextmenu-container': {
                        position: 'absolute',
                        zIndex: 10000,
                        'box-shadow': '1px 1px 3px #888',
                        'background-color': '#eee',
                        'border': '1px solid #ccc',
                        'min-width': '200px',
                        'padding': '1px',
                        'font-size': '14px',
                        'font-family': 'Arial',
                        'left': 0,
                        'top': 0
                    },
                    '#contextmenu-content': {},
                    '#contextmenu-content > div': {
                        'border-bottom': '1px solid #ddd'
                    },
                    '#contextmenu-content > div > label': {
                        display: 'block',
                        padding: '7px 10px'
                    }
                }).insert(parent.document.body);

            console.log(context.style.target);

            // TEST
            context.method.load([
                { title: 'Delete Item', action: function() { console.log('Item is deleted'); } }, { title: 'Delete Item', action: function() { console.log('Item is deleted'); } },
                { title: 'Change Position', action: function() { console.log('Position is Changed'); } },
                { title: 'Item Info', action: function() { console.log('Show Item'); } }
            ]);


        }
    }); // MODULE


})(Skeleton);
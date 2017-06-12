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




            // TEST
            // context.method.load([
            //    { title: 'Delete Item', action: function() { console.log('Item is deleted'); } }, { title: 'Delete Item', action: function() { console.log('Item is deleted'); } },
            //    { title: 'Change Position', action: function() { console.log('Position is Changed'); } },
            //    { title: 'Item Info', action: function() { console.log('Show Item'); } }
            // ]);


            // Context menüsünü, window sınıfımızda mouseup olayında her durumda kapatalım
            parent.window.addEventListener('mouseup', context.hide);

        }
    }); // MODULE


})(Skeleton);
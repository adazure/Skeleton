/////////////////////////////////////////////////////////////////////////
//          SKELETON PROMPTER METHOD
/////////////////////////////////////////////////////////////////////////

(function (_) {

    _.MODULE(function () {


        var prom = _.prompter;
        var coll = _.collection.create;

        function show(args) {
            hide();

            prom.container = new coll('div', { id: 'skeleton-prompter-container' })
                .insert(parent.document.body);
            prom.content = new coll('div', { id: 'skeleton-prompter-content' })
                .insert(prom.container.target)
                .setHTML(args.message);

        }

        function hide() {

            if (_.prompter.container)
                _.prompter.remove();

        }


        prom.show = show;
        prom.hide = hide;

    });


})(Skeleton);
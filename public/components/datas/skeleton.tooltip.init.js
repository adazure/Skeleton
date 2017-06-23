/////////////////////////////////////////////////////////////////////////
//          SKELETON TOOLTIP INIT
/////////////////////////////////////////////////////////////////////////
(function(_) {

    _.MODULE(function() {

        var tooltip = _.tooltip;
        var collection = _.collection.create;

        //....................................................................................

        tooltip.container = new collection('div', { id: 'skeleton-tooltip' })
        .setClass('animated','flipInX');

        tooltip.container.insert(parent.document.body);



    }); // MODULE

})(Skeleton);
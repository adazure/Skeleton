/////////////////////////////////////////////////////////////////////////
//          SKELETON POPUP INIT
/////////////////////////////////////////////////////////////////////////

(function (_) {


    _.MODULE(function () {

        var popup = _.popup;
        var method = _.popup.method;
        var collection = _.collection.create;

  
        //....................................................................................




        // Ek Style Dosyaları
        var style = new collection('style', {
            id: 'skeleton-popup-style'
        })
        // Style
        style.setSheet('@keyframes skeleton-popup-modal', {
            from: {
                opacity: 0,
            },
            to: {
                opacity: 1
            }
        });



        //....................................................................................


        popup.objects.style = style;


        //....................................................................................


        parent.document.body.appendChild(style.target);

    }); // MODULE

})(Skeleton);
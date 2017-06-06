/////////////////////////////////////////////////////////////////////////
//          SKELETON POPUP INIT
/////////////////////////////////////////////////////////////////////////

(function (_) {


    _.MODULE(function () {

        var popup = _.popup;
        var collection = _.collection.create;



        //....................................................................................




        // Popup container 
        var container = new collection('div', {
            id: 'skeleton-popup-container'
        })
            // Style
            .setCSS({
                backgroundColor: 'rgba(0,0,0,.4)',
                position: 'fixed',
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                display: 'none'
            });



        //....................................................................................




        // Popup Content
        var content = new collection('div', {
            id: 'skeleton-popup-content'
        })
            // Style
            .setCSS({
                position: 'fixed',
                backgroundColor: 'white',
                left: '50%',
                top: '50%',
                transform: 'translate(-50%,-50%)',
                border: '2px solid #fff',
                padding: 0,
                boxShadow: '3px 3px 17px -3px #000',
                animation: 'skeleton-popup-modal .5s forwards'
            });



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




        popup.objects.container = container;
        popup.objects.content = content;
        popup.objects.style = style;



        //....................................................................................




        // Popup nesnesini sahneye oluştur
        container.target.appendChild(content.target);
        parent.document.body.appendChild(container.target);
        parent.document.body.appendChild(style.target);

    }); // MODULE

})(SkeletonAction);
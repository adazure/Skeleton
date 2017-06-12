/////////////////////////////////////////////////////////////////////////
//          SKELETON MENU INIT
/////////////////////////////////////////////////////////////////////////

(function(_) {

    _.MODULE(function() {

        var collection = _.collection.create;
        var menu = _.menuObject;




        //....................................................................................


        // Sayfada görüntülenecek menu ekranını oluşturur. Ana katman
        var displayMenu = new collection('div', {
                id: 'skeleton-menu'
            })
            .setCSS({
                position: 'fixed',
                left: '40px',
                top: '40px',
                width: '300px',
                overflow: 'hidden',
                backgroundColor: 'rgb(49, 126, 181)',
                border: '1px solid rgb(49, 126, 181)',
                boxShadow: '1px 1px 5px 1px #555',
                borderRadius: '4px',
                zIndex: 1000,
                fontFamily: 'arial',
                fontSize: '18px',
                color: '#333'
            })
            //Sınıf
            .setClass('slidetoright')
            .setBind('mousedown', function(e) { e.preventDefault(); return; });

        menu.container = displayMenu;



        //....................................................................................



        // Menü header bar
        var header = displayMenu.create('div', {
            id: 'skeleton-menu-header'
        });
        header.setCSS({
                padding: '10px',
                backgroundColor: 'rgb(49, 126, 181)',
                color: 'white',
                border: 0,
                borderBottomWidth: '1px',
                borderStyle: 'solid',
                borderColor: '#444'
            })
            .setHTML('Menü');




        //....................................................................................



        // Menüde listelenecek kayıtların yeri
        var content = displayMenu.create('div', {
                id: 'skeleton-menu-content'
            })
            // Style
            .setCSS({
                padding: '10px 20px 10px 10px',
                overflow: 'hidden',
                overflowY: 'auto',
                borderTop: '1px solid #ddd',
                borderBottom: '1px solid #ddd',
                height: '250px',
                backgroundColor: 'white',
                display: 'block'
            })



        //....................................................................................


        // Alt butonun olduğu yer
        var footer = displayMenu
            .create('div', {
                id: 'skeleton-menu-footer'
            })
            .setCSS({
                padding: '10px',
                border: 0,
                borderTopWidth: '1px',
                borderStyle: 'solid',
                borderColor: 'rgba(255,255,255,.5)',
                cursor: 'pointer'
            })
            // Footer Click
            .setBind('click', function() {
                content.target.style.display = content.target.style.display == 'block' ? 'none' : 'block';
            })
            // Children A
            .create('a')
            .setCSS({
                display: 'block',
                padding: '4px',
                textDecoration: 'none',
                color: '#fff',
                fontSize: '12px'
            })
            // A HTML
            .setHTML('Gizle/Göster');



        //....................................................................................



        // Oluşturulan menuyü body'e ekler
        displayMenu.insert(parent.document.body);



        //....................................................................................



        var ml = menu.data;

        // Tüm menu listesi kayıtlarını tarayalım
        Object.keys(ml).forEach(function(key) {

            // Üzerinde sorgu yapılacak nesne
            var obj = ml[key];

            // Sadece section querystring değerine uygun olanları yükle
            if (obj.section.indexOf(_.Request.section) != -1) {


                //BU ALANDA MENU'DEKİ BUTONLAR YÜKLENMEKTEDİR

                // Sadece resim dosyası olanları ekleyelim
                if (!obj.data) return;

                // Oluşturulacak her bir nesne için özel tanımlama

                var chkName = 'skeleton-chk-n' + menu.objects.length,
                    imgName = 'skeleton-img-n' + menu.objects.length,
                    txtName = 'skeleton-txt-n' + menu.objects.length;


                // Bu adımdan itibaren menüde görünecek her bir kaydın elementleri doldurulmakta
                // UL > li, li, li


                /* UL nesnesi  */

                var ul = new collection('ul', {
                        key: key
                    })
                    .setClass('skeleton-menu-item');




                //....................................................................................




                /* 1. LI nesnesi  */

                // Input nesnesi
                ul.create('li', {
                        key: key
                    })
                    // Class
                    .setClass('menu-item-chk')
                    // Style
                    .setCSS({
                        width: '10%'
                    })
                    // Children Input Checkbox
                    .create('input', {
                        type: 'checkbox',
                        id: chkName
                    })
                    // Input Event
                    .setBind('click', function(ev) {

                        var main = ev.target.parentNode.parentNode;
                        var checkbox = main.children[1];
                        // Eğer checkbox işaretliyle hem tabloya ekleyelim hem de image nesnesini sürüklenebilmesi için aktif yapalım
                        if (ev.target.checked)
                            checkbox.remClass('menu-item-locked');
                        else
                            checkbox.setClass('menu-item-locked');
                    });



                //....................................................................................




                /* 2. LI nesnesi  */

                // Image nesnesi
                var li = ul.create('li', {
                        key: key
                    })
                    // Class
                    .setClass('menu-item-img', 'menu-item-locked')
                    // Style
                    .setCSS({
                        width: '20%'
                    }).
                setBind('mousedown', menu.method.itemdown);

                var img = li.create('img', {
                    key: key,
                    id: imgName,
                    src: obj.data
                })

                .setCSS({
                    width: '30px',
                    height: '30px'
                });


                //....................................................................................




                /* 3. LI nesnesi  */


                // Label nesnesi
                ul.create('li', {
                        key: key
                    })
                    // Class
                    .setClass('menu-item-text')
                    // Style
                    .setCSS({
                        width: '60%'
                    })
                    // Children Label
                    .create('label', {
                        id: txtName
                    })
                    .setHTML(obj.title);




                //....................................................................................



                // Nesneyi objects/hafıza tablosuna ekler
                menu.objects.push(ul.target);



                //....................................................................................



                // Content alanına UL nesnesini ekler
                content.append(ul.target);



                //....................................................................................



                // Her bir menu kaydı için bir de SVG nesnesi karşılığını tabloda oluşturalım
                // Menüden bir buton sürüklendiğinde, menüde ilgili ID'ye karşılık gelen listeye "clone" adında bir alan daha ekleyip...
                // .. buraya da oluşturacağımız img SVG nesnesini yerleştirelim. 
                // Her seferinde bu nesneyi klonlayarak sahnede gösterebiliriz

                var clone = document.createElementNS('http://www.w3.org/2000/svg', 'image');
                clone.setAttr({
                    id: key,
                    key: key,
                    width: 40,
                    height: 40
                });
                clone.setClass('path2');
                clone.textContent = obj.title;
                clone.setAttributeNS('http://www.w3.org/1999/xlink', 'href', obj.data);

                // Menu listesine kaydet
                obj.clone = clone;

            }



        });




    });


})(Skeleton);
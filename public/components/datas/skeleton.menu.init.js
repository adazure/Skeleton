/////////////////////////////////////////////////////////////////////////
//          SKELETON MENU INIT
/////////////////////////////////////////////////////////////////////////

(function(_) {

    _.MODULE(function() {

        var collection = _.collection.create;
        var menu = _.menuObject;
        var data = _.data;
        var dialog = _.dialog;
        var gall = _.gallery;
        var helper = _.helper.method;



        //....................................................................................


        // Sayfada görüntülenecek menu ekranını oluşturur. Ana katman
        var displayMenu = new collection('div', {
                id: 'skeleton-menu'
            })
            //Sınıf
            .setClass('slidetoright', 'animated', 'flipInY')
            .setBind('mousedown', function(e) { e.preventDefault(); return; });

        menu.container = displayMenu;



        //....................................................................................



        // Menü header bar
        var header = displayMenu.create('div', {
                id: 'skeleton-menu-header'
            })
            .setHTML('Menü');




        //....................................................................................



        // Menüde listelenecek kayıtların yeri
        var content = displayMenu.create('div', {
            id: 'skeleton-menu-content'
        });



        //....................................................................................


        // Alt butonun olduğu yer
        var footer = displayMenu
            .create('div', {
                id: 'skeleton-menu-footer'
            })
            // Footer Click
            .setBind('click', function() {
                content.target.style.display = content.target.style.display == 'block' ? 'none' : 'block';
            })
            // Children A
            .create('a')
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
                        id: chkName,
                        'key': key
                    })
                    // Input Event
                    .setBind('click', function(ev) {

                        var main = ev.target.parentNode.parentNode;
                        var checkbox = main.children[1];

                        var sect = '$' + _.Request.section;
                        var resp = sect + '$';

                        // Eğer checkbox işaretliyle hem tabloya ekleyelim hem de image nesnesini sürüklenebilmesi için aktif yapalım
                        if (ev.target.checked) {
                            checkbox.remClass('menu-item-locked');
                            // İşaretlenmiş input checkbox elementine göre veritabanına gidecek datayı da güncelleyelim
                            if (!data[resp + ev.target.getAttr('key')])
                                data[resp + ev.target.getAttr('key')] = [];
                        } else {


                            // İşaretlenmiş input checkbox elementine göre veritabanına gidecek datayı da güncelleyelim
                            // ilgili alan veritabanında var mı bakalım
                            var f = data[resp + ev.target.getAttr('key')];

                            // Eğer liste var ama kayıt yoksa sil
                            if (f && f.length == 0)
                                delete f;
                            else if (f && f.length > 0) {

                                // eğer kayıt varsa her durumda işaretle
                                ev.target.checked = true;

                                // Bir de uyarı penceresi gösterelim
                                dialog.show({
                                    title: 'Bir hata oluştu',
                                    content: 'İşareti kaldırabilmeniz için, bu alan için daha önce yüklemiş olduğunuz görselleri silmeniz gerekmektedir.',
                                    button1: {
                                        text: 'Tamam',
                                        action: function() {
                                            dialog.hide();
                                        }
                                    }
                                });
                            }


                            checkbox.setClass('menu-item-locked');
                        }
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
                    .setBind('click', function() {

                        // Seçilen menuyü işaretle
                        menu.selectedMenuItem = ul;

                        // Menunun key değerini al
                        var nm = menu.selectedMenuItem.target.getAttr('key');

                        // Key değerine ait data bilgisini veritabanından çek
                        var fdata = data[helper.getCustomizeUpload() + nm];

                        // Upload için ekranı açalım
                        gall.method.load(fdata);
                        gall.content.hide();
                        gall.container.show();
                        gall.contentList.hide();

                        setTimeout(function() {
                            gall.contentList.show();
                        }, 100);

                        // Menüde seçilmiş olan alanı işaretleyelim
                        menu.method.selectMenuItem(menu.selectedMenuItem, true);

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


        // Gelen dataya göre menüdeki alanları işaretleyelim
        menu.method.fillMenuItem();


    }); // MODULE


})(Skeleton);
/////////////////////////////////////////////////////////////////////////
//          SKELETON MENU INIT
/////////////////////////////////////////////////////////////////////////

(function (_) {

    _.MODULE(function () {

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
            .setBind('mousedown', function (e) { e.preventDefault(); return; });

        menu.container = displayMenu;



        //....................................................................................



        // Menü header bar
        var header = displayMenu.create('div', {
            id: 'skeleton-menu-header'
        })
            .setHTML(_.lang.current.infoMenuTitle);

        var info = header.create('div')
            .setClass('information-woman')
            .setBind('click', function () {
                _.prompter.show({
                    title: _.lang.current.infoDoYouKnowTitle,
                    message: [
                        '<i class="ichk_x182 ichk"></i> ' + _.lang.current.infoMenuInfoText1,
                        '<i class="ichk_x182 ichk"></i>-<i class="ichk_x183 ichk"></i>' + _.lang.current.infoMenuInfoText2,
                        '<i class="ichk_x184 ichk"></i> '  + _.lang.current.infoMenuInfoText3
                    ]
                });
            });




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
            .setBind('click', function () {
                displayMenu.toggleClass('showhide');
            })
            // Children A
            .create('a')
            // A HTML
            .setHTML(_.lang.current.infoMenuShowHide);



        //....................................................................................



        // Oluşturulan menuyü body'e ekler
        displayMenu.insert(parent.document.body);



        //....................................................................................



        var ml = menu.data;

        // Tüm menu listesi kayıtlarını tarayalım
        Object.keys(ml).forEach(function (key) {

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


                menu.data[key].count = 0;
                menu.data.mainObject = ul;

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
                    /*  .setBind('mouseover', function () {
                          _.prompter.show({
                              title: 'What is this?',
                              message: 'Callback prompt....'
                          });
                      })*/
                    // Input Event
                    .setBind('click', function (ev) {

                        var main = ev.target.parentNode.parentNode;
                        var checkbox = main.children[1];

                        var key = ev.target.getAttr('key');
                        var resp = helper.getCustomizeUpload() + key;

                        // Eğer checkbox işaretliyle hem tabloya ekleyelim hem de image nesnesini sürüklenebilmesi için aktif yapalım
                        if (ev.target.checked) {

                            // Sürüklenebilmesi için kilidi kaldır
                            checkbox.remClass('menu-item-locked');

                            menu.selectedMenuItem = ul;

                            // Menüde seçilmiş olan alanı işaretleyelim
                            menu.method.selectMenuItem(ul, true);

                            // İşaretlenmiş elementin veritabanında karşılığı yoksa oluştur
                            if (!data[resp])
                                data[resp] = [];

                            // Upload penceresini açalım
                            _.gallery.method.show(key);

                            // İşaretlendikten sonra eğer iskelet üzerinde ilgili hastalık hiç yoksa, kullanıcıya bir kereliğine ekranda mesaj gösterelim
                            if (menu.data[key].count == 0) {
                                _.prompter.show({
                                    message: helper.format(_.lang.current.infoAnyPathText,menu.data[key].title),
                                    closeVisible: false,
                                    timer: 5000
                                });
                            }

                        } else {

                            // Else kısmı bizim için, kullanıcı tiki kaldırdı ve artık bu nesne ile ilgili sahnede hiç bir şey bırakmak istemiyor demektir
                            // Ama tiki gerçekten kaldırabilmemiz için iskelet üzerinde ve nesneye ait dosyalar yüklenmemiş olmalı
                            // Bunun için iskelet üzerinde bırakılmış ikonlar var mı ve dosya upload yapılmış mı kontrol edelim

                            // Veritabanında dosya yüklenmiş kayıt var mı
                            var isData = data[resp];
                            var length = isData ? isData.length : 0;

                            // Sahne üzerinde ilgili nesneden hiç var mı bakalım
                            var isAnyPath = menu.data[key].count;

                            // Adı var ama dizin içeriği boş işe; yani dosya yoksa kaydı da yok ve iskelet üzerinde de hiç bir şey yoksa
                            if (isData && length == 0 && isAnyPath == 0) {
                                delete isData;

                                menu.selectedMenuItem = null;

                                // Menüde seçilmiş olan alanı sıfırlayalım
                                menu.method.selectMenuItem(null);

                                // Icon/Görsel'i pasif yapalım
                                checkbox.setClass('menu-item-locked');
                            }
                            // Yok eğer hem dizin var hem de kayıt bulunuyorsa yada dosya yok ama ikonlar varsa işlemi iptal edip uyarı vereceğiz 
                            else if (isData && length || isAnyPath > 0) {

                                // İşareti hiç kaldırma. Kullanıcı söyleyeceğimiz işlemleri yapsın önce
                                ev.target.checked = true;

                                checkbox.remClass('menu-item-locked');

                                //console.log(isData);
                                // Bir de uyarı penceresi gösterelim
                                // Önce hangi alanla ilgili konuşacaksak onun adını tablodan alalım
                                var nm = menu.data[key].title; // Luminal Darlık gibi

                                // Kullanıcıya gösterilecek text alanı oluşturuluyor

                                var textForPath = isAnyPath > 0 ? helper.format(_.lang.current.infoPathFoundText,isAnyPath,nm) : '';
                                var textForFile = length > 0 ? helper.format(_.lang.current.infoFileFoundText,nm,length) : '';

                                // Eğer dosya varsa upload ekranını açalım
                                if (length > 0)
                                    ul.target.children[2].trigger('click');

                                _.prompter.show({
                                    title: _.lang.current.infoINeedYourHelpTitle,
                                    message: helper.format(_.lang.current.infoINeedYourHelpText,nm) + textForPath + textForFile
                                });

                                /* dialog.show({
                                     title: 'Dikkat',
                                     content: 'İşareti kaldırabilmeniz için, bu alan için daha önce yüklemiş olduğunuz görselleri silmeniz gerekmektedir.',
                                     button1: {
                                         text: 'Tamam',
                                         action: function () {
                                             dialog.hide();
                                         }
                                     }
                                 });*/
                            }
                            else
                                checkbox.setClass('menu-item-locked');


                        }


                        // Veritabanını güncelle
                        _.savechanges();


                    }); // CLICK END



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
                    .setBind('click', function () {

                        // Seçilen menuyü işaretle
                        menu.selectedMenuItem = ul;

                        // Menunun key değerini al
                        var nm = menu.selectedMenuItem.target.getAttr('key');

                        gall.method.show(nm);

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
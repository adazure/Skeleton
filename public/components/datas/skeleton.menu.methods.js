/////////////////////////////////////////////////////////////////////////
//          SKELETON MENU METHOD
/////////////////////////////////////////////////////////////////////////

(function(_) {

    _.MODULE(function() {

        var method = _.menuObject.method;
        var menu = _.menuObject;
        var data = menu.data;
        var pathMethod = _.path.method;
        var collection = _.collection.create;
        var svgGlob = _.svg.globals;
        var skeletonGlobalMethod = _.globalMethod;
        var tooltip = _.tooltip;
        var context = _.contextmenu;
        var dialog = _.dialog;
        var gall = _.gallery;




        //....................................................................................


        // Menude işaretlenecek input checkbox alanlarını belirler ve datayı günceller
        function fillMenuItem() {

            // Veritabanından gelen datayı döngüye sok
            Object.keys(_.data).forEach(function(key) {

                if (!_.section) return;

                // Section bilgisini alalım
                var sect = '$' + _.section;

                // Aktif section değerine eşit bir kayıt varsa al
                if (key.indexOf(sect) != -1) {

                    // Elimize gelen data $...$... şeklinde bir data
                    // İlk dolar işareti bizim hangi section'da olduğumuzu gösteriyor
                    // İkinci dolar işareti menudeki checkbox nesnesinin key değerini veriyor

                    var part = key.split('$');
                    var section = part[1];
                    // Menüde ki checkbox'ın key değeri. Key değerleri benzersiz olduğundan varsa çalıştırılacaktır
                    var inputchk = part[2];

                    // Menu listesinde oluşturulmuş olan tüm nesneleri tarar
                    for (var k = 0; k < menu.objects.length; k++) {

                        // Sıradaki nesneyi al
                        var w = menu.objects[k];

                        // Nesne içerisindeki checkbox nesnesini alır
                        var chk = w.children[0].children[0];

                        // Checkbox nesnesinin key değeri
                        var ky = chk.getAttr('key');

                        // Veritabanında ki key değeri ile bu değer eşleşiyorsa işaretler
                        if (ky == inputchk) {
                            chk.checked = true;
                            w.children[1].remClass('menu-item-locked');

                        }
                    }

                }

            });

        }



        //....................................................................................



        function selectMenuItem(e, selected) {
            for (var i = 0; i < menu.objects.length; i++) {
                var obj = menu.objects[i];
                obj.remClass('selected');
            }
            if (e && selected) {
                e.setClass('selected');
                var key = e.getAttr('key');
                gall.header.children().uploadfilesheadertitle.setHTML(menu.data[key].title);
            } else {
                gall.container.hide();
                menu.selectMenuItem = null;
            }
        }


        //....................................................................................




        function contextmenu(e) {
            e.preventDefault();
            context.method.clear(function() {

                context.method.add({
                    title: _.lang.current.infoDeleteItemText,
                    action: function() {

                        dialog.show({
                            title: _.lang.current.infoDeleteItemTitle,
                            content: _.lang.current.infoDeleteItemQuestion,
                            button1: {
                                text: _.lang.current.infoDeleteButton,
                                action: function() {
                                    // Silinecek nesneyi seç
                                    pathMethod.selectRemovedItem(e);

                                    // Nesneyi sil
                                    pathMethod.removeSelectedClone(e);

                                    // Context menüyü gizle
                                    context.method.hide();

                                    // Dialog penceresindeki butonları pasif yap
                                    dialog.passive();

                                    // Pencereyi gizle
                                    dialog.hide();

                                    //Veritabanını güncelle
                                    _.savechanges();
                                }
                            },
                            button2: {
                                text: _.lang.current.infoCancelButton,
                                action: function() {
                                    // Context menüyü gizle
                                    context.method.hide();

                                    // Pencereyi gizle
                                    dialog.hide();
                                }
                            }
                        });

                    }
                });


                // Key değerine göre, ilgili hastalağın açılacak bir popup formu varsa "detayları göster" butonunu aktif yapacağız
                var key = e.target.getAttr('key');
                if (key) {
                    var q = data[key].url || data[key].jsonData;
                    context.method.add({
                        title: _.lang.current.infoDetailButton,
                        action: function() {
                            e.target.trigger('click');
                            // Context menüyü gizle
                            context.method.hide();
                        }
                    });
                }




                context.method.show(e);
            });

            return;
        }


        //....................................................................................




        // Menu deki bir butona tıklandığında yapılacak işlemler
        function itemdown(a) {

            a.preventDefault();

            console.log('Menuden bir ikon seçildi');

            // Tıklanan menu butonunun key değeri
            var butonID = a.target.getAttr('key');

            // Key değerine karşılık gelen veritabanındaki veriyi al
            var item = data[butonID];

            // Eğer veri varsa
            if (item) {

                // Menudeki clone alanının kopyasını oluştur
                var clone = item.clone.cloneNode(true);

                // Karışıklık olmaması için id değerini sil
                clone.remAttr('id');

                // Boyutunu ayarla
                clone.setAttr({
                    width: 40,
                    height: 40
                });

                // Sınıfları ata
                clone.setClass('path2', 'svg_mini');

                // ID değerine ait bırakılabilecek tüm pathleri bul ve renklendir
                var isAllow = pathMethod.findAllowPath(butonID);


                // Sürükleme esnasında, eğer geçerli alanlar yoksa kullanıcıya uyarı bilgisi verelim
                if (!isAllow) {

                    tooltip.message(_.lang.current.infoIconTooltipText);
                    tooltip.container.setClass('no-animate');

                    // MouseUp olduğunda uyarı mesajını silelim
                    function __tooltipUp() {
                        tooltip.hide();
                        skeletonGlobalMethod.remGlobal('up', __tooltipUp);
                        skeletonGlobalMethod.remGlobal('move', __tooltipMove);
                        tooltip.container.remClass('no-animate');
                    }

                    // Sürükleme esnasında uyarı mesajını da sürükleyelim
                    function __tooltipMove(e) {
                        tooltip.container.setCSS({
                            left: e.pageX + 'px',
                            top: e.pageY + 20 + 'px'
                        });
                    }

                    skeletonGlobalMethod.setGlobal('up', __tooltipUp);
                    skeletonGlobalMethod.setGlobal('move', __tooltipMove);
                } else {
                    // Icon sahneye eklendiğinde, ilgili datanın detaylarının görüntülenebilmesi için tıklama ekliyoruz
                    // Tıklama yapıldığında detayları göster
                    clone.setBind('click', pathMethod.showPathDetails);

                    // Icon üzerine gelindiğinde görünecek mesajı görüntüleyelim
                    clone.setBind('mouseover', function(e) {
                        tooltip.message(_.lang.current.infoItemHoverText, { ev: e });
                    });

                    // Sağ tuş özelliği ekleyelim
                    clone.setBind('contextmenu', contextmenu);


                    // Nesneyi seçilen nesne olarak işaretle
                    _.selectedObject = clone;

                    // Sürüklenebileceğini belirt
                    _.objectIsDragable = true;

                    // Sürüklenme esnasındaki ilk konumunu ayarla
                    skeletonGlobalMethod.onPress(a);

                    // Nesneyi sahneye ekle
                    _.container.appendChild(clone);

                    // Veritabanını güncelle
                    _.savechanges();

                }

            }

            return;
        }



        //....................................................................................

        function setEventCustom(clone) {
            // Icon sahneye eklendiğinde, ilgili datanın detaylarının görüntülenebilmesi için tıklama ekliyoruz
            // Tıklama yapıldığında detayları göster
            clone.setBind('click', pathMethod.showPathDetails);

            // Icon üzerine gelindiğinde görünecek mesajı görüntüleyelim
            clone.setBind('mouseover', function(e) {
                tooltip.message(_.lang.current.infoItemHoverText, { ev: e });
            });

            // Sağ tuş özelliği ekleyelim
            clone.setBind('contextmenu', contextmenu);
        }


        method.itemdown = itemdown;
        method.fillMenuItem = fillMenuItem;
        method.selectMenuItem = selectMenuItem;
        method.setEventCustom = setEventCustom;


    });

})(Skeleton);
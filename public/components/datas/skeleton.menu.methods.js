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




        //....................................................................................


        // Menude işaretlenecek input checkbox alanlarını belirler ve datayı günceller
        function fillMenuItem() {

            // Veritabanından gelen datayı döngüye sok
            Object.keys(_.data).forEach(function(key) {

                // Section bilgisi varsa alalım
                var sect = '$' + _.Request.section;

                // Aktif section değerine eşit bir kayıt varsa al
                if (key.indexOf(sect) != -1) {

                    // Elimize gelen data $...$... şeklinde bir data
                    // İlk dolar işareti bizim hangi section'da olduğumuzu gösteriyor
                    // İkinci dolar işareti menudeki checkbox nesnesinin key değerini veriyor

                    var part = key.split('$');
                    var section = part[0].substring(1);
                    var inputchk = part[1].substring(1);

                    if (menu.objects[inputchk])
                        menu.objects[inputchk].checked = true;

                }

            });

        }



        //....................................................................................




        // Menu deki bir butona tıklandığında yapılacak işlemler
        function itemdown(a) {

            a.preventDefault();

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

                // Icon sahneye eklendiğinde, ilgili datanın detaylarının görüntülenebilmesi için tıklama ekliyoruz
                // Tıklama yapıldığında detayları göster
                clone.setBind('click', pathMethod.showPathDetails);

                // Icon üzerine gelindiğinde görünecek mesajı görüntüleyelim
                clone.setBind('mouseover', function(e) {
                    tooltip.message('Detaylar için tıklayın<span style=\'font-size:11px; display:block;\'> Kaydı silmek için fare ile sağ tıklayın</span>', { ev: e });
                });

                // Sağ tuş özelliği ekleyelim
                clone.setBind('contextmenu', function(e) {
                    e.preventDefault();
                    context.method.clear(function() {
                        context.method.add({
                            title: 'Bu kaydı sil',
                            action: function() {

                                dialog.show({
                                    title: 'Silme işlemi',
                                    content: 'Kaydı silmek istediğinize emin misiniz?',
                                    button1: {
                                        text: 'SİL',
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
                                        }
                                    },
                                    button2: {
                                        text: 'İPTAL',
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
                        context.method.show(e);
                    });

                    return;
                });


                // Nesneyi seçilen nesne olarak işaretle
                _.selectedObject = clone;

                // Sürüklenebileceğini belirt
                _.objectIsDragable = true;

                // Sürüklenme esnasındaki ilk konumunu ayarla
                skeletonGlobalMethod.onPress(a);

                // Nesneyi sahneye ekle
                _.container.appendChild(clone);

                // Sürükleme esnasında, eğer geçerli alanlar yoksa kullanıcıya uyarı bilgisi verelim
                if (!isAllow) {

                    tooltip.message('Bırakabileceğiniz geçerli bir alan bulunamadı');
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
                }

            }

            return;
        }



        //....................................................................................



        method.itemdown = itemdown;
        method.fillMenuItem = fillMenuItem;

    });

})(Skeleton);
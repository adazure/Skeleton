/////////////////////////////////////////////////////////////////////////
//          SKELETON MENU METHOD
/////////////////////////////////////////////////////////////////////////

(function (_) {

    _.MODULE(function () {

        var method = _.menuObject.method;
        var data = _.menuObject.data;
        var pathMethod = _.path.method;
        var collection = _.collection.create;
        var svgGlob = _.svg.globals;
        var skeletonGlobalMethod = _.globalMethod;
        var tooltip = _.tooltip;


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

                // Sayfaya eklendiğinde kaldırılabilmesi için, seçme olayını ekle
                clone.setBind('mouseup', pathMethod.selectRemovedItem);

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

    });

})(SkeletonAction);
/////////////////////////////////////////////////////////////////////////
//          SKELETON PATH METHODS
/////////////////////////////////////////////////////////////////////////

(function(_) {


    _.MODULE(function() {

        var path = _.path;
        var menu = _.menuObject;
        var tooltip = _.tooltip;
        var context = _.contextmenu;
        var data = _.data;
        var popup = _.popup;


        //....................................................................................



        function mouseover(a) {

            // Path üzerine gelindiğinde path'in kendisini seçili hale getir
            path.selectedPath = a.target;

            // Pathin kendisine hover sınıfı ata. Üzerine gelindiğimizi belli edelim
            a.target.setClass('hover');


            if (_.debugmode) {

                //Path'in ID bilgisini ve title bilgisini aynı anda gösterir
                tooltip.message(path.selectedPath.id + ' : ' + path.data[path.selectedPath.id].title, {
                    ev: a
                });

            } else {
                // Sadece Title bilgisini gösterir
                tooltip.message(path.data[path.selectedPath.id].title, {
                    ev: a
                });
            }

        }



        //....................................................................................



        // Path üzerinden çıkıldığında işletilir
        function mouseout(a) {


            // Üzerinden çıkıldıktan sonra işaretlenen path'i temizler
            path.selectedPath = null;

            // Nesnenin üzerinden fare ile uzaklaşınca sınıfı siler
            a.target.remClass('hover');

            // Mesaj ekranını kapat
            _.tooltip.hide();

        }



        //....................................................................................


        // Sahnede hiç bir işlem yoksa tüm path alanlarını normal halinde gösterir
        function resetAllPath() {

            for (var i = 0; i < path.objects.length; i++) {
                var x = path.objects[i];
                x.remClass('lock');
                x.remClass('showPath');

                // Sahneye taşınan bir nesne yok
                path.isMovePath = false;
            }
        }



        //....................................................................................




        // Geçerli path alanlarını bulur
        // Gelen path değerine ait hangi alanlar üzerine nesne bırakılacağını bulur

        function checkAllowItem(pathId, findText) {
            return path.data[pathId].data.indexOf(findText) != -1;
        }



        //....................................................................................




        // Sahneden silinmesi istenen path nesnesini belirler
        function selectRemovedItem(e) {
            path.removedPath = e.target;
            path.removedPath.setClass('select_del');
        }



        //....................................................................................



        function setCustomProperties(obj, args) {
            obj.customdata = args;
        }


        //....................................................................................

        // Sahne üzerindeki icon'a tıklandığında detayları gösteren method
        function showPathDetails(e) {

            // Eğer menu data'da açılması gereken bir URL bilgisi varsa açalım
            // Şimdilik bu alana JSON data ile ilgili bir kontrol yapmadık. Sadece URL bilgisine göre etkileşim yapıyoruz
            // Tıklanan Icon nesnesine ait data bilgisini alıp popup ekrana bildirelim
            var icondata = e.target.customdata;
            var url = menu.data[icondata.name].url;

            if (url) {
                var r = data[icondata.root];
                // Popup'ın okuyacağı datayı verelim
                popup.data = r.transforms[icondata.index];
                popup.open(url, function() {
                    // Popup'ı açtıktan sonra gerekli dataları ekrana yansıtalım
                    fillData(popup.data.fields);

                });

            }
        }


        // Popup olarak açtırdığımız Icon'a ait detayları bu alanda dolduruyoruz
        function fillData(data) {


            // Popup penceresi içerisindeki tüm HTML element nesnelerini seç
            var el = parent.document.querySelectorAll('#skeleton-popup-content select,#skeleton-popup-content input,#skeleton-popup-content textarea');

            for (var i = 0; i < el.length; i++) {

                // Data içerisindeki her bir alan adı, formdaki bir elemente karşılık gelecek şekilde arıyoruz
                // Yani isimler aynı kabul ediyoruz
                var it = el[i];
                switch (it.type) {

                    case 'checkbox':
                    case 'radio':
                        // Detaya girmedik sadece checkbox ile ilgili yaptık. 
                        // Radio butonun isimlerini kontrol etmedik. Daha sonradan ekleme yaparsak bu uyarı mesajını sileriz
                        if (data[it.name || it.id]) {
                            it.trigger('click');
                        }

                        break;
                    default:

                        if (data[it.name || it.id]) {
                            it.value = data[it.name];
                            it.trigger('change');
                        }

                        break;
                }

            }

        }


        //....................................................................................



        // Sahne üzerinde, gelen dataya göre nesne oluşturur
        function createPathItem(dbdata) {

            Object.keys(dbdata).forEach(function(e) {

                // Mevcut data bilgilerini alır
                // Sahnede oluşturulacak menu butonunun kendisini alır ve kopyasını oluşturur
                var current = dbdata[e],
                    clone = menu.data[dt.obj].clone;


                // Kopya için bilgi varsa
                if (clone) {

                    // Kopyasını oluştur
                    clone = clone.cloneNode(true);
                    // Kopyanınn özelliklerini gir
                    clone.setAttr({
                        key: current.obj,
                        x: current.x,
                        y: current.y,
                        rootname: current.obj
                    });
                    // Kopyanın/menu butonunun Id bilgisi temizle, çünkü key değerine göre işlem yapacağız
                    // Sahnede tekrardan bu ID bilgisi olursa sonuncuyu seçeceğinden çakışma olacaktır
                    clone.remAttr('id');
                    clone.setClass('svg_mini');

                    // Oluşturulan kopyaya fare ile tıklandığında silinebilir olduğunu işaretle
                    // clone.setBind('mouseup', path.method.selectRemovedItem);

                    // Sağ tuş özelliği ekleyelim
                    clone.setBind('click', function(e) {
                        e.preventDefault();
                        context.method.clear(
                            function() {
                                context.method.add({
                                    title: 'Delete Item',
                                    action: function() {
                                        // Silinecek nesneyi seç
                                        pathMethod.selectRemovedItem(e);

                                        // Nesneyi sil
                                        pathMethod.removeSelectedClone(e);

                                        context.method.hide();
                                    }
                                });
                                context.method.show();
                            }
                        );

                        return;
                    });

                    // Kopyayı sahneye ekle
                    _.container.appendChild(clone);
                }
            });

        }



        //....................................................................................




        // Veritabanından gelen verileri sahneye yansıtıyoruz
        function loadData(dbdata) {
            Object.keys(path.data).forEach(function(e) {
                createPathItem(path.data[e].transforms);
            });
        }



        //....................................................................................




        // Sahne üzerinde seçilen clone nesnenin sahneden silinmesi işlemini yürütür

        function removeSelectedClone(e) {

            // Silinmesi istenen seçilmiş nesne varsa devam et
            if (path.removedPath) {

                // Silinecek nesnenin key değeri ve bağlı olduğu root değeri
                var id = path.removedPath.getAttr('key');
                var root = path.removedPath.getAttr('rootname');

                // Mutlak key değeri olmalı
                if (id) {

                    // Clone nesneyi sahneden temizle
                    path.removedPath.parentNode.removeChild(path.removedPath);

                    // Silinecek nesnenin yok olduğu bilgisi
                    path.removedPath = null;

                    // Silinen nesneyi veritabanı için tutulan tablodan silme aşaması
                    var dta = data[root];
                    // Data tablosunda bir bilgi varsa
                    if (dta) {

                        // Kaydın bulunacağı pozisyon index değeri
                        var removeItem = -1;


                        // Veriyi bul
                        for (var i = 0; i < dta.transforms.length; i++) {

                            // Transform alanı nesnenin pozisyon değerleri ve adını tuttuğu için..
                            // ..path nesnesinin dataları içinde pozisyonunu arıyoruz
                            if (dta.transforms[i].obj == id)
                                removeItem = i;
                        }


                        // Kayıt pozisyonu varsa 0 dan büyük olacağından sil
                        if (removeItem != -1)
                            dta.transforms.splice(removeItem, 1);


                        // İlgili Path ID nesnesine ait transform listesinde tutulan bir veri kalmadıysa, maviye boyanmış/taranmış alanı iptal eder
                        if (dta.transforms.length == 0)
                            document.querySelector('#' + root).remClass('reserve');


                    } else
                    // Tabloda tutulan bir veri kalmadıysa, maviye boyanmış/taranmış alanı iptal eder
                        doc.querySelector('#' + root).remClass('reserve');
                }
            }
        }



        //....................................................................................




        // Menuden bir nesne seçilip sahne üzerinde gezdirilmek istendiğinde..
        // nesnenin bırakılabilecek olduğu pathleri bulup renklendirir

        function findAllowPath(findText) {

            // Geçerli alan var mı yok mu bilgisini tutacağız
            var isAllow = false;

            for (var i = 0; i < path.objects.length; i++) {

                var current = path.objects[i];
                var id = current.getAttr('id');
                if (id)
                    if (checkAllowItem(id, findText)) {

                        current.remClass('lock');
                        current.setClass('showPath');

                        isAllow = true;

                        // isMovePath bize sürüklenen bir nesne olup olmadığını bildirmiş oluyor
                        path.isMovePath = true;
                    } else {
                        current.setClass('lock');
                        current.remClass('showPath');
                    }

            }

            return isAllow;
        }



        //....................................................................................




        path.method.mouseover = mouseover;
        path.method.mouseout = mouseout;
        path.method.resetAllPath = resetAllPath;
        path.method.checkAllowItem = checkAllowItem;
        path.method.createPathItem = createPathItem;
        path.method.selectRemovedItem = selectRemovedItem;
        path.method.removeSelectedClone = removeSelectedClone;
        path.method.findAllowPath = findAllowPath;
        path.method.loadData = loadData;
        path.method.setCustomProperties = setCustomProperties;
        path.method.fillData = fillData;
        path.method.showPathDetails = showPathDetails;




    }); // MODULE

})(Skeleton);
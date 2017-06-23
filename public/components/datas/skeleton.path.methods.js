/////////////////////////////////////////////////////////////////////////
//          SKELETON PATH METHODS
/////////////////////////////////////////////////////////////////////////

(function (_) {


    _.MODULE(function () {

        var path = _.path;
        var pathMethod = path.method;
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
            // JSON data dediğimiz olay, popup açmak istediğimiz bir kaç yöntemden biri.
            // Popuplar'ı ister URL adresi ister JSON data olarak açtırabiliyoruz. Sistem JSON olarak çalışıyor olasa da bu aşamada hızlı olması açısından kontrol eklenmedi
            // Tıklanan Icon nesnesine ait data bilgisini alıp popup ekrana bildirelim
            var icondata = e.target.customdata;
            var url = menu.data[icondata.name].url;
            if (url) {
                var r = data[icondata.root];
                // Popup'ın okuyacağı datayı verelim
                popup.data = r.transforms[icondata.index];
                popup.open(url, function () {
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
                        var z = it.name || it.id;
                        if (data[z]) {
                            it.value = data[z];
                            it.trigger('change');
                        }

                        break;
                }

            }

        }


        //....................................................................................



        // Sahne üzerinde, gelen dataya göre nesne oluşturur
        function createPathItem(dbdata, pathname) {


            for (var n = 0; n < dbdata.transforms.length; n++) {
                var current = dbdata.transforms[n];
                var clone = menu.data[current.obj].clone;
                if (clone) {

                    var p = document.querySelector('#' + pathname);
                    p.setClass('reserve');
                    // Kopyasını oluştur
                    clone = clone.cloneNode(true);
                    // Kopyanınn özelliklerini gir
                    clone.setAttr({
                        key: current.obj,
                        x: current.x,
                        y: current.y,
                        rootname: pathname
                    });

                    setCustomProperties(clone, {
                        index: n,
                        name: current.obj,
                        root: pathname,
                        path: p,
                        x: current.x,
                        y: current.y
                    });


                    // Oluşturulan nesnelerin sayısını arttıralım
                    menu.data[current.obj].count = menu.data[current.obj].count ? menu.data[current.obj].count + 1 : 1;

                    // Kopyanın/menu butonunun Id bilgisi temizle, çünkü key değerine göre işlem yapacağız
                    // Sahnede tekrardan bu ID bilgisi olursa sonuncuyu seçeceğinden çakışma olacaktır
                    clone.remAttr('id');
                    clone.setClass('svg_mini');

                    menu.method.setEventCustom(clone);

                    // Kopyayı sahneye ekle
                    _.container.appendChild(clone);


                }

            }

        }



        //....................................................................................



        // Veritabanından gelen verileri sahneye yansıtıyoruz
        function loadData(dbdata) {
            Object.keys(dbdata).forEach(function (e) {
                var menudata = path.data[e];
                if (menudata)
                    createPathItem(dbdata[e], e);

            });
        }



        //....................................................................................

        // Gelen root name değerindeki alanı veritabanından siler
        function deletePathFromDB(source) {
            source.path.remClass('reserve');
            delete _.data[source.root];
        }

        //....................................................................................

        // Gelen bilgilere göre ilgili root name alanından sadece bir kaydı siler
        function deleteItemFromDB(data, source) {
            var qindex = -1;
            for (var i = 0, f = data.transforms; i < f.length; i++) {
                if (f[i].x == source.x && f[i].y == source.y && f[i].obj == source.name) {
                    qindex = i;
                    break;
                }
            }

            if (qindex != -1)
                data.transforms.splice(qindex, 1);
        }


        //....................................................................................



        // Sahne üzerinde seçilen clone nesnenin sahneden silinmesi işlemini yürütür

        function removeSelectedClone(e) {

            // Silinmesi istenen seçilmiş nesne varsa devam et
            if (path.removedPath) {

                // Silinecek nesnenin key değeri ve bağlı olduğu root değeri
                var custom = path.removedPath.customdata

                // Mutlak key değeri olmalı
                if (custom.name) {

                    var key = path.removedPath.getAttr('key');

                    // Clone nesneyi sahneden temizle
                    path.removedPath.parentNode.removeChild(path.removedPath);

                    // Silinecek nesnenin yok olduğu bilgisi
                    path.removedPath = null;

                    // Silinen nesneyi veritabanı için tutulan tablodan silme aşaması
                    var dta = data[custom.root];

                    menu.data[key].count--;

                    if (menu.data[key].count == 0) {
                        _.prompter.show({
                            title: 'Temizlendi',
                            message: 'İskelet üzerinde hiç ' + menu.data[key].title + ' kalmadı. Ancak menüde hala işaretli bıraktık',
                            closeVisible: false,
                            timer:4000
                        });
                    }

                    // Data tablosunda bir bilgi varsa
                    if (dta) {

                        deleteItemFromDB(dta, custom);

                        // İlgili Path ID nesnesine ait transform listesinde tutulan bir veri kalmadıysa, maviye boyanmış/taranmış alanı iptal eder
                        if (dta.transforms.length == 0)
                            deletePathFromDB(custom);

                    } else {

                        // Tabloda tutulan bir veri kalmadıysa, maviye boyanmış/taranmış alanı iptal eder
                        deletePathFromDB(custom);
                    }
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
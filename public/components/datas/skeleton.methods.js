/////////////////////////////////////////////////////////////////////////
//          SKELETON METHODS
/////////////////////////////////////////////////////////////////////////

(function (_) {


    _.MODULE(function () {

        //SVG için method tutucu
        var method = _.method;

        // Global method tutucu
        var globMethod = _.globalMethod;

        var path = _.path;
        var matrix = _.svg.matrix;
        var menu = _.menuObject;
        var popup = _.popup;
        var dbdata = _.data;


        //....................................................................................



        //Sahnede sürüklenmesi istenen nesneleri sürükleyen method
        //Sürükleme işlemleri için her bir nesneye event tanımlamak yerine 
        //Window sınıfının move özelliğine genel bir event ekleyerek buradan kontrol ediyoruz

        function windowMouseMove(a) {

            var p = null;

            //Sürüklenmek istenen ve sürüklenmesine izin verilen bir nesne varsa yapar
            if (_.objectIsDragable && _.selectedObject) {

                // Sürüklenmek için seçilen nesnenin sahne üzerindeki boyut ve pozisyon değerlerini al
                p = matrix(_.selectedObject, a);

                // Nesneyi sahnede göster
                _.selectedObject.style.display = 'block';

                // Nesneye pozisyon değerlerini ata
                _.selectedObject.setAttr({
                    x: p.x,
                    y: p.y + 20
                });
            }

        }



        //....................................................................................



        function windowMouseDown(a) {
            a.preventDefault();
            return;
        }



        //....................................................................................



        // Fare tıklaması bitirildiğinde yapılacak işlemler.
        // Uygulamanın can damarı burası
        // Bir çok önemli işlemi burada yapıyoruz

        function windowMouseUp(a) {

            //Sadece sol tuş aktif
            if (a.button != 0) return;

            // Seçili path nesnesi varsa ve sürüklenebilir durumu aktif ise. Mevcut nesneyi kaldır
            // SelectedPath, bizim ilgili path üzerine fare ile geldiğimizde otomatik seçiyordu
            // Yani sürüklenen nesnenin bırakılacağı path'i bize veriyordu
            // Burada demiş oluyoruz ki, eğer seçili bir path yoksa sürüklediğim nesneyi bırakacağım bir alan da yok
            // O halde sürüklenen nesneyi kaldır
            if (!path.selectedPath && _.objectIsDragable) {

                _.selectedObject.parentNode.removeChild(_.selectedObject);
            }

            // Her ikisi de mevcutsa ilgili path üzerine nesneyi bırak
            else {

                if (_.selectedObject) {

                    // Sürüklenen nesneyi, farenin işaretlediği alana bırak
                    onRelease(a);

                    //Fare mousedown/up dışında mousedown yapılıp hemde sürükleme işlemi yapılmışsa isValid değeri true dönecektir. Eğer false ise, fareye sadece basılıp bırakılmış ancak sürükleme yapılmamıştır
                    if (path.isMovePath) {


                        //Veritabanına eklenmek üzere sahneye eklenen nesnenin koordinat bilgilerini kaydediyoruz
                        //Eğer tabloda bir veri yoksa oluşturuyoruz, varsa üzerine yazıyoruz

                        var dbdataCurrent = _.data[path.selectedPath.id] || (_.data[path.selectedPath.id] = {
                            transforms: []
                        }),
                            moveItemKey = _.selectedObject.getAttr('key');



                        // Koordinat bilgileri
                        dbdataCurrent.transforms.push({
                            x: _.selectedObject.getAttr('x'),
                            y: _.selectedObject.getAttr('y'),
                            obj:
                            //Sürüklenen nesnenin key ve root bilgisi
                            moveItemKey
                        });


                        // Yeni kaydettiğimiz nesneyi diziden alalım
                        // Amacımız; eğer açılacak popup varsa, bu değerleri popup'a göndermek
                        var newItem = dbdataCurrent.transforms[dbdataCurrent.transforms.length - 1];


                        _.selectedObject.setAttr({
                            rootname: path.selectedPath.id
                        });




                        //Sürüklenen nesne,sürüklenme sırasında Z-Index dolayısıyla en üstte bulunuyordu
                        //Yani menunun de üzerine çıkıyordu. Sürükleme esnasında olması gereken durum bu
                        //Ancak menu sahnede hareket ettirildiğinde, sonradan eklenen nesne hala menunun üzerinde olacağından
                        //Sahnede sürüklenen nesneyi, sürükleme işlemi bittiğinde ekleneceği group content içerisine taşıyoruz
                        //Bu şekilde menu nesnemiz her zaman üstte kalmaktadır.

                        _.content.appendChild(_.selectedObject);



                        //İlgili Menu butonuna ait açılması gereken bir popup varsa açtırıyoruz
                        if (menu.data[moveItemKey].url) {
                            var url = menu.data[moveItemKey].url;

                            // Üzerinde değişiklik yapılacak datayı bildirelim
                            popup.data = newItem;

                            // Popup açtır
                            popup.method.open(url);

                        }



                    }

                    path.selectedPath.setClass('reserve');
                }


            }


            //Sahnedeki tüm pathleri ilk görüntüsüne çevirir
            path.method.resetAllPath();


            //Sıfırlayalım
            _.selectedObject = null;
            _.objectIsDragable = false;
            path.selectedPath = null;
        }




        //....................................................................................


        // Nesneyi farenin işaret ettiği noktaya taşır

        function onRelease(a) {
            if (a.button != 0) return;
            var p = matrix(_.selectedObject, a);
            _.selectedObject.setAttr({ x: p.x - 15, y: p.y - 15 });
        }




        //....................................................................................


        function onPress(a) {
            a.preventDefault();
            if (a.button != 0) return;
            var p = matrix(_.selectedObject, a);
            _.selectedObject.setAttr({
                width: 30, height: 30
            });
            _.selectedObject.style.display = 'none';
            //return;
        }

        //....................................................................................


        // Buradaki methodlar ilgili event olayları tetiklendiği anda sürekli kontrol edilir
        // Eğer listeler içerisinde bir olay dinleyici varsa çalıştırılır
        // Bu şekilde, dilediğimiz olay akışlarında yapmak istediğimiz anlık işlemleri ilgili kontroller içerisine ekleyebiliriz
        // Örneğin mouse down yapıldığında sayfa üzerinde oluşturulacak bir nesneye bir trigger ekleyip, mouse up olduğunda trigger kaldırılabilir.
        function windowGlobalTrigger(f, e) {
            if (typeof f === 'object' && f.length > 0) {
                for (var n = 0; n < f.length; n++)
                    f[n].action(e);
            }
        }


        //....................................................................................


        function setGlobal(name, action) {
            if (_.globalWindowEvents[name])
                _.globalWindowEvents[name].push({ name: name, action: action });
        }

        function remGlobal(name, action) {
            var f = _.globalWindowEvents[name];
            if (f)
                f.splice(f.indexOf({ name: name, action: action }), 1);
        }

        function triggerGlobalUp(e) {
            var f = _.globalWindowEvents.up;
            windowGlobalTrigger(f, e);
        }

        function triggerGlobalDown(e) {
            var f = _.globalWindowEvents.down;
            windowGlobalTrigger(f, e);
        }

        function triggerGlobalMove(e) {
            var f = _.globalWindowEvents.move;
            windowGlobalTrigger(f, e);
        }


        method.windowMouseUp = windowMouseUp;
        method.windowMouseMove = windowMouseMove;
        method.windowMouseDown = windowMouseDown;

        globMethod.onRelease = onRelease;
        globMethod.onPress = onPress;
        globMethod.setGlobal = setGlobal;
        globMethod.remGlobal = remGlobal;
        globMethod.triggerUp = triggerGlobalUp;
        globMethod.triggerDown = triggerGlobalDown;
        globMethod.triggerMove = triggerGlobalMove;


    }); // MODULE

})(SkeletonAction);
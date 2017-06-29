/////////////////////////////////////////////////////////////////////////
//          SKELETON GALLERY METHOD
/////////////////////////////////////////////////////////////////////////

(function(_) {


    _.MODULE(function() {

        var gall = _.gallery;
        var method = gall.method;
        var coll = _.collection.create;
        var helper = _.helper.method;
        var dialog = _.dialog;
        var menu = _.menuObject;


        //....................................................................................


        // Tabloya yeni bir kayıt eklemek için kullanılır
        // Parametre olarak object nesnesi almaktadır
        // Obje nesnesinde gelen parametreler ↩ 
        // param.title -> Görüntülenecek başlık
        // param.file -> Yüklenen dosya adı

        function add(item) {

            var galItem = new coll('div')
                .setClass('gall-item-name')
                .insert(gall.contentList.target);

            var names = galItem.create('div')
                .setClass('gall-item-content');

            names.create('div').setHTML(item.title)
                .setClass('gall-item-title')
                .createParent('div')
                .setClass('gall-item-file')
                .setHTML(item.file);

            var showImage = galItem.create('div')
                .setClass('gall-item-showphoto')
                .setBind('click', function() {
                    gall.fullscreen.show('/uploads/' + item.file, item.title);
                });

            if (!helper.imageExists('/uploads/' + item.file)) {
                showImage.setClass('error');
            }

            var delImage = galItem.create('div')
                .setClass('gall-item-delphoto')
                .setAttr({ 'fileitem': item.file })
                .setBind('click', removeFile);

            // Basıldığında silinecek nesneyi verelim
            delImage.target.__removeItem = galItem;

            // Veritabanına kaydedilen veriyi tutalım. Silme işleminde bulup sileceğiz
            delImage.target.__removeSource = { root: helper.getCustomizeUpload() + menu.selectedMenuItem.getAttr('key'), item: item };


            // Eğer istenirse diye, oluşturulan DIV nesnesini geri döndürüyoruz
            return galItem;
        }





        //....................................................................................



        function show(nm) {

            // Key değerine ait data bilgisini veritabanından çek
            var fdata = _.data[helper.getCustomizeUpload() + nm];

            // Upload için ekranı açalım
            load(fdata);
            gall.content.hide();
            gall.container.show();
            gall.contentList.hide();

            setTimeout(function() {
                gall.contentList.show();
            }, 100);

        }



        //....................................................................................




        // Yüklenen dosya silmek istendiğinde çalıştırılacak
        function removeFile(e) {


            // Veritabanından bilgileri silmek için dataları alalım
            var repo = e.target.__removeSource;
            var indx = _.data[repo.root].indexOf(repo.item);

            // Silmeden önce bir uyarı penceresi çıkaralım
            dialog.show({
                title: _.lang.current.infoDeleteFileTitle,
                content: "<b>" + repo.item.title + "</b><br/>" + repo.item.file + "<p>" + _.lang.current.infoDeleteQuestion + "</p>",

                // Sil dediğinde yapılacak işlemler
                button1: {
                    text: _.lang.current.infoDeleteButtonAllow,
                    action: function() {

                        // Hemen bir POST işlemi yapıp silmesini söyleyelim
                        helper.http({

                            method: 'POST',
                            url: '/removeFile/' + e.target.getAttr('fileitem'),
                            success: function(result) {

                                // Eğer sorunsuz bir iletişim kurduysak gelen mesajı ekranda yansıtalım
                                result = JSON.parse(result);

                                if (result.number == 200) {
                                    // Veritabanını güncelle
                                    Skeleton.savechanges();
                                }

                                // Bir uyarı penceresi açalım 
                                // Burada olumlu veya olumsuz bir mesaj gelmiş olacak
                                dialog.show({
                                    title: '',
                                    content: result.number == 200 ? _.lang.current.infoFileDeletedText : _.lang.current.infoDeleteFileNotFound,
                                    button1: {
                                        text: _.lang.current.infoOkayButton,
                                        action: function() {

                                            // Sadece silindiyse bir takım işlemler yapalım
                                            if (result.number == 200) {


                                                //console.log(repo.root);

                                                // Data, veritabanında var ozaman sil
                                                if (indx != -1) {
                                                    // $Gastroskopi$cobble_stone
                                                    _.data[repo.root].splice(indx, 1);
                                                }

                                                // Checkbox'ı al
                                                var chk = menu.selectedMenuItem.target.children[0].children[0];

                                                // Checkbox'ın yanındaki ikon nesnesini al
                                                var icon = menu.selectedMenuItem.target.children[1];

                                                var key = chk.getAttr('key');

                                                // Eğer data da bir veri kalmadıysa silelim ve seçili menüyü sıfırlayalım
                                                if (_.data[repo.root].length == 0 && menu.data[key].count == 0) {
                                                    delete _.data[repo.root];
                                                    icon.remClass('menu-item-locked');
                                                    _.prompter.show({
                                                        message: [
                                                            helper.format(_.lang.current.infoAllFileClear, menu.data[key].title),
                                                        ],
                                                        timer: 6000,
                                                        closeVisible: false
                                                    });
                                                }

                                                menu.selectedMenuItem.remClass('show', 'selected');


                                                // Upload ekranındaki listeden kaydı silelim
                                                e.target.__removeItem.remove();
                                            }

                                            dialog.hide();
                                        }
                                    }
                                });
                            },
                            error: function(result) {
                                dialog.show({
                                    title: _.lang.current.errErrorTitle,
                                    content: _.lang.current.errSystemDeleteText,
                                    button1: {
                                        text: _.lang.current.infoOkayButton,
                                        action: function() {
                                            dialog.hide();
                                        }
                                    }
                                });
                            }

                        });
                    }
                },
                button2: {
                    text: _.lang.current.infoCancelButton,
                    action: function() {
                        dialog.hide();
                    }
                }
            });



        }




        //....................................................................................




        // Çalıştırıldığında contentlist nesnesi içerisindeki tüm nesneneleri siler
        function clear() {
            var list = gall.contentList.target.children;
            while (list.length > 0) {
                list[0].remove();
            }
        }




        //....................................................................................




        // Gelen Array list içerisindeki tüm dataları tabloya aktarır
        // items parametresi bir Array nesnedir
        // Array nesnesi içerisinde gelen her bir datanın aldığı parametreler ↩ 
        // param.title
        // param.file

        function load(items) {

            // Tüm listeyi başlangıçta temizle
            clear();
            // Items Array nesnesi varsa işleme al
            if (items && items.length > 0) {

                // Döngü içerisinde dataları ekrana yansıt
                for (var n = 0; n < items.length; n++) {
                    add(items[n]);
                }

            } else {
                var comment = new coll("div", { id: 'skeleton-gallery-comment' })
                    .setHTML(_.lang.current.infoAnyFileText)
                    .insert(gall.contentList.target);
            }

        }



        //....................................................................................




        method.add = add;
        method.clear = clear;
        method.load = load;
        method.show = show;


    }); // MODULES


})(Skeleton);
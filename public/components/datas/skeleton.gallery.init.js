/////////////////////////////////////////////////////////////////////////
//          SKELETON GALLERY INIT
/////////////////////////////////////////////////////////////////////////

(function(_) {


    _.MODULE(function() {


        var gall = _.gallery;
        var coll = _.collection.create;
        var helper = _.helper;
        var menu = _.menuObject;
        var dialog = _.dialog;


        //....................................................................................


        gall.container = new coll('div', { id: 'skeleton-upload-files' })
            .setClass('animated', 'bounceIn');



        //....................................................................................



        gall.header = gall.container
            .create('div', { id: 'skeleton-upload-files-header' });
        gall.header.create('div', { id: 'upload-files-header-title' })
            .setHTML(_.lang.current.infoUploadTitle)
            .createParent('div', { id: 'upload-files-header-close' })
            .setBind('click', function(e) {
                menu.method.selectMenuItem(null);
            });



        //....................................................................................



        gall.content = new coll('div', { id: 'skeleton-upload-files-content' });



        //....................................................................................



        gall.loader = new coll('div', { id: 'skeleton-upload-loader' })
            .hide()
            .insert(gall.content.target)
            .setClass('animated', 'bounceIn');


        //....................................................................................



        gall.loaderIcon = gall.loader
            .create('div', { id: 'upt-load-icon' })
            .createParent('label', { id: 'upt-load-label' })
            .setClass('animation', 'bounceInLeft')
            .setHTML(_.lang.current.infoLoadingText);


        //....................................................................................



        gall.content
            .insert(gall.container.target);



        //....................................................................................


        gall.contentList = new coll('div', { id: 'skeleton-gallery-contentlist' })
            .setClass('animated', 'fadeInRight')
            .insert(gall.container.target);

        //....................................................................................



        gall.container
            .hide()
            .insert(parent.document.body);



        //....................................................................................



        gall.footer = new coll('div', { id: 'skeleton-upload-files-footer' })
            .insert(gall.container.target);



        //....................................................................................


        gall.footerInput = new coll('input', { type: 'file', name: 'uploadfile', accept: 'image/x-png,image/gif,image/jpeg' })
            .insert(gall.footer.target)
            .setBind('change', function(e) {

                gall.footer.setClass('locked');
                menu.container.setClass('locked');

                if (e.target.value) {

                    // Yükleniyor bar'ı göster

                    gall.content.show();
                    gall.contentList.hide();
                    gall.loader.show();

                    // Gönderilecek dataları ayala
                    var uploadData = new FormData();
                    uploadData.append('uploadfile', gall.footerInput.target.files[0]);

                    var x = gall.loader.children().uptloadlabel;
                    var icn = gall.loader.children().uptloadicon;

                    icn.remClass('success', 'error', 'timeout').setClass('progress');

                    setTimeout(function() {
                        // Dataları gönder
                        helper.method.http({
                            url: '/upload',
                            // Upload yapılacakken true olarak işaretliyoruz
                            enctype: true,
                            method: 'POST',
                            data: uploadData,

                            // Yükleme esnasında, yüklenen data durumunu öğreneceğiz
                            progress: function(now, total, per) {
                                x.setHTML(per * 100 + '%');
                            },

                            // Tüm işlemler tamamlandığında çalışacak
                            success: function(result) {

                                result = JSON.parse(result);

                                if (result.number == 200) {

                                    x.setHTML(_.lang.current.infoLoadingSuccess);

                                    icn.remClass('progress', 'error', 'timeout')
                                        .setClass('success');

                                    gall.footerInput.target.value = "";



                                    // Veritabanı tablosuna kayıt yapalım
                                    // Önce gerekli bilgileri alalım
                                    var key = menu.selectedMenuItem.getAttr('key');
                                    var grow = helper.method.getCustomizeUpload() + key;
                                    var dta = _.data[grow];

                                    // Veritabanı tablosunda geçerli bir liste var mı 
                                    if (!dta) {
                                        _.data[grow] = [];
                                        gall.method.clear();
                                    } else if (dta.length == 0)
                                        gall.method.clear();

                                    // Hem veritabanı hem de ekrana yansıtılacak veriler
                                    var src = {
                                        file: result.sourceFile,
                                        title: _.lang.current.infoNewFileDefault
                                    };

                                    // Tabloya kayıt
                                    var __item = gall.method.add(src);

                                    // Veritabanına kayıt
                                    _.data[grow].push(src);


                                    // Dosyanın yüklendiği menüyü işaretleyelim
                                    var child = menu.selectedMenuItem.target.children[0].children[0];
                                    if (!child.checked) {
                                        child.click();
                                    }


                                    // Son olarak 2 saniye sonra listeyi gösterelim
                                    setTimeout(function() {

                                        gall.content.hide();
                                        gall.contentList.show();

                                        menu.selectedMenuItem.setClass('show');
                                        gall.footer.remClass('locked');
                                        menu.container.remClass('locked');

                                    }, 100);


                                    // Dosya yüklendi ancak bir isim yazılmadı. Kullanıcıdan dosya için başlık isteyelim
                                    dialog.prompt({
                                        title: _.lang.current.infoNewFileTitle,
                                        button1: {
                                            text: _.lang.current.infoSaveButton,
                                            action: function(ev, obj) {

                                                if(!obj.target.value) return;
                                                // Bu alanda; hem veritabanı hem de listedeki kaydı güncellememiz gerekiyor
                                                // Önce veritabanında ki alanı bulalım ve güncelleyelim
                                                // Mantık olarak yüklenen son kaydı alıp değiştiriyoruz
                                                _.data[grow][_.data[grow].length - 1].title = obj.target.value;

                                                // Şimdi listedeki alanı bulup güncelleyelim
                                                __item.target.children[0].children[0].innerHTML = obj.target.value;
                                                //console.log(__item.target.children[0].children[0]);
                                                // Veritabanını güncelle
                                                Skeleton.savechanges();
                                                
                                                dialog.hide();

                                            }
                                        }
                                    });


                                } else {

                                    x.setHTML(_.lang.current.errFileExtension);
                                    icn.remClass('success', 'progress', 'timeout').setClass('error');
                                    gall.footerInput.target.value = "";

                                    setTimeout(function() {

                                        gall.content.hide();
                                        gall.contentList.show();

                                    }, 1000);


                                    gall.footer.remClass('locked');
                                    menu.container.remClass('locked');

                                }
                            },

                            // Hata durumu
                            error: function() {
                                icn.remClass('success', 'progress', 'timeout').setClass('error');
                                gall.footerInput.target.value = "";
                                x.setHTML(_.lang.current.errSystemError);
                                gall.footer.remClass('locked');
                                menu.container.remClass('locked');
                            },

                            // Zaman aşımı olduğunda
                            timeout: function() {
                                x.setHTML(_.lang.current.errUploadTimeout);
                                icn.remClass('success', 'progress', 'error').setClass('timeout');
                                gall.footerInput.target.value = "";
                                gall.footer.remClass('locked');
                                menu.container.remClass('locked');
                            }
                        });
                    }, 500);

                } else {
                    gall.loader.hide();
                }
            });



        //....................................................................................


        gall.footerButton = new coll('input', { type: 'button', id: 'skeleton-upload-button' })
            .setVal(_.lang.current.infoUploadButtonText)
            .insert(gall.footer.target);


        //....................................................................................




    }); // MODULES


})(Skeleton);
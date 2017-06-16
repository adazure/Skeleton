/////////////////////////////////////////////////////////////////////////
//          SKELETON GALLERY INIT
/////////////////////////////////////////////////////////////////////////

(function(_) {


    _.MODULE(function() {


        var gall = _.gallery;
        var coll = _.collection.create;
        var helper = _.helper;


        //....................................................................................




        gall.container = new coll('div', { id: 'skeleton-upload-files' })
            .setClass('animated', 'flipInX');



        //....................................................................................



        gall.container
            .create('div', { id: 'skeleton-upload-files-header' })
            .setHTML('Upload Files');



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
            .setHTML('Yükleniyor...');

        //....................................................................................



        gall.content
            .insert(gall.container.target);



        //....................................................................................


        gall.contentList = new coll('div', { id: 'skeleton-gallery-contentlist' })
            .setClass('animated', 'fadeInUp')
            .insert(gall.container.target);


        //....................................................................................



        gall.container
            .insert(parent.document.body);



        //....................................................................................



        gall.footer = new coll('div', { id: 'skeleton-upload-files-footer' })
            .insert(gall.container.target);



        //....................................................................................


        gall.footerInput = new coll('input', { type: 'file', name: 'uploadfile', accept: 'image/x-png,image/gif,image/jpeg' })
            .insert(gall.footer.target)
            .setBind('change', function(e) {


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

                    icn.remClass('success', 'error').setClass('progress');

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

                                    x.setHTML('Yüklendi :)');

                                    icn.remClass('progress', 'error')
                                        .setClass('success');

                                    gall.footerInput.target.value = "";

                                    // Kaydedilen dosyaya ait bilgiyi ekrana yansıtalım
                                    var __item = gall.method.add({
                                        file: result.uploadFile,
                                        desc: 'lorem ipsum dolor'
                                    }).insert(gall.contentList.target);


                                    // Son olarak 2 saniye sonra listeyi gösterelim
                                    setTimeout(function() {

                                        gall.content.hide();
                                        gall.contentList.show();

                                    }, 2000);

                                } else {

                                    x.setHTML('JPG veya PNG dosyası olmalı :((');
                                    icn.remClass('success', 'progress').setClass('error');
                                    gall.footerInput.target.value = "";

                                }
                            },

                            // Hata durumu
                            error: function() {
                                icn.remClass('success', 'progress').setClass('error');
                                gall.footerInput.target.value = "";
                            }
                        });
                    }, 500);

                } else {
                    gall.loader.hide();
                }
            });



        //....................................................................................


        gall.footerButton = new coll('input', { type: 'button', id: 'skeleton-upload-button' })
            .setVal('YENİ YÜKLE')
            .insert(gall.footer.target);


        //....................................................................................




    }); // MODULES


})(Skeleton);
/////////////////////////////////////////////////////////////////////////
//          SKELETON INIT
/////////////////////////////////////////////////////////////////////////

(function(_) {

    // Init Module

    _.MODULE(function() {

        var path = _.path;
        var menu = _.menuObject;
        var helper = _.helper;
        var popup = _.popup;
        var method = _.method;
        var globMethod = _.globalMethod;

        //....................................................................................



        // Sahne üzerinde kullanılacak nesneler
        _.container = document.querySelector('svg');
        _.content = document.querySelector('#conteiner_content');



        //....................................................................................



        // Uygulamanın Tablet ve mobilde çalışmasını istemediğimizden dolayı bazı işlemler yapacağız

        if (helper.method.ismobile()) {
            try {

                // Path'lerin bulunduğu nesneyi seç
                var q = document.querySelector('#container_path_models');

                // Sahneden kaldır
                q.parentNode.removeChild(q);

                // Menuyü sahneden kaldır
                menu.container.parentNode.removeChild(menu.container);

                // Bir uyarı penceresi açalım
                popup.open('modals/error.html');


            } catch (e) {

            }
        }



        //....................................................................................



        // Debug modda kullanılmak üzere oluşturuldu
        // Amaç uygulamanın kurulum aşamasında, içerik olmadığından rasgele ilgili path'lere keyname oluşturması için yapıldı
        if (_.debugmode) {


            //Rasgele içerik üreterek ilgili path alanlarına atama yapmakta
            function get(count) {
                var rndCount = Math.round(Math.random() * tempNames.length);
                var result = [];
                var tempNum = 0;
                while (tempNum < count) {
                    result.push(tempNames[rndCount]);
                    tempNum++;
                }
                return result;
            }

            var tempNames = Object.keys(menu.data);
            Object.keys(path.data).forEach(function(e) {
                var tempRnd = Math.random(6) + 1;
                path.data[e].data = get(tempRnd);
            });

        }



        //....................................................................................



        // Sağ tuş menu etkileşimi sağlayalım
        window.addEventListener('contextmenu', method.contextmenu, false);


        //....................................................................................


        // Uygulamanın can damarı aslında burası.
        // Uygulama sürükle bırak üzerine kurulduğu için, mouseup ve move işlemleri üzerinde kontrollerimizi yapacağız
        // Bu alan sadece SVG dosyaları için
        window.addEventListener('mouseup', method.windowMouseUp);
        window.addEventListener('mousemove', method.windowMouseMove);
        window.addEventListener('mousedown', method.windowMouseDown);
        window.addEventListener('keyup', path.method.removeSelectedClone);

        // Bu alan hem parent hem de SVG alanı için ortak
        for (var n = 0, l = [window, parent.window]; n < l.length; n++) {
            l[n].addEventListener('mouseup', globMethod.triggerUp);
            l[n].addEventListener('mousedown', globMethod.triggerDown);
            l[n].addEventListener('mousemove', globMethod.triggerMove);
        }

        //....................................................................................


        /* 

        Skeleton.update({
                "$Gastroskopi$luminal_darlik": [

                ],
                "path4": {
                    "transforms": [{
                            "x": "637",
                            "y": "86",
                            "obj": "luminal_darlik",
                            "fields": {
                                "endoskopi": "Geçti"
                            }
                        },
                        {
                            "x": "631",
                            "y": "57",
                            "obj": "luminal_darlik",
                            "fields": {
                                "uzunluk": "3",
                                "endoskopi": "Geçemedi"
                            }
                        }
                    ]
                },
                "$Gastroskopi$ulser_izole": [{
                        "file": "1498041261968.png",
                        "title": "sdfsdfdsf"
                    },
                    {
                        "file": "1498041267947.png",
                        "title": "123123123123"
                    }
                ],
                "path39": {
                    "transforms": [{
                            "x": "607",
                            "y": "427",
                            "obj": "ulser_izole",
                            "fields": {
                                "oval": "Oval",
                                "boyut1": "<0.5 cm",
                                "boyut2": "0.5-1 cm",
                                "boyut3": "1-2 cm",
                                "boyut4": "3-5 cm",
                                "adet": "3",
                                "nodularite": true
                            }
                        },
                        {
                            "x": "604",
                            "y": "469",
                            "obj": "ulser_izole",
                            "fields": {
                                "aftoz": "Aftöz",
                                "oval": "Oval",
                                "yildiz": "Yıldız",
                                "sirkuler": "Sirküler",
                                "boyut1": "<0.5 cm",
                                "boyut4": "3-5 cm",
                                "adet": "4",
                                "nodularite": true
                            }
                        }
                    ]
                },
                "path38": {
                    "transforms": [{
                        "x": "565",
                        "y": "637",
                        "obj": "ulser_izole",
                        "fields": {

                        }
                    }]
                },
                "path40": {
                    "transforms": [{
                        "x": "669",
                        "y": "605",
                        "obj": "ulser_izole",
                        "fields": {
                            "oval": "Oval",
                            "yildiz": "Yıldız",
                            "boyut1": "<0.5 cm",
                            "boyut2": "0.5-1 cm",
                            "boyut3": "1-2 cm",
                            "boyut4": "3-5 cm",
                            "boyut5": ">5 cm",
                            "adet": "4",
                            "nodularite": true
                        }
                    }]
                },
                "$Gastroskopi$cobble_stone": [

                ]
            });


        */



    }); // MODULE




    // Tüm modülleri çalıştır
    _.MODULE();



})(Skeleton);
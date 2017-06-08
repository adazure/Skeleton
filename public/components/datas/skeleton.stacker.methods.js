/////////////////////////////////////////////////////////////////////////
//          SKELETON STACKER METHOD
/////////////////////////////////////////////////////////////////////////

(function (_) {

    _.MODULE(function () {

        // Yüklenecek formu bu constructor ile oluşturuyoruz
        // <param formid> formun yükleneceği alan "<div id='form_container'></div>"
        // <param schemaName> yüklenecek olan formun adı


        var helper = _.helper.method;

        function stacker(args) {
            if (typeof args != 'object') return;


            var source = args.source;
            var obj = parent.document.querySelector(args.el);

            stacker.method = {};

            Object.keys(args).forEach(function (key) {
                if (typeof args[key] == 'function') {
                    stacker.method[key] = args[key];
                }
            });

            helper.http('/modals/' + source + '.json', function (data) {
                var acc = eval(data);
                if (!acc.length)
                    find(obj, acc);
                else
                    for (var i = 0; i < acc.length; i++)
                        find(obj, acc[i]);
            });


            return stacker;
        }



        //....................................................................................





        function addStyle(obj, data) {
            Object.keys(data).forEach(function (key) {
                obj.style[key] = data[key];
            });
        }



        //....................................................................................



        function addEvent(obj, key, action) {

            // Buradada istersek mutliple event değerleri verilebilir
            // Aynı nesnelerde olduğu gibi aralarında nokta koyarak birden fazla eventname değerine aynı method aktarılabilir
            // (mousedown.touchstart) = action()

            var first = key.charAt(0);
            var last = key.charAt(key.length - 1);

            // Hatalı event tanımlaması varsa console'de uyarı verelim
            if (first == '(' && last != ')' || first != '(' && last == ')')
                throw ('Dosya adı : skeleton.stacker.methods.js\nSatır numarası 56. \nEvent tanımlaması geçersiz. Change, mousedown, click, keyup vs gibi alanlar için tanımladığınız veride parantezler kapatılmamış.');

            // Bu bir event değilse
            if (first != '(' && last != ')') return false;

            // Multiple veriler varsa alalım
            var multiple = key.substring(1, key.length - 1);
            var sp = multiple.split('.');

            for (var i = 0; i < sp.length; i++) {

                var ts = sp[i];
                var str = ts.substring(0, 2);
                ts = str == 'on' ? ts.substring(2) : ts;

                // Bildirilen method var mı
                var method = stacker.method[action];

                if (!method) throw ('Stacker "' + action + '" adında bir method bulunmadı.');

                // json dosya içinde function(){console.log('test');} örneğindeki gibi..
                // eğer direk çalıştırılabilir kod var ise çalıştırıyoruz
                // eğer yok ise; yani hataya düşerse, sadece listedeki methodu ekliyoruz
                try {
                    var t = eval(method);
                    obj.setBind(ts, t);
                } catch (error) {
                    obj.setBind(ts, method);
                }
            }

            // Event işleminin yapıldığını bildirelim
            return true;
        }



        //....................................................................................





        function create(key) {

            // Boş olmamalı ve mutlaka $ işareti olmalı
            if (!key) return null;
            if (key.charAt(0) != '$') return null;

            // $ işaretinden sonraki kısmı al
            key = key.substring(1);

            // Varsa tiplerini alalım
            var typename = null;

            if (key.indexOf('.') != -1) {

                // Gelen veride, aralarına nokta koyarak çeşitli bilgiler alabiliriz
                // Basit anlamda element adı ve tipini aldık
                // elementname.typename
                // liste uzayıp gidebilir ve istediğimiz kadar bilgiyi nokta ile alabiliriz
                // $input.text

                var sp = key.split('.');
                key = sp[0]; // Key
                typename = sp[1]; // Type
            }

            var n = parent.document.createElement(key);
            if (typename)
                n.type = typename;

            return n;

        }



        //....................................................................................




        // Burası sadece select nesnesi için hazırlandı. Daha sonradan farklı amaçlar için kullanılabilir
        function addItems(obj, data) {
            Object.keys(data).forEach(function (key) {
                var n = parent.document.createElement('option');
                n.innerHTML = key;
                n.value = data[key];
                obj.appendChild(n);
            });
        }



        //....................................................................................





        // Bu alanda, gelen main nesnesi "div vs" içine ekleneceği alt nesneleri oluşturuyoruz.
        // Aslında burası bir döngü. Kendi kendini çağıran ve alt nesneleri sonuna kadar oluşturan bir method
        function find(main, items) {

            // Gelen data objesi içindeki tüm key ve value değerlerini alıyor
            Object.keys(items).forEach(function (key) {

                // Children bilgisi bulunduğunda, alt nesneler ekleyeceğimizi bildirmiş oluyor
                // Gelen value değerindeki dataları tekrar method'a bildirip döngü oluşturuyoruz
                if (key == 'children')
                    for (var i = 0, p = items[key]; i < p.length; i++) {
                        find(main, p[i]);
                    }

                // CSS bilgisi ekleyeceğimizi anlıyoruz
                else if (key == 'style') {
                    addStyle(main, items[key]);
                }

                // Select nesnesi için koyuldu. İleri de farklı amaçlar için items alanına sorgular ekleyebiliriz
                else if (key == 'items') {
                    addItems(main, items[key]);
                }

                else if (key == 'text') {
                    main.innerHTML = items[key];
                }

                // Yukarıdaki tanımlamalara uygumuyorsa gelen key değeri, o zaman bu bir element mi veya bir attribute değeri mi kontrol edelim
                else {
                    var t = create(key);

                    // Eğer değer null dönmüyorsa bu bir elementtir
                    if (t) {
                        // Elementi ekleyeceğimiz bir root nesne varsa ekler
                        if (main)
                            main.appendChild(t);

                        // Elementi ekledik. Şimdi value değerindeki özelliklerini ekleyelim
                        find(t, items[key]);
                    }

                    // Bu bir element değil o zaman gelen data içerisindeki attribute değerleriymiş olduğunu varsayarak nesneye aktaralım
                    else {

                        // Mutlak root nesnesi olmalı.
                        if (main) {

                            // Bak bakalım bu bir event mi
                            var res = addEvent(main, key, items[key]);

                            // Event olayı yoksa özellik olarak ata
                            if (!res) {
                                // Bir kontrol daha koyalım işimiz düzgün olsun.
                                // Key değeri metin dışında bir karakter içermesin
                                if (key.indexOf('.') != -1) throw ('Nesne özellik atamasında geçersiz karakterler var. Yalnızca alpha (a-z) karakterler yazınız.')
                                main.setAttribute(key, items[key]);
                            }
                        }
                    }
                }
            });

        }



        //....................................................................................


        stacker.addStyle = addStyle;
        stacker.addEvent = addEvent;
        stacker.create = create;
        stacker.addItems = addItems;
        stacker.find = find;



        //....................................................................................


        _.stacker = stacker;

    }); // MODULE


})(SkeletonAction);
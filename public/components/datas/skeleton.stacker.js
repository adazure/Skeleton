/////////////////////////////////////////////////////////////////////////
//          SKELETON STACKER
/////////////////////////////////////////////////////////////////////////

(function(_) {

    _.MODULE(function() {

        var helper = _.helper.method;



        //....................................................................................



        function stacker(args) {
            if (typeof args != 'object') return;

            // Geliştirici tarafından verilen json dosyası veya object nesnesi
            var source = args.source;

            // Burayı ekstra olacak proje için ürettik
            // Bu değişken üzerine gelecek obje nesnesi içerisine, elementlerin value değerlerinin olduğu datayı, buraya güncelleyeceğiz
            stacker.updateWithData = args.updateWithData;

            // Üzerinde işlem yapılacak container element nesnesi
            // Gelen el nesnesinin DIV olduğunu varsayarsak, içerisine ilgili elementleri oluşturacağız
            var obj = typeof args.el == 'object' ? args.el : parent.document.querySelector(args.el);

            // Arkaplanda methodların tutulacağı liste
            stacker.method = {

                // Methodlar trigger edildiğinde, event sınıfı içine implemente edilecek olan element listesi nesnesi
                // function(evnt){ evnt.items } şeklinde kullanarak, form içindeki tüm nesnelere erişilebilir
                items: {},
                data: {},

                // Form üzerindeki tüm elementlerin tetiklenmesi için ara bir method tanımlanıyor
                trigger: function(name) {

                    // Bu method ilgili element eventi tetiklendiğinde çalışacak
                    // Biz de bu method tetiklendiğinde, method içine dönecek olan object içeriğine istediğimiz dataları gömeceğiz
                    // Örneğin data ve items adında iki adet alanımız daha olacak
                    // data nesnesi, tüm input,textarea,select vs gibi elementlerin içeriklerini tutan object nesnesi
                    // items ise; name ve id attribute özelliğine sahip tüm elementlerin listesini tutar
                    function trigger(ev) {

                        var call = null;
                        if (typeof name != 'function') {
                            call = stacker.method[name];
                        } else
                            call = name;

                        ev.items = stacker.method.items;
                        ev.data = stacker.method.data;

                        // Trigger methodumuz çalıştırıldığında updateWithData datasını güncelleyelim
                        stacker.updateWithData = ev.items;

                        call(ev);

                        stacker.method.triggerGetValues(ev.target);
                    }
                    return trigger;

                },
                // Methodlar trigger olduğunda nesnelerin içeriklerini liste halinde veren method
                triggerGetValues: function(item) {

                    var name = item.name || item.id;

                    if (!name) return;
                    var data = stacker.method.data;

                    switch (item.type) {
                        case 'checkbox':
                        case 'radio':
                            var val = item.checked ? item.value ? item.value : true : null;
                            if (val)
                                data[name] = val;
                            else if (data)
                                delete data[name];
                            break;
                        case 'button':
                            break;
                        default:
                            if (item.value)
                                data[name] = item.value;
                            else
                                delete data[name];
                            break;

                    }

                }
            };

            // Object data içerisineki tüm methodları bulur ve stacker.method içerisine aktarır
            // Buranın kullanılma amacı, elementler üzerinde eğer on[change,click,mousedown vs...] gibi elle tanımlanmış methodlar varsa...
            // .. bunları alarak trigger methodunda tetikletebilmek
            Object.keys(args).forEach(function(key) {
                if (typeof args[key] == 'function') {
                    stacker.method[key] = args[key];
                };
            });

            // Eğer source yoksa ancak sadece obj varsa, o halde obje içindeki dataları hesaplayıp, sadece name ve id değerine sahip olan nesneleri seçelim
            // Amacımız HTML üzerinde çalışmak, else kısmından itibaren JSON format, file ve Object üzerinde çalışmaktadır.
            if (obj && !source) {

                stacker.elements = {};

                function repeat(el) {
                    for (var i = 0, ch = el.children; i < ch.length; i++) {
                        var _item = ch[i];
                        if (_item.id || _item.name) {
                            stacker.method.items[_item.name || _item.id] = _item;
                            stacker.elements[_item.name || _item.id] = function(eventname, action) {
                                var method = new stacker.method.trigger(action);
                                _item.setBind(eventname, method);
                                return stacker.elements;
                            }
                        }
                        repeat(_item);
                    }
                }

                repeat(obj);

            } else {



                // Source'den gelen veri window aldında bulunan bir object nesnesi de olabilir ya da json uzantılı bir dosya da olabilir
                // İlk olarak json uzantılı dosyaya bakılıyor
                if (typeof source == 'string' && source.endsWith('.json')) {

                    // Dosya yüklemesini yap
                    helper.http(source, function(data) {
                        // Gelen dataları parse et ve elementleri sayfaya yansıt
                        data = eval(data);
                        parseData(data, obj);
                    });
                    //} else {
                    //parser(obj);
                }

                // Gelen source bilgisi window altında herhangi bir yerden elişilebilen bir nesne olduğunu söylüyor
                else if (source && typeof source == 'object') {
                    // O zaman direk olarak parse et ve elementleri sayfaya yansıt
                    parseData(source, obj);
                }

            }

            // stacker constructor methodunu geri döndür
            return stacker;
        }



        //....................................................................................



        // Gelen json file yada json object datasını parse eder ve obj nesnesine, yani ana container nesnesinin içine elementleri oluşturmaya başlar
        function parseData(data, obj) {

            // Data bir array mi yoksa object nesnesini ona göre işlem yapacağız
            // Bu bir object nesnesi
            if (!data.length)
            //Data verilerine göre elementleri oluştur
                find(obj, data);
            else
            // Array nesnesi
                for (var i = 0; i < data.length; i++)
                find(obj, data[i]);
        }



        //....................................................................................




        // Obj nesnesine CSS style verileri ekler
        function addStyle(obj, data) {
            Object.keys(data).forEach(function(key) {
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

            // Bu bir event değilse
            if (first != '(' && last != ')') return false;

            // Hatalı event tanımlaması varsa console'de uyarı verelim
            if (first == '(' && last != ')' || first != '(' && last == ')')
                throw ('Dosya adı : skeleton.stacker.methods.js\nSatır numarası 56. \nEvent tanımlaması geçersiz. Change, mousedown, click, keyup vs gibi alanlar için tanımladığınız veride parantezler kapatılmamış.');


            // Multiple veriler varsa alalım. Yani event.event.event şeklinde gidiyor olabileceğini varsayalım
            var multiple = key.substring(1, key.length - 1);

            // event adlarını al
            var getAllItem = multiple.split('.');

            for (var i = 0; i < getAllItem.length; i++) {

                // Sıradaki event adı
                var _evname = getAllItem[i];

                // Geliştirici tarafından gelen action değerini değiştirerek, onun yerine önce bizim methodumuzu tetiklemesini..
                // .. daha sonra bizim methodumuz içerisinden, bir kaç değişiklik ve ekleme yaparak action methodunu tetiklemesini sağlıyor olacağız
                // Eğer tetiklenen method içerisinde event.items gibi özel tanımlamalar eklemek istiyorsak...
                // .. stacker.method objesinde ekleme yapılmalıdır
                var method = new stacker.method.trigger(action);

                // json dosya içinde function(){console.log('test');} örneğindeki gibi..
                // eğer direk çalıştırılabilir kod var ise çalıştırıyoruz
                // eğer yok ise; yani hataya düşerse, sadece listedeki methodu ekliyoruz

                try {
                    var t = eval(method);
                    obj.setBind(_evname, t);
                } catch (error) {
                    obj.setBind(_evname, method);
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

            helper.forEach(data, function(key, data) {
                var n = parent.document.createElement('option');
                n.innerHTML = key;
                n.value = data || key;
                obj.appendChild(n);
            });

        }



        //....................................................................................





        // Bu alanda, gelen main nesnesi "div vs" içine ekleneceği alt nesneleri oluşturuyoruz.
        // Aslında burası bir döngü. Kendi kendini çağıran ve alt nesneleri sonuna kadar oluşturan bir method
        function find(main, items) {

            // Gelen data objesi içindeki tüm key ve value değerlerini alıyor
            Object.keys(items).forEach(function(key) {

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

                } else if (key == 'text') {
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

                                // Eğer ID değerine sahip nesneleri ayıralım
                                if (key == 'id') {
                                    stacker.method.items[items[key]] = main;
                                }

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


})(Skeleton);
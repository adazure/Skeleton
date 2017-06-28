/////////////////////////////////////////////////////////////////////////
//          SKELETON
/////////////////////////////////////////////////////////////////////////

var Skeleton = (function (_) {

    _.datetime = new Date();
    _.method = {};
    _.globalMethod = {};
    _.savechanges = function () {


        console.log(new Date() + ' Veritabanı güncellendi');
    }

    // Açılacak popuplar için özel olarak tanımlandı.
    // Oluşturulacak yeni popup formları da bu değişken üzerinden dağıtılmalıdır
    _.jsons = {};

    // Sürüklenmek istenen nesne
    _.selectedObject = null;

    // Seçilen nesne sürüklenebilir mi? 
    _.objectIsDragable = false;

    // Burada tanımlı array değişkenler içindeki eventler, window mouseup,mousedown, mousemove olayları...
    // .. her tetiklendiğinde kontrol edilecek ve listede olay dinleyici varsa çalıştıracak
    _.globalWindowEvents = {
        up: [],
        down: [],
        move: []
    };

    // SVG Nesnesi
    _.container = null;

    // Path nesnelerinin bulunduğu nesne
    _.content = null;

    // Veritabanına kaydedilecek olan veriler
    _.data = {};

    _.data = {
        "$Gastroskopi$luminal_darlik": [

        ],
        "path4": {
            "transforms": [
                {
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
        "$Gastroskopi$ulser_izole": [
            {
                "file": "1498041261968.png",
                "title": "sdfsdfdsf"
            },
            {
                "file": "1498041267947.png",
                "title": "123123123123"
            }
        ],
        "path39": {
            "transforms": [
                {
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
            "transforms": [
                {
                    "x": "565",
                    "y": "637",
                    "obj": "ulser_izole",
                    "fields": {

                    }
                }
            ]
        },
        "path40": {
            "transforms": [
                {
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
                }
            ]
        },
        "$Gastroskopi$cobble_stone": [

        ]
    };


    // Kod tarafında debugmode özelliğine bağlanmış/oluşturulmuş/oluşturulmak istenen yerler için kontrol değişkeni
    _.debugmode = false;

    //Her şey yüklendiğinde çalıştırılacak Module init methodları
    var inits = [];


    _.MODULE = function (action) {
        if (action && typeof action === 'function') {
            inits.push(action);
        } else
            for (var i = 0; i < inits.length; i++) {
                inits[i]();
            }
    }

    return parent.Skeleton = _;

})({});
/////////////////////////////////////////////////////////////////////////
//          SKELETON QUERY PARSER
/////////////////////////////////////////////////////////////////////////

(function (_) {


    _.MODULE(function () {

        var request = _.Request = {};

        //....................................................................................



        // Adres bilgisindeki ? işaretinden sonraki alanları dizi haline getirir
        // Kullanımı Request.paramname

        function queryParser() {
            var query = parent.location.href;
            if (query) {
                query = query.substring(query.indexOf('?') + 1).split('&');
                for (var i = 0; i < query.length; i++) {
                    var spt = query[i].split('=');
                    request[spt[0]] = spt[1];
                }
            }

        }



        //....................................................................................


        queryParser();

    });

})(Skeleton);
/////////////////////////////////////////////////////////////////////////
//          SKELETON PROTOTYPES
/////////////////////////////////////////////////////////////////////////

(function (_) {
    
    _.globalPrototype = {
        method:{},
        extend:null
    }

})(Skeleton);
/////////////////////////////////////////////////////////////////////////
//          SKELETON GLOBAL PROTOTYPES METHODS
/////////////////////////////////////////////////////////////////////////

(function(_) {


    _.MODULE(function() {
        // Burada tanımlanan method tanımlamaları prototype olarak kullanılacak
        // Burada tanımlanan method tanımlamaları SVG ve HTML Elementler için ortak isim ve methodlardır


        var glob = _.globalPrototype;


        //....................................................................................


        function hasClass(name) {
            var self = this;
            var e = self.getAttr('class');
            if (e) return e.split(' ').indexOf(name) != -1;
            return false;
        }


        //....................................................................................



        function setClass(name) {

            if (arguments.length > 1) {
                for (var i = 0; i < arguments.length; i++) {
                    this.setClass(arguments[i]);
                }
            } else if (!this.hasClass(name)) {
                var isAttr = this.getAttr('class');
                var e = isAttr ? isAttr.split(' ') : [];
                e.push(name);
                this.setAttr('class', e.join(' '));
            }

            return this;
        }


        //....................................................................................



        function setAttr(name) {
            var self = this;
            if (typeof name === 'object') {
                Object.keys(name).forEach(function(e) {
                    self.setAttribute(e, name[e]);
                });
            } else if (arguments.length == 2) {
                self.setAttribute(name, arguments[1]);
            }

            return self;
        }



        //....................................................................................



        function remAttr(name) {
            if (this.hasAttribute(name))
                this.removeAttribute(name);
            return this;
        }



        //....................................................................................




        function getAttr(name) {
            return this.getAttribute(name);
        }




        //....................................................................................




        function hasAttr(name) {
            return this.hasAttribute(name);
        }



        //....................................................................................



        function setBind(name, action) {
            if (this.addEventListener) this.addEventListener(name, action, false);
            else if (this.attachEvent) this.attachEvent('on' + name, action);
            return this;
        }



        //....................................................................................



        // Çoklu dinleyici ekleme methodu. Amaç mobil ve browser için aynı methodu tanımlamak adına eklendi.
        function setBinds(name, action) {
            if (typeof name === 'object')
                for (var i = 0; i < name.length; i++)
                    this.setBind(name[i], action);
            else
                this.setBind(name, action);
            return this;
        }



        //....................................................................................



        function remBind(name, action) {
            if (this.removeEventListener) this.removeEventListener(name, action, false);
            else if (this.detachEvent) this.detachEvent('on' + name, action);
            return this;
        }



        //....................................................................................



        // Çoklu dinleyici silme methodu. Amaç mobil ve browser için aynı methodu tanımlamak adına eklendi.
        function remBinds(name, action) {
            if (typeof name === 'object')
                for (var i = 0; i < name.length; i++)
                    this.remBind(name[i], action);
            else
                this.remBind(name, action);
            return this;
        }



        //....................................................................................




        function setCSS(args) {
            var self = this;
            if (arguments.length == 1)
                Object.keys(args).forEach(function(key) {
                    self.style[key] = args[key];
                });
            else if (arguments.length == 2)
                self.style[args] = arguments[1];
            return self;
        }



        //....................................................................................



        function remClass(name) {
            var e = this.getAttr('class');
            
            if (e) {
                var a = e.split(' '),
                    b = a.indexOf(name);
                if (b == -1) return;
                a.splice(b, 1);
                this.setAttr('class', a.join(' '));
            }
            return this;
        }



        //....................................................................................



        function extend(node, name, action) {

            Object.defineProperty(node.prototype, name, {
                set: action,
                configurable: true,
                enumerable: true,
                writeable: true
            });

        }


        //....................................................................................


        function trigger(eventname) {
            var ev = new MouseEvent(eventname, {
                "view": parent.window,
                "bubbles": true,
                "cancelable": false
            });

            this.dispatchEvent(ev);
            return this;
        }


        //....................................................................................


        glob.method.hasClass = hasClass;
        glob.method.setClass = setClass;
        glob.method.remClass = remClass;
        glob.method.setAttr = setAttr;
        glob.method.remAttr = remAttr;
        glob.method.getAttr = getAttr;
        glob.method.hasAttr = hasAttr;
        glob.method.setBind = setBind;
        glob.method.setBinds = setBinds;
        glob.method.remBind = remBind;
        glob.method.remBinds = remBinds;
        glob.method.setCSS = setCSS;
        glob.method.trigger = trigger;
        glob.extend = extend;

    }); //MODULE

})(Skeleton);
/////////////////////////////////////////////////////////////////////////
//          SKELETON SVG
/////////////////////////////////////////////////////////////////////////

(function (_) {


    _.svg = {
        method:{},
        // Global olarak istendiğinde erişileilecek methodların listesi
        globals:{},
        matrix:null
    }
    
})(Skeleton);
/////////////////////////////////////////////////////////////////////////
//          SKELETON SVG METHOD
/////////////////////////////////////////////////////////////////////////

(function(_) {


    _.MODULE(function() {
        var method = _.svg.method;
        var glob = _.svg.globals;
        //....................................................................................



        //SVG nesnesine yeni sınıf ekler
        function setClass(name) {

            if (typeof name === 'object' && name.length) {
                for (var i = 0; i < name.length; i++) {
                    this.setClass(name[i]);
                }

                return this;
            }

            if (!this.hasClass(name)) {
                var isAttr = this.getAttr('class');
                var e = isAttr ? isAttr.split(' ') : [];
                e.push(name);
                this.setAttr('class', e.join(' '));
            }

            return this;
        }



        //....................................................................................



        //SVG Sınıfından sınıf siler
        function remClass(name) {
            var e = this.getAttr('class');
            if (e) {
                var a = e.split(' '),
                    b = a.indexOf(name);
                if (b == -1) return;
                a.splice(b, 1);
                this.setAttr('class', a.join(' '));
            }

            return this;
        }



        //....................................................................................



        // Yeni özellik atar
        // İki adet parametre alabilir. Varsayılan olarak params adında Object sınıfından nesne alır
        // Object nesnesi döndürülmüşse içindeki özellikler adedince verileri nesneye aktadır
        // params = {key:value, key:value }
        //
        // İkincil olarak eğer arguments[1] değeri mevcut ise, params nesnesi "key" durumuna düşer. 
        // params = key
        // arguments[1] = value

        function setAttr(params) {

            //Object nesnesi
            if (arguments.length == 1 && typeof params === 'object') {
                var self = this;
                Object.keys(params).forEach(function(e) {
                    self.setAttributeNS(null, e, params[e]);
                });
            }

            // key/value
            else if (arguments.length == 2) {
                this.setAttributeNS(null, params, arguments[1]);
            }
            return this;
        }



        //....................................................................................


        function getAttr(name) {
            return this.getAttribute(name);
        }


        //....................................................................................


        //SVG nesnesi boyutlandırıldığında, koordinatlarda sorun yaşamamak için koordinatları tekrardan hesaplıyor
        function matrix(item, a) {

            if (item) {
                var m = item.getScreenCTM();
                var p = document.documentElement.createSVGPoint();
                p.x = a.clientX;
                p.y = a.clientY;
                p = p.matrixTransform(m.inverse());
                return p;
            }
        }



        //....................................................................................






        method.setClass = setClass;
        method.remClass = remClass;
        method.setAttr = setAttr;
        method.getAttr = getAttr;
        _.svg.matrix = matrix;

    }); // MODULE

})(Skeleton);
/////////////////////////////////////////////////////////////////////////
//          SKELETON SVG INIT
/////////////////////////////////////////////////////////////////////////

(function (_) {


    _.MODULE(function () {
        // Bu alandaki prototype tanımlamaları sadece SVG nesnelerine tanımlanmıştır

        var glob = _.globalPrototype;
        var method = _.svg.method;



        //....................................................................................



        // Sadece SVG elementleri alacakları prototype methodları aktarılıyor

        for (var e = [SVGGElement, SVGPathElement, SVGPolygonElement, SVGPolylineElement, SVGLineElement, SVGRectElement, SVGImageElement, SVGTextElement, SVGCircleElement], i = 0; i < e.length; i++) {

            // Global

            Object.keys(glob.method).forEach(function (n) {
                e[i].prototype[n] = glob.method[n];
            });

            // Sadece SVG için

            Object.keys(method).forEach(function (n) {
                e[i].prototype[n] = method[n];
            });


        }

    }); // MODULE

})(Skeleton);
/////////////////////////////////////////////////////////////////////////
//          SKELETON HELPER
/////////////////////////////////////////////////////////////////////////

(function (_) {
    
    _.helper = {
        method:{}
    };

})(Skeleton);
/////////////////////////////////////////////////////////////////////////
//          SKELETON GLOBAL PROTOTYPES METHODS
/////////////////////////////////////////////////////////////////////////

(function(_) {


    _.MODULE(function() {

        var method = _.helper.method;



        //....................................................................................




        function ismobile() {
            var check = false;
            (function(a) {
                if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true;
            })(navigator.userAgent || navigator.vendor || window.opera);
            return check;
        }



        //....................................................................................

        // İstediğimiz XMLHTTPREQUEST ile datalar yükleyeceğiz
        // Basic düzeyde istek yapımız olacak
        // Yapı gereği sorgulamada kullanılacak alanlarla beraber örnek yapı şöyledir
        /*
            .http({

                //  İşlem yapılacak URI adresi
                url:'',

                //  Gönderme şekli
                //  Varsayılan olarak GET işaretlidir
                method: 'GET/POST/PUT/DELETE',

                //  Dosya upload işleminde true yapıyoruz
                //  Varsayılan olarak false işaretlidir
                enctype:true/false,

                //  POST edilmek istenen bir veri varsa eklenir
                //  Varsayılan olarak null değer alır
                data:null,

                //  Geliştirici tarafından belirtilecek method
                //  Methoda geri döndürülecek 3 parametre bulunur
                //  Yüklenen boyut / toplam yüklenecek boyut / kalan boyut
                //  progress:function(loaded,total,now){}
                //  Varsayılan olarak null değer alır
                progress:method,

                //  İşlem tamamlandığında çalıştırılacak method
                //  Geliştirici tarafından belirtilen bir method varsa çalıştırılır
                //  Parametre olarak geriye dönen datayı iletir
                //  Varsayılan olarak null değer alır
                //  success:function(data){}
                success:method

                //  Bir hata oluştuğunda çalışır
                //  Geliştirici tarafından belirtilen bir method varsa çalıştırılır
                //  Varsayılan olarak null değer alır
                //  error:function(data){}
                error:method

            });
         */
        function http(args) {

            if (!args.url) throw ('URL bilgisini girmediniz yada HTTP yapısını değiştirdiniz');

            var xhttp = new XMLHttpRequest();
            xhttp.timeout = 60000;

            // Varsayılan
            var ismatch = (args.method || 'GET').match(/GET|POST|PUT|DELETE/);
            args.method = ismatch ? ismatch[0] : 'GET';

            args.data = args.data || null;

            xhttp.open(args.method, args.url, true);

            // İşlem sırasındaki durumu gösterebiliriz
            function progress(e) {
                if (e.lengthComputable) {
                    args.progress(e.loaded, e.total, e.loaded / e.total);
                }
            }

            // Upload işlemi varsa / true / false
            if (args.enctype && typeof args.enctype == 'boolean') {
                xhttp.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
            }

            // İşlem sırası
            if (args.progress && typeof args.progress == 'function')
                xhttp.addEventListener("progress", progress, false);

            // Durum kontrolü
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    if (args.success)
                        args.success(xhttp.responseText);
                } else if (this.readyState == 4 && this.status != 200) {
                    if (args.error)
                        args.error();
                }
            }

            xhttp.ontimeout = function(e) {
                if (args.timeout)
                    args.timeout();
            };

            xhttp.send(args.data);
        }



        //....................................................................................


        function forEach(data, action) {
            if (typeof data != 'object') { action(null); return; }
            if (data.length) {
                for (var i = 0; i < data.length; i++) {
                    action(data[i]);
                }
            } else if (data) {
                Object.keys(data).forEach(function(key) {
                    action(key, data[key]);
                });
            }
        }


        //....................................................................................


        function extend(root, source) {
            Object.keys(source).forEach(function(key) {
                root[key] = source[key];
            });
        }


        //....................................................................................


        function getCustomizeUpload() {
            return '$' + _.Request.section + '$';
        }



        method.ismobile = ismobile;
        method.http = http;
        method.extend = extend;
        method.getCustomizeUpload = getCustomizeUpload;

    }); // MODULE

})(Skeleton);
(function(_){

    _.element = {
        method:{}
    };

})(Skeleton);
/////////////////////////////////////////////////////////////////////////
//          SKELETON ELEMENT METHODS
/////////////////////////////////////////////////////////////////////////

(function(_) {


    _.MODULE(function() {
        var method = _.element.method;
        var global = _.element.globals;


        //....................................................................................


        var x = 0,
            y = 0,
            drag = false,
            self = null;


        //....................................................................................



        // Nesneyi sürüklemek için işlemi başlatır
        function down(e) {
            x = e.pageX, y = e.pageY, self = e.target;
            window.addEventListener('mouseup', method.up, false);
            window.addEventListener('mousemove', method.move, false);
            drag = true;
        }



        //....................................................................................



        // Nesneyi sürükler
        function move(e) {
            if (drag) {
                var nX = e.pageX - e.target.offsetLeft - x;
                var nY = e.pageY - e.target.offsetTop - y;
                self.draggedObject.style.left = nX + 'px';
                self.draggedObject.style.top = nY + 'px';
            }
        }



        //....................................................................................



        // Nesneyi sürükleme işlemini iptal eder
        function up() {
            self = null;
            drag = false;
            window.removeEventListener('mouseup', method.up, false);
            window.removeEventListener('mousemove', method.move, false);
        }



        //....................................................................................



        function startDragDrop(container) {
            var self = this;
            self.draggedObject = container || this;
            self.setBind('mousedown', method.down, false);
        }



        //....................................................................................



        function stopDragDrop() {
            var self = this;
            self.remBind('mousedown', method.down, false);
        }


        //....................................................................................



        method.down = down;
        method.move = move;
        method.up = up;
        method.startDragDrop = startDragDrop;
        method.stopDragDrop = stopDragDrop;

    });

})(Skeleton);
/////////////////////////////////////////////////////////////////////////
//          SKELETON ELEMENT INIT
/////////////////////////////////////////////////////////////////////////

(function (_) {


    _.MODULE(function () {

        // Yardımcılar
        var glob = _.globalPrototype;
        var el = _.element.method;
        var global = _.element.globals;



        //....................................................................................



        for (var e = [parent.HTMLElement], i = 0; i < e.length; i++) {

            // Global

            Object.keys(glob.method).forEach(function (n) {
                //extend(e[i], n, glob[n]);
                e[i].prototype[n] = glob.method[n];
            });

            // Elements

            Object.keys(el).forEach(function (n) {
                //extend(e[i], n, el[n]);
                e[i].prototype[n] = el[n];
            });
        }

    });



})(Skeleton);
/////////////////////////////////////////////////////////////////////////
//          SKELETON COLLECTION
/////////////////////////////////////////////////////////////////////////

(function (_) {


    _.collection = {
        // new collection.create('tagname',{}); şeklinde kullanılacak method
        create: false,
        globals: {
            method: {},
            down: [],
            up: [],
            move: []
        }
    };

  

})(Skeleton);
/////////////////////////////////////////////////////////////////////////
//          SKELETON COLLECTION METHODS
/////////////////////////////////////////////////////////////////////////

(function (_) {


    _.MODULE(function () {

        var global = _.globalWindowEvents;

        var inc = {};

        //....................................................................................

        // İstenilen isimde HTMLElement nesnesi oluşturur
        // <param name> HTMLElement adı
        // <param attr> Attribute bazında değer atanabilir. Object nesnesi alır
        function coll(name, attr) {

            // Islem yapılacak scope alanı
            var self = this;

            // Elementi oluşturan method
            function _create(e) {
                var doc = parent.document || document;
                return doc.createElement(e);
            }

            // Oluşturulan nesne adı. İstenirse alınabilir
            self.name = name;

            // Nesneyi target alanına oluşturuyoruz
            self.target = _create(name);

            // Eğer Attribute özellikleri girilmesi istenirse hepsini ekler
            if (attr)
                Object.keys(attr).forEach(function (key) {
                    self.target.setAttr(key, attr[key]);
                });


            // Methodları aktaralım
            Object.keys(inc).forEach(function (ky) {
                self[ky] = inc[ky];
            });

            self.target.__collectionData = self;

            return self;
        }




        //....................................................................................
        // .wrap(..) şeklinde çağrıldığında name kısmına belirtilen tipde yeni bir element oluşturur
        // oluşturduğu bu elementin içinde target'deki oluşturulan nesneyi ekler. 
        // Kısaca target nesnesini başka bir nesne içine ekler/kapsar
        // <div>{target}</div>
        inc.wrap = function (name, attr) {
            var t = new coll(name, attr);
            t.target.appendChild(this.target);
            return this;
        }



        //....................................................................................





        // .create(..) şeklinde çağırıldığında parent'deki nesneye name ile tanımlı yeni nesne ekler
        inc.create = function (name, attr) {
            var t = new coll(name, attr);
            this.target.appendChild(t.target);
            return t;
        }



        //....................................................................................





        // .append(..) ile çağırıldığında obj(HTMLElement) ekler
        inc.append = function (obj) {
            this.target.appendChild(obj);
            return this;
        }




        //....................................................................................




        // nesnenin kendinisi istenen başka bir nesneye import eder
        inc.insert = function (target) {
            target.appendChild(this.target);
            return this;
        }



        //....................................................................................




        // .delete() ile çağırıldığında nesneyi siler
        inc.remove = function () {
            if (this.target);
            this.target.parentNode.removeChild(this.target);
            return this;
        }



        //....................................................................................


        inc.setAttr = function (args) {

            this.target.setAttr(args);
            return this;
        }



        //....................................................................................


        inc.getAttr = function (name) {

            return this.target.getAttr(name);

        }



        //....................................................................................



        // Sınıf ekleme
        inc.setClass = function (name) {

            for (var i = 0, n = arguments; i < n.length; i++) {
                this.target.setClass(n[i]);
            }

            return this;
        }



        //....................................................................................




        // Sınıf kaldır
        inc.remClass = function (name) {

            if (arguments.length == 1) {
                if (this.target.className) {
                    var list = this.target.className.split(' ');
                    if (list.indexOf(name) != -1) {
                        list.splice(list.indexOf(name), 1);
                        this.target.className = list.join(' ');
                    }
                }
            } else if (arguments.length > 1) {
                for (var n = 0; n < arguments.length; n++) {
                    this.remClass(arguments[n]);
                }
            }
            return this;
        }



        //....................................................................................


        inc.isVisible = function () {
            return this.target.style.display ? this.target.style.display == 'none' ? false : 'true' : true;
        }



        //....................................................................................


        // Olay dinleyici atanır
        inc.setBind = function (name, action) {
            this.target.setBind(name, action);
            return this;
        }



        //....................................................................................





        // Olay dinleyici kaldırılır
        inc.remBind = function (name, action) {
            this.target.remBind(name, action);
            return this;
        }



        //....................................................................................





        // Nesneye style değerleri arguman olarak eklenebilir
        inc.setCSS = function (args) {
            this.target.setCSS(args);
            return this;
        }



        //....................................................................................




        // Ana nesnenin altında bulunan nesnelere style="" attribute ile style değerleri atar
        inc.setCSSChildren = function (args) {

            for (var i = 0; i < this.target.children.length; i++) {
                var ch = this.target.children[i];
                Object.keys(args).forEach(function (key) {
                    ch.style[key] = args[key];
                });
            }

            return this;
        }



        //....................................................................................




        // Nesnenin value değerine parametre atar
        inc.setVal = function (value) {
            this.target.value = value;
            return this;
        }



        //....................................................................................


        // Sayfa üzerinde ilgili nesneyi gösterir
        inc.show = function () {

            this.target.setCSS('display', 'block');

            return this;
        }

        //....................................................................................


        // Sayfa üzerinde ilgili nesneyi gizler
        inc.hide = function () {

            this.target.setCSS('display', 'none');

            return this;
        }

        //....................................................................................


        inc.repeat = function (count, name, attr) {

            var self = this,
                selfCount = this.target.children.count;

            if (!count || !name) return self;

            for (var i = 0; i < count; i++) {
                var t = new coll(name, attr);
                t.insert(self.target);
            }

            return self;
        }


        //....................................................................................




        // <Style>...</Style> nesneleri için global style tanımlamaları oluşturur
        // Global olarak 
        inc.setSheet = function (name, value) {
            var self = this;
            if (arguments.length == 2) {
                if (!name || !value) return self;
                var json = JSON.stringify(value);
                json = json.replace(/},/g, '\n');
                json = json.replace(/\",/g, '; ');
                json = json.replace(/},/g, '; ');
                json = json.replace(/\"/g, '');
                json = json.replace(/};/g, '}');
                json = json.replace(/:{/g, '{');

                self.target.innerHTML += (name + json + '\n');

            } else if (arguments.length == 1) {
                Object.keys(name).forEach(function (t) {
                    self.setSheet(t, name[t]);
                });
            }
            return self;
        }



        //....................................................................................

        inc.first = function () {
            if (this.target.children == 0) throw ("Alt nesne bulunamadı");
            return this.target.children[0].__collectionData;
        }


        //....................................................................................

        inc.last = function () {
            if (this.target.children.length == 0) throw ("Alt nesne bulunamadı");
            return this.target.children[this.target.children.length - 1].__collectionData;
        }


        //....................................................................................


        // ilgili elementin altındaki tüm elementlerin collection listesini verir
        // Gelen alt nesnelerin yalnızca ID ve Name özellikleri varsa alır, onun dışındakiler gözardı edilir

        inc.children = function (index) {

            if (index && typeof index == 'number') return this.target.children[index].__collectionData;

            var _result = {};
            for (var i = 0, f = this.target.children; i < f.length; i++) {
                var zone = f[i].id || f[i].name;
                if (zone) {
                    zone = zone.replace(/\W/g, '');
                    _result[zone] = f[i].__collectionData;
                }
            }
            return _result;
        }



        //....................................................................................



        // Html metin eklemek için
        inc.setHTML = function (value) {
            this.target.innerHTML = value;
            return this;
        }



        //....................................................................................


        // Checkbox ve Radio butonlar için işaretleme yapar
        inc.setChecked = function (param) {
            this.target.checked = param;
            return this;
        }


        //....................................................................................


        // Style Dosya import etmek için
        inc.importLink = function (url) {
            this.target.innerHTML += '@import url(' + url + ');';
            return this;
        }


        //....................................................................................


        // Bulunduğu elementin bir üst katmanına oluşturur
        inc.createParent = function (name, attr) {
            var t = new coll(name, attr);
            this.target.parentNode.appendChild(t.target);
            return t;
        }

        //....................................................................................


        inc.toggleClass = function (name) {
            if (this.target.hasClass(name))
                this.remClass(name);
            else
                this.setClass(name);
            return this;
        }


        _.collection.create = coll;

    }); //MODULE

})(Skeleton);
/////////////////////////////////////////////////////////////////////////
//          SKELETON COLLECTION INIT
/////////////////////////////////////////////////////////////////////////
(function (_) {


    // MODULE INIT
    _.MODULE(function () {

        var method = _.collection.globals.method;

        parent.window.addEventListener('mouseup', method.up);
        parent.window.addEventListener('mousedown', method.down);
        parent.window.addEventListener('mousemove', method.move);

    });

})(Skeleton);
/////////////////////////////////////////////////////////////////////////
//          SKELETON GALLERY
/////////////////////////////////////////////////////////////////////////

(function(_) {

    _.gallery = {
        container: false,
        contentList: false,
        content: false,
        loader: false,
        method: {},
        objects: []
    };

})(Skeleton);
/////////////////////////////////////////////////////////////////////////
//          SKELETON GALLERY METHOD
/////////////////////////////////////////////////////////////////////////

(function (_) {


    _.MODULE(function () {

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
                .setBind('click', function () {
                    gall.fullscreen.show('/uploads/' + item.file, item.title);
                });

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

            setTimeout(function () {
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
                title: 'Dosya silme işlemi',
                content: "<b>" + repo.item.title + "</b><br/>" + repo.item.file + "<p>Dosya'yı silmek istiyor musunuz?</p>",

                // Sil dediğinde yapılacak işlemler
                button1: {
                    text: 'EVET SİL',
                    action: function () {

                        // Hemen bir POST işlemi yapıp silmesini söyleyelim
                        helper.http({

                            method: 'POST',
                            url: '/removeFile/' + e.target.getAttr('fileitem'),
                            success: function (result) {

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
                                    content: result.message,
                                    button1: {
                                        text: 'TAMAM',
                                        action: function () {

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
                                                            menu.data[key].title + ' için yüklenen dosyalar tamamen temizlendi. Bu alan için menüde hala aktif durumda. Dilerseniz işareti kaldırabilirsiniz ',
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
                            error: function (result) {
                                dialog.show({
                                    title: 'Hata oluştu',
                                    content: 'Sistemsel bir nedenden dolayı dosyayı şuan da silemiyoruz.',
                                    button1: {
                                        text: 'TAMAM',
                                        action: function () {
                                            dialog.hide();
                                        }
                                    }
                                });
                            }

                        });
                    }
                },
                button2: {
                    text: 'VAZGEÇ',
                    action: function () {
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
                    .setHTML('Henüz hiç yükleme yapmadınız')
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
/////////////////////////////////////////////////////////////////////////
//          SKELETON GALLERY FULLSCREEN
/////////////////////////////////////////////////////////////////////////

(function (_) {



    _.MODULE(function () {


        var screen = _.gallery.fullscreen = {
            objects: {
                images: {
                    container: null,
                    data: []
                }
            }
        };

        var coll = _.collection.create;



        //....................................................................................


        function hide(e) {

            screen.objects.content.remove();
            //screen.objects.images.container.remove();
            screen.objects.container.remove();
            screen.objects.closeButton.remove();
            screen.objects.content = null;
            //screen.objects.images.container = null;
            screen.objects.container = null;
            screen.objects.closeButton = null;

            parent.document.body.remClass('noflow');

        }



        //....................................................................................


        function hasScreen() {
            return screen.objects.container != null;
        }




        //....................................................................................



        function show(item, title) {
            create();
            // https://www.diagnostikum-berlin.de/sites/default/files/R%C3%B6ntgen%20Lunge.jpg
            var img = new coll('img', { id: 'window-maker-image', src: item })
                .setClass('window-maker')
                .insert(screen.objects.content.target);

            screen.objects.contentTitle.setHTML(title);
            setTimeout(function () { screen.objects.contentTitle.remClass('flipInY').setClass('fadeOutUp'); }, 5000);
        }



        //....................................................................................



        var _x = 0, _y = 0, _status = false;
        function mousedown(e) {
            e.preventDefault();
            _x = e.pageX - e.target.offsetLeft;
            _y = e.pageY - e.target.offsetTop;
            _status = true;
            screen.objects.content.setClass('move');
            return;
        }



        function mouseup(e) {
            e.preventDefault();
            _status = false;
            if (screen.objects.content)
                screen.objects.content.remClass('move');
            return;
        }



        function mousemove(e) {

            e.preventDefault();
            if (_status) {
                var trg = screen.objects.content.target;
                var __x = e.pageX - _x;
                var __y = e.pageY - _y;
                var __start = parseInt(trg.children[0].clientWidth - parent.window.innerWidth);
                var __end = parseInt(trg.children[0].clientHeight - parent.window.innerHeight);
                __x = trg.offsetLeft < -__start ? (-__start) : __x;
                __y = trg.offsetTop < -__end ? (-__end) : __y;

                var a = 0;
                var b = 0;

                if (__start > 0) {
                    a = __x < -__start ? -__start : __x;
                    a = a > 0 ? 0 : a;
                }

                if (__end > 0) {
                    b = __y < -__end ? -__end : __y;
                    b = b > 0 ? 0 : b;
                }

                screen.objects.content.setCSS({ left: a + 'px', top: b + 'px' })
            }
        }


        function dragDrop(obj) {

            obj.setBind('mousedown', mousedown);

            parent.window.addEventListener('mousemove', mousemove);
            parent.window.addEventListener('mouseup', mouseup);


        }


        //....................................................................................


        var selectedMaker = null;
        function resetSelection(obj, css) {
            if (selectedMaker != null) {
                selectedMaker.remClass('selected');
            }
            selectedMaker = obj.setClass('selected');
            console.log(screen.objects.content.children());
            var tx = screen.objects.content.setCSS({ left: 0, top: 0 }).children().windowmakerimage;
            tx.remClass('horizontal', 'vertical');
            if (css) {
                setTimeout(function () {
                    tx.setClass(css);
                }, 100);
            }
        }

        function create() {

            if (!hasScreen()) {

                // Gösterilecek resim için en dış katman oluşturuluyor ve sahneye ekleniyor
                var container = screen.objects.container = new coll('div', { id: 'skeleton-gallery-fullscreen-container' })
                    .insert(parent.document.body);

                // Kapatma tuşu
                var closeButton = screen.objects.closeButton = new coll('div', { id: 'skeleton-gallery-fullscreen-closebutton' })
                    .insert(container.target)
                    .setBind('click', hide);

                // Resmin gösterileceği alan oluşturuluyor ve container nesnesine ekleniyor
                var content = screen.objects.content = new coll('div', { id: 'skeleton-gallery-fullscreen-content' })
                    .setClass('animated', 'pulse')
                    .insert(container.target);

                var title = screen.objects.contentTitle = screen.objects.container.create('div', { id: 'gall-window-title' }).setClass('noselect', 'animated', 'flipInY');

                // Sürüklenecek nesneyi bildiriyoruz
                dragDrop(content);


                // Pencere düzenleyici
                var windowMaker = screen.objects.container.create('div', { id: 'gall-window-maker' })
                    .setClass('animated', 'slideInRight');

                var all = selectedMaker = windowMaker.create('div', { id: 'gall-window-maker-all' })
                    .setClass('selected')
                    .setBind('click', function () {
                        resetSelection(all);
                        content.setCSS({ left: 0, top: 0, display: 'table' }).children().windowmakerimage.remClass('horizontal', 'vertical');
                    });
                var vertical = windowMaker.create('div', { id: 'gall-window-maker-vertical' })
                    .setBind('click', function () {
                        resetSelection(vertical);
                        content.setCSS({ left: 0, top: 0, display: 'inherit' }).children().windowmakerimage.remClass('horizontal').setClass('vertical');
                    });
                var horizontal = windowMaker.create('div', { id: 'gall-window-maker-horizontal' })
                    .setBind('click', function () {
                        resetSelection(horizontal);
                        content.setCSS({ left: 0, top: 0, display: 'table' }).children().windowmakerimage.remClass('vertical').setClass('horizontal');
                    });

                // Pencere scroll'unu kaldır
                parent.document.body.setClass('noflow');



            }


            _.prompter.show({
                title: 'Hareket ettirin',
                message: "Farenizin sol tuşu ile basılı tutarak, görseli sağa/sol/yukarı/aşağı kolayca hareket ettirebilirsiniz",
                timer: 6000,
                closeVisible: false
            });

        }




        //....................................................................................




        screen.show = show;
        screen.hide = hide;

    });


})(Skeleton);
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
            .setHTML('Upload Files')
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
            .setHTML('Yükleniyor...');


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

                                    x.setHTML('Yüklendi :)');

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
                                        title: 'Yeni Dosya'
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

                                    }, 1000);


                                    // Dosya yüklendi ancak bir isim yazılmadı. Kullanıcıdan dosya için başlık isteyelim
                                    dialog.prompt({
                                        title: 'Dosya için bir başlık yazın',
                                        button1: {
                                            text: 'KAYDET',
                                            action: function(ev, obj) {

                                                if(!obj.target.value) return;
                                                // Bu alanda; hem veritabanı hem de listedeki kaydı güncellememiz gerekiyor
                                                // Önce veritabanında ki alanı bulalım ve güncelleyelim
                                                // Mantık olarak yüklenen son kaydı alıp değiştiriyoruz
                                                _.data[grow][_.data[grow].length - 1].title = obj.target.value;

                                                // Şimdi listedeki alanı bulup güncelleyelim
                                                __item.target.children[0].children[0].innerHTML = obj.target.value;

                                                // Veritabanını güncelle
                                                Skeleton.savechanges();
                                                
                                                dialog.hide();

                                            }
                                        }
                                    });


                                } else {

                                    x.setHTML('JPG veya PNG dosyası olmalı :((');
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
                                x.setHTML('Sistem hatası oluştu. Daha sonra tekrar deneyin.');
                                gall.footer.remClass('locked');
                                menu.container.remClass('locked');
                            },

                            // Zaman aşımı olduğunda
                            timeout: function() {
                                x.setHTML('Yükleme işlemi zaman aşımına uğradı.');
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
            .setVal('DOSYA YÜKLE')
            .insert(gall.footer.target);


        //....................................................................................




    }); // MODULES


})(Skeleton);
/////////////////////////////////////////////////////////////////////////
//          SKELETON CONTEXTMENU
/////////////////////////////////////////////////////////////////////////

(function(_) {


    _.contextmenu = {
        // Contextmenu içerisinde kullanılacak method listesi
        method: {},
        // Contextmenu içerisinde oluşturulacak item listesi
        data: [],
        // Sahne üzerinde oluşturulan context menu nesnesi
        container: false,
        // İçerisinde HTML Elementlerin oluşturulacağı content nesnesi
        content: false
    };


})(Skeleton);
/////////////////////////////////////////////////////////////////////////
//          SKELETON CONTEXTMENU METHOD
/////////////////////////////////////////////////////////////////////////


(function(_) {

    _.MODULE(function() {

        var context = _.contextmenu;
        var coll = _.collection.create;


        //....................................................................................



        // Contextmenu içerisindeki data listesine yeni bir item eklemek için kullanılır
        // <param item> Object tipinde bir değer alır. {title:'Delete Item',action:functionName}
        function add(args) {
            var what = {};
            what = typeof args == 'object' ? args : { title: args, action: arguments[1] };

            // <div><label></label></div>
            var el = new coll('div', { id: 'cntxmnitem' + context.data.length });
            el.setClass('cntx-item')
                .setBind('click', what.action)
                .insert(context.content.target)
                .create('label')
                .setClass('cntx-item-label')
                .setHTML(what.title)
                .insert(el.target);
            what.el = el;
            context.data.push(what);

        }

        //....................................................................................


        // Toplu olarak item eklemek için method
        function load(items) {
            if (typeof items == 'object') {
                for (var i = 0; i < items.length; i++) {
                    var it = items[i];
                    add(it);
                }
            }
        }


        //....................................................................................



        // Listeyi temizler
        function clear(action) {
            //hide();
            for (var i = 0, f = context.data; i < f.length; i++) {
                var it = f[i];
                it.el.remove();
            }
            context.data = [];
            if (action)
                action();
        }


        //....................................................................................


        function show(e) {

            context.container.setCSS({
                left: e.pageX + 'px',
                top: e.pageY + 'px'
            });


            context.container.show();
            // Context menüsünü, window sınıfımızda mouseup olayında her durumda kapatalım
            window.addEventListener('mouseup', context.method.hide);
        }



        //....................................................................................


        function hide() {
            window.removeEventListener('mouseup', context.method.hide);
            context.container.hide();
        }




        //....................................................................................



        context.method.add = add;
        context.method.load = load;
        context.method.clear = clear;
        context.method.show = show;
        context.method.hide = hide;


    }); // MENU

})(Skeleton);
/////////////////////////////////////////////////////////////////////////
//          SKELETON CONTEXTMENU INIT
/////////////////////////////////////////////////////////////////////////

(function(_) {


    _.MODULE(function() {


        var context = _.contextmenu;
        var coll = _.collection.create;

        if (!parent.document.querySelector('#contextmenu-container')) {

            // CONTEXT
            context.container = new coll('div', { id: 'contextmenu-container' });
            context.container.insert(parent.document.body);
            // CONTENT
            context.content = new coll('div', { id: 'contextmenu-content' });
            context.content.insert(context.container.target);


            // TEST
            // context.method.load([
            //    { title: 'Delete Item', action: function() { console.log('Item is deleted'); } }, { title: 'Delete Item', action: function() { console.log('Item is deleted'); } },
            //    { title: 'Change Position', action: function() { console.log('Position is Changed'); } },
            //    { title: 'Item Info', action: function() { console.log('Show Item'); } }
            // ]);


        }
    }); // MODULE


})(Skeleton);
/////////////////////////////////////////////////////////////////////////
//          SKELETON DIALOG
/////////////////////////////////////////////////////////////////////////

(function(_) {

    _.dialog = {
        container: false,
        content: false,
        button1: false,
        button2: false
    }


})(Skeleton);
/////////////////////////////////////////////////////////////////////////
//          SKELETON DIALOG METHOD
/////////////////////////////////////////////////////////////////////////

(function(_) {

    _.MODULE(function() {

        var dialog = _.dialog;
        var coll = _.collection.create;



        //....................................................................................



        function show(args) {
            create(args);
            if (args.content)
                dialog.content.setHTML(args.content);

            if (args.title)
                dialog.title.setHTML(args.title);

            if (dialog.button1) {
                dialog.button1.setVal(args.button1.text);
                dialog.button1.setBind('click', args.button1.action);
            }
            if (dialog.button2) {
                dialog.button2.setVal(args.button2.text);
                dialog.button2.setBind('click', args.button2.action);
            }
            dialog.container.show();
            dialog.shadow.show();
        }




        //....................................................................................



        function basic(title, message) {
            create({
                button1: true
            });
        }


        //....................................................................................


        function prompt(args) {

            show({
                title: args.title,
                button1: {
                    text: args.button1.text,
                    action: function(e) {
                        args.button1.action(e, inp);
                    }
                }
            });

            var inp = new coll('input', { type: 'text', id: 'dialog-prompt-input' })
                .setCSS('width', '100%')
                .insert(dialog.content.target);

        }



        //....................................................................................




        function hide() {
            if (dialog.shadow) {
                dialog.shadow.remove();
                dialog.container.remove();
                dialog.shadow = null;
                dialog.container = null;
                dialog.button1 = null;
                dialog.button2 = null;
            }
        }




        //....................................................................................

        // Dialog penceresini oluşturur
        function create(args) {

            hide();
            // Gölge katmanı
            dialog.shadow = new coll('div', { id: 'skeleton-dialog-shadow' })
                .insert(parent.document.body);

            // Görünen dialog penceresi
            dialog.container = new coll('div', { id: 'skeleton-dialog' })
                .insert(parent.document.body);

            // Dialog mesajının başlık
            if (args.title)
                dialog.title = new coll('div', { id: 'skeleton-dialog-title' })
                .insert(dialog.container.target);

            // Dialog mesajının görünen kısmı
            dialog.content = new coll('div', { id: 'skeleton-dialog-content' })
                .insert(dialog.container.target);

            // Butonların bulunduğu bölüm
            dialog.footer = new coll('div', { id: 'skeleton-dialog-footer' })
                .insert(dialog.container.target);

            // Buton nesneleri
            if (args.button1)
                dialog.button1 = new coll('input', { type: 'button', id: 'skeleton-dialog-button1' })
                .setClass('skeleton-dialog-button')
                .insert(dialog.footer.target);

            if (args.button2)
                dialog.button2 = new coll('input', { type: 'button', id: 'skeleton-dialog-button2' })
                .setClass('skeleton-dialog-button')
                .insert(dialog.footer.target);

        }


        //....................................................................................

        // Dialog penceresindeki butonları aktif yapar
        function active() {

            dialog.button1.remClass('disabled-btn');
            dialog.button2.remClass('disabled-btn');

        }


        //....................................................................................



        // Dialog penceresindeki butonları pasifize eder.
        // Veritabanı gibi işlem sırasında belki yükleme sürmesi dolayısıyla butonları pasif duruma getirmek isteyebiliriz.

        function passive() {

            dialog.button1.setClass('disabled-btn');
            dialog.button2.setClass('disabled-btn');

        }


        //....................................................................................


        dialog.show = show;
        dialog.basic = basic;
        dialog.hide = hide;
        dialog.passive = passive;
        dialog.active = active;
        dialog.prompt = prompt;



    }); // MODULE

})(Skeleton);
/////////////////////////////////////////////////////////////////////////
//          SKELETON DIALOG INIT
/////////////////////////////////////////////////////////////////////////

(function(_) {


    _.MODULE(function() {


    }); // MODULE


})(Skeleton);
/////////////////////////////////////////////////////////////////////////
//          SKELETON TOOLTIP
/////////////////////////////////////////////////////////////////////////

(function (_) {


    _.MODULE(function () {

        _.tooltip = {};


    }); // MODULE

})(Skeleton);
/////////////////////////////////////////////////////////////////////////
//          SKELETON TOOLTIP METHOD
/////////////////////////////////////////////////////////////////////////
(function(_) {

    _.MODULE(function() {


        var tooltip = _.tooltip;
        var time = 0;
        function message(message, opts) {

            if (!message) return;
            opts = opts || { x: null, y: null, ev: parent.window.event };
            tooltip.container.target.setCSS({
                left: (opts.x || opts.ev.pageX || parent.window.event.pageX) + 20 + 'px',
                top: (opts.y || opts.ev.pageY || parent.window.event.pageY) + 20 + 'px'
            });

            tooltip.container.setHTML(message);
            show();
            if(time)
            clearTimeout(time);
            time = setTimeout(hide, 2500);
        }


        //....................................................................................



        function show() {
            tooltip.container.target.setCSS('display', 'block');
        }



        //....................................................................................



        function hide() {
            tooltip.container.target.setCSS('display', 'none');
        }



        //....................................................................................


        tooltip.message = message;
        tooltip.show = show;
        tooltip.hide = hide;



    }); // MODULE

})(Skeleton);
/////////////////////////////////////////////////////////////////////////
//          SKELETON TOOLTIP INIT
/////////////////////////////////////////////////////////////////////////
(function(_) {

    _.MODULE(function() {

        var tooltip = _.tooltip;
        var collection = _.collection.create;

        //....................................................................................

        tooltip.container = new collection('div', { id: 'skeleton-tooltip' })
        .setClass('animated','flipInX');

        tooltip.container.insert(parent.document.body);



    }); // MODULE

})(Skeleton);
/////////////////////////////////////////////////////////////////////////
//          SKELETON PATH
/////////////////////////////////////////////////////////////////////////

(function (_) {

    _.path = {
        // Sahnedeki pathlerin karşılaştırmalı değerlerini tutar
        data: {},
        // Kullanılacak method listesi buraya aktarılacak
        method: {},
        // Sahnedeki pathlerin listesi
        objects: null,
        // Seçili olan path nesnesi
        selectedPath:null,
        // Silinmesi istenen path nesnesi
        removedPath:null,
        // Menüden taşınan bir nesne var/yok
        isMovePath:false
    };

})(Skeleton);
/////////////////////////////////////////////////////////////////////////
//          SKELETON PATH DATA
/////////////////////////////////////////////////////////////////////////

(function(_) {


    _.MODULE(function() {

        var data = _.path.data;



        //....................................................................................



        // Sahne üzerinde bulunan path nesnelerinin alabilecekleri menulist parametrelerini burada tanımlıyoruz
        // keyname : sahne üzerinde yer alan path/rect/circle gibi herhangi tanımlanmış nesnenin ID bilgisini içerir. Benzersiz bir ad olmalı.
        // keyname.title : fare ile nesne üzerine gelindiğinde gösterilecek metin
        // keyname.data : array tipindedir ve keyname.data içerisinde yazılan tüm isimler menu data içindeki keyname değerlerine denk gelmektedir.

        // _.data, içinde tanımlı olan keyname'ler, ilgili SVG dosyasında bulunan ID isimleridir
        // bu liste içinde ki ID değerleri herhangi bir SVG dosyası içinde de olabilir. Yani ayrı SVG dosyaları ama aynı path isimlerine sahip olabilir.
        // dosya1.svg içinde path1 adında ID'e sahip nesne olabilir. Buradaki data bilgisindeki değerler kullanılır
        // dosya2.svg içinde de path1 adında ID'e sahip bir nesne olursa o da bu değerleri ortak kullabilir
        // dikkat aynı isimdekiler aynı değerleri kullanırlar.
        // isim tanımlamaları isteğe göre yapılabilir. 1,2,3 diye gitmek zorunda değildir. anlaşılması için bu şekilde yapılmıştır.
        // Uygulama çalıştırıldığı anda tüm _.data okunup sahne üzerinde taranır. Var olan isimlere ait tüm datalar aktarılır.

        data = {


            'path1': { title: '', data: ['icn1', 'icn2', 'icn3', 'icn4'] },
            'path2': { title: '', data: ['icn4', 'icn2'] },
            'path3': { title: 'Üst Özefagus Sfinkteri', data: ['luminal_darlik', 'icn2'] },
            'path4': { title: 'Hipofarenks', data: ['luminal_darlik'] },
            'path5': { title: 'custom path name', data: ['luminal_darlik', 'icn2'] },
            'path6': { title: 'custom path name', data: ['luminal_darlik', 'icn9', 'icn10'] },
            'path7': { title: 'Proksimal Çıkan Kolon', data: ['polip', 'icn7', 'icn11'] },
            'path8': { title: 'custom path name', data: ['polip', 'luminal_darlik', 'icn12'] },
            'path9': { title: 'Proksimal Sigmoid Kolon', data: ['polip', 'icn2'] },
            'path10': { title: 'Distal İnen Kolon', data: ['polip'] },
            'path11': { title: 'Proksimal İnen Kolon', data: ['polip'] },
            'path12': { title: '', data: ['polip', 'anal_fissur', 'icn3'] },
            'path13': { title: '', data: ['polip', 'icn2', 'anal_fissur'] },
            'path14': { title: 'Hepatik Fleksura', data: ['anal_fissur', 'icn2', 'icn3'] },
            'path15': { title: 'Distal Çekum', data: ['anal_fissur', 'icn2', 'icn3'] },
            'path16': { title: 'Proksimal Çekum', data: ['anal_fissur', 'icn2', 'icn3'] },
            'path17': { title: 'Duedonum 3. Kısım', data: ['anal_fissur', 'icn2', 'icn3'] },
            'path18': { title: 'Duedonum 4. Kısım', data: ['anal_fissur', 'icn2', 'icn3'] },
            'path19': { title: '', data: ['icn3', 'anal_fissur', 'icn3'] },
            'path20': { title: '', data: ['icn3', 'anal_fissur', 'icn3'] },
            'path21': { title: 'Terminal İleum', data: ['anal_fissur', 'icn2', 'icn3'] },
            'path22': { title: 'Distal İleum', data: ['gi_traktus_disi_kitle', 'icn2', 'icn3'] },
            'path23': { title: 'Proksimal İleum', data: ['gi_traktus_disi_kitle', 'icn2', 'icn3'] },
            'path24': { title: 'Distal Jejunum', data: ['gi_traktus_disi_kitle', 'icn2', 'icn3'] },
            'path25': { title: 'Proksimal Jejunum', data: ['icn3', 'icn2', 'icn3'] },
            'path26': { title: '', data: ['cobble_stone', 'icn2', 'icn3'] },
            'path27': { title: '', data: ['cobble_stone', 'icn2', 'icn3'] },
            'path28': { title: '', data: ['cobble_stone', 'icn2', 'icn3'] },
            'path29': { title: 'Duedonum 2. Kısım', data: ['ulser_izole'] },
            'path30': { title: '', data: ['cobble_stone', 'icn2', 'icn3'] },
            'path31': { title: '', data: ['cobble_stone', 'icn2', 'icn3'] },
            'path32': { title: '', data: ['cobble_stone', 'icn2', 'icn3'] },
            'path33': { title: 'Distal Sigmoid Kolon', data: ['icn3', 'icn2', 'icn3'] },
            'path34': { title: 'Splenik Fleksura', data: ['icn3', 'icn2', 'icn3'] },
            'path35': { title: 'Distal Çıkan Kolon', data: ['icn3', 'icn2', 'icn3'] },
            'path36': { title: 'Bulbus', data: ['ulser_izole'] },
            'path37': { title: 'Antrum – Büyük Kurvatu', data: ['ulser_izole'] },
            'path38': { title: 'Antrum – KüçükKurvatu', data: ['ulser_izole'] },
            'path39': { title: 'Korpus – Küçük Kurvatur', data: ['ulser_izole'] },
            'path40': { title: 'Korpus – Büyük Kurvatur', data: ['ulser_izole'] },
            'path41': { title: 'Distal Özefagus', data: ['ulser_izole'] },
            'path42': { title: 'Fundus – Küçük Kurvatur', data: ['ulser_izole'] },
            'path43': { title: 'Pilor', data: ['ulser_izole'] },
            'path44': { title: 'Kardiyoözefagiyal Sfinkter', data: ['ulser_izole'] },
            'path45': { title: 'Fundus – Büyük Kurvatur', data: ['ulser_izole'] },
            'path46': { title: 'Proksimal Özefagus', data: ['ulser_izole'] },
            'path47': { title: 'Oral Kavite', data: ['icn3', 'icn2', 'icn3'] },
            'path48': { title: '', data: ['icn3', 'icn2', 'icn3'] },
            'path49': { title: '', data: ['icn3', 'icn2', 'icn3'] },
            'path50': { title: '', data: ['icn3', 'icn2', 'icn3'] },
            'path51': { title: '', data: ['icn3', 'icn2', 'icn3'] },
            'path52': { title: '', data: ['icn3', 'icn2', 'icn3'] },
            'path53': { title: '', data: ['icn3', 'icn2', 'icn3'] },
            'path54': { title: 'Distal Rektum', data: ['icn3', 'icn2', 'icn3'] },
            'path55': { title: 'Anal kanal', data: ['icn3', 'icn2', 'icn3'] },
            'path56': { title: 'Proksimal Rektum', data: ['icn3', 'icn2', 'icn3'] },
            'path57': { title: 'Nazofarenks', data: ['icn3', 'icn2', 'icn3'] },



            //....................................................................................



            //ayrı bir SVG dosyasındaki tanımlamalar
            'group1': { title: 'Yüz Sağ Üst', data: ['icn3', 'icn2', 'icn3'] },
            'group2': { title: '', data: ['icn3', 'icn2', 'icn3'] },
            'group3': { title: 'Alın Sol', data: ['icn3', 'icn2', 'icn3'] },
            'group4': { title: 'Alın Sağ', data: ['icn3', 'icn2', 'icn3'] },
            'group5': { title: 'Sol Submandibular Medial', data: ['icn3', 'icn2', 'icn3'] },
            'group6': { title: 'Sağ Supraklaviküler Lateral', data: ['icn3', 'icn2', 'icn3'] },
            'group7': { title: 'Sağ Submandibular Medial', data: ['icn3', 'icn2', 'icn3'] },
            'group8': { title: 'Sağ Submandibular Lateral', data: ['icn3', 'icn2', 'icn3'] },
            'group9': { title: 'Yüz Sağ Alt', data: ['icn3', 'icn2', 'icn3'] },
            'group10': { title: 'Yüz Sol Alt', data: ['icn3', 'icn2', 'icn3'] },
            'group11': { title: 'Sağ Supraklaviküler Medial', data: ['icn3', 'icn2', 'icn3'] },
            'group12': { title: 'Sol Supraklaviküler Medial', data: ['icn3', 'icn2', 'icn3'] },
            'group13': { title: 'Sol Supraklaviküler Lateral', data: ['icn3', 'icn2', 'icn3'] },
            'group14': { title: 'Sol Submandibular Lateral', data: ['icn3', 'icn2', 'icn3'] },
            'group15': { title: 'Yüz Sol Üst', data: ['icn3', 'icn2', 'icn3'] },



            //....................................................................................



            //ayrı bir SVG dosyasındaki tanımlamalar
            'front1': { title: 'Sol Diz Üstü Distal', data: ['icn3', 'icn2', 'icn3'] },
            'front2': { title: 'Sağ Meme', data: ['icn3', 'icn2', 'icn3'] },
            'front3': { title: 'Sol Toraks Medial', data: ['icn3', 'icn2', 'icn3'] },
            'front4': { title: 'Sağ Toraks Medial', data: ['icn3', 'icn2', 'icn3'] },
            'front5': { title: 'Sol Ayak Distal ', data: ['icn3', 'icn2', 'icn3'] },
            'front6': { title: 'Sol Diz Altı Proksimal', data: ['icn3', 'icn2', 'icn3'] },
            'front7': { title: 'Sol Diz Altı Distal', data: ['icn3', 'icn2', 'icn3'] },
            'front8': { title: 'Sol Ayak Proksimal', data: ['icn3', 'icn2', 'icn3'] },
            'front9': { title: 'Sol Kasık', data: ['icn3', 'icn2', 'icn3'] },
            'front10': { title: 'Sol Diz Üstü Proksimal', data: ['icn3', 'icn2', 'icn3'] },
            'front11': { title: 'Sol Meme', data: ['icn3', 'icn2', 'icn3'] },
            'front12': { title: 'Sol Kostal Kenar Üst', data: ['icn3', 'icn2', 'icn3'] },
            'front13': { title: 'Sol Kol Proksimal', data: ['icn3', 'icn2', 'icn3'] },
            'front14': { title: 'Sol Kol Distal', data: ['icn3', 'icn2', 'icn3'] },
            'front15': { title: 'Sol Ön Kol Proksimal', data: ['icn3', 'icn2', 'icn3'] },
            'front16': { title: 'Sol Klavikula Altı', data: ['icn3', 'icn2', 'icn3'] },
            'front17': { title: 'Sol Omuz', data: ['icn3', 'icn2', 'icn3'] },
            'front18': { title: 'Sol Ön Kol Distal', data: ['icn3', 'icn2', 'icn3'] },
            'front19': { title: 'Sol El Proksimal', data: ['icn3', 'icn2', 'icn3'] },
            'front20': { title: 'Sol El Distal', data: ['icn3', 'icn2', 'icn3'] },
            'front21': { title: 'Sağ Kol Proksimal', data: ['icn3', 'icn2', 'icn3'] },
            'front22': { title: 'Sağ Omuz', data: ['icn3', 'icn2', 'icn3'] },
            'front23': { title: 'Sağ Diz Altı Proksimal', data: ['icn3', 'icn2', 'icn3'] },
            'front24': { title: 'Sağ Ön Kol Proksimal', data: ['icn3', 'icn2', 'icn3'] },
            'front25': { title: 'Sağ El Proksimal', data: ['icn3', 'icn2', 'icn3'] },
            'front26': { title: 'Sağ El Distal', data: ['icn3', 'icn2', 'icn3'] },
            'front27': { title: 'Sağ Ön Kol Distal', data: ['icn3', 'icn2', 'icn3'] },
            'front28': { title: 'Sağ Kol Distal', data: ['icn3', 'icn2', 'icn3'] },
            'front29': { title: 'Sağ Koltuk Altı', data: ['icn3', 'icn2', 'icn3'] },
            'front30': { title: 'Sol Koltuk Altı', data: ['icn3', 'icn2', 'icn3'] },
            'front31': { title: 'Sağ Kostal Kenar Üst', data: ['icn3', 'icn2', 'icn3'] },
            'front32': { title: 'Batın', data: ['icn3', 'icn2', 'icn3'] },
            'front33': { title: 'Sağ Kasık', data: ['icn3', 'icn2', 'icn3'] },
            'front34': { title: 'Sağ Diz Üstü Proksimal', data: ['icn3', 'icn2', 'icn3'] },
            'front35': { title: 'Sağ Diz Üstü Distal', data: ['icn3', 'icn2', 'icn3'] },
            'front36': { title: 'Sağ Ayak Proksimal', data: ['icn3', 'icn2', 'icn3'] },
            'front37': { title: 'Sağ Ayak Distal', data: ['icn3', 'icn2', 'icn3'] },
            'front38': { title: 'Sağ Diz Altı Distal', data: ['icn3', 'icn2', 'icn3'] },
            'front39': { title: 'Sağ Klavikula Altı', data: ['icn3', 'icn2', 'icn3'] },
            'front40': { title: 'Genital', data: ['icn3', 'icn2', 'icn3'] },
            'front41': { title: 'Genital', data: ['icn3', 'icn2', 'icn3'] },



            //....................................................................................



            //ayrı bir SVG dosyasındaki tanımlamalar
            'back1': { title: 'Sol Kürek Kemik Bölgesi', data: ['icn3', 'icn2', 'icn3'] },
            'back2': { title: 'Sol Omuz Arka', data: ['icn3', 'icn2', 'icn3'] },
            'back3': { title: 'Sağ Omuz Arka', data: ['icn3', 'icn2', 'icn3'] },
            'back4': { title: 'Sağ Kürek Kemik Bölgesi', data: ['icn3', 'icn2', 'icn3'] },
            'back5': { title: 'Sol Sırt Alt', data: ['icn3', 'icn2', 'icn3'] },
            'back6': { title: 'Sağ Sırt Alt', data: ['icn3', 'icn2', 'icn3'] },
            'back7': { title: 'Sol Bel Üst', data: ['icn3', 'icn2', 'icn3'] },
            'back8': { title: 'Sağ Bel Üst', data: ['icn3', 'icn2', 'icn3'] },
            'back9': { title: 'Sol Kalça', data: ['icn3', 'icn2', 'icn3'] },
            'back10': { title: 'Sağ Kalça', data: ['icn3', 'icn2', 'icn3'] },
            'back11': { title: 'Oksipital', data: ['icn3', 'icn2', 'icn3'] },
            'back12': { title: 'Sağ Boyun Arka', data: ['icn3', 'icn2', 'icn3'] },
            'back13': { title: 'Sol Boyun Arka', data: ['icn3', 'icn2', 'icn3'] }

        }

        _.path.data = data;

    }); // MODULE

})(Skeleton);
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
/////////////////////////////////////////////////////////////////////////
//          SKELETON PATH INIT
/////////////////////////////////////////////////////////////////////////

(function (_) {

    _.MODULE(function () {

        var path = _.path;



        //....................................................................................




        // Sahne üzerindeki tüm pathleri seçer
        path.objects = document.querySelectorAll('#container_path_models > *');



        //....................................................................................





        // Tüm nesnelere olay dinleyicileri atar
        for (var i = 0; i < path.objects.length; i++) {

            // Sadece ID değerine ait olanları işleme alalım
            // Not sınıfı ile pointer-events none yapılmış. Fare ile etkileşimi kapatılmaktadır

            path.objects[i].setClass(path.objects[i].id ? 'path' : 'not');

            // Olay dinleyiciler
            path.objects[i].setBind('mouseover', path.method.mouseover);
            path.objects[i].setBind('mouseout', path.method.mouseout);

        }


    }); // MODULE

})(Skeleton);
/////////////////////////////////////////////////////////////////////////
//          SKELETON MENU
/////////////////////////////////////////////////////////////////////////

(function(_) {

    _.menuObject = {
        // Kullanılacak methodların listesi
        method: {},
        // Menüde yer alan ikon ve metinlerin listesi
        data: {},
        // Menude ki nesneler
        objects: [],
        // Queryden gelebilecek olan section değerine ait tanımlı bilgiler
        sections: {},
        // Menuden işaretlenen kayıt. Bu sayede işaretlenmiş olan kayıt'a göre upload penceresini kontrol edebileceğiz
        // Son işaretlenen her zaman kalacaktır. 
        selectedMenuItem: null
    };

})(Skeleton);
/////////////////////////////////////////////////////////////////////////
//          SKELETON MENU DATA
/////////////////////////////////////////////////////////////////////////

(function(_) {


    _.MODULE(function() {

        var menu = _.menuObject;

        //Sadece section querystring'e gelen parametreleri görmek adına oluşturuldu. Herhangi bir yerden çekilmemektedir


        menu.sections = [

            //Endeskopi
            'Gastroskopi', 'Kolonoskopi', 'BatinUS', 'D-Balon', 'Kapsül', 'ERCP',

            //Radyoloji 
            'Enteroklizis', 'BatinPelvisBT', 'BatinPelvisMR', 'MREnterografi', 'MREnteroklizis', 'CiftKontrastKolonGrafi', 'PerianalMR', 'PerianalUS', 'MRCP', 'OzefagusMideDuedonumGrafisi',

            //Fizik Muayene
            'On', 'Arka', 'Iskelet', 'BasBoyun', 'Perianal'
        ];




        // Menüde yer alacak ikonları, adres çubuğundan gelen querystring değerine göre _.menulist değişkenindeki verilerle dolduracağız

        //_.2selectedSection = _.2Request.section;
        menu.activeSectionName = _.Request.section;
        if (!menu.activeSectionName) { throw ("QueryString 'Section' parametresi gönderilmediğinden işlem yapılamıyor"); }


        // Menüde yer alacak olan butonların isim ve görselleri bu listede
        // Her bir kaydın aldığı parametre listesi
        // keyname : benzersiz bir isim olmalı. türkçe karakter olmaması iyi olur. Veritabanında isim olarak kullanılma durumu doğabilir. Buradaki isimler _.checklist nesnesinde ilgili data özelliğine tanımlanacağından, anlaşılır koymak önemli.
        // keyname.title : fare ile üzerine gelindiğinde görünecek isim
        // keyname.section : hangi querystring adında görünecekse dizi değişken içine parametre olarak eklenmeli. Herhangi bir yere bağlı değilse "[]" ile boş bırakılmalı. 
        // keyname.data : resim dosyasının base64 formatındaki kodu. Eğer nesne/buton menüde gösterilmeyecekse data adı listeden silinmesi yeterli olacaktır
        // keyname.url : nesne sahne üzerine bırakıldığında açılacak olan html dosyanın URL adresi. Eğer URL yoksa isim tanımlanmamalı
        // keyname.clone : bu nesne, ilgili menu sayfaya oluşturulduğunda ki nesnemiz. Bu nesneyi klonlayarak sayfada göstereceğiz. tekrar tekrar oluşturmayalım diye bu alana aktarılacak

        menu.data = {


            'ostonomi': {
                title: "Ostomi",
                section: ['On'],
                data: 'data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMC41NiAzMC41NiI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOiMyMzFmMjA7fTwvc3R5bGU+PC9kZWZzPjx0aXRsZT5vc3RvbWk8L3RpdGxlPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTEwMzguNTMsMjI1Ljc5YTE1LjQ0LDE1LjQ0LDAsMCwwLTEzLjI4LDEzLjI4aDJhMTMuNDQsMTMuNDQsMCwwLDEsMTEuMjYtMTEuMjZaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTAyNS4yNSAtMjI1Ljc5KSIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTEwNDIuNTMsMjI1Ljc5djJhMTMuNDQsMTMuNDQsMCwwLDEsMTEuMjYsMTEuMjZoMkExNS40NCwxNS40NCwwLDAsMCwxMDQyLjUzLDIyNS43OVoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMDI1LjI1IC0yMjUuNzkpIi8+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMTA1My43OCwyNDMuMDdhMTMuNDQsMTMuNDQsMCwwLDEtMTEuMjYsMTEuMjZ2MmExNS40NCwxNS40NCwwLDAsMCwxMy4yOC0xMy4yOFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMDI1LjI1IC0yMjUuNzkpIi8+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMTAzOC41MywyNTQuMzNhMTMuNDQsMTMuNDQsMCwwLDEtMTEuMjYtMTEuMjZoLTJhMTUuNDQsMTUuNDQsMCwwLDAsMTMuMjgsMTMuMjhaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTAyNS4yNSAtMjI1Ljc5KSIvPjwvc3ZnPg==',
                url: '/modals/ostomi.html'
            },
            /**/
            'rezeksiyon': {
                title: "Rezeksiyon",
                section: ['Enteroklizis', 'BatinPelvisBT', 'BatinPelvisMR', 'MREnterografi', 'MREnteroklizis', 'CiftKontrastKolonGrafi', 'OzefagusMideDuedonumGrafisi', 'Gastroskopi', 'Kolonoskopi', 'D-Balon', 'Kapsül'],
                data: 'data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0Ni41IDMyLjU2Ij48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6bm9uZTtzdHJva2U6IzIzMWYyMDtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6MnB4O308L3N0eWxlPjwvZGVmcz48dGl0bGU+cmV6ZWtzaXlvbjwvdGl0bGU+PHBvbHlsaW5lIGNsYXNzPSJjbHMtMSIgcG9pbnRzPSI3IDEgMSAxIDEgMzEuNTYgNyAzMS41NiIvPjxwb2x5bGluZSBjbGFzcz0iY2xzLTEiIHBvaW50cz0iMzkuNSAzMS41NiA0NS41IDMxLjU2IDQ1LjUgMSAzOS41IDEiLz48cGF0aCBkPSJNMTIwMywyNTAuNzNWMjMyLjVoOC4wOGExMC43NiwxMC43NiwwLDAsMSwzLjcxLjQ5LDQuMDUsNC4wNSwwLDAsMSwyLDEuNzMsNS4xOCw1LjE4LDAsMCwxLC43NiwyLjc1LDQuNTgsNC41OCwwLDAsMS0xLjI2LDMuMjcsNi4zNSw2LjM1LDAsMCwxLTMuODgsMS42OSw2LjI4LDYuMjgsMCwwLDEsMS40Ni45MSwxMi41LDEyLjUsMCwwLDEsMiwyLjQzbDMuMTcsNWgtM2wtMi40MS0zLjc5cS0xLjA2LTEuNjQtMS43NC0yLjUxYTUuNDYsNS40NiwwLDAsMC0xLjIzLTEuMjIsMy42MywzLjYzLDAsMCwwLTEuMS0uNDksNy4yOCw3LjI4LDAsMCwwLTEuMzQtLjA5aC0yLjh2OC4xWm0yLjQxLTEwLjE5aDUuMTlhNy43Nyw3Ljc3LDAsMCwwLDIuNTktLjM0LDIuNzUsMi43NSwwLDAsMCwxLjQyLTEuMDksMywzLDAsMCwwLC40OS0xLjY0LDIuNzIsMi43MiwwLDAsMC0uOTQtMi4xMyw0LjM5LDQuMzksMCwwLDAtMy0uODNoLTUuNzdaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTE4Ny41IC0yMjQuNzkpIi8+PC9zdmc+'
            },
            /**/
            'cobble_stone': {
                title: "Cobble Stone",
                section: ['Enteroklizis', 'CiftKontrastKolonGrafi', 'Gastroskopi', 'Kolonoskopi', 'D-Balon', 'Kapsül'],
                data: 'data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMy4yOSAzMy42OSI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOm5vbmU7c3Ryb2tlOiMyMzFmMjA7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjJweDt9PC9zdHlsZT48L2RlZnM+PHRpdGxlPmNvYmJsZSBzdG9uZTwvdGl0bGU+PGxpbmUgY2xhc3M9ImNscy0xIiB4MT0iMTYuMzMiIHgyPSIxNi4zMyIgeTI9IjYuNjMiLz48bGluZSBjbGFzcz0iY2xzLTEiIHgxPSIxNi4zMyIgeTE9IjI3LjA2IiB4Mj0iMTYuMzMiIHkyPSIzMy42OSIvPjxsaW5lIGNsYXNzPSJjbHMtMSIgeDE9IjYuNjMiIHkxPSIxNy4wMyIgeTI9IjE3LjAzIi8+PGxpbmUgY2xhc3M9ImNscy0xIiB4MT0iMzMuMjkiIHkxPSIxNy4wMyIgeDI9IjI2LjY3IiB5Mj0iMTcuMDMiLz48cmVjdCBjbGFzcz0iY2xzLTEiIHg9IjEwMjkuODgiIHk9IjI4Ny4zMyIgd2lkdGg9IjE0LjA4IiBoZWlnaHQ9IjE0LjA4IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtOTI1LjAzIDU0Mi4wOSkgcm90YXRlKC00NSkiLz48L3N2Zz4=',
                url: '/modals/cobble.stone.html'
            },
            /**/
            'polip': {
                title: "Polip",
                section: ['Enteroklizis', 'BatinPelvisBT', 'BatinPelvisMR', 'MREnterografi', 'MREnteroklizis', 'CiftKontrastKolonGrafi', 'OzefagusMideDuedonumGrafisi', 'Gastroskopi', 'Kolonoskopi', 'D-Balon', 'Kapsül'],
                data: 'data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxOC4xNyAyNi4zMyI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOm5vbmU7c3Ryb2tlOiMwMDA7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjJweDt9PC9zdHlsZT48L2RlZnM+PHRpdGxlPnBvbGlwPC90aXRsZT48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0xMjA4LjUsMjk1LjE3VjI3Ny45MmE4LjA4LDguMDgsMCwwLDEsOC4wOC04LjA4aDBhOC4wOCw4LjA4LDAsMCwxLDguMDgsOC4wOHYxNy4yNSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEyMDcuNSAtMjY4LjgzKSIvPjwvc3ZnPg==',
                url: 'modals/polip.html'
                    //jsonData: 'Skeleton.jsons.polip'
            },
            /**/
            'icv_darlik': {
                title: "ICV’de Darlık",
                section: ['Kolonoskopi', 'D-Balon', 'Kapsül'],
                data: 'data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0OS41NiAxOS4xNCI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOm5vbmU7c3Ryb2tlOiMyMzFmMjA7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjJweDt9PC9zdHlsZT48L2RlZnM+PHRpdGxlPklDViBEYXJsxLFrPC90aXRsZT48cG9seWdvbiBjbGFzcz0iY2xzLTEiIHBvaW50cz0iNC4wOCA5LjU3IDM3LjU5IDE4LjA1IDQ3Ljk4IDkuNTcgMzcuNTkgMS4wOSA0LjA4IDkuNTciLz48L3N2Zz4='
            },
            /**/
            'psodopolip': {
                title: "Psodopolip",
                section: ['Enteroklizis', 'BatinPelvisBT', 'BatinPelvisMR', 'MREnterografi', 'MREnteroklizis', 'CiftKontrastKolonGrafi', 'OzefagusMideDuedonumGrafisi', 'Gastroskopi', 'Kolonoskopi', 'D-Balon', 'Kapsül'],
                data: 'data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxOC4xNyAyNi4zMyI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOm5vbmU7c3Ryb2tlOiMwMDA7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjJweDt9PC9zdHlsZT48L2RlZnM+PHRpdGxlPnBzZWRvcG9saXA8L3RpdGxlPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTEyMDguNSwzNDMuNzVWMzI2LjVhOC4wOCw4LjA4LDAsMCwxLDguMDgtOC4wOGgwYTguMDgsOC4wOCwwLDAsMSw4LjA4LDguMDh2MTcuMjUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMjA3LjUgLTMxNy40MikiLz48cGF0aCBkPSJNMTIxMi40NCwzNDMuNTdWMzI4LjMxaDEuN3YxLjQzYTQuMjEsNC4yMSwwLDAsMSwxLjM2LTEuMjYsMy43NCwzLjc0LDAsMCwxLDEuODQtLjQyLDQuMzYsNC4zNiwwLDAsMSwyLjQ5LjczLDQuNDcsNC40NywwLDAsMSwxLjYzLDIuMDUsNy40OSw3LjQ5LDAsMCwxLC41NSwyLjksNy4zOCw3LjM4LDAsMCwxLS42MSwzLjA1LDQuNjIsNC42MiwwLDAsMS00LjIsMi44LDMuNTIsMy41MiwwLDAsMS0xLjY4LS40LDMuODMsMy44MywwLDAsMS0xLjIyLTF2NS4zN1ptMS42OS05LjY5QTQuOCw0LjgsMCwwLDAsMTIxNSwzMzdhMi42NCwyLjY0LDAsMCwwLDIuMDksMSwyLjcsMi43LDAsMCwwLDIuMTQtMS4wNiw1LDUsMCwwLDAsLjg5LTMuMjcsNC44Nyw0Ljg3LDAsMCwwLS44Ny0zLjE2LDIuNjEsMi42MSwwLDAsMC0yLjA3LTEsMi42OSwyLjY5LDAsMCwwLTIuMTIsMS4xMkE1LDUsMCwwLDAsMTIxNC4xMywzMzMuODlaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTIwNy41IC0zMTcuNDIpIi8+PC9zdmc+',
                url: '/modals/psodopolip.html'
            },
            /**/
            'luminal_darlik': {
                title: "Lüminal Darlık",
                section: ['BatinUS', 'Enteroklizis', 'BatinPelvisBT', 'BatinPelvisMR', 'MREnterografi', 'MREnteroklizis', 'CiftKontrastKolonGrafi', 'PerianalMR', 'PerianalUS', 'MRCP', 'OzefagusMideDuedonumGrafisi', 'Gastroskopi', 'Kolonoskopi', 'D-Balon', 'Kapsül'],
                data: 'data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1OS4zOSAyMy40MSI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOm5vbmU7c3Ryb2tlOiMyMzFmMjA7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjJweDt9PC9zdHlsZT48L2RlZnM+PHRpdGxlPkx1zIhtaW5hbCBkYXJsxLFrPC90aXRsZT48cG9seWxpbmUgY2xhc3M9ImNscy0xIiBwb2ludHM9IjAuNzQgMC45NiA4LjQgOS4yOSA1MC4wNyA5LjI5IDU4LjY1IDAuNzEiLz48cG9seWxpbmUgY2xhc3M9ImNscy0xIiBwb2ludHM9IjU4LjY1IDIyLjQ2IDUwLjk5IDE0LjEyIDkuMzIgMTQuMTIgMC43NCAyMi43MSIvPjwvc3ZnPg==',
                url: '/modals/luminal.darlik.html'
            },
            /**/
            'kitle': {
                title: "Kitle",
                section: ['Enteroklizis', 'BatinPelvisBT', 'BatinPelvisMR', 'MREnterografi', 'MREnteroklizis', 'CiftKontrastKolonGrafi', 'PerianalMR', 'PerianalUS', 'MRCP', 'OzefagusMideDuedonumGrafisi', 'Gastroskopi', 'Kolonoskopi', 'D-Balon', 'Kapsül'],
                data: 'data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMS42MyAzMS42MyI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOm5vbmU7c3Ryb2tlOiMwMDA7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjJweDt9PC9zdHlsZT48L2RlZnM+PHRpdGxlPmtpdGxlPC90aXRsZT48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0xMjMzLjI4LDM3Mi41NWgwYTQuNTMsNC41MywwLDAsMS00LjUzLTQuNTNoMGE0LjUzLDQuNTMsMCwwLDAtNC41My00LjUzaC0yLjQ3YTQuNTMsNC41MywwLDAsMC00LjUzLDQuNTNoMGE0LjUzLDQuNTMsMCwwLDEtNC41Myw0LjUzaDBhNC41Myw0LjUzLDAsMCwwLTQuNTMsNC41M3YyLjQ3YTQuNTMsNC41MywwLDAsMCw0LjUzLDQuNTNoMGE0LjUzLDQuNTMsMCwwLDEsNC41Myw0LjUzaDBhNC41Myw0LjUzLDAsMCwwLDQuNTMsNC41M2gyLjQ3YTQuNTMsNC41MywwLDAsMCw0LjUzLTQuNTNoMGE0LjUzLDQuNTMsMCwwLDEsNC41My00LjUzaDBhNC41Myw0LjUzLDAsMCwwLDQuNTMtNC41M3YtMi40N0E0LjUzLDQuNTMsMCwwLDAsMTIzMy4yOCwzNzIuNTVaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTIwNy4xOCAtMzYyLjUpIi8+PC9zdmc+'
            },
            'obstriksiyon_yaratan_darlik': {
                title: "Obstriksiyon Yaratan Darlık",
                section: [],
                data: 'data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1OS4zOSAzMS42NiI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOm5vbmU7c3Ryb2tlOiMyMzFmMjA7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjJweDt9PC9zdHlsZT48L2RlZnM+PHRpdGxlPm9ic3RyaWtzaXlvbjwvdGl0bGU+PHBvbHlsaW5lIGNsYXNzPSJjbHMtMSIgcG9pbnRzPSIwLjc0IDQuODcgOC40IDEzLjIxIDUwLjA3IDEzLjIxIDU4LjY1IDQuNjIiLz48cG9seWxpbmUgY2xhc3M9ImNscy0xIiBwb2ludHM9IjU4LjY1IDI2LjM3IDUwLjk5IDE4LjA0IDkuMzIgMTguMDQgMC43NCAyNi42MiIvPjxsaW5lIGNsYXNzPSJjbHMtMSIgeDE9IjQ1Ljc0IiB5MT0iMC43MSIgeDI9IjE1LjQ5IiB5Mj0iMzAuOTYiLz48bGluZSBjbGFzcz0iY2xzLTEiIHgxPSIxNS40OSIgeTE9IjAuNzEiIHgyPSI0NS43NCIgeTI9IjMwLjk2Ii8+PC9zdmc+'
            },
            /**/
            'fistul': {
                title: "Fistül",
                section: ['On', 'BatinUS', 'Enteroklizis', 'BatinPelvisBT', 'BatinPelvisMR', 'MREnterografi', 'MREnteroklizis', 'CiftKontrastKolonGrafi', 'PerianalMR', 'PerianalUS', 'OzefagusMideDuedonumGrafisi', 'Gastroskopi', 'Kolonoskopi', 'D-Balon', 'Kapsül'],
                data: 'data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMi44MyAzMi44MyI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOm5vbmU7c3Ryb2tlOiMyMzFmMjA7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjJweDt9LmNscy0ye2ZpbGw6IzIzMWYyMDt9PC9zdHlsZT48L2RlZnM+PHRpdGxlPmZpc3R1zIhsPC90aXRsZT48Y2lyY2xlIGNsYXNzPSJjbHMtMSIgY3g9IjE2LjQxIiBjeT0iMTYuNDEiIHI9IjE1LjQxIi8+PGNpcmNsZSBjbGFzcz0iY2xzLTIiIGN4PSIxNi40MSIgY3k9IjE2LjY5IiByPSI0Ii8+PC9zdmc+',
                url: 'modals/fistul.html'
            },
            /**/
            'kapanmis_fistul': {
                title: "Kapanmış Fistül",
                section: ['On', 'BatinUS', 'Enteroklizis', 'BatinPelvisBT', 'BatinPelvisMR', 'MREnterografi', 'MREnteroklizis', 'CiftKontrastKolonGrafi', 'PerianalMR', 'PerianalUS', , 'OzefagusMideDuedonumGrafisi', 'Gastroskopi', 'Kolonoskopi', 'D-Balon', 'Kapsül'],
                data: 'data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0Mi4wOCA0Mi4wOCI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOm5vbmU7c3Ryb2tlOiMyMzFmMjA7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjJweDt9LmNscy0ye2ZpbGw6IzIzMWYyMDt9PC9zdHlsZT48L2RlZnM+PHRpdGxlPmthcGFubcSxc8ynIGZpc3R1zIhsPC90aXRsZT48Y2lyY2xlIGNsYXNzPSJjbHMtMSIgY3g9IjIxLjA0IiBjeT0iMjEuMDQiIHI9IjE1LjQxIi8+PGNpcmNsZSBjbGFzcz0iY2xzLTIiIGN4PSIyMS4wNCIgY3k9IjIxLjMyIiByPSI0Ii8+PGxpbmUgY2xhc3M9ImNscy0xIiB4MT0iMzEuMjkiIHkxPSIwLjcxIiB4Mj0iMC43MSIgeTI9IjMxLjI5Ii8+PGxpbmUgY2xhc3M9ImNscy0xIiB4MT0iNDEuMzciIHkxPSIxMC43OSIgeDI9IjEwLjc5IiB5Mj0iNDEuMzciLz48L3N2Zz4=',
                url: '/modals/kapanmis.fistul.html'
            },
            /**/
            'kismi_anal_darlik_fibroz': {
                title: "Kısmi Anal Darlık/ Fibroz",
                section: ['Perianal', 'PerianalMR', 'PerianalUS', 'Kolonoskopi', 'D-Balon'],
                data: 'data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0My4yNSA0My4yNSI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOm5vbmU7c3Ryb2tlOiMyMzFmMjA7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjJweDt9PC9zdHlsZT48L2RlZnM+PHRpdGxlPmvEsXNtaSBhbmFsIGRhcmzEsWs8L3RpdGxlPjxjaXJjbGUgY2xhc3M9ImNscy0xIiBjeD0iMjEuNjMiIGN5PSIyMS42MyIgcj0iMTUuNDEiLz48bGluZSBjbGFzcz0iY2xzLTEiIHgxPSIyMS42MyIgeDI9IjIxLjYzIiB5Mj0iNDMuMjUiLz48bGluZSBjbGFzcz0iY2xzLTEiIHgxPSI0My4yNSIgeTE9IjIxLjYzIiB5Mj0iMjEuNjMiLz48L3N2Zz4='
            },
            /**/
            'tam_anal_darlik_fibroz': {
                title: "Tam Anal Darlık / Fibroz",
                section: ['Perianal', 'PerianalMR', 'PerianalUS', 'Kolonoskopi', 'D-Balon'],
                data: 'data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0My4yNSA0My4yNSI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOm5vbmU7c3Ryb2tlOiMyMzFmMjA7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjJweDt9PC9zdHlsZT48L2RlZnM+PHRpdGxlPnRhbSBhbmFsIGRhcmzEsWs8L3RpdGxlPjxjaXJjbGUgY2xhc3M9ImNscy0xIiBjeD0iMjEuNjMiIGN5PSIyMS42MyIgcj0iMTUuNDEiLz48bGluZSBjbGFzcz0iY2xzLTEiIHgxPSIyMS42MyIgeDI9IjIxLjYzIiB5Mj0iNDMuMjUiLz48bGluZSBjbGFzcz0iY2xzLTEiIHgxPSIzNi45MiIgeTE9IjYuMzMiIHgyPSI2LjMzIiB5Mj0iMzYuOTIiLz48bGluZSBjbGFzcz0iY2xzLTEiIHgxPSI2LjMzIiB5MT0iNi4zMyIgeDI9IjM2LjkyIiB5Mj0iMzYuOTIiLz48bGluZSBjbGFzcz0iY2xzLTEiIHgxPSI0My4yNSIgeTE9IjIxLjYzIiB5Mj0iMjEuNjMiLz48L3N2Zz4='
            },
            'brid': {
                title: "Brid",
                section: ['Enteroklizis', 'MREnterografi', 'MREnteroklizis', 'CiftKontrastKolonGrafi'],
                data: 'data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzOC42NyAxNy4wOCI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOm5vbmU7c3Ryb2tlOiMyMzFmMjA7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjJweDt9PC9zdHlsZT48L2RlZnM+PHRpdGxlPmJyaWQ8L3RpdGxlPjxsaW5lIGNsYXNzPSJjbHMtMSIgeTE9IjQuNSIgeDI9IjM4LjY3IiB5Mj0iNC41Ii8+PGxpbmUgY2xhc3M9ImNscy0xIiB5MT0iMTAuMTciIHgyPSIzOC42NyIgeTI9IjEwLjE3Ii8+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMTAyOS42Nyw2OTZ2LTYuMDhhNS40Miw1LjQyLDAsMCwxLDUuNDItNS40MmgwYTUuNDIsNS40MiwwLDAsMSw1LjQyLDUuNDJWNjk2IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTAyNy42NyAtNjgzLjUpIi8+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMTA0MS41OCw3MDAuNThWNjg5LjkyYTUuNDIsNS40MiwwLDAsMSw1LjQyLTUuNDJoMGE1LjQyLDUuNDIsMCwwLDEsNS40Miw1LjQydjEwLjY3IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTAyNy42NyAtNjgzLjUpIi8+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMTA1My40Miw2OTZ2LTYuMDhhNS40Miw1LjQyLDAsMCwxLDUuNDItNS40MmgwYTUuNDIsNS40MiwwLDAsMSw1LjQyLDUuNDJWNjk2IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTAyNy42NyAtNjgzLjUpIi8+PC9zdmc+'
            },
            'duvar_kalinlik_artisi': {
                title: "Duvar Kalınlık Artışı",
                section: ['BatinUS', 'BatinPelvisBT', 'BatinPelvisMR', 'MREnterografi', 'MREnteroklizis', 'PerianalMR', 'PerianalUS'],
                data: 'data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NS44IDM0LjI1Ij48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6bm9uZTtzdHJva2U6IzIzMWYyMDtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6MnB4O308L3N0eWxlPjwvZGVmcz48dGl0bGU+ZHV2YXIga2FsxLFubMSxayBhcnTEsXPMp8SxPC90aXRsZT48cG9seWdvbiBjbGFzcz0iY2xzLTEiIHBvaW50cz0iNDMuNjUgMTIuODggMTIuMTUgMTIuODggMi4xNSAxIDUzLjY1IDEgNDMuNjUgMTIuODgiLz48cG9seWdvbiBjbGFzcz0iY2xzLTEiIHBvaW50cz0iMTIuMTUgMjEuMzggNDMuNjUgMjEuMzggNTMuNjUgMzMuMjUgMi4xNSAzMy4yNSAxMi4xNSAyMS4zOCIvPjwvc3ZnPg=='
            },
            'prestenotik_dilatasyon': {
                title: "Prestenotik Dilatasyon",
                section: ['BatinUS', 'Enteroklizis', 'BatinPelvisBT', 'BatinPelvisMR', 'MREnterografi', 'MREnteroklizis', 'CiftKontrastKolonGrafi', 'OzefagusMideDuedonumGrafisi'],
                data: 'data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzNy40IDI3Ljg4Ij48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6bm9uZTtzdHJva2U6IzIzMWYyMDtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6MnB4O308L3N0eWxlPjwvZGVmcz48dGl0bGU+cHJlc3Rlbm90aWs8L3RpdGxlPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTEwMjkuNiw3NjYuOWExMi45NCwxMi45NCwwLDAsMSwwLDI1Ljg4IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTAyOS42IC03NjUuOSkiLz48bGluZSBjbGFzcz0iY2xzLTEiIHgxPSIxMi41NiIgeTE9IjEwLjY5IiB4Mj0iMzcuNCIgeTI9IjEwLjY5Ii8+PGxpbmUgY2xhc3M9ImNscy0xIiB4MT0iMTIuNTYiIHkxPSIxNy4xOSIgeDI9IjM3LjQiIHkyPSIxNy4xOSIvPjwvc3ZnPg==',
                url: '/modals/prestenotik.dilatasyon.html'
            },
            'apse': {
                title: "Apse",
                section: [],
                data: 'data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0Mi41IDE3LjMzIj48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6bm9uZTtzdHJva2U6IzIzMWYyMDtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6MnB4O308L3N0eWxlPjwvZGVmcz48dGl0bGU+YXBzZTwvdGl0bGU+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMTA2OC40NCw4MTguNDhhMTQuNjksMTQuNjksMCwxLDEtMjkuMzcsMCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEwMzIuNSAtODE2LjgzKSIvPjxsaW5lIGNsYXNzPSJjbHMtMSIgeTE9IjEiIHgyPSI0Mi41IiB5Mj0iMSIvPjwvc3ZnPg=='
            },
            'inflamasyon': {
                title: "Inflamasyon",
                section: ['Kolonoskopi', 'D-Balon', 'Kapsül'],
                data: 'data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0OC41NyAxMi4xOCI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOm5vbmU7c3Ryb2tlOiMyMzFmMjA7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjJweDt9PC9zdHlsZT48L2RlZnM+PHRpdGxlPmluZmxhbWFzeW9uPC90aXRsZT48cG9seWxpbmUgY2xhc3M9ImNscy0xIiBwb2ludHM9IjQ3LjgxIDEwLjY1IDM5Ljk3IDEuNTMgMzIuMTIgMTAuNjUgMjQuMjggMS41MyAxNi40NCAxMC42NSA4LjYgMS41MyAwLjc2IDEwLjY1Ii8+PC9zdmc+'
            },
            'comb_sign': {
                title: "Comb Sign",
                section: ['BatinUS', 'BatinPelvisBT', 'BatinPelvisMR', 'MREnterografi', 'MREnteroklizis'],
                data: 'data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMi43NSAzMCI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOm5vbmU7c3Ryb2tlOiMyMzFmMjA7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjJweDt9PC9zdHlsZT48L2RlZnM+PHRpdGxlPmNvbWIgc2lnbjwvdGl0bGU+PHBvbHlsaW5lIGNsYXNzPSJjbHMtMSIgcG9pbnRzPSIyMi43NSAxIDEgMSAxIDI5IDIyLjc1IDI5Ii8+PGxpbmUgY2xhc3M9ImNscy0xIiB4MT0iMjIuNzUiIHkxPSIyMS4yNSIgeDI9IjEiIHkyPSIyMS4yNSIvPjxsaW5lIGNsYXNzPSJjbHMtMSIgeDE9IjIyLjc1IiB5MT0iMTUiIHgyPSIxIiB5Mj0iMTUiLz48bGluZSBjbGFzcz0iY2xzLTEiIHgxPSIyMi43NSIgeTE9IjcuNSIgeDI9IjEiIHkyPSI3LjUiLz48L3N2Zz4='
            },
            'fibroz': {
                title: "Fibroz",
                section: [],
                data: 'data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMy40MiAxOC4xNSI+PHRpdGxlPmZpYnJvejwvdGl0bGU+PHBhdGggZD0iTTEwNDEuNzksOTY5LjQ2SDEwNDBhMTguMzgsMTguMzgsMCwwLDEtMi4yLTQuNTMsMTQuODMsMTQuODMsMCwwLDEtLjc1LTQuNTUsMTQuMjksMTQuMjksMCwwLDEsLjkzLTUuMTcsMTguMTgsMTguMTgsMCwwLDEsMi4wNi0zLjloMS44MWEyOC42OCwyOC42OCwwLDAsMC0xLjc4LDQuODcsMTgsMTgsMCwwLDAtLjQ5LDQuMjUsMTguMjIsMTguMjIsMCwwLDAsLjI5LDMuMTcsMjAuNzIsMjAuNzIsMCwwLDAsLjc5LDMuMDlRMTA0MSw5NjcuNjUsMTA0MS43OSw5NjkuNDZaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTAzNy4wMSAtOTUxLjMxKSIvPjxwYXRoIGQ9Ik0xMDQ5LjI0LDk2NS4zOVY5NTEuNTRoOS40OXYyLjM0SDEwNTJ2My4yOGg1Ljc4djIuMzRIMTA1MnY1Ljg4WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEwMzcuMDEgLTk1MS4zMSkiLz48cGF0aCBkPSJNMTA2NS42NSw5NjkuNDZxLjc4LTEuNjgsMS4xLTIuNThhMTkuMiwxOS4yLDAsMCwwLC41OS0yLjA3LDIxLjUxLDIxLjUxLDAsMCwwLC40MS0yLjIyLDE3LjM0LDE3LjM0LDAsMCwwLC4xMy0yLjE2LDE4LjE3LDE4LjE3LDAsMCwwLS40OC00LjI1LDI4LjI1LDI4LjI1LDAsMCwwLTEuNzctNC44N2gxLjhhMTcuMzYsMTcuMzYsMCwwLDEsMi4yMSw0LjMxLDE0LDE0LDAsMCwxLC43OSw0LjYyLDE1Ljk0LDE1Ljk0LDAsMCwxLS42Miw0LjIzLDE3LjgzLDE3LjgzLDAsMCwxLTIuMzMsNVoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMDM3LjAxIC05NTEuMzEpIi8+PC9zdmc+'
            },
            'ulser': {
                title: "Ülser",
                section: [],
                data: 'data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2MyAyNC45OCI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOm5vbmU7c3Ryb2tlOiMwMDA7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjJweDt9PC9zdHlsZT48L2RlZnM+PHRpdGxlPmxpbmVlciB1zIhsc2VyPC90aXRsZT48cG9seWxpbmUgY2xhc3M9ImNscy0xIiBwb2ludHM9IjYzIDE2LjA4IDUxIDE2LjA4IDUxIDIzLjk4IDMxLjUgMjMuOTggMTIgMjMuOTggMTIgMTYuMDggMCAxNi4wOCIvPjxwYXRoIGQ9Ik0xOTk4LjY3LDM0Ni45NWExMC42MywxMC42MywwLDAsMSwuNDItMy4zMSw0LjEyLDQuMTIsMCwwLDEsMS4yNi0xLjkzLDMuMjEsMy4yMSwwLDAsMSwyLjEtLjY4LDMuNDMsMy40MywwLDAsMSwxLjY0LjM4LDMuMTMsMy4xMywwLDAsMSwxLjE2LDEuMDgsNS44MSw1LjgxLDAsMCwxLC43MiwxLjcyLDExLjQ2LDExLjQ2LDAsMCwxLC4yNiwyLjc0LDEwLjY0LDEwLjY0LDAsMCwxLS40MiwzLjI5LDQuMTIsNC4xMiwwLDAsMS0xLjI1LDEuOTQsMy4yMiwzLjIyLDAsMCwxLTIuMTEuNjgsMy4xOCwzLjE4LDAsMCwxLTIuNjMtMS4yQTcuNjQsNy42NCwwLDAsMSwxOTk4LjY3LDM0Ni45NVptMS40NiwwYTcuMjYsNy4yNiwwLDAsMCwuNjcsMy44LDEuOTEsMS45MSwwLDAsMCwzLjMsMCwxMS4xNCwxMS4xNCwwLDAsMCwwLTcuNiwyLDIsMCwwLDAtMS42Ni0uOTQsMS44MiwxLjgyLDAsMCwwLTEuNTcuODNBNy4zNSw3LjM1LDAsMCwwLDIwMDAuMTMsMzQ2Ljk1WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE5OTggLTM0MS4wMikiLz48cGF0aCBkPSJNMjAwOC40OCwzNTIuNjZWMzUxaDEuNjJ2MS42MloiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xOTk4IC0zNDEuMDIpIi8+PHBhdGggZD0iTTIwMTIuMTgsMzQ5LjYzbDEuNS0uMTNhMi42OCwyLjY4LDAsMCwwLC43NywxLjY0LDIuMDksMi4wOSwwLDAsMCwxLjQ2LjU1LDIuMjcsMi4yNywwLDAsMCwxLjc0LS43NywyLjkyLDIuOTIsMCwwLDAsLjcxLTIuMDYsMi42NCwyLjY0LDAsMCwwLS42OC0xLjkyLDIuMzgsMi4zOCwwLDAsMC0xLjc5LS43LDIuNDgsMi40OCwwLDAsMC0xLjI0LjMxLDIuNDEsMi40MSwwLDAsMC0uODcuODFsLTEuMzQtLjE3LDEuMTItNmg1Ljc2djEuMzZoLTQuNjNsLS42MiwzLjEyYTMuNzcsMy43NywwLDAsMSwyLjE5LS43MywzLjQ3LDMuNDcsMCwwLDEsMi41NiwxLjA1LDMuNjcsMy42NywwLDAsMSwxLDIuNyw0LjIyLDQuMjIsMCwwLDEtLjkyLDIuNzIsMy42OCwzLjY4LDAsMCwxLTMsMS40MSwzLjc1LDMuNzUsMCwwLDEtMi41OC0uODlBMy40NSwzLjQ1LDAsMCwxLDIwMTIuMTgsMzQ5LjYzWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE5OTggLTM0MS4wMikiLz48cGF0aCBkPSJNMjAyMSwzNDkuMTl2LTEuNDNoNC4zN3YxLjQzWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE5OTggLTM0MS4wMikiLz48cGF0aCBkPSJNMjAzMS45NCwzNTIuNjZoLTEuNDJ2LTkuMDdhNy4zNyw3LjM3LDAsMCwxLTEuMzUsMSw5LjU4LDkuNTgsMCwwLDEtMS41Ljc0di0xLjM4YTguNTksOC41OSwwLDAsMCwyLjA5LTEuMzZBNS4zNSw1LjM1LDAsMCwwLDIwMzEsMzQxaC45MloiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xOTk4IC0zNDEuMDIpIi8+PHBhdGggZD0iTTIwNDYsMzQ5LjU5bDEuNC4xOGEzLjY0LDMuNjQsMCwwLDEtMS4xNywyLjI3LDMuNDIsMy40MiwwLDAsMS0yLjMyLjgyLDMuNjEsMy42MSwwLDAsMS0yLjc3LTEuMTMsNC41Nyw0LjU3LDAsMCwxLTEtMy4yMyw1Ljg2LDUuODYsMCwwLDEsLjQ1LTIuMzgsMy4xNCwzLjE0LDAsMCwxLDEuMzctMS41Myw0LjA3LDQuMDcsMCwwLDEsMi0uNTEsMy40OCwzLjQ4LDAsMCwxLDIuMjQuNjksMy4xNywzLjE3LDAsMCwxLDEuMTIsMmwtMS4zOC4yMWEyLjMsMi4zLDAsMCwwLS43LTEuMjcsMS44MSwxLjgxLDAsMCwwLTEuMjEtLjQzLDIuMjEsMi4yMSwwLDAsMC0xLjc1Ljc3LDMuNjYsMy42NiwwLDAsMC0uNjcsMi40NCwzLjc4LDMuNzgsMCwwLDAsLjY1LDIuNDYsMi4xMSwyLjExLDAsMCwwLDEuNjkuNzcsMiwyLDAsMCwwLDEuNC0uNTFBMi41NSwyLjU1LDAsMCwwLDIwNDYsMzQ5LjU5WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE5OTggLTM0MS4wMikiLz48cGF0aCBkPSJNMjA0OC41OCwzNTIuNjZ2LTguNGgxLjI3djEuMThhMywzLDAsMCwxLDEuMDUtMSwzLDMsMCwwLDEsMS40OS0uMzgsMi43NiwyLjc2LDAsMCwxLDEuNTMuMzksMi4wNywyLjA3LDAsMCwxLC44NCwxLjA4LDMsMywwLDAsMSwyLjU5LTEuNDcsMi41NiwyLjU2LDAsMCwxLDEuOTIuNjksMywzLDAsMCwxLC42NywyLjEzdjUuNzZoLTEuNDJ2LTUuMjlhMy44OCwzLjg4LDAsMCwwLS4xNC0xLjIzLDEuMTksMS4xOSwwLDAsMC0uNS0uNiwxLjU3LDEuNTcsMCwwLDAtLjg1LS4yMywyLDIsMCwwLDAtMS40Ny41OSwyLjYsMi42LDAsMCwwLS41OCwxLjg5djQuODhoLTEuNDJ2LTUuNDZhMi40LDIuNCwwLDAsMC0uMzUtMS40MiwxLjMyLDEuMzIsMCwwLDAtMS4xNC0uNDcsMi4wNywyLjA3LDAsMCwwLTEuMTEuMzIsMS43OSwxLjc5LDAsMCwwLS43NC45Miw1LjIsNS4yLDAsMCwwLS4yMywxLjc2djQuMzZaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTk5OCAtMzQxLjAyKSIvPjwvc3ZnPg==',
                url: '/modals/ulser.html'
            },
            /**/
            'ulser_izole': {
                title: "Ülser (İzole)",
                section: ['Enteroklizis', 'MREnterografi', 'MREnteroklizis', 'CiftKontrastKolonGrafi', 'OzefagusMideDuedonumGrafisi', 'Gastroskopi', 'Kolonoskopi', 'D-Balon', 'Kapsül'],
                data: 'data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2MyAzNi4yNCI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOm5vbmU7c3Ryb2tlOiMwMDA7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjJweDt9PC9zdHlsZT48L2RlZnM+PHRpdGxlPnXMiGxzZXIgKGl6b2xlKTwvdGl0bGU+PHBvbHlsaW5lIGNsYXNzPSJjbHMtMSIgcG9pbnRzPSI2MyAxNi4wOCA0MS41IDE2LjA4IDQxLjUgMzUuMjQgMzEuNSAzNS4yNCAyMS41IDM1LjI0IDIxLjUgMTYuMDggMCAxNi4wOCIvPjxwYXRoIGQ9Ik0yMTUzLjI5LDIzNS44M2wtNy42OCwzLjI4di0xLjQybDYuMDgtMi41Mi02LjA4LTIuNXYtMS40Mmw3LjY4LDMuMjRaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjEzNS41IC0yMjkuMjYpIi8+PHBhdGggZD0iTTIxNjAuMjEsMjQwLjloLTEuNDJ2LTkuMDdhNy4zNyw3LjM3LDAsMCwxLTEuMzUsMSw5LjU4LDkuNTgsMCwwLDEtMS41Ljc0di0xLjM4YTguNTksOC41OSwwLDAsMCwyLjA5LTEuMzYsNS4zNSw1LjM1LDAsMCwwLDEuMjctMS41NWguOTJaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjEzNS41IC0yMjkuMjYpIi8+PHBhdGggZD0iTTIxNzQuMjQsMjM3LjgybDEuNC4xOGEzLjY0LDMuNjQsMCwwLDEtMS4xNywyLjI3LDMuNDIsMy40MiwwLDAsMS0yLjMyLjgyLDMuNjEsMy42MSwwLDAsMS0yLjc3LTEuMTMsNC41Nyw0LjU3LDAsMCwxLTEtMy4yMyw1Ljg2LDUuODYsMCwwLDEsLjQ1LTIuMzgsMy4xNCwzLjE0LDAsMCwxLDEuMzctMS41Myw0LjA3LDQuMDcsMCwwLDEsMi0uNTEsMy40OCwzLjQ4LDAsMCwxLDIuMjQuNjksMy4xNywzLjE3LDAsMCwxLDEuMTIsMmwtMS4zOC4yMWEyLjMsMi4zLDAsMCwwLS43LTEuMjcsMS44MSwxLjgxLDAsMCwwLTEuMjEtLjQzLDIuMjEsMi4yMSwwLDAsMC0xLjc1Ljc3LDMuNjYsMy42NiwwLDAsMC0uNjcsMi40NCwzLjc4LDMuNzgsMCwwLDAsLjY1LDIuNDYsMi4xMSwyLjExLDAsMCwwLDEuNjkuNzcsMiwyLDAsMCwwLDEuNC0uNTFBMi41NSwyLjU1LDAsMCwwLDIxNzQuMjQsMjM3LjgyWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIxMzUuNSAtMjI5LjI2KSIvPjxwYXRoIGQ9Ik0yMTc2Ljg1LDI0MC45di04LjRoMS4yN3YxLjE4YTMsMywwLDAsMSwxLjA1LTEsMywzLDAsMCwxLDEuNDktLjM4LDIuNzYsMi43NiwwLDAsMSwxLjUzLjM5LDIuMDcsMi4wNywwLDAsMSwuODQsMS4wOCwzLDMsMCwwLDEsMi41OS0xLjQ3LDIuNTYsMi41NiwwLDAsMSwxLjkyLjY5LDMsMywwLDAsMSwuNjcsMi4xM3Y1Ljc2aC0xLjQydi01LjI5YTMuODgsMy44OCwwLDAsMC0uMTQtMS4yMywxLjE5LDEuMTksMCwwLDAtLjUtLjYsMS41NywxLjU3LDAsMCwwLS44NS0uMjMsMiwyLDAsMCwwLTEuNDcuNTksMi42LDIuNiwwLDAsMC0uNTgsMS44OXY0Ljg4aC0xLjQydi01LjQ2YTIuNCwyLjQsMCwwLDAtLjM1LTEuNDIsMS4zMiwxLjMyLDAsMCwwLTEuMTQtLjQ3LDIuMDcsMi4wNywwLDAsMC0xLjExLjMyLDEuNzksMS43OSwwLDAsMC0uNzQuOTIsNS4yLDUuMiwwLDAsMC0uMjMsMS43NnY0LjM2WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIxMzUuNSAtMjI5LjI2KSIvPjwvc3ZnPg==',
                url: '/modals/ulser.html',
                //jsonData: 'Skeleton.jsons.analulser'
            },
            'ulser_nodularite': {
                title: "Ülserde Nodülarite",
                section: [],
                data: 'data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA3My4wNiAyOS4wOCI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOm5vbmU7c3Ryb2tlOiMwMDA7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjJweDt9PC9zdHlsZT48L2RlZnM+PHRpdGxlPnXMiGxzZXJkZSBub2R1zIhsZXJpdGU8L3RpdGxlPjxsaW5lIGNsYXNzPSJjbHMtMSIgeTE9IjcuNDIiIHgyPSIxMS4wOCIgeTI9IjcuNDIiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0xNDYzLjg0LDMwMi4zYTYuNSw2LjUsMCwwLDEsMTMsMCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE0NTMuNjUgLTI5NC44KSIvPjxsaW5lIGNsYXNzPSJjbHMtMSIgeDE9IjczLjA2IiB5MT0iNy40MiIgeDI9IjYxLjk3IiB5Mj0iNy40MiIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTE1MTYuNTMsMzAyLjNhNi41LDYuNSwwLDAsMC0xMywwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTQ1My42NSAtMjk0LjgpIi8+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMTUwMy4zMiwzMDcuMjV2MTUuNjNoLTlzLTEuMjEtNC43NS0zLjkyLTQuNzVoLS45MWMtMi43MSwwLTMuOTIsNC43NS0zLjkyLDQuNzVoLTlWMzA3LjI1IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTQ1My42NSAtMjk0LjgpIi8+PC9zdmc+'
            },
            'lineer_ulser': {
                title: "Lineer Ülser",
                section: [],
                data: 'data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2MyAyNC45OCI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOm5vbmU7c3Ryb2tlOiMwMDA7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjJweDt9LmNscy0ye2ZvbnQtc2l6ZToxNi4xOXB4O2ZvbnQtZmFtaWx5OkFyaWFsTVQsIEFyaWFsO308L3N0eWxlPjwvZGVmcz48dGl0bGU+bGluZWVyIHXMiGxzZXI8L3RpdGxlPjxwb2x5bGluZSBjbGFzcz0iY2xzLTEiIHBvaW50cz0iNjMgMTYuMDggNTEgMTYuMDggNTEgMjMuOTggMzEuNSAyMy45OCAxMiAyMy45OCAxMiAxNi4wOCAwIDE2LjA4Ii8+PHRleHQgY2xhc3M9ImNscy0yIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDEzLjkpIj4g4omlIDUuMCBjbTwvdGV4dD48L3N2Zz4='
            },
            'horizontal_sirkuler_ulser': {
                title: "Horizontal (Sirküler) Ülser",
                section: [],
                data: 'data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NC4yNSA0My44NSI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOm5vbmU7c3Ryb2tlOiMwMDA7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjJweDt9PC9zdHlsZT48L2RlZnM+PHRpdGxlPmhvcml6b250YWwgdcyIbHNlcjwvdGl0bGU+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMjA1NCw0NDkuMjlhMjEuMTIsMjEuMTIsMCwxLDEtMjQuNy0xNi43OSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIwMTEuMTMgLTQzMS41MikiLz48L3N2Zz4='
            },
            'aftoz_ulser': {
                title: "Aftöz Ülser",
                section: [],
                data: 'data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzNC4yNCAyMy4zMyI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOm5vbmU7c3Ryb2tlOiMwMDA7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjJweDt9PC9zdHlsZT48L2RlZnM+PHRpdGxlPmFmdG/MiHogdcyIbHNlcjwvdGl0bGU+PGNpcmNsZSBjbGFzcz0iY2xzLTEiIGN4PSI2LjMzIiBjeT0iNi4zMyIgcj0iNS4zMyIvPjxjaXJjbGUgY2xhc3M9ImNscy0xIiBjeD0iMjcuOSIgY3k9IjYuMzMiIHI9IjUuMzMiLz48Y2lyY2xlIGNsYXNzPSJjbHMtMSIgY3g9IjE3IiBjeT0iMTciIHI9IjUuMzMiLz48L3N2Zz4='
            },
            'yildiz_ulser': {
                title: "Yıldız Ülser",
                section: [],
                data: 'data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0My4zIDQyLjAyIj48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6bm9uZTtzdHJva2U6IzAwMDtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6MnB4O308L3N0eWxlPjwvZGVmcz48dGl0bGU+ecSxbGTEsXogdcyIbHNlcjwvdGl0bGU+PHBvbHlnb24gY2xhc3M9ImNscy0xIiBwb2ludHM9IjIxLjY1IDYuMzcgMjQuOTMgMjYuOTggMzcuOTMgMzguNTcgMjEuNjUgMzEuNDMgNS4zNyAzOC41NyAxOC4zNyAyNi45OCAyMS42NSA2LjM3Ii8+PC9zdmc+'
            },
            /**/
            'anjiodisplazi': {
                title: "Anjiodisplazi",
                section: ['Gastroskopi', 'Kolonoskopi', 'D-Balon', 'Kapsül'],
                data: 'data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNy41OSAyNy43MSI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOm5vbmU7c3Ryb2tlOiMwMDA7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjJweDt9PC9zdHlsZT48L2RlZnM+PHRpdGxlPmFuamlvZGlzcGxhc2k8L3RpdGxlPjxwb2x5bGluZSBjbGFzcz0iY2xzLTEiIHBvaW50cz0iMCAxMi4yMSAxMi4xNyAxMi4yMSAxMi4yNSAxMi4yMSAxMi4yNSAwLjA0Ii8+PHBvbHlsaW5lIGNsYXNzPSJjbHMtMSIgcG9pbnRzPSIxNS40MiAwIDE1LjQyIDEyLjE3IDE1LjQyIDEyLjI1IDI3LjU5IDEyLjI1Ii8+PHBvbHlsaW5lIGNsYXNzPSJjbHMtMSIgcG9pbnRzPSIwIDE1LjUgMTIuMTcgMTUuNSAxMi4yNSAxNS41IDEyLjI1IDI3LjY3Ii8+PHBvbHlsaW5lIGNsYXNzPSJjbHMtMSIgcG9pbnRzPSIxNS40MiAyNy43MSAxNS40MiAxNS41NCAxNS40MiAxNS40NiAyNy41OSAxNS40NiIvPjwvc3ZnPg=='
            },
            /**/
            'primer_sklerozan_kalonjit': {
                title: "Primer Sklerozan Kolanjit",
                section: ['ERCP'],
                data: 'data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0Mi40IDE3LjYxIj48dGl0bGU+UFNLPC90aXRsZT48cGF0aCBkPSJNMjIuNDUsMjEuMjdhMzEuNjQsMzEuNjQsMCwwLDEsNS4yMi0uMzVjMi4zOCwwLDQuMDguNDYsNS4yMiwxLjM3YTUsNSwwLDAsMSwxLjgyLDQsNS40Niw1LjQ2LDAsMCwxLTEuNTcsNC4wNiw3LjkyLDcuOTIsMCwwLDEtNS41NSwxLjhBOS43OSw5Ljc5LDAsMCwxLDI2LjI3LDMydjYuMTFIMjIuNDVaTTI2LjI3LDI5YTUuOTMsNS45MywwLDAsMCwxLjI5LjFjMi4wNSwwLDMuMzItMSwzLjMyLTIuNzksMC0xLjU3LTEuMDktMi41MS0zLTIuNTFhNi42LDYuNiwwLDAsMC0xLjYuMTVaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjIuNDUgLTIwLjc2KSIvPjxwYXRoIGQ9Ik0zNy4yOSwzNC4xNWE5Ljg2LDkuODYsMCwwLDAsNC4yOCwxLjA2YzEuNzcsMCwyLjcxLS43NCwyLjcxLTEuODVzLS44MS0xLjY3LTIuODYtMi40MWMtMi44NC0xLTQuNjktMi41Ni00LjY5LTUsMC0yLjkxLDIuNDMtNS4xNSw2LjQ2LTUuMTVhMTAuNDcsMTAuNDcsMCwwLDEsNC4zNi44NmwtLjg2LDMuMTJhOC4xMyw4LjEzLDAsMCwwLTMuNTctLjgxYy0xLjY3LDAtMi40OC43Ni0yLjQ4LDEuNjUsMCwxLjA5LDEsMS41NywzLjE3LDIuNDEsMywxLjEyLDQuNDQsMi42OSw0LjQ0LDUuMDksMCwyLjg2LTIuMjEsNS4zLTYuODksNS4zYTExLjE4LDExLjE4LDAsMCwxLTQuODQtMVoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yMi40NSAtMjAuNzYpIi8+PHBhdGggZD0iTTUwLjg1LDIxaDMuODNWMjguNmguMDhjLjM4LS42Ni43OS0xLjI3LDEuMTctMS44OEw1OS44LDIxaDQuNzRsLTUuNjUsNy4yNyw2LDkuODFINjAuMzNsLTQuMTgtNy4zOC0xLjQ3LDEuOHY1LjU4SDUwLjg1WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIyLjQ1IC0yMC43NikiLz48L3N2Zz4='
            },
            /**/
            'primer_bilier_siroz': {
                title: "Primer Bilier Siroz",
                section: ['ERCP'],
                data: 'data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MS4xIDE3LjYxIj48dGl0bGU+UEJTPC90aXRsZT48cGF0aCBkPSJNMjMuNDYsMjAuMTVhMzEuNjQsMzEuNjQsMCwwLDEsNS4yMi0uMzVjMi4zOCwwLDQuMDguNDYsNS4yMiwxLjM3YTUsNSwwLDAsMSwxLjgyLDQsNS40Niw1LjQ2LDAsMCwxLTEuNTcsNC4wNkE3LjkyLDcuOTIsMCwwLDEsMjguNjEsMzFhOS43OSw5Ljc5LDAsMCwxLTEuMzItLjA4VjM3SDIzLjQ2Wm0zLjgzLDcuNzZhNS45Myw1LjkzLDAsMCwwLDEuMjkuMWMyLjA1LDAsMy4zMi0xLDMuMzItMi43OSwwLTEuNTctMS4wOS0yLjUxLTMtMi41MWE2LjYsNi42LDAsMCwwLTEuNi4xNVoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yMy40NiAtMTkuNjUpIi8+PHBhdGggZD0iTTM4LjE4LDIwLjE1YTMwLjc5LDMwLjc5LDAsMCwxLDUtLjM1YzIuMzYsMCwzLjguMjMsNSwxYTMuNzIsMy43MiwwLDAsMSwyLjA1LDMuMzUsMy44NiwzLjg2LDAsMCwxLTIuODEsMy42NXYuMDVBNC4yNyw0LjI3LDAsMCwxLDUwLjg2LDMyYTQuNTUsNC41NSwwLDAsMS0xLjc3LDMuNjJjLTEuMjQsMS0zLjMyLDEuNTUtNi43MiwxLjU1YTI5Ljg1LDI5Ljg1LDAsMCwxLTQuMTgtLjI1Wk00MiwyNi42OWgxLjI3YzIsMCwzLjEyLS44NCwzLjEyLTIuMXMtMS0yLTIuNzQtMmExMC41MywxMC41MywwLDAsMC0xLjY1LjFabTAsNy41OGExMi4xNiwxMi4xNiwwLDAsMCwxLjUuMDVjMS43NSwwLDMuMjktLjY2LDMuMjktMi40NnMtMS41NS0yLjQxLTMuNDctMi40MUg0MloiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yMy40NiAtMTkuNjUpIi8+PHBhdGggZD0iTTUzLjYxLDMzYTkuODYsOS44NiwwLDAsMCw0LjI4LDEuMDZjMS43NywwLDIuNzEtLjc0LDIuNzEtMS44NXMtLjgxLTEuNjctMi44Ni0yLjQxYy0yLjg0LTEtNC42OS0yLjU2LTQuNjktNSwwLTIuOTEsMi40My01LjE1LDYuNDYtNS4xNWExMC40NywxMC40NywwLDAsMSw0LjM2Ljg2TDYzLDIzLjYzYTguMTMsOC4xMywwLDAsMC0zLjU3LS44MWMtMS42NywwLTIuNDguNzYtMi40OCwxLjY1LDAsMS4wOSwxLDEuNTcsMy4xNywyLjQxLDMsMS4xMiw0LjQ0LDIuNjksNC40NCw1LjA5LDAsMi44Ni0yLjIxLDUuMy02Ljg5LDUuM2ExMS4xOCwxMS4xOCwwLDAsMS00Ljg0LTFaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjMuNDYgLTE5LjY1KSIvPjwvc3ZnPg=='
            },
            /**/
            'safra_kese_tasi': {
                title: "Safra Kese Taşı",
                section: ['BatinUS', 'BatinPelvisBT', 'BatinPelvisMR', 'MRCP', 'ERCP'],
                data: 'data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzNi45OCA0OC40MyI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOm5vbmU7c3Ryb2tlOiMwMDA7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjJweDt9PC9zdHlsZT48L2RlZnM+PHRpdGxlPkljb24xPC90aXRsZT48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik01MS4xNSw3LjIxUzM0Ljg5LDE3LDI4LDI4Ljc3YTE0LjgzLDE0LjgzLDAsMCwwLDIuNTYsMTguMTdjLjM2LjM1LjcyLjY4LDEuMDcsMWExOC43MSwxOC43MSwwLDAsMCwxMy41OCw1YzMuMzgtLjIxLDYuODUtMS40LDguNjctNC45NEM1OC4xNSwzOS43MSw1NS40NywxMiw2MS4yOCw2LjIxIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjUuMDEgLTUuNSkiLz48ZWxsaXBzZSBjbGFzcz0iY2xzLTEiIGN4PSIxNi4wNyIgY3k9IjIxLjg0IiByeD0iMi41NyIgcnk9IjMuNDQiLz48ZWxsaXBzZSBjbGFzcz0iY2xzLTEiIGN4PSIyMy41NSIgY3k9IjI5LjMiIHJ4PSIzLjQ0IiByeT0iNC4wMiIvPjxlbGxpcHNlIGNsYXNzPSJjbHMtMSIgY3g9IjEzLjUiIGN5PSIzMC45IiByeD0iMi4xMyIgcnk9IjIuNDkiLz48ZWxsaXBzZSBjbGFzcz0iY2xzLTEiIGN4PSIxOC42NCIgY3k9IjM4Ljk3IiByeD0iMi4xMyIgcnk9IjIuNDkiLz48ZWxsaXBzZSBjbGFzcz0iY2xzLTEiIGN4PSI5Ljg2IiBjeT0iMzcuOTciIHJ4PSIxLjUxIiByeT0iMS43NyIvPjwvc3ZnPg==',
                url: '/modals/safra.kese.tasi.html'
            },
            /**/
            'akut_pankreatit': {
                title: "Akut Pankreatit",
                section: ['BatinUS', 'BatinPelvisBT', 'BatinPelvisMR', 'MRCP', 'ERCP'],
                data: 'data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMC4xMyAxNy4yMSI+PHRpdGxlPkFQPC90aXRsZT48cGF0aCBkPSJNMzMuNjIsMzIuNjIsMzIuNDEsMzdoLTRsNS4yMi0xNy4wOGg1LjA3TDQ0LDM3SDM5LjgzbC0xLjMyLTQuMzhaTTM4LDI5LjczbC0xLjA2LTMuNjJjLS4zLTEtLjYxLTIuMjgtLjg2LTMuMjlIMzZjLS4yNSwxLS41MSwyLjMxLS43OSwzLjI5bC0xLDMuNjJaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjguNCAtMTkuOCkiLz48cGF0aCBkPSJNNDYuMjcsMjAuMTVhMzEuNjQsMzEuNjQsMCwwLDEsNS4yMi0uMzVjMi4zOCwwLDQuMDguNDYsNS4yMiwxLjM3YTUsNSwwLDAsMSwxLjgyLDRBNS40Niw1LjQ2LDAsMCwxLDU3LDI5LjE4LDcuOTIsNy45MiwwLDAsMSw1MS40MSwzMWE5Ljc5LDkuNzksMCwwLDEtMS4zMi0uMDhWMzdINDYuMjdabTMuODMsNy43NmE1LjkzLDUuOTMsMCwwLDAsMS4yOS4xYzIuMDUsMCwzLjMyLTEsMy4zMi0yLjc5LDAtMS41Ny0xLjA5LTIuNTEtMy0yLjUxYTYuNiw2LjYsMCwwLDAtMS42LjE1WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTI4LjQgLTE5LjgpIi8+PC9zdmc+'
            },
            /**/
            'kronik_panreatit': {
                title: "Kronik Panreatit",
                section: ['BatinUS', 'BatinPelvisBT', 'BatinPelvisMR', 'MRCP', 'ERCP'],
                data: 'data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNy44MyAxNy4yMSI+PHRpdGxlPktQPC90aXRsZT48cGF0aCBkPSJNMzAuMTgsMTkuOTNIMzR2Ny41NWguMDhjLjM4LS42Ni43OS0xLjI3LDEuMTctMS44OGwzLjg4LTUuNjhoNC43NEwzOC4yMSwyNy4ybDYsOS44MUgzOS42NWwtNC4xOC03LjM4TDM0LDMxLjQzVjM3SDMwLjE4WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTMwLjE4IC0xOS44KSIvPjxwYXRoIGQ9Ik00NS43MywyMC4xNUEzMS42NCwzMS42NCwwLDAsMSw1MSwxOS44YzIuMzgsMCw0LjA4LjQ2LDUuMjIsMS4zN2E1LDUsMCwwLDEsMS44Miw0LDUuNDYsNS40NiwwLDAsMS0xLjU3LDQuMDZBNy45Miw3LjkyLDAsMCwxLDUwLjg4LDMxYTkuNzksOS43OSwwLDAsMS0xLjMyLS4wOFYzN0g0NS43M1ptMy44Myw3Ljc2YTUuOTMsNS45MywwLDAsMCwxLjI5LjFjMi4wNSwwLDMuMzItMSwzLjMyLTIuNzksMC0xLjU3LTEuMDktMi41MS0zLTIuNTFhNi42LDYuNiwwLDAsMC0xLjYuMTVaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMzAuMTggLTE5LjgpIi8+PC9zdmc+'
            },
            /**/
            'ulser_multipl': {
                title: "Ülser (Multipl)",
                section: ['Enteroklizis', 'MREnterografi', 'MREnteroklizis', 'CiftKontrastKolonGrafi', 'OzefagusMideDuedonumGrafisi', 'Gastroskopi', 'Kolonoskopi', 'D-Balon', 'Kapsül'],
                //data: 'data:image/png;base64,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',,
                //url: '/modals/ulser.multi.html'
                jsonData: 'Skeleton.jsons.ulsermultiple'

            },
            /**/
            'malign_ulser': {
                title: "Malign Ülser",
                section: ['Gastroskopi', 'Kolonoskopi', 'D-Balon', 'Kapsül'],
                //data: 'data:image/png;base64,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',
            },
            /**/
            'perianal_fistul': {
                title: "Perianal Fistül",
                section: ['Perianal', 'BatinPelvisMR', 'MREnterografi', 'MREnteroklizis', 'CiftKontrastKolonGrafi', 'PerianalMR', 'PerianalUS', 'Kolonoskopi', 'D-Balon'],
                url: '/modals/perianal.fistul.html'
                    //data: 'data:image/png;base64,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',
            },
            /**/
            'kapanmis_perianal_fistul': {
                title: "Kapanmış Perianal Fistül",
                section: ['Perianal', 'BatinPelvisBT', 'BatinPelvisMR', 'MREnterografi', 'MREnteroklizis', 'CiftKontrastKolonGrafi', 'PerianalMR', 'PerianalUS', 'Kolonoskopi', 'D-Balon'],
                //data: 'data:image/png;base64,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',
            },
            /**/
            'punch_biyopsi': {
                title: "Punch Biyopsi",
                section: ['Gastroskopi', 'Kolonoskopi', 'ERCP'],
                //data: 'data:image/png;base64,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',
            },
            /**/
            'fissur': {
                title: "Fissür",
                section: ['Kolonoskopi'],
                //data: 'data:image/png;base64,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',
            },
            /**/
            'icv_tutulumu': {
                title: "IÇV Tutulumu",
                section: ['Kolonoskopi', 'D-Balon', 'Kapsül'],
                //data: 'data:image/png;base64,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',
            },
            /**/
            'cekal_patch': {
                title: "Çekal Patch",
                section: ['Kolonoskopi', 'D-Balon', 'Kapsül'],
                //data: 'data:image/png;base64,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',
            },
            /**/
            'posit': {
                title: "Poşit",
                section: ['Kolonoskopi', 'D-Balon', 'Kapsül'],
                //data: 'data:image/png;base64,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',
            },
            /**/
            'ileit': {
                title: "İleit",
                section: ['Kolonoskopi', 'D-Balon', 'Kapsül'],
                //data: 'data:image/png;base64,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',
            },
            /**/
            'cuffit': {
                title: "Cuffit",
                section: ['Kolonoskopi', 'D-Balon', 'Kapsül'],
                //data: 'data:image/png;base64,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',
            },
            /**/
            'safra_kesesinde_camur': {
                title: "Safra Kesesinde Çamur",
                section: ['BatinUS', 'BatinPelvisBT', 'BatinPelvisMR', 'MRCP', 'ERCP'],
                url: '/modals/safra.kesesinde.camur.html'
                    //data: 'data:image/png;base64,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',
            },
            /**/
            'ozefagus_varisi': {
                title: "Özefagus Varisi",
                section: ['Gastroskopi'],
                //data: 'data:image/png;base64,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',
            },
            /**/
            'fundik_varis': {
                title: "Fundik Varis",
                section: ['Gastroskopi'],
                //data: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHYAAABhCAYAAAADdFUyAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QA/wD/AP+gvaeTAAAAB3RJTUUH4QUaASU4J7tYQgAAFSxJREFUeNrtnXmcFNW1x7+3qmdhm6FZlU1Q4vqACAhS6isBifoSjTTiFkOMUXFJMomF8WlMNKuJpjQkErfwniSRxAFbE5O8IAEpwBIEFBMEF0CQfXF6GJhhZrqr6v1xe2Z6erp7enp66B7k9/nM5zN9tzr3nrr3nnvOuafgBE7gBDoPRK4JSBemrU8Cboz+fMLQrLdyTVM+w5drAtqA84GvRv9fBpxgbAoouSagDaiI+d/NNTH5js7E2OqY/7vkmph8R2dairfG/D8WeBbAtPVvAZ8HhgBbgPmGZv0h18TmGp1JeCoEagA1mvQUcB4wJkHxZw3Nui3NdrtF2/kPYBQwAOgNdAUKYsbIAeqRK8dOYA+wDnjT0KwPcj0+8eg0jAUwbf2bwOw0i99taNbjCdpQgGuBK4DPAv2AMHAY2I1k2G4gBFRG8wC6AT2BXsAwoC/QB+iOZPhHwGLgFUOz3s71WHUqxgKYtn4d8AzQo5Winxia1Sdapxj4GjAZGA0UA5uAlcA/kLMuTAYwbX0IcsZfAvwn8kXZDywBFhiatSIX49TpGAuNg7kaOKmVoo8gGdkPuUe/Aaw1NGtpB9LWF8ngicDZwEDgdeCHhmZtO1Zj1CkZC2Da+izg0TSKzgV+kyuFhmnrVwL/DZwLLAdmGJq1r6Of25kZezvwZCvFvm5o1pxc0xqldzTwMKAD84AyQ7NqO+p5nekcG4/RaZSpzDWRDTA06y1Dsy4FrkLu9TtMW7+lo57XKWdsVLLdh5RKk8EFhhiatSvX9Cbpw6XALwA/EDA0681stt9ZZ+xNpGYqwMZ8ZSqAoVmLDM0aAfwNWG3a+rez2X6nY6xp6xOQb3pr6BRGAkOzZgKTgMdMW385W+3m3VJs2noB8EWkFugAUsvjAScj96ZAmk2NNDTr37nuTxv6fQpgI7Vrlxiatb097eUjY99EHvjbg+8YmpXOUSjvYNr6XOBm4ExDs97PtJ28Yqxp66OA9cD7gIl8eyfTZIdNBy8amnV1rvvSznH4CXA/7Vh18o2xLwBXGZpVFJc+HpgPnNpKE69GjxSdHqatPwZ8GxhhaNaGttbPN+HpYuQhvhkMzVoNnAXch1S0743JrkR6VMw6Xpga7fPdSIPHv01bH9DW+vk2YzcC3zI069VWyvmA05AmvO2GZlWn035nRMzMLWyLoSLfDO1VpOEdYWhWBLkPH/cwNOtu09YvBnbQutGjEfm2FHtI4/YJxMDQrNFAf9PWg+nWyTfGdss1AXmMQcBU09YvT6dw3jDWtPVrgBFIm+kJxCGqHr0S+HtUxkiJrAtPUYvFRUgfIa+V4g35w5BqtZ8ZmnVfRg8OhsbRUtV4GwH/e9nuYxq03A9cHtO/Q8DVBPx17W3atPUdwDZDsy5KVS5rwlNUJfYW0lqxGekrlM6LU4i01Ew1NOvldpAwEPlCxaJ3tvrXRvwncGFcmppJQwkwGthv2voXDM36a7JCWWGsaesnIV0/FwBfMTSrPmtDFKwYBGIUsIaAf3+KkjUJ0to9QzJEvIdEBa2vXmnB0KwDpq3fC/yRFH5f2dpjHwYcQ7OuzzJTrwSxDfgrsJVgaELW2j62cMkSYwEMzXoE2G7a+k3JymSLsaOBf3bAgDxE0xLWDbxnkhd100zLCbLK2CgeJ4XPV7YY+2/kpaksQ0TifvdMWtQtBeHEFHVk2vGL/wX6mLZ+Q6LMbDH2m0CvqBI/e3BKYwQODyKlSadgoTji4sYcg91uFIkjEY5TGJrlAg8gGdwCWTvuRC0wq5CCwnogQgYvjoPKYN/moq3hsx/57t4X7wNFQ9SCVwBe0ZZ7+8+4eUzx8h9sqz8zoggHges7o2j92z8+8NSyVVXX/xlfpWwo0rN+Qsn8qx7oe8eN79V9dr+HYszSlh2btTkYmgfMiEnZBwwh4M+e/NE07h4w3dCshbHpWVNQRC0wRcjLUkVInW9BW/9UnILDbs/CsFesIOrngvIiUA4sBPdXtW53pcbtXqSKSEOdQprfsYlFxEP4PJQZgGPaensN+JnCpeM2/JeAH8cn5pV1pz0ofLFySj1FryKirrpeMYXUf7Z+Wuk7AI/Yk8pVnOkeyoBZ2mt7OpSYljN2D3LGZn1rMG19JLAOT/Q1LlhW2ZCeNyrF9qLe666gxFjvlGrq3ZJGg8J3tKXXeIjNPurLc01rNmFo1r+A1Qhvamz6ccNYlErwYmUtFXwVzYoUiPplpxZuvLBtDWcFHtk/7sRiJdJJoRH5Zo9tjpf2F+EVNL18IuwxtV+SaxGFSC1mzLvqNdfi9Vb3/taquWoFC58ei6dORK0cAUp/5Fm5BtiIVIuuJODfncWeOMTvscHQaUh98vnIK5kqcARpZ14DBAn4092XFwHfj03Ib8Y6pX9HqR4jRQEPnB7bkHdaE5Tt4aFWxY2f1yhDdHl5R8l39+0etL1uzIXgzsNXCV6LBeuKhooEQ38AFhLw/yULPSkg4JczNhiahnR4/0IrdXZF9+rfEvB/1ErZVcBgc+15Zxlj12yCNBhr2npPZBiAjl5OAHBROatwnVhSc9WOx/crpXiFpYgwoIJb3OuGpQ+UXF/yxJBNdfIie0/1gPD79h+6f+8K9cOjF4Fa2bw5gGDluUcjJa9uDw/qg1IDoi4RU2MhgC8DXyYYWgNcR8C/lcyxU9IR+hXwjTTrDER6KhoEQ5cR8C9LVtDQrKOmrRfhqVOR935TM9a09fnA9cgzabasEymh4LAzfKoY4vvoVtRD63BLx0BYnmN9tW+OLFoz5YAzYKEiHE/gEXL6ir6+3UuGFm6Y82H1Rc2pDPjXEQydC95bKIdiMtp0GDgPeJtgaAoBf6b3awoJhpYgTZNtRRHwGsHQxQT8Vopym3CVRl16Usaatr4dGY/hCuDdaNkOPR55CDwEgws2i8U103bjlN6AEjXQiDBESk5/p27coi8Vv3HGwcjJeAh6qftEGF/V1voRo+JEwUqCoe8h9c2JEAHeRF6IDkf7eiGJvThKgNUEQxNTzZwUGJkkfStSmVOBNHeeA5yZpOxSgqF+BPyfJMlfh7xBIYcrUQnT1uchL+jm9py7sH41ypFxjXus23UrVxeflrDsAu9zqFWLYvbYMIn9p9YgQx28QsDf3LwWDPVEeilcASRzOj+fgH91SrpbnmPjMR8oJ+D/c4K6Y4A7kbcB4vEKAf+ViRo0bf2LKJGn8ZSTjQkrvGQzdgYws618yDrUqkiTZCtATaH7VatEnBYzjqkeIB4i4P9B0jYC/krgd8DvCIa+AjyXoNRLyNmdKW4k4H8+BQ3rgK8RDG0BfhKXewXBkJ+AP5Sg5jt4ig9f/TBgayoJ4kg7iM8OPJH6dzM4JD6WR2U+x39HSqbGI+CfB0xNkHMywVCmL/1zKZna/Pk/BRLtqTckqbEbqMcTp0FyBcVG4EcZEp89eF2UJkHcA68w+YsY8dNSaHcBH4T9S5kunmrz8wP+l0ksxf6CYKit21QlAX9b7iAB3JEg7b8SFYw6OISRtxKTMvZSYJhp6yujvky5gVfgNq2oCjjdkx7YBxX9C5ySuNQCcHrs4VoxOWMaAv4ngPgoM92R3vltwfcyePYmpIAXi/EEQ8m20BpkhJzEUrGhWTuj90VeA7aZtl6NlGA6XJjyEJQoFaLW6/b1b+49tBG3VEMcAa8Q1Np3H7Evmdpf/fgPB5yBQuAS9grEOcVrlv/qk9ef2lk7svlxx+nB8C4r7/nZ2v4/OuT0mfWJ099TaTTGu8jSHwE/NzRrXgqyfk3Lo8pM4LE2dC1TRcdSYFzM795IH+NtCcrWEfWDSnrcMTRrL3CWaesXAJ8hPXfSdsP1VHqr+3xra/XXcXoEEFETpgiDUzLw/boR607vsf7OfZHBjhDQTTms1ntFu3aGhxe1eO1cqk8u2PyXAiKhg5GTZvpEJHbGO8iwepcBz5m2fquhWcn0yK8gXUhjXTJOJxgaRMC/M41uVQMHMxySqgRpvUjM2IaXtXXNk6FZryMDUB1jlMOCP/aTFhuB5EOk39yJj388F+bJwGcxWDDlc/ji5D01vGTFpV89vAL+3qJ8E+aatj4IGcXlKUOzbm9RIuB3CIYWAdfE5YyhQauUGkejHcgEiVbJVo03+W3d8VXWN/VLgK8quQeCUitkSMPYtMNphbszNGsnchbMNG092axdlSDtM2n2RJD5WCdibDJZowD5EuU5Y+P1uan0u6JGtOyOkrZB3dCsEPAhYCQpkqitXrkeojh0QQb3zHPGtgkJu9JWd5RtwNAkeYnayrfxK0YGZMk7wtoBN9HlZ38bG/EjhaRE6Jkg7XCue90A09b9QAHC2wb5zljhpP4dC7fn1gT557bxiWOAJ5LkjUiQti2HoxOPsxGewFU3QL4z1umuNDthuV2T03u1ugun9OM45l6W7qNMW38J2BrvxhmDKQnS1ud6iGIwEuEeNcbbRyFND4poUK1j4JMrcBGcUfi2d+XYSldqnnzIk4IAp4sL8Oe1vZQP6kcJgALCnFq4gSvHVjp4Yilu15sQUVOfVzyIF6snMK3bG8+tPqvooNM/LKIKZ0OznGiA6ouQd4/GeIjElqNgaCRwRlzqQQL+dzt+TNLGGKL7K6S2xw4BfoqM1uJyTGa3hwD2Rk5RZr9xzkNleyu34JZENU8FoNZt/unrl0+qdLY+KqLW2wg+ttSPUF5c+8Hihw++9NraqqtvwlfX2B6ezzCWz7ivp/q3eZ84/Yo9hCfwGhytBTIm4z4H32e+oy1J5iWRSGebnjL/2GEcwrMbfiRkrGnrZyJdLJYjxf8KjlFsCBeVfr6dyj+rAx/hlH4D5ajMEGGIdB24vvb8t84pXT1zX2SQp4pII3M9j7rhBRtDa2VhwEPeIOgx7emDP/+guE/dVaO6LB8S9oq8CqcfYa9YdVFqBN67hmYl16gFQ8OBRB+O+DH5hT4Ir9G+m2zGLgbeMTRLzx2dz8LCOT2k0kEBXFDqepRPfrCyHNYm1iQ9COXffwq8qPZIgFrFkchJ9/1k358eZrqQfE9X5gmGCpAPil+tniTgz1RFmAU011lEV9c9CGd5Q1qy5XUQcGvuCI9CrYo0kdiKob2pz7PAbZKgPAXUClCOfkC5d1bazw6GuiO9LYYkyJ2V03FpaZe+GDhgjF3TeORLtW+29QzYAR2IJy8N49J0UU241yTZtYYVVgFRdxK+0AaCh37EQje5xigYKiAYuhl4BxmBNR63EvDXkFMUxyd8njiVZ7KleCXwMtL6kTs4PQulO2l0z4yUFqZV71qxnBe8L+E78ry0DjXOegXcB1AOlREMLUB6KLyPNFAPRTqzXUty15efE/D/NqdjAtKEGcUTq8apdW7LUIXJGHsZsMe09QrkHcx9SFf7Dofj+RhauElsqBu/6od76w/gFSGZ4wOU/Xcsu3PwlO4LL9xcNwK1+b1o4Xg+tbdvb2WJenDx9LFiPi94Z+Kr+Z48/jSb7T2QzmI3p00Y/IyAP7OINtlGjKjnecrNQC9Ds9bHFklmaK+Ofj9mHvLbNcfEpxhAES5VTi+lr7rndtTqXbglQD14PlDqdg0t+HDsEbf0f4RoeaxWRSRS4fTvVucVi4VrmHn1eeL7/Ml7jwLlGURNt3ac2L5FwJ/uF7o6HjGMdTzffcigLs2QytBeB1wHYNq6CrgpjwVZxO9WD1duOX+Dy8LSh1Gi25moh0jp1HsvWBz4/ZundVVxuFtb3oIe09a7VbulM/Z74unyNb7d15wn5lPuvYbq3I0If5X0QwTVIN1U/5iBo/jguN+9yfyt6tf8pwuejDf5wprB43eG1WHA+PhKaWmeDM3K1EicEWaM3yyno6i7HyJDJVfdAnyH9wN8edwWT0YfSkhrNfDko/akfm5EmQu7+nON2APcQ7DiQRDXAtOQX7TsH1d9P9Lx+lVgfivhh1Lhl8gw8LXRMa4i89BE5UhjQy14ArergpCdr/OKXwD+ZmjWgfhKx83F53iYtv55D+X5WdprPRMWCIZUpJDUHzmbKoBtHXE5uSPwwppBw3aEh28VeAMMzWphK87v23btwwSBW5U0N+B3kKFid+Sa0ExwIDLwXuSXLxM6E3Q6xs55Y6xy14S1SQ0Spq13QfoCf5eWYe+OC/z6jfPPPup1vU3BSSovdArGPmZf1MVFnS/wJtd6+KIK/ERwaApDd2fUEe+4Q51XvFjBWRJ150mIvGesaetne/CuwNsM/BB5Qy1ZlJiGW+GLOvKDgDkej9vBG0ArH77Ia+HJtPUewCfAMkOzPpdrenKNqP34KHCLoVlzU5XNbw8KeSmq4ARTG7EY+H1rTIX8X4ob/WQ/7TBt/SHgwtYCUDcg32dsGBDRz4p+amHa+mTgQdrgw/WpHrDOANPWz0aGDDYMzVqUbr0TjM1jmLbeGxn/4x5Ds9pys+8EY/MVUUXLQWChoVnpfC+3GToBY/P6RNYhMG29K9K6tMzQrOmZtJHfjFUiINyGoMufCkQ/tboHWGBo1sRM28lvxiL2eqW7j4kNOB9g2vqNyNsFzxiadU172srrc6z67pSJXtfKotmPjJqHGn62zLh1Za5p6iiYtv5LoAy4qZWwCWkhbzew2bOfeEzUdf82TgFel0OguOCJL5WV3TU/17RlE6atdwf+AUwARhua9U422s1Lxs6ePecLyLgPiTC8rOyuLW1pL19h2vqjwI3IIC43Z9Nwka9L8bQUeZNJ4hdj2vpQ4KChWbkPPpYCpq1PRH59owtwo6FZi7P9jHwVnranyNuWIm8ycNi09Qdz3YFEMG19oGnry5DXRhYZmtW/I5gK+bsUDwB2Jch6DzinrOyuVB4UN9EUg/BJ4DeGZlWQQ5i2riO9Oi4HVgC3GZr1cUc+My8ZCzB79pxzkB+fn4w0BswD7ikru6synfqmrV8HBJAe/i4y4ujvU3kdZBPRT8HciYyIXo2MsFZuaNaq9rSbLvKWsQ2YPXvOKUBtWdld+zKpb9r6qcAtyIDafuSsfx74P0OzNmeTVtPWJyHlg4nImIYfIl+mXx/rcct7xmYT0RhOX0HeTuuJ9NfdhLyAtRbJiI+Bw8m0XaatFyLDAJ0GnA5cgLwcfgoyGvhOZHi9OYZmZeqX3G58qhgbC9PWhwGXIJf6M5De+keRzt21SN+pemQQZEHTV7l6IKXZhvB7u5AfbVyGdAfNC8eATy1jG2Da+hnIuP+jkcztQtMdTA+5PwuaBwmNIBm/C+nxvzbXAtoJnMAJdGb8P4v3CXogjnvuAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE3LTA1LTI2VDAxOjM3OjU2LTA0OjAwciT+/wAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxNy0wNS0yNlQwMTozNzo1Ni0wNDowMAN5RkMAAAAZdEVYdFNvZnR3YXJlAEFkb2JlIEltYWdlUmVhZHlxyWU8AAAAAElFTkSuQmCC',
            },
            /**/
            'barret_ozefagusu': {
                title: "Barret Özefagusu",
                section: ['Gastroskopi'],
                //data: 'data:image/png;base64,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',
            },
            /**/
            'safra_yolu_tasi': {
                title: "Safra Yolu Taşı",
                section: ['BatinUS', 'BatinPelvisBT', 'BatinPelvisMR', 'MRCP', 'ERCP', 'PerianalUS'],
                //data: 'data:image/png;base64,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',
            },
            /**/
            'inflamasyon_siddeti': {
                title: "İnflamasyon Şiddeti",
                section: ['Kolonoskopi', 'D-Balon', 'Kapsül'],
                //data: 'data:image/png;base64,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',
            },
            /**/
            'inflasmasyon_creeping_fat': {
                title: "İnflamasyon (Creeping Fat)",
                section: ['BatinUS', 'MREnterografi', 'MREnteroklizis', 'PerianalMR', 'PerianalUS'],
                //data: 'data:image/png;base64,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',
            },
            /**/
            'sfinkter_hasari': {
                title: "Sfinkter Hasarı",
                section: ['BatinPelvisBT', 'PerianalMR', 'PerianalUS'],
                url: '/modals/sfinkter.hasari.html'
                    //data: 'data:image/png;base64,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',
            },
            /**/
            'lap': {
                title: "LAP",
                section: ['On', 'BasBoyun', 'BatinUS', 'BatinPelvisBT', 'BatinPelvisMR', 'MREnterografi', 'MREnteroklizis', 'PerianalMR', 'PerianalUS'],
                url: '/modals/lap.html'
                    //data: 'data:image/png;base64,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',
            },
            /**/
            'perforasyon': {
                title: "Perforasyon",
                section: ['BatinUS', 'Enteroklizis', 'BatinPelvisBT', 'BatinPelvisMR', 'MREnterografi', 'MREnteroklizis', 'OzefagusMideDuedonumGrafisi'],
                //data: 'data:image/png;base64,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',
            },
            /**/
            'anal_fissur': {
                title: "Anal Fissür",
                section: ['PerianalUS', 'Perianal', 'OzefagusMideDuedonumGrafisi'],
                data: 'data:image/png;base64,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',
                url: '/modals/anal.fissur.html'
            },
            /**/
            'perianal_apse': {
                title: "Perianal Apse",
                section: ['Perianal', 'BatinUS', 'BatinPelvisBT', 'BatinPelvisMR', 'PerianalMR', 'PerianalUS'],
                url: '/modals/perianal.apse.html'
                    //data: 'data:image/png;base64,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',
            },
            /**/
            'toksik_megakolon': {
                title: "Toksik Megakolon",
                section: ['BatinUS', 'BatinPelvisBT', 'BatinPelvisMR', 'MREnterografi', 'MREnteroklizis'],
                url: '/modals/toksik.megakolon.html'
                    //data: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHYAAABhCAYAAAADdFUyAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QA/wD/AP+gvaeTAAAAB3RJTUUH4QUaASU4J7tYQgAAFSxJREFUeNrtnXmcFNW1x7+3qmdhm6FZlU1Q4vqACAhS6isBifoSjTTiFkOMUXFJMomF8WlMNKuJpjQkErfwniSRxAFbE5O8IAEpwBIEFBMEF0CQfXF6GJhhZrqr6v1xe2Z6erp7enp66B7k9/nM5zN9tzr3nrr3nnvOuafgBE7gBDoPRK4JSBemrU8Cboz+fMLQrLdyTVM+w5drAtqA84GvRv9fBpxgbAoouSagDaiI+d/NNTH5js7E2OqY/7vkmph8R2dairfG/D8WeBbAtPVvAZ8HhgBbgPmGZv0h18TmGp1JeCoEagA1mvQUcB4wJkHxZw3Nui3NdrtF2/kPYBQwAOgNdAUKYsbIAeqRK8dOYA+wDnjT0KwPcj0+8eg0jAUwbf2bwOw0i99taNbjCdpQgGuBK4DPAv2AMHAY2I1k2G4gBFRG8wC6AT2BXsAwoC/QB+iOZPhHwGLgFUOz3s71WHUqxgKYtn4d8AzQo5Winxia1Sdapxj4GjAZGA0UA5uAlcA/kLMuTAYwbX0IcsZfAvwn8kXZDywBFhiatSIX49TpGAuNg7kaOKmVoo8gGdkPuUe/Aaw1NGtpB9LWF8ngicDZwEDgdeCHhmZtO1Zj1CkZC2Da+izg0TSKzgV+kyuFhmnrVwL/DZwLLAdmGJq1r6Of25kZezvwZCvFvm5o1pxc0xqldzTwMKAD84AyQ7NqO+p5nekcG4/RaZSpzDWRDTA06y1Dsy4FrkLu9TtMW7+lo57XKWdsVLLdh5RKk8EFhhiatSvX9Cbpw6XALwA/EDA0681stt9ZZ+xNpGYqwMZ8ZSqAoVmLDM0aAfwNWG3a+rez2X6nY6xp6xOQb3pr6BRGAkOzZgKTgMdMW385W+3m3VJs2noB8EWkFugAUsvjAScj96ZAmk2NNDTr37nuTxv6fQpgI7Vrlxiatb097eUjY99EHvjbg+8YmpXOUSjvYNr6XOBm4ExDs97PtJ28Yqxp66OA9cD7gIl8eyfTZIdNBy8amnV1rvvSznH4CXA/7Vh18o2xLwBXGZpVFJc+HpgPnNpKE69GjxSdHqatPwZ8GxhhaNaGttbPN+HpYuQhvhkMzVoNnAXch1S0743JrkR6VMw6Xpga7fPdSIPHv01bH9DW+vk2YzcC3zI069VWyvmA05AmvO2GZlWn035nRMzMLWyLoSLfDO1VpOEdYWhWBLkPH/cwNOtu09YvBnbQutGjEfm2FHtI4/YJxMDQrNFAf9PWg+nWyTfGdss1AXmMQcBU09YvT6dw3jDWtPVrgBFIm+kJxCGqHr0S+HtUxkiJrAtPUYvFRUgfIa+V4g35w5BqtZ8ZmnVfRg8OhsbRUtV4GwH/e9nuYxq03A9cHtO/Q8DVBPx17W3atPUdwDZDsy5KVS5rwlNUJfYW0lqxGekrlM6LU4i01Ew1NOvldpAwEPlCxaJ3tvrXRvwncGFcmppJQwkwGthv2voXDM36a7JCWWGsaesnIV0/FwBfMTSrPmtDFKwYBGIUsIaAf3+KkjUJ0to9QzJEvIdEBa2vXmnB0KwDpq3fC/yRFH5f2dpjHwYcQ7OuzzJTrwSxDfgrsJVgaELW2j62cMkSYwEMzXoE2G7a+k3JymSLsaOBf3bAgDxE0xLWDbxnkhd100zLCbLK2CgeJ4XPV7YY+2/kpaksQ0TifvdMWtQtBeHEFHVk2vGL/wX6mLZ+Q6LMbDH2m0CvqBI/e3BKYwQODyKlSadgoTji4sYcg91uFIkjEY5TGJrlAg8gGdwCWTvuRC0wq5CCwnogQgYvjoPKYN/moq3hsx/57t4X7wNFQ9SCVwBe0ZZ7+8+4eUzx8h9sqz8zoggHges7o2j92z8+8NSyVVXX/xlfpWwo0rN+Qsn8qx7oe8eN79V9dr+HYszSlh2btTkYmgfMiEnZBwwh4M+e/NE07h4w3dCshbHpWVNQRC0wRcjLUkVInW9BW/9UnILDbs/CsFesIOrngvIiUA4sBPdXtW53pcbtXqSKSEOdQprfsYlFxEP4PJQZgGPaensN+JnCpeM2/JeAH8cn5pV1pz0ofLFySj1FryKirrpeMYXUf7Z+Wuk7AI/Yk8pVnOkeyoBZ2mt7OpSYljN2D3LGZn1rMG19JLAOT/Q1LlhW2ZCeNyrF9qLe666gxFjvlGrq3ZJGg8J3tKXXeIjNPurLc01rNmFo1r+A1Qhvamz6ccNYlErwYmUtFXwVzYoUiPplpxZuvLBtDWcFHtk/7sRiJdJJoRH5Zo9tjpf2F+EVNL18IuwxtV+SaxGFSC1mzLvqNdfi9Vb3/taquWoFC58ei6dORK0cAUp/5Fm5BtiIVIuuJODfncWeOMTvscHQaUh98vnIK5kqcARpZ14DBAn4092XFwHfj03Ib8Y6pX9HqR4jRQEPnB7bkHdaE5Tt4aFWxY2f1yhDdHl5R8l39+0etL1uzIXgzsNXCV6LBeuKhooEQ38AFhLw/yULPSkg4JczNhiahnR4/0IrdXZF9+rfEvB/1ErZVcBgc+15Zxlj12yCNBhr2npPZBiAjl5OAHBROatwnVhSc9WOx/crpXiFpYgwoIJb3OuGpQ+UXF/yxJBNdfIie0/1gPD79h+6f+8K9cOjF4Fa2bw5gGDluUcjJa9uDw/qg1IDoi4RU2MhgC8DXyYYWgNcR8C/lcyxU9IR+hXwjTTrDER6KhoEQ5cR8C9LVtDQrKOmrRfhqVOR935TM9a09fnA9cgzabasEymh4LAzfKoY4vvoVtRD63BLx0BYnmN9tW+OLFoz5YAzYKEiHE/gEXL6ir6+3UuGFm6Y82H1Rc2pDPjXEQydC95bKIdiMtp0GDgPeJtgaAoBf6b3awoJhpYgTZNtRRHwGsHQxQT8Vopym3CVRl16Usaatr4dGY/hCuDdaNkOPR55CDwEgws2i8U103bjlN6AEjXQiDBESk5/p27coi8Vv3HGwcjJeAh6qftEGF/V1voRo+JEwUqCoe8h9c2JEAHeRF6IDkf7eiGJvThKgNUEQxNTzZwUGJkkfStSmVOBNHeeA5yZpOxSgqF+BPyfJMlfh7xBIYcrUQnT1uchL+jm9py7sH41ypFxjXus23UrVxeflrDsAu9zqFWLYvbYMIn9p9YgQx28QsDf3LwWDPVEeilcASRzOj+fgH91SrpbnmPjMR8oJ+D/c4K6Y4A7kbcB4vEKAf+ViRo0bf2LKJGn8ZSTjQkrvGQzdgYws618yDrUqkiTZCtATaH7VatEnBYzjqkeIB4i4P9B0jYC/krgd8DvCIa+AjyXoNRLyNmdKW4k4H8+BQ3rgK8RDG0BfhKXewXBkJ+AP5Sg5jt4ig9f/TBgayoJ4kg7iM8OPJH6dzM4JD6WR2U+x39HSqbGI+CfB0xNkHMywVCmL/1zKZna/Pk/BRLtqTckqbEbqMcTp0FyBcVG4EcZEp89eF2UJkHcA68w+YsY8dNSaHcBH4T9S5kunmrz8wP+l0ksxf6CYKit21QlAX9b7iAB3JEg7b8SFYw6OISRtxKTMvZSYJhp6yujvky5gVfgNq2oCjjdkx7YBxX9C5ySuNQCcHrs4VoxOWMaAv4ngPgoM92R3vltwfcyePYmpIAXi/EEQ8m20BpkhJzEUrGhWTuj90VeA7aZtl6NlGA6XJjyEJQoFaLW6/b1b+49tBG3VEMcAa8Q1Np3H7Evmdpf/fgPB5yBQuAS9grEOcVrlv/qk9ef2lk7svlxx+nB8C4r7/nZ2v4/OuT0mfWJ099TaTTGu8jSHwE/NzRrXgqyfk3Lo8pM4LE2dC1TRcdSYFzM795IH+NtCcrWEfWDSnrcMTRrL3CWaesXAJ8hPXfSdsP1VHqr+3xra/XXcXoEEFETpgiDUzLw/boR607vsf7OfZHBjhDQTTms1ntFu3aGhxe1eO1cqk8u2PyXAiKhg5GTZvpEJHbGO8iwepcBz5m2fquhWcn0yK8gXUhjXTJOJxgaRMC/M41uVQMHMxySqgRpvUjM2IaXtXXNk6FZryMDUB1jlMOCP/aTFhuB5EOk39yJj388F+bJwGcxWDDlc/ji5D01vGTFpV89vAL+3qJ8E+aatj4IGcXlKUOzbm9RIuB3CIYWAdfE5YyhQauUGkejHcgEiVbJVo03+W3d8VXWN/VLgK8quQeCUitkSMPYtMNphbszNGsnchbMNG092axdlSDtM2n2RJD5WCdibDJZowD5EuU5Y+P1uan0u6JGtOyOkrZB3dCsEPAhYCQpkqitXrkeojh0QQb3zHPGtgkJu9JWd5RtwNAkeYnayrfxK0YGZMk7wtoBN9HlZ38bG/EjhaRE6Jkg7XCue90A09b9QAHC2wb5zljhpP4dC7fn1gT557bxiWOAJ5LkjUiQti2HoxOPsxGewFU3QL4z1umuNDthuV2T03u1ugun9OM45l6W7qNMW38J2BrvxhmDKQnS1ud6iGIwEuEeNcbbRyFND4poUK1j4JMrcBGcUfi2d+XYSldqnnzIk4IAp4sL8Oe1vZQP6kcJgALCnFq4gSvHVjp4Yilu15sQUVOfVzyIF6snMK3bG8+tPqvooNM/LKIKZ0OznGiA6ouQd4/GeIjElqNgaCRwRlzqQQL+dzt+TNLGGKL7K6S2xw4BfoqM1uJyTGa3hwD2Rk5RZr9xzkNleyu34JZENU8FoNZt/unrl0+qdLY+KqLW2wg+ttSPUF5c+8Hihw++9NraqqtvwlfX2B6ezzCWz7ivp/q3eZ84/Yo9hCfwGhytBTIm4z4H32e+oy1J5iWRSGebnjL/2GEcwrMbfiRkrGnrZyJdLJYjxf8KjlFsCBeVfr6dyj+rAx/hlH4D5ajMEGGIdB24vvb8t84pXT1zX2SQp4pII3M9j7rhBRtDa2VhwEPeIOgx7emDP/+guE/dVaO6LB8S9oq8CqcfYa9YdVFqBN67hmYl16gFQ8OBRB+O+DH5hT4Ir9G+m2zGLgbeMTRLzx2dz8LCOT2k0kEBXFDqepRPfrCyHNYm1iQ9COXffwq8qPZIgFrFkchJ9/1k358eZrqQfE9X5gmGCpAPil+tniTgz1RFmAU011lEV9c9CGd5Q1qy5XUQcGvuCI9CrYo0kdiKob2pz7PAbZKgPAXUClCOfkC5d1bazw6GuiO9LYYkyJ2V03FpaZe+GDhgjF3TeORLtW+29QzYAR2IJy8N49J0UU241yTZtYYVVgFRdxK+0AaCh37EQje5xigYKiAYuhl4BxmBNR63EvDXkFMUxyd8njiVZ7KleCXwMtL6kTs4PQulO2l0z4yUFqZV71qxnBe8L+E78ry0DjXOegXcB1AOlREMLUB6KLyPNFAPRTqzXUty15efE/D/NqdjAtKEGcUTq8apdW7LUIXJGHsZsMe09QrkHcx9SFf7Dofj+RhauElsqBu/6od76w/gFSGZ4wOU/Xcsu3PwlO4LL9xcNwK1+b1o4Xg+tbdvb2WJenDx9LFiPi94Z+Kr+Z48/jSb7T2QzmI3p00Y/IyAP7OINtlGjKjnecrNQC9Ds9bHFklmaK+Ofj9mHvLbNcfEpxhAES5VTi+lr7rndtTqXbglQD14PlDqdg0t+HDsEbf0f4RoeaxWRSRS4fTvVucVi4VrmHn1eeL7/Ml7jwLlGURNt3ac2L5FwJ/uF7o6HjGMdTzffcigLs2QytBeB1wHYNq6CrgpjwVZxO9WD1duOX+Dy8LSh1Gi25moh0jp1HsvWBz4/ZundVVxuFtb3oIe09a7VbulM/Z74unyNb7d15wn5lPuvYbq3I0If5X0QwTVIN1U/5iBo/jguN+9yfyt6tf8pwuejDf5wprB43eG1WHA+PhKaWmeDM3K1EicEWaM3yyno6i7HyJDJVfdAnyH9wN8edwWT0YfSkhrNfDko/akfm5EmQu7+nON2APcQ7DiQRDXAtOQX7TsH1d9P9Lx+lVgfivhh1Lhl8gw8LXRMa4i89BE5UhjQy14ArergpCdr/OKXwD+ZmjWgfhKx83F53iYtv55D+X5WdprPRMWCIZUpJDUHzmbKoBtHXE5uSPwwppBw3aEh28VeAMMzWphK87v23btwwSBW5U0N+B3kKFid+Sa0ExwIDLwXuSXLxM6E3Q6xs55Y6xy14S1SQ0Spq13QfoCf5eWYe+OC/z6jfPPPup1vU3BSSovdArGPmZf1MVFnS/wJtd6+KIK/ERwaApDd2fUEe+4Q51XvFjBWRJ150mIvGesaetne/CuwNsM/BB5Qy1ZlJiGW+GLOvKDgDkej9vBG0ArH77Ia+HJtPUewCfAMkOzPpdrenKNqP34KHCLoVlzU5XNbw8KeSmq4ARTG7EY+H1rTIX8X4ob/WQ/7TBt/SHgwtYCUDcg32dsGBDRz4p+amHa+mTgQdrgw/WpHrDOANPWz0aGDDYMzVqUbr0TjM1jmLbeGxn/4x5Ds9pys+8EY/MVUUXLQWChoVnpfC+3GToBY/P6RNYhMG29K9K6tMzQrOmZtJHfjFUiINyGoMufCkQ/tboHWGBo1sRM28lvxiL2eqW7j4kNOB9g2vqNyNsFzxiadU172srrc6z67pSJXtfKotmPjJqHGn62zLh1Za5p6iiYtv5LoAy4qZWwCWkhbzew2bOfeEzUdf82TgFel0OguOCJL5WV3TU/17RlE6atdwf+AUwARhua9U422s1Lxs6ePecLyLgPiTC8rOyuLW1pL19h2vqjwI3IIC43Z9Nwka9L8bQUeZNJ4hdj2vpQ4KChWbkPPpYCpq1PRH59owtwo6FZi7P9jHwVnranyNuWIm8ycNi09Qdz3YFEMG19oGnry5DXRhYZmtW/I5gK+bsUDwB2Jch6DzinrOyuVB4UN9EUg/BJ4DeGZlWQQ5i2riO9Oi4HVgC3GZr1cUc+My8ZCzB79pxzkB+fn4w0BswD7ikru6synfqmrV8HBJAe/i4y4ujvU3kdZBPRT8HciYyIXo2MsFZuaNaq9rSbLvKWsQ2YPXvOKUBtWdld+zKpb9r6qcAtyIDafuSsfx74P0OzNmeTVtPWJyHlg4nImIYfIl+mXx/rcct7xmYT0RhOX0HeTuuJ9NfdhLyAtRbJiI+Bw8m0XaatFyLDAJ0GnA5cgLwcfgoyGvhOZHi9OYZmZeqX3G58qhgbC9PWhwGXIJf6M5De+keRzt21SN+pemQQZEHTV7l6IKXZhvB7u5AfbVyGdAfNC8eATy1jG2Da+hnIuP+jkcztQtMdTA+5PwuaBwmNIBm/C+nxvzbXAtoJnMAJdGb8P4v3CXogjnvuAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE3LTA1LTI2VDAxOjM3OjU2LTA0OjAwciT+/wAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxNy0wNS0yNlQwMTozNzo1Ni0wNDowMAN5RkMAAAAZdEVYdFNvZnR3YXJlAEFkb2JlIEltYWdlUmVhZHlxyWU8AAAAAElFTkSuQmCC',
            },
            /**/
            'kisa_bagirsak': {
                title: "Kısa Bağırsak",
                section: ['Enteroklizis', 'BatinPelvisBT', 'BatinPelvisMR', 'MREnterografi', 'MREnteroklizis'],
                url: 'kisa.bagirsak.html'
                    //data: 'data:image/png;base64,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',
            },
            /**/
            'gi_traktus_disi_kitle': {
                title: "GI Traktüs Dışı Kitle",
                section: ['BatinUS', 'Enteroklizis', 'BatinPelvisBT', 'BatinPelvisMR', 'MREnterografi'],
                url: '/modals/gi.traktus.disi.kitle.html',
                data: 'data:image/png;base64,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',
            },
            /**/
            'psk': {
                title: "PSK",
                section: ['BatinUS', 'BatinPelvisBT', 'BatinPelvisMR', 'MRCP'],
                //data: 'data:image/png;base64,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',
            },
            /**/
            'pbs': {
                title: "PBS",
                section: ['BatinUS', 'BatinPelvisBT', 'BatinPelvisMR', 'MRCP'],
                //data: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHYAAABhCAYAAAADdFUyAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QA/wD/AP+gvaeTAAAAB3RJTUUH4QUaASU4J7tYQgAAFSxJREFUeNrtnXmcFNW1x7+3qmdhm6FZlU1Q4vqACAhS6isBifoSjTTiFkOMUXFJMomF8WlMNKuJpjQkErfwniSRxAFbE5O8IAEpwBIEFBMEF0CQfXF6GJhhZrqr6v1xe2Z6erp7enp66B7k9/nM5zN9tzr3nrr3nnvOuafgBE7gBDoPRK4JSBemrU8Cboz+fMLQrLdyTVM+w5drAtqA84GvRv9fBpxgbAoouSagDaiI+d/NNTH5js7E2OqY/7vkmph8R2dairfG/D8WeBbAtPVvAZ8HhgBbgPmGZv0h18TmGp1JeCoEagA1mvQUcB4wJkHxZw3Nui3NdrtF2/kPYBQwAOgNdAUKYsbIAeqRK8dOYA+wDnjT0KwPcj0+8eg0jAUwbf2bwOw0i99taNbjCdpQgGuBK4DPAv2AMHAY2I1k2G4gBFRG8wC6AT2BXsAwoC/QB+iOZPhHwGLgFUOz3s71WHUqxgKYtn4d8AzQo5Winxia1Sdapxj4GjAZGA0UA5uAlcA/kLMuTAYwbX0IcsZfAvwn8kXZDywBFhiatSIX49TpGAuNg7kaOKmVoo8gGdkPuUe/Aaw1NGtpB9LWF8ngicDZwEDgdeCHhmZtO1Zj1CkZC2Da+izg0TSKzgV+kyuFhmnrVwL/DZwLLAdmGJq1r6Of25kZezvwZCvFvm5o1pxc0xqldzTwMKAD84AyQ7NqO+p5nekcG4/RaZSpzDWRDTA06y1Dsy4FrkLu9TtMW7+lo57XKWdsVLLdh5RKk8EFhhiatSvX9Cbpw6XALwA/EDA0681stt9ZZ+xNpGYqwMZ8ZSqAoVmLDM0aAfwNWG3a+rez2X6nY6xp6xOQb3pr6BRGAkOzZgKTgMdMW385W+3m3VJs2noB8EWkFugAUsvjAScj96ZAmk2NNDTr37nuTxv6fQpgI7Vrlxiatb097eUjY99EHvjbg+8YmpXOUSjvYNr6XOBm4ExDs97PtJ28Yqxp66OA9cD7gIl8eyfTZIdNBy8amnV1rvvSznH4CXA/7Vh18o2xLwBXGZpVFJc+HpgPnNpKE69GjxSdHqatPwZ8GxhhaNaGttbPN+HpYuQhvhkMzVoNnAXch1S0743JrkR6VMw6Xpga7fPdSIPHv01bH9DW+vk2YzcC3zI069VWyvmA05AmvO2GZlWn035nRMzMLWyLoSLfDO1VpOEdYWhWBLkPH/cwNOtu09YvBnbQutGjEfm2FHtI4/YJxMDQrNFAf9PWg+nWyTfGdss1AXmMQcBU09YvT6dw3jDWtPVrgBFIm+kJxCGqHr0S+HtUxkiJrAtPUYvFRUgfIa+V4g35w5BqtZ8ZmnVfRg8OhsbRUtV4GwH/e9nuYxq03A9cHtO/Q8DVBPx17W3atPUdwDZDsy5KVS5rwlNUJfYW0lqxGekrlM6LU4i01Ew1NOvldpAwEPlCxaJ3tvrXRvwncGFcmppJQwkwGthv2voXDM36a7JCWWGsaesnIV0/FwBfMTSrPmtDFKwYBGIUsIaAf3+KkjUJ0to9QzJEvIdEBa2vXmnB0KwDpq3fC/yRFH5f2dpjHwYcQ7OuzzJTrwSxDfgrsJVgaELW2j62cMkSYwEMzXoE2G7a+k3JymSLsaOBf3bAgDxE0xLWDbxnkhd100zLCbLK2CgeJ4XPV7YY+2/kpaksQ0TifvdMWtQtBeHEFHVk2vGL/wX6mLZ+Q6LMbDH2m0CvqBI/e3BKYwQODyKlSadgoTji4sYcg91uFIkjEY5TGJrlAg8gGdwCWTvuRC0wq5CCwnogQgYvjoPKYN/moq3hsx/57t4X7wNFQ9SCVwBe0ZZ7+8+4eUzx8h9sqz8zoggHges7o2j92z8+8NSyVVXX/xlfpWwo0rN+Qsn8qx7oe8eN79V9dr+HYszSlh2btTkYmgfMiEnZBwwh4M+e/NE07h4w3dCshbHpWVNQRC0wRcjLUkVInW9BW/9UnILDbs/CsFesIOrngvIiUA4sBPdXtW53pcbtXqSKSEOdQprfsYlFxEP4PJQZgGPaensN+JnCpeM2/JeAH8cn5pV1pz0ofLFySj1FryKirrpeMYXUf7Z+Wuk7AI/Yk8pVnOkeyoBZ2mt7OpSYljN2D3LGZn1rMG19JLAOT/Q1LlhW2ZCeNyrF9qLe666gxFjvlGrq3ZJGg8J3tKXXeIjNPurLc01rNmFo1r+A1Qhvamz6ccNYlErwYmUtFXwVzYoUiPplpxZuvLBtDWcFHtk/7sRiJdJJoRH5Zo9tjpf2F+EVNL18IuwxtV+SaxGFSC1mzLvqNdfi9Vb3/taquWoFC58ei6dORK0cAUp/5Fm5BtiIVIuuJODfncWeOMTvscHQaUh98vnIK5kqcARpZ14DBAn4092XFwHfj03Ib8Y6pX9HqR4jRQEPnB7bkHdaE5Tt4aFWxY2f1yhDdHl5R8l39+0etL1uzIXgzsNXCV6LBeuKhooEQ38AFhLw/yULPSkg4JczNhiahnR4/0IrdXZF9+rfEvB/1ErZVcBgc+15Zxlj12yCNBhr2npPZBiAjl5OAHBROatwnVhSc9WOx/crpXiFpYgwoIJb3OuGpQ+UXF/yxJBNdfIie0/1gPD79h+6f+8K9cOjF4Fa2bw5gGDluUcjJa9uDw/qg1IDoi4RU2MhgC8DXyYYWgNcR8C/lcyxU9IR+hXwjTTrDER6KhoEQ5cR8C9LVtDQrKOmrRfhqVOR935TM9a09fnA9cgzabasEymh4LAzfKoY4vvoVtRD63BLx0BYnmN9tW+OLFoz5YAzYKEiHE/gEXL6ir6+3UuGFm6Y82H1Rc2pDPjXEQydC95bKIdiMtp0GDgPeJtgaAoBf6b3awoJhpYgTZNtRRHwGsHQxQT8Vopym3CVRl16Usaatr4dGY/hCuDdaNkOPR55CDwEgws2i8U103bjlN6AEjXQiDBESk5/p27coi8Vv3HGwcjJeAh6qftEGF/V1voRo+JEwUqCoe8h9c2JEAHeRF6IDkf7eiGJvThKgNUEQxNTzZwUGJkkfStSmVOBNHeeA5yZpOxSgqF+BPyfJMlfh7xBIYcrUQnT1uchL+jm9py7sH41ypFxjXus23UrVxeflrDsAu9zqFWLYvbYMIn9p9YgQx28QsDf3LwWDPVEeilcASRzOj+fgH91SrpbnmPjMR8oJ+D/c4K6Y4A7kbcB4vEKAf+ViRo0bf2LKJGn8ZSTjQkrvGQzdgYws618yDrUqkiTZCtATaH7VatEnBYzjqkeIB4i4P9B0jYC/krgd8DvCIa+AjyXoNRLyNmdKW4k4H8+BQ3rgK8RDG0BfhKXewXBkJ+AP5Sg5jt4ig9f/TBgayoJ4kg7iM8OPJH6dzM4JD6WR2U+x39HSqbGI+CfB0xNkHMywVCmL/1zKZna/Pk/BRLtqTckqbEbqMcTp0FyBcVG4EcZEp89eF2UJkHcA68w+YsY8dNSaHcBH4T9S5kunmrz8wP+l0ksxf6CYKit21QlAX9b7iAB3JEg7b8SFYw6OISRtxKTMvZSYJhp6yujvky5gVfgNq2oCjjdkx7YBxX9C5ySuNQCcHrs4VoxOWMaAv4ngPgoM92R3vltwfcyePYmpIAXi/EEQ8m20BpkhJzEUrGhWTuj90VeA7aZtl6NlGA6XJjyEJQoFaLW6/b1b+49tBG3VEMcAa8Q1Np3H7Evmdpf/fgPB5yBQuAS9grEOcVrlv/qk9ef2lk7svlxx+nB8C4r7/nZ2v4/OuT0mfWJ099TaTTGu8jSHwE/NzRrXgqyfk3Lo8pM4LE2dC1TRcdSYFzM795IH+NtCcrWEfWDSnrcMTRrL3CWaesXAJ8hPXfSdsP1VHqr+3xra/XXcXoEEFETpgiDUzLw/boR607vsf7OfZHBjhDQTTms1ntFu3aGhxe1eO1cqk8u2PyXAiKhg5GTZvpEJHbGO8iwepcBz5m2fquhWcn0yK8gXUhjXTJOJxgaRMC/M41uVQMHMxySqgRpvUjM2IaXtXXNk6FZryMDUB1jlMOCP/aTFhuB5EOk39yJj388F+bJwGcxWDDlc/ji5D01vGTFpV89vAL+3qJ8E+aatj4IGcXlKUOzbm9RIuB3CIYWAdfE5YyhQauUGkejHcgEiVbJVo03+W3d8VXWN/VLgK8quQeCUitkSMPYtMNphbszNGsnchbMNG092axdlSDtM2n2RJD5WCdibDJZowD5EuU5Y+P1uan0u6JGtOyOkrZB3dCsEPAhYCQpkqitXrkeojh0QQb3zHPGtgkJu9JWd5RtwNAkeYnayrfxK0YGZMk7wtoBN9HlZ38bG/EjhaRE6Jkg7XCue90A09b9QAHC2wb5zljhpP4dC7fn1gT557bxiWOAJ5LkjUiQti2HoxOPsxGewFU3QL4z1umuNDthuV2T03u1ugun9OM45l6W7qNMW38J2BrvxhmDKQnS1ud6iGIwEuEeNcbbRyFND4poUK1j4JMrcBGcUfi2d+XYSldqnnzIk4IAp4sL8Oe1vZQP6kcJgALCnFq4gSvHVjp4Yilu15sQUVOfVzyIF6snMK3bG8+tPqvooNM/LKIKZ0OznGiA6ouQd4/GeIjElqNgaCRwRlzqQQL+dzt+TNLGGKL7K6S2xw4BfoqM1uJyTGa3hwD2Rk5RZr9xzkNleyu34JZENU8FoNZt/unrl0+qdLY+KqLW2wg+ttSPUF5c+8Hihw++9NraqqtvwlfX2B6ezzCWz7ivp/q3eZ84/Yo9hCfwGhytBTIm4z4H32e+oy1J5iWRSGebnjL/2GEcwrMbfiRkrGnrZyJdLJYjxf8KjlFsCBeVfr6dyj+rAx/hlH4D5ajMEGGIdB24vvb8t84pXT1zX2SQp4pII3M9j7rhBRtDa2VhwEPeIOgx7emDP/+guE/dVaO6LB8S9oq8CqcfYa9YdVFqBN67hmYl16gFQ8OBRB+O+DH5hT4Ir9G+m2zGLgbeMTRLzx2dz8LCOT2k0kEBXFDqepRPfrCyHNYm1iQ9COXffwq8qPZIgFrFkchJ9/1k358eZrqQfE9X5gmGCpAPil+tniTgz1RFmAU011lEV9c9CGd5Q1qy5XUQcGvuCI9CrYo0kdiKob2pz7PAbZKgPAXUClCOfkC5d1bazw6GuiO9LYYkyJ2V03FpaZe+GDhgjF3TeORLtW+29QzYAR2IJy8N49J0UU241yTZtYYVVgFRdxK+0AaCh37EQje5xigYKiAYuhl4BxmBNR63EvDXkFMUxyd8njiVZ7KleCXwMtL6kTs4PQulO2l0z4yUFqZV71qxnBe8L+E78ry0DjXOegXcB1AOlREMLUB6KLyPNFAPRTqzXUty15efE/D/NqdjAtKEGcUTq8apdW7LUIXJGHsZsMe09QrkHcx9SFf7Dofj+RhauElsqBu/6od76w/gFSGZ4wOU/Xcsu3PwlO4LL9xcNwK1+b1o4Xg+tbdvb2WJenDx9LFiPi94Z+Kr+Z48/jSb7T2QzmI3p00Y/IyAP7OINtlGjKjnecrNQC9Ds9bHFklmaK+Ofj9mHvLbNcfEpxhAES5VTi+lr7rndtTqXbglQD14PlDqdg0t+HDsEbf0f4RoeaxWRSRS4fTvVucVi4VrmHn1eeL7/Ml7jwLlGURNt3ac2L5FwJ/uF7o6HjGMdTzffcigLs2QytBeB1wHYNq6CrgpjwVZxO9WD1duOX+Dy8LSh1Gi25moh0jp1HsvWBz4/ZundVVxuFtb3oIe09a7VbulM/Z74unyNb7d15wn5lPuvYbq3I0If5X0QwTVIN1U/5iBo/jguN+9yfyt6tf8pwuejDf5wprB43eG1WHA+PhKaWmeDM3K1EicEWaM3yyno6i7HyJDJVfdAnyH9wN8edwWT0YfSkhrNfDko/akfm5EmQu7+nON2APcQ7DiQRDXAtOQX7TsH1d9P9Lx+lVgfivhh1Lhl8gw8LXRMa4i89BE5UhjQy14ArergpCdr/OKXwD+ZmjWgfhKx83F53iYtv55D+X5WdprPRMWCIZUpJDUHzmbKoBtHXE5uSPwwppBw3aEh28VeAMMzWphK87v23btwwSBW5U0N+B3kKFid+Sa0ExwIDLwXuSXLxM6E3Q6xs55Y6xy14S1SQ0Spq13QfoCf5eWYe+OC/z6jfPPPup1vU3BSSovdArGPmZf1MVFnS/wJtd6+KIK/ERwaApDd2fUEe+4Q51XvFjBWRJ150mIvGesaetne/CuwNsM/BB5Qy1ZlJiGW+GLOvKDgDkej9vBG0ArH77Ia+HJtPUewCfAMkOzPpdrenKNqP34KHCLoVlzU5XNbw8KeSmq4ARTG7EY+H1rTIX8X4ob/WQ/7TBt/SHgwtYCUDcg32dsGBDRz4p+amHa+mTgQdrgw/WpHrDOANPWz0aGDDYMzVqUbr0TjM1jmLbeGxn/4x5Ds9pys+8EY/MVUUXLQWChoVnpfC+3GToBY/P6RNYhMG29K9K6tMzQrOmZtJHfjFUiINyGoMufCkQ/tboHWGBo1sRM28lvxiL2eqW7j4kNOB9g2vqNyNsFzxiadU172srrc6z67pSJXtfKotmPjJqHGn62zLh1Za5p6iiYtv5LoAy4qZWwCWkhbzew2bOfeEzUdf82TgFel0OguOCJL5WV3TU/17RlE6atdwf+AUwARhua9U422s1Lxs6ePecLyLgPiTC8rOyuLW1pL19h2vqjwI3IIC43Z9Nwka9L8bQUeZNJ4hdj2vpQ4KChWbkPPpYCpq1PRH59owtwo6FZi7P9jHwVnranyNuWIm8ycNi09Qdz3YFEMG19oGnry5DXRhYZmtW/I5gK+bsUDwB2Jch6DzinrOyuVB4UN9EUg/BJ4DeGZlWQQ5i2riO9Oi4HVgC3GZr1cUc+My8ZCzB79pxzkB+fn4w0BswD7ikru6synfqmrV8HBJAe/i4y4ujvU3kdZBPRT8HciYyIXo2MsFZuaNaq9rSbLvKWsQ2YPXvOKUBtWdld+zKpb9r6qcAtyIDafuSsfx74P0OzNmeTVtPWJyHlg4nImIYfIl+mXx/rcct7xmYT0RhOX0HeTuuJ9NfdhLyAtRbJiI+Bw8m0XaatFyLDAJ0GnA5cgLwcfgoyGvhOZHi9OYZmZeqX3G58qhgbC9PWhwGXIJf6M5De+keRzt21SN+pemQQZEHTV7l6IKXZhvB7u5AfbVyGdAfNC8eATy1jG2Da+hnIuP+jkcztQtMdTA+5PwuaBwmNIBm/C+nxvzbXAtoJnMAJdGb8P4v3CXogjnvuAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE3LTA1LTI2VDAxOjM3OjU2LTA0OjAwciT+/wAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxNy0wNS0yNlQwMTozNzo1Ni0wNDowMAN5RkMAAAAZdEVYdFNvZnR3YXJlAEFkb2JlIEltYWdlUmVhZHlxyWU8AAAAAElFTkSuQmCC',
            },
            /**/
            'subkutan_apse': {
                title: "Subkutan Apse",
                section: ['On', 'BatinUS', 'BatinPelvisBT', 'BatinPelvisMR', 'PerianalMR', 'PerianalUS'],
                url: '/modals/subkutan.apse.html'
                    //data: 'data:image/png;base64,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',
            },
            /**/
            'intraabdominal_apse': {
                title: "İntraabdominal Apse",
                section: ['BatinUS', 'BatinPelvisBT', 'BatinPelvisMR', 'PerianalMR', 'PerianalUS'],
                //data: 'data:image/png;base64,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',
            },
            /**/
            'artrit': {
                title: "Artrit",
                section: ['Iskelet'],
                //data: 'data:image/png;base64,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',
            },
            /**/
            'artralji': {
                title: "Artralji",
                section: ['Iskelet'],
                //data: 'data:image/png;base64,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',
            },
            /**/
            'eritema_nodosum': {
                title: "Eritema Nodosum",
                section: ['On', 'Arka'],
                //data: 'data:image/png;base64,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',
            },
            /**/
            'piyoderma_gangrenozum': {
                title: "Piyoderma Gangrenozum",
                section: ['On', 'Arka'],
                //data: 'data:image/png;base64,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',
            },
            /**/
            'dokuntu': {
                title: "Döküntü",
                section: ['On', 'Arka', 'BasBoyun'],
                //data: 'data:image/png;base64,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',
            },
            /**/
            'kirik': {
                title: "Kırık",
                section: ['Iskelet'],
                //data: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHYAAABhCAYAAAADdFUyAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QA/wD/AP+gvaeTAAAAB3RJTUUH4QUaASU4J7tYQgAAFSxJREFUeNrtnXmcFNW1x7+3qmdhm6FZlU1Q4vqACAhS6isBifoSjTTiFkOMUXFJMomF8WlMNKuJpjQkErfwniSRxAFbE5O8IAEpwBIEFBMEF0CQfXF6GJhhZrqr6v1xe2Z6erp7enp66B7k9/nM5zN9tzr3nrr3nnvOuafgBE7gBDoPRK4JSBemrU8Cboz+fMLQrLdyTVM+w5drAtqA84GvRv9fBpxgbAoouSagDaiI+d/NNTH5js7E2OqY/7vkmph8R2dairfG/D8WeBbAtPVvAZ8HhgBbgPmGZv0h18TmGp1JeCoEagA1mvQUcB4wJkHxZw3Nui3NdrtF2/kPYBQwAOgNdAUKYsbIAeqRK8dOYA+wDnjT0KwPcj0+8eg0jAUwbf2bwOw0i99taNbjCdpQgGuBK4DPAv2AMHAY2I1k2G4gBFRG8wC6AT2BXsAwoC/QB+iOZPhHwGLgFUOz3s71WHUqxgKYtn4d8AzQo5Winxia1Sdapxj4GjAZGA0UA5uAlcA/kLMuTAYwbX0IcsZfAvwn8kXZDywBFhiatSIX49TpGAuNg7kaOKmVoo8gGdkPuUe/Aaw1NGtpB9LWF8ngicDZwEDgdeCHhmZtO1Zj1CkZC2Da+izg0TSKzgV+kyuFhmnrVwL/DZwLLAdmGJq1r6Of25kZezvwZCvFvm5o1pxc0xqldzTwMKAD84AyQ7NqO+p5nekcG4/RaZSpzDWRDTA06y1Dsy4FrkLu9TtMW7+lo57XKWdsVLLdh5RKk8EFhhiatSvX9Cbpw6XALwA/EDA0681stt9ZZ+xNpGYqwMZ8ZSqAoVmLDM0aAfwNWG3a+rez2X6nY6xp6xOQb3pr6BRGAkOzZgKTgMdMW385W+3m3VJs2noB8EWkFugAUsvjAScj96ZAmk2NNDTr37nuTxv6fQpgI7Vrlxiatb097eUjY99EHvjbg+8YmpXOUSjvYNr6XOBm4ExDs97PtJ28Yqxp66OA9cD7gIl8eyfTZIdNBy8amnV1rvvSznH4CXA/7Vh18o2xLwBXGZpVFJc+HpgPnNpKE69GjxSdHqatPwZ8GxhhaNaGttbPN+HpYuQhvhkMzVoNnAXch1S0743JrkR6VMw6Xpga7fPdSIPHv01bH9DW+vk2YzcC3zI069VWyvmA05AmvO2GZlWn035nRMzMLWyLoSLfDO1VpOEdYWhWBLkPH/cwNOtu09YvBnbQutGjEfm2FHtI4/YJxMDQrNFAf9PWg+nWyTfGdss1AXmMQcBU09YvT6dw3jDWtPVrgBFIm+kJxCGqHr0S+HtUxkiJrAtPUYvFRUgfIa+V4g35w5BqtZ8ZmnVfRg8OhsbRUtV4GwH/e9nuYxq03A9cHtO/Q8DVBPx17W3atPUdwDZDsy5KVS5rwlNUJfYW0lqxGekrlM6LU4i01Ew1NOvldpAwEPlCxaJ3tvrXRvwncGFcmppJQwkwGthv2voXDM36a7JCWWGsaesnIV0/FwBfMTSrPmtDFKwYBGIUsIaAf3+KkjUJ0to9QzJEvIdEBa2vXmnB0KwDpq3fC/yRFH5f2dpjHwYcQ7OuzzJTrwSxDfgrsJVgaELW2j62cMkSYwEMzXoE2G7a+k3JymSLsaOBf3bAgDxE0xLWDbxnkhd100zLCbLK2CgeJ4XPV7YY+2/kpaksQ0TifvdMWtQtBeHEFHVk2vGL/wX6mLZ+Q6LMbDH2m0CvqBI/e3BKYwQODyKlSadgoTji4sYcg91uFIkjEY5TGJrlAg8gGdwCWTvuRC0wq5CCwnogQgYvjoPKYN/moq3hsx/57t4X7wNFQ9SCVwBe0ZZ7+8+4eUzx8h9sqz8zoggHges7o2j92z8+8NSyVVXX/xlfpWwo0rN+Qsn8qx7oe8eN79V9dr+HYszSlh2btTkYmgfMiEnZBwwh4M+e/NE07h4w3dCshbHpWVNQRC0wRcjLUkVInW9BW/9UnILDbs/CsFesIOrngvIiUA4sBPdXtW53pcbtXqSKSEOdQprfsYlFxEP4PJQZgGPaensN+JnCpeM2/JeAH8cn5pV1pz0ofLFySj1FryKirrpeMYXUf7Z+Wuk7AI/Yk8pVnOkeyoBZ2mt7OpSYljN2D3LGZn1rMG19JLAOT/Q1LlhW2ZCeNyrF9qLe666gxFjvlGrq3ZJGg8J3tKXXeIjNPurLc01rNmFo1r+A1Qhvamz6ccNYlErwYmUtFXwVzYoUiPplpxZuvLBtDWcFHtk/7sRiJdJJoRH5Zo9tjpf2F+EVNL18IuwxtV+SaxGFSC1mzLvqNdfi9Vb3/taquWoFC58ei6dORK0cAUp/5Fm5BtiIVIuuJODfncWeOMTvscHQaUh98vnIK5kqcARpZ14DBAn4092XFwHfj03Ib8Y6pX9HqR4jRQEPnB7bkHdaE5Tt4aFWxY2f1yhDdHl5R8l39+0etL1uzIXgzsNXCV6LBeuKhooEQ38AFhLw/yULPSkg4JczNhiahnR4/0IrdXZF9+rfEvB/1ErZVcBgc+15Zxlj12yCNBhr2npPZBiAjl5OAHBROatwnVhSc9WOx/crpXiFpYgwoIJb3OuGpQ+UXF/yxJBNdfIie0/1gPD79h+6f+8K9cOjF4Fa2bw5gGDluUcjJa9uDw/qg1IDoi4RU2MhgC8DXyYYWgNcR8C/lcyxU9IR+hXwjTTrDER6KhoEQ5cR8C9LVtDQrKOmrRfhqVOR935TM9a09fnA9cgzabasEymh4LAzfKoY4vvoVtRD63BLx0BYnmN9tW+OLFoz5YAzYKEiHE/gEXL6ir6+3UuGFm6Y82H1Rc2pDPjXEQydC95bKIdiMtp0GDgPeJtgaAoBf6b3awoJhpYgTZNtRRHwGsHQxQT8Vopym3CVRl16Usaatr4dGY/hCuDdaNkOPR55CDwEgws2i8U103bjlN6AEjXQiDBESk5/p27coi8Vv3HGwcjJeAh6qftEGF/V1voRo+JEwUqCoe8h9c2JEAHeRF6IDkf7eiGJvThKgNUEQxNTzZwUGJkkfStSmVOBNHeeA5yZpOxSgqF+BPyfJMlfh7xBIYcrUQnT1uchL+jm9py7sH41ypFxjXus23UrVxeflrDsAu9zqFWLYvbYMIn9p9YgQx28QsDf3LwWDPVEeilcASRzOj+fgH91SrpbnmPjMR8oJ+D/c4K6Y4A7kbcB4vEKAf+ViRo0bf2LKJGn8ZSTjQkrvGQzdgYws618yDrUqkiTZCtATaH7VatEnBYzjqkeIB4i4P9B0jYC/krgd8DvCIa+AjyXoNRLyNmdKW4k4H8+BQ3rgK8RDG0BfhKXewXBkJ+AP5Sg5jt4ig9f/TBgayoJ4kg7iM8OPJH6dzM4JD6WR2U+x39HSqbGI+CfB0xNkHMywVCmL/1zKZna/Pk/BRLtqTckqbEbqMcTp0FyBcVG4EcZEp89eF2UJkHcA68w+YsY8dNSaHcBH4T9S5kunmrz8wP+l0ksxf6CYKit21QlAX9b7iAB3JEg7b8SFYw6OISRtxKTMvZSYJhp6yujvky5gVfgNq2oCjjdkx7YBxX9C5ySuNQCcHrs4VoxOWMaAv4ngPgoM92R3vltwfcyePYmpIAXi/EEQ8m20BpkhJzEUrGhWTuj90VeA7aZtl6NlGA6XJjyEJQoFaLW6/b1b+49tBG3VEMcAa8Q1Np3H7Evmdpf/fgPB5yBQuAS9grEOcVrlv/qk9ef2lk7svlxx+nB8C4r7/nZ2v4/OuT0mfWJ099TaTTGu8jSHwE/NzRrXgqyfk3Lo8pM4LE2dC1TRcdSYFzM795IH+NtCcrWEfWDSnrcMTRrL3CWaesXAJ8hPXfSdsP1VHqr+3xra/XXcXoEEFETpgiDUzLw/boR607vsf7OfZHBjhDQTTms1ntFu3aGhxe1eO1cqk8u2PyXAiKhg5GTZvpEJHbGO8iwepcBz5m2fquhWcn0yK8gXUhjXTJOJxgaRMC/M41uVQMHMxySqgRpvUjM2IaXtXXNk6FZryMDUB1jlMOCP/aTFhuB5EOk39yJj388F+bJwGcxWDDlc/ji5D01vGTFpV89vAL+3qJ8E+aatj4IGcXlKUOzbm9RIuB3CIYWAdfE5YyhQauUGkejHcgEiVbJVo03+W3d8VXWN/VLgK8quQeCUitkSMPYtMNphbszNGsnchbMNG092axdlSDtM2n2RJD5WCdibDJZowD5EuU5Y+P1uan0u6JGtOyOkrZB3dCsEPAhYCQpkqitXrkeojh0QQb3zHPGtgkJu9JWd5RtwNAkeYnayrfxK0YGZMk7wtoBN9HlZ38bG/EjhaRE6Jkg7XCue90A09b9QAHC2wb5zljhpP4dC7fn1gT557bxiWOAJ5LkjUiQti2HoxOPsxGewFU3QL4z1umuNDthuV2T03u1ugun9OM45l6W7qNMW38J2BrvxhmDKQnS1ud6iGIwEuEeNcbbRyFND4poUK1j4JMrcBGcUfi2d+XYSldqnnzIk4IAp4sL8Oe1vZQP6kcJgALCnFq4gSvHVjp4Yilu15sQUVOfVzyIF6snMK3bG8+tPqvooNM/LKIKZ0OznGiA6ouQd4/GeIjElqNgaCRwRlzqQQL+dzt+TNLGGKL7K6S2xw4BfoqM1uJyTGa3hwD2Rk5RZr9xzkNleyu34JZENU8FoNZt/unrl0+qdLY+KqLW2wg+ttSPUF5c+8Hihw++9NraqqtvwlfX2B6ezzCWz7ivp/q3eZ84/Yo9hCfwGhytBTIm4z4H32e+oy1J5iWRSGebnjL/2GEcwrMbfiRkrGnrZyJdLJYjxf8KjlFsCBeVfr6dyj+rAx/hlH4D5ajMEGGIdB24vvb8t84pXT1zX2SQp4pII3M9j7rhBRtDa2VhwEPeIOgx7emDP/+guE/dVaO6LB8S9oq8CqcfYa9YdVFqBN67hmYl16gFQ8OBRB+O+DH5hT4Ir9G+m2zGLgbeMTRLzx2dz8LCOT2k0kEBXFDqepRPfrCyHNYm1iQ9COXffwq8qPZIgFrFkchJ9/1k358eZrqQfE9X5gmGCpAPil+tniTgz1RFmAU011lEV9c9CGd5Q1qy5XUQcGvuCI9CrYo0kdiKob2pz7PAbZKgPAXUClCOfkC5d1bazw6GuiO9LYYkyJ2V03FpaZe+GDhgjF3TeORLtW+29QzYAR2IJy8N49J0UU241yTZtYYVVgFRdxK+0AaCh37EQje5xigYKiAYuhl4BxmBNR63EvDXkFMUxyd8njiVZ7KleCXwMtL6kTs4PQulO2l0z4yUFqZV71qxnBe8L+E78ry0DjXOegXcB1AOlREMLUB6KLyPNFAPRTqzXUty15efE/D/NqdjAtKEGcUTq8apdW7LUIXJGHsZsMe09QrkHcx9SFf7Dofj+RhauElsqBu/6od76w/gFSGZ4wOU/Xcsu3PwlO4LL9xcNwK1+b1o4Xg+tbdvb2WJenDx9LFiPi94Z+Kr+Z48/jSb7T2QzmI3p00Y/IyAP7OINtlGjKjnecrNQC9Ds9bHFklmaK+Ofj9mHvLbNcfEpxhAES5VTi+lr7rndtTqXbglQD14PlDqdg0t+HDsEbf0f4RoeaxWRSRS4fTvVucVi4VrmHn1eeL7/Ml7jwLlGURNt3ac2L5FwJ/uF7o6HjGMdTzffcigLs2QytBeB1wHYNq6CrgpjwVZxO9WD1duOX+Dy8LSh1Gi25moh0jp1HsvWBz4/ZundVVxuFtb3oIe09a7VbulM/Z74unyNb7d15wn5lPuvYbq3I0If5X0QwTVIN1U/5iBo/jguN+9yfyt6tf8pwuejDf5wprB43eG1WHA+PhKaWmeDM3K1EicEWaM3yyno6i7HyJDJVfdAnyH9wN8edwWT0YfSkhrNfDko/akfm5EmQu7+nON2APcQ7DiQRDXAtOQX7TsH1d9P9Lx+lVgfivhh1Lhl8gw8LXRMa4i89BE5UhjQy14ArergpCdr/OKXwD+ZmjWgfhKx83F53iYtv55D+X5WdprPRMWCIZUpJDUHzmbKoBtHXE5uSPwwppBw3aEh28VeAMMzWphK87v23btwwSBW5U0N+B3kKFid+Sa0ExwIDLwXuSXLxM6E3Q6xs55Y6xy14S1SQ0Spq13QfoCf5eWYe+OC/z6jfPPPup1vU3BSSovdArGPmZf1MVFnS/wJtd6+KIK/ERwaApDd2fUEe+4Q51XvFjBWRJ150mIvGesaetne/CuwNsM/BB5Qy1ZlJiGW+GLOvKDgDkej9vBG0ArH77Ia+HJtPUewCfAMkOzPpdrenKNqP34KHCLoVlzU5XNbw8KeSmq4ARTG7EY+H1rTIX8X4ob/WQ/7TBt/SHgwtYCUDcg32dsGBDRz4p+amHa+mTgQdrgw/WpHrDOANPWz0aGDDYMzVqUbr0TjM1jmLbeGxn/4x5Ds9pys+8EY/MVUUXLQWChoVnpfC+3GToBY/P6RNYhMG29K9K6tMzQrOmZtJHfjFUiINyGoMufCkQ/tboHWGBo1sRM28lvxiL2eqW7j4kNOB9g2vqNyNsFzxiadU172srrc6z67pSJXtfKotmPjJqHGn62zLh1Za5p6iiYtv5LoAy4qZWwCWkhbzew2bOfeEzUdf82TgFel0OguOCJL5WV3TU/17RlE6atdwf+AUwARhua9U422s1Lxs6ePecLyLgPiTC8rOyuLW1pL19h2vqjwI3IIC43Z9Nwka9L8bQUeZNJ4hdj2vpQ4KChWbkPPpYCpq1PRH59owtwo6FZi7P9jHwVnranyNuWIm8ycNi09Qdz3YFEMG19oGnry5DXRhYZmtW/I5gK+bsUDwB2Jch6DzinrOyuVB4UN9EUg/BJ4DeGZlWQQ5i2riO9Oi4HVgC3GZr1cUc+My8ZCzB79pxzkB+fn4w0BswD7ikru6synfqmrV8HBJAe/i4y4ujvU3kdZBPRT8HciYyIXo2MsFZuaNaq9rSbLvKWsQ2YPXvOKUBtWdld+zKpb9r6qcAtyIDafuSsfx74P0OzNmeTVtPWJyHlg4nImIYfIl+mXx/rcct7xmYT0RhOX0HeTuuJ9NfdhLyAtRbJiI+Bw8m0XaatFyLDAJ0GnA5cgLwcfgoyGvhOZHi9OYZmZeqX3G58qhgbC9PWhwGXIJf6M5De+keRzt21SN+pemQQZEHTV7l6IKXZhvB7u5AfbVyGdAfNC8eATy1jG2Da+hnIuP+jkcztQtMdTA+5PwuaBwmNIBm/C+nxvzbXAtoJnMAJdGb8P4v3CXogjnvuAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE3LTA1LTI2VDAxOjM3OjU2LTA0OjAwciT+/wAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxNy0wNS0yNlQwMTozNzo1Ni0wNDowMAN5RkMAAAAZdEVYdFNvZnR3YXJlAEFkb2JlIEltYWdlUmVhZHlxyWU8AAAAAElFTkSuQmCC',
            },
            /**/
            'skar': {
                title: "Skar",
                section: ['On', 'Arka'],
                //data: 'data:image/png;base64,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',
            },
            /**/
            'cilt_ulseri_lezyonu': {
                title: "Cilt Ülseri/Lezyonu",
                section: ['On', 'Arka', 'BasBoyun', 'Perianal'],
                url: '/modals/cilt.ulseri.html'
                    //data: 'data:image/png;base64,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',
            },
            /**/
            'dvt': {
                title: "DVT",
                section: ['On', 'Arka'],
                //data: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHYAAABhCAYAAAADdFUyAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QA/wD/AP+gvaeTAAAAB3RJTUUH4QUaASU4J7tYQgAAFSxJREFUeNrtnXmcFNW1x7+3qmdhm6FZlU1Q4vqACAhS6isBifoSjTTiFkOMUXFJMomF8WlMNKuJpjQkErfwniSRxAFbE5O8IAEpwBIEFBMEF0CQfXF6GJhhZrqr6v1xe2Z6erp7enp66B7k9/nM5zN9tzr3nrr3nnvOuafgBE7gBDoPRK4JSBemrU8Cboz+fMLQrLdyTVM+w5drAtqA84GvRv9fBpxgbAoouSagDaiI+d/NNTH5js7E2OqY/7vkmph8R2dairfG/D8WeBbAtPVvAZ8HhgBbgPmGZv0h18TmGp1JeCoEagA1mvQUcB4wJkHxZw3Nui3NdrtF2/kPYBQwAOgNdAUKYsbIAeqRK8dOYA+wDnjT0KwPcj0+8eg0jAUwbf2bwOw0i99taNbjCdpQgGuBK4DPAv2AMHAY2I1k2G4gBFRG8wC6AT2BXsAwoC/QB+iOZPhHwGLgFUOz3s71WHUqxgKYtn4d8AzQo5Winxia1Sdapxj4GjAZGA0UA5uAlcA/kLMuTAYwbX0IcsZfAvwn8kXZDywBFhiatSIX49TpGAuNg7kaOKmVoo8gGdkPuUe/Aaw1NGtpB9LWF8ngicDZwEDgdeCHhmZtO1Zj1CkZC2Da+izg0TSKzgV+kyuFhmnrVwL/DZwLLAdmGJq1r6Of25kZezvwZCvFvm5o1pxc0xqldzTwMKAD84AyQ7NqO+p5nekcG4/RaZSpzDWRDTA06y1Dsy4FrkLu9TtMW7+lo57XKWdsVLLdh5RKk8EFhhiatSvX9Cbpw6XALwA/EDA0681stt9ZZ+xNpGYqwMZ8ZSqAoVmLDM0aAfwNWG3a+rez2X6nY6xp6xOQb3pr6BRGAkOzZgKTgMdMW385W+3m3VJs2noB8EWkFugAUsvjAScj96ZAmk2NNDTr37nuTxv6fQpgI7Vrlxiatb097eUjY99EHvjbg+8YmpXOUSjvYNr6XOBm4ExDs97PtJ28Yqxp66OA9cD7gIl8eyfTZIdNBy8amnV1rvvSznH4CXA/7Vh18o2xLwBXGZpVFJc+HpgPnNpKE69GjxSdHqatPwZ8GxhhaNaGttbPN+HpYuQhvhkMzVoNnAXch1S0743JrkR6VMw6Xpga7fPdSIPHv01bH9DW+vk2YzcC3zI069VWyvmA05AmvO2GZlWn035nRMzMLWyLoSLfDO1VpOEdYWhWBLkPH/cwNOtu09YvBnbQutGjEfm2FHtI4/YJxMDQrNFAf9PWg+nWyTfGdss1AXmMQcBU09YvT6dw3jDWtPVrgBFIm+kJxCGqHr0S+HtUxkiJrAtPUYvFRUgfIa+V4g35w5BqtZ8ZmnVfRg8OhsbRUtV4GwH/e9nuYxq03A9cHtO/Q8DVBPx17W3atPUdwDZDsy5KVS5rwlNUJfYW0lqxGekrlM6LU4i01Ew1NOvldpAwEPlCxaJ3tvrXRvwncGFcmppJQwkwGthv2voXDM36a7JCWWGsaesnIV0/FwBfMTSrPmtDFKwYBGIUsIaAf3+KkjUJ0to9QzJEvIdEBa2vXmnB0KwDpq3fC/yRFH5f2dpjHwYcQ7OuzzJTrwSxDfgrsJVgaELW2j62cMkSYwEMzXoE2G7a+k3JymSLsaOBf3bAgDxE0xLWDbxnkhd100zLCbLK2CgeJ4XPV7YY+2/kpaksQ0TifvdMWtQtBeHEFHVk2vGL/wX6mLZ+Q6LMbDH2m0CvqBI/e3BKYwQODyKlSadgoTji4sYcg91uFIkjEY5TGJrlAg8gGdwCWTvuRC0wq5CCwnogQgYvjoPKYN/moq3hsx/57t4X7wNFQ9SCVwBe0ZZ7+8+4eUzx8h9sqz8zoggHges7o2j92z8+8NSyVVXX/xlfpWwo0rN+Qsn8qx7oe8eN79V9dr+HYszSlh2btTkYmgfMiEnZBwwh4M+e/NE07h4w3dCshbHpWVNQRC0wRcjLUkVInW9BW/9UnILDbs/CsFesIOrngvIiUA4sBPdXtW53pcbtXqSKSEOdQprfsYlFxEP4PJQZgGPaensN+JnCpeM2/JeAH8cn5pV1pz0ofLFySj1FryKirrpeMYXUf7Z+Wuk7AI/Yk8pVnOkeyoBZ2mt7OpSYljN2D3LGZn1rMG19JLAOT/Q1LlhW2ZCeNyrF9qLe666gxFjvlGrq3ZJGg8J3tKXXeIjNPurLc01rNmFo1r+A1Qhvamz6ccNYlErwYmUtFXwVzYoUiPplpxZuvLBtDWcFHtk/7sRiJdJJoRH5Zo9tjpf2F+EVNL18IuwxtV+SaxGFSC1mzLvqNdfi9Vb3/taquWoFC58ei6dORK0cAUp/5Fm5BtiIVIuuJODfncWeOMTvscHQaUh98vnIK5kqcARpZ14DBAn4092XFwHfj03Ib8Y6pX9HqR4jRQEPnB7bkHdaE5Tt4aFWxY2f1yhDdHl5R8l39+0etL1uzIXgzsNXCV6LBeuKhooEQ38AFhLw/yULPSkg4JczNhiahnR4/0IrdXZF9+rfEvB/1ErZVcBgc+15Zxlj12yCNBhr2npPZBiAjl5OAHBROatwnVhSc9WOx/crpXiFpYgwoIJb3OuGpQ+UXF/yxJBNdfIie0/1gPD79h+6f+8K9cOjF4Fa2bw5gGDluUcjJa9uDw/qg1IDoi4RU2MhgC8DXyYYWgNcR8C/lcyxU9IR+hXwjTTrDER6KhoEQ5cR8C9LVtDQrKOmrRfhqVOR935TM9a09fnA9cgzabasEymh4LAzfKoY4vvoVtRD63BLx0BYnmN9tW+OLFoz5YAzYKEiHE/gEXL6ir6+3UuGFm6Y82H1Rc2pDPjXEQydC95bKIdiMtp0GDgPeJtgaAoBf6b3awoJhpYgTZNtRRHwGsHQxQT8Vopym3CVRl16Usaatr4dGY/hCuDdaNkOPR55CDwEgws2i8U103bjlN6AEjXQiDBESk5/p27coi8Vv3HGwcjJeAh6qftEGF/V1voRo+JEwUqCoe8h9c2JEAHeRF6IDkf7eiGJvThKgNUEQxNTzZwUGJkkfStSmVOBNHeeA5yZpOxSgqF+BPyfJMlfh7xBIYcrUQnT1uchL+jm9py7sH41ypFxjXus23UrVxeflrDsAu9zqFWLYvbYMIn9p9YgQx28QsDf3LwWDPVEeilcASRzOj+fgH91SrpbnmPjMR8oJ+D/c4K6Y4A7kbcB4vEKAf+ViRo0bf2LKJGn8ZSTjQkrvGQzdgYws618yDrUqkiTZCtATaH7VatEnBYzjqkeIB4i4P9B0jYC/krgd8DvCIa+AjyXoNRLyNmdKW4k4H8+BQ3rgK8RDG0BfhKXewXBkJ+AP5Sg5jt4ig9f/TBgayoJ4kg7iM8OPJH6dzM4JD6WR2U+x39HSqbGI+CfB0xNkHMywVCmL/1zKZna/Pk/BRLtqTckqbEbqMcTp0FyBcVG4EcZEp89eF2UJkHcA68w+YsY8dNSaHcBH4T9S5kunmrz8wP+l0ksxf6CYKit21QlAX9b7iAB3JEg7b8SFYw6OISRtxKTMvZSYJhp6yujvky5gVfgNq2oCjjdkx7YBxX9C5ySuNQCcHrs4VoxOWMaAv4ngPgoM92R3vltwfcyePYmpIAXi/EEQ8m20BpkhJzEUrGhWTuj90VeA7aZtl6NlGA6XJjyEJQoFaLW6/b1b+49tBG3VEMcAa8Q1Np3H7Evmdpf/fgPB5yBQuAS9grEOcVrlv/qk9ef2lk7svlxx+nB8C4r7/nZ2v4/OuT0mfWJ099TaTTGu8jSHwE/NzRrXgqyfk3Lo8pM4LE2dC1TRcdSYFzM795IH+NtCcrWEfWDSnrcMTRrL3CWaesXAJ8hPXfSdsP1VHqr+3xra/XXcXoEEFETpgiDUzLw/boR607vsf7OfZHBjhDQTTms1ntFu3aGhxe1eO1cqk8u2PyXAiKhg5GTZvpEJHbGO8iwepcBz5m2fquhWcn0yK8gXUhjXTJOJxgaRMC/M41uVQMHMxySqgRpvUjM2IaXtXXNk6FZryMDUB1jlMOCP/aTFhuB5EOk39yJj388F+bJwGcxWDDlc/ji5D01vGTFpV89vAL+3qJ8E+aatj4IGcXlKUOzbm9RIuB3CIYWAdfE5YyhQauUGkejHcgEiVbJVo03+W3d8VXWN/VLgK8quQeCUitkSMPYtMNphbszNGsnchbMNG092axdlSDtM2n2RJD5WCdibDJZowD5EuU5Y+P1uan0u6JGtOyOkrZB3dCsEPAhYCQpkqitXrkeojh0QQb3zHPGtgkJu9JWd5RtwNAkeYnayrfxK0YGZMk7wtoBN9HlZ38bG/EjhaRE6Jkg7XCue90A09b9QAHC2wb5zljhpP4dC7fn1gT557bxiWOAJ5LkjUiQti2HoxOPsxGewFU3QL4z1umuNDthuV2T03u1ugun9OM45l6W7qNMW38J2BrvxhmDKQnS1ud6iGIwEuEeNcbbRyFND4poUK1j4JMrcBGcUfi2d+XYSldqnnzIk4IAp4sL8Oe1vZQP6kcJgALCnFq4gSvHVjp4Yilu15sQUVOfVzyIF6snMK3bG8+tPqvooNM/LKIKZ0OznGiA6ouQd4/GeIjElqNgaCRwRlzqQQL+dzt+TNLGGKL7K6S2xw4BfoqM1uJyTGa3hwD2Rk5RZr9xzkNleyu34JZENU8FoNZt/unrl0+qdLY+KqLW2wg+ttSPUF5c+8Hihw++9NraqqtvwlfX2B6ezzCWz7ivp/q3eZ84/Yo9hCfwGhytBTIm4z4H32e+oy1J5iWRSGebnjL/2GEcwrMbfiRkrGnrZyJdLJYjxf8KjlFsCBeVfr6dyj+rAx/hlH4D5ajMEGGIdB24vvb8t84pXT1zX2SQp4pII3M9j7rhBRtDa2VhwEPeIOgx7emDP/+guE/dVaO6LB8S9oq8CqcfYa9YdVFqBN67hmYl16gFQ8OBRB+O+DH5hT4Ir9G+m2zGLgbeMTRLzx2dz8LCOT2k0kEBXFDqepRPfrCyHNYm1iQ9COXffwq8qPZIgFrFkchJ9/1k358eZrqQfE9X5gmGCpAPil+tniTgz1RFmAU011lEV9c9CGd5Q1qy5XUQcGvuCI9CrYo0kdiKob2pz7PAbZKgPAXUClCOfkC5d1bazw6GuiO9LYYkyJ2V03FpaZe+GDhgjF3TeORLtW+29QzYAR2IJy8N49J0UU241yTZtYYVVgFRdxK+0AaCh37EQje5xigYKiAYuhl4BxmBNR63EvDXkFMUxyd8njiVZ7KleCXwMtL6kTs4PQulO2l0z4yUFqZV71qxnBe8L+E78ry0DjXOegXcB1AOlREMLUB6KLyPNFAPRTqzXUty15efE/D/NqdjAtKEGcUTq8apdW7LUIXJGHsZsMe09QrkHcx9SFf7Dofj+RhauElsqBu/6od76w/gFSGZ4wOU/Xcsu3PwlO4LL9xcNwK1+b1o4Xg+tbdvb2WJenDx9LFiPi94Z+Kr+Z48/jSb7T2QzmI3p00Y/IyAP7OINtlGjKjnecrNQC9Ds9bHFklmaK+Ofj9mHvLbNcfEpxhAES5VTi+lr7rndtTqXbglQD14PlDqdg0t+HDsEbf0f4RoeaxWRSRS4fTvVucVi4VrmHn1eeL7/Ml7jwLlGURNt3ac2L5FwJ/uF7o6HjGMdTzffcigLs2QytBeB1wHYNq6CrgpjwVZxO9WD1duOX+Dy8LSh1Gi25moh0jp1HsvWBz4/ZundVVxuFtb3oIe09a7VbulM/Z74unyNb7d15wn5lPuvYbq3I0If5X0QwTVIN1U/5iBo/jguN+9yfyt6tf8pwuejDf5wprB43eG1WHA+PhKaWmeDM3K1EicEWaM3yyno6i7HyJDJVfdAnyH9wN8edwWT0YfSkhrNfDko/akfm5EmQu7+nON2APcQ7DiQRDXAtOQX7TsH1d9P9Lx+lVgfivhh1Lhl8gw8LXRMa4i89BE5UhjQy14ArergpCdr/OKXwD+ZmjWgfhKx83F53iYtv55D+X5WdprPRMWCIZUpJDUHzmbKoBtHXE5uSPwwppBw3aEh28VeAMMzWphK87v23btwwSBW5U0N+B3kKFid+Sa0ExwIDLwXuSXLxM6E3Q6xs55Y6xy14S1SQ0Spq13QfoCf5eWYe+OC/z6jfPPPup1vU3BSSovdArGPmZf1MVFnS/wJtd6+KIK/ERwaApDd2fUEe+4Q51XvFjBWRJ150mIvGesaetne/CuwNsM/BB5Qy1ZlJiGW+GLOvKDgDkej9vBG0ArH77Ia+HJtPUewCfAMkOzPpdrenKNqP34KHCLoVlzU5XNbw8KeSmq4ARTG7EY+H1rTIX8X4ob/WQ/7TBt/SHgwtYCUDcg32dsGBDRz4p+amHa+mTgQdrgw/WpHrDOANPWz0aGDDYMzVqUbr0TjM1jmLbeGxn/4x5Ds9pys+8EY/MVUUXLQWChoVnpfC+3GToBY/P6RNYhMG29K9K6tMzQrOmZtJHfjFUiINyGoMufCkQ/tboHWGBo1sRM28lvxiL2eqW7j4kNOB9g2vqNyNsFzxiadU172srrc6z67pSJXtfKotmPjJqHGn62zLh1Za5p6iiYtv5LoAy4qZWwCWkhbzew2bOfeEzUdf82TgFel0OguOCJL5WV3TU/17RlE6atdwf+AUwARhua9U422s1Lxs6ePecLyLgPiTC8rOyuLW1pL19h2vqjwI3IIC43Z9Nwka9L8bQUeZNJ4hdj2vpQ4KChWbkPPpYCpq1PRH59owtwo6FZi7P9jHwVnranyNuWIm8ycNi09Qdz3YFEMG19oGnry5DXRhYZmtW/I5gK+bsUDwB2Jch6DzinrOyuVB4UN9EUg/BJ4DeGZlWQQ5i2riO9Oi4HVgC3GZr1cUc+My8ZCzB79pxzkB+fn4w0BswD7ikru6synfqmrV8HBJAe/i4y4ujvU3kdZBPRT8HciYyIXo2MsFZuaNaq9rSbLvKWsQ2YPXvOKUBtWdld+zKpb9r6qcAtyIDafuSsfx74P0OzNmeTVtPWJyHlg4nImIYfIl+mXx/rcct7xmYT0RhOX0HeTuuJ9NfdhLyAtRbJiI+Bw8m0XaatFyLDAJ0GnA5cgLwcfgoyGvhOZHi9OYZmZeqX3G58qhgbC9PWhwGXIJf6M5De+keRzt21SN+pemQQZEHTV7l6IKXZhvB7u5AfbVyGdAfNC8eATy1jG2Da+hnIuP+jkcztQtMdTA+5PwuaBwmNIBm/C+nxvzbXAtoJnMAJdGb8P4v3CXogjnvuAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE3LTA1LTI2VDAxOjM3OjU2LTA0OjAwciT+/wAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxNy0wNS0yNlQwMTozNzo1Ni0wNDowMAN5RkMAAAAZdEVYdFNvZnR3YXJlAEFkb2JlIEltYWdlUmVhZHlxyWU8AAAAAElFTkSuQmCC',
            },
            /**/
            'odem': {
                title: "Ödem",
                section: ['On', 'Arka', 'BasBoyun', 'Perianal'],
                //data: 'data:image/png;base64,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',
            },
            /**/
            'perianal_ulser': {
                title: "Perianal Ülser",
                section: ['Perianal'],
                //data: 'data:image/png;base64,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',
            },
            /**/
            'hepatomegali': {
                title: "Hepatomegali",
                section: ['On'],
                url: '/modals/hepatomegali.html'
                    //data: 'data:image/png;base64,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',
            },
            /**/
            'splenomegali': {
                title: "Splenomegali",
                section: ['On'],
                url: '/modals/splenomegali.html'
                    //data: 'data:image/png;base64,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',
            },
            /**/
            'asit': {
                title: "Asit",
                section: ['On'],
                //data: 'data:image/png;base64,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',
            },
            /**/
            'sakroileit': {
                title: "Sakroileit",
                section: ['Iskelet'],
                //data: 'data:image/png;base64,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',
            },
            /**/
            'ankilozan_spondilit': {
                title: "Ankilozan Spondilit",
                section: ['Iskelet']
                    //data: 'data:image/png;base64,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',
            },
            /**/
            'oral_aft_ulser': {
                title: "Oral Aft/Ülser",
                section: ['BasBoyun'],
                url: '/modals/oral.aft.ulser.html'
                    //data: 'data:image/png;base64,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',
            },
            /**/
            'maserasyon': {
                title: "Maserasyon",
                section: ['Perianal'],
                url: '/modals/maserasyon.html'
                    //data: 'data:image/png;base64,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',
            },
            /**/
            'tromboze_hemoroid': {
                title: "Tromboze Hemoroid",
                section: ['Perianal']
                    //data: 'data:image/png;base64,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',
            },
            /**/
            'eski_hemoroid': {
                title: "Eski Hemoroid (Skin Tag)",
                section: ['Perianal']
                    //data: 'data:image/png;base64,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',
            },
            /**/
            'dijital_muayene': {
                title: "Dijital Muayene",
                section: ['Perianal']
                    //data: 'data:image/png;base64,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',
            },
            /**/
            'norolojik_bulgu': {
                title: "Nörolojik Bulgu",
                section: ['On', 'Arka', 'BasBoyun']
                    //data: 'data:image/png;base64,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',
            },
            /**/
            'guatr': {
                title: "Guatr",
                section: ['Perianal']
                    //data: 'data:image/png;base64,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',
            },
            /**/
            'rebound': {
                title: "Rebound",
                section: ['On']
                    //data: 'data:image/png;base64,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',
            },
            /**/
            'defans': {
                title: "Defans",
                section: ['On']
                    //data: 'data:image/png;base64,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',
            }


        }

    }); // MODULE

})(Skeleton);
/////////////////////////////////////////////////////////////////////////
//          SKELETON MENU METHOD
/////////////////////////////////////////////////////////////////////////

(function (_) {

    _.MODULE(function () {

        var method = _.menuObject.method;
        var menu = _.menuObject;
        var data = menu.data;
        var pathMethod = _.path.method;
        var collection = _.collection.create;
        var svgGlob = _.svg.globals;
        var skeletonGlobalMethod = _.globalMethod;
        var tooltip = _.tooltip;
        var context = _.contextmenu;
        var dialog = _.dialog;
        var gall = _.gallery;




        //....................................................................................


        // Menude işaretlenecek input checkbox alanlarını belirler ve datayı günceller
        function fillMenuItem() {

            // Veritabanından gelen datayı döngüye sok
            Object.keys(_.data).forEach(function (key) {

                if (!_.Request.section) return;

                // Section bilgisini alalım
                var sect = '$' + _.Request.section;

                // Aktif section değerine eşit bir kayıt varsa al
                if (key.indexOf(sect) != -1) {

                    // Elimize gelen data $...$... şeklinde bir data
                    // İlk dolar işareti bizim hangi section'da olduğumuzu gösteriyor
                    // İkinci dolar işareti menudeki checkbox nesnesinin key değerini veriyor

                    var part = key.split('$');
                    var section = part[1];
                    // Menüde ki checkbox'ın key değeri. Key değerleri benzersiz olduğundan varsa çalıştırılacaktır
                    var inputchk = part[2];

                    // Menu listesinde oluşturulmuş olan tüm nesneleri tarar
                    for (var k = 0; k < menu.objects.length; k++) {

                        // Sıradaki nesneyi al
                        var w = menu.objects[k];

                        // Nesne içerisindeki checkbox nesnesini alır
                        var chk = w.children[0].children[0];

                        // Checkbox nesnesinin key değeri
                        var ky = chk.getAttr('key');

                        // Veritabanında ki key değeri ile bu değer eşleşiyorsa işaretler
                        if (ky == inputchk) {
                            chk.checked = true;
                            w.children[1].remClass('menu-item-locked');
                            
                        }
                    }

                }

            });

        }



        //....................................................................................



        function selectMenuItem(e, selected) {
            for (var i = 0; i < menu.objects.length; i++) {
                var obj = menu.objects[i];
                obj.remClass('selected');
            }
            if (e && selected) {
                e.setClass('selected');
                var key = e.getAttr('key');
                gall.header.children().uploadfilesheadertitle.setHTML(menu.data[key].title);
            } else {
                gall.container.hide();
                menu.selectMenuItem = null;
            }
        }


        //....................................................................................




        function contextmenu(e) {
            e.preventDefault();
            context.method.clear(function () {

                context.method.add({
                    title: 'Bu kaydı sil',
                    action: function () {

                        dialog.show({
                            title: 'Silme işlemi',
                            content: 'Kaydı silmek istediğinize emin misiniz?',
                            button1: {
                                text: 'SİL',
                                action: function () {
                                    // Silinecek nesneyi seç
                                    pathMethod.selectRemovedItem(e);

                                    // Nesneyi sil
                                    pathMethod.removeSelectedClone(e);

                                    // Context menüyü gizle
                                    context.method.hide();

                                    // Dialog penceresindeki butonları pasif yap
                                    dialog.passive();

                                    // Pencereyi gizle
                                    dialog.hide();

                                    //Veritabanını güncelle
                                    _.savechanges();
                                }
                            },
                            button2: {
                                text: 'İPTAL',
                                action: function () {
                                    // Context menüyü gizle
                                    context.method.hide();

                                    // Pencereyi gizle
                                    dialog.hide();
                                }
                            }
                        });

                    }
                });


                // Key değerine göre, ilgili hastalağın açılacak bir popup formu varsa "detayları göster" butonunu aktif yapacağız
                var key = e.target.getAttr('key');
                if (key) {
                    var q = data[key].url || data[key].jsonData;
                    context.method.add({
                        title: 'Detayları göster',
                        action: function () {
                            e.target.trigger('click');
                            // Context menüyü gizle
                            context.method.hide();
                        }
                    });
                }




                context.method.show(e);
            });

            return;
        }


        //....................................................................................




        // Menu deki bir butona tıklandığında yapılacak işlemler
        function itemdown(a) {

            a.preventDefault();

            console.log('Menuden bir ikon seçildi');

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


                // Sürükleme esnasında, eğer geçerli alanlar yoksa kullanıcıya uyarı bilgisi verelim
                if (!isAllow) {

                    tooltip.message('Bu ikonu bırakabileceğiniz bir alan tanımlı değil');
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
                else {
                    // Icon sahneye eklendiğinde, ilgili datanın detaylarının görüntülenebilmesi için tıklama ekliyoruz
                    // Tıklama yapıldığında detayları göster
                    clone.setBind('click', pathMethod.showPathDetails);

                    // Icon üzerine gelindiğinde görünecek mesajı görüntüleyelim
                    clone.setBind('mouseover', function (e) {
                        tooltip.message('Detaylar için tıklayın<span style=\'font-size:11px; display:block;\'> Kaydı silmek için fare ile sağ tıklayın</span>', { ev: e });
                    });

                    // Sağ tuş özelliği ekleyelim
                    clone.setBind('contextmenu', contextmenu);


                    // Nesneyi seçilen nesne olarak işaretle
                    _.selectedObject = clone;

                    // Sürüklenebileceğini belirt
                    _.objectIsDragable = true;

                    // Sürüklenme esnasındaki ilk konumunu ayarla
                    skeletonGlobalMethod.onPress(a);

                    // Nesneyi sahneye ekle
                    _.container.appendChild(clone);

                    // Veritabanını güncelle
                    _.savechanges();

                }

            }

            return;
        }



        //....................................................................................

        function setEventCustom(clone) {
            // Icon sahneye eklendiğinde, ilgili datanın detaylarının görüntülenebilmesi için tıklama ekliyoruz
            // Tıklama yapıldığında detayları göster
            clone.setBind('click', pathMethod.showPathDetails);

            // Icon üzerine gelindiğinde görünecek mesajı görüntüleyelim
            clone.setBind('mouseover', function (e) {
                tooltip.message('Detaylar için tıklayın<span style=\'font-size:11px; display:block;\'> Kaydı silmek için fare ile sağ tıklayın</span>', { ev: e });
            });

            // Sağ tuş özelliği ekleyelim
            clone.setBind('contextmenu', contextmenu);
        }


        method.itemdown = itemdown;
        method.fillMenuItem = fillMenuItem;
        method.selectMenuItem = selectMenuItem;
        method.setEventCustom = setEventCustom;


    });

})(Skeleton);
/////////////////////////////////////////////////////////////////////////
//          SKELETON MENU INIT
/////////////////////////////////////////////////////////////////////////

(function (_) {

    _.MODULE(function () {

        var collection = _.collection.create;
        var menu = _.menuObject;
        var data = _.data;
        var dialog = _.dialog;
        var gall = _.gallery;
        var helper = _.helper.method;



        //....................................................................................


        // Sayfada görüntülenecek menu ekranını oluşturur. Ana katman
        var displayMenu = new collection('div', {
            id: 'skeleton-menu'
        })
            //Sınıf
            .setClass('slidetoright', 'animated', 'flipInY')
            .setBind('mousedown', function (e) { e.preventDefault(); return; });

        menu.container = displayMenu;



        //....................................................................................



        // Menü header bar
        var header = displayMenu.create('div', {
            id: 'skeleton-menu-header'
        })
            .setHTML('Menü');

        var info = header.create('div')
            .setClass('information-woman')
            .setBind('click', function () {
                _.prompter.show({
                    title: 'Bunları biliyor musunuz?',
                    message: [
                        '<i class="ichk_x182 ichk"></i> İlgili hastalıkların en solundaki kutucuğu işaretlediğinizde, o hastalık iskelet üzerinde aktif olur',
                        '<i class="ichk_x182 ichk"></i>-<i class="ichk_x183 ichk"></i> Kutucuğu işaretlediğinizde sağ tarafındaki görsel aktifleşir ve fare ile sürükleyerek iskelet üzerinde kırmızı olarak renklendirilen alanlara bırakabilirsiniz.',
                        '<i class="ichk_x184 ichk"></i> Yeşil ikonun ve hastalık adının bulunduğu alana fare ile tıkladığınızda, ilgili hastalık için dosya yükleyebileceğiniz pencereyi açabilirsiniz'
                    ]
                });
            });




        //....................................................................................



        // Menüde listelenecek kayıtların yeri
        var content = displayMenu.create('div', {
            id: 'skeleton-menu-content'
        });



        //....................................................................................


        // Alt butonun olduğu yer
        var footer = displayMenu
            .create('div', {
                id: 'skeleton-menu-footer'
            })
            // Footer Click
            .setBind('click', function () {
                displayMenu.toggleClass('showhide');
            })
            // Children A
            .create('a')
            // A HTML
            .setHTML('Gizle/Göster');



        //....................................................................................



        // Oluşturulan menuyü body'e ekler
        displayMenu.insert(parent.document.body);



        //....................................................................................



        var ml = menu.data;

        // Tüm menu listesi kayıtlarını tarayalım
        Object.keys(ml).forEach(function (key) {

            // Üzerinde sorgu yapılacak nesne
            var obj = ml[key];

            // Sadece section querystring değerine uygun olanları yükle
            if (obj.section.indexOf(_.Request.section) != -1) {


                //BU ALANDA MENU'DEKİ BUTONLAR YÜKLENMEKTEDİR

                // Sadece resim dosyası olanları ekleyelim
                if (!obj.data) return;

                // Oluşturulacak her bir nesne için özel tanımlama

                var chkName = 'skeleton-chk-n' + menu.objects.length,
                    imgName = 'skeleton-img-n' + menu.objects.length,
                    txtName = 'skeleton-txt-n' + menu.objects.length;


                // Bu adımdan itibaren menüde görünecek her bir kaydın elementleri doldurulmakta
                // UL > li, li, li


                /* UL nesnesi  */

                var ul = new collection('ul', {
                    key: key
                })
                    .setClass('skeleton-menu-item');


                menu.data[key].count = 0;
                menu.data.mainObject = ul;

                //....................................................................................




                /* 1. LI nesnesi  */

                // Input nesnesi
                ul.create('li', {
                    key: key
                })
                    // Class
                    .setClass('menu-item-chk')
                    // Style
                    .setCSS({
                        width: '10%'
                    })
                    // Children Input Checkbox
                    .create('input', {
                        type: 'checkbox',
                        id: chkName,
                        'key': key
                    })
                    /*  .setBind('mouseover', function () {
                          _.prompter.show({
                              title: 'What is this?',
                              message: 'Callback prompt....'
                          });
                      })*/
                    // Input Event
                    .setBind('click', function (ev) {

                        var main = ev.target.parentNode.parentNode;
                        var checkbox = main.children[1];

                        var key = ev.target.getAttr('key');
                        var resp = helper.getCustomizeUpload() + key;

                        // Eğer checkbox işaretliyle hem tabloya ekleyelim hem de image nesnesini sürüklenebilmesi için aktif yapalım
                        if (ev.target.checked) {

                            // Sürüklenebilmesi için kilidi kaldır
                            checkbox.remClass('menu-item-locked');

                            menu.selectedMenuItem = ul;

                            // Menüde seçilmiş olan alanı işaretleyelim
                            menu.method.selectMenuItem(ul, true);

                            // İşaretlenmiş elementin veritabanında karşılığı yoksa oluştur
                            if (!data[resp])
                                data[resp] = [];

                            // Upload penceresini açalım
                            _.gallery.method.show(key);

                            // İşaretlendikten sonra eğer iskelet üzerinde ilgili hastalık hiç yoksa, kullanıcıya bir kereliğine ekranda mesaj gösterelim
                            if (menu.data[key].count == 0) {
                                _.prompter.show({
                                    message: '<b>' + menu.data[key].title + '</b> için iskelet üzerinde hiç nesne yok. İsterseniz sürükleyerek belirli noktalara işaretleme yapabilirsiniz',
                                    closeVisible: false,
                                    timer: 5000
                                });
                            }

                        } else {

                            // Else kısmı bizim için, kullanıcı tiki kaldırdı ve artık bu nesne ile ilgili sahnede hiç bir şey bırakmak istemiyor demektir
                            // Ama tiki gerçekten kaldırabilmemiz için iskelet üzerinde ve nesneye ait dosyalar yüklenmemiş olmalı
                            // Bunun için iskelet üzerinde bırakılmış ikonlar var mı ve dosya upload yapılmış mı kontrol edelim

                            // Veritabanında dosya yüklenmiş kayıt var mı
                            var isData = data[resp];
                            var length = isData ? isData.length : 0;

                            // Sahne üzerinde ilgili nesneden hiç var mı bakalım
                            var isAnyPath = menu.data[key].count;

                            // Adı var ama dizin içeriği boş işe; yani dosya yoksa kaydı da yok ve iskelet üzerinde de hiç bir şey yoksa
                            if (isData && length == 0 && isAnyPath == 0) {
                                delete isData;

                                menu.selectedMenuItem = null;

                                // Menüde seçilmiş olan alanı sıfırlayalım
                                menu.method.selectMenuItem(null);

                                // Icon/Görsel'i pasif yapalım
                                checkbox.setClass('menu-item-locked');
                            }
                            // Yok eğer hem dizin var hem de kayıt bulunuyorsa yada dosya yok ama ikonlar varsa işlemi iptal edip uyarı vereceğiz 
                            else if (isData && length || isAnyPath > 0) {

                                // İşareti hiç kaldırma. Kullanıcı söyleyeceğimiz işlemleri yapsın önce
                                ev.target.checked = true;

                                checkbox.remClass('menu-item-locked');

                                //console.log(isData);
                                // Bir de uyarı penceresi gösterelim
                                // Önce hangi alanla ilgili konuşacaksak onun adını tablodan alalım
                                var nm = menu.data[key].title; // Luminal Darlık gibi

                                // Kullanıcıya gösterilecek text alanı oluşturuluyor

                                var textForPath = isAnyPath > 0 ? '- İskelet üzerinde bırakılmış ' + isAnyPath + ' adet ' + nm + ' nesnesi var<br/>' : '';
                                var textForFile = length > 0 ? '- ' + nm + ' için eklemiş olduğunuz ' + length + ' adet dosya var' : '';

                                // Eğer dosya varsa upload ekranını açalım
                                if (length > 0)
                                    ul.target.children[2].trigger('click');

                                _.prompter.show({
                                    title: 'Yardımınıza ihtiyacım var',
                                    message: nm + ' işaretini kaldırabilmem için aşağıdaki kayıtları kaldırmanız gerekiyor <br/><br/>' + textForPath + textForFile
                                });

                                /* dialog.show({
                                     title: 'Dikkat',
                                     content: 'İşareti kaldırabilmeniz için, bu alan için daha önce yüklemiş olduğunuz görselleri silmeniz gerekmektedir.',
                                     button1: {
                                         text: 'Tamam',
                                         action: function () {
                                             dialog.hide();
                                         }
                                     }
                                 });*/
                            }
                            else
                                checkbox.setClass('menu-item-locked');


                        }


                        // Veritabanını güncelle
                        _.savechanges();


                    }); // CLICK END



                //....................................................................................




                /* 2. LI nesnesi  */

                // Image nesnesi
                var li = ul.create('li', {
                    key: key
                })
                    // Class
                    .setClass('menu-item-img', 'menu-item-locked')
                    // Style
                    .setCSS({
                        width: '20%'
                    }).
                    setBind('mousedown', menu.method.itemdown);

                var img = li.create('img', {
                    key: key,
                    id: imgName,
                    src: obj.data
                })

                    .setCSS({
                        width: '30px',
                        height: '30px'
                    });


                //....................................................................................




                /* 3. LI nesnesi  */


                // Label nesnesi
                ul.create('li', {
                    key: key
                })
                    .setBind('click', function () {

                        // Seçilen menuyü işaretle
                        menu.selectedMenuItem = ul;

                        // Menunun key değerini al
                        var nm = menu.selectedMenuItem.target.getAttr('key');

                        gall.method.show(nm);

                        // Menüde seçilmiş olan alanı işaretleyelim
                        menu.method.selectMenuItem(menu.selectedMenuItem, true);

                    })
                    // Class
                    .setClass('menu-item-text')
                    // Style
                    .setCSS({
                        width: '60%'
                    })
                    // Children Label
                    .create('label', {
                        id: txtName
                    })
                    .setHTML(obj.title);




                //....................................................................................



                // Nesneyi objects/hafıza tablosuna ekler
                menu.objects.push(ul.target);



                //....................................................................................



                // Content alanına UL nesnesini ekler
                content.append(ul.target);



                //....................................................................................



                // Her bir menu kaydı için bir de SVG nesnesi karşılığını tabloda oluşturalım
                // Menüden bir buton sürüklendiğinde, menüde ilgili ID'ye karşılık gelen listeye "clone" adında bir alan daha ekleyip...
                // .. buraya da oluşturacağımız img SVG nesnesini yerleştirelim. 
                // Her seferinde bu nesneyi klonlayarak sahnede gösterebiliriz

                var clone = document.createElementNS('http://www.w3.org/2000/svg', 'image');
                clone.setAttr({
                    id: key,
                    key: key,
                    width: 40,
                    height: 40
                });
                clone.setClass('path2');
                clone.textContent = obj.title;
                clone.setAttributeNS('http://www.w3.org/1999/xlink', 'href', obj.data);

                // Menu listesine kaydet
                obj.clone = clone;

            }



        });


        // Gelen dataya göre menüdeki alanları işaretleyelim
        menu.method.fillMenuItem();


    }); // MODULE


})(Skeleton);
/////////////////////////////////////////////////////////////////////////
//          SKELETON POPUP
/////////////////////////////////////////////////////////////////////////

(function (_) {
    
    _.popup = {
        method:{},
        objects:{},
        // Popup açıldığında veritabanından gelebilecek datalar buraya aktarılacak
        // Kısacası; üzerinde değişiklik yapılacak verimiz
        data:{}
    };

})(Skeleton);
/////////////////////////////////////////////////////////////////////////
//          SKELETON POPUP METHOD
/////////////////////////////////////////////////////////////////////////

(function(_) {

    _.MODULE(function() {

        var method = _.popup.method;
        var popup = _.popup.objects;
        var coll = _.collection.create;
        var helper = _.helper.method;



        //....................................................................................



        function open(url, success) {


            helper.http({
                url: url,
                success: function(data) {

                    create();

                    var text = data;

                    // Yüklenen sayfa içerisinde script tag'ı varsa çalıştır
                    var regex = _.regex.rules.scriptTag;
                    var src = text.match(regex);
                    text = text.replace(regex, '');
                    popup.content.setHTML(text);
                    popup.container.show();


                    popup.header = {
                        title: '',
                        url: url,
                        html: data
                    };

                    if (src) {
                        var _script = new coll('script')
                            .setHTML(src[1])
                            .insert(popup.content.target);

                    }

                    if (success)
                        success();

                }
            });


        }




        //....................................................................................


        function openData(htmlData) {

            create();
            if (typeof htmlData != 'object')
                popup.content.setHTML(htmlData);
            else
                popup.content.append(htmlData);
            popup.container.show();
        }


        //....................................................................................


        function create() {


            // Popup container 
            var container = new coll('div', {
                id: 'skeleton-popup-container'
            });


            // Popup Content
            var content = new coll('div', {
                    id: 'skeleton-popup-content'
                })
                .setClass('animated', 'fadeIn');

            popup.container = container;
            popup.content = content;

            container.target.appendChild(content.target);
            parent.document.body.appendChild(container.target);

        }


        //....................................................................................



        //Formu onayladığında yapılacak işlemler
        function accept() {
            console.log('Kabul edildi', _.data);
        }



        //....................................................................................



        //İptal ettiğinde yapılacak işlemler
        function reject() {
            console.log('Reddedildi');
        }



        //....................................................................................



        function watch() {
            console.log('Takibe alındı');
        }



        //....................................................................................

        // Popup modalın verilerini sıfırlayalım

        function reset() {
            popup.data = null;
        }

        //....................................................................................


        function close() {
            if (popup.container) {
                popup.container.target.parentNode.removeChild(popup.container.target);
                reset();
            }

        }



        //....................................................................................



        _.popup.open = method.open = open;
        _.popup.openData = method.openData = openData;
        _.popup.close = method.close = close;
        _.popup.accept = method.accept = accept;
        _.popup.reject = method.reject = reject;
        _.popup.watch = method.watch = watch;

    }); // MODULE


})(Skeleton);
/////////////////////////////////////////////////////////////////////////
//          SKELETON POPUP INIT
/////////////////////////////////////////////////////////////////////////

(function(_) {


    _.MODULE(function() {


    }); // MODULE

})(Skeleton);
/////////////////////////////////////////////////////////////////////////
//          SKELETON REGEX
/////////////////////////////////////////////////////////////////////////

(function (_) {


    _.regex = {

        // Sorgularda kullanılabilecek regex kurallar listesi
        rules: {

            // Metin içerisindeki <script></script> etiketlerini arar. 
            // Bunu genel olarak XMLRequest sınıfımızdan gelen datalarda aratıyoruz
            scriptTag: /<script[^>]*>([^<]*)<\/script>/,

            // Sadece integer sayılar
            integer: /[0-9]+/,

            // Ondalık sayılar
            float: /[0-9]\.[0-9]/,

            // Sadece metin 
            alpha:/[a-zA-ZığüşöçÖÇŞİÜĞ\s]+/
            
        },

        
        method: {

        }
    };


})(Skeleton);
/////////////////////////////////////////////////////////////////////////
//          SKELETON REGEX METHOD
/////////////////////////////////////////////////////////////////////////

(function (_) {
    

    _.MODULE(function(){



        var method = _.regex.method;



        //....................................................................................





    });


})(Skeleton);
/////////////////////////////////////////////////////////////////////////
//          SKELETON REGEX INIT
/////////////////////////////////////////////////////////////////////////

(function(_){

    _.MODULE(function(){


    }); // MODULE

})(Skeleton);
/////////////////////////////////////////////////////////////////////////
//          SKELETON PROMPTER
/////////////////////////////////////////////////////////////////////////

(function (_) {


    var promter = _.prompter = {
        method: {}
    }

})(Skeleton);
/////////////////////////////////////////////////////////////////////////
//          SKELETON PROMPTER METHOD
/////////////////////////////////////////////////////////////////////////

(function (_) {

    _.MODULE(function () {

        var prom = _.prompter;
        var coll = _.collection.create;
        var isRemoved = true;
        var time = 0;

        function removeContainer(ev, action) {

            isRemoved = false;
            if (prom.container) {
                prom.container.setClass('prev');
                prom.content.setClass('prev');

                if (time)
                    clearTimeout(time);

                time = setTimeout(function () {

                    // kaldır
                    prom.container.remove();
                    // Sıfırla
                    prom.container = null;

                    // Sayfada animasyon ve silme işlemi tamamlandı
                    isRemoved = true;

                }, 1000);
            }
        }


        function show(args) {
            // Sahnede işlemi bitmemiş bir şey varsa  iptal et
            if (!isRemoved) return;

            function setting() { }
            setting.close = removeContainer;

            isRemoved = false;
            time = setTimeout(function () {

                if (!prom.container)
                    prom.container = new coll('div', { id: 'skeleton-prompter-container' })
                        .insert(parent.document.body);

                change(args);
                isRemoved = true;
            }, args.delay || 0);


            return setting;
        }

        function removeContent(action) {

            if (prom.content)
                prom.content.remove();

            if (action)
                action();

        }

        // Prompter'in mesajının görüntülendiği alan
        // Burada mesaj alanı oluşturuluyor
        function change(args) {

            // Önce var olan mesaj alanını kaldır
            removeContent(function () {

                // Mesajın görüneceği container nesnesini oluştur
                prom.content = new coll('div', { id: 'skeleton-prompter-content' })
                    .insert(prom.container.target);

                // Başlık metni varsa başlığın görüneceği nesneyi oluştur ve başlığı ekle
                if (args.title)
                    prom.title = prom.content.create('div', { id: 'skeleton-prompter-title' })
                        .setHTML(args.title);

                // Metnin görüneceği nesneyi oluştur
                prom.text = prom.content.create('div', { id: 'skeleton-prompter-text' });

                // Görünecek metnin öncesinde gelen datanın array mi yoksa normal string mi olduğuna göre işlem yapılacak
                if (typeof args.message === 'object')
                    for (var i = 0, y = ""; i < args.message.length; i++) {
                        var o = new coll('label')
                            .setCSS({ 'display': 'block', 'margin-bottom': '7px' })
                            .setHTML(args.message[i])
                            .insert(prom.text.target);
                    }
                else {
                    prom.text.setHTML(args.message);
                }

                if (args.closeVisible == undefined || args.closeVisible === true)
                    prom.close = prom.content.create('div', { id: 'skeleton-prompter-close' })
                        .setBind('click', args.close || removeContainer);
                else {
                    setTimeout(removeContainer, args.timer || 3000);
                }

            });

        }



        prom.show = show;
        prom.close = removeContainer;
        prom.change = change;


    });


})(Skeleton);
/////////////////////////////////////////////////////////////////////////
//          SKELETON PROMPTER INIT
/////////////////////////////////////////////////////////////////////////

(function (_) {


    _.MODULE(function () {


    });


})(Skeleton);
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
        var gall = _.gallery;


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

        function openerPopup(moveItemKey, newItem) {

            //İlgili Menu butonuna ait açılması gereken bir popup varsa açtırıyoruz
            if (menu.data[moveItemKey].url) {
                var url = menu.data[moveItemKey].url;

                // Üzerinde değişiklik yapılacak datayı bildirelim
                popup.data = newItem;

                popup.method.open(url);
            }

            //Stacker ile açtırabilmek için özel tanımlandı
            else if (menu.data[moveItemKey].jsonData) {
                var datas = eval(menu.data[moveItemKey].jsonData);
                // Üzerinde değişiklik yapılacak datayı bildirelim
                popup.data = newItem;

                var doc = parent.document.createElement('div');
                doc.id = "modalpage";

                Skeleton.stacker({
                    el: doc,
                    source: datas
                });

                popup.method.openData(doc);
            }

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

                console.log('Sahne üzerine nesne bırakıldı');

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
                        var _x = _.selectedObject.getAttr('x'),
                            _y = _.selectedObject.getAttr('y');
                        dbdataCurrent.transforms.push({
                            x: _x,
                            y: _y,
                            obj:
                            //Sürüklenen nesnenin key ve root bilgisi
                            moveItemKey
                        });

                        // Sahne üzerindeki nesneye tıklandığında detay sayfasının gelebilmesi için ilgili nesneye bazı özellikler ekliyoruz
                        // Bu özellikler sayesinde data'da ki yerimizi bulup forma entegre edebiliriz
                        path.method.setCustomProperties(_.selectedObject, {
                            index: dbdataCurrent.transforms.length - 1,
                            name: moveItemKey,
                            root: path.selectedPath.id,
                            path: path.selectedPath,
                            x: _x,
                            y: _y
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

                        // Eklenen nesnenin sayısını tutacağız
                        menu.data[moveItemKey].count = menu.data[moveItemKey].count ? menu.data[moveItemKey].count + 1 : 1;

                        openerPopup(moveItemKey, newItem);

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
                width: 30,
                height: 30
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


        function contextmenu() {

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
        method.openerPopup = openerPopup;
        method.contextmenu = contextmenu;

        globMethod.onRelease = onRelease;
        globMethod.onPress = onPress;
        globMethod.setGlobal = setGlobal;
        globMethod.remGlobal = remGlobal;
        globMethod.triggerUp = triggerGlobalUp;
        globMethod.triggerDown = triggerGlobalDown;
        globMethod.triggerMove = triggerGlobalMove;


    }); // MODULE

})(Skeleton);
(function (_) {
    

    




})(Skeleton);
(function (_) {

    _.MODULE(function () {


        var coll = _.collection.create;
        var style = new coll('style', { id: 'skeleton-app-styles' });
        var link = new coll('link', { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css' })
            .insert(parent.document.head);



        //....................................................................................




        style.setSheet({


            // DIALOG PENCERESİ
            '#skeleton-dialog-shadow': {
                'position': 'fixed',
                'z-index': '9999999',
                'background-color': '#000',
                'left': '0px',
                'top': '0px',
                'bottom': '0px',
                'right': '0px',
                'opacity': '0.2',
                'display': 'none',
                'transition': 'all .3s linear'
            },
            '#skeleton-dialog': {
                'position': 'fixed',
                'z-index': '9999999',
                'min-width': '200px',
                'background-color': 'white',
                'box-shadow': '4px 4px 11px #777',
                'transform': 'translateX(-50%) translateY(-50%)',
                'left': '50%',
                'top': '50%',
                'display': 'none',
                'transition': 'all .3s linear',
                'border-top': '10px solid #588690',
            },
            '#skeleton-dialog *': {
                'font-family': 'arial',
                'font-size': '15px',
                'color': '#444'
            },
            '#skeleton-dialog-content': {
                'padding': '30px',
                'text-align': 'center'
            },
            '#skeleton-dialog-title': {
                'text-align': 'center',
                'padding': '10px 0',
                'border-bottom': '1px solid #ddd',
                'background': '#eee',
                'font-weight': 'bold'
            },
            '#skeleton-dialog-footer': {
                'border-top': '1px solid #ddd',
                'text-align': 'center',
                'padding': '10px'
            },
            '#skeleton-dialog-button1': {
                'background-color': '#4b9c64',
                'color': 'white'
            },
            '#skeleton-dialog-button2': {
                'background-color': '#a0a0a0',
                'color': 'white'
            },
            '.skeleton-dialog-button': {
                'cursor': 'pointer',
                'display': 'inline-block',
                'width': '50%',
                'box-sizing': 'border-box',
                'padding': '7px 14px',
                '-webkit-appearance': 'button',
                'border': '1px solid #fff',
                'border-radius': '4px',
                'font-weight': 'bold',
                'outline': 'none'
            },
            '.skeleton-dialog-button:hover': {
                'background-color': '#444 !important'
            },
            '.disabled-btn': {
                'pointer-events': 'none !important',
                'opacity': '0.4',
                'background-color': '#888 !important',
                'color': '#444 !important'
            },

            //....................................................................................



            // CONTEXT PENCERESİ

            '#contextmenu-container': {
                'position': 'absolute',
                'z-index': '10000',
                'box-shadow': '0 0 0 3px rgba(0, 0, 0, 0.42)',
                'background-color': '#eee',
                'padding': '2px',
                'font-size': '14px',
                'font-family': 'Arial',
                'left': '0',
                'top': '0',
                'display': 'none',
                'width': '200px'
            },
            '#contextmenu-container::before': {
                'content': "'Yönetin'",
                'background-color': 'gray',
                'color': 'white',
                'display': 'block',
                'padding': '4px 10px',
                'text-align': 'center'
            },
            '#contextmenu-content': {},
            '#contextmenu-content > div': {
                'border-bottom': '1px solid #ddd',
                'transition': 'all .2s linear'
            },
            '#contextmenu-content > div > label': {
                'display': 'inline-block',
                'padding': '7px 10px'
            },
            '#contextmenu-content > div::before': {
                'content': "''",
                'display': 'inline-block',
                'transition': 'all .2s linear',
                'height': '0',
                'width': '0',
                'position': 'relative',
                'border': '5px solid transparent',
                'border-left-color': '#444',
                'margin-right': '5px',
                'left': '10px'
            },

            '#contextmenu-content > div:hover': {
                'background-color': '#d5d5d5',
                'color': '#444'
            },
            '#contextmenu-content > div:hover::before': {
                'border-left-color': 'orange'
            },
            '#contextmenu-content > div:last-child': {
                'border': '0'
            },

            //....................................................................................



            // SKELETON MENU PENCERESİ
            '#skeleton-menu': {
                'position': 'fixed',
                'left': '40px',
                'top': '40px',
                'width': '300px',
                'overflow': 'hidden',
                'background-color': 'rgb(48, 57, 90)',
                'border': '3px solid rgb(255, 255, 255)',
                'box-shadow': 'rgba(0, 0, 0, 0.27) 0px 0px 0px 8px',
                'z-index': '1000',
                'font-family': 'arial',
                'font-size': '14px',
                'color': '#333',
                'border-radius': '7px',
                'transition': 'width .3s cubic-bezier(0.1,0.1,0.1,1.0)'
            },
            '#skeleton-menu.showhide #skeleton-menu-content': {
                'display': 'none'
            },
            '#skeleton-menu.showhide': {
                'width': '100px'
            },
            '#skeleton-menu-content': {
                'padding': '10px 20px 10px 10px',
                'overflow': 'hidden',
                'overflow-y': 'auto',
                'border-top': '1px solid #ddd',
                'border-bottom': '1px solid #ddd',
                'height': '250px',
                'background-color': 'white',
                'display': 'block'
            },
            '.skeleton-menu-item': {
                'transition': 'all .3s linear',
                'overflow': 'hidden',
                'padding': '0',
                'margin': '0',
                'border': '0',
                'border-bottom-width': '1px',
                'border-style': 'solid',
                'border-color': '#f1f1f1',
                'display': 'table',
                'width': '100%',
                'padding': '5px'
            },
            'ul.selected.skeleton-menu-item': {
                'background-color': '#e6e2ce',
                'color': '#583f3f'
            },
            '.skeleton-menu-item:hover': {
                'background-color': '#eee'
            },
            '.skeleton-menu-item li': {
                'box-sizing': 'border-box',
                'display': 'table-cell',
                'vertical-align': 'middle',
                'padding-top': '10px',
                'padding-bottom': '10px',
                'text-align': 'center'
            },
            '.skeleton-menu-item li:last-child': {
                'text-align': 'left',
                'padding-left': '10px',
                'position': 'relative'
            },
            '.skeleton-menu-item li:last-child::after': {
                'content': "''",
                'background-image': "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAMAAABrrFhUAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAACc1BMVEUAAACdyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXcAAAAGRo0/AAAAz3RSTlMAAiFIX2x5hpKfrLnG09/s+RA3XoX30quEXTYPBDpzm8Lp6MGacjgydLbz8rUxKq7u7a0ZZafnpgpauPwBQSfhE2vJIyulNK/+PsNCzRgDbfHOEplh6y3ENd5x+hGxOXX7CMDQJFT4af168N1ZJXvvUrC0XAZOuxt86g6k2IAds1XlFigmFIP2nS7Lf0V2t9fjjCkNavW8flA8CT1wQCx3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')",
                'background-repeat': 'no-repeat',
                'background-size': 'cover',
                'width': '25px',
                'height': '25px',
                'position': 'absolute',
                'opacity': '0.3',
                'right': '10px',
                'top': '0',
                'bottom': '0',
                'margin': 'auto 0'
            },
            '.skeleton-menu-item.show li:last-child::after': {
                'opacity': '1'
            },
            '.skeleton-menu-item input[type=checkbox]': {

            },
            '.skeleton-menu-item .menu-item-img': {
                'box-shadow': 'inset 0px -28px 0px rgba(171, 171, 171, 0.12), 0px 0px 0px 3px #606ca9',
                'background': '#fff',
                'border-radius': '5px',
                'transition': 'all .3s linear',
                'cursor': 'pointer',
            },
            '.skeleton-menu-item .menu-item-img:hover': {
                'box-shadow': '1px 1px 3px #000'
            },
            '.skeleton-menu-item .menu-item-text': {
                'cursor': 'pointer'
            },
            '.skeleton-menu-item .menu-item-chk': {

            },
            '.skeleton-menu-item .menu-item-img > img': {
                'pointer-events': 'none'
            },
            '.skeleton-menu-item .menu-item-img.menu-item-locked': {
                'pointer-events': 'none',
                'border': '0',
                'box-shadow': 'none',
                'opacity': '0.3'
            },
            '#skeleton-menu-header': {
                'position': 'relative',
                'padding': '10px',
                'background-color': 'rgb(48, 57, 90)',
                'color': 'white',
                'border': '0',
                'border-bottom-width': '1px',
                'border-style': 'solid',
                'border-color': '#444',
                'animation': 'upload-colors 50s linear infinite'
            },
            '#skeleton-menu-footer': {
                'padding': '10px',
                'border': '0',
                'border-top-width': '1px',
                'border-style': 'solid',
                'border-color': 'rgba(255,255,255,.5)',
                'animation': 'upload-colors 50s linear infinite',
                'cursor': 'pointer'
            },
            '#skeleton-menu-footer a': {
                'display': 'block',
                'padding': '4px',
                'text-decoration': 'none',
                'color': '#fff',
                'font-size': '12px'
            },


            // POPUP PENCERESİ
            '@keyframes skeleton-popup-modal': {
                'from': "{ opacity: 0}",
                'to': "{ opacity: 1}",
            },

            // TOOLTIP PENCERESİ
            '#skeleton-tooltip': {
                'position': 'absolute',
                'background-color': '#f9f9d5',
                'border-width': '1px',
                'border-style': 'solid',
                'border-color': '#ffd383',
                'border-radius': '4px',
                'box-shadow': '1px 1px 3px #777',
                'font-size': '13px',
                'font-family': 'Arial',
                'display': 'none',
                'padding': '10px',
                'pointer-events': 'none',
                'z-index': '9999',
                'opacity': '.9'
            },
            '.no-animate': {
                'transition': 'none !important'
            },




            '.skeleton-popup-modal-shadow': {
                'background-color': ' rgba(0, 0, 0, .4)',
                'position': ' fixed',
                'left': ' 0',
                'right': ' 0',
                'top': ' 0',
                'bottom': ' 0'
            },

            '.skeleton-popup-modal': {
                'position': ' fixed',
                'background-color': ' white',
                'left': ' 50%',
                'top': ' 50%',
                'transform': ' translate(-50%, -50%)',
                'border': ' 2px solid #fff',
                'padding': ' 0',
                'box-shadow': ' 3px 3px 17px -3px #000',
                'animation': 'skeleton-popup-modal .5s forwards'
            },
            '#skeleton-popup-content': {
                'position': 'fixed',
                'background-color': 'white',
                'left': '50%',
                'top': '50%',
                'transform': 'translate(-50%,-50%)',
                'border': '2px solid #fff',
                'padding': '0',
                'box-shadow': '0px 0px 0px 8px rgba(0, 0, 0, 0.35)',
                'min-width': '500px'
            },
            '#skeleton-popup-container': {

                'background-color': 'rgba(0,0,0,.4)',
                'position': 'fixed',
                'left': '0',
                'right': '0',
                'top': '0',
                'bottom': '0',
                'display': 'none',
                'z-index': '9999'
            },

            '@keyframes skeleton-popup-modal': {
                'from': "{ opacity: 0}",
                'to': "{ opacity: 1}",
            },

            '#modalpage *': {
                'box-sizing': ' border-box',
                'outline': ' none'
            },

            '#modalpage table': {
                'width': '100%'
            },
            '#modalpage select': {
                'padding': '5px 10px',
                'height': '30px ',
                'width': '200px',
                'border-radius': '4px'
            },

            '#modalpage .gtitle': {
                'font-size': '14px',
                'margin': '5px 0',
                'padding': '5px 14px',
                'background-color': '#b9b9b9',
                'border-radius': '4px 0 0 4px',
                'position': 'relative',
                'color': 'white',
                'display': 'inline-block',
                'width': '88px',
                'margin-right': '14px',
                'vertical-align': 'middle'
            },

            '#modalpage .gtitle::after': {
                'content': ' ',
                'border': '1px solid rgba(255, 255, 255, 0.49)',
                'position': 'absolute',
                'left': '1px',
                'top': '1px',
                'right': '2px',
                'bottom': '2px',
                'border-right': '0',
                'border-bottom': '0',
                'border-radius': '3px 1px 0 3px'
            },
            '#modalpage .gtitle::before': {
                'content': ' ',
                'border': '13px solid transparent',
                'border-left-color': '#99c9d8',
                'border-right': '0',
                'height': '0',
                'position': 'absolute',
                'right': '-12px',
                'bottom': '0px'
            },

            '#modalpage .bheader': {
                'font-size': '17px',
                'color': ' #444',
                'background': '#f1f1f1',
                'margin': '0',
                'padding': '7px'
            },

            '#modalpage .btitle': {
                'font-size': '15px',
                'color': '#555',
                'margin': '0',
                'padding': '7px',
                'background-color': '#eee'
            },

            '#modalpage tr': {},

            '#modalpage hr': {
                'border': '0',
                'height': '1px',
                'background': '#eee',
                'margin': '7px 0 10px'
            },
            '#modalpage b': {
                'display': ' block'
            },

            '#modalpage-content': {
                'max-height': '330px',
                'overflow': 'hidden',
                'overflow-y': 'auto',
                'border': '1px solid #ddd',
                'border-right-color': '#cccccc',
                'border-bottom-color': '#ccc',
                'padding': '5px'
            },

            '#modalpage input[type=text],#modalpage input[type=number]': {
                'padding': '10px',
                'border-radius': '5px',
                'border': '2px solid #ddd',
                'border-left-color': '#999',
                'border-top-color': '#999'
            },

            '#modalpage td': {
                'padding': '10px 0',
            },

            '#modalpage': {
                'font-family': 'arial',
                'color': '#444',
                'font-size': '14px'
            },

            '#modalpage .fgroup': {
                'clear': 'both',
                'padding': '8px 0',
                'border-bottom': '1px solid #eee'
            },
            '#modalpage .fgroup::before,#modalpage .fgroup::after': {
                'content': '',
                'display': 'block',
            },
            '#modalpage input[type=button]': {
                'width': '100%',
                'padding': '13px',
                'font-weight': 'bold',
                'font-size': '16px',
                'background': 'rgb(48, 57, 90)',
                'color': 'white',
                'border': '1px solid #ddd',
                'outline': 'none'
            },

            '#modalpage .group-label-list': {
                'display': 'inline-block',
                'vertical-align': 'middle',
                'padding': '4px',
            },

            '#modalpage .group-label-list label': {
                'padding': '5px',
                'background-color': '#eee',
                'border-radius': '5px',
                'font-weight': 'bold',
                'display': 'inline-block'
            },
            '#modalpage .group-label-list label.selected': {},
            '#modalpage .grp-row': {
                'overflow': 'hidden'
            },
            '#modalpage .grp-row::before,#modalpage .grp-row::after': {
                'content': "''",
                'display': 'block'
            },
            '#modalpage .grp-col': {
                'list-style-type': 'none',
                'margin': '4px 0',
                'padding': '0'
            },
            '#modalpage .grp-col li': {
                'display': 'inline-block',
                'margin-right': '-4px',
                'width': '33%'
            },
            'hr': {
                'width': '100%',
                'margin': '10px 0'
            },
            '.nonedisplay': {
                'display': 'block',
                'width': '100%',
            },
            '.locked': {
                'pointer-events': 'none',
                'opacity': '0.4'
            },
            'hr': {
                'position': 'relative',
                'border': '0',
                'height': '2px',
                'background-color': '#ddd'
            },
            'hr.downarrow': {},
            'hr.downarrow::before': {
                'content': "''",
                'border': '12px solid transparent',
                'border-top-color': '#1bc368',
                'width': '0',
                'height': '0',
                'position': 'absolute',
                'left': '38px',
            },

            // UPLOAD
            '#skeleton-upload-files': {
                'position': 'fixed',
                'right': '40px',
                'bottom': '40px',
                'width': '250px',
                'height': '300px',
                'box-shadow': '0 0 0 6px rgba(0, 0, 0, 0.35)',
                'background': "#fff url('data:image/png;base64,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') no-repeat center center",
                'border': '3px solid #fff',
                'border-radius': '4px',
                'font-family': 'arial',
                'font-style': 'italic',
                'overflow': 'hidden'
            },
            '#skeleton-upload-files-header': {
                'padding': '10px',
                'color': 'white',
                'font-size': '20px',
                'background-color': '#775f8c',
                'border-bottom': '1px solid #58436b',
                'border-radius': '4px 4px 0 0',
                'animation': 'upload-colors 50s linear infinite',
                'position': 'relative'
            },
            '#upload-files-header-close': {
                'width': '24px',
                'height': '24px',
                'border-radius': '50%',
                'position': 'absolute',
                'right': '10px',
                'top': '0',
                'bottom': '0',
                'margin': 'auto 0',
                'transition': 'all .2s linear'
            },
            '#upload-files-header-close:hover': {
                'background-color': 'rgba(0,0,0,0.4)',
            },
            '#upload-files-header-close::before,#upload-files-header-close::after': {
                'content': "''",
                'border-right': '2px solid #fff',
                'border-bottom': '2px solid #fff',
                'width': '8px',
                'height': '8px',
                'position': 'absolute',
                'float': 'left',
                'top': '0',
                'bottom': '0',
                'margin': 'auto'
            },
            '#upload-files-header-close::before': {
                'transform': 'rotate(-45deg)',
                'margin-left': '1px'
            },
            '#upload-files-header-close::after': {
                'transform': 'rotate(135deg)',
                'margin-left': '13px'
            },
            '#skeleton-upload-files-content': {
                'height': '211px',
                'overflow': 'hidden',
                'overflow-y': 'auto',
                'background-color': 'white',
                'background-image': "url('data: image / png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABjCAMAAABaOVXeAAAAUVBMVEUnJycAAAAAAAAAAAB + fn4nJyeFhYX ///+JiYl5eXmDg4P///98fHyEhIRDQ0NDQ0OJiYmJiYmKiop5eXn///+Dg4OEhISBgYGBgYFfX19fX1+fciHbAAAAG3RSTlMJAwYAJwA2AkUhMAEkMwwAQgBIAAAAAC0AEgDgGVynAAAEIElEQVR4Ae1Zi27bMBAjL02d59Z07/3/hw6wYkLcFfZ5LYKsG5FEVqOKoXiSrRPAaECMVwSiYSw3D9gu4FHtR3B8BRlXDDu0L6hGiDCS/SLJgeoPgSC7TigStFoDxIUAWFGC1h0RPVQ77sBGoI47MIDtaZHkrB7HAk7VlDB49YNGsMoT6x7XD0pJR8k2WJQOVjyR8aaB7RPNE5pJ0DvIYLCkRMoZCIOUwNm9XYHkwAgHQag/Ge9agC6EK8ZT7YE2DpQmYBiVsFWCmjLslHz4uIBDa8/xM9vSlLSqCFQLsKYkG2+cTUmKbC0QZRL4P4vTQxjpx7Bs/NQYUGRS3YnE549ABLb7AgkbDdgvtB7C00sl5RCwrc6T5HfjayTwAWKsXoXP7riEmJLsh1AzHpGRPBHguqskcjRFGIOmBFodTW9VCbu4FwuoZUVoRrmyzWlxxj+6Hw1oPMn4ZEvVeAQCEwcly4xnCimV1cmo5mKAapiM5zQVQd0U68bL1R6w2y98SIWykrN1m5hMyagTAUJhWFNymPMUiEbCyCiRSAmDjAwGbDKqRF9HKbpMAnsRii4EmJcdMFYocVeBgD/ciRrMd5bycxfs1zkGe+7KjpRm/NlHS0BQSgLpOYAqWIsuuN8phHcZT9315bQr4tlqBgxHxzC9h1bdfzomDPpQ1Ut91zrC5wUU1q4v8zjucFnAQ2wW8LeQnBZJzl/nMRRJ7n+43kTJt+/zWCY5vt6Tmxj/ek8Kw7VMctzfgOSyfGd8A5KHW3hyg+GqKPm/Ct96gdzfRMl78aQw4/+d6BruP7qKa9e9DNfp3Q3X/d9P5rcxT5f9bjXSdgq+lcnXvgkafqsMg3Y9eR+l4pr6BLRnhO0eq1ts+q4WQVWGHVJuEsF1u9+Duk5gTtkGg9Ml6mn0R+SNsyASB9Qe9WRBJsn5Lj/CQae8vo/3hDzBrEQ0huJJEF0K0fdGyxIh0bGmhOFAn/vTEaAxUCRlJchplWS8ki0ZXHd+4mQQiVgTWDf+RYAaLr6sg2vSgz5NdAkENVzUOVMAcK11JclWuCcIeFZVS1ntWNY5qDLNE+TsXnm4JJ/ZdyhX731DzYvHTXJQBbt06vFZufrOf6osLZDn7uxYgCc6MTnhDfFnuXqG3yvox03Iv6OsRKC5Lk/sL4Jc3JQ88bFCI8uHNExLXHuVTx18OJjWLn2j/leGsAGR5wlgzG4OSiS2quRObLiQXVm3QCIygprxoMzzw+E6iQHXuQbMPUhwarvZ1x6JXAZ1CphIMmFdCUCPMYpQJAEG7MbC+tHG1J4uht3DHTHZziypFl0IAyBBPlyySVz1EEbMAO4JQNGLbVPIpgbS2iXAlRjQ3tUDZspqn4/T/WThUKd+EjRzngTf3GT8+Jm2PdrlqKI9T9oIjQ1+ASmrFBua6fE2AAAAAElFTkSuQmCC')",
                'animation': 'background-inf 5s linear infinite',
                'display': 'none'
            },
            '@keyframes background-inf': {
                'from': '{background-position:0 0;}',
                'to': '{background-position:-100px -100px;}'
            },
            '#skeleton-upload-files-footer': {
                'border-top': '1px solid #fff',
                'padding': '4px',
                'background-color': '#775f8c',
                'box-shadow': '0 -10px 12px -13px #000',
                'border-radius': '6px',
                'animation': 'upload-colors 50s linear infinite',
                'position': 'absolute',
                'bottom': '0',
                'left': '0',
                'right': '0'
            },
            '#skeleton-upload-files-footer input[type=file]': {
                'position': 'absolute',
                'width': '100%',
                'background': '#333',
                'padding': '10px 0px',
                'height': '17px',
                'opacity': '0'
            },
            '#skeleton-upload-button': {
                'width': '100%',
                '-webkit-appearance': 'button',
                'padding': '10px',
                'border-radius': '4px',
                'border': '1px solid #ddd',
                'background': 'white',
                'box-shadow': '1px 1px 2px #ccc, inset 0 -18px 0px 0px rgba(0, 0, 0, 0.08)',
                'font-weight': 'bold'
            },
            '@keyframes upload-colors': {
                '0%': "{background-color:#775f8c;}",
                '20%': "{background-color:#4f6d8e;}",
                '40%': "{background-color:#4f8e8c;}",
                '60%': "{background-color:#4f8e69;}",
                '70%': "{background-color:#8e8a4f;}",
                '80%': "{background-color:#8e4f4f;}",
                '100%': "{background-color:#775f8c;}",
            },
            '#skeleton-upload-loader': {
                'position': 'relative',
                'margin': '40px auto',
                'width': '86px'
            },
            '#skeleton-upload-loader > div': {
                'position': 'relative',
                'margin': 'auto',
                'width': '70px',
                'height': '70px',
                'border-radius': '50%',
                'box-shadow': '0px 0 5px #888',
            },
            '#skeleton-upload-loader > div.progress': {
                'background-color': 'transparent',
                'animation': 'upload-loader 1s linear infinite',
                'box-shadow': '3px 0 5px #888',
            },
            '#skeleton-upload-loader > div.error': {
                'background-color': 'red',
            },
            '#skeleton-upload-loader > div.success::before,#skeleton-upload-loader > div.success::after': {
                'content': "''",
                'width': '6px',
                'height': '36px',
                'background-color': 'white',
                'position': 'absolute'
            },
            '#skeleton-upload-loader > div.success': {
                'background-color': '#29a054'
            },
            '#skeleton-upload-loader > div.success::before': {
                'transform': 'rotate(-67deg)',
                'height': '21px',
                'top': '37px',
                'left': '25px'
            },
            '#skeleton-upload-loader > div.success::after': {
                'transform': 'rotate(24deg)',
                'left': '39px',
                'top': '18px'
            },
            '#skeleton-upload-loader > div.error::before': {
                'content': "''",
                'position': 'absolute',
                'width': '6px',
                'height': '46px',
                'background-color': 'white',
                'left': '32px',
                'top': '14px',
                'transform': 'rotate(90deg)'
            },
            '#skeleton-upload-loader > div.timeout': {
                'background-color': 'white',
                'border': '1px dashed #222'
            },
            '#skeleton-upload-loader > div.timeout::before': {
                'content': "''",
                'position': 'absolute',
                'width': '23px',
                'height': '13px',
                'background': '#757575',
                'left': '0',
                'top': '-17px',
                'right': '0',
                'margin': 'auto',
                'border-radius': '4px'
            },
            '#skeleton-upload-loader > div.timeout::after': {
                'content': "''",
                'position': 'absolute',
                'width': '16px',
                'height': '8px',
                'background': '#757575',
                'left': '60px',
                'top': '3px',
                'right': '0',
                'margin': 'auto',
                'border-radius': '4px',
                'transform': 'rotate(47deg)'
            },
            '@keyframes upload-loader': {
                'from': '{transform:rotate(0deg)}',
                'to': '{transform:rotate(360deg)}'
            },
            '#skeleton-upload-loader > label': {
                'font-size': '13px',
                'font-weight': 'bold',
                'margin': '19px 0',
                'display': 'block',
                'color': 'gray',
                'text-align': 'center'
            },
            '#skeleton-gallery-comment': {
                'margin-top': '95px',
                'text-align': 'center',
                'font-weight': 'bold'
            },
            '#skeleton-gallery-contentlist': {
                'height': '208px',
                'overflow': 'hidden',
                'overflow-y': 'auto',
                'animation-duration': '.4s',
                'margin': '1px 0',
                'border': '1px solid #e2e2e2',
                'border-radius': '4px',
                'font-size': '13px'
            },
            '#skeleton-gallery-contentlist > div.gall-item-name': {
                'overflow': 'hidden',
                'border-bottom': '1px solid #ececec',
                'transition': 'all .3s linear',
                'background': "#fff url('data:image/png;base64,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') no-repeat 5px center",
                'background-size': '20px 20px'

            },
            'div.gall-item-name > div': {
                'float': 'left',
                'box-sizing': 'border-box',
                'min-height': '55px',
                'width': '20%',
                'background-size': 'auto 33% !important',
                'background-color': 'white',
                'border-right': '1px solid #ddd',
                'transition': 'background-color .3s linear'
            },
            'div.gall-item-name > div.gall-item-content': {
                'width': '60%',
                'padding': '12px'
            },
            'div.gall-item-name > div.gall-item-delphoto': {
                'cursor': 'pointer',
                'background': "#fff url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABr0lEQVRIidXVPWgVQRQF4O+Fh1iFYCESLGwCiiCiIKIgkkIESWVjZyViIIKgjdWxsNRGLURLWwshlioIioWFijxEiYiFpUUQi0cIFjsb1+f74ZHgz4HL7N659567Z2Z2WkYgyT5cw160i3sFb3EJL5IMzJ8YUXwHHuAIulgu1sWhMrdzWI2hBDiF7biH3Zgptgt3sRWnhxVoN1+KHFMN1+EyLmFPT+6HMh5IMtvwL+NlLdsaQZHjGTb3aeTKkCZni9XoYr9qjSqJkkzi3IDi42ITziTZskagkuXiBhSvcR7b+CnRVyyoFnIeT3F/zKIncEy1+K/xBVrNiCRH8QQ3kyyMUz3JVVzGXJLF2t8enEKSeZxUHah3uK1ojGncwsMk1wfV6CVYLVZjRrVDpkrsQdVGaGOyzH0ssX3P1KiDtm78NYL1EDcl/r8k+rcWecOI/7hEqwP84+CXXTToV1ET3MEjvMF3nC1z3/Aec/g8rKl+vwqYTtJO0kGnMf+48dzFIiSZUF2tI7+gUzo7jqUkK42E1Z7YicZYE3zCq2ZQSw/KvXzD73fwKHRwIcnzpvMHuyBkvFAnyocAAAAASUVORK5CYII=') no-repeat center center"
            },
            'div.gall-item-name > div.gall-item-showphoto': {
                'cursor': 'pointer',
                'background': "#fff url('data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjMycHgiIGhlaWdodD0iMzJweCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPGc+Cgk8cGF0aCBkPSJNMCw0OHY0MTZoNTEyVjQ4SDB6IE00ODAsNDMySDMyVjgwaDQ0OFY0MzJ6IE0zNTIsMTYwYzAsMjYuNTEsMjEuNDksNDgsNDgsNDhzNDgtMjEuNDksNDgtNDhzLTIxLjQ5LTQ4LTQ4LTQ4ICAgUzM1MiwxMzMuNDksMzUyLDE2MHogTTQ0OCw0MDBINjRsOTYtMjU2bDEyOCwxNjBsNjQtNDhMNDQ4LDQwMHoiIGZpbGw9IiM0MjQyNDIiLz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K') no-repeat center center"
            },
            'div.gall-item-name  div.gall-item-title': {
                'font-weight': 'bold',
                'white-space': 'nowrap',
                'overflow': 'hidden',
                'text-overflow': 'ellipsis'
            },
            'div.gall-item-name > div:hover': {
                'background-color': '#eee'
            },
            'div.gall-item-name > div:active': {
                'background-size': 'auto 30% !important',
                'box-shadow': 'inset 0 0 16px 0px #ddd'
            },


            // PROMPTER
            '#skeleton-prompter-container': {
                'background': "url('data:image/png;base64,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') no-repeat left bottom",
                'padding': '40px 40px 50px 74px',
                'position': 'fixed',
                'bottom': '27px',
                'left': '10px',
                'max-width': '470px',
                'animation': 'prompter-container .3s forwards',
                'z-index': '1101',
            },
            '@keyframes prompter-container': {
                'from': '{background-position:-200px bottom}',
                'to': '{background-position:0 bottom}'
            },
            '#skeleton-prompter-container.prev': {
                'animation': 'prompter-container-prev .3s forwards',
                'animation-delay': '.5s'
            },
            '@keyframes prompter-container-prev': {
                'from': '{background-position:0 bottom}',
                'to': '{background-position:-200px bottom}'
            },

            '#skeleton-prompter-content': {
                'font-size': '14px',
                'font-style': 'italic',
                'padding': '26px',
                'background': '#fde8a1',
                'border-radius': '34px 3px',
                'color': '#bd8b53',
                'font-family': 'arial',
                'position': 'relative',
                'box-shadow': '10px 10px 29px -5px #444, inset -40px -13px 54px -42px rgb(255, 189, 88)',
                'border-top': '1px solid #fff',
                'transform': 'scale(0)',
                'animation': 'prompter .8s forwards',
                'animation-delay': '.3s',

            },
            '@keyframes prompter': {
                '0%': '{transform:scale(0) rotate(-40deg) translate3d(-100px,-150px,-100px); opacity:0;}',
                '50%': '{transform:scale(1.1) rotate(-4deg) translate3d(0,0,10px); opacity:1;}',
                '100%': '{transform:scale(1) rotate(0deg) translate3d(0,0,0); opacity:1;}'
            },
            '#skeleton-prompter-content.prev': {
                'animation-delay': '0s',
                'animation': 'prompter-prev .4s forwards',
            },

            '@keyframes prompter-prev': {
                '0%': '{transform:scale(1) rotate(0deg) translate3d(0,0,0);opacity:1}',
                '50%': '{transform:scale(1.1) rotate(-4deg) translate3d(0,0,10px);opacity:1;}',
                '100%': '{transform:scale(0) rotate(-40deg) translate3d(-500px,-150px,-100px); opacity:0;}'
            },
            '#skeleton-prompter-content::after': {
                'content': "''",
                'position': 'absolute',
                'border': '37px solid transparent',
                'border-right-color': '#fde8a1',
                'left': '-34px',
                'transform': 'rotate(76deg)',
                'bottom': '0'
            },
            '#skeleton-prompter-close': {
                'position': 'absolute',
                'right': '0',
                'top': '0',
                'width': '20px',
                'height': '20px',
                'border-radius': '0 0 0 30px',
                'background': '#e6d69d url(data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDIxLjkgMjEuOSIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMjEuOSAyMS45IiB3aWR0aD0iMjRweCIgaGVpZ2h0PSIyNHB4Ij4KICA8cGF0aCBkPSJNMTQuMSwxMS4zYy0wLjItMC4yLTAuMi0wLjUsMC0wLjdsNy41LTcuNWMwLjItMC4yLDAuMy0wLjUsMC4zLTAuN3MtMC4xLTAuNS0wLjMtMC43bC0xLjQtMS40QzIwLDAuMSwxOS43LDAsMTkuNSwwICBjLTAuMywwLTAuNSwwLjEtMC43LDAuM2wtNy41LDcuNWMtMC4yLDAuMi0wLjUsMC4yLTAuNywwTDMuMSwwLjNDMi45LDAuMSwyLjYsMCwyLjQsMFMxLjksMC4xLDEuNywwLjNMMC4zLDEuN0MwLjEsMS45LDAsMi4yLDAsMi40ICBzMC4xLDAuNSwwLjMsMC43bDcuNSw3LjVjMC4yLDAuMiwwLjIsMC41LDAsMC43bC03LjUsNy41QzAuMSwxOSwwLDE5LjMsMCwxOS41czAuMSwwLjUsMC4zLDAuN2wxLjQsMS40YzAuMiwwLjIsMC41LDAuMywwLjcsMC4zICBzMC41LTAuMSwwLjctMC4zbDcuNS03LjVjMC4yLTAuMiwwLjUtMC4yLDAuNywwbDcuNSw3LjVjMC4yLDAuMiwwLjUsMC4zLDAuNywwLjNzMC41LTAuMSwwLjctMC4zbDEuNC0xLjRjMC4yLTAuMiwwLjMtMC41LDAuMy0wLjcgIHMtMC4xLTAuNS0wLjMtMC43TDE0LjEsMTEuM3oiIGZpbGw9IiNGRkZGRkYiLz4KPC9zdmc+Cg==) no-repeat',
                'background-position': '64% 5px',
                'color': 'white',
                'padding': '3px 3px 10px 13px',
                'background-size': '50%',
                'box-shadow': 'inset 4px -3px 6px -5px #6d6d6d'
            },
            '#skeleton-prompter-close:hover': {
                'background-color': '#bd8b53'
            },
            '#skeleton-prompter-title': {
                'font-size': '17px',
                'margin-bottom': '10px',
                'font-weight': 'bold'
            },
            '.information-woman': {
                'width': '24px',
                'height': '24px',
                'position': 'absolute',
                'right': '5px',
                'top': '0',
                'bottom': '0',
                'margin': 'auto 0',
                'background-image': 'url(data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjI0cHgiIGhlaWdodD0iMjRweCIgdmlld0JveD0iMCAwIDYxMiA2MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDYxMiA2MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPGc+Cgk8Zz4KCQk8cGF0aCBkPSJNMjMwLjcyNCwxODEuMjA4Yy0yLjM5MywyLjU4Ny0zLjk1LDQuMjU2LTUuMTE5LDUuNTA4QzIyNy43NzUsMTg0LjM3OSwyMzAuNzI0LDE4MS4yMDgsMjMwLjcyNCwxODEuMjA4eiIgZmlsbD0iI0ZGREE0NCIvPgoJCTxwYXRoIGQ9Ik0zMzYuOTYyLDIwMC44NzVjNy45NTYsOS43OTIsMTEuOTA2LDIxLjMzNywxMS45MDYsMzQuNjM0YzAsOS41MTQtMi43MjcsMTguNjY2LTguMTUxLDI3LjUxMiAgICBjLTIuOTc3LDUuMDA3LTYuODk4LDkuODQ4LTExLjc5NSwxNC40NjVsLTE2LjMwMSwxNi4xMDdjLTE1LjYzNCwxNS4zNTYtMjUuNzMyLDI4Ljk1OC0zMC4zNSw0MC44NjUgICAgYy00LjYxOCwxMS44NzgtNi45MjcsMjcuNTQtNi45MjcsNDYuOTU3aDM2LjI3NWMwLTE3LjEwOCwxLjk0Ny0zMC4wNDQsNS44MTQtMzguODA3YzMuODY2LTguNzYzLDEyLjMyMy0xOS40NDQsMjUuMzctMzIuMTAyICAgIGMxNy45NDItMTcuMzg3LDI5Ljg0OS0zMC41NzIsMzUuNzQ2LTM5LjUzczguODc0LTIwLjY0MSw4Ljg3NC0zNS4wNTFjMC0yMy43NTYtOC4wMzktNDMuMjg1LTI0LjE0Ni01OC41ODUgICAgYy0xNi4xMDYtMTUuMy0zNy41MjYtMjIuOTIyLTY0LjI4OC0yMi45MjJjLTI4LjkzMSwwLTUxLjY4Niw4LjkyOS02OC4yNjYsMjYuNzg5cy0yNC44Nyw0MS40NDktMjQuODcsNzAuNzk3aDM2LjI3NSAgICBjMC42NjctMTcuNjY1LDMuNDc4LTMxLjE4NCw4LjM0Ni00MC41NTljOC42NzktMTYuODMsMjQuMzY5LTI1LjI1OSw0Ny4wNjgtMjUuMjU5ICAgIEMzMTUuODc1LDE4Ni4xODcsMzI5LjAzMywxOTEuMDgzLDMzNi45NjIsMjAwLjg3NXoiIGZpbGw9IiNGRkRBNDQiLz4KCQk8cGF0aCBkPSJNNjEyLDMwNkM2MTIsMTM3LjAwNCw0NzQuOTk1LDAsMzA2LDBDMTM3LjAwNCwwLDAsMTM3LjAwNCwwLDMwNmMwLDE2OC45OTUsMTM3LjAwNCwzMDYsMzA2LDMwNiAgICBDNDc0Ljk5NSw2MTIsNjEyLDQ3NC45OTUsNjEyLDMwNnogTTI3LjgxOCwzMDZDMjcuODE4LDE1Mi4zNiwxNTIuMzYsMjcuODE4LDMwNiwyNy44MThTNTg0LjE4MiwxNTIuMzYsNTg0LjE4MiwzMDYgICAgUzQ1OS42NCw1ODQuMTgyLDMwNiw1ODQuMTgyUzI3LjgxOCw0NTkuNjQsMjcuODE4LDMwNnoiIGZpbGw9IiNGRkRBNDQiLz4KCQk8cmVjdCB4PSIyNzQuNTEiIHk9IjQxNS4yMTQiIHdpZHRoPSI0MC41NTkiIGhlaWdodD0iNDIuMzY3IiBmaWxsPSIjRkZEQTQ0Ii8+Cgk8L2c+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg==)',
                'background-repeat': 'no-repeat',
                'background-position': 'center center',
                'background-size': '100%',
                'border-radius': '50%'
            },
            '.information-woman:hover': {
                'background-color': '#222'
            },
            'i.ichk': {
                'display': 'inline-block',
                'background-size': 'cover',
                'vertical-align': 'middle'
            },
            'i.ichk::after': {
                'content': "''",
                'display': 'block',
                'padding': '7px',
                'background-size': 'cover'
            },
            'i.ichk_x182': {
                'background-image': "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4QYXBjsAa31riwAAALRJREFUKM+1jzGLhDAYRN8XrjOiplMEwdJ/4P8vbKzFShDElAqJ2ATcYrlO97a5qd/MY8R7fw3DwDRNbNvGXbIso65rmqZB+r6/juOgLEvSNL0t7PvOsixEUcSPtZa2bTHGICKPhiRJ6LoOFUL4CAOICMYYQggopRTfRimF+rR8Z/p+/tfy/wWtNc65P0HnHFprZBzHCyDPc+I4foStte/j53le8zyzrive+9uC1pqiKKiqihfDLkJ0kVzlOQAAAABJRU5ErkJggg==')",

            },
            'i.ichk_x183': {
                'background-image': "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4QYXBxQH5sescgAAAUxJREFUKM9tkrFOwmAUhb//p8VCQCAawaXRhM1BmDTGhcFNHoCBGB9BVx9AN1/AMApv4Eji4uAgiSYmhkVMJOCAJSZt2r+tQ6GG4B1vvntycs4Vw2kYtnvQ7cPAAsHihICZg1oZGhXQ2j24fQJDg5yxfOAHMLEjBkB2+xGckMswARyaAbqImG4f5MACKVkapaBZ9bg8luyWPCCyLAXLykEA5qrLyZ7G84fN/ZsTO4i1Ax+2cz6+Al8pLo4kAjjrjElnsrGYNlc8MH2u6glaDx6WHbCzucL13YhvUSSTYPFASui+/vBSTXK6n8L1Q/ojh9ajoLBuLNiV4SxrPZ2jeTNiPPVIJgTnnS/yaxtxIHNO1FthOLGjWF03QFnvFDOCT1Ukm00t9FFIgayVwVHRQk9K9PwWQ78Uw+EMdlTUttaoRAp/ryFAM7Cc/1/jF76IfO/GTNe2AAAAAElFTkSuQmCC')"
            },
            'i.ichk_x184': {
                'background-image': "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAACcFBMVEWdyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXcAAADnalsEAAAAAXRSTlMAQObYZgAAAAFiS0dEAIgFHUgAAAAJcEhZcwAADdcAAA3XAUIom3gAAAAHdElNRQfhBhcHGQYkbuKpAAAAX0lEQVQoz52SAQoAIQgE9wf3yr7rm46SzvVaKVoi3EYUUmDKhvCTkap3JmaahM+EXRUn94W9lALcI+KnZ4yDNgtEMwdg4I7vBFL1CwANsAHrDLAS8XH1QHYjPFkGsT4vJpoj0M6qwRkAAAAASUVORK5CYII=')"
            },
            '#skeleton-gallery-fullscreen-container': {
                'position': 'fixed',
                'background': "rgba(0, 0, 0, 0.86) url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAACgAgMAAADm7QMnAAAADFBMVEWIiIixsbGxsbGxsbF0SLUbAAAABHRSTlP/bytS3QghxwAAAEVJREFUeAFjYA3FAA4Mq17tWrcalVhBtOBK7IL/McFf4rUPZYtGLRq1aNSiUYtGLSJcoYzWR4PBolGLRi0atWjUotH6CAA67a9q5+gpSAAAAABJRU5ErkJggg==') ",
                'left': '0',
                'right': '0',
                'bottom': '0',
                'top': '0',
                'z-index': '1010',
                'overflow': 'hidden'
            },
            '#skeleton-gallery-fullscreen-images': {
                'position': 'fixed',
                'left': '0',
                'right': '0',
                'bottom': '0',
                'overflow': 'hidden',
                'border-top': '1px solid #868686',
                'height': '100px',
                'z-index': '1011',
                'background-color': 'rgba(56, 56, 56, 0.62)'
            },
            '#skeleton-gallery-fullscreen-content': {
                'position': 'relative',
                'cursor': 'pointer',
                'display': 'table',
                'height': '100%',
                'text-align': 'center',
                'width': 'auto'
            },
            '#skeleton-gallery-fullscreen-content.move:hover': {
                'cursor': 'move'
            },
            '#skeleton-gallery-fullscreen-content img': {
                'pointer-events': 'none',
                'display': 'inline-block',
                'box-shadow': '0 0 110px 20px #fff'
            },
            '#skeleton-gallery-fullscreen-closebutton': {
                'position': 'fixed',
                'right': '30px',
                'top': '30px',
                'z-index': '2',
                'cursor': 'pointer'
            },
            '#skeleton-gallery-fullscreen-closebutton::before': {
                'content': "'X'",
                'font-size': '43px',
                'font-weight': 'bold',
                'display': 'block',
                'color': 'rgb(255, 255, 255)',
                'padding': '10px',
                'border': '3px solid rgba(255, 255, 255, 0.28)',
                'width': '40px',
                'height': '40px',
                'text-align': 'center',
                'font-family': 'arial',
                'line-height': '1em',
                'background': 'rgba(0, 0, 0, 0.56)',
                'border-radius': '50%',
                'transition': 'box-shadow .3s linear'
            },
            '#skeleton-gallery-fullscreen-closebutton:hover::before': {
                'box-shadow': '0 0 10px 10px #fff'
            },
            '.noflow': {
                'overflow': 'hidden'
            },
            '#gall-window-maker': {
                'position': 'fixed',
                'z-index': '10',
                'box-shadow': '0 0 0 5px rgba(0, 0, 0, 0.24)',
                'right': '10px',
                'bottom': '10px'
            },
            '#gall-window-maker>div': {
                'float': 'right',
                'width': '40px',
                'height': '40px',
                'position': 'relative',
                'margin': '9px',
                'background': 'rgba(0, 0, 0, 0.41)'
            },
            '#gall-window-maker>div.selected': {
                'box-shadow': '0 0 9px 4px #fffdbd',
                'transition': 'all .3s linear'
            },
            '#gall-window-maker-horizontal': {

            },
            '#gall-window-maker-horizontal::before,#gall-window-maker-vertical::before,#gall-window-maker-all::before': {
                'content': "''",
                'background-color': '#d4cdb4',
                'border': '1px dotted #fff',
                'position': 'absolute',
                'margin': 'auto',
            },
            '#gall-window-maker-horizontal::before': {
                'top': '19%',
                'bottom': '19%',
                'left': '2px',
                'right': '2px'
            },
            '#gall-window-maker-vertical': {

            },
            '#gall-window-maker-vertical::before': {
                'top': '2px',
                'bottom': '2px',
                'left': '19%',
                'right': '19%'
            },
            '#gall-window-maker-all': {

            },
            '#gall-window-maker-all::before': {
                'top': '2px',
                'bottom': '2px',
                'left': '2px',
                'right': '2px'
            },
            '.window-maker.horizontal': {
                'height': 'auto',
                'width': '100%'
            },
            '.window-maker.vertical': {
                'width': 'auto',
                'height': '100%'
            },
            '#gall-window-title': {
                'position': 'fixed',
                'z-index': '11',
                'font-size': '40px',
                'color': 'white',
                'top': '30px',
                'left': '30px',
                'pointer-events': 'none',
                'text-shadow':'2px 2px 7px rgba(0, 0, 0, 0.65)'
            },
            '.noselect': {
                '-webkit-touch-callout': 'none',
                '-webkit-user-select': 'none',
                '-khtml-user-select': 'none',
                '-moz-user-select': 'none',
                '-ms-user-select': 'none',
                'user-select': 'none'
            }
        });

        style.insert(parent.document.body);

    }); // MODULE


})(Skeleton);
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
                keys: {},

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

                        Object.keys(stacker.method.items).forEach(function(q) {
                            stacker.method.triggerGetValues(stacker.method.items[q]);
                        });

                        ev.items = stacker.method.items;
                        ev.data = stacker.method.data;
                        ev.keys = stacker.method.keys;

                        call(ev);
                    }

                    return trigger;

                },
                // Methodlar trigger olduğunda nesnelerin içeriklerini liste halinde veren method
                triggerGetValues: function(item) {

                    var name = item.name || item.id;
                    var key = item.hasAttr('key');
                    if (key) {
                        stacker.method.keys[name] = item;
                    }

                    if (!name) return;
                    var data = stacker.method.data;
                    switch (item.type) {
                        case 'checkbox':
                        case 'radio':
                            var val = item.checked ? item.value == 'on' ? true : item.value : null;
                            if (val)
                                data[name] = val;
                            else if (data)
                                delete data[name];
                            break;
                        case 'button':
                            break;
                        default:
                            if (item.tagName != "button") {
                                if (item.value)
                                    data[name] = item.value;
                                else
                                    delete data[name];
                            }
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


                // İç içe sorgu ile alt nesnelerin taraması bitene kadar bir döngü oluşturuluyor.
                function repeat(el) {
                    for (var i = 0, ch = el.children; i < ch.length; i++) {
                        var _item = ch[i];
                        var sn = _item.id || _item.name;
                        var key = _item.hasAttr('key');

                        if (key) {
                            stacker.method.keys[sn] = _item;
                        }

                        if (sn) {
                            var p = _item;
                            stacker.method.items[sn] = p;

                            // Buradaki amaç şu.
                            // Skeleton.stacker({}).elements.* şeklinde çağırılır
                            // * işareti formdaki name veya id özelliğine sahip elementlerin id veya name adıyla çağırılmasını sağlar
                            // örnek 
                            // 1: Skeleton.stacker({}).elements.mide(actionname,action);
                            // 2: Skeleton.stacker({}).elements.bagirsak(actionname,action);
                            // 3: Skeleton.stacker({}).elements.adet(actionname,action);
                            // Formda elemente ne isim verilirse onun adıyla ulaşabiliyoruz
                            // Element adı aslında bir method. O methodun hangi eventname'ine ne yaptırmak istiyorsak onu veriyoruz
                            // Örneğin formda adet adında bir input elementim olsun ve ben onun change olayı tetiklendiğinde birşeyler yapmak istiyorsam kullanıyorum
                            // Her bir element için her defasında Skeleton.stacker({}).elements tanımını kullanmam gerekmiyor.
                            // Nokta işaretinden sonra ard arda diğer elementleri de kullanabilirim
                            // Skeleton.stacker({}).elements.adet(name,action).dis(name,action).kulak(name,action)

                            stacker.elements[sn] = function(eventname, action) {
                                var method = new stacker.method.trigger(action);
                                p.setBind(eventname, method);
                                return stacker.elements;
                            }
                        }
                        // Gelen nesnenin alt nesnelerini tarat
                        repeat(_item);
                    }
                }

                // Taramayı başlat
                repeat(obj);

            } else {



                // Source'den gelen veri window aldında bulunan bir object nesnesi de olabilir ya da json uzantılı bir dosya da olabilir
                // İlk olarak json uzantılı dosyaya bakılıyor
                if (typeof source == 'string' && source.endsWith('.json')) {

                    // Dosya yüklemesini yap
                    helper.http({
                        url: source,
                        success: function(_result) {
                            // Gelen dataları parse et ve elementleri sayfaya yansıt
                            _result = eval(_result);
                            parseData(_result, obj);
                        }
                    });
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

                            if (!res) {
                                // Eğer ID değerine sahip nesneleri ayıralım
                                if (key == 'id')
                                    stacker.method.items[items[key]] = main;

                                // Bir kontrol daha koyalım işimiz düzgün olsun.
                                // Key değeri metin dışında bir karakter içermesin
                                if (key.indexOf('.') != -1) throw ('Nesne özellik atamasında geçersiz karakterler var. Yalnızca alpha (a-z) karakterler yazınız.');
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
/////////////////////////////////////////////////////////////////////////
//          SKELETON INIT
/////////////////////////////////////////////////////////////////////////

(function (_) {

    // Init Module

    _.MODULE(function () {

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
            Object.keys(path.data).forEach(function (e) {
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


        _.path.method.loadData(_.data);



    }); // MODULE




    // Tüm modülleri çalıştır
    _.MODULE();



})(Skeleton);
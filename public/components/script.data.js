/////////////////////////////////////////////////////////////////////////
//          SKELETON
/////////////////////////////////////////////////////////////////////////

var SkeletonAction = (function (_) {

    _.method = {};
    _.globalMethod = {};
    

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

})(SkeletonAction);
/////////////////////////////////////////////////////////////////////////
//          SKELETON PROTOTYPES
/////////////////////////////////////////////////////////////////////////

(function (_) {
    
    _.globalPrototype = {
        method:{},
        extend:null
    }

})(SkeletonAction);
/////////////////////////////////////////////////////////////////////////
//          SKELETON GLOBAL PROTOTYPES METHODS
/////////////////////////////////////////////////////////////////////////

(function (_) {


    _.MODULE(function () {
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

            if (!this.hasClass(name)) {
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
                Object.keys(name).forEach(function (e) {
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
                Object.keys(args).forEach(function (key) {
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


        glob.method.hasClass = hasClass;
        glob.method.setClass = setClass;
        glob.method.remClass = remClass;
        glob.method.setAttr = setAttr;
        glob.method.remAttr = remAttr;
        glob.method.getAttr = getAttr;
        glob.method.setBind = setBind;
        glob.method.setBinds = setBinds;
        glob.method.remBind = remBind;
        glob.method.remBinds = remBinds;
        glob.method.setCSS = setCSS;
        glob.extend = extend;

    }); //MODULE

})(SkeletonAction);
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
    
})(SkeletonAction);
/////////////////////////////////////////////////////////////////////////
//          SKELETON SVG METHOD
/////////////////////////////////////////////////////////////////////////

(function (_) {


    _.MODULE(function () {
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
                Object.keys(params).forEach(function (e) {
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
        _.svg.matrix = matrix;

    }); // MODULE

})(SkeletonAction);
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

})(SkeletonAction);
/////////////////////////////////////////////////////////////////////////
//          SKELETON HELPER
/////////////////////////////////////////////////////////////////////////

(function (_) {
    
    _.helper = {
        method:{}
    };

})(SkeletonAction);
/////////////////////////////////////////////////////////////////////////
//          SKELETON GLOBAL PROTOTYPES METHODS
/////////////////////////////////////////////////////////////////////////

(function (_) {


    _.MODULE(function () {

        var method = _.helper.method;



        //....................................................................................




        function ismobile() {
            var check = false;
            (function (a) {
                if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true;
            })(navigator.userAgent || navigator.vendor || window.opera);
            return check;
        }



        //....................................................................................




        method.ismobile = ismobile;

    }); // MODULE

})(SkeletonAction);
(function(_){

    _.element = {
        method:{}
    };

})(SkeletonAction);
/////////////////////////////////////////////////////////////////////////
//          SKELETON ELEMENT METHODS
/////////////////////////////////////////////////////////////////////////

(function (_) {


    _.MODULE(function () {
        var method = _.element.method;
        var global = _.element.globals;


        //....................................................................................


        var x = 0, y = 0, drag = false, self = null;


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

})(SkeletonAction);
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



})(SkeletonAction);
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

  

})(SkeletonAction);
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
            this.target.parentNode.removeChild(this.target);
            return this;
        }



        //....................................................................................





        // Sınıf ekleme
        inc.setClass = function (name) {

            for(var i = 0, n = arguments; i < n.length; i++){
                this.target.setClass(n[i]);
            }
            
            return this;
        }



        //....................................................................................




        // Sınıf kaldır
        inc.remClass = function (name) {
            if (this.target.className) {
                var list = this.target.className.split(' ');
                if (list.indexOf(name) != -1) {
                    list.splice(list.indexOf(name), 1);
                    this.target.className = list.join(' ');
                }
            }
            return this;
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




        // <Style>...</Style> nesneleri için global style tanımlamaları oluşturur
        // Global olarak 
        inc.setSheet = function (name, value) {
            var self = this;
            if (arguments.length == 2) {
                if (!name || !value) return self;
                var json = JSON.stringify(value);
                json = json.replace(/},/g, '\n');
                json = json.replace(/,/g, '; ');
                json = json.replace(/:{/g, '{')
                json = json.replace(/\"/g, '')
                self.target.innerHTML += (name + json + '\n');
            }
            else if (arguments.length == 1) {
                Object.keys(name).forEach(function (t) {
                    self.setSheet(t, name[t]);
                });
            }
            return self;
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



        _.collection.create = coll;

    }); //MODULE

})(SkeletonAction);
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

})(SkeletonAction);
/////////////////////////////////////////////////////////////////////////
//          SKELETON TOOLTIP
/////////////////////////////////////////////////////////////////////////

(function (_) {


    _.MODULE(function () {

        _.tooltip = {};


    }); // MODULE

})(SkeletonAction);
/////////////////////////////////////////////////////////////////////////
//          SKELETON TOOLTIP METHOD
/////////////////////////////////////////////////////////////////////////
(function(_){

    _.MODULE(function(){


        var tooltip = _.tooltip;

        function message(message, opts) {

            if (!message) return;
            opts = opts || { x: null, y: null, ev: parent.window.event };
            tooltip.container.target.setCSS({
                left: (opts.x || opts.ev.pageX || parent.window.event.pageX) + 'px',
                top: (opts.y || opts.ev.pageY || parent.window.event.pageY) + 'px'
            });

            tooltip.container.setHTML(message);
            show();
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

})(SkeletonAction);
/////////////////////////////////////////////////////////////////////////
//          SKELETON TOOLTIP INIT
/////////////////////////////////////////////////////////////////////////
(function (_) {

    _.MODULE(function () {

        var tooltip = _.tooltip;
        var collection = _.collection.create;

        //....................................................................................


        var tool = new collection('div', { id: 'skeleton-tooltip' });


        tool.setCSS({
            position: 'absolute',
            backgroundColor: '#f9f9d5',
            borderWidth: '1px',
            borderStyle: 'solid',
            borderColor: '#ffd383',
            borderRadius: '4px',
            boxShadow: '1px 1px 3px #777',
            fontSize: '16px',
            fontFamily: 'Arial',
            transition: 'all .2s linear',
            display: 'none',
            padding: '10px',
            pointerEvents: 'none',
            zIndex: 9999
        });

        tooltip.container = tool;

        tool.insert(parent.document.body);



        //....................................................................................

        if (!parent.document.getElementById('skeleton-tool-tip-style'))
            var style = new collection('style', { id: 'skeleton-tool-tip-style' })
                .setSheet({
                    '.no-animate': {
                        transition: 'none !important'
                    }
                })
                .insert(parent.document.body);



    }); // MODULE

})(SkeletonAction);
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

})(SkeletonAction);
/////////////////////////////////////////////////////////////////////////
//          SKELETON PATH DATA
/////////////////////////////////////////////////////////////////////////

(function (_) {


    _.MODULE(function () {

        var data = _.path.data;



        //....................................................................................



        // Sahne üzerinde bulunan path nesnelerinin alabilecekleri menulist parametrelerini burada tanımlıyoruz
        // keyname : sahne üzerinde yer alan path/rect/circle gibi herhangi tanımlanmış nesnenin ID bilgisini içerir. Benzersiz bir ad olmalı.
        // keyname.title : fare ile nesne üzerine gelindiğinde gösterilecek metin
        // keyname.data : array tipindedir ve bu nesne üzerine gelebilecek _.checklist içinde bulunan benzersiz keyname değerleri buraya yazılır.

        // _.checklist içinde tanımlı olan keyname'ler ilgili SVG sahnesinde bulunan isimlerdir
        // bu liste içinde ki ID değerleri herhangi bir SVG nesnesi içinde olabilir
        // yani buradaki veriler birden fazla SVG nesnesinin bilgilerini barındırır. tabiki hiç biri birbirine karışmaz
        // dosya1.svg içinde path1 adında ID'e sahip nesne olabilir. Buradaki data bilgisindeki değerler kullanılır
        // dosya2.svg içinde de path1 adında ID'e sahip bir nesne olursa o da bu değerleri ortak kullabilir
        // eğer dosya3.svg içinde ayrı isimlerde ID'e sahip nesneler oluşturulsa onlarda burada tutulacaktır. 
        // isim tanımlamaları isteğe göre yapılabilir. 1,2,3 diye gitmek zorunda değildir. anlaşılması için bu şekilde yapılmıştır.
        // Uygulama çalıştırıldığı anda tüm checklist okunup sahne üzerinde taranır. Var olan isimlere ait tüm datalar aktarılır.
        //_.2checkList
        data = {


            'path1': { title: '', data: ['icn1', 'icn2', 'icn3', 'icn4'] },
            'path2': { title: '', data: ['icn4', 'icn2'] },
            'path3': { title: 'Üst Özefagus Sfinkteri', data: ['icn1', 'icn2'] },
            'path4': { title: 'Hipofarenks', data: ['icn4'] },
            'path5': { title: 'custom path name', data: ['icn1', 'icn2'] },
            'path6': { title: 'custom path name', data: ['icn1', 'icn9', 'icn10'] },
            'path7': { title: 'Proksimal Çıkan Kolon', data: ['polip', 'icn7', 'icn11'] },
            'path8': { title: 'custom path name', data: ['polip', 'icn8', 'icn12'] },
            'path9': { title: 'Proksimal Sigmoid Kolon', data: ['polip', 'icn2'] },
            'path10': { title: 'Distal İnen Kolon', data: ['polip'] },
            'path11': { title: 'Proksimal İnen Kolon', data: ['polip'] },
            'path12': { title: '', data: ['polip', 'icn2', 'icn3'] },
            'path13': { title: '', data: ['polip', 'icn2', 'icn3'] },
            'path14': { title: 'Hepatik Fleksura', data: ['icn3', 'icn2', 'icn3'] },
            'path15': { title: 'Distal Çekum', data: ['icn3', 'icn2', 'icn3'] },
            'path16': { title: 'Proksimal Çekum', data: ['icn3', 'icn2', 'icn3'] },
            'path17': { title: 'Duedonum 3. Kısım', data: ['icn3', 'icn2', 'icn3'] },
            'path18': { title: 'Duedonum 4. Kısım', data: ['icn3', 'icn2', 'icn3'] },
            'path19': { title: '', data: ['icn3', 'icn2', 'icn3'] },
            'path20': { title: '', data: ['icn3', 'icn2', 'icn3'] },
            'path21': { title: 'Terminal İleum', data: ['icn3', 'icn2', 'icn3'] },
            'path22': { title: 'Distal İleum', data: ['icn3', 'icn2', 'icn3'] },
            'path23': { title: 'Proksimal İleum', data: ['icn3', 'icn2', 'icn3'] },
            'path24': { title: 'Distal Jejunum', data: ['icn3', 'icn2', 'icn3'] },
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
            'path54': { title: 'Nazofarenks', data: ['icn3', 'icn2', 'icn3'] },



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

})(SkeletonAction);
/////////////////////////////////////////////////////////////////////////
//          SKELETON PATH METHODS
/////////////////////////////////////////////////////////////////////////

(function (_) {


    _.MODULE(function () {

        var path = _.path;
        var menu = _.menu;
        var tooltip = _.tooltip;


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




        // Sahne üzerinde, gelen dataya göre nesne oluşturur
        function createPathItem(dbdata) {

            Object.keys(dbdata).forEach(function (e) {

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
                    clone.setBind('mouseup', path.method.selectRemovedItem);

                    // Kopyayı sahneye ekle
                    _.container.appendChild(clone);
                }
            });

        }



        //....................................................................................




        // Veritabanından gelen verileri sahneye yansıtıyoruz
        function loadData(dbdata) {
            Object.keys(path.data).forEach(function (e) {
                createPathItem(path.data[e].transforms);
            });
        }



        //....................................................................................




        // Sahne üzerinde seçilen clone nesnenin sahneden silinmesi işlemini yürütür

        function removeSelectedClone(e) {

            console.log('tıklandı');
            // Klavyeden space tuşuna basıltığında siler
            if (e.keyCode == 32) {

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
                        var dta = path.data[root];

                        // Data tablosunda bir bilgi varsa
                        if (dta) {

                            // Kaydın bulunacağı pozisyon index değeri
                            var removeItem = -1;

                            // Veriyi bul
                            for (var i = 0; i < dta.data.length; i++) {

                                // Transform alanı nesnenin pozisyon değerleri ve adını tuttuğu için..
                                // path nesnesinin dataları içinde pozisyonunu arıyoruz
                                if (dta.transforms[i].obj == id)
                                    removeItem = i;
                            }


                            // Kayıt pozisyonu varsa 0 dan büyük olacağından sil
                            if (removeItem != -1)
                                dta.transforms.splice(removeItem, 1);


                            // İlgili Path ID nesnesine ait transform listesinde tutulan bir veri kalmadıysa, maviye boyanmış/taranmış alanı iptal eder
                            if (dta.transforms.length == 0)
                                doc.querySelector('#' + root).remClass('reserve');


                        } else
                            // Tabloda tutulan bir veri kalmadıysa, maviye boyanmış/taranmış alanı iptal eder
                            doc.querySelector('#' + root).remClass('reserve');
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
        path.method.findAllowPath = findAllowPath;
        path.method.loadData = loadData;

    }); // MODULE

})(SkeletonAction);
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

})(SkeletonAction);
/////////////////////////////////////////////////////////////////////////
//          SKELETON MENU
/////////////////////////////////////////////////////////////////////////

(function (_) {
    
    _.menuObject = {
        // Kullanılacak methodların listesi
        method:{},
        // Menüde yer alan ikon ve metinlerin listesi
        data:{},
        // Menude ki nesneler
        objects:[],
        // Queryden gelebilecek olan section değerine ait tanımlı bilgiler
        sections:{}
    };

})(SkeletonAction);
/////////////////////////////////////////////////////////////////////////
//          SKELETON MENU DATA
/////////////////////////////////////////////////////////////////////////

(function (_) {


    _.MODULE(function () {

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
        // keyname.urlForPopup : nesne sahne üzerine bırakıldığında açılacak olan html dosyanın URL adresi. Eğer URL yoksa isim tanımlanmamalı

        menu.data = {


            'ostonomi': {
                title: "Ostomi",
                section: ['On'],
                data: 'data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMC41NiAzMC41NiI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOiMyMzFmMjA7fTwvc3R5bGU+PC9kZWZzPjx0aXRsZT5vc3RvbWk8L3RpdGxlPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTEwMzguNTMsMjI1Ljc5YTE1LjQ0LDE1LjQ0LDAsMCwwLTEzLjI4LDEzLjI4aDJhMTMuNDQsMTMuNDQsMCwwLDEsMTEuMjYtMTEuMjZaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTAyNS4yNSAtMjI1Ljc5KSIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTEwNDIuNTMsMjI1Ljc5djJhMTMuNDQsMTMuNDQsMCwwLDEsMTEuMjYsMTEuMjZoMkExNS40NCwxNS40NCwwLDAsMCwxMDQyLjUzLDIyNS43OVoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMDI1LjI1IC0yMjUuNzkpIi8+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMTA1My43OCwyNDMuMDdhMTMuNDQsMTMuNDQsMCwwLDEtMTEuMjYsMTEuMjZ2MmExNS40NCwxNS40NCwwLDAsMCwxMy4yOC0xMy4yOFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMDI1LjI1IC0yMjUuNzkpIi8+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMTAzOC41MywyNTQuMzNhMTMuNDQsMTMuNDQsMCwwLDEtMTEuMjYtMTEuMjZoLTJhMTUuNDQsMTUuNDQsMCwwLDAsMTMuMjgsMTMuMjhaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTAyNS4yNSAtMjI1Ljc5KSIvPjwvc3ZnPg=='
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
                data: 'data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMy4yOSAzMy42OSI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOm5vbmU7c3Ryb2tlOiMyMzFmMjA7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjJweDt9PC9zdHlsZT48L2RlZnM+PHRpdGxlPmNvYmJsZSBzdG9uZTwvdGl0bGU+PGxpbmUgY2xhc3M9ImNscy0xIiB4MT0iMTYuMzMiIHgyPSIxNi4zMyIgeTI9IjYuNjMiLz48bGluZSBjbGFzcz0iY2xzLTEiIHgxPSIxNi4zMyIgeTE9IjI3LjA2IiB4Mj0iMTYuMzMiIHkyPSIzMy42OSIvPjxsaW5lIGNsYXNzPSJjbHMtMSIgeDE9IjYuNjMiIHkxPSIxNy4wMyIgeTI9IjE3LjAzIi8+PGxpbmUgY2xhc3M9ImNscy0xIiB4MT0iMzMuMjkiIHkxPSIxNy4wMyIgeDI9IjI2LjY3IiB5Mj0iMTcuMDMiLz48cmVjdCBjbGFzcz0iY2xzLTEiIHg9IjEwMjkuODgiIHk9IjI4Ny4zMyIgd2lkdGg9IjE0LjA4IiBoZWlnaHQ9IjE0LjA4IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtOTI1LjAzIDU0Mi4wOSkgcm90YXRlKC00NSkiLz48L3N2Zz4='
            },
            /**/
            'polip': {
                title: "Polip",
                section: ['Enteroklizis', 'BatinPelvisBT', 'BatinPelvisMR', 'MREnterografi', 'MREnteroklizis', 'CiftKontrastKolonGrafi', 'OzefagusMideDuedonumGrafisi', 'Gastroskopi', 'Kolonoskopi', 'D-Balon', 'Kapsül'],
                data: 'data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxOC4xNyAyNi4zMyI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOm5vbmU7c3Ryb2tlOiMwMDA7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjJweDt9PC9zdHlsZT48L2RlZnM+PHRpdGxlPnBvbGlwPC90aXRsZT48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0xMjA4LjUsMjk1LjE3VjI3Ny45MmE4LjA4LDguMDgsMCwwLDEsOC4wOC04LjA4aDBhOC4wOCw4LjA4LDAsMCwxLDguMDgsOC4wOHYxNy4yNSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEyMDcuNSAtMjY4LjgzKSIvPjwvc3ZnPg==',
                urlForPopup: '/modals/polip.html'
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
                data: 'data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxOC4xNyAyNi4zMyI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOm5vbmU7c3Ryb2tlOiMwMDA7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjJweDt9PC9zdHlsZT48L2RlZnM+PHRpdGxlPnBzZWRvcG9saXA8L3RpdGxlPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTEyMDguNSwzNDMuNzVWMzI2LjVhOC4wOCw4LjA4LDAsMCwxLDguMDgtOC4wOGgwYTguMDgsOC4wOCwwLDAsMSw4LjA4LDguMDh2MTcuMjUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMjA3LjUgLTMxNy40MikiLz48cGF0aCBkPSJNMTIxMi40NCwzNDMuNTdWMzI4LjMxaDEuN3YxLjQzYTQuMjEsNC4yMSwwLDAsMSwxLjM2LTEuMjYsMy43NCwzLjc0LDAsMCwxLDEuODQtLjQyLDQuMzYsNC4zNiwwLDAsMSwyLjQ5LjczLDQuNDcsNC40NywwLDAsMSwxLjYzLDIuMDUsNy40OSw3LjQ5LDAsMCwxLC41NSwyLjksNy4zOCw3LjM4LDAsMCwxLS42MSwzLjA1LDQuNjIsNC42MiwwLDAsMS00LjIsMi44LDMuNTIsMy41MiwwLDAsMS0xLjY4LS40LDMuODMsMy44MywwLDAsMS0xLjIyLTF2NS4zN1ptMS42OS05LjY5QTQuOCw0LjgsMCwwLDAsMTIxNSwzMzdhMi42NCwyLjY0LDAsMCwwLDIuMDksMSwyLjcsMi43LDAsMCwwLDIuMTQtMS4wNiw1LDUsMCwwLDAsLjg5LTMuMjcsNC44Nyw0Ljg3LDAsMCwwLS44Ny0zLjE2LDIuNjEsMi42MSwwLDAsMC0yLjA3LTEsMi42OSwyLjY5LDAsMCwwLTIuMTIsMS4xMkE1LDUsMCwwLDAsMTIxNC4xMywzMzMuODlaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTIwNy41IC0zMTcuNDIpIi8+PC9zdmc+'
            },
            /**/
            'luminal_darlik': {
                title: "Lüminal Darlık",
                section: ['BatinUS', 'Enteroklizis', 'BatinPelvisBT', 'BatinPelvisMR', 'MREnterografi', 'MREnteroklizis', 'CiftKontrastKolonGrafi', 'PerianalMR', 'PerianalUS', 'MRCP', 'OzefagusMideDuedonumGrafisi', 'Gastroskopi', 'Kolonoskopi', 'D-Balon', 'Kapsül'],
                data: 'data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1OS4zOSAyMy40MSI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOm5vbmU7c3Ryb2tlOiMyMzFmMjA7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjJweDt9PC9zdHlsZT48L2RlZnM+PHRpdGxlPkx1zIhtaW5hbCBkYXJsxLFrPC90aXRsZT48cG9seWxpbmUgY2xhc3M9ImNscy0xIiBwb2ludHM9IjAuNzQgMC45NiA4LjQgOS4yOSA1MC4wNyA5LjI5IDU4LjY1IDAuNzEiLz48cG9seWxpbmUgY2xhc3M9ImNscy0xIiBwb2ludHM9IjU4LjY1IDIyLjQ2IDUwLjk5IDE0LjEyIDkuMzIgMTQuMTIgMC43NCAyMi43MSIvPjwvc3ZnPg=='
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
                data: 'data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMi44MyAzMi44MyI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOm5vbmU7c3Ryb2tlOiMyMzFmMjA7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjJweDt9LmNscy0ye2ZpbGw6IzIzMWYyMDt9PC9zdHlsZT48L2RlZnM+PHRpdGxlPmZpc3R1zIhsPC90aXRsZT48Y2lyY2xlIGNsYXNzPSJjbHMtMSIgY3g9IjE2LjQxIiBjeT0iMTYuNDEiIHI9IjE1LjQxIi8+PGNpcmNsZSBjbGFzcz0iY2xzLTIiIGN4PSIxNi40MSIgY3k9IjE2LjY5IiByPSI0Ii8+PC9zdmc+'
            },
            /**/
            'kapanmis_fistul': {
                title: "Kapanmış Fistül",
                section: ['On', 'BatinUS', 'Enteroklizis', 'BatinPelvisBT', 'BatinPelvisMR', 'MREnterografi', 'MREnteroklizis', 'CiftKontrastKolonGrafi', 'PerianalMR', 'PerianalUS', , 'OzefagusMideDuedonumGrafisi', 'Gastroskopi', 'Kolonoskopi', 'D-Balon', 'Kapsül'],
                data: 'data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0Mi4wOCA0Mi4wOCI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOm5vbmU7c3Ryb2tlOiMyMzFmMjA7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjJweDt9LmNscy0ye2ZpbGw6IzIzMWYyMDt9PC9zdHlsZT48L2RlZnM+PHRpdGxlPmthcGFubcSxc8ynIGZpc3R1zIhsPC90aXRsZT48Y2lyY2xlIGNsYXNzPSJjbHMtMSIgY3g9IjIxLjA0IiBjeT0iMjEuMDQiIHI9IjE1LjQxIi8+PGNpcmNsZSBjbGFzcz0iY2xzLTIiIGN4PSIyMS4wNCIgY3k9IjIxLjMyIiByPSI0Ii8+PGxpbmUgY2xhc3M9ImNscy0xIiB4MT0iMzEuMjkiIHkxPSIwLjcxIiB4Mj0iMC43MSIgeTI9IjMxLjI5Ii8+PGxpbmUgY2xhc3M9ImNscy0xIiB4MT0iNDEuMzciIHkxPSIxMC43OSIgeDI9IjEwLjc5IiB5Mj0iNDEuMzciLz48L3N2Zz4='
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
                data: 'data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzNy40IDI3Ljg4Ij48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6bm9uZTtzdHJva2U6IzIzMWYyMDtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6MnB4O308L3N0eWxlPjwvZGVmcz48dGl0bGU+cHJlc3Rlbm90aWs8L3RpdGxlPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTEwMjkuNiw3NjYuOWExMi45NCwxMi45NCwwLDAsMSwwLDI1Ljg4IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTAyOS42IC03NjUuOSkiLz48bGluZSBjbGFzcz0iY2xzLTEiIHgxPSIxMi41NiIgeTE9IjEwLjY5IiB4Mj0iMzcuNCIgeTI9IjEwLjY5Ii8+PGxpbmUgY2xhc3M9ImNscy0xIiB4MT0iMTIuNTYiIHkxPSIxNy4xOSIgeDI9IjM3LjQiIHkyPSIxNy4xOSIvPjwvc3ZnPg=='
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
                urlForPopup: '/modals/ulser.html'
            },
            /**/
            'ulser_izole': {
                title: "Ülser (İzole)",
                section: ['Enteroklizis', 'MREnterografi', 'MREnteroklizis', 'CiftKontrastKolonGrafi', 'OzefagusMideDuedonumGrafisi', 'Gastroskopi', 'Kolonoskopi', 'D-Balon', 'Kapsül'],
                data: 'data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2MyAzNi4yNCI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOm5vbmU7c3Ryb2tlOiMwMDA7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjJweDt9PC9zdHlsZT48L2RlZnM+PHRpdGxlPnXMiGxzZXIgKGl6b2xlKTwvdGl0bGU+PHBvbHlsaW5lIGNsYXNzPSJjbHMtMSIgcG9pbnRzPSI2MyAxNi4wOCA0MS41IDE2LjA4IDQxLjUgMzUuMjQgMzEuNSAzNS4yNCAyMS41IDM1LjI0IDIxLjUgMTYuMDggMCAxNi4wOCIvPjxwYXRoIGQ9Ik0yMTUzLjI5LDIzNS44M2wtNy42OCwzLjI4di0xLjQybDYuMDgtMi41Mi02LjA4LTIuNXYtMS40Mmw3LjY4LDMuMjRaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjEzNS41IC0yMjkuMjYpIi8+PHBhdGggZD0iTTIxNjAuMjEsMjQwLjloLTEuNDJ2LTkuMDdhNy4zNyw3LjM3LDAsMCwxLTEuMzUsMSw5LjU4LDkuNTgsMCwwLDEtMS41Ljc0di0xLjM4YTguNTksOC41OSwwLDAsMCwyLjA5LTEuMzYsNS4zNSw1LjM1LDAsMCwwLDEuMjctMS41NWguOTJaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjEzNS41IC0yMjkuMjYpIi8+PHBhdGggZD0iTTIxNzQuMjQsMjM3LjgybDEuNC4xOGEzLjY0LDMuNjQsMCwwLDEtMS4xNywyLjI3LDMuNDIsMy40MiwwLDAsMS0yLjMyLjgyLDMuNjEsMy42MSwwLDAsMS0yLjc3LTEuMTMsNC41Nyw0LjU3LDAsMCwxLTEtMy4yMyw1Ljg2LDUuODYsMCwwLDEsLjQ1LTIuMzgsMy4xNCwzLjE0LDAsMCwxLDEuMzctMS41Myw0LjA3LDQuMDcsMCwwLDEsMi0uNTEsMy40OCwzLjQ4LDAsMCwxLDIuMjQuNjksMy4xNywzLjE3LDAsMCwxLDEuMTIsMmwtMS4zOC4yMWEyLjMsMi4zLDAsMCwwLS43LTEuMjcsMS44MSwxLjgxLDAsMCwwLTEuMjEtLjQzLDIuMjEsMi4yMSwwLDAsMC0xLjc1Ljc3LDMuNjYsMy42NiwwLDAsMC0uNjcsMi40NCwzLjc4LDMuNzgsMCwwLDAsLjY1LDIuNDYsMi4xMSwyLjExLDAsMCwwLDEuNjkuNzcsMiwyLDAsMCwwLDEuNC0uNTFBMi41NSwyLjU1LDAsMCwwLDIxNzQuMjQsMjM3LjgyWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIxMzUuNSAtMjI5LjI2KSIvPjxwYXRoIGQ9Ik0yMTc2Ljg1LDI0MC45di04LjRoMS4yN3YxLjE4YTMsMywwLDAsMSwxLjA1LTEsMywzLDAsMCwxLDEuNDktLjM4LDIuNzYsMi43NiwwLDAsMSwxLjUzLjM5LDIuMDcsMi4wNywwLDAsMSwuODQsMS4wOCwzLDMsMCwwLDEsMi41OS0xLjQ3LDIuNTYsMi41NiwwLDAsMSwxLjkyLjY5LDMsMywwLDAsMSwuNjcsMi4xM3Y1Ljc2aC0xLjQydi01LjI5YTMuODgsMy44OCwwLDAsMC0uMTQtMS4yMywxLjE5LDEuMTksMCwwLDAtLjUtLjYsMS41NywxLjU3LDAsMCwwLS44NS0uMjMsMiwyLDAsMCwwLTEuNDcuNTksMi42LDIuNiwwLDAsMC0uNTgsMS44OXY0Ljg4aC0xLjQydi01LjQ2YTIuNCwyLjQsMCwwLDAtLjM1LTEuNDIsMS4zMiwxLjMyLDAsMCwwLTEuMTQtLjQ3LDIuMDcsMi4wNywwLDAsMC0xLjExLjMyLDEuNzksMS43OSwwLDAsMC0uNzQuOTIsNS4yLDUuMiwwLDAsMC0uMjMsMS43NnY0LjM2WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIxMzUuNSAtMjI5LjI2KSIvPjwvc3ZnPg==',
                urlForPopup: '/modals/ulser.html'
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
                data: 'data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzNi45OCA0OC40MyI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOm5vbmU7c3Ryb2tlOiMwMDA7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjJweDt9PC9zdHlsZT48L2RlZnM+PHRpdGxlPkljb24xPC90aXRsZT48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik01MS4xNSw3LjIxUzM0Ljg5LDE3LDI4LDI4Ljc3YTE0LjgzLDE0LjgzLDAsMCwwLDIuNTYsMTguMTdjLjM2LjM1LjcyLjY4LDEuMDcsMWExOC43MSwxOC43MSwwLDAsMCwxMy41OCw1YzMuMzgtLjIxLDYuODUtMS40LDguNjctNC45NEM1OC4xNSwzOS43MSw1NS40NywxMiw2MS4yOCw2LjIxIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjUuMDEgLTUuNSkiLz48ZWxsaXBzZSBjbGFzcz0iY2xzLTEiIGN4PSIxNi4wNyIgY3k9IjIxLjg0IiByeD0iMi41NyIgcnk9IjMuNDQiLz48ZWxsaXBzZSBjbGFzcz0iY2xzLTEiIGN4PSIyMy41NSIgY3k9IjI5LjMiIHJ4PSIzLjQ0IiByeT0iNC4wMiIvPjxlbGxpcHNlIGNsYXNzPSJjbHMtMSIgY3g9IjEzLjUiIGN5PSIzMC45IiByeD0iMi4xMyIgcnk9IjIuNDkiLz48ZWxsaXBzZSBjbGFzcz0iY2xzLTEiIGN4PSIxOC42NCIgY3k9IjM4Ljk3IiByeD0iMi4xMyIgcnk9IjIuNDkiLz48ZWxsaXBzZSBjbGFzcz0iY2xzLTEiIGN4PSI5Ljg2IiBjeT0iMzcuOTciIHJ4PSIxLjUxIiByeT0iMS43NyIvPjwvc3ZnPg=='
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
                ////data: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHYAAABhCAYAAAADdFUyAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QA/wD/AP+gvaeTAAAAB3RJTUUH4QUaASU4J7tYQgAAFSxJREFUeNrtnXmcFNW1x7+3qmdhm6FZlU1Q4vqACAhS6isBifoSjTTiFkOMUXFJMomF8WlMNKuJpjQkErfwniSRxAFbE5O8IAEpwBIEFBMEF0CQfXF6GJhhZrqr6v1xe2Z6erp7enp66B7k9/nM5zN9tzr3nrr3nnvOuafgBE7gBDoPRK4JSBemrU8Cboz+fMLQrLdyTVM+w5drAtqA84GvRv9fBpxgbAoouSagDaiI+d/NNTH5js7E2OqY/7vkmph8R2dairfG/D8WeBbAtPVvAZ8HhgBbgPmGZv0h18TmGp1JeCoEagA1mvQUcB4wJkHxZw3Nui3NdrtF2/kPYBQwAOgNdAUKYsbIAeqRK8dOYA+wDnjT0KwPcj0+8eg0jAUwbf2bwOw0i99taNbjCdpQgGuBK4DPAv2AMHAY2I1k2G4gBFRG8wC6AT2BXsAwoC/QB+iOZPhHwGLgFUOz3s71WHUqxgKYtn4d8AzQo5Winxia1Sdapxj4GjAZGA0UA5uAlcA/kLMuTAYwbX0IcsZfAvwn8kXZDywBFhiatSIX49TpGAuNg7kaOKmVoo8gGdkPuUe/Aaw1NGtpB9LWF8ngicDZwEDgdeCHhmZtO1Zj1CkZC2Da+izg0TSKzgV+kyuFhmnrVwL/DZwLLAdmGJq1r6Of25kZezvwZCvFvm5o1pxc0xqldzTwMKAD84AyQ7NqO+p5nekcG4/RaZSpzDWRDTA06y1Dsy4FrkLu9TtMW7+lo57XKWdsVLLdh5RKk8EFhhiatSvX9Cbpw6XALwA/EDA0681stt9ZZ+xNpGYqwMZ8ZSqAoVmLDM0aAfwNWG3a+rez2X6nY6xp6xOQb3pr6BRGAkOzZgKTgMdMW385W+3m3VJs2noB8EWkFugAUsvjAScj96ZAmk2NNDTr37nuTxv6fQpgI7Vrlxiatb097eUjY99EHvjbg+8YmpXOUSjvYNr6XOBm4ExDs97PtJ28Yqxp66OA9cD7gIl8eyfTZIdNBy8amnV1rvvSznH4CXA/7Vh18o2xLwBXGZpVFJc+HpgPnNpKE69GjxSdHqatPwZ8GxhhaNaGttbPN+HpYuQhvhkMzVoNnAXch1S0743JrkR6VMw6Xpga7fPdSIPHv01bH9DW+vk2YzcC3zI069VWyvmA05AmvO2GZlWn035nRMzMLWyLoSLfDO1VpOEdYWhWBLkPH/cwNOtu09YvBnbQutGjEfm2FHtI4/YJxMDQrNFAf9PWg+nWyTfGdss1AXmMQcBU09YvT6dw3jDWtPVrgBFIm+kJxCGqHr0S+HtUxkiJrAtPUYvFRUgfIa+V4g35w5BqtZ8ZmnVfRg8OhsbRUtV4GwH/e9nuYxq03A9cHtO/Q8DVBPx17W3atPUdwDZDsy5KVS5rwlNUJfYW0lqxGekrlM6LU4i01Ew1NOvldpAwEPlCxaJ3tvrXRvwncGFcmppJQwkwGthv2voXDM36a7JCWWGsaesnIV0/FwBfMTSrPmtDFKwYBGIUsIaAf3+KkjUJ0to9QzJEvIdEBa2vXmnB0KwDpq3fC/yRFH5f2dpjHwYcQ7OuzzJTrwSxDfgrsJVgaELW2j62cMkSYwEMzXoE2G7a+k3JymSLsaOBf3bAgDxE0xLWDbxnkhd100zLCbLK2CgeJ4XPV7YY+2/kpaksQ0TifvdMWtQtBeHEFHVk2vGL/wX6mLZ+Q6LMbDH2m0CvqBI/e3BKYwQODyKlSadgoTji4sYcg91uFIkjEY5TGJrlAg8gGdwCWTvuRC0wq5CCwnogQgYvjoPKYN/moq3hsx/57t4X7wNFQ9SCVwBe0ZZ7+8+4eUzx8h9sqz8zoggHges7o2j92z8+8NSyVVXX/xlfpWwo0rN+Qsn8qx7oe8eN79V9dr+HYszSlh2btTkYmgfMiEnZBwwh4M+e/NE07h4w3dCshbHpWVNQRC0wRcjLUkVInW9BW/9UnILDbs/CsFesIOrngvIiUA4sBPdXtW53pcbtXqSKSEOdQprfsYlFxEP4PJQZgGPaensN+JnCpeM2/JeAH8cn5pV1pz0ofLFySj1FryKirrpeMYXUf7Z+Wuk7AI/Yk8pVnOkeyoBZ2mt7OpSYljN2D3LGZn1rMG19JLAOT/Q1LlhW2ZCeNyrF9qLe666gxFjvlGrq3ZJGg8J3tKXXeIjNPurLc01rNmFo1r+A1Qhvamz6ccNYlErwYmUtFXwVzYoUiPplpxZuvLBtDWcFHtk/7sRiJdJJoRH5Zo9tjpf2F+EVNL18IuwxtV+SaxGFSC1mzLvqNdfi9Vb3/taquWoFC58ei6dORK0cAUp/5Fm5BtiIVIuuJODfncWeOMTvscHQaUh98vnIK5kqcARpZ14DBAn4092XFwHfj03Ib8Y6pX9HqR4jRQEPnB7bkHdaE5Tt4aFWxY2f1yhDdHl5R8l39+0etL1uzIXgzsNXCV6LBeuKhooEQ38AFhLw/yULPSkg4JczNhiahnR4/0IrdXZF9+rfEvB/1ErZVcBgc+15Zxlj12yCNBhr2npPZBiAjl5OAHBROatwnVhSc9WOx/crpXiFpYgwoIJb3OuGpQ+UXF/yxJBNdfIie0/1gPD79h+6f+8K9cOjF4Fa2bw5gGDluUcjJa9uDw/qg1IDoi4RU2MhgC8DXyYYWgNcR8C/lcyxU9IR+hXwjTTrDER6KhoEQ5cR8C9LVtDQrKOmrRfhqVOR935TM9a09fnA9cgzabasEymh4LAzfKoY4vvoVtRD63BLx0BYnmN9tW+OLFoz5YAzYKEiHE/gEXL6ir6+3UuGFm6Y82H1Rc2pDPjXEQydC95bKIdiMtp0GDgPeJtgaAoBf6b3awoJhpYgTZNtRRHwGsHQxQT8Vopym3CVRl16Usaatr4dGY/hCuDdaNkOPR55CDwEgws2i8U103bjlN6AEjXQiDBESk5/p27coi8Vv3HGwcjJeAh6qftEGF/V1voRo+JEwUqCoe8h9c2JEAHeRF6IDkf7eiGJvThKgNUEQxNTzZwUGJkkfStSmVOBNHeeA5yZpOxSgqF+BPyfJMlfh7xBIYcrUQnT1uchL+jm9py7sH41ypFxjXus23UrVxeflrDsAu9zqFWLYvbYMIn9p9YgQx28QsDf3LwWDPVEeilcASRzOj+fgH91SrpbnmPjMR8oJ+D/c4K6Y4A7kbcB4vEKAf+ViRo0bf2LKJGn8ZSTjQkrvGQzdgYws618yDrUqkiTZCtATaH7VatEnBYzjqkeIB4i4P9B0jYC/krgd8DvCIa+AjyXoNRLyNmdKW4k4H8+BQ3rgK8RDG0BfhKXewXBkJ+AP5Sg5jt4ig9f/TBgayoJ4kg7iM8OPJH6dzM4JD6WR2U+x39HSqbGI+CfB0xNkHMywVCmL/1zKZna/Pk/BRLtqTckqbEbqMcTp0FyBcVG4EcZEp89eF2UJkHcA68w+YsY8dNSaHcBH4T9S5kunmrz8wP+l0ksxf6CYKit21QlAX9b7iAB3JEg7b8SFYw6OISRtxKTMvZSYJhp6yujvky5gVfgNq2oCjjdkx7YBxX9C5ySuNQCcHrs4VoxOWMaAv4ngPgoM92R3vltwfcyePYmpIAXi/EEQ8m20BpkhJzEUrGhWTuj90VeA7aZtl6NlGA6XJjyEJQoFaLW6/b1b+49tBG3VEMcAa8Q1Np3H7Evmdpf/fgPB5yBQuAS9grEOcVrlv/qk9ef2lk7svlxx+nB8C4r7/nZ2v4/OuT0mfWJ099TaTTGu8jSHwE/NzRrXgqyfk3Lo8pM4LE2dC1TRcdSYFzM795IH+NtCcrWEfWDSnrcMTRrL3CWaesXAJ8hPXfSdsP1VHqr+3xra/XXcXoEEFETpgiDUzLw/boR607vsf7OfZHBjhDQTTms1ntFu3aGhxe1eO1cqk8u2PyXAiKhg5GTZvpEJHbGO8iwepcBz5m2fquhWcn0yK8gXUhjXTJOJxgaRMC/M41uVQMHMxySqgRpvUjM2IaXtXXNk6FZryMDUB1jlMOCP/aTFhuB5EOk39yJj388F+bJwGcxWDDlc/ji5D01vGTFpV89vAL+3qJ8E+aatj4IGcXlKUOzbm9RIuB3CIYWAdfE5YyhQauUGkejHcgEiVbJVo03+W3d8VXWN/VLgK8quQeCUitkSMPYtMNphbszNGsnchbMNG092axdlSDtM2n2RJD5WCdibDJZowD5EuU5Y+P1uan0u6JGtOyOkrZB3dCsEPAhYCQpkqitXrkeojh0QQb3zHPGtgkJu9JWd5RtwNAkeYnayrfxK0YGZMk7wtoBN9HlZ38bG/EjhaRE6Jkg7XCue90A09b9QAHC2wb5zljhpP4dC7fn1gT557bxiWOAJ5LkjUiQti2HoxOPsxGewFU3QL4z1umuNDthuV2T03u1ugun9OM45l6W7qNMW38J2BrvxhmDKQnS1ud6iGIwEuEeNcbbRyFND4poUK1j4JMrcBGcUfi2d+XYSldqnnzIk4IAp4sL8Oe1vZQP6kcJgALCnFq4gSvHVjp4Yilu15sQUVOfVzyIF6snMK3bG8+tPqvooNM/LKIKZ0OznGiA6ouQd4/GeIjElqNgaCRwRlzqQQL+dzt+TNLGGKL7K6S2xw4BfoqM1uJyTGa3hwD2Rk5RZr9xzkNleyu34JZENU8FoNZt/unrl0+qdLY+KqLW2wg+ttSPUF5c+8Hihw++9NraqqtvwlfX2B6ezzCWz7ivp/q3eZ84/Yo9hCfwGhytBTIm4z4H32e+oy1J5iWRSGebnjL/2GEcwrMbfiRkrGnrZyJdLJYjxf8KjlFsCBeVfr6dyj+rAx/hlH4D5ajMEGGIdB24vvb8t84pXT1zX2SQp4pII3M9j7rhBRtDa2VhwEPeIOgx7emDP/+guE/dVaO6LB8S9oq8CqcfYa9YdVFqBN67hmYl16gFQ8OBRB+O+DH5hT4Ir9G+m2zGLgbeMTRLzx2dz8LCOT2k0kEBXFDqepRPfrCyHNYm1iQ9COXffwq8qPZIgFrFkchJ9/1k358eZrqQfE9X5gmGCpAPil+tniTgz1RFmAU011lEV9c9CGd5Q1qy5XUQcGvuCI9CrYo0kdiKob2pz7PAbZKgPAXUClCOfkC5d1bazw6GuiO9LYYkyJ2V03FpaZe+GDhgjF3TeORLtW+29QzYAR2IJy8N49J0UU241yTZtYYVVgFRdxK+0AaCh37EQje5xigYKiAYuhl4BxmBNR63EvDXkFMUxyd8njiVZ7KleCXwMtL6kTs4PQulO2l0z4yUFqZV71qxnBe8L+E78ry0DjXOegXcB1AOlREMLUB6KLyPNFAPRTqzXUty15efE/D/NqdjAtKEGcUTq8apdW7LUIXJGHsZsMe09QrkHcx9SFf7Dofj+RhauElsqBu/6od76w/gFSGZ4wOU/Xcsu3PwlO4LL9xcNwK1+b1o4Xg+tbdvb2WJenDx9LFiPi94Z+Kr+Z48/jSb7T2QzmI3p00Y/IyAP7OINtlGjKjnecrNQC9Ds9bHFklmaK+Ofj9mHvLbNcfEpxhAES5VTi+lr7rndtTqXbglQD14PlDqdg0t+HDsEbf0f4RoeaxWRSRS4fTvVucVi4VrmHn1eeL7/Ml7jwLlGURNt3ac2L5FwJ/uF7o6HjGMdTzffcigLs2QytBeB1wHYNq6CrgpjwVZxO9WD1duOX+Dy8LSh1Gi25moh0jp1HsvWBz4/ZundVVxuFtb3oIe09a7VbulM/Z74unyNb7d15wn5lPuvYbq3I0If5X0QwTVIN1U/5iBo/jguN+9yfyt6tf8pwuejDf5wprB43eG1WHA+PhKaWmeDM3K1EicEWaM3yyno6i7HyJDJVfdAnyH9wN8edwWT0YfSkhrNfDko/akfm5EmQu7+nON2APcQ7DiQRDXAtOQX7TsH1d9P9Lx+lVgfivhh1Lhl8gw8LXRMa4i89BE5UhjQy14ArergpCdr/OKXwD+ZmjWgfhKx83F53iYtv55D+X5WdprPRMWCIZUpJDUHzmbKoBtHXE5uSPwwppBw3aEh28VeAMMzWphK87v23btwwSBW5U0N+B3kKFid+Sa0ExwIDLwXuSXLxM6E3Q6xs55Y6xy14S1SQ0Spq13QfoCf5eWYe+OC/z6jfPPPup1vU3BSSovdArGPmZf1MVFnS/wJtd6+KIK/ERwaApDd2fUEe+4Q51XvFjBWRJ150mIvGesaetne/CuwNsM/BB5Qy1ZlJiGW+GLOvKDgDkej9vBG0ArH77Ia+HJtPUewCfAMkOzPpdrenKNqP34KHCLoVlzU5XNbw8KeSmq4ARTG7EY+H1rTIX8X4ob/WQ/7TBt/SHgwtYCUDcg32dsGBDRz4p+amHa+mTgQdrgw/WpHrDOANPWz0aGDDYMzVqUbr0TjM1jmLbeGxn/4x5Ds9pys+8EY/MVUUXLQWChoVnpfC+3GToBY/P6RNYhMG29K9K6tMzQrOmZtJHfjFUiINyGoMufCkQ/tboHWGBo1sRM28lvxiL2eqW7j4kNOB9g2vqNyNsFzxiadU172srrc6z67pSJXtfKotmPjJqHGn62zLh1Za5p6iiYtv5LoAy4qZWwCWkhbzew2bOfeEzUdf82TgFel0OguOCJL5WV3TU/17RlE6atdwf+AUwARhua9U422s1Lxs6ePecLyLgPiTC8rOyuLW1pL19h2vqjwI3IIC43Z9Nwka9L8bQUeZNJ4hdj2vpQ4KChWbkPPpYCpq1PRH59owtwo6FZi7P9jHwVnranyNuWIm8ycNi09Qdz3YFEMG19oGnry5DXRhYZmtW/I5gK+bsUDwB2Jch6DzinrOyuVB4UN9EUg/BJ4DeGZlWQQ5i2riO9Oi4HVgC3GZr1cUc+My8ZCzB79pxzkB+fn4w0BswD7ikru6synfqmrV8HBJAe/i4y4ujvU3kdZBPRT8HciYyIXo2MsFZuaNaq9rSbLvKWsQ2YPXvOKUBtWdld+zKpb9r6qcAtyIDafuSsfx74P0OzNmeTVtPWJyHlg4nImIYfIl+mXx/rcct7xmYT0RhOX0HeTuuJ9NfdhLyAtRbJiI+Bw8m0XaatFyLDAJ0GnA5cgLwcfgoyGvhOZHi9OYZmZeqX3G58qhgbC9PWhwGXIJf6M5De+keRzt21SN+pemQQZEHTV7l6IKXZhvB7u5AfbVyGdAfNC8eATy1jG2Da+hnIuP+jkcztQtMdTA+5PwuaBwmNIBm/C+nxvzbXAtoJnMAJdGb8P4v3CXogjnvuAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE3LTA1LTI2VDAxOjM3OjU2LTA0OjAwciT+/wAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxNy0wNS0yNlQwMTozNzo1Ni0wNDowMAN5RkMAAAAZdEVYdFNvZnR3YXJlAEFkb2JlIEltYWdlUmVhZHlxyWU8AAAAAElFTkSuQmCC',,
                urlForPopup: '/modals/ulser.multi.html'

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
                //data: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHYAAABhCAYAAAADdFUyAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QA/wD/AP+gvaeTAAAAB3RJTUUH4QUaASU4J7tYQgAAFSxJREFUeNrtnXmcFNW1x7+3qmdhm6FZlU1Q4vqACAhS6isBifoSjTTiFkOMUXFJMomF8WlMNKuJpjQkErfwniSRxAFbE5O8IAEpwBIEFBMEF0CQfXF6GJhhZrqr6v1xe2Z6erp7enp66B7k9/nM5zN9tzr3nrr3nnvOuafgBE7gBDoPRK4JSBemrU8Cboz+fMLQrLdyTVM+w5drAtqA84GvRv9fBpxgbAoouSagDaiI+d/NNTH5js7E2OqY/7vkmph8R2dairfG/D8WeBbAtPVvAZ8HhgBbgPmGZv0h18TmGp1JeCoEagA1mvQUcB4wJkHxZw3Nui3NdrtF2/kPYBQwAOgNdAUKYsbIAeqRK8dOYA+wDnjT0KwPcj0+8eg0jAUwbf2bwOw0i99taNbjCdpQgGuBK4DPAv2AMHAY2I1k2G4gBFRG8wC6AT2BXsAwoC/QB+iOZPhHwGLgFUOz3s71WHUqxgKYtn4d8AzQo5Winxia1Sdapxj4GjAZGA0UA5uAlcA/kLMuTAYwbX0IcsZfAvwn8kXZDywBFhiatSIX49TpGAuNg7kaOKmVoo8gGdkPuUe/Aaw1NGtpB9LWF8ngicDZwEDgdeCHhmZtO1Zj1CkZC2Da+izg0TSKzgV+kyuFhmnrVwL/DZwLLAdmGJq1r6Of25kZezvwZCvFvm5o1pxc0xqldzTwMKAD84AyQ7NqO+p5nekcG4/RaZSpzDWRDTA06y1Dsy4FrkLu9TtMW7+lo57XKWdsVLLdh5RKk8EFhhiatSvX9Cbpw6XALwA/EDA0681stt9ZZ+xNpGYqwMZ8ZSqAoVmLDM0aAfwNWG3a+rez2X6nY6xp6xOQb3pr6BRGAkOzZgKTgMdMW385W+3m3VJs2noB8EWkFugAUsvjAScj96ZAmk2NNDTr37nuTxv6fQpgI7Vrlxiatb097eUjY99EHvjbg+8YmpXOUSjvYNr6XOBm4ExDs97PtJ28Yqxp66OA9cD7gIl8eyfTZIdNBy8amnV1rvvSznH4CXA/7Vh18o2xLwBXGZpVFJc+HpgPnNpKE69GjxSdHqatPwZ8GxhhaNaGttbPN+HpYuQhvhkMzVoNnAXch1S0743JrkR6VMw6Xpga7fPdSIPHv01bH9DW+vk2YzcC3zI069VWyvmA05AmvO2GZlWn035nRMzMLWyLoSLfDO1VpOEdYWhWBLkPH/cwNOtu09YvBnbQutGjEfm2FHtI4/YJxMDQrNFAf9PWg+nWyTfGdss1AXmMQcBU09YvT6dw3jDWtPVrgBFIm+kJxCGqHr0S+HtUxkiJrAtPUYvFRUgfIa+V4g35w5BqtZ8ZmnVfRg8OhsbRUtV4GwH/e9nuYxq03A9cHtO/Q8DVBPx17W3atPUdwDZDsy5KVS5rwlNUJfYW0lqxGekrlM6LU4i01Ew1NOvldpAwEPlCxaJ3tvrXRvwncGFcmppJQwkwGthv2voXDM36a7JCWWGsaesnIV0/FwBfMTSrPmtDFKwYBGIUsIaAf3+KkjUJ0to9QzJEvIdEBa2vXmnB0KwDpq3fC/yRFH5f2dpjHwYcQ7OuzzJTrwSxDfgrsJVgaELW2j62cMkSYwEMzXoE2G7a+k3JymSLsaOBf3bAgDxE0xLWDbxnkhd100zLCbLK2CgeJ4XPV7YY+2/kpaksQ0TifvdMWtQtBeHEFHVk2vGL/wX6mLZ+Q6LMbDH2m0CvqBI/e3BKYwQODyKlSadgoTji4sYcg91uFIkjEY5TGJrlAg8gGdwCWTvuRC0wq5CCwnogQgYvjoPKYN/moq3hsx/57t4X7wNFQ9SCVwBe0ZZ7+8+4eUzx8h9sqz8zoggHges7o2j92z8+8NSyVVXX/xlfpWwo0rN+Qsn8qx7oe8eN79V9dr+HYszSlh2btTkYmgfMiEnZBwwh4M+e/NE07h4w3dCshbHpWVNQRC0wRcjLUkVInW9BW/9UnILDbs/CsFesIOrngvIiUA4sBPdXtW53pcbtXqSKSEOdQprfsYlFxEP4PJQZgGPaensN+JnCpeM2/JeAH8cn5pV1pz0ofLFySj1FryKirrpeMYXUf7Z+Wuk7AI/Yk8pVnOkeyoBZ2mt7OpSYljN2D3LGZn1rMG19JLAOT/Q1LlhW2ZCeNyrF9qLe666gxFjvlGrq3ZJGg8J3tKXXeIjNPurLc01rNmFo1r+A1Qhvamz6ccNYlErwYmUtFXwVzYoUiPplpxZuvLBtDWcFHtk/7sRiJdJJoRH5Zo9tjpf2F+EVNL18IuwxtV+SaxGFSC1mzLvqNdfi9Vb3/taquWoFC58ei6dORK0cAUp/5Fm5BtiIVIuuJODfncWeOMTvscHQaUh98vnIK5kqcARpZ14DBAn4092XFwHfj03Ib8Y6pX9HqR4jRQEPnB7bkHdaE5Tt4aFWxY2f1yhDdHl5R8l39+0etL1uzIXgzsNXCV6LBeuKhooEQ38AFhLw/yULPSkg4JczNhiahnR4/0IrdXZF9+rfEvB/1ErZVcBgc+15Zxlj12yCNBhr2npPZBiAjl5OAHBROatwnVhSc9WOx/crpXiFpYgwoIJb3OuGpQ+UXF/yxJBNdfIie0/1gPD79h+6f+8K9cOjF4Fa2bw5gGDluUcjJa9uDw/qg1IDoi4RU2MhgC8DXyYYWgNcR8C/lcyxU9IR+hXwjTTrDER6KhoEQ5cR8C9LVtDQrKOmrRfhqVOR935TM9a09fnA9cgzabasEymh4LAzfKoY4vvoVtRD63BLx0BYnmN9tW+OLFoz5YAzYKEiHE/gEXL6ir6+3UuGFm6Y82H1Rc2pDPjXEQydC95bKIdiMtp0GDgPeJtgaAoBf6b3awoJhpYgTZNtRRHwGsHQxQT8Vopym3CVRl16Usaatr4dGY/hCuDdaNkOPR55CDwEgws2i8U103bjlN6AEjXQiDBESk5/p27coi8Vv3HGwcjJeAh6qftEGF/V1voRo+JEwUqCoe8h9c2JEAHeRF6IDkf7eiGJvThKgNUEQxNTzZwUGJkkfStSmVOBNHeeA5yZpOxSgqF+BPyfJMlfh7xBIYcrUQnT1uchL+jm9py7sH41ypFxjXus23UrVxeflrDsAu9zqFWLYvbYMIn9p9YgQx28QsDf3LwWDPVEeilcASRzOj+fgH91SrpbnmPjMR8oJ+D/c4K6Y4A7kbcB4vEKAf+ViRo0bf2LKJGn8ZSTjQkrvGQzdgYws618yDrUqkiTZCtATaH7VatEnBYzjqkeIB4i4P9B0jYC/krgd8DvCIa+AjyXoNRLyNmdKW4k4H8+BQ3rgK8RDG0BfhKXewXBkJ+AP5Sg5jt4ig9f/TBgayoJ4kg7iM8OPJH6dzM4JD6WR2U+x39HSqbGI+CfB0xNkHMywVCmL/1zKZna/Pk/BRLtqTckqbEbqMcTp0FyBcVG4EcZEp89eF2UJkHcA68w+YsY8dNSaHcBH4T9S5kunmrz8wP+l0ksxf6CYKit21QlAX9b7iAB3JEg7b8SFYw6OISRtxKTMvZSYJhp6yujvky5gVfgNq2oCjjdkx7YBxX9C5ySuNQCcHrs4VoxOWMaAv4ngPgoM92R3vltwfcyePYmpIAXi/EEQ8m20BpkhJzEUrGhWTuj90VeA7aZtl6NlGA6XJjyEJQoFaLW6/b1b+49tBG3VEMcAa8Q1Np3H7Evmdpf/fgPB5yBQuAS9grEOcVrlv/qk9ef2lk7svlxx+nB8C4r7/nZ2v4/OuT0mfWJ099TaTTGu8jSHwE/NzRrXgqyfk3Lo8pM4LE2dC1TRcdSYFzM795IH+NtCcrWEfWDSnrcMTRrL3CWaesXAJ8hPXfSdsP1VHqr+3xra/XXcXoEEFETpgiDUzLw/boR607vsf7OfZHBjhDQTTms1ntFu3aGhxe1eO1cqk8u2PyXAiKhg5GTZvpEJHbGO8iwepcBz5m2fquhWcn0yK8gXUhjXTJOJxgaRMC/M41uVQMHMxySqgRpvUjM2IaXtXXNk6FZryMDUB1jlMOCP/aTFhuB5EOk39yJj388F+bJwGcxWDDlc/ji5D01vGTFpV89vAL+3qJ8E+aatj4IGcXlKUOzbm9RIuB3CIYWAdfE5YyhQauUGkejHcgEiVbJVo03+W3d8VXWN/VLgK8quQeCUitkSMPYtMNphbszNGsnchbMNG092axdlSDtM2n2RJD5WCdibDJZowD5EuU5Y+P1uan0u6JGtOyOkrZB3dCsEPAhYCQpkqitXrkeojh0QQb3zHPGtgkJu9JWd5RtwNAkeYnayrfxK0YGZMk7wtoBN9HlZ38bG/EjhaRE6Jkg7XCue90A09b9QAHC2wb5zljhpP4dC7fn1gT557bxiWOAJ5LkjUiQti2HoxOPsxGewFU3QL4z1umuNDthuV2T03u1ugun9OM45l6W7qNMW38J2BrvxhmDKQnS1ud6iGIwEuEeNcbbRyFND4poUK1j4JMrcBGcUfi2d+XYSldqnnzIk4IAp4sL8Oe1vZQP6kcJgALCnFq4gSvHVjp4Yilu15sQUVOfVzyIF6snMK3bG8+tPqvooNM/LKIKZ0OznGiA6ouQd4/GeIjElqNgaCRwRlzqQQL+dzt+TNLGGKL7K6S2xw4BfoqM1uJyTGa3hwD2Rk5RZr9xzkNleyu34JZENU8FoNZt/unrl0+qdLY+KqLW2wg+ttSPUF5c+8Hihw++9NraqqtvwlfX2B6ezzCWz7ivp/q3eZ84/Yo9hCfwGhytBTIm4z4H32e+oy1J5iWRSGebnjL/2GEcwrMbfiRkrGnrZyJdLJYjxf8KjlFsCBeVfr6dyj+rAx/hlH4D5ajMEGGIdB24vvb8t84pXT1zX2SQp4pII3M9j7rhBRtDa2VhwEPeIOgx7emDP/+guE/dVaO6LB8S9oq8CqcfYa9YdVFqBN67hmYl16gFQ8OBRB+O+DH5hT4Ir9G+m2zGLgbeMTRLzx2dz8LCOT2k0kEBXFDqepRPfrCyHNYm1iQ9COXffwq8qPZIgFrFkchJ9/1k358eZrqQfE9X5gmGCpAPil+tniTgz1RFmAU011lEV9c9CGd5Q1qy5XUQcGvuCI9CrYo0kdiKob2pz7PAbZKgPAXUClCOfkC5d1bazw6GuiO9LYYkyJ2V03FpaZe+GDhgjF3TeORLtW+29QzYAR2IJy8N49J0UU241yTZtYYVVgFRdxK+0AaCh37EQje5xigYKiAYuhl4BxmBNR63EvDXkFMUxyd8njiVZ7KleCXwMtL6kTs4PQulO2l0z4yUFqZV71qxnBe8L+E78ry0DjXOegXcB1AOlREMLUB6KLyPNFAPRTqzXUty15efE/D/NqdjAtKEGcUTq8apdW7LUIXJGHsZsMe09QrkHcx9SFf7Dofj+RhauElsqBu/6od76w/gFSGZ4wOU/Xcsu3PwlO4LL9xcNwK1+b1o4Xg+tbdvb2WJenDx9LFiPi94Z+Kr+Z48/jSb7T2QzmI3p00Y/IyAP7OINtlGjKjnecrNQC9Ds9bHFklmaK+Ofj9mHvLbNcfEpxhAES5VTi+lr7rndtTqXbglQD14PlDqdg0t+HDsEbf0f4RoeaxWRSRS4fTvVucVi4VrmHn1eeL7/Ml7jwLlGURNt3ac2L5FwJ/uF7o6HjGMdTzffcigLs2QytBeB1wHYNq6CrgpjwVZxO9WD1duOX+Dy8LSh1Gi25moh0jp1HsvWBz4/ZundVVxuFtb3oIe09a7VbulM/Z74unyNb7d15wn5lPuvYbq3I0If5X0QwTVIN1U/5iBo/jguN+9yfyt6tf8pwuejDf5wprB43eG1WHA+PhKaWmeDM3K1EicEWaM3yyno6i7HyJDJVfdAnyH9wN8edwWT0YfSkhrNfDko/akfm5EmQu7+nON2APcQ7DiQRDXAtOQX7TsH1d9P9Lx+lVgfivhh1Lhl8gw8LXRMa4i89BE5UhjQy14ArergpCdr/OKXwD+ZmjWgfhKx83F53iYtv55D+X5WdprPRMWCIZUpJDUHzmbKoBtHXE5uSPwwppBw3aEh28VeAMMzWphK87v23btwwSBW5U0N+B3kKFid+Sa0ExwIDLwXuSXLxM6E3Q6xs55Y6xy14S1SQ0Spq13QfoCf5eWYe+OC/z6jfPPPup1vU3BSSovdArGPmZf1MVFnS/wJtd6+KIK/ERwaApDd2fUEe+4Q51XvFjBWRJ150mIvGesaetne/CuwNsM/BB5Qy1ZlJiGW+GLOvKDgDkej9vBG0ArH77Ia+HJtPUewCfAMkOzPpdrenKNqP34KHCLoVlzU5XNbw8KeSmq4ARTG7EY+H1rTIX8X4ob/WQ/7TBt/SHgwtYCUDcg32dsGBDRz4p+amHa+mTgQdrgw/WpHrDOANPWz0aGDDYMzVqUbr0TjM1jmLbeGxn/4x5Ds9pys+8EY/MVUUXLQWChoVnpfC+3GToBY/P6RNYhMG29K9K6tMzQrOmZtJHfjFUiINyGoMufCkQ/tboHWGBo1sRM28lvxiL2eqW7j4kNOB9g2vqNyNsFzxiadU172srrc6z67pSJXtfKotmPjJqHGn62zLh1Za5p6iiYtv5LoAy4qZWwCWkhbzew2bOfeEzUdf82TgFel0OguOCJL5WV3TU/17RlE6atdwf+AUwARhua9U422s1Lxs6ePecLyLgPiTC8rOyuLW1pL19h2vqjwI3IIC43Z9Nwka9L8bQUeZNJ4hdj2vpQ4KChWbkPPpYCpq1PRH59owtwo6FZi7P9jHwVnranyNuWIm8ycNi09Qdz3YFEMG19oGnry5DXRhYZmtW/I5gK+bsUDwB2Jch6DzinrOyuVB4UN9EUg/BJ4DeGZlWQQ5i2riO9Oi4HVgC3GZr1cUc+My8ZCzB79pxzkB+fn4w0BswD7ikru6synfqmrV8HBJAe/i4y4ujvU3kdZBPRT8HciYyIXo2MsFZuaNaq9rSbLvKWsQ2YPXvOKUBtWdld+zKpb9r6qcAtyIDafuSsfx74P0OzNmeTVtPWJyHlg4nImIYfIl+mXx/rcct7xmYT0RhOX0HeTuuJ9NfdhLyAtRbJiI+Bw8m0XaatFyLDAJ0GnA5cgLwcfgoyGvhOZHi9OYZmZeqX3G58qhgbC9PWhwGXIJf6M5De+keRzt21SN+pemQQZEHTV7l6IKXZhvB7u5AfbVyGdAfNC8eATy1jG2Da+hnIuP+jkcztQtMdTA+5PwuaBwmNIBm/C+nxvzbXAtoJnMAJdGb8P4v3CXogjnvuAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE3LTA1LTI2VDAxOjM3OjU2LTA0OjAwciT+/wAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxNy0wNS0yNlQwMTozNzo1Ni0wNDowMAN5RkMAAAAZdEVYdFNvZnR3YXJlAEFkb2JlIEltYWdlUmVhZHlxyWU8AAAAAElFTkSuQmCC',
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
                //data: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHYAAABhCAYAAAADdFUyAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QA/wD/AP+gvaeTAAAAB3RJTUUH4QUaASU4J7tYQgAAFSxJREFUeNrtnXmcFNW1x7+3qmdhm6FZlU1Q4vqACAhS6isBifoSjTTiFkOMUXFJMomF8WlMNKuJpjQkErfwniSRxAFbE5O8IAEpwBIEFBMEF0CQfXF6GJhhZrqr6v1xe2Z6erp7enp66B7k9/nM5zN9tzr3nrr3nnvOuafgBE7gBDoPRK4JSBemrU8Cboz+fMLQrLdyTVM+w5drAtqA84GvRv9fBpxgbAoouSagDaiI+d/NNTH5js7E2OqY/7vkmph8R2dairfG/D8WeBbAtPVvAZ8HhgBbgPmGZv0h18TmGp1JeCoEagA1mvQUcB4wJkHxZw3Nui3NdrtF2/kPYBQwAOgNdAUKYsbIAeqRK8dOYA+wDnjT0KwPcj0+8eg0jAUwbf2bwOw0i99taNbjCdpQgGuBK4DPAv2AMHAY2I1k2G4gBFRG8wC6AT2BXsAwoC/QB+iOZPhHwGLgFUOz3s71WHUqxgKYtn4d8AzQo5Winxia1Sdapxj4GjAZGA0UA5uAlcA/kLMuTAYwbX0IcsZfAvwn8kXZDywBFhiatSIX49TpGAuNg7kaOKmVoo8gGdkPuUe/Aaw1NGtpB9LWF8ngicDZwEDgdeCHhmZtO1Zj1CkZC2Da+izg0TSKzgV+kyuFhmnrVwL/DZwLLAdmGJq1r6Of25kZezvwZCvFvm5o1pxc0xqldzTwMKAD84AyQ7NqO+p5nekcG4/RaZSpzDWRDTA06y1Dsy4FrkLu9TtMW7+lo57XKWdsVLLdh5RKk8EFhhiatSvX9Cbpw6XALwA/EDA0681stt9ZZ+xNpGYqwMZ8ZSqAoVmLDM0aAfwNWG3a+rez2X6nY6xp6xOQb3pr6BRGAkOzZgKTgMdMW385W+3m3VJs2noB8EWkFugAUsvjAScj96ZAmk2NNDTr37nuTxv6fQpgI7Vrlxiatb097eUjY99EHvjbg+8YmpXOUSjvYNr6XOBm4ExDs97PtJ28Yqxp66OA9cD7gIl8eyfTZIdNBy8amnV1rvvSznH4CXA/7Vh18o2xLwBXGZpVFJc+HpgPnNpKE69GjxSdHqatPwZ8GxhhaNaGttbPN+HpYuQhvhkMzVoNnAXch1S0743JrkR6VMw6Xpga7fPdSIPHv01bH9DW+vk2YzcC3zI069VWyvmA05AmvO2GZlWn035nRMzMLWyLoSLfDO1VpOEdYWhWBLkPH/cwNOtu09YvBnbQutGjEfm2FHtI4/YJxMDQrNFAf9PWg+nWyTfGdss1AXmMQcBU09YvT6dw3jDWtPVrgBFIm+kJxCGqHr0S+HtUxkiJrAtPUYvFRUgfIa+V4g35w5BqtZ8ZmnVfRg8OhsbRUtV4GwH/e9nuYxq03A9cHtO/Q8DVBPx17W3atPUdwDZDsy5KVS5rwlNUJfYW0lqxGekrlM6LU4i01Ew1NOvldpAwEPlCxaJ3tvrXRvwncGFcmppJQwkwGthv2voXDM36a7JCWWGsaesnIV0/FwBfMTSrPmtDFKwYBGIUsIaAf3+KkjUJ0to9QzJEvIdEBa2vXmnB0KwDpq3fC/yRFH5f2dpjHwYcQ7OuzzJTrwSxDfgrsJVgaELW2j62cMkSYwEMzXoE2G7a+k3JymSLsaOBf3bAgDxE0xLWDbxnkhd100zLCbLK2CgeJ4XPV7YY+2/kpaksQ0TifvdMWtQtBeHEFHVk2vGL/wX6mLZ+Q6LMbDH2m0CvqBI/e3BKYwQODyKlSadgoTji4sYcg91uFIkjEY5TGJrlAg8gGdwCWTvuRC0wq5CCwnogQgYvjoPKYN/moq3hsx/57t4X7wNFQ9SCVwBe0ZZ7+8+4eUzx8h9sqz8zoggHges7o2j92z8+8NSyVVXX/xlfpWwo0rN+Qsn8qx7oe8eN79V9dr+HYszSlh2btTkYmgfMiEnZBwwh4M+e/NE07h4w3dCshbHpWVNQRC0wRcjLUkVInW9BW/9UnILDbs/CsFesIOrngvIiUA4sBPdXtW53pcbtXqSKSEOdQprfsYlFxEP4PJQZgGPaensN+JnCpeM2/JeAH8cn5pV1pz0ofLFySj1FryKirrpeMYXUf7Z+Wuk7AI/Yk8pVnOkeyoBZ2mt7OpSYljN2D3LGZn1rMG19JLAOT/Q1LlhW2ZCeNyrF9qLe666gxFjvlGrq3ZJGg8J3tKXXeIjNPurLc01rNmFo1r+A1Qhvamz6ccNYlErwYmUtFXwVzYoUiPplpxZuvLBtDWcFHtk/7sRiJdJJoRH5Zo9tjpf2F+EVNL18IuwxtV+SaxGFSC1mzLvqNdfi9Vb3/taquWoFC58ei6dORK0cAUp/5Fm5BtiIVIuuJODfncWeOMTvscHQaUh98vnIK5kqcARpZ14DBAn4092XFwHfj03Ib8Y6pX9HqR4jRQEPnB7bkHdaE5Tt4aFWxY2f1yhDdHl5R8l39+0etL1uzIXgzsNXCV6LBeuKhooEQ38AFhLw/yULPSkg4JczNhiahnR4/0IrdXZF9+rfEvB/1ErZVcBgc+15Zxlj12yCNBhr2npPZBiAjl5OAHBROatwnVhSc9WOx/crpXiFpYgwoIJb3OuGpQ+UXF/yxJBNdfIie0/1gPD79h+6f+8K9cOjF4Fa2bw5gGDluUcjJa9uDw/qg1IDoi4RU2MhgC8DXyYYWgNcR8C/lcyxU9IR+hXwjTTrDER6KhoEQ5cR8C9LVtDQrKOmrRfhqVOR935TM9a09fnA9cgzabasEymh4LAzfKoY4vvoVtRD63BLx0BYnmN9tW+OLFoz5YAzYKEiHE/gEXL6ir6+3UuGFm6Y82H1Rc2pDPjXEQydC95bKIdiMtp0GDgPeJtgaAoBf6b3awoJhpYgTZNtRRHwGsHQxQT8Vopym3CVRl16Usaatr4dGY/hCuDdaNkOPR55CDwEgws2i8U103bjlN6AEjXQiDBESk5/p27coi8Vv3HGwcjJeAh6qftEGF/V1voRo+JEwUqCoe8h9c2JEAHeRF6IDkf7eiGJvThKgNUEQxNTzZwUGJkkfStSmVOBNHeeA5yZpOxSgqF+BPyfJMlfh7xBIYcrUQnT1uchL+jm9py7sH41ypFxjXus23UrVxeflrDsAu9zqFWLYvbYMIn9p9YgQx28QsDf3LwWDPVEeilcASRzOj+fgH91SrpbnmPjMR8oJ+D/c4K6Y4A7kbcB4vEKAf+ViRo0bf2LKJGn8ZSTjQkrvGQzdgYws618yDrUqkiTZCtATaH7VatEnBYzjqkeIB4i4P9B0jYC/krgd8DvCIa+AjyXoNRLyNmdKW4k4H8+BQ3rgK8RDG0BfhKXewXBkJ+AP5Sg5jt4ig9f/TBgayoJ4kg7iM8OPJH6dzM4JD6WR2U+x39HSqbGI+CfB0xNkHMywVCmL/1zKZna/Pk/BRLtqTckqbEbqMcTp0FyBcVG4EcZEp89eF2UJkHcA68w+YsY8dNSaHcBH4T9S5kunmrz8wP+l0ksxf6CYKit21QlAX9b7iAB3JEg7b8SFYw6OISRtxKTMvZSYJhp6yujvky5gVfgNq2oCjjdkx7YBxX9C5ySuNQCcHrs4VoxOWMaAv4ngPgoM92R3vltwfcyePYmpIAXi/EEQ8m20BpkhJzEUrGhWTuj90VeA7aZtl6NlGA6XJjyEJQoFaLW6/b1b+49tBG3VEMcAa8Q1Np3H7Evmdpf/fgPB5yBQuAS9grEOcVrlv/qk9ef2lk7svlxx+nB8C4r7/nZ2v4/OuT0mfWJ099TaTTGu8jSHwE/NzRrXgqyfk3Lo8pM4LE2dC1TRcdSYFzM795IH+NtCcrWEfWDSnrcMTRrL3CWaesXAJ8hPXfSdsP1VHqr+3xra/XXcXoEEFETpgiDUzLw/boR607vsf7OfZHBjhDQTTms1ntFu3aGhxe1eO1cqk8u2PyXAiKhg5GTZvpEJHbGO8iwepcBz5m2fquhWcn0yK8gXUhjXTJOJxgaRMC/M41uVQMHMxySqgRpvUjM2IaXtXXNk6FZryMDUB1jlMOCP/aTFhuB5EOk39yJj388F+bJwGcxWDDlc/ji5D01vGTFpV89vAL+3qJ8E+aatj4IGcXlKUOzbm9RIuB3CIYWAdfE5YyhQauUGkejHcgEiVbJVo03+W3d8VXWN/VLgK8quQeCUitkSMPYtMNphbszNGsnchbMNG092axdlSDtM2n2RJD5WCdibDJZowD5EuU5Y+P1uan0u6JGtOyOkrZB3dCsEPAhYCQpkqitXrkeojh0QQb3zHPGtgkJu9JWd5RtwNAkeYnayrfxK0YGZMk7wtoBN9HlZ38bG/EjhaRE6Jkg7XCue90A09b9QAHC2wb5zljhpP4dC7fn1gT557bxiWOAJ5LkjUiQti2HoxOPsxGewFU3QL4z1umuNDthuV2T03u1ugun9OM45l6W7qNMW38J2BrvxhmDKQnS1ud6iGIwEuEeNcbbRyFND4poUK1j4JMrcBGcUfi2d+XYSldqnnzIk4IAp4sL8Oe1vZQP6kcJgALCnFq4gSvHVjp4Yilu15sQUVOfVzyIF6snMK3bG8+tPqvooNM/LKIKZ0OznGiA6ouQd4/GeIjElqNgaCRwRlzqQQL+dzt+TNLGGKL7K6S2xw4BfoqM1uJyTGa3hwD2Rk5RZr9xzkNleyu34JZENU8FoNZt/unrl0+qdLY+KqLW2wg+ttSPUF5c+8Hihw++9NraqqtvwlfX2B6ezzCWz7ivp/q3eZ84/Yo9hCfwGhytBTIm4z4H32e+oy1J5iWRSGebnjL/2GEcwrMbfiRkrGnrZyJdLJYjxf8KjlFsCBeVfr6dyj+rAx/hlH4D5ajMEGGIdB24vvb8t84pXT1zX2SQp4pII3M9j7rhBRtDa2VhwEPeIOgx7emDP/+guE/dVaO6LB8S9oq8CqcfYa9YdVFqBN67hmYl16gFQ8OBRB+O+DH5hT4Ir9G+m2zGLgbeMTRLzx2dz8LCOT2k0kEBXFDqepRPfrCyHNYm1iQ9COXffwq8qPZIgFrFkchJ9/1k358eZrqQfE9X5gmGCpAPil+tniTgz1RFmAU011lEV9c9CGd5Q1qy5XUQcGvuCI9CrYo0kdiKob2pz7PAbZKgPAXUClCOfkC5d1bazw6GuiO9LYYkyJ2V03FpaZe+GDhgjF3TeORLtW+29QzYAR2IJy8N49J0UU241yTZtYYVVgFRdxK+0AaCh37EQje5xigYKiAYuhl4BxmBNR63EvDXkFMUxyd8njiVZ7KleCXwMtL6kTs4PQulO2l0z4yUFqZV71qxnBe8L+E78ry0DjXOegXcB1AOlREMLUB6KLyPNFAPRTqzXUty15efE/D/NqdjAtKEGcUTq8apdW7LUIXJGHsZsMe09QrkHcx9SFf7Dofj+RhauElsqBu/6od76w/gFSGZ4wOU/Xcsu3PwlO4LL9xcNwK1+b1o4Xg+tbdvb2WJenDx9LFiPi94Z+Kr+Z48/jSb7T2QzmI3p00Y/IyAP7OINtlGjKjnecrNQC9Ds9bHFklmaK+Ofj9mHvLbNcfEpxhAES5VTi+lr7rndtTqXbglQD14PlDqdg0t+HDsEbf0f4RoeaxWRSRS4fTvVucVi4VrmHn1eeL7/Ml7jwLlGURNt3ac2L5FwJ/uF7o6HjGMdTzffcigLs2QytBeB1wHYNq6CrgpjwVZxO9WD1duOX+Dy8LSh1Gi25moh0jp1HsvWBz4/ZundVVxuFtb3oIe09a7VbulM/Z74unyNb7d15wn5lPuvYbq3I0If5X0QwTVIN1U/5iBo/jguN+9yfyt6tf8pwuejDf5wprB43eG1WHA+PhKaWmeDM3K1EicEWaM3yyno6i7HyJDJVfdAnyH9wN8edwWT0YfSkhrNfDko/akfm5EmQu7+nON2APcQ7DiQRDXAtOQX7TsH1d9P9Lx+lVgfivhh1Lhl8gw8LXRMa4i89BE5UhjQy14ArergpCdr/OKXwD+ZmjWgfhKx83F53iYtv55D+X5WdprPRMWCIZUpJDUHzmbKoBtHXE5uSPwwppBw3aEh28VeAMMzWphK87v23btwwSBW5U0N+B3kKFid+Sa0ExwIDLwXuSXLxM6E3Q6xs55Y6xy14S1SQ0Spq13QfoCf5eWYe+OC/z6jfPPPup1vU3BSSovdArGPmZf1MVFnS/wJtd6+KIK/ERwaApDd2fUEe+4Q51XvFjBWRJ150mIvGesaetne/CuwNsM/BB5Qy1ZlJiGW+GLOvKDgDkej9vBG0ArH77Ia+HJtPUewCfAMkOzPpdrenKNqP34KHCLoVlzU5XNbw8KeSmq4ARTG7EY+H1rTIX8X4ob/WQ/7TBt/SHgwtYCUDcg32dsGBDRz4p+amHa+mTgQdrgw/WpHrDOANPWz0aGDDYMzVqUbr0TjM1jmLbeGxn/4x5Ds9pys+8EY/MVUUXLQWChoVnpfC+3GToBY/P6RNYhMG29K9K6tMzQrOmZtJHfjFUiINyGoMufCkQ/tboHWGBo1sRM28lvxiL2eqW7j4kNOB9g2vqNyNsFzxiadU172srrc6z67pSJXtfKotmPjJqHGn62zLh1Za5p6iiYtv5LoAy4qZWwCWkhbzew2bOfeEzUdf82TgFel0OguOCJL5WV3TU/17RlE6atdwf+AUwARhua9U422s1Lxs6ePecLyLgPiTC8rOyuLW1pL19h2vqjwI3IIC43Z9Nwka9L8bQUeZNJ4hdj2vpQ4KChWbkPPpYCpq1PRH59owtwo6FZi7P9jHwVnranyNuWIm8ycNi09Qdz3YFEMG19oGnry5DXRhYZmtW/I5gK+bsUDwB2Jch6DzinrOyuVB4UN9EUg/BJ4DeGZlWQQ5i2riO9Oi4HVgC3GZr1cUc+My8ZCzB79pxzkB+fn4w0BswD7ikru6synfqmrV8HBJAe/i4y4ujvU3kdZBPRT8HciYyIXo2MsFZuaNaq9rSbLvKWsQ2YPXvOKUBtWdld+zKpb9r6qcAtyIDafuSsfx74P0OzNmeTVtPWJyHlg4nImIYfIl+mXx/rcct7xmYT0RhOX0HeTuuJ9NfdhLyAtRbJiI+Bw8m0XaatFyLDAJ0GnA5cgLwcfgoyGvhOZHi9OYZmZeqX3G58qhgbC9PWhwGXIJf6M5De+keRzt21SN+pemQQZEHTV7l6IKXZhvB7u5AfbVyGdAfNC8eATy1jG2Da+hnIuP+jkcztQtMdTA+5PwuaBwmNIBm/C+nxvzbXAtoJnMAJdGb8P4v3CXogjnvuAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE3LTA1LTI2VDAxOjM3OjU2LTA0OjAwciT+/wAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxNy0wNS0yNlQwMTozNzo1Ni0wNDowMAN5RkMAAAAZdEVYdFNvZnR3YXJlAEFkb2JlIEltYWdlUmVhZHlxyWU8AAAAAElFTkSuQmCC',
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
                //data: 'data:image/png;base64,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',
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
                //data: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHYAAABhCAYAAAADdFUyAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QA/wD/AP+gvaeTAAAAB3RJTUUH4QUaASU4J7tYQgAAFSxJREFUeNrtnXmcFNW1x7+3qmdhm6FZlU1Q4vqACAhS6isBifoSjTTiFkOMUXFJMomF8WlMNKuJpjQkErfwniSRxAFbE5O8IAEpwBIEFBMEF0CQfXF6GJhhZrqr6v1xe2Z6erp7enp66B7k9/nM5zN9tzr3nrr3nnvOuafgBE7gBDoPRK4JSBemrU8Cboz+fMLQrLdyTVM+w5drAtqA84GvRv9fBpxgbAoouSagDaiI+d/NNTH5js7E2OqY/7vkmph8R2dairfG/D8WeBbAtPVvAZ8HhgBbgPmGZv0h18TmGp1JeCoEagA1mvQUcB4wJkHxZw3Nui3NdrtF2/kPYBQwAOgNdAUKYsbIAeqRK8dOYA+wDnjT0KwPcj0+8eg0jAUwbf2bwOw0i99taNbjCdpQgGuBK4DPAv2AMHAY2I1k2G4gBFRG8wC6AT2BXsAwoC/QB+iOZPhHwGLgFUOz3s71WHUqxgKYtn4d8AzQo5Winxia1Sdapxj4GjAZGA0UA5uAlcA/kLMuTAYwbX0IcsZfAvwn8kXZDywBFhiatSIX49TpGAuNg7kaOKmVoo8gGdkPuUe/Aaw1NGtpB9LWF8ngicDZwEDgdeCHhmZtO1Zj1CkZC2Da+izg0TSKzgV+kyuFhmnrVwL/DZwLLAdmGJq1r6Of25kZezvwZCvFvm5o1pxc0xqldzTwMKAD84AyQ7NqO+p5nekcG4/RaZSpzDWRDTA06y1Dsy4FrkLu9TtMW7+lo57XKWdsVLLdh5RKk8EFhhiatSvX9Cbpw6XALwA/EDA0681stt9ZZ+xNpGYqwMZ8ZSqAoVmLDM0aAfwNWG3a+rez2X6nY6xp6xOQb3pr6BRGAkOzZgKTgMdMW385W+3m3VJs2noB8EWkFugAUsvjAScj96ZAmk2NNDTr37nuTxv6fQpgI7Vrlxiatb097eUjY99EHvjbg+8YmpXOUSjvYNr6XOBm4ExDs97PtJ28Yqxp66OA9cD7gIl8eyfTZIdNBy8amnV1rvvSznH4CXA/7Vh18o2xLwBXGZpVFJc+HpgPnNpKE69GjxSdHqatPwZ8GxhhaNaGttbPN+HpYuQhvhkMzVoNnAXch1S0743JrkR6VMw6Xpga7fPdSIPHv01bH9DW+vk2YzcC3zI069VWyvmA05AmvO2GZlWn035nRMzMLWyLoSLfDO1VpOEdYWhWBLkPH/cwNOtu09YvBnbQutGjEfm2FHtI4/YJxMDQrNFAf9PWg+nWyTfGdss1AXmMQcBU09YvT6dw3jDWtPVrgBFIm+kJxCGqHr0S+HtUxkiJrAtPUYvFRUgfIa+V4g35w5BqtZ8ZmnVfRg8OhsbRUtV4GwH/e9nuYxq03A9cHtO/Q8DVBPx17W3atPUdwDZDsy5KVS5rwlNUJfYW0lqxGekrlM6LU4i01Ew1NOvldpAwEPlCxaJ3tvrXRvwncGFcmppJQwkwGthv2voXDM36a7JCWWGsaesnIV0/FwBfMTSrPmtDFKwYBGIUsIaAf3+KkjUJ0to9QzJEvIdEBa2vXmnB0KwDpq3fC/yRFH5f2dpjHwYcQ7OuzzJTrwSxDfgrsJVgaELW2j62cMkSYwEMzXoE2G7a+k3JymSLsaOBf3bAgDxE0xLWDbxnkhd100zLCbLK2CgeJ4XPV7YY+2/kpaksQ0TifvdMWtQtBeHEFHVk2vGL/wX6mLZ+Q6LMbDH2m0CvqBI/e3BKYwQODyKlSadgoTji4sYcg91uFIkjEY5TGJrlAg8gGdwCWTvuRC0wq5CCwnogQgYvjoPKYN/moq3hsx/57t4X7wNFQ9SCVwBe0ZZ7+8+4eUzx8h9sqz8zoggHges7o2j92z8+8NSyVVXX/xlfpWwo0rN+Qsn8qx7oe8eN79V9dr+HYszSlh2btTkYmgfMiEnZBwwh4M+e/NE07h4w3dCshbHpWVNQRC0wRcjLUkVInW9BW/9UnILDbs/CsFesIOrngvIiUA4sBPdXtW53pcbtXqSKSEOdQprfsYlFxEP4PJQZgGPaensN+JnCpeM2/JeAH8cn5pV1pz0ofLFySj1FryKirrpeMYXUf7Z+Wuk7AI/Yk8pVnOkeyoBZ2mt7OpSYljN2D3LGZn1rMG19JLAOT/Q1LlhW2ZCeNyrF9qLe666gxFjvlGrq3ZJGg8J3tKXXeIjNPurLc01rNmFo1r+A1Qhvamz6ccNYlErwYmUtFXwVzYoUiPplpxZuvLBtDWcFHtk/7sRiJdJJoRH5Zo9tjpf2F+EVNL18IuwxtV+SaxGFSC1mzLvqNdfi9Vb3/taquWoFC58ei6dORK0cAUp/5Fm5BtiIVIuuJODfncWeOMTvscHQaUh98vnIK5kqcARpZ14DBAn4092XFwHfj03Ib8Y6pX9HqR4jRQEPnB7bkHdaE5Tt4aFWxY2f1yhDdHl5R8l39+0etL1uzIXgzsNXCV6LBeuKhooEQ38AFhLw/yULPSkg4JczNhiahnR4/0IrdXZF9+rfEvB/1ErZVcBgc+15Zxlj12yCNBhr2npPZBiAjl5OAHBROatwnVhSc9WOx/crpXiFpYgwoIJb3OuGpQ+UXF/yxJBNdfIie0/1gPD79h+6f+8K9cOjF4Fa2bw5gGDluUcjJa9uDw/qg1IDoi4RU2MhgC8DXyYYWgNcR8C/lcyxU9IR+hXwjTTrDER6KhoEQ5cR8C9LVtDQrKOmrRfhqVOR935TM9a09fnA9cgzabasEymh4LAzfKoY4vvoVtRD63BLx0BYnmN9tW+OLFoz5YAzYKEiHE/gEXL6ir6+3UuGFm6Y82H1Rc2pDPjXEQydC95bKIdiMtp0GDgPeJtgaAoBf6b3awoJhpYgTZNtRRHwGsHQxQT8Vopym3CVRl16Usaatr4dGY/hCuDdaNkOPR55CDwEgws2i8U103bjlN6AEjXQiDBESk5/p27coi8Vv3HGwcjJeAh6qftEGF/V1voRo+JEwUqCoe8h9c2JEAHeRF6IDkf7eiGJvThKgNUEQxNTzZwUGJkkfStSmVOBNHeeA5yZpOxSgqF+BPyfJMlfh7xBIYcrUQnT1uchL+jm9py7sH41ypFxjXus23UrVxeflrDsAu9zqFWLYvbYMIn9p9YgQx28QsDf3LwWDPVEeilcASRzOj+fgH91SrpbnmPjMR8oJ+D/c4K6Y4A7kbcB4vEKAf+ViRo0bf2LKJGn8ZSTjQkrvGQzdgYws618yDrUqkiTZCtATaH7VatEnBYzjqkeIB4i4P9B0jYC/krgd8DvCIa+AjyXoNRLyNmdKW4k4H8+BQ3rgK8RDG0BfhKXewXBkJ+AP5Sg5jt4ig9f/TBgayoJ4kg7iM8OPJH6dzM4JD6WR2U+x39HSqbGI+CfB0xNkHMywVCmL/1zKZna/Pk/BRLtqTckqbEbqMcTp0FyBcVG4EcZEp89eF2UJkHcA68w+YsY8dNSaHcBH4T9S5kunmrz8wP+l0ksxf6CYKit21QlAX9b7iAB3JEg7b8SFYw6OISRtxKTMvZSYJhp6yujvky5gVfgNq2oCjjdkx7YBxX9C5ySuNQCcHrs4VoxOWMaAv4ngPgoM92R3vltwfcyePYmpIAXi/EEQ8m20BpkhJzEUrGhWTuj90VeA7aZtl6NlGA6XJjyEJQoFaLW6/b1b+49tBG3VEMcAa8Q1Np3H7Evmdpf/fgPB5yBQuAS9grEOcVrlv/qk9ef2lk7svlxx+nB8C4r7/nZ2v4/OuT0mfWJ099TaTTGu8jSHwE/NzRrXgqyfk3Lo8pM4LE2dC1TRcdSYFzM795IH+NtCcrWEfWDSnrcMTRrL3CWaesXAJ8hPXfSdsP1VHqr+3xra/XXcXoEEFETpgiDUzLw/boR607vsf7OfZHBjhDQTTms1ntFu3aGhxe1eO1cqk8u2PyXAiKhg5GTZvpEJHbGO8iwepcBz5m2fquhWcn0yK8gXUhjXTJOJxgaRMC/M41uVQMHMxySqgRpvUjM2IaXtXXNk6FZryMDUB1jlMOCP/aTFhuB5EOk39yJj388F+bJwGcxWDDlc/ji5D01vGTFpV89vAL+3qJ8E+aatj4IGcXlKUOzbm9RIuB3CIYWAdfE5YyhQauUGkejHcgEiVbJVo03+W3d8VXWN/VLgK8quQeCUitkSMPYtMNphbszNGsnchbMNG092axdlSDtM2n2RJD5WCdibDJZowD5EuU5Y+P1uan0u6JGtOyOkrZB3dCsEPAhYCQpkqitXrkeojh0QQb3zHPGtgkJu9JWd5RtwNAkeYnayrfxK0YGZMk7wtoBN9HlZ38bG/EjhaRE6Jkg7XCue90A09b9QAHC2wb5zljhpP4dC7fn1gT557bxiWOAJ5LkjUiQti2HoxOPsxGewFU3QL4z1umuNDthuV2T03u1ugun9OM45l6W7qNMW38J2BrvxhmDKQnS1ud6iGIwEuEeNcbbRyFND4poUK1j4JMrcBGcUfi2d+XYSldqnnzIk4IAp4sL8Oe1vZQP6kcJgALCnFq4gSvHVjp4Yilu15sQUVOfVzyIF6snMK3bG8+tPqvooNM/LKIKZ0OznGiA6ouQd4/GeIjElqNgaCRwRlzqQQL+dzt+TNLGGKL7K6S2xw4BfoqM1uJyTGa3hwD2Rk5RZr9xzkNleyu34JZENU8FoNZt/unrl0+qdLY+KqLW2wg+ttSPUF5c+8Hihw++9NraqqtvwlfX2B6ezzCWz7ivp/q3eZ84/Yo9hCfwGhytBTIm4z4H32e+oy1J5iWRSGebnjL/2GEcwrMbfiRkrGnrZyJdLJYjxf8KjlFsCBeVfr6dyj+rAx/hlH4D5ajMEGGIdB24vvb8t84pXT1zX2SQp4pII3M9j7rhBRtDa2VhwEPeIOgx7emDP/+guE/dVaO6LB8S9oq8CqcfYa9YdVFqBN67hmYl16gFQ8OBRB+O+DH5hT4Ir9G+m2zGLgbeMTRLzx2dz8LCOT2k0kEBXFDqepRPfrCyHNYm1iQ9COXffwq8qPZIgFrFkchJ9/1k358eZrqQfE9X5gmGCpAPil+tniTgz1RFmAU011lEV9c9CGd5Q1qy5XUQcGvuCI9CrYo0kdiKob2pz7PAbZKgPAXUClCOfkC5d1bazw6GuiO9LYYkyJ2V03FpaZe+GDhgjF3TeORLtW+29QzYAR2IJy8N49J0UU241yTZtYYVVgFRdxK+0AaCh37EQje5xigYKiAYuhl4BxmBNR63EvDXkFMUxyd8njiVZ7KleCXwMtL6kTs4PQulO2l0z4yUFqZV71qxnBe8L+E78ry0DjXOegXcB1AOlREMLUB6KLyPNFAPRTqzXUty15efE/D/NqdjAtKEGcUTq8apdW7LUIXJGHsZsMe09QrkHcx9SFf7Dofj+RhauElsqBu/6od76w/gFSGZ4wOU/Xcsu3PwlO4LL9xcNwK1+b1o4Xg+tbdvb2WJenDx9LFiPi94Z+Kr+Z48/jSb7T2QzmI3p00Y/IyAP7OINtlGjKjnecrNQC9Ds9bHFklmaK+Ofj9mHvLbNcfEpxhAES5VTi+lr7rndtTqXbglQD14PlDqdg0t+HDsEbf0f4RoeaxWRSRS4fTvVucVi4VrmHn1eeL7/Ml7jwLlGURNt3ac2L5FwJ/uF7o6HjGMdTzffcigLs2QytBeB1wHYNq6CrgpjwVZxO9WD1duOX+Dy8LSh1Gi25moh0jp1HsvWBz4/ZundVVxuFtb3oIe09a7VbulM/Z74unyNb7d15wn5lPuvYbq3I0If5X0QwTVIN1U/5iBo/jguN+9yfyt6tf8pwuejDf5wprB43eG1WHA+PhKaWmeDM3K1EicEWaM3yyno6i7HyJDJVfdAnyH9wN8edwWT0YfSkhrNfDko/akfm5EmQu7+nON2APcQ7DiQRDXAtOQX7TsH1d9P9Lx+lVgfivhh1Lhl8gw8LXRMa4i89BE5UhjQy14ArergpCdr/OKXwD+ZmjWgfhKx83F53iYtv55D+X5WdprPRMWCIZUpJDUHzmbKoBtHXE5uSPwwppBw3aEh28VeAMMzWphK87v23btwwSBW5U0N+B3kKFid+Sa0ExwIDLwXuSXLxM6E3Q6xs55Y6xy14S1SQ0Spq13QfoCf5eWYe+OC/z6jfPPPup1vU3BSSovdArGPmZf1MVFnS/wJtd6+KIK/ERwaApDd2fUEe+4Q51XvFjBWRJ150mIvGesaetne/CuwNsM/BB5Qy1ZlJiGW+GLOvKDgDkej9vBG0ArH77Ia+HJtPUewCfAMkOzPpdrenKNqP34KHCLoVlzU5XNbw8KeSmq4ARTG7EY+H1rTIX8X4ob/WQ/7TBt/SHgwtYCUDcg32dsGBDRz4p+amHa+mTgQdrgw/WpHrDOANPWz0aGDDYMzVqUbr0TjM1jmLbeGxn/4x5Ds9pys+8EY/MVUUXLQWChoVnpfC+3GToBY/P6RNYhMG29K9K6tMzQrOmZtJHfjFUiINyGoMufCkQ/tboHWGBo1sRM28lvxiL2eqW7j4kNOB9g2vqNyNsFzxiadU172srrc6z67pSJXtfKotmPjJqHGn62zLh1Za5p6iiYtv5LoAy4qZWwCWkhbzew2bOfeEzUdf82TgFel0OguOCJL5WV3TU/17RlE6atdwf+AUwARhua9U422s1Lxs6ePecLyLgPiTC8rOyuLW1pL19h2vqjwI3IIC43Z9Nwka9L8bQUeZNJ4hdj2vpQ4KChWbkPPpYCpq1PRH59owtwo6FZi7P9jHwVnranyNuWIm8ycNi09Qdz3YFEMG19oGnry5DXRhYZmtW/I5gK+bsUDwB2Jch6DzinrOyuVB4UN9EUg/BJ4DeGZlWQQ5i2riO9Oi4HVgC3GZr1cUc+My8ZCzB79pxzkB+fn4w0BswD7ikru6synfqmrV8HBJAe/i4y4ujvU3kdZBPRT8HciYyIXo2MsFZuaNaq9rSbLvKWsQ2YPXvOKUBtWdld+zKpb9r6qcAtyIDafuSsfx74P0OzNmeTVtPWJyHlg4nImIYfIl+mXx/rcct7xmYT0RhOX0HeTuuJ9NfdhLyAtRbJiI+Bw8m0XaatFyLDAJ0GnA5cgLwcfgoyGvhOZHi9OYZmZeqX3G58qhgbC9PWhwGXIJf6M5De+keRzt21SN+pemQQZEHTV7l6IKXZhvB7u5AfbVyGdAfNC8eATy1jG2Da+hnIuP+jkcztQtMdTA+5PwuaBwmNIBm/C+nxvzbXAtoJnMAJdGb8P4v3CXogjnvuAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE3LTA1LTI2VDAxOjM3OjU2LTA0OjAwciT+/wAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxNy0wNS0yNlQwMTozNzo1Ni0wNDowMAN5RkMAAAAZdEVYdFNvZnR3YXJlAEFkb2JlIEltYWdlUmVhZHlxyWU8AAAAAElFTkSuQmCC',
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
                //data: 'data:image/png;base64,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',
            },
            /**/
            'lap': {
                title: "LAP",
                section: ['On', 'BasBoyun', 'BatinUS', 'BatinPelvisBT', 'BatinPelvisMR', 'MREnterografi', 'MREnteroklizis', 'PerianalMR', 'PerianalUS'],
                //data: 'data:image/png;base64,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',
            },
            /**/
            'perforasyon': {
                title: "Perforasyon",
                section: ['BatinUS', 'Enteroklizis', 'BatinPelvisBT', 'BatinPelvisMR', 'MREnterografi', 'MREnteroklizis', 'OzefagusMideDuedonumGrafisi'],
                //data: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHYAAABhCAYAAAADdFUyAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QA/wD/AP+gvaeTAAAAB3RJTUUH4QUaASU4J7tYQgAAFSxJREFUeNrtnXmcFNW1x7+3qmdhm6FZlU1Q4vqACAhS6isBifoSjTTiFkOMUXFJMomF8WlMNKuJpjQkErfwniSRxAFbE5O8IAEpwBIEFBMEF0CQfXF6GJhhZrqr6v1xe2Z6erp7enp66B7k9/nM5zN9tzr3nrr3nnvOuafgBE7gBDoPRK4JSBemrU8Cboz+fMLQrLdyTVM+w5drAtqA84GvRv9fBpxgbAoouSagDaiI+d/NNTH5js7E2OqY/7vkmph8R2dairfG/D8WeBbAtPVvAZ8HhgBbgPmGZv0h18TmGp1JeCoEagA1mvQUcB4wJkHxZw3Nui3NdrtF2/kPYBQwAOgNdAUKYsbIAeqRK8dOYA+wDnjT0KwPcj0+8eg0jAUwbf2bwOw0i99taNbjCdpQgGuBK4DPAv2AMHAY2I1k2G4gBFRG8wC6AT2BXsAwoC/QB+iOZPhHwGLgFUOz3s71WHUqxgKYtn4d8AzQo5Winxia1Sdapxj4GjAZGA0UA5uAlcA/kLMuTAYwbX0IcsZfAvwn8kXZDywBFhiatSIX49TpGAuNg7kaOKmVoo8gGdkPuUe/Aaw1NGtpB9LWF8ngicDZwEDgdeCHhmZtO1Zj1CkZC2Da+izg0TSKzgV+kyuFhmnrVwL/DZwLLAdmGJq1r6Of25kZezvwZCvFvm5o1pxc0xqldzTwMKAD84AyQ7NqO+p5nekcG4/RaZSpzDWRDTA06y1Dsy4FrkLu9TtMW7+lo57XKWdsVLLdh5RKk8EFhhiatSvX9Cbpw6XALwA/EDA0681stt9ZZ+xNpGYqwMZ8ZSqAoVmLDM0aAfwNWG3a+rez2X6nY6xp6xOQb3pr6BRGAkOzZgKTgMdMW385W+3m3VJs2noB8EWkFugAUsvjAScj96ZAmk2NNDTr37nuTxv6fQpgI7Vrlxiatb097eUjY99EHvjbg+8YmpXOUSjvYNr6XOBm4ExDs97PtJ28Yqxp66OA9cD7gIl8eyfTZIdNBy8amnV1rvvSznH4CXA/7Vh18o2xLwBXGZpVFJc+HpgPnNpKE69GjxSdHqatPwZ8GxhhaNaGttbPN+HpYuQhvhkMzVoNnAXch1S0743JrkR6VMw6Xpga7fPdSIPHv01bH9DW+vk2YzcC3zI069VWyvmA05AmvO2GZlWn035nRMzMLWyLoSLfDO1VpOEdYWhWBLkPH/cwNOtu09YvBnbQutGjEfm2FHtI4/YJxMDQrNFAf9PWg+nWyTfGdss1AXmMQcBU09YvT6dw3jDWtPVrgBFIm+kJxCGqHr0S+HtUxkiJrAtPUYvFRUgfIa+V4g35w5BqtZ8ZmnVfRg8OhsbRUtV4GwH/e9nuYxq03A9cHtO/Q8DVBPx17W3atPUdwDZDsy5KVS5rwlNUJfYW0lqxGekrlM6LU4i01Ew1NOvldpAwEPlCxaJ3tvrXRvwncGFcmppJQwkwGthv2voXDM36a7JCWWGsaesnIV0/FwBfMTSrPmtDFKwYBGIUsIaAf3+KkjUJ0to9QzJEvIdEBa2vXmnB0KwDpq3fC/yRFH5f2dpjHwYcQ7OuzzJTrwSxDfgrsJVgaELW2j62cMkSYwEMzXoE2G7a+k3JymSLsaOBf3bAgDxE0xLWDbxnkhd100zLCbLK2CgeJ4XPV7YY+2/kpaksQ0TifvdMWtQtBeHEFHVk2vGL/wX6mLZ+Q6LMbDH2m0CvqBI/e3BKYwQODyKlSadgoTji4sYcg91uFIkjEY5TGJrlAg8gGdwCWTvuRC0wq5CCwnogQgYvjoPKYN/moq3hsx/57t4X7wNFQ9SCVwBe0ZZ7+8+4eUzx8h9sqz8zoggHges7o2j92z8+8NSyVVXX/xlfpWwo0rN+Qsn8qx7oe8eN79V9dr+HYszSlh2btTkYmgfMiEnZBwwh4M+e/NE07h4w3dCshbHpWVNQRC0wRcjLUkVInW9BW/9UnILDbs/CsFesIOrngvIiUA4sBPdXtW53pcbtXqSKSEOdQprfsYlFxEP4PJQZgGPaensN+JnCpeM2/JeAH8cn5pV1pz0ofLFySj1FryKirrpeMYXUf7Z+Wuk7AI/Yk8pVnOkeyoBZ2mt7OpSYljN2D3LGZn1rMG19JLAOT/Q1LlhW2ZCeNyrF9qLe666gxFjvlGrq3ZJGg8J3tKXXeIjNPurLc01rNmFo1r+A1Qhvamz6ccNYlErwYmUtFXwVzYoUiPplpxZuvLBtDWcFHtk/7sRiJdJJoRH5Zo9tjpf2F+EVNL18IuwxtV+SaxGFSC1mzLvqNdfi9Vb3/taquWoFC58ei6dORK0cAUp/5Fm5BtiIVIuuJODfncWeOMTvscHQaUh98vnIK5kqcARpZ14DBAn4092XFwHfj03Ib8Y6pX9HqR4jRQEPnB7bkHdaE5Tt4aFWxY2f1yhDdHl5R8l39+0etL1uzIXgzsNXCV6LBeuKhooEQ38AFhLw/yULPSkg4JczNhiahnR4/0IrdXZF9+rfEvB/1ErZVcBgc+15Zxlj12yCNBhr2npPZBiAjl5OAHBROatwnVhSc9WOx/crpXiFpYgwoIJb3OuGpQ+UXF/yxJBNdfIie0/1gPD79h+6f+8K9cOjF4Fa2bw5gGDluUcjJa9uDw/qg1IDoi4RU2MhgC8DXyYYWgNcR8C/lcyxU9IR+hXwjTTrDER6KhoEQ5cR8C9LVtDQrKOmrRfhqVOR935TM9a09fnA9cgzabasEymh4LAzfKoY4vvoVtRD63BLx0BYnmN9tW+OLFoz5YAzYKEiHE/gEXL6ir6+3UuGFm6Y82H1Rc2pDPjXEQydC95bKIdiMtp0GDgPeJtgaAoBf6b3awoJhpYgTZNtRRHwGsHQxQT8Vopym3CVRl16Usaatr4dGY/hCuDdaNkOPR55CDwEgws2i8U103bjlN6AEjXQiDBESk5/p27coi8Vv3HGwcjJeAh6qftEGF/V1voRo+JEwUqCoe8h9c2JEAHeRF6IDkf7eiGJvThKgNUEQxNTzZwUGJkkfStSmVOBNHeeA5yZpOxSgqF+BPyfJMlfh7xBIYcrUQnT1uchL+jm9py7sH41ypFxjXus23UrVxeflrDsAu9zqFWLYvbYMIn9p9YgQx28QsDf3LwWDPVEeilcASRzOj+fgH91SrpbnmPjMR8oJ+D/c4K6Y4A7kbcB4vEKAf+ViRo0bf2LKJGn8ZSTjQkrvGQzdgYws618yDrUqkiTZCtATaH7VatEnBYzjqkeIB4i4P9B0jYC/krgd8DvCIa+AjyXoNRLyNmdKW4k4H8+BQ3rgK8RDG0BfhKXewXBkJ+AP5Sg5jt4ig9f/TBgayoJ4kg7iM8OPJH6dzM4JD6WR2U+x39HSqbGI+CfB0xNkHMywVCmL/1zKZna/Pk/BRLtqTckqbEbqMcTp0FyBcVG4EcZEp89eF2UJkHcA68w+YsY8dNSaHcBH4T9S5kunmrz8wP+l0ksxf6CYKit21QlAX9b7iAB3JEg7b8SFYw6OISRtxKTMvZSYJhp6yujvky5gVfgNq2oCjjdkx7YBxX9C5ySuNQCcHrs4VoxOWMaAv4ngPgoM92R3vltwfcyePYmpIAXi/EEQ8m20BpkhJzEUrGhWTuj90VeA7aZtl6NlGA6XJjyEJQoFaLW6/b1b+49tBG3VEMcAa8Q1Np3H7Evmdpf/fgPB5yBQuAS9grEOcVrlv/qk9ef2lk7svlxx+nB8C4r7/nZ2v4/OuT0mfWJ099TaTTGu8jSHwE/NzRrXgqyfk3Lo8pM4LE2dC1TRcdSYFzM795IH+NtCcrWEfWDSnrcMTRrL3CWaesXAJ8hPXfSdsP1VHqr+3xra/XXcXoEEFETpgiDUzLw/boR607vsf7OfZHBjhDQTTms1ntFu3aGhxe1eO1cqk8u2PyXAiKhg5GTZvpEJHbGO8iwepcBz5m2fquhWcn0yK8gXUhjXTJOJxgaRMC/M41uVQMHMxySqgRpvUjM2IaXtXXNk6FZryMDUB1jlMOCP/aTFhuB5EOk39yJj388F+bJwGcxWDDlc/ji5D01vGTFpV89vAL+3qJ8E+aatj4IGcXlKUOzbm9RIuB3CIYWAdfE5YyhQauUGkejHcgEiVbJVo03+W3d8VXWN/VLgK8quQeCUitkSMPYtMNphbszNGsnchbMNG092axdlSDtM2n2RJD5WCdibDJZowD5EuU5Y+P1uan0u6JGtOyOkrZB3dCsEPAhYCQpkqitXrkeojh0QQb3zHPGtgkJu9JWd5RtwNAkeYnayrfxK0YGZMk7wtoBN9HlZ38bG/EjhaRE6Jkg7XCue90A09b9QAHC2wb5zljhpP4dC7fn1gT557bxiWOAJ5LkjUiQti2HoxOPsxGewFU3QL4z1umuNDthuV2T03u1ugun9OM45l6W7qNMW38J2BrvxhmDKQnS1ud6iGIwEuEeNcbbRyFND4poUK1j4JMrcBGcUfi2d+XYSldqnnzIk4IAp4sL8Oe1vZQP6kcJgALCnFq4gSvHVjp4Yilu15sQUVOfVzyIF6snMK3bG8+tPqvooNM/LKIKZ0OznGiA6ouQd4/GeIjElqNgaCRwRlzqQQL+dzt+TNLGGKL7K6S2xw4BfoqM1uJyTGa3hwD2Rk5RZr9xzkNleyu34JZENU8FoNZt/unrl0+qdLY+KqLW2wg+ttSPUF5c+8Hihw++9NraqqtvwlfX2B6ezzCWz7ivp/q3eZ84/Yo9hCfwGhytBTIm4z4H32e+oy1J5iWRSGebnjL/2GEcwrMbfiRkrGnrZyJdLJYjxf8KjlFsCBeVfr6dyj+rAx/hlH4D5ajMEGGIdB24vvb8t84pXT1zX2SQp4pII3M9j7rhBRtDa2VhwEPeIOgx7emDP/+guE/dVaO6LB8S9oq8CqcfYa9YdVFqBN67hmYl16gFQ8OBRB+O+DH5hT4Ir9G+m2zGLgbeMTRLzx2dz8LCOT2k0kEBXFDqepRPfrCyHNYm1iQ9COXffwq8qPZIgFrFkchJ9/1k358eZrqQfE9X5gmGCpAPil+tniTgz1RFmAU011lEV9c9CGd5Q1qy5XUQcGvuCI9CrYo0kdiKob2pz7PAbZKgPAXUClCOfkC5d1bazw6GuiO9LYYkyJ2V03FpaZe+GDhgjF3TeORLtW+29QzYAR2IJy8N49J0UU241yTZtYYVVgFRdxK+0AaCh37EQje5xigYKiAYuhl4BxmBNR63EvDXkFMUxyd8njiVZ7KleCXwMtL6kTs4PQulO2l0z4yUFqZV71qxnBe8L+E78ry0DjXOegXcB1AOlREMLUB6KLyPNFAPRTqzXUty15efE/D/NqdjAtKEGcUTq8apdW7LUIXJGHsZsMe09QrkHcx9SFf7Dofj+RhauElsqBu/6od76w/gFSGZ4wOU/Xcsu3PwlO4LL9xcNwK1+b1o4Xg+tbdvb2WJenDx9LFiPi94Z+Kr+Z48/jSb7T2QzmI3p00Y/IyAP7OINtlGjKjnecrNQC9Ds9bHFklmaK+Ofj9mHvLbNcfEpxhAES5VTi+lr7rndtTqXbglQD14PlDqdg0t+HDsEbf0f4RoeaxWRSRS4fTvVucVi4VrmHn1eeL7/Ml7jwLlGURNt3ac2L5FwJ/uF7o6HjGMdTzffcigLs2QytBeB1wHYNq6CrgpjwVZxO9WD1duOX+Dy8LSh1Gi25moh0jp1HsvWBz4/ZundVVxuFtb3oIe09a7VbulM/Z74unyNb7d15wn5lPuvYbq3I0If5X0QwTVIN1U/5iBo/jguN+9yfyt6tf8pwuejDf5wprB43eG1WHA+PhKaWmeDM3K1EicEWaM3yyno6i7HyJDJVfdAnyH9wN8edwWT0YfSkhrNfDko/akfm5EmQu7+nON2APcQ7DiQRDXAtOQX7TsH1d9P9Lx+lVgfivhh1Lhl8gw8LXRMa4i89BE5UhjQy14ArergpCdr/OKXwD+ZmjWgfhKx83F53iYtv55D+X5WdprPRMWCIZUpJDUHzmbKoBtHXE5uSPwwppBw3aEh28VeAMMzWphK87v23btwwSBW5U0N+B3kKFid+Sa0ExwIDLwXuSXLxM6E3Q6xs55Y6xy14S1SQ0Spq13QfoCf5eWYe+OC/z6jfPPPup1vU3BSSovdArGPmZf1MVFnS/wJtd6+KIK/ERwaApDd2fUEe+4Q51XvFjBWRJ150mIvGesaetne/CuwNsM/BB5Qy1ZlJiGW+GLOvKDgDkej9vBG0ArH77Ia+HJtPUewCfAMkOzPpdrenKNqP34KHCLoVlzU5XNbw8KeSmq4ARTG7EY+H1rTIX8X4ob/WQ/7TBt/SHgwtYCUDcg32dsGBDRz4p+amHa+mTgQdrgw/WpHrDOANPWz0aGDDYMzVqUbr0TjM1jmLbeGxn/4x5Ds9pys+8EY/MVUUXLQWChoVnpfC+3GToBY/P6RNYhMG29K9K6tMzQrOmZtJHfjFUiINyGoMufCkQ/tboHWGBo1sRM28lvxiL2eqW7j4kNOB9g2vqNyNsFzxiadU172srrc6z67pSJXtfKotmPjJqHGn62zLh1Za5p6iiYtv5LoAy4qZWwCWkhbzew2bOfeEzUdf82TgFel0OguOCJL5WV3TU/17RlE6atdwf+AUwARhua9U422s1Lxs6ePecLyLgPiTC8rOyuLW1pL19h2vqjwI3IIC43Z9Nwka9L8bQUeZNJ4hdj2vpQ4KChWbkPPpYCpq1PRH59owtwo6FZi7P9jHwVnranyNuWIm8ycNi09Qdz3YFEMG19oGnry5DXRhYZmtW/I5gK+bsUDwB2Jch6DzinrOyuVB4UN9EUg/BJ4DeGZlWQQ5i2riO9Oi4HVgC3GZr1cUc+My8ZCzB79pxzkB+fn4w0BswD7ikru6synfqmrV8HBJAe/i4y4ujvU3kdZBPRT8HciYyIXo2MsFZuaNaq9rSbLvKWsQ2YPXvOKUBtWdld+zKpb9r6qcAtyIDafuSsfx74P0OzNmeTVtPWJyHlg4nImIYfIl+mXx/rcct7xmYT0RhOX0HeTuuJ9NfdhLyAtRbJiI+Bw8m0XaatFyLDAJ0GnA5cgLwcfgoyGvhOZHi9OYZmZeqX3G58qhgbC9PWhwGXIJf6M5De+keRzt21SN+pemQQZEHTV7l6IKXZhvB7u5AfbVyGdAfNC8eATy1jG2Da+hnIuP+jkcztQtMdTA+5PwuaBwmNIBm/C+nxvzbXAtoJnMAJdGb8P4v3CXogjnvuAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE3LTA1LTI2VDAxOjM3OjU2LTA0OjAwciT+/wAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxNy0wNS0yNlQwMTozNzo1Ni0wNDowMAN5RkMAAAAZdEVYdFNvZnR3YXJlAEFkb2JlIEltYWdlUmVhZHlxyWU8AAAAAElFTkSuQmCC',
            },
            /**/
            'anal_fissur': {
                title: "Anal Fissür",
                section: ['Perianal', 'OzefagusMideDuedonumGrafisi'],
                //data: 'data:image/png;base64,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',
            },
            /**/
            'perianal_apse': {
                title: "Perianal Apse",
                section: ['Perianal', 'BatinUS', 'BatinPelvisBT', 'BatinPelvisMR', 'PerianalMR', 'PerianalUS'],
                //data: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHYAAABhCAYAAAADdFUyAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QA/wD/AP+gvaeTAAAAB3RJTUUH4QUaASU4J7tYQgAAFSxJREFUeNrtnXmcFNW1x7+3qmdhm6FZlU1Q4vqACAhS6isBifoSjTTiFkOMUXFJMomF8WlMNKuJpjQkErfwniSRxAFbE5O8IAEpwBIEFBMEF0CQfXF6GJhhZrqr6v1xe2Z6erp7enp66B7k9/nM5zN9tzr3nrr3nnvOuafgBE7gBDoPRK4JSBemrU8Cboz+fMLQrLdyTVM+w5drAtqA84GvRv9fBpxgbAoouSagDaiI+d/NNTH5js7E2OqY/7vkmph8R2dairfG/D8WeBbAtPVvAZ8HhgBbgPmGZv0h18TmGp1JeCoEagA1mvQUcB4wJkHxZw3Nui3NdrtF2/kPYBQwAOgNdAUKYsbIAeqRK8dOYA+wDnjT0KwPcj0+8eg0jAUwbf2bwOw0i99taNbjCdpQgGuBK4DPAv2AMHAY2I1k2G4gBFRG8wC6AT2BXsAwoC/QB+iOZPhHwGLgFUOz3s71WHUqxgKYtn4d8AzQo5Winxia1Sdapxj4GjAZGA0UA5uAlcA/kLMuTAYwbX0IcsZfAvwn8kXZDywBFhiatSIX49TpGAuNg7kaOKmVoo8gGdkPuUe/Aaw1NGtpB9LWF8ngicDZwEDgdeCHhmZtO1Zj1CkZC2Da+izg0TSKzgV+kyuFhmnrVwL/DZwLLAdmGJq1r6Of25kZezvwZCvFvm5o1pxc0xqldzTwMKAD84AyQ7NqO+p5nekcG4/RaZSpzDWRDTA06y1Dsy4FrkLu9TtMW7+lo57XKWdsVLLdh5RKk8EFhhiatSvX9Cbpw6XALwA/EDA0681stt9ZZ+xNpGYqwMZ8ZSqAoVmLDM0aAfwNWG3a+rez2X6nY6xp6xOQb3pr6BRGAkOzZgKTgMdMW385W+3m3VJs2noB8EWkFugAUsvjAScj96ZAmk2NNDTr37nuTxv6fQpgI7Vrlxiatb097eUjY99EHvjbg+8YmpXOUSjvYNr6XOBm4ExDs97PtJ28Yqxp66OA9cD7gIl8eyfTZIdNBy8amnV1rvvSznH4CXA/7Vh18o2xLwBXGZpVFJc+HpgPnNpKE69GjxSdHqatPwZ8GxhhaNaGttbPN+HpYuQhvhkMzVoNnAXch1S0743JrkR6VMw6Xpga7fPdSIPHv01bH9DW+vk2YzcC3zI069VWyvmA05AmvO2GZlWn035nRMzMLWyLoSLfDO1VpOEdYWhWBLkPH/cwNOtu09YvBnbQutGjEfm2FHtI4/YJxMDQrNFAf9PWg+nWyTfGdss1AXmMQcBU09YvT6dw3jDWtPVrgBFIm+kJxCGqHr0S+HtUxkiJrAtPUYvFRUgfIa+V4g35w5BqtZ8ZmnVfRg8OhsbRUtV4GwH/e9nuYxq03A9cHtO/Q8DVBPx17W3atPUdwDZDsy5KVS5rwlNUJfYW0lqxGekrlM6LU4i01Ew1NOvldpAwEPlCxaJ3tvrXRvwncGFcmppJQwkwGthv2voXDM36a7JCWWGsaesnIV0/FwBfMTSrPmtDFKwYBGIUsIaAf3+KkjUJ0to9QzJEvIdEBa2vXmnB0KwDpq3fC/yRFH5f2dpjHwYcQ7OuzzJTrwSxDfgrsJVgaELW2j62cMkSYwEMzXoE2G7a+k3JymSLsaOBf3bAgDxE0xLWDbxnkhd100zLCbLK2CgeJ4XPV7YY+2/kpaksQ0TifvdMWtQtBeHEFHVk2vGL/wX6mLZ+Q6LMbDH2m0CvqBI/e3BKYwQODyKlSadgoTji4sYcg91uFIkjEY5TGJrlAg8gGdwCWTvuRC0wq5CCwnogQgYvjoPKYN/moq3hsx/57t4X7wNFQ9SCVwBe0ZZ7+8+4eUzx8h9sqz8zoggHges7o2j92z8+8NSyVVXX/xlfpWwo0rN+Qsn8qx7oe8eN79V9dr+HYszSlh2btTkYmgfMiEnZBwwh4M+e/NE07h4w3dCshbHpWVNQRC0wRcjLUkVInW9BW/9UnILDbs/CsFesIOrngvIiUA4sBPdXtW53pcbtXqSKSEOdQprfsYlFxEP4PJQZgGPaensN+JnCpeM2/JeAH8cn5pV1pz0ofLFySj1FryKirrpeMYXUf7Z+Wuk7AI/Yk8pVnOkeyoBZ2mt7OpSYljN2D3LGZn1rMG19JLAOT/Q1LlhW2ZCeNyrF9qLe666gxFjvlGrq3ZJGg8J3tKXXeIjNPurLc01rNmFo1r+A1Qhvamz6ccNYlErwYmUtFXwVzYoUiPplpxZuvLBtDWcFHtk/7sRiJdJJoRH5Zo9tjpf2F+EVNL18IuwxtV+SaxGFSC1mzLvqNdfi9Vb3/taquWoFC58ei6dORK0cAUp/5Fm5BtiIVIuuJODfncWeOMTvscHQaUh98vnIK5kqcARpZ14DBAn4092XFwHfj03Ib8Y6pX9HqR4jRQEPnB7bkHdaE5Tt4aFWxY2f1yhDdHl5R8l39+0etL1uzIXgzsNXCV6LBeuKhooEQ38AFhLw/yULPSkg4JczNhiahnR4/0IrdXZF9+rfEvB/1ErZVcBgc+15Zxlj12yCNBhr2npPZBiAjl5OAHBROatwnVhSc9WOx/crpXiFpYgwoIJb3OuGpQ+UXF/yxJBNdfIie0/1gPD79h+6f+8K9cOjF4Fa2bw5gGDluUcjJa9uDw/qg1IDoi4RU2MhgC8DXyYYWgNcR8C/lcyxU9IR+hXwjTTrDER6KhoEQ5cR8C9LVtDQrKOmrRfhqVOR935TM9a09fnA9cgzabasEymh4LAzfKoY4vvoVtRD63BLx0BYnmN9tW+OLFoz5YAzYKEiHE/gEXL6ir6+3UuGFm6Y82H1Rc2pDPjXEQydC95bKIdiMtp0GDgPeJtgaAoBf6b3awoJhpYgTZNtRRHwGsHQxQT8Vopym3CVRl16Usaatr4dGY/hCuDdaNkOPR55CDwEgws2i8U103bjlN6AEjXQiDBESk5/p27coi8Vv3HGwcjJeAh6qftEGF/V1voRo+JEwUqCoe8h9c2JEAHeRF6IDkf7eiGJvThKgNUEQxNTzZwUGJkkfStSmVOBNHeeA5yZpOxSgqF+BPyfJMlfh7xBIYcrUQnT1uchL+jm9py7sH41ypFxjXus23UrVxeflrDsAu9zqFWLYvbYMIn9p9YgQx28QsDf3LwWDPVEeilcASRzOj+fgH91SrpbnmPjMR8oJ+D/c4K6Y4A7kbcB4vEKAf+ViRo0bf2LKJGn8ZSTjQkrvGQzdgYws618yDrUqkiTZCtATaH7VatEnBYzjqkeIB4i4P9B0jYC/krgd8DvCIa+AjyXoNRLyNmdKW4k4H8+BQ3rgK8RDG0BfhKXewXBkJ+AP5Sg5jt4ig9f/TBgayoJ4kg7iM8OPJH6dzM4JD6WR2U+x39HSqbGI+CfB0xNkHMywVCmL/1zKZna/Pk/BRLtqTckqbEbqMcTp0FyBcVG4EcZEp89eF2UJkHcA68w+YsY8dNSaHcBH4T9S5kunmrz8wP+l0ksxf6CYKit21QlAX9b7iAB3JEg7b8SFYw6OISRtxKTMvZSYJhp6yujvky5gVfgNq2oCjjdkx7YBxX9C5ySuNQCcHrs4VoxOWMaAv4ngPgoM92R3vltwfcyePYmpIAXi/EEQ8m20BpkhJzEUrGhWTuj90VeA7aZtl6NlGA6XJjyEJQoFaLW6/b1b+49tBG3VEMcAa8Q1Np3H7Evmdpf/fgPB5yBQuAS9grEOcVrlv/qk9ef2lk7svlxx+nB8C4r7/nZ2v4/OuT0mfWJ099TaTTGu8jSHwE/NzRrXgqyfk3Lo8pM4LE2dC1TRcdSYFzM795IH+NtCcrWEfWDSnrcMTRrL3CWaesXAJ8hPXfSdsP1VHqr+3xra/XXcXoEEFETpgiDUzLw/boR607vsf7OfZHBjhDQTTms1ntFu3aGhxe1eO1cqk8u2PyXAiKhg5GTZvpEJHbGO8iwepcBz5m2fquhWcn0yK8gXUhjXTJOJxgaRMC/M41uVQMHMxySqgRpvUjM2IaXtXXNk6FZryMDUB1jlMOCP/aTFhuB5EOk39yJj388F+bJwGcxWDDlc/ji5D01vGTFpV89vAL+3qJ8E+aatj4IGcXlKUOzbm9RIuB3CIYWAdfE5YyhQauUGkejHcgEiVbJVo03+W3d8VXWN/VLgK8quQeCUitkSMPYtMNphbszNGsnchbMNG092axdlSDtM2n2RJD5WCdibDJZowD5EuU5Y+P1uan0u6JGtOyOkrZB3dCsEPAhYCQpkqitXrkeojh0QQb3zHPGtgkJu9JWd5RtwNAkeYnayrfxK0YGZMk7wtoBN9HlZ38bG/EjhaRE6Jkg7XCue90A09b9QAHC2wb5zljhpP4dC7fn1gT557bxiWOAJ5LkjUiQti2HoxOPsxGewFU3QL4z1umuNDthuV2T03u1ugun9OM45l6W7qNMW38J2BrvxhmDKQnS1ud6iGIwEuEeNcbbRyFND4poUK1j4JMrcBGcUfi2d+XYSldqnnzIk4IAp4sL8Oe1vZQP6kcJgALCnFq4gSvHVjp4Yilu15sQUVOfVzyIF6snMK3bG8+tPqvooNM/LKIKZ0OznGiA6ouQd4/GeIjElqNgaCRwRlzqQQL+dzt+TNLGGKL7K6S2xw4BfoqM1uJyTGa3hwD2Rk5RZr9xzkNleyu34JZENU8FoNZt/unrl0+qdLY+KqLW2wg+ttSPUF5c+8Hihw++9NraqqtvwlfX2B6ezzCWz7ivp/q3eZ84/Yo9hCfwGhytBTIm4z4H32e+oy1J5iWRSGebnjL/2GEcwrMbfiRkrGnrZyJdLJYjxf8KjlFsCBeVfr6dyj+rAx/hlH4D5ajMEGGIdB24vvb8t84pXT1zX2SQp4pII3M9j7rhBRtDa2VhwEPeIOgx7emDP/+guE/dVaO6LB8S9oq8CqcfYa9YdVFqBN67hmYl16gFQ8OBRB+O+DH5hT4Ir9G+m2zGLgbeMTRLzx2dz8LCOT2k0kEBXFDqepRPfrCyHNYm1iQ9COXffwq8qPZIgFrFkchJ9/1k358eZrqQfE9X5gmGCpAPil+tniTgz1RFmAU011lEV9c9CGd5Q1qy5XUQcGvuCI9CrYo0kdiKob2pz7PAbZKgPAXUClCOfkC5d1bazw6GuiO9LYYkyJ2V03FpaZe+GDhgjF3TeORLtW+29QzYAR2IJy8N49J0UU241yTZtYYVVgFRdxK+0AaCh37EQje5xigYKiAYuhl4BxmBNR63EvDXkFMUxyd8njiVZ7KleCXwMtL6kTs4PQulO2l0z4yUFqZV71qxnBe8L+E78ry0DjXOegXcB1AOlREMLUB6KLyPNFAPRTqzXUty15efE/D/NqdjAtKEGcUTq8apdW7LUIXJGHsZsMe09QrkHcx9SFf7Dofj+RhauElsqBu/6od76w/gFSGZ4wOU/Xcsu3PwlO4LL9xcNwK1+b1o4Xg+tbdvb2WJenDx9LFiPi94Z+Kr+Z48/jSb7T2QzmI3p00Y/IyAP7OINtlGjKjnecrNQC9Ds9bHFklmaK+Ofj9mHvLbNcfEpxhAES5VTi+lr7rndtTqXbglQD14PlDqdg0t+HDsEbf0f4RoeaxWRSRS4fTvVucVi4VrmHn1eeL7/Ml7jwLlGURNt3ac2L5FwJ/uF7o6HjGMdTzffcigLs2QytBeB1wHYNq6CrgpjwVZxO9WD1duOX+Dy8LSh1Gi25moh0jp1HsvWBz4/ZundVVxuFtb3oIe09a7VbulM/Z74unyNb7d15wn5lPuvYbq3I0If5X0QwTVIN1U/5iBo/jguN+9yfyt6tf8pwuejDf5wprB43eG1WHA+PhKaWmeDM3K1EicEWaM3yyno6i7HyJDJVfdAnyH9wN8edwWT0YfSkhrNfDko/akfm5EmQu7+nON2APcQ7DiQRDXAtOQX7TsH1d9P9Lx+lVgfivhh1Lhl8gw8LXRMa4i89BE5UhjQy14ArergpCdr/OKXwD+ZmjWgfhKx83F53iYtv55D+X5WdprPRMWCIZUpJDUHzmbKoBtHXE5uSPwwppBw3aEh28VeAMMzWphK87v23btwwSBW5U0N+B3kKFid+Sa0ExwIDLwXuSXLxM6E3Q6xs55Y6xy14S1SQ0Spq13QfoCf5eWYe+OC/z6jfPPPup1vU3BSSovdArGPmZf1MVFnS/wJtd6+KIK/ERwaApDd2fUEe+4Q51XvFjBWRJ150mIvGesaetne/CuwNsM/BB5Qy1ZlJiGW+GLOvKDgDkej9vBG0ArH77Ia+HJtPUewCfAMkOzPpdrenKNqP34KHCLoVlzU5XNbw8KeSmq4ARTG7EY+H1rTIX8X4ob/WQ/7TBt/SHgwtYCUDcg32dsGBDRz4p+amHa+mTgQdrgw/WpHrDOANPWz0aGDDYMzVqUbr0TjM1jmLbeGxn/4x5Ds9pys+8EY/MVUUXLQWChoVnpfC+3GToBY/P6RNYhMG29K9K6tMzQrOmZtJHfjFUiINyGoMufCkQ/tboHWGBo1sRM28lvxiL2eqW7j4kNOB9g2vqNyNsFzxiadU172srrc6z67pSJXtfKotmPjJqHGn62zLh1Za5p6iiYtv5LoAy4qZWwCWkhbzew2bOfeEzUdf82TgFel0OguOCJL5WV3TU/17RlE6atdwf+AUwARhua9U422s1Lxs6ePecLyLgPiTC8rOyuLW1pL19h2vqjwI3IIC43Z9Nwka9L8bQUeZNJ4hdj2vpQ4KChWbkPPpYCpq1PRH59owtwo6FZi7P9jHwVnranyNuWIm8ycNi09Qdz3YFEMG19oGnry5DXRhYZmtW/I5gK+bsUDwB2Jch6DzinrOyuVB4UN9EUg/BJ4DeGZlWQQ5i2riO9Oi4HVgC3GZr1cUc+My8ZCzB79pxzkB+fn4w0BswD7ikru6synfqmrV8HBJAe/i4y4ujvU3kdZBPRT8HciYyIXo2MsFZuaNaq9rSbLvKWsQ2YPXvOKUBtWdld+zKpb9r6qcAtyIDafuSsfx74P0OzNmeTVtPWJyHlg4nImIYfIl+mXx/rcct7xmYT0RhOX0HeTuuJ9NfdhLyAtRbJiI+Bw8m0XaatFyLDAJ0GnA5cgLwcfgoyGvhOZHi9OYZmZeqX3G58qhgbC9PWhwGXIJf6M5De+keRzt21SN+pemQQZEHTV7l6IKXZhvB7u5AfbVyGdAfNC8eATy1jG2Da+hnIuP+jkcztQtMdTA+5PwuaBwmNIBm/C+nxvzbXAtoJnMAJdGb8P4v3CXogjnvuAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE3LTA1LTI2VDAxOjM3OjU2LTA0OjAwciT+/wAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxNy0wNS0yNlQwMTozNzo1Ni0wNDowMAN5RkMAAAAZdEVYdFNvZnR3YXJlAEFkb2JlIEltYWdlUmVhZHlxyWU8AAAAAElFTkSuQmCC',
            },
            /**/
            'toksik_megakolon': {
                title: "Toksik Megakolon",
                section: ['BatinUS', 'BatinPelvisBT', 'BatinPelvisMR', 'MREnterografi', 'MREnteroklizis'],
                //data: 'data:image/png;base64,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',
            },
            /**/
            'kisa_bagirsak': {
                title: "Kısa Bağırsak",
                section: ['Enteroklizis', 'BatinPelvisBT', 'BatinPelvisMR', 'MREnterografi', 'MREnteroklizis'],
                //data: 'data:image/png;base64,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',
            },
            /**/
            'gi_traktus_disi_kitle': {
                title: "GI Traktüs Dışı Kitle",
                section: ['BatinUS', 'Enteroklizis', 'BatinPelvisBT', 'BatinPelvisMR', 'MREnterografi'],
                //data: 'data:image/png;base64,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',
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
                //data: 'data:image/png;base64,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',
            },
            /**/
            'subkutan_apse': {
                title: "Subkutan Apse",
                section: ['On', 'BatinUS', 'BatinPelvisBT', 'BatinPelvisMR', 'PerianalMR', 'PerianalUS'],
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
                //data: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHYAAABhCAYAAAADdFUyAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QA/wD/AP+gvaeTAAAAB3RJTUUH4QUaASU4J7tYQgAAFSxJREFUeNrtnXmcFNW1x7+3qmdhm6FZlU1Q4vqACAhS6isBifoSjTTiFkOMUXFJMomF8WlMNKuJpjQkErfwniSRxAFbE5O8IAEpwBIEFBMEF0CQfXF6GJhhZrqr6v1xe2Z6erp7enp66B7k9/nM5zN9tzr3nrr3nnvOuafgBE7gBDoPRK4JSBemrU8Cboz+fMLQrLdyTVM+w5drAtqA84GvRv9fBpxgbAoouSagDaiI+d/NNTH5js7E2OqY/7vkmph8R2dairfG/D8WeBbAtPVvAZ8HhgBbgPmGZv0h18TmGp1JeCoEagA1mvQUcB4wJkHxZw3Nui3NdrtF2/kPYBQwAOgNdAUKYsbIAeqRK8dOYA+wDnjT0KwPcj0+8eg0jAUwbf2bwOw0i99taNbjCdpQgGuBK4DPAv2AMHAY2I1k2G4gBFRG8wC6AT2BXsAwoC/QB+iOZPhHwGLgFUOz3s71WHUqxgKYtn4d8AzQo5Winxia1Sdapxj4GjAZGA0UA5uAlcA/kLMuTAYwbX0IcsZfAvwn8kXZDywBFhiatSIX49TpGAuNg7kaOKmVoo8gGdkPuUe/Aaw1NGtpB9LWF8ngicDZwEDgdeCHhmZtO1Zj1CkZC2Da+izg0TSKzgV+kyuFhmnrVwL/DZwLLAdmGJq1r6Of25kZezvwZCvFvm5o1pxc0xqldzTwMKAD84AyQ7NqO+p5nekcG4/RaZSpzDWRDTA06y1Dsy4FrkLu9TtMW7+lo57XKWdsVLLdh5RKk8EFhhiatSvX9Cbpw6XALwA/EDA0681stt9ZZ+xNpGYqwMZ8ZSqAoVmLDM0aAfwNWG3a+rez2X6nY6xp6xOQb3pr6BRGAkOzZgKTgMdMW385W+3m3VJs2noB8EWkFugAUsvjAScj96ZAmk2NNDTr37nuTxv6fQpgI7Vrlxiatb097eUjY99EHvjbg+8YmpXOUSjvYNr6XOBm4ExDs97PtJ28Yqxp66OA9cD7gIl8eyfTZIdNBy8amnV1rvvSznH4CXA/7Vh18o2xLwBXGZpVFJc+HpgPnNpKE69GjxSdHqatPwZ8GxhhaNaGttbPN+HpYuQhvhkMzVoNnAXch1S0743JrkR6VMw6Xpga7fPdSIPHv01bH9DW+vk2YzcC3zI069VWyvmA05AmvO2GZlWn035nRMzMLWyLoSLfDO1VpOEdYWhWBLkPH/cwNOtu09YvBnbQutGjEfm2FHtI4/YJxMDQrNFAf9PWg+nWyTfGdss1AXmMQcBU09YvT6dw3jDWtPVrgBFIm+kJxCGqHr0S+HtUxkiJrAtPUYvFRUgfIa+V4g35w5BqtZ8ZmnVfRg8OhsbRUtV4GwH/e9nuYxq03A9cHtO/Q8DVBPx17W3atPUdwDZDsy5KVS5rwlNUJfYW0lqxGekrlM6LU4i01Ew1NOvldpAwEPlCxaJ3tvrXRvwncGFcmppJQwkwGthv2voXDM36a7JCWWGsaesnIV0/FwBfMTSrPmtDFKwYBGIUsIaAf3+KkjUJ0to9QzJEvIdEBa2vXmnB0KwDpq3fC/yRFH5f2dpjHwYcQ7OuzzJTrwSxDfgrsJVgaELW2j62cMkSYwEMzXoE2G7a+k3JymSLsaOBf3bAgDxE0xLWDbxnkhd100zLCbLK2CgeJ4XPV7YY+2/kpaksQ0TifvdMWtQtBeHEFHVk2vGL/wX6mLZ+Q6LMbDH2m0CvqBI/e3BKYwQODyKlSadgoTji4sYcg91uFIkjEY5TGJrlAg8gGdwCWTvuRC0wq5CCwnogQgYvjoPKYN/moq3hsx/57t4X7wNFQ9SCVwBe0ZZ7+8+4eUzx8h9sqz8zoggHges7o2j92z8+8NSyVVXX/xlfpWwo0rN+Qsn8qx7oe8eN79V9dr+HYszSlh2btTkYmgfMiEnZBwwh4M+e/NE07h4w3dCshbHpWVNQRC0wRcjLUkVInW9BW/9UnILDbs/CsFesIOrngvIiUA4sBPdXtW53pcbtXqSKSEOdQprfsYlFxEP4PJQZgGPaensN+JnCpeM2/JeAH8cn5pV1pz0ofLFySj1FryKirrpeMYXUf7Z+Wuk7AI/Yk8pVnOkeyoBZ2mt7OpSYljN2D3LGZn1rMG19JLAOT/Q1LlhW2ZCeNyrF9qLe666gxFjvlGrq3ZJGg8J3tKXXeIjNPurLc01rNmFo1r+A1Qhvamz6ccNYlErwYmUtFXwVzYoUiPplpxZuvLBtDWcFHtk/7sRiJdJJoRH5Zo9tjpf2F+EVNL18IuwxtV+SaxGFSC1mzLvqNdfi9Vb3/taquWoFC58ei6dORK0cAUp/5Fm5BtiIVIuuJODfncWeOMTvscHQaUh98vnIK5kqcARpZ14DBAn4092XFwHfj03Ib8Y6pX9HqR4jRQEPnB7bkHdaE5Tt4aFWxY2f1yhDdHl5R8l39+0etL1uzIXgzsNXCV6LBeuKhooEQ38AFhLw/yULPSkg4JczNhiahnR4/0IrdXZF9+rfEvB/1ErZVcBgc+15Zxlj12yCNBhr2npPZBiAjl5OAHBROatwnVhSc9WOx/crpXiFpYgwoIJb3OuGpQ+UXF/yxJBNdfIie0/1gPD79h+6f+8K9cOjF4Fa2bw5gGDluUcjJa9uDw/qg1IDoi4RU2MhgC8DXyYYWgNcR8C/lcyxU9IR+hXwjTTrDER6KhoEQ5cR8C9LVtDQrKOmrRfhqVOR935TM9a09fnA9cgzabasEymh4LAzfKoY4vvoVtRD63BLx0BYnmN9tW+OLFoz5YAzYKEiHE/gEXL6ir6+3UuGFm6Y82H1Rc2pDPjXEQydC95bKIdiMtp0GDgPeJtgaAoBf6b3awoJhpYgTZNtRRHwGsHQxQT8Vopym3CVRl16Usaatr4dGY/hCuDdaNkOPR55CDwEgws2i8U103bjlN6AEjXQiDBESk5/p27coi8Vv3HGwcjJeAh6qftEGF/V1voRo+JEwUqCoe8h9c2JEAHeRF6IDkf7eiGJvThKgNUEQxNTzZwUGJkkfStSmVOBNHeeA5yZpOxSgqF+BPyfJMlfh7xBIYcrUQnT1uchL+jm9py7sH41ypFxjXus23UrVxeflrDsAu9zqFWLYvbYMIn9p9YgQx28QsDf3LwWDPVEeilcASRzOj+fgH91SrpbnmPjMR8oJ+D/c4K6Y4A7kbcB4vEKAf+ViRo0bf2LKJGn8ZSTjQkrvGQzdgYws618yDrUqkiTZCtATaH7VatEnBYzjqkeIB4i4P9B0jYC/krgd8DvCIa+AjyXoNRLyNmdKW4k4H8+BQ3rgK8RDG0BfhKXewXBkJ+AP5Sg5jt4ig9f/TBgayoJ4kg7iM8OPJH6dzM4JD6WR2U+x39HSqbGI+CfB0xNkHMywVCmL/1zKZna/Pk/BRLtqTckqbEbqMcTp0FyBcVG4EcZEp89eF2UJkHcA68w+YsY8dNSaHcBH4T9S5kunmrz8wP+l0ksxf6CYKit21QlAX9b7iAB3JEg7b8SFYw6OISRtxKTMvZSYJhp6yujvky5gVfgNq2oCjjdkx7YBxX9C5ySuNQCcHrs4VoxOWMaAv4ngPgoM92R3vltwfcyePYmpIAXi/EEQ8m20BpkhJzEUrGhWTuj90VeA7aZtl6NlGA6XJjyEJQoFaLW6/b1b+49tBG3VEMcAa8Q1Np3H7Evmdpf/fgPB5yBQuAS9grEOcVrlv/qk9ef2lk7svlxx+nB8C4r7/nZ2v4/OuT0mfWJ099TaTTGu8jSHwE/NzRrXgqyfk3Lo8pM4LE2dC1TRcdSYFzM795IH+NtCcrWEfWDSnrcMTRrL3CWaesXAJ8hPXfSdsP1VHqr+3xra/XXcXoEEFETpgiDUzLw/boR607vsf7OfZHBjhDQTTms1ntFu3aGhxe1eO1cqk8u2PyXAiKhg5GTZvpEJHbGO8iwepcBz5m2fquhWcn0yK8gXUhjXTJOJxgaRMC/M41uVQMHMxySqgRpvUjM2IaXtXXNk6FZryMDUB1jlMOCP/aTFhuB5EOk39yJj388F+bJwGcxWDDlc/ji5D01vGTFpV89vAL+3qJ8E+aatj4IGcXlKUOzbm9RIuB3CIYWAdfE5YyhQauUGkejHcgEiVbJVo03+W3d8VXWN/VLgK8quQeCUitkSMPYtMNphbszNGsnchbMNG092axdlSDtM2n2RJD5WCdibDJZowD5EuU5Y+P1uan0u6JGtOyOkrZB3dCsEPAhYCQpkqitXrkeojh0QQb3zHPGtgkJu9JWd5RtwNAkeYnayrfxK0YGZMk7wtoBN9HlZ38bG/EjhaRE6Jkg7XCue90A09b9QAHC2wb5zljhpP4dC7fn1gT557bxiWOAJ5LkjUiQti2HoxOPsxGewFU3QL4z1umuNDthuV2T03u1ugun9OM45l6W7qNMW38J2BrvxhmDKQnS1ud6iGIwEuEeNcbbRyFND4poUK1j4JMrcBGcUfi2d+XYSldqnnzIk4IAp4sL8Oe1vZQP6kcJgALCnFq4gSvHVjp4Yilu15sQUVOfVzyIF6snMK3bG8+tPqvooNM/LKIKZ0OznGiA6ouQd4/GeIjElqNgaCRwRlzqQQL+dzt+TNLGGKL7K6S2xw4BfoqM1uJyTGa3hwD2Rk5RZr9xzkNleyu34JZENU8FoNZt/unrl0+qdLY+KqLW2wg+ttSPUF5c+8Hihw++9NraqqtvwlfX2B6ezzCWz7ivp/q3eZ84/Yo9hCfwGhytBTIm4z4H32e+oy1J5iWRSGebnjL/2GEcwrMbfiRkrGnrZyJdLJYjxf8KjlFsCBeVfr6dyj+rAx/hlH4D5ajMEGGIdB24vvb8t84pXT1zX2SQp4pII3M9j7rhBRtDa2VhwEPeIOgx7emDP/+guE/dVaO6LB8S9oq8CqcfYa9YdVFqBN67hmYl16gFQ8OBRB+O+DH5hT4Ir9G+m2zGLgbeMTRLzx2dz8LCOT2k0kEBXFDqepRPfrCyHNYm1iQ9COXffwq8qPZIgFrFkchJ9/1k358eZrqQfE9X5gmGCpAPil+tniTgz1RFmAU011lEV9c9CGd5Q1qy5XUQcGvuCI9CrYo0kdiKob2pz7PAbZKgPAXUClCOfkC5d1bazw6GuiO9LYYkyJ2V03FpaZe+GDhgjF3TeORLtW+29QzYAR2IJy8N49J0UU241yTZtYYVVgFRdxK+0AaCh37EQje5xigYKiAYuhl4BxmBNR63EvDXkFMUxyd8njiVZ7KleCXwMtL6kTs4PQulO2l0z4yUFqZV71qxnBe8L+E78ry0DjXOegXcB1AOlREMLUB6KLyPNFAPRTqzXUty15efE/D/NqdjAtKEGcUTq8apdW7LUIXJGHsZsMe09QrkHcx9SFf7Dofj+RhauElsqBu/6od76w/gFSGZ4wOU/Xcsu3PwlO4LL9xcNwK1+b1o4Xg+tbdvb2WJenDx9LFiPi94Z+Kr+Z48/jSb7T2QzmI3p00Y/IyAP7OINtlGjKjnecrNQC9Ds9bHFklmaK+Ofj9mHvLbNcfEpxhAES5VTi+lr7rndtTqXbglQD14PlDqdg0t+HDsEbf0f4RoeaxWRSRS4fTvVucVi4VrmHn1eeL7/Ml7jwLlGURNt3ac2L5FwJ/uF7o6HjGMdTzffcigLs2QytBeB1wHYNq6CrgpjwVZxO9WD1duOX+Dy8LSh1Gi25moh0jp1HsvWBz4/ZundVVxuFtb3oIe09a7VbulM/Z74unyNb7d15wn5lPuvYbq3I0If5X0QwTVIN1U/5iBo/jguN+9yfyt6tf8pwuejDf5wprB43eG1WHA+PhKaWmeDM3K1EicEWaM3yyno6i7HyJDJVfdAnyH9wN8edwWT0YfSkhrNfDko/akfm5EmQu7+nON2APcQ7DiQRDXAtOQX7TsH1d9P9Lx+lVgfivhh1Lhl8gw8LXRMa4i89BE5UhjQy14ArergpCdr/OKXwD+ZmjWgfhKx83F53iYtv55D+X5WdprPRMWCIZUpJDUHzmbKoBtHXE5uSPwwppBw3aEh28VeAMMzWphK87v23btwwSBW5U0N+B3kKFid+Sa0ExwIDLwXuSXLxM6E3Q6xs55Y6xy14S1SQ0Spq13QfoCf5eWYe+OC/z6jfPPPup1vU3BSSovdArGPmZf1MVFnS/wJtd6+KIK/ERwaApDd2fUEe+4Q51XvFjBWRJ150mIvGesaetne/CuwNsM/BB5Qy1ZlJiGW+GLOvKDgDkej9vBG0ArH77Ia+HJtPUewCfAMkOzPpdrenKNqP34KHCLoVlzU5XNbw8KeSmq4ARTG7EY+H1rTIX8X4ob/WQ/7TBt/SHgwtYCUDcg32dsGBDRz4p+amHa+mTgQdrgw/WpHrDOANPWz0aGDDYMzVqUbr0TjM1jmLbeGxn/4x5Ds9pys+8EY/MVUUXLQWChoVnpfC+3GToBY/P6RNYhMG29K9K6tMzQrOmZtJHfjFUiINyGoMufCkQ/tboHWGBo1sRM28lvxiL2eqW7j4kNOB9g2vqNyNsFzxiadU172srrc6z67pSJXtfKotmPjJqHGn62zLh1Za5p6iiYtv5LoAy4qZWwCWkhbzew2bOfeEzUdf82TgFel0OguOCJL5WV3TU/17RlE6atdwf+AUwARhua9U422s1Lxs6ePecLyLgPiTC8rOyuLW1pL19h2vqjwI3IIC43Z9Nwka9L8bQUeZNJ4hdj2vpQ4KChWbkPPpYCpq1PRH59owtwo6FZi7P9jHwVnranyNuWIm8ycNi09Qdz3YFEMG19oGnry5DXRhYZmtW/I5gK+bsUDwB2Jch6DzinrOyuVB4UN9EUg/BJ4DeGZlWQQ5i2riO9Oi4HVgC3GZr1cUc+My8ZCzB79pxzkB+fn4w0BswD7ikru6synfqmrV8HBJAe/i4y4ujvU3kdZBPRT8HciYyIXo2MsFZuaNaq9rSbLvKWsQ2YPXvOKUBtWdld+zKpb9r6qcAtyIDafuSsfx74P0OzNmeTVtPWJyHlg4nImIYfIl+mXx/rcct7xmYT0RhOX0HeTuuJ9NfdhLyAtRbJiI+Bw8m0XaatFyLDAJ0GnA5cgLwcfgoyGvhOZHi9OYZmZeqX3G58qhgbC9PWhwGXIJf6M5De+keRzt21SN+pemQQZEHTV7l6IKXZhvB7u5AfbVyGdAfNC8eATy1jG2Da+hnIuP+jkcztQtMdTA+5PwuaBwmNIBm/C+nxvzbXAtoJnMAJdGb8P4v3CXogjnvuAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE3LTA1LTI2VDAxOjM3OjU2LTA0OjAwciT+/wAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxNy0wNS0yNlQwMTozNzo1Ni0wNDowMAN5RkMAAAAZdEVYdFNvZnR3YXJlAEFkb2JlIEltYWdlUmVhZHlxyWU8AAAAAElFTkSuQmCC',
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
                //data: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHYAAABhCAYAAAADdFUyAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QA/wD/AP+gvaeTAAAAB3RJTUUH4QUaASU4J7tYQgAAFSxJREFUeNrtnXmcFNW1x7+3qmdhm6FZlU1Q4vqACAhS6isBifoSjTTiFkOMUXFJMomF8WlMNKuJpjQkErfwniSRxAFbE5O8IAEpwBIEFBMEF0CQfXF6GJhhZrqr6v1xe2Z6erp7enp66B7k9/nM5zN9tzr3nrr3nnvOuafgBE7gBDoPRK4JSBemrU8Cboz+fMLQrLdyTVM+w5drAtqA84GvRv9fBpxgbAoouSagDaiI+d/NNTH5js7E2OqY/7vkmph8R2dairfG/D8WeBbAtPVvAZ8HhgBbgPmGZv0h18TmGp1JeCoEagA1mvQUcB4wJkHxZw3Nui3NdrtF2/kPYBQwAOgNdAUKYsbIAeqRK8dOYA+wDnjT0KwPcj0+8eg0jAUwbf2bwOw0i99taNbjCdpQgGuBK4DPAv2AMHAY2I1k2G4gBFRG8wC6AT2BXsAwoC/QB+iOZPhHwGLgFUOz3s71WHUqxgKYtn4d8AzQo5Winxia1Sdapxj4GjAZGA0UA5uAlcA/kLMuTAYwbX0IcsZfAvwn8kXZDywBFhiatSIX49TpGAuNg7kaOKmVoo8gGdkPuUe/Aaw1NGtpB9LWF8ngicDZwEDgdeCHhmZtO1Zj1CkZC2Da+izg0TSKzgV+kyuFhmnrVwL/DZwLLAdmGJq1r6Of25kZezvwZCvFvm5o1pxc0xqldzTwMKAD84AyQ7NqO+p5nekcG4/RaZSpzDWRDTA06y1Dsy4FrkLu9TtMW7+lo57XKWdsVLLdh5RKk8EFhhiatSvX9Cbpw6XALwA/EDA0681stt9ZZ+xNpGYqwMZ8ZSqAoVmLDM0aAfwNWG3a+rez2X6nY6xp6xOQb3pr6BRGAkOzZgKTgMdMW385W+3m3VJs2noB8EWkFugAUsvjAScj96ZAmk2NNDTr37nuTxv6fQpgI7Vrlxiatb097eUjY99EHvjbg+8YmpXOUSjvYNr6XOBm4ExDs97PtJ28Yqxp66OA9cD7gIl8eyfTZIdNBy8amnV1rvvSznH4CXA/7Vh18o2xLwBXGZpVFJc+HpgPnNpKE69GjxSdHqatPwZ8GxhhaNaGttbPN+HpYuQhvhkMzVoNnAXch1S0743JrkR6VMw6Xpga7fPdSIPHv01bH9DW+vk2YzcC3zI069VWyvmA05AmvO2GZlWn035nRMzMLWyLoSLfDO1VpOEdYWhWBLkPH/cwNOtu09YvBnbQutGjEfm2FHtI4/YJxMDQrNFAf9PWg+nWyTfGdss1AXmMQcBU09YvT6dw3jDWtPVrgBFIm+kJxCGqHr0S+HtUxkiJrAtPUYvFRUgfIa+V4g35w5BqtZ8ZmnVfRg8OhsbRUtV4GwH/e9nuYxq03A9cHtO/Q8DVBPx17W3atPUdwDZDsy5KVS5rwlNUJfYW0lqxGekrlM6LU4i01Ew1NOvldpAwEPlCxaJ3tvrXRvwncGFcmppJQwkwGthv2voXDM36a7JCWWGsaesnIV0/FwBfMTSrPmtDFKwYBGIUsIaAf3+KkjUJ0to9QzJEvIdEBa2vXmnB0KwDpq3fC/yRFH5f2dpjHwYcQ7OuzzJTrwSxDfgrsJVgaELW2j62cMkSYwEMzXoE2G7a+k3JymSLsaOBf3bAgDxE0xLWDbxnkhd100zLCbLK2CgeJ4XPV7YY+2/kpaksQ0TifvdMWtQtBeHEFHVk2vGL/wX6mLZ+Q6LMbDH2m0CvqBI/e3BKYwQODyKlSadgoTji4sYcg91uFIkjEY5TGJrlAg8gGdwCWTvuRC0wq5CCwnogQgYvjoPKYN/moq3hsx/57t4X7wNFQ9SCVwBe0ZZ7+8+4eUzx8h9sqz8zoggHges7o2j92z8+8NSyVVXX/xlfpWwo0rN+Qsn8qx7oe8eN79V9dr+HYszSlh2btTkYmgfMiEnZBwwh4M+e/NE07h4w3dCshbHpWVNQRC0wRcjLUkVInW9BW/9UnILDbs/CsFesIOrngvIiUA4sBPdXtW53pcbtXqSKSEOdQprfsYlFxEP4PJQZgGPaensN+JnCpeM2/JeAH8cn5pV1pz0ofLFySj1FryKirrpeMYXUf7Z+Wuk7AI/Yk8pVnOkeyoBZ2mt7OpSYljN2D3LGZn1rMG19JLAOT/Q1LlhW2ZCeNyrF9qLe666gxFjvlGrq3ZJGg8J3tKXXeIjNPurLc01rNmFo1r+A1Qhvamz6ccNYlErwYmUtFXwVzYoUiPplpxZuvLBtDWcFHtk/7sRiJdJJoRH5Zo9tjpf2F+EVNL18IuwxtV+SaxGFSC1mzLvqNdfi9Vb3/taquWoFC58ei6dORK0cAUp/5Fm5BtiIVIuuJODfncWeOMTvscHQaUh98vnIK5kqcARpZ14DBAn4092XFwHfj03Ib8Y6pX9HqR4jRQEPnB7bkHdaE5Tt4aFWxY2f1yhDdHl5R8l39+0etL1uzIXgzsNXCV6LBeuKhooEQ38AFhLw/yULPSkg4JczNhiahnR4/0IrdXZF9+rfEvB/1ErZVcBgc+15Zxlj12yCNBhr2npPZBiAjl5OAHBROatwnVhSc9WOx/crpXiFpYgwoIJb3OuGpQ+UXF/yxJBNdfIie0/1gPD79h+6f+8K9cOjF4Fa2bw5gGDluUcjJa9uDw/qg1IDoi4RU2MhgC8DXyYYWgNcR8C/lcyxU9IR+hXwjTTrDER6KhoEQ5cR8C9LVtDQrKOmrRfhqVOR935TM9a09fnA9cgzabasEymh4LAzfKoY4vvoVtRD63BLx0BYnmN9tW+OLFoz5YAzYKEiHE/gEXL6ir6+3UuGFm6Y82H1Rc2pDPjXEQydC95bKIdiMtp0GDgPeJtgaAoBf6b3awoJhpYgTZNtRRHwGsHQxQT8Vopym3CVRl16Usaatr4dGY/hCuDdaNkOPR55CDwEgws2i8U103bjlN6AEjXQiDBESk5/p27coi8Vv3HGwcjJeAh6qftEGF/V1voRo+JEwUqCoe8h9c2JEAHeRF6IDkf7eiGJvThKgNUEQxNTzZwUGJkkfStSmVOBNHeeA5yZpOxSgqF+BPyfJMlfh7xBIYcrUQnT1uchL+jm9py7sH41ypFxjXus23UrVxeflrDsAu9zqFWLYvbYMIn9p9YgQx28QsDf3LwWDPVEeilcASRzOj+fgH91SrpbnmPjMR8oJ+D/c4K6Y4A7kbcB4vEKAf+ViRo0bf2LKJGn8ZSTjQkrvGQzdgYws618yDrUqkiTZCtATaH7VatEnBYzjqkeIB4i4P9B0jYC/krgd8DvCIa+AjyXoNRLyNmdKW4k4H8+BQ3rgK8RDG0BfhKXewXBkJ+AP5Sg5jt4ig9f/TBgayoJ4kg7iM8OPJH6dzM4JD6WR2U+x39HSqbGI+CfB0xNkHMywVCmL/1zKZna/Pk/BRLtqTckqbEbqMcTp0FyBcVG4EcZEp89eF2UJkHcA68w+YsY8dNSaHcBH4T9S5kunmrz8wP+l0ksxf6CYKit21QlAX9b7iAB3JEg7b8SFYw6OISRtxKTMvZSYJhp6yujvky5gVfgNq2oCjjdkx7YBxX9C5ySuNQCcHrs4VoxOWMaAv4ngPgoM92R3vltwfcyePYmpIAXi/EEQ8m20BpkhJzEUrGhWTuj90VeA7aZtl6NlGA6XJjyEJQoFaLW6/b1b+49tBG3VEMcAa8Q1Np3H7Evmdpf/fgPB5yBQuAS9grEOcVrlv/qk9ef2lk7svlxx+nB8C4r7/nZ2v4/OuT0mfWJ099TaTTGu8jSHwE/NzRrXgqyfk3Lo8pM4LE2dC1TRcdSYFzM795IH+NtCcrWEfWDSnrcMTRrL3CWaesXAJ8hPXfSdsP1VHqr+3xra/XXcXoEEFETpgiDUzLw/boR607vsf7OfZHBjhDQTTms1ntFu3aGhxe1eO1cqk8u2PyXAiKhg5GTZvpEJHbGO8iwepcBz5m2fquhWcn0yK8gXUhjXTJOJxgaRMC/M41uVQMHMxySqgRpvUjM2IaXtXXNk6FZryMDUB1jlMOCP/aTFhuB5EOk39yJj388F+bJwGcxWDDlc/ji5D01vGTFpV89vAL+3qJ8E+aatj4IGcXlKUOzbm9RIuB3CIYWAdfE5YyhQauUGkejHcgEiVbJVo03+W3d8VXWN/VLgK8quQeCUitkSMPYtMNphbszNGsnchbMNG092axdlSDtM2n2RJD5WCdibDJZowD5EuU5Y+P1uan0u6JGtOyOkrZB3dCsEPAhYCQpkqitXrkeojh0QQb3zHPGtgkJu9JWd5RtwNAkeYnayrfxK0YGZMk7wtoBN9HlZ38bG/EjhaRE6Jkg7XCue90A09b9QAHC2wb5zljhpP4dC7fn1gT557bxiWOAJ5LkjUiQti2HoxOPsxGewFU3QL4z1umuNDthuV2T03u1ugun9OM45l6W7qNMW38J2BrvxhmDKQnS1ud6iGIwEuEeNcbbRyFND4poUK1j4JMrcBGcUfi2d+XYSldqnnzIk4IAp4sL8Oe1vZQP6kcJgALCnFq4gSvHVjp4Yilu15sQUVOfVzyIF6snMK3bG8+tPqvooNM/LKIKZ0OznGiA6ouQd4/GeIjElqNgaCRwRlzqQQL+dzt+TNLGGKL7K6S2xw4BfoqM1uJyTGa3hwD2Rk5RZr9xzkNleyu34JZENU8FoNZt/unrl0+qdLY+KqLW2wg+ttSPUF5c+8Hihw++9NraqqtvwlfX2B6ezzCWz7ivp/q3eZ84/Yo9hCfwGhytBTIm4z4H32e+oy1J5iWRSGebnjL/2GEcwrMbfiRkrGnrZyJdLJYjxf8KjlFsCBeVfr6dyj+rAx/hlH4D5ajMEGGIdB24vvb8t84pXT1zX2SQp4pII3M9j7rhBRtDa2VhwEPeIOgx7emDP/+guE/dVaO6LB8S9oq8CqcfYa9YdVFqBN67hmYl16gFQ8OBRB+O+DH5hT4Ir9G+m2zGLgbeMTRLzx2dz8LCOT2k0kEBXFDqepRPfrCyHNYm1iQ9COXffwq8qPZIgFrFkchJ9/1k358eZrqQfE9X5gmGCpAPil+tniTgz1RFmAU011lEV9c9CGd5Q1qy5XUQcGvuCI9CrYo0kdiKob2pz7PAbZKgPAXUClCOfkC5d1bazw6GuiO9LYYkyJ2V03FpaZe+GDhgjF3TeORLtW+29QzYAR2IJy8N49J0UU241yTZtYYVVgFRdxK+0AaCh37EQje5xigYKiAYuhl4BxmBNR63EvDXkFMUxyd8njiVZ7KleCXwMtL6kTs4PQulO2l0z4yUFqZV71qxnBe8L+E78ry0DjXOegXcB1AOlREMLUB6KLyPNFAPRTqzXUty15efE/D/NqdjAtKEGcUTq8apdW7LUIXJGHsZsMe09QrkHcx9SFf7Dofj+RhauElsqBu/6od76w/gFSGZ4wOU/Xcsu3PwlO4LL9xcNwK1+b1o4Xg+tbdvb2WJenDx9LFiPi94Z+Kr+Z48/jSb7T2QzmI3p00Y/IyAP7OINtlGjKjnecrNQC9Ds9bHFklmaK+Ofj9mHvLbNcfEpxhAES5VTi+lr7rndtTqXbglQD14PlDqdg0t+HDsEbf0f4RoeaxWRSRS4fTvVucVi4VrmHn1eeL7/Ml7jwLlGURNt3ac2L5FwJ/uF7o6HjGMdTzffcigLs2QytBeB1wHYNq6CrgpjwVZxO9WD1duOX+Dy8LSh1Gi25moh0jp1HsvWBz4/ZundVVxuFtb3oIe09a7VbulM/Z74unyNb7d15wn5lPuvYbq3I0If5X0QwTVIN1U/5iBo/jguN+9yfyt6tf8pwuejDf5wprB43eG1WHA+PhKaWmeDM3K1EicEWaM3yyno6i7HyJDJVfdAnyH9wN8edwWT0YfSkhrNfDko/akfm5EmQu7+nON2APcQ7DiQRDXAtOQX7TsH1d9P9Lx+lVgfivhh1Lhl8gw8LXRMa4i89BE5UhjQy14ArergpCdr/OKXwD+ZmjWgfhKx83F53iYtv55D+X5WdprPRMWCIZUpJDUHzmbKoBtHXE5uSPwwppBw3aEh28VeAMMzWphK87v23btwwSBW5U0N+B3kKFid+Sa0ExwIDLwXuSXLxM6E3Q6xs55Y6xy14S1SQ0Spq13QfoCf5eWYe+OC/z6jfPPPup1vU3BSSovdArGPmZf1MVFnS/wJtd6+KIK/ERwaApDd2fUEe+4Q51XvFjBWRJ150mIvGesaetne/CuwNsM/BB5Qy1ZlJiGW+GLOvKDgDkej9vBG0ArH77Ia+HJtPUewCfAMkOzPpdrenKNqP34KHCLoVlzU5XNbw8KeSmq4ARTG7EY+H1rTIX8X4ob/WQ/7TBt/SHgwtYCUDcg32dsGBDRz4p+amHa+mTgQdrgw/WpHrDOANPWz0aGDDYMzVqUbr0TjM1jmLbeGxn/4x5Ds9pys+8EY/MVUUXLQWChoVnpfC+3GToBY/P6RNYhMG29K9K6tMzQrOmZtJHfjFUiINyGoMufCkQ/tboHWGBo1sRM28lvxiL2eqW7j4kNOB9g2vqNyNsFzxiadU172srrc6z67pSJXtfKotmPjJqHGn62zLh1Za5p6iiYtv5LoAy4qZWwCWkhbzew2bOfeEzUdf82TgFel0OguOCJL5WV3TU/17RlE6atdwf+AUwARhua9U422s1Lxs6ePecLyLgPiTC8rOyuLW1pL19h2vqjwI3IIC43Z9Nwka9L8bQUeZNJ4hdj2vpQ4KChWbkPPpYCpq1PRH59owtwo6FZi7P9jHwVnranyNuWIm8ycNi09Qdz3YFEMG19oGnry5DXRhYZmtW/I5gK+bsUDwB2Jch6DzinrOyuVB4UN9EUg/BJ4DeGZlWQQ5i2riO9Oi4HVgC3GZr1cUc+My8ZCzB79pxzkB+fn4w0BswD7ikru6synfqmrV8HBJAe/i4y4ujvU3kdZBPRT8HciYyIXo2MsFZuaNaq9rSbLvKWsQ2YPXvOKUBtWdld+zKpb9r6qcAtyIDafuSsfx74P0OzNmeTVtPWJyHlg4nImIYfIl+mXx/rcct7xmYT0RhOX0HeTuuJ9NfdhLyAtRbJiI+Bw8m0XaatFyLDAJ0GnA5cgLwcfgoyGvhOZHi9OYZmZeqX3G58qhgbC9PWhwGXIJf6M5De+keRzt21SN+pemQQZEHTV7l6IKXZhvB7u5AfbVyGdAfNC8eATy1jG2Da+hnIuP+jkcztQtMdTA+5PwuaBwmNIBm/C+nxvzbXAtoJnMAJdGb8P4v3CXogjnvuAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE3LTA1LTI2VDAxOjM3OjU2LTA0OjAwciT+/wAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxNy0wNS0yNlQwMTozNzo1Ni0wNDowMAN5RkMAAAAZdEVYdFNvZnR3YXJlAEFkb2JlIEltYWdlUmVhZHlxyWU8AAAAAElFTkSuQmCC',
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
                //data: 'data:image/png;base64,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',
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
                //data: 'data:image/png;base64,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',
            },
            /**/
            'dvt': {
                title: "DVT",
                section: ['On', 'Arka'],
                //data: 'data:image/png;base64,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',
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
                //data: 'data:image/png;base64,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',
            },
            /**/
            'splenomegali': {
                title: "Splenomegali",
                section: ['On'],
                //data: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHYAAABhCAYAAAADdFUyAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QA/wD/AP+gvaeTAAAAB3RJTUUH4QUaASU4J7tYQgAAFSxJREFUeNrtnXmcFNW1x7+3qmdhm6FZlU1Q4vqACAhS6isBifoSjTTiFkOMUXFJMomF8WlMNKuJpjQkErfwniSRxAFbE5O8IAEpwBIEFBMEF0CQfXF6GJhhZrqr6v1xe2Z6erp7enp66B7k9/nM5zN9tzr3nrr3nnvOuafgBE7gBDoPRK4JSBemrU8Cboz+fMLQrLdyTVM+w5drAtqA84GvRv9fBpxgbAoouSagDaiI+d/NNTH5js7E2OqY/7vkmph8R2dairfG/D8WeBbAtPVvAZ8HhgBbgPmGZv0h18TmGp1JeCoEagA1mvQUcB4wJkHxZw3Nui3NdrtF2/kPYBQwAOgNdAUKYsbIAeqRK8dOYA+wDnjT0KwPcj0+8eg0jAUwbf2bwOw0i99taNbjCdpQgGuBK4DPAv2AMHAY2I1k2G4gBFRG8wC6AT2BXsAwoC/QB+iOZPhHwGLgFUOz3s71WHUqxgKYtn4d8AzQo5Winxia1Sdapxj4GjAZGA0UA5uAlcA/kLMuTAYwbX0IcsZfAvwn8kXZDywBFhiatSIX49TpGAuNg7kaOKmVoo8gGdkPuUe/Aaw1NGtpB9LWF8ngicDZwEDgdeCHhmZtO1Zj1CkZC2Da+izg0TSKzgV+kyuFhmnrVwL/DZwLLAdmGJq1r6Of25kZezvwZCvFvm5o1pxc0xqldzTwMKAD84AyQ7NqO+p5nekcG4/RaZSpzDWRDTA06y1Dsy4FrkLu9TtMW7+lo57XKWdsVLLdh5RKk8EFhhiatSvX9Cbpw6XALwA/EDA0681stt9ZZ+xNpGYqwMZ8ZSqAoVmLDM0aAfwNWG3a+rez2X6nY6xp6xOQb3pr6BRGAkOzZgKTgMdMW385W+3m3VJs2noB8EWkFugAUsvjAScj96ZAmk2NNDTr37nuTxv6fQpgI7Vrlxiatb097eUjY99EHvjbg+8YmpXOUSjvYNr6XOBm4ExDs97PtJ28Yqxp66OA9cD7gIl8eyfTZIdNBy8amnV1rvvSznH4CXA/7Vh18o2xLwBXGZpVFJc+HpgPnNpKE69GjxSdHqatPwZ8GxhhaNaGttbPN+HpYuQhvhkMzVoNnAXch1S0743JrkR6VMw6Xpga7fPdSIPHv01bH9DW+vk2YzcC3zI069VWyvmA05AmvO2GZlWn035nRMzMLWyLoSLfDO1VpOEdYWhWBLkPH/cwNOtu09YvBnbQutGjEfm2FHtI4/YJxMDQrNFAf9PWg+nWyTfGdss1AXmMQcBU09YvT6dw3jDWtPVrgBFIm+kJxCGqHr0S+HtUxkiJrAtPUYvFRUgfIa+V4g35w5BqtZ8ZmnVfRg8OhsbRUtV4GwH/e9nuYxq03A9cHtO/Q8DVBPx17W3atPUdwDZDsy5KVS5rwlNUJfYW0lqxGekrlM6LU4i01Ew1NOvldpAwEPlCxaJ3tvrXRvwncGFcmppJQwkwGthv2voXDM36a7JCWWGsaesnIV0/FwBfMTSrPmtDFKwYBGIUsIaAf3+KkjUJ0to9QzJEvIdEBa2vXmnB0KwDpq3fC/yRFH5f2dpjHwYcQ7OuzzJTrwSxDfgrsJVgaELW2j62cMkSYwEMzXoE2G7a+k3JymSLsaOBf3bAgDxE0xLWDbxnkhd100zLCbLK2CgeJ4XPV7YY+2/kpaksQ0TifvdMWtQtBeHEFHVk2vGL/wX6mLZ+Q6LMbDH2m0CvqBI/e3BKYwQODyKlSadgoTji4sYcg91uFIkjEY5TGJrlAg8gGdwCWTvuRC0wq5CCwnogQgYvjoPKYN/moq3hsx/57t4X7wNFQ9SCVwBe0ZZ7+8+4eUzx8h9sqz8zoggHges7o2j92z8+8NSyVVXX/xlfpWwo0rN+Qsn8qx7oe8eN79V9dr+HYszSlh2btTkYmgfMiEnZBwwh4M+e/NE07h4w3dCshbHpWVNQRC0wRcjLUkVInW9BW/9UnILDbs/CsFesIOrngvIiUA4sBPdXtW53pcbtXqSKSEOdQprfsYlFxEP4PJQZgGPaensN+JnCpeM2/JeAH8cn5pV1pz0ofLFySj1FryKirrpeMYXUf7Z+Wuk7AI/Yk8pVnOkeyoBZ2mt7OpSYljN2D3LGZn1rMG19JLAOT/Q1LlhW2ZCeNyrF9qLe666gxFjvlGrq3ZJGg8J3tKXXeIjNPurLc01rNmFo1r+A1Qhvamz6ccNYlErwYmUtFXwVzYoUiPplpxZuvLBtDWcFHtk/7sRiJdJJoRH5Zo9tjpf2F+EVNL18IuwxtV+SaxGFSC1mzLvqNdfi9Vb3/taquWoFC58ei6dORK0cAUp/5Fm5BtiIVIuuJODfncWeOMTvscHQaUh98vnIK5kqcARpZ14DBAn4092XFwHfj03Ib8Y6pX9HqR4jRQEPnB7bkHdaE5Tt4aFWxY2f1yhDdHl5R8l39+0etL1uzIXgzsNXCV6LBeuKhooEQ38AFhLw/yULPSkg4JczNhiahnR4/0IrdXZF9+rfEvB/1ErZVcBgc+15Zxlj12yCNBhr2npPZBiAjl5OAHBROatwnVhSc9WOx/crpXiFpYgwoIJb3OuGpQ+UXF/yxJBNdfIie0/1gPD79h+6f+8K9cOjF4Fa2bw5gGDluUcjJa9uDw/qg1IDoi4RU2MhgC8DXyYYWgNcR8C/lcyxU9IR+hXwjTTrDER6KhoEQ5cR8C9LVtDQrKOmrRfhqVOR935TM9a09fnA9cgzabasEymh4LAzfKoY4vvoVtRD63BLx0BYnmN9tW+OLFoz5YAzYKEiHE/gEXL6ir6+3UuGFm6Y82H1Rc2pDPjXEQydC95bKIdiMtp0GDgPeJtgaAoBf6b3awoJhpYgTZNtRRHwGsHQxQT8Vopym3CVRl16Usaatr4dGY/hCuDdaNkOPR55CDwEgws2i8U103bjlN6AEjXQiDBESk5/p27coi8Vv3HGwcjJeAh6qftEGF/V1voRo+JEwUqCoe8h9c2JEAHeRF6IDkf7eiGJvThKgNUEQxNTzZwUGJkkfStSmVOBNHeeA5yZpOxSgqF+BPyfJMlfh7xBIYcrUQnT1uchL+jm9py7sH41ypFxjXus23UrVxeflrDsAu9zqFWLYvbYMIn9p9YgQx28QsDf3LwWDPVEeilcASRzOj+fgH91SrpbnmPjMR8oJ+D/c4K6Y4A7kbcB4vEKAf+ViRo0bf2LKJGn8ZSTjQkrvGQzdgYws618yDrUqkiTZCtATaH7VatEnBYzjqkeIB4i4P9B0jYC/krgd8DvCIa+AjyXoNRLyNmdKW4k4H8+BQ3rgK8RDG0BfhKXewXBkJ+AP5Sg5jt4ig9f/TBgayoJ4kg7iM8OPJH6dzM4JD6WR2U+x39HSqbGI+CfB0xNkHMywVCmL/1zKZna/Pk/BRLtqTckqbEbqMcTp0FyBcVG4EcZEp89eF2UJkHcA68w+YsY8dNSaHcBH4T9S5kunmrz8wP+l0ksxf6CYKit21QlAX9b7iAB3JEg7b8SFYw6OISRtxKTMvZSYJhp6yujvky5gVfgNq2oCjjdkx7YBxX9C5ySuNQCcHrs4VoxOWMaAv4ngPgoM92R3vltwfcyePYmpIAXi/EEQ8m20BpkhJzEUrGhWTuj90VeA7aZtl6NlGA6XJjyEJQoFaLW6/b1b+49tBG3VEMcAa8Q1Np3H7Evmdpf/fgPB5yBQuAS9grEOcVrlv/qk9ef2lk7svlxx+nB8C4r7/nZ2v4/OuT0mfWJ099TaTTGu8jSHwE/NzRrXgqyfk3Lo8pM4LE2dC1TRcdSYFzM795IH+NtCcrWEfWDSnrcMTRrL3CWaesXAJ8hPXfSdsP1VHqr+3xra/XXcXoEEFETpgiDUzLw/boR607vsf7OfZHBjhDQTTms1ntFu3aGhxe1eO1cqk8u2PyXAiKhg5GTZvpEJHbGO8iwepcBz5m2fquhWcn0yK8gXUhjXTJOJxgaRMC/M41uVQMHMxySqgRpvUjM2IaXtXXNk6FZryMDUB1jlMOCP/aTFhuB5EOk39yJj388F+bJwGcxWDDlc/ji5D01vGTFpV89vAL+3qJ8E+aatj4IGcXlKUOzbm9RIuB3CIYWAdfE5YyhQauUGkejHcgEiVbJVo03+W3d8VXWN/VLgK8quQeCUitkSMPYtMNphbszNGsnchbMNG092axdlSDtM2n2RJD5WCdibDJZowD5EuU5Y+P1uan0u6JGtOyOkrZB3dCsEPAhYCQpkqitXrkeojh0QQb3zHPGtgkJu9JWd5RtwNAkeYnayrfxK0YGZMk7wtoBN9HlZ38bG/EjhaRE6Jkg7XCue90A09b9QAHC2wb5zljhpP4dC7fn1gT557bxiWOAJ5LkjUiQti2HoxOPsxGewFU3QL4z1umuNDthuV2T03u1ugun9OM45l6W7qNMW38J2BrvxhmDKQnS1ud6iGIwEuEeNcbbRyFND4poUK1j4JMrcBGcUfi2d+XYSldqnnzIk4IAp4sL8Oe1vZQP6kcJgALCnFq4gSvHVjp4Yilu15sQUVOfVzyIF6snMK3bG8+tPqvooNM/LKIKZ0OznGiA6ouQd4/GeIjElqNgaCRwRlzqQQL+dzt+TNLGGKL7K6S2xw4BfoqM1uJyTGa3hwD2Rk5RZr9xzkNleyu34JZENU8FoNZt/unrl0+qdLY+KqLW2wg+ttSPUF5c+8Hihw++9NraqqtvwlfX2B6ezzCWz7ivp/q3eZ84/Yo9hCfwGhytBTIm4z4H32e+oy1J5iWRSGebnjL/2GEcwrMbfiRkrGnrZyJdLJYjxf8KjlFsCBeVfr6dyj+rAx/hlH4D5ajMEGGIdB24vvb8t84pXT1zX2SQp4pII3M9j7rhBRtDa2VhwEPeIOgx7emDP/+guE/dVaO6LB8S9oq8CqcfYa9YdVFqBN67hmYl16gFQ8OBRB+O+DH5hT4Ir9G+m2zGLgbeMTRLzx2dz8LCOT2k0kEBXFDqepRPfrCyHNYm1iQ9COXffwq8qPZIgFrFkchJ9/1k358eZrqQfE9X5gmGCpAPil+tniTgz1RFmAU011lEV9c9CGd5Q1qy5XUQcGvuCI9CrYo0kdiKob2pz7PAbZKgPAXUClCOfkC5d1bazw6GuiO9LYYkyJ2V03FpaZe+GDhgjF3TeORLtW+29QzYAR2IJy8N49J0UU241yTZtYYVVgFRdxK+0AaCh37EQje5xigYKiAYuhl4BxmBNR63EvDXkFMUxyd8njiVZ7KleCXwMtL6kTs4PQulO2l0z4yUFqZV71qxnBe8L+E78ry0DjXOegXcB1AOlREMLUB6KLyPNFAPRTqzXUty15efE/D/NqdjAtKEGcUTq8apdW7LUIXJGHsZsMe09QrkHcx9SFf7Dofj+RhauElsqBu/6od76w/gFSGZ4wOU/Xcsu3PwlO4LL9xcNwK1+b1o4Xg+tbdvb2WJenDx9LFiPi94Z+Kr+Z48/jSb7T2QzmI3p00Y/IyAP7OINtlGjKjnecrNQC9Ds9bHFklmaK+Ofj9mHvLbNcfEpxhAES5VTi+lr7rndtTqXbglQD14PlDqdg0t+HDsEbf0f4RoeaxWRSRS4fTvVucVi4VrmHn1eeL7/Ml7jwLlGURNt3ac2L5FwJ/uF7o6HjGMdTzffcigLs2QytBeB1wHYNq6CrgpjwVZxO9WD1duOX+Dy8LSh1Gi25moh0jp1HsvWBz4/ZundVVxuFtb3oIe09a7VbulM/Z74unyNb7d15wn5lPuvYbq3I0If5X0QwTVIN1U/5iBo/jguN+9yfyt6tf8pwuejDf5wprB43eG1WHA+PhKaWmeDM3K1EicEWaM3yyno6i7HyJDJVfdAnyH9wN8edwWT0YfSkhrNfDko/akfm5EmQu7+nON2APcQ7DiQRDXAtOQX7TsH1d9P9Lx+lVgfivhh1Lhl8gw8LXRMa4i89BE5UhjQy14ArergpCdr/OKXwD+ZmjWgfhKx83F53iYtv55D+X5WdprPRMWCIZUpJDUHzmbKoBtHXE5uSPwwppBw3aEh28VeAMMzWphK87v23btwwSBW5U0N+B3kKFid+Sa0ExwIDLwXuSXLxM6E3Q6xs55Y6xy14S1SQ0Spq13QfoCf5eWYe+OC/z6jfPPPup1vU3BSSovdArGPmZf1MVFnS/wJtd6+KIK/ERwaApDd2fUEe+4Q51XvFjBWRJ150mIvGesaetne/CuwNsM/BB5Qy1ZlJiGW+GLOvKDgDkej9vBG0ArH77Ia+HJtPUewCfAMkOzPpdrenKNqP34KHCLoVlzU5XNbw8KeSmq4ARTG7EY+H1rTIX8X4ob/WQ/7TBt/SHgwtYCUDcg32dsGBDRz4p+amHa+mTgQdrgw/WpHrDOANPWz0aGDDYMzVqUbr0TjM1jmLbeGxn/4x5Ds9pys+8EY/MVUUXLQWChoVnpfC+3GToBY/P6RNYhMG29K9K6tMzQrOmZtJHfjFUiINyGoMufCkQ/tboHWGBo1sRM28lvxiL2eqW7j4kNOB9g2vqNyNsFzxiadU172srrc6z67pSJXtfKotmPjJqHGn62zLh1Za5p6iiYtv5LoAy4qZWwCWkhbzew2bOfeEzUdf82TgFel0OguOCJL5WV3TU/17RlE6atdwf+AUwARhua9U422s1Lxs6ePecLyLgPiTC8rOyuLW1pL19h2vqjwI3IIC43Z9Nwka9L8bQUeZNJ4hdj2vpQ4KChWbkPPpYCpq1PRH59owtwo6FZi7P9jHwVnranyNuWIm8ycNi09Qdz3YFEMG19oGnry5DXRhYZmtW/I5gK+bsUDwB2Jch6DzinrOyuVB4UN9EUg/BJ4DeGZlWQQ5i2riO9Oi4HVgC3GZr1cUc+My8ZCzB79pxzkB+fn4w0BswD7ikru6synfqmrV8HBJAe/i4y4ujvU3kdZBPRT8HciYyIXo2MsFZuaNaq9rSbLvKWsQ2YPXvOKUBtWdld+zKpb9r6qcAtyIDafuSsfx74P0OzNmeTVtPWJyHlg4nImIYfIl+mXx/rcct7xmYT0RhOX0HeTuuJ9NfdhLyAtRbJiI+Bw8m0XaatFyLDAJ0GnA5cgLwcfgoyGvhOZHi9OYZmZeqX3G58qhgbC9PWhwGXIJf6M5De+keRzt21SN+pemQQZEHTV7l6IKXZhvB7u5AfbVyGdAfNC8eATy1jG2Da+hnIuP+jkcztQtMdTA+5PwuaBwmNIBm/C+nxvzbXAtoJnMAJdGb8P4v3CXogjnvuAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE3LTA1LTI2VDAxOjM3OjU2LTA0OjAwciT+/wAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxNy0wNS0yNlQwMTozNzo1Ni0wNDowMAN5RkMAAAAZdEVYdFNvZnR3YXJlAEFkb2JlIEltYWdlUmVhZHlxyWU8AAAAAElFTkSuQmCC',
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
                section: ['Iskelet'],
                //data: 'data:image/png;base64,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',
            },
            /**/
            'oral_aft_ulser': {
                title: "Oral Aft/Ülser",
                section: ['BasBoyun'],
                //data: 'data:image/png;base64,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',
            },
            /**/
            'maserasyon': {
                title: "Maserasyon",
                section: ['Perianal'],
                //data: 'data:image/png;base64,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',
            },
            /**/
            'tromboze_hemoroid': {
                title: "Tromboze Hemoroid",
                section: ['Perianal'],
                //data: 'data:image/png;base64,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',
            },
            /**/
            'eski_hemoroid': {
                title: "Eski Hemoroid (Skin Tag)",
                section: ['Perianal'],
                //data: 'data:image/png;base64,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',
            },
            /**/
            'dijital_muayene': {
                title: "Dijital Muayene",
                section: ['Perianal'],
                //data: 'data:image/png;base64,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',
            },
            /**/
            'norolojik_bulgu': {
                title: "Nörolojik Bulgu",
                section: ['On', 'Arka', 'BasBoyun'],
                //data: 'data:image/png;base64,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',
            },
            /**/
            'guatr': {
                title: "Guatr",
                section: ['Perianal'],
                //data: 'data:image/png;base64,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',
            },
            /**/
            'rebound': {
                title: "Rebound",
                section: ['On'],
                //data: 'data:image/png;base64,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',
            },
            /**/
            'defans': {
                title: "Defans",
                section: ['On'],
                //data: 'data:image/png;base64,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',
            }


        }

    }); // MODULE

})(SkeletonAction);



/////////////////////////////////////////////////////////////////////////
//          SKELETON MENU METHOD
/////////////////////////////////////////////////////////////////////////

(function (_) {

    _.MODULE(function () {

        var method = _.menuObject.method;
        var data = _.menuObject.data;
        var pathMethod = _.path.method;
        var collection = _.collection.create;
        var svgGlob = _.svg.globals;
        var skeletonGlobalMethod = _.globalMethod;
        var tooltip = _.tooltip;


        //....................................................................................


        // Menu deki bir butona tıklandığında yapılacak işlemler
        function itemdown(a) {

            a.preventDefault();

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

                // Sayfaya eklendiğinde kaldırılabilmesi için, seçme olayını ekle
                clone.setBind('mouseup', pathMethod.selectRemovedItem);

                // Nesneyi seçilen nesne olarak işaretle
                _.selectedObject = clone;

                // Sürüklenebileceğini belirt
                _.objectIsDragable = true;

                // Sürüklenme esnasındaki ilk konumunu ayarla
                skeletonGlobalMethod.onPress(a);

                // Nesneyi sahneye ekle
                _.container.appendChild(clone);

                // Sürükleme esnasında, eğer geçerli alanlar yoksa kullanıcıya uyarı bilgisi verelim
                if (!isAllow) {
                    
                    tooltip.message('Bırakabileceğiniz geçerli bir alan bulunamadı');
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

            }

            return;
        }




        //....................................................................................




        method.itemdown = itemdown;

    });

})(SkeletonAction);
/////////////////////////////////////////////////////////////////////////
//          SKELETON MENU INIT
/////////////////////////////////////////////////////////////////////////

(function (_) {

    _.MODULE(function () {

        var collection = _.collection.create;
        var menu = _.menuObject;


        

        //....................................................................................


        // Sayfada görüntülenecek menu ekranını oluşturur. Ana katman
        var displayMenu = new collection('div', {
            id: 'skeleton-menu'
        })
            .setCSS({
                position: 'fixed',
                left: '40px',
                top: '40px',
                width: '300px',
                overflow: 'hidden',
                backgroundColor: 'rgb(49, 126, 181)',
                border: '1px solid rgb(49, 126, 181)',
                boxShadow: '1px 1px 5px 1px #555',
                borderRadius: '4px',
                zIndex: 1000,
                fontFamily: 'arial',
                fontSize: '18px',
                color: '#333'
            })
            //Sınıf
            .setClass('slidetoright')
            .setBind('mousedown', function (e) { e.preventDefault(); return; });

        menu.container = displayMenu;



        //....................................................................................



        // Menü header bar
        var header = displayMenu.create('div', {
            id: 'skeleton-menu-header'
        });
        header.setCSS({
            padding: '10px',
            backgroundColor: 'rgb(49, 126, 181)',
            color: 'white',
            border: 0,
            borderBottomWidth: '1px',
            borderStyle: 'solid',
            borderColor: '#444'
        })
            .setHTML('Menü');




        //....................................................................................



        // Menüde listelenecek kayıtların yeri
        var content = displayMenu.create('div', {
            id: 'skeleton-menu-content'
        })
            // Style
            .setCSS({
                padding: '10px 20px 10px 10px',
                overflow: 'hidden',
                overflowY: 'auto',
                borderTop: '1px solid #ddd',
                borderBottom: '1px solid #ddd',
                height: '250px',
                backgroundColor: 'white',
                display: 'block'
            })



        //....................................................................................


        // Alt butonun olduğu yer
        var footer = displayMenu
            .create('div', {
                id: 'skeleton-menu-footer'
            })
            .setCSS({
                padding: '10px',
                border: 0,
                borderTopWidth: '1px',
                borderStyle: 'solid',
                borderColor: 'rgba(255,255,255,.5)',
                cursor: 'pointer'
            })
            // Footer Click
            .setBind('click', function () {
                content.target.style.display = content.target.style.display == 'block' ? 'none' : 'block';
            })
            // Children A
            .create('a')
            .setCSS({
                display: 'block',
                padding: '4px',
                textDecoration: 'none',
                color: '#fff',
                fontSize: '12px'
            })
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
                        id: chkName
                    })
                    // Input Event
                    .setBind('click', function (ev) {

                        var main = ev.target.parentNode.parentNode;
                        var checkbox = main.children[1];
                        // Eğer checkbox işaretliyle hem tabloya ekleyelim hem de image nesnesini sürüklenebilmesi için aktif yapalım
                        if (ev.target.checked)
                            checkbox.remClass('menu-item-locked');
                        else
                            checkbox.setClass('menu-item-locked');
                    });



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


        // Menu için global style verileri eleyelim
        if (!parent.document.getElementById('skeleton-menu-style'))
            var style = new collection('style', {
                id: 'skeleton-menu-style'
            })
                .setSheet({
                    '.skeleton-menu-item': {
                        transition: 'all .3s linear',
                        overflow: 'hidden',
                        padding: 0,
                        margin: 0,
                        border: 0,
                        'border-bottom-width': '1px',
                        'border-style': 'solid',
                        'border-color': '#f1f1f1',
                        display: 'table',
                        width: '100%',
                        padding: '5px'
                    },
                    '.skeleton-menu-item:hover': {
                        'background-color': '#eee'
                    },
                    '.skeleton-menu-item li': {
                        'box-sizing': 'border-box',
                        display: 'table-cell',
                        'vertical-align': 'middle',
                        'padding-top': '10px',
                        'padding-bottom': '10px',
                        'text-align': 'center'
                    },
                    '.skeleton-menu-item li:last-child': {
                        'text-align': 'left',
                        'padding-left': '10px'
                    },
                    '.skeleton-menu-item input[type=checkbox]': {

                    },
                    '.skeleton-menu-item .menu-item-img': {
                        'box-shadow': 'inset 0px 0px 4px #777, 1px 1px 3px #ccc',
                        background: '#fff',
                        'border-radius': '5px',
                        transition: 'all .3s linear',
                        cursor: 'pointer',
                    },
                    '.skeleton-menu-item .menu-item-img:hover': {
                        'box-shadow': '1px 1px 3px #000'
                    },
                    '.skeleton-menu-item .menu-item-text': {

                    },
                    '.skeleton-menu-item .menu-item-chk': {

                    },
                    '.skeleton-menu-item .menu-item-img > img': {
                        'pointer-events': 'none'
                    },
                    '.skeleton-menu-item .menu-item-img.menu-item-locked': {
                        'pointer-events': 'none',
                        border: 0,
                        'box-shadow': 'none',
                        opacity: 0.3
                    }
                })
                .insert(parent.document.body);

    });


})(SkeletonAction);
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

})(SkeletonAction);
/////////////////////////////////////////////////////////////////////////
//          SKELETON POPUP METHOD
/////////////////////////////////////////////////////////////////////////

(function (_) {

    _.MODULE(function () {

        var method = _.popup.method;
        var popup = _.popup.objects;
        var coll = _.collection.create;



        //....................................................................................



        function open(url) {

            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {

                    create();

                    var text = xhttp.responseText;

                    // Yüklenen sayfa içerisinde script tag'ı varsa çalıştır
                    var regex = _.regex.rules.scriptTag;
                    var src = text.match(regex);
                    text = text.replace(regex, '');
                    popup.content.setHTML(text);
                    popup.container.show();
                    parent.Skeleton.popupmodal = {
                        // Popup ile ilgili veriler
                        content: {
                            title: '',
                            url: url,
                            html: xhttp.responseText
                        },
                        // Kaydet/onayla butonuna basıldığında işletilecek
                        accept: accept,
                        // Sayfadan çıkıldığında/iptal edildiğinde çalıştırılacak method
                        reject: reject,
                        watch: watch,
                        // Popup pencereyi kapatmak için kullanılmaktadır
                        close: close
                    }

                    if (src) {
                        var _script = new coll('script')
                            .setHTML(src[1])
                            .insert(popup.content.target);

                    }

                }
            };

            xhttp.open("GET", url, true);
            xhttp.send();

        }


        //....................................................................................


        function create() {


            // Popup container 
            var container = new coll('div', {
                id: 'skeleton-popup-container'
            })
                // Style
                .setCSS({
                    backgroundColor: 'rgba(0,0,0,.4)',
                    position: 'fixed',
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0,
                    display: 'none'
                });


            // Popup Content
            var content = new coll('div', {
                id: 'skeleton-popup-content'
            })
                //.setClass('animated','jello')
                // Style
                .setCSS({
                    position: 'fixed',
                    backgroundColor: 'white',
                    left: '50%',
                    top: '50%',
                    transform: 'translate(-50%,-50%)',
                    border: '2px solid #fff',
                    padding: 0,
                    boxShadow: '3px 3px 17px -3px #000',
                    animation: 'skeleton-popup-modal .5s forwards',
                    minWidth: '500px'
                });

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



        method.open = open;
        method.close = close;
        method.accept = accept;
        method.reject = reject;
        method.watch = watch;

    }); // MODULE


})(SkeletonAction);
/////////////////////////////////////////////////////////////////////////
//          SKELETON POPUP INIT
/////////////////////////////////////////////////////////////////////////

(function (_) {


    _.MODULE(function () {

        var popup = _.popup;
        var collection = _.collection.create;



        //....................................................................................




        // Ek Style Dosyaları
        var style = new collection('style', {
            id: 'skeleton-popup-style'
        })
        // Style
        style.setSheet('@keyframes skeleton-popup-modal', {
            from: {
                opacity: 0,
            },
            to: {
                opacity: 1
            }
        });



        //....................................................................................


        popup.objects.style = style;


        //....................................................................................


        parent.document.body.appendChild(style.target);

    }); // MODULE

})(SkeletonAction);
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


})(SkeletonAction);
/////////////////////////////////////////////////////////////////////////
//          SKELETON REGEX METHOD
/////////////////////////////////////////////////////////////////////////

(function (_) {
    

    _.MODULE(function(){



        var method = _.regex.method;



        //....................................................................................





    });


})(SkeletonAction);
/////////////////////////////////////////////////////////////////////////
//          SKELETON REGEX INIT
/////////////////////////////////////////////////////////////////////////

(function(_){

    _.MODULE(function(){


    }); // MODULE

})(SkeletonAction);
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
                        if (menu.data[moveItemKey].urlForPopup) {
                            var url = menu.data[moveItemKey].urlForPopup;

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
(function (_) {
    
    _.MODULE(function(){


        //var coll = _.collection.create;
        //var style = new coll('style',{id:'skeleton-app-styles'});

       // style.importLink('https://raw.github.com/daneden/animate.css/master/animate.css');


        //style.insert(parent.document.body);

    }); // MODULE


})(SkeletonAction);
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



    }); // MODULE




    // Tüm modülleri çalıştır
    _.MODULE();



})(SkeletonAction);
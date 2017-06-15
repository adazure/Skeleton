/////////////////////////////////////////////////////////////////////////
//          SKELETON COLLECTION METHODS
/////////////////////////////////////////////////////////////////////////

(function(_) {


    _.MODULE(function() {

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
                Object.keys(attr).forEach(function(key) {
                    self.target.setAttr(key, attr[key]);
                });


            // Methodları aktaralım
            Object.keys(inc).forEach(function(ky) {
                self[ky] = inc[ky];
            });

            return self;
        }




        //....................................................................................
        // .wrap(..) şeklinde çağrıldığında name kısmına belirtilen tipde yeni bir element oluşturur
        // oluşturduğu bu elementin içinde target'deki oluşturulan nesneyi ekler. 
        // Kısaca target nesnesini başka bir nesne içine ekler/kapsar
        // <div>{target}</div>
        inc.wrap = function(name, attr) {
            var t = new coll(name, attr);
            t.target.appendChild(this.target);
            return this;
        }



        //....................................................................................





        // .create(..) şeklinde çağırıldığında parent'deki nesneye name ile tanımlı yeni nesne ekler
        inc.create = function(name, attr) {
            var t = new coll(name, attr);
            this.target.appendChild(t.target);
            return t;
        }



        //....................................................................................





        // .append(..) ile çağırıldığında obj(HTMLElement) ekler
        inc.append = function(obj) {
            this.target.appendChild(obj);
            return this;
        }




        //....................................................................................




        // nesnenin kendinisi istenen başka bir nesneye import eder
        inc.insert = function(target) {
            target.appendChild(this.target);
            return this;
        }



        //....................................................................................





        // .delete() ile çağırıldığında nesneyi siler
        inc.remove = function() {
            if (this.target);
            this.target.parentNode.removeChild(this.target);
            return this;
        }



        //....................................................................................





        // Sınıf ekleme
        inc.setClass = function(name) {

            for (var i = 0, n = arguments; i < n.length; i++) {
                this.target.setClass(n[i]);
            }

            return this;
        }



        //....................................................................................




        // Sınıf kaldır
        inc.remClass = function(name) {
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
        inc.setBind = function(name, action) {
            this.target.setBind(name, action);
            return this;
        }



        //....................................................................................





        // Olay dinleyici kaldırılır
        inc.remBind = function(name, action) {
            this.target.remBind(name, action);
            return this;
        }



        //....................................................................................





        // Nesneye style değerleri arguman olarak eklenebilir
        inc.setCSS = function(args) {
            this.target.setCSS(args);
            return this;
        }



        //....................................................................................




        // Ana nesnenin altında bulunan nesnelere style="" attribute ile style değerleri atar
        inc.setCSSChildren = function(args) {

            for (var i = 0; i < this.target.children.length; i++) {
                var ch = this.target.children[i];
                Object.keys(args).forEach(function(key) {
                    ch.style[key] = args[key];
                });
            }

            return this;
        }



        //....................................................................................




        // Nesnenin value değerine parametre atar
        inc.setVal = function(value) {
            this.target.value = value;
            return this;
        }



        //....................................................................................


        // Sayfa üzerinde ilgili nesneyi gösterir
        inc.show = function() {

            this.target.setCSS('display', 'block');

            return this;
        }

        //....................................................................................


        // Sayfa üzerinde ilgili nesneyi gizler
        inc.hide = function() {

            this.target.setCSS('display', 'none');

            return this;
        }

        //....................................................................................




        // <Style>...</Style> nesneleri için global style tanımlamaları oluşturur
        // Global olarak 
        inc.setSheet = function(name, value) {
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
                Object.keys(name).forEach(function(t) {
                    self.setSheet(t, name[t]);
                });
            }
            return self;
        }



        //....................................................................................



        // Html metin eklemek için
        inc.setHTML = function(value) {
            this.target.innerHTML = value;
            return this;
        }



        //....................................................................................


        // Checkbox ve Radio butonlar için işaretleme yapar
        inc.setChecked = function(param) {
            this.target.checked = param;
            return this;
        }


        //....................................................................................


        // Style Dosya import etmek için
        inc.importLink = function(url) {
            this.target.innerHTML += '@import url(' + url + ');';
            return this;
        }


        //....................................................................................


        inc.createParent = function(name, attr) {
            var t = new coll(name, attr);
            this.target.parentNode.appendChild(t.target);
            return t;
        }


        //....................................................................................



        _.collection.create = coll;

    }); //MODULE

})(Skeleton);
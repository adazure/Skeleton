/////////////////////////////////////////////////////////////////////////
//          SKELETON COLLECTION METHODS
/////////////////////////////////////////////////////////////////////////

(function (_) {


    _.MODULE(function () {

        var global = _.globalWindowEvents;


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
            self.wrap = wrap;
            self.create = create;
            self.append = append;
            self.insert = insert;
            self.remove = remove;
            self.setClass = setClass;
            self.remClass = remClass;
            self.setBind = setBind;
            self.remBind = remBind;
            self.setCSS = setCSS;
            self.setCSSChildren = setCSSChildren;
            self.setVal = setVal;
            self.setSheet = setSheet;
            self.setHTML = setHTML;
            self.setChecked = setChecked;

            return self;
        }




        //....................................................................................
        // .wrap(..) şeklinde çağrıldığında name kısmına belirtilen tipde yeni bir element oluşturur
        // oluşturduğu bu elementin içinde target'deki oluşturulan nesneyi ekler. 
        // Kısaca target nesnesini başka bir nesne içine ekler/kapsar
        // <div>{target}</div>
        function wrap(name, attr) {
            var t = new coll(name, attr);
            t.target.appendChild(this.target);
            return this;
        }



        //....................................................................................





        // .create(..) şeklinde çağırıldığında parent'deki nesneye name ile tanımlı yeni nesne ekler
        function create(name, attr) {
            var t = new coll(name, attr);
            this.target.appendChild(t.target);
            return t;
        }



        //....................................................................................





        // .append(..) ile çağırıldığında obj(HTMLElement) ekler
        function append(obj) {
            this.target.appendChild(obj);
            return this;
        }




        //....................................................................................




        // nesnenin kendinisi istenen başka bir nesneye import eder
        function insert(target) {
            target.appendChild(this.target);
            return this;
        }



        //....................................................................................





        // .delete() ile çağırıldığında nesneyi siler
        function remove() {
            this.target.parentNode.removeChild(this.target);
            return this;
        }



        //....................................................................................





        // Sınıf ekleme
        function setClass(name) {
            if (typeof name === 'object') {
                for (var i = 0; i < name.length; i++)
                    this.setClass(name[i]);
            }
            else
                this.target.setClass(name);
            return this;
        }



        //....................................................................................




        // Sınıf kaldır
        function remClass(name) {
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
        function setBind(name, action) {
            this.target.setBind(name, action);
            return this;
        }



        //....................................................................................





        // Olay dinleyici kaldırılır
        function remBind(name, action) {
            this.target.remBind(name, action);
            return this;
        }



        //....................................................................................





        // Nesneye style değerleri arguman olarak eklenebilir
        function setCSS(args) {
            this.target.setCSS(args);
            return this;
        }



        //....................................................................................




        // Ana nesnenin altında bulunan nesnelere style="" attribute ile style değerleri atar
        function setCSSChildren(args) {

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
        function setVal(value) {
            this.target.value = value;
            return this;
        }



        //....................................................................................




        // <Style>...</Style> nesneleri için global style tanımlamaları oluşturur
        // Global olarak 
        function setSheet(name, value) {
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
        function setHTML(value) {
            this.target.innerHTML = value;
            return this;
        }



        //....................................................................................


        // Checkbox ve Radio butonlar için işaretleme yapar
        function setChecked(param) {
            this.target.checked = param;
            return this;
        }


        //....................................................................................


        _.collection.create = coll;

    }); //MODULE

})(SkeletonAction);
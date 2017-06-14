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
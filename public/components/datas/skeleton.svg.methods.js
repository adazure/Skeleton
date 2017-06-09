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

})(Skeleton);
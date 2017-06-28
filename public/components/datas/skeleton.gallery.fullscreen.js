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

        }



        //....................................................................................


        function hasScreen() {
            return screen.objects.container != null;
        }



        //....................................................................................



        function createItem(data) {

        }



        //....................................................................................



        function show(item) {
            create();
            // https://www.diagnostikum-berlin.de/sites/default/files/R%C3%B6ntgen%20Lunge.jpg
            var img = new coll('img', { src: item })
                .insert(screen.objects.content.target);
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




        function create() {

            if (!hasScreen()) {

                // Gösterilecek resim için en dış katman oluşturuluyor ve sahneye ekleniyor
                var container = screen.objects.container = new coll('div', { id: 'skeleton-gallery-fullscreen-container' })
                    .insert(parent.document.body);

                //var images = screen.objects.images.container = new coll('div', { id: 'skeleton-gallery-fullscreen-images' })
                //    .insert(container.target);

                // Kapatma tuşu
                var closeButton = screen.objects.closeButton = new coll('div', { id: 'skeleton-gallery-fullscreen-closebutton' })
                    .insert(container.target)
                    .setBind('click', hide);

                // Resmin gösterileceği alan oluşturuluyor ve container nesnesine ekleniyor
                var content = screen.objects.content = new coll('div', { id: 'skeleton-gallery-fullscreen-content' })
                    .insert(container.target);

                // Sürüklenecek nesneyi bildiriyoruz
                dragDrop(content);


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
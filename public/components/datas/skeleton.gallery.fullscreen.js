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



        function show(files) {

        }


        //....................................................................................


        function hide() {

            screen.objects.content.remove();
            screen.objects.images.container.remove();
            screen.objects.container.remove();
            screen.objects.content = null;
            screen.objects.images.container = null;
            screen.objects.container = null;

        }



        //....................................................................................


        function hasScreen() {
            return screen.objects.container != null;
        }



        //....................................................................................



        function createItem(data) {

        }



        //....................................................................................



        function showItem(item) {

            var img = new coll('img', { src: 'http://www.mobileswall.com/wp-content/uploads/2014/12/1200-Tiger-muzzle-l.jpg' })
                .insert(screen.objects.content.target);

        }





        //....................................................................................

        var _x = 0, _y = 0, _status = false;
        function mousedown(e) {
            e.preventDefault();
            _x = e.pageX - e.target.offsetLeft;
            _y = e.pageY - e.target.offsetTop;
            _status = true;
            return;
        }

        function mouseup(e) {
            e.preventDefault();
            _status = false;
            return;
        }

        function mousemove(e) {
            if (_status) {
                var trg = screen.objects.content.target;
                var __x = e.pageX - _x;
                var __y = e.pageY - _y;
                var __start = parseInt(trg.clientWidth - parent.window.innerWidth);
                var __end = parseInt(trg.clientHeight - parent.window.innerHeight);


                __x = trg.offsetLeft < -__start ? (-__start) : __x;
                __y = trg.offsetTop < -__end ? (-__end) : __y;

                var a = 0;
                var b = 0;

                if (__start > 0) {
                    a = __x < -__start ? -__start : __x;
                    a = __x > 0 ? 0 : __x;
                }

                if (__end > 0) {
                    b = __y < -__end ? -__end : __y;
                    b = __y > 0 ? 0 : __y;
                }


                console.log(__end,parent.window.innerHeight);

                screen.objects.content.setCSS({ transform: 'translate(' + a + 'px,' + b + 'px)', left: a + 'px', top: b + 'px' })
            }
        }

        function dragDrop(obj) {

            obj.setBind('mousedown', mousedown);

            parent.window.addEventListener('mousemove', mousemove);
            parent.window.addEventListener('mouseup', mouseup);


        }


        //....................................................................................







        function create(files) {

            if (!hasScreen()) {

                var container = screen.objects.container = new coll('div', { id: 'skeleton-gallery-fullscreen-container' })
                    .insert(parent.document.body);

                var images = screen.objects.images.container = new coll('div', { id: 'skeleton-gallery-fullscreen-images' })
                    .insert(container.target);

                var content = screen.objects.content = new coll('div', { id: 'skeleton-gallery-fullscreen-content' })
                    .insert(container.target);

                dragDrop(content);

                showItem();
            }


            _.prompter.show({
                message: "Farenizin sol tuşu ile görsel üzerinde sürükleme yaparak kolayca kullanabilirsiniz",
                timer: 10000
            });

        }




        //....................................................................................




        screen.show = show;
        screen.hide = hide;

        setTimeout(create, 1000);

    });


})(Skeleton);
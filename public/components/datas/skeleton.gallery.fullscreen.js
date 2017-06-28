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
                title: _.lang.current.infoMoveTitle,
                message: _.lang.current.infoMoveMessage,
                timer: 6000,
                closeVisible: false
            });

        }




        //....................................................................................




        screen.show = show;
        screen.hide = hide;

    });


})(Skeleton);
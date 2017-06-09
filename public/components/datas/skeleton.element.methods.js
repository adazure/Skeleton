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

})(Skeleton);
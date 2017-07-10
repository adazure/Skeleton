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
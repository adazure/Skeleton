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
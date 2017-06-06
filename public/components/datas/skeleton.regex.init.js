/////////////////////////////////////////////////////////////////////////
//          SKELETON REGEX INIT
/////////////////////////////////////////////////////////////////////////

(function(_){

    _.MODULE(function(){

        var method = _.regex.method;
        var rules  = _.regex.rules;

        // Metin içerisindeki <script></script> etiketlerini arar
        rules.scriptTag = /<script[^>]*>([^<]*)<\/script>/;




    }); // MODULE

})(SkeletonAction);
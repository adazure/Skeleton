/////////////////////////////////////////////////////////////////////////
//          SKELETON REGEX
/////////////////////////////////////////////////////////////////////////

(function(_) {


    _.regex = {

        // Sorgularda kullanılabilecek regex kurallar listesi
        rules: {

            // Metin içerisindeki <script></script> etiketlerini arar. 
            // Bunu genel olarak XMLRequest sınıfımızdan gelen datalarda aratıyoruz
            scriptTag: /<script[^>]*>([^<]*)<\/script>/,

            // Sadece integer sayılar
            integer: /[0-9]+/,

            // Ondalık sayılar
            float: /[0-9]\.[0-9]/,

            // Sadece metin 
            alpha: /[a-zA-ZığüşöçÖÇŞİÜĞ\s]+/

        },


        method: {

        }
    };


})(Skeleton);
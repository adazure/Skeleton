/////////////////////////////////////////////////////////////////////////
//          SKELETON
/////////////////////////////////////////////////////////////////////////

var Skeleton = (function (_) {

    _.datetime = new Date();
    _.method = {};
    _.globalMethod = {};
    // SaveChange nedir? SaveChange bizim için, uygulamada veritabanına kayıt işlemi yapacağımız işlemlerde
    // Bir şeylerin değiştiğinde çalıştıracağımız methoddur.
    // Örneğin dosya upload ettik ve veritabanına kayıt yapılması gerek
    // Skeleton.savechanges() diyerek methodu çalıştırıyoruz. SaveChanges methodu içerisinde veritabanına kayıt işlemleri olacak
    // Ancak buradaki method scope'u boş. Çünkü dışarıdan override edilecek şekilde bırakıldı.
    // Amaç MongoDB gibi veritabanı olduğu için, bir datayı tek bir seferde değiştireceğiz.
    // O yüzden geliştirici, bu methodu override ederek; zaten her seferinde çalıştırılacak bu method ile kayıt işlemlerini kolayca yapabilir.
    
    _.savechanges = function () {
        console.log(new Date() + ' Veritabanı güncellendi');
    }

    // Açılacak popuplar için özel olarak tanımlandı.
    // Oluşturulacak yeni popup formları da bu değişken üzerinden dağıtılmalıdır
    _.jsons = {};

    // Sürüklenmek istenen nesne
    _.selectedObject = null;

    // Seçilen nesne sürüklenebilir mi? 
    _.objectIsDragable = false;

    // Burada tanımlı array değişkenler içindeki eventler, window mouseup,mousedown, mousemove olayları...
    // .. her tetiklendiğinde kontrol edilecek ve listede olay dinleyici varsa çalıştıracak
    _.globalWindowEvents = {
        up: [],
        down: [],
        move: []
    };

    // SVG Nesnesi
    _.container = null;

    // Path nesnelerinin bulunduğu nesne
    _.content = null;

    // Veritabanına kaydedilecek olan veriler
    _.data = {};

    _.data = {
        "$Gastroskopi$luminal_darlik": [

        ],
        "path4": {
            "transforms": [
                {
                    "x": "637",
                    "y": "86",
                    "obj": "luminal_darlik",
                    "fields": {
                        "endoskopi": "Geçti"
                    }
                },
                {
                    "x": "631",
                    "y": "57",
                    "obj": "luminal_darlik",
                    "fields": {
                        "uzunluk": "3",
                        "endoskopi": "Geçemedi"
                    }
                }
            ]
        },
        "$Gastroskopi$ulser_izole": [
            {
                "file": "1498041261968.png",
                "title": "sdfsdfdsf"
            },
            {
                "file": "1498041267947.png",
                "title": "123123123123"
            }
        ],
        "path39": {
            "transforms": [
                {
                    "x": "607",
                    "y": "427",
                    "obj": "ulser_izole",
                    "fields": {
                        "oval": "Oval",
                        "boyut1": "<0.5 cm",
                        "boyut2": "0.5-1 cm",
                        "boyut3": "1-2 cm",
                        "boyut4": "3-5 cm",
                        "adet": "3",
                        "nodularite": true
                    }
                },
                {
                    "x": "604",
                    "y": "469",
                    "obj": "ulser_izole",
                    "fields": {
                        "aftoz": "Aftöz",
                        "oval": "Oval",
                        "yildiz": "Yıldız",
                        "sirkuler": "Sirküler",
                        "boyut1": "<0.5 cm",
                        "boyut4": "3-5 cm",
                        "adet": "4",
                        "nodularite": true
                    }
                }
            ]
        },
        "path38": {
            "transforms": [
                {
                    "x": "565",
                    "y": "637",
                    "obj": "ulser_izole",
                    "fields": {

                    }
                }
            ]
        },
        "path40": {
            "transforms": [
                {
                    "x": "669",
                    "y": "605",
                    "obj": "ulser_izole",
                    "fields": {
                        "oval": "Oval",
                        "yildiz": "Yıldız",
                        "boyut1": "<0.5 cm",
                        "boyut2": "0.5-1 cm",
                        "boyut3": "1-2 cm",
                        "boyut4": "3-5 cm",
                        "boyut5": ">5 cm",
                        "adet": "4",
                        "nodularite": true
                    }
                }
            ]
        },
        "$Gastroskopi$cobble_stone": [

        ]
    };


    // Kod tarafında debugmode özelliğine bağlanmış/oluşturulmuş/oluşturulmak istenen yerler için kontrol değişkeni
    _.debugmode = false;

    //Her şey yüklendiğinde çalıştırılacak Module init methodları
    var inits = [];


    _.MODULE = function (action) {
        if (action && typeof action === 'function') {
            inits.push(action);
        } else
            for (var i = 0; i < inits.length; i++) {
                inits[i]();
            }
    }

    return parent.Skeleton = _;

})({});
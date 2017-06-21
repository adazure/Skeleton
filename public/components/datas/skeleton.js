/////////////////////////////////////////////////////////////////////////
//          SKELETON
/////////////////////////////////////////////////////////////////////////

var Skeleton = (function (_) {

    _.datetime = new Date();
    _.method = {};
    _.globalMethod = {};
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
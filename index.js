var express = require('express');
var multer = require('multer');
var fs = require('fs');
var app = express();

app.use(express.static(__dirname + '/public'));

// YÜKLENECEK DOSYALARIN KLASÖRÜNÜ BELİRLEYELİM
var uploadPath = 'public/uploads/';



//....................................................................................





// MULTER STORAGE
// YÜKLENECEK DOSYALARIN KAYDEDİLECEĞİ YERİ BELİRTİYORUZ
var storage = multer.diskStorage({
    destination: function(req, file, cb) {
        // DOSYAYI ŞURAYA KAYDET
        cb(null, uploadPath)
    },
    filename: function(req, file, cb) {
        // KAYDETTİĞİNDE DOSYANIN ADINI DEĞİŞTİRELİM
        // O AN Kİ SAATİ ALIP DOSYANIN İSMİ OLARAK DEĞİŞTİR
        cb(null, new Date().getTime() + getExt(file.originalname));
    }
});



//....................................................................................




// DOSYANIN UZANTISINI ALDIĞIMIZ YER
function getExt(file) {
    if (!file) return null;
    var inOf = file.lastIndexOf('.');
    if (inOf == -1) return null;
    var ext = file.substring(inOf);
    return ext;
}



//....................................................................................





// SADECE BİZİM İSTEDİĞİMİZ TÜR DE Kİ DOSYALARI KABUL EDELİM
function fileFilter(req, file, cb) {
    if (file.mimetype == 'image/jpeg' || file.mimetype == 'image/jpg' || file.mimetype == 'image/png') {
        // UYGUNSA EVET
        cb(null, true);
    } else {
        // UYGUN DEĞİL
        cb(null, false);
    }
}


//....................................................................................





// UPLOAD İŞLEMİNİ YAPMAK İÇİN SON HAZIRLIKlAR
// DOSYANIN KAYDEDİLECEĞİ YERİ VE FİLTRE YAPACAĞIMIZ METHOD'U BELİRTELİM
// AYRICA SONUNA DA HANGİ FILE INPUT NESNESİNDEN GELEN VERİYİ TARAYACAĞINI/KONTROL EDECEĞİNİ SÖYLÜYORUZ
// UPLOADFILE ADI BİZİM NESNEMİZİN NAME'Sİ OLUYOR
var upload = multer({ storage: storage, fileFilter: fileFilter }).single("uploadfile");




//....................................................................................




// EĞER DOSYA SİLME İŞLEMİ İÇİN POST YAPILIRSA
// http://...../removeFile/deneme.jpg
app.post('/removeFile/:name', function(req, res) {

    res.setHeader("Content-Type", "application/json");

    ///......../public/uploads/1497949761293.png
    var _path = __dirname + '/' + uploadPath + req.params.name;

    // DOSYA VAR MI VAR
    if (fs.existsSync(_path)) {

        // SİL O ZAMAN
        fs.unlink(_path);

        res.send({ message: 'Silindi', number: 200 });

    } else {
        res.send({ message: 'Dosya bulunamadı. Silinmiş olabilir veya erişiminiz olmayan bir alana ulaşmaya çalışıyorsunuz', number: 400 });
    }

});



//....................................................................................




// DOSYAYI UPLOAD EDELİM
app.post('/upload', function(req, res) {
    res.setHeader("Content-Type", "application/json");

    // UPLOAD ETTİYSEN SONUÇLARI VER
    upload(req, res, function(err) {
        if (err) {

            // DOSYA GÖNDERMEDEN YÜKLEME YAPILMAZ Kİ
            res.send(400, {
                message: 'Dosya bulunamadı',
                number: 400
            });
        } else {

            // DOSYAYI KAYDETTİK
            if (req.file) {
                res.send(200, {
                    message: 'Kaydedildi',
                    number: 200,
                    uploadFile: req.file.originalname, // Yüklenmek istenen orijinal dosya
                    sourceFile: req.file.filename // Yüklendikten sonraki dosya adı
                });
            } else {

                // LÜTFEN İSTEDİĞİMİZ DOSYAYI YOLLAYIN
                res.send(200, {
                    number: 415,
                    message: 'Geçersiz dosya uzantısı'
                });
            }
        }
    });
});

app.listen(1453);
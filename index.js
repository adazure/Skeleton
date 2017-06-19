var express = require('express');
var multer = require('multer');
var app = express();

app.use(express.static(__dirname + '/public'));

// MULTER STORAGE
var storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function(req, file, cb) {
        cb(null, new Date().getTime() + getExt(file.originalname));
    }
});

// Dosya uzantısı alınıyor
function getExt(file) {
    if (!file) return null;
    var inOf = file.lastIndexOf('.');
    if (inOf == -1) return null;
    var ext = file.substring(inOf);
    return ext;
}

function fileFilter(req, file, cb) {
    if (file.mimetype == 'image/jpeg' || file.mimetype == 'image/jpg' || file.mimetype == 'image/png') {
        cb(null, true);
    } else {
        cb(null, false);
    }
}

var upload = multer({ storage: storage, fileFilter: fileFilter }).single("uploadfile");

app.post('/upload', function(req, res) {
    res.setHeader("Content-Type", "application/json");
    upload(req, res, function(err) {
        if (err) {
            res.send(400, {
                message: 'Dosya bulunamadı',
                number: 400
            });
        } else {
            if (req.file) {
                res.send(200, {
                    message: 'Kaydedildi',
                    number: 200,
                    uploadFile: req.file.originalname, // Yüklenmek istenen orijinal dosya
                    sourceFile: req.file.filename // Yüklendikten sonraski dosya adı
                });
            } else {
                res.send(200, {
                    number: 415,
                    message: 'Geçersiz dosya uzantısı'
                });
            }
        }
    });
});

app.listen(1453);
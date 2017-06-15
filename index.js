var express = require('express');
var multer = require('multer');
var app = express();


app.use(express.static(__dirname + '/public'));


// MULTER
var storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function(req, file, cb) {
        cb(null, file.originalname);
    }
})


var upload = multer({ storage: storage }).single("uploadfile");

app.post('/upload', function(req, res) {

    res.setHeader("Content-Type", "application/json");

    upload(req, res, function(err) {
        if (err) {
            console.log("Dosya bulunamadı ya da bir sistem hatası oluştu", req.file);
            res.send(400, { message: 'Dosya bulunamadı' });
        } else {
            console.log("Kaydedildi", req.file);
            res.send(200, { message: 'Kaydedildi', file: req.file.filename });
        }
    });

});

app.listen(1453);
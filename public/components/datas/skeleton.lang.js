(function (_) {

    _.MODULE(function () {

        var lang = _.lang = { current: null, change: null };


        var TR = {
            errSubObject: "Alt nesne bulunamadı",
            infoMoveTitle:"Hareket ettirin",
            infoMoveMessage:"Farenizin sol tuşu ile basılı tutarak, görseli sağa/sol/yukarı/aşağı kolayca hareket ettirebilirsiniz",
            infoUploadTitle:"Upload Files",
            infoLoadingText:"Yükleniyor...",
            infoLoadingSuccess:"Yüklendi :)",
            infoNewFileDefault:"Yeni Dosya",
            infoNewFileTitle:"Dosya için bir başlık yazın",
            errFileExtension:"JPG veya PNG dosyası olmalı :((",
            errSystemError:"Sistem hatası oluştu. Daha sonra tekrar deneyin.",
            errUploadTimeout:"Yükleme işlemi zaman aşımına uğradı.",
            infoUploadButtonText:"DOSYA YÜKLE",
            infoDeleteFileTitle:"Dosya silme işlemi",
            infoDeleteQuestion:"Dosya'yı silmek istiyor musunuz?",
            infoDeleteButtonAllow:"EVET SİL",
            infoOkayButton:"TAMAM",
            infoSaveButton:"KAYDET",
            infoCancelButton:"VAZGEÇ",
            infoDeleteButton:'SİL',
            infoAllFileClear:"{0} için yüklenen dosyalar tamamen temizlendi. Bu alan için menüde hala aktif durumda. Dilerseniz işareti kaldırabilirsiniz ",
            errErrorTitle:"Hata oluştu",
            errSystemDeleteText:"Sistemsel bir nedenden dolayı dosyayı şuan da silemiyoruz.",
            infoAnyFileText:"Henüz hiç yükleme yapmadınız",
            errURLNotFound:"URL bilgisini girmediniz yada HTTP yapısını değiştirdiniz",
            errSectionText:"QueryString 'Section' parametresi gönderilmediğinden işlem yapılamıyor",
            infoMenuTitle:"Menü",
            infoDoYouKnowTitle:"Bunları biliyor musunuz?",
            infoMenuInfoText1:"İlgili hastalıkların en solundaki kutucuğu işaretlediğinizde, o hastalık iskelet üzerinde aktif olur",
            infoMenuInfoText2:"Kutucuğu işaretlediğinizde sağ tarafındaki görsel aktifleşir ve fare ile sürükleyerek iskelet üzerinde kırmızı olarak renklendirilen alanlara bırakabilirsiniz.",
            infoMenuInfoText3:"Yeşil ikonun ve hastalık adının bulunduğu alana fare ile tıkladığınızda, ilgili hastalık için dosya yükleyebileceğiniz pencereyi açabilirsiniz",
            infoMenuShowHide:"Gizle/Göster",
            infoAnyPathText:"<b>{0}</b> için iskelet üzerinde hiç nesne yok. İsterseniz sürükleyerek belirli noktalara işaretleme yapabilirsiniz",
            infoPathFoundText:"- İskelet üzerinde bırakılmış {0} adet {1} nesnesi var<br/>",
            infoFileFoundText:"- {0} için eklemiş olduğunuz {1} adet dosya var",
            infoDeleteItemText:"Bu kaydı sil",
            infoDeleteItemTitle:"Kayıt Silme işlemi",
            infoDeleteItemQuestion:"Kaydı silmek istediğinize emin misiniz?",
            infoDetailButton:"Detayları göster",
            infoIconTooltipText:"Bu ikonu bırakabileceğiniz bir alan tanımlı değil",
            infoItemHoverText:"Detaylar için tıklayın<span style=\'font-size:11px; display:block;\'> Kaydı silmek için fare ile sağ tıklayın</span>",
            infoClearAllTitle:"Temizlendi",
            infoClearAllText:"İskelet üzerinde hiç {0} kalmadı. Ancak menüde hala işaretli bıraktık "



        }

        var EN = {
            errSubObject: "Alt nesne bulunamadı",
            infoMoveTitle:"Move with the mouse",
            infoMoveMessage:"Farenizin sol tuşu ile basılı tutarak, görseli sağa/sol/yukarı/aşağı kolayca hareket ettirebilirsiniz",
            infoUploadTitle:"Upload Files",
            infoLoadingText:"Loading...",
            infoLoadingSuccess:"File has been sent :)",
            infoNewFileDefault:"New File",
            infoNewFileTitle:"Type a title for the file",
            errFileExtension:"File must be JPG or PNG file :((",
            errSystemError:"System error occurred. Try again later.",
            errUploadTimeout:"File Upload has timed out",
            infoUploadButtonText:"UPLOAD FILE",
            infoDeleteFileTitle:"File Deletion Process",
            infoDeleteQuestion:"Do you want to delete the file?",
            infoDeleteButtonAllow:"YES, DELETE",
            infoOkayButton:"OKAY",
            infoSaveButton:"SAVE",
            infoCancelButton:"CANCEL",
            infoDeleteButton:'DELETE',
            infoAllFileClear:"{0} için yüklenen dosyalar tamamen temizlendi. Bu alan için menüde hala aktif durumda. Dilerseniz işareti kaldırabilirsiniz ",
            errErrorTitle:"An error occurred",
            errSystemDeleteText:"Sistemsel bir nedenden dolayı dosyayı şuan da silemiyoruz.",
            infoAnyFileText:"You have not uploaded yet",
            errURLNotFound:"URL bilgisini girmediniz yada HTTP yapısını değiştirdiniz",
            errSectionText:"QueryString 'Section' parametresi gönderilmediğinden işlem yapılamıyor",
            infoMenuTitle:"Menu",
            infoDoYouKnowTitle:"Do you know these?",
            infoMenuInfoText1:"İlgili hastalıkların en solundaki kutucuğu işaretlediğinizde, o hastalık iskelet üzerinde aktif olur",
            infoMenuInfoText2:"Kutucuğu işaretlediğinizde sağ tarafındaki görsel aktifleşir ve fare ile sürükleyerek iskelet üzerinde kırmızı olarak renklendirilen alanlara bırakabilirsiniz.",
            infoMenuInfoText3:"Yeşil ikonun ve hastalık adının bulunduğu alana fare ile tıkladığınızda, ilgili hastalık için dosya yükleyebileceğiniz pencereyi açabilirsiniz",
            infoMenuShowHide:"Hide/Show",
            infoAnyPathText:"There are no objects on the skeleton for <b>{0}</b>. You can mark specific points by dragging them",
            infoPathFoundText:"- İskelet üzerinde bırakılmış {0} adet {1} nesnesi var<br/>",
            infoFileFoundText:"- {0} için eklemiş olduğunuz {1} adet dosya var",
            infoDeleteItemText:"Delete this file",
            infoDeleteItemTitle:"Item Deletion Process",
            infoDeleteItemQuestion:"Kaydı silmek istediğinize emin misiniz?",
            infoDetailButton:"Show Details",
            infoIconTooltipText:"Bu ikonu bırakabileceğiniz bir alan tanımlı değil",
            infoItemHoverText:"Detaylar için tıklayın<span style=\'font-size:11px; display:block;\'> Kaydı silmek için fare ile sağ tıklayın</span>",
            infoClearAllTitle:"Cleaned",
            infoClearAllText:"İskelet üzerinde hiç {0} kalmadı. Ancak menüde hala işaretli bıraktık ",
            infoFileDeletedText:"File deleted"



        }


        lang.change = function (ln) {
            lang.current = eval(ln);
        }

        lang.change(_.Request.lang || 'TR');

    });

})(Skeleton);
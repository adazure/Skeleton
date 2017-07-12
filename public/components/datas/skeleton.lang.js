(function(_) {

    _.MODULE(function() {

        var lang = _.lang = { current: null, change: null };


        var TR = {
            errSubObject: "Alt nesne bulunamadı",
            infoMoveTitle: "Hareket ettirin",
            infoMoveMessage: "Farenizin sol tuşu ile basılı tutarak, görseli sağa/sol/yukarı/aşağı kolayca hareket ettirebilirsiniz",
            infoUploadTitle: "Upload Files",
            infoLoadingText: "Yükleniyor...",
            infoLoadingSuccess: "Yüklendi :)",
            infoNewFileDefault: "Yeni Dosya",
            infoNewFileTitle: "Dosya için bir başlık yazın",
            errFileExtension: "JPG veya PNG dosyası olmalı :((",
            errSystemError: "Sistem hatası oluştu. Daha sonra tekrar deneyin.",
            errUploadTimeout: "Yükleme işlemi zaman aşımına uğradı.",
            infoUploadButtonText: "DOSYA YÜKLE",
            infoDeleteFileTitle: "Dosya silme işlemi",
            infoDeleteQuestion: "Dosya'yı silmek istiyor musunuz?",
            infoDeleteButtonAllow: "EVET SİL",
            infoOkayButton: "TAMAM",
            infoSaveButton: "KAYDET",
            infoCancelButton: "VAZGEÇ",
            infoDeleteButton: 'SİL',
            infoAllFileClear: "{0} için yüklenen dosyalar tamamen temizlendi. Bu alan için menüde hala aktif durumda. Dilerseniz işareti kaldırabilirsiniz ",
            errErrorTitle: "Hata oluştu",
            errSystemDeleteText: "Sistemsel bir nedenden dolayı dosyayı şuan da silemiyoruz.",
            infoAnyFileText: "Henüz hiç yükleme yapmadınız",
            errURLNotFound: "URL bilgisini girmediniz yada HTTP yapısını değiştirdiniz",
            errSectionText: "QueryString 'Section' parametresi gönderilmediğinden işlem yapılamıyor",
            infoMenuTitle: "Menü",
            infoDoYouKnowTitle: "Bunları biliyor musunuz?",
            infoMenuInfoText1: "İlgili hastalıkların en solundaki kutucuğu işaretlediğinizde, o hastalık iskelet üzerinde aktif olur",
            infoMenuInfoText2: "Kutucuğu işaretlediğinizde sağ tarafındaki görsel aktifleşir ve fare ile sürükleyerek iskelet üzerinde kırmızı olarak renklendirilen alanlara bırakabilirsiniz.",
            infoMenuInfoText3: "Yeşil ikonun ve hastalık adının bulunduğu alana fare ile tıkladığınızda, ilgili hastalık için dosya yükleyebileceğiniz pencereyi açabilirsiniz",
            infoMenuShowHide: "Gizle/Göster",
            infoAnyPathText: "<b>{0}</b> için iskelet üzerinde hiç nesne yok. İsterseniz sürükleyerek belirli noktalara işaretleme yapabilirsiniz",
            infoPathFoundText: "- İskelet üzerinde bırakılmış {0} adet {1} nesnesi var<br/>",
            infoFileFoundText: "- {0} için eklemiş olduğunuz {1} adet dosya var",
            infoDeleteItemText: "Bu kaydı sil",
            infoDeleteItemTitle: "Kayıt Silme işlemi",
            infoDeleteItemQuestion: "Kaydı silmek istediğinize emin misiniz?",
            infoDeleteFileNotFound: "Dosya bulunamadı. Silinmiş olabilir veya erişiminiz olmayan bir alana ulaşmaya çalışıyorsunuz.",
            infoDetailButton: "Detayları göster",
            infoIconTooltipText: "Bu ikonu bırakabileceğiniz bir alan tanımlı değil",
            infoItemHoverText: "Detaylar için tıklayın<span style=\'font-size:11px; display:block;\'> Kaydı silmek için fare ile sağ tıklayın</span>",
            infoClearAllTitle: "Temizlendi",
            infoClearAllText: "İskelet üzerinde hiç {0} kalmadı. Ancak menüde hala işaretli bıraktık ",
            infoINeedYourHelpTitle: "Yardımınıza ihtiyacım var",
            infoINeedYourHelpText: " {0} işaretini kaldırabilmem için aşağıdaki kayıtları kaldırmanız gerekiyor <br/><br/>",
            errUnknownFileTitle: 'Bilinmeyen Dosya',
            errUnknownFileText: 'Aradığınız dosya silinmiş olabilir yada geçiçi olarak dosyaya ulaşamıyorsunuz'



        }

        var EN = {
            errSubObject: "Child object not found",
            infoMoveTitle: "Move with the mouse",
            infoMoveMessage: "You can easily move the image right / left / up / down by pressing and holding the left mouse button",
            infoUploadTitle: "Upload Files",
            infoLoadingText: "Loading...",
            infoLoadingSuccess: "File has been sent :)",
            infoNewFileDefault: "New File",
            infoNewFileTitle: "Type a title for the file",
            errFileExtension: "File must be JPG or PNG file :((",
            errSystemError: "System error occurred. Try again later.",
            errUploadTimeout: "File Upload has timed out",
            infoUploadButtonText: "UPLOAD FILE",
            infoDeleteFileTitle: "File Deletion Process",
            infoDeleteQuestion: "Do you want to delete the file?",
            infoDeleteButtonAllow: "YES, DELETE",
            infoOkayButton: "OKAY",
            infoSaveButton: "SAVE",
            infoCancelButton: "CANCEL",
            infoDeleteButton: 'DELETE',
            infoAllFileClear: "The uploaded files for {0} have been completely cleaned. It is still active in the menu for this area. You can remove the sign",
            errErrorTitle: "An error occurred",
            errSystemDeleteText: "We can not delete the file because of system error.",
            infoAnyFileText: "You have not uploaded yet",
            errURLNotFound: "You did not enter the URL information, you changed the HTTP structure",
            errSectionText: "QueryString 'Section' parametresi gönderilmediğinden işlem yapılamıyor",
            infoMenuTitle: "Menu",
            infoDoYouKnowTitle: "Do you know these?",
            infoMenuInfoText1: "When you mark the leftmost box of related diseases, the disease becomes active on the skeleton",
            infoMenuInfoText2: "When you mark the box, the right side activates visually. You can drag it with the mouse and drop it onto the red colored areas on the skeleton.",
            infoMenuInfoText3: "If you click on the green icon and the area where the disease name is located, you can open the window where you can download files for the disease",
            infoMenuShowHide: "Hide/Show",
            infoAnyPathText: "There are no objects on the skeleton for <b>{0}</b>. You can mark specific points by dragging them",
            infoPathFoundText: "- There are {1} {0} objects on the skeleton<br/>",
            infoFileFoundText: "- Found {1} files for {0}",
            infoDeleteItemText: "Delete this file",
            infoDeleteItemTitle: "Item Deletion Process",
            infoDeleteItemQuestion: "Are you sure you want to delete the Item?",
            infoDeleteFileNotFound: "File not found. You may have deleted or are trying to reach an area that you do not have access to",
            infoDetailButton: "Show Details",
            infoIconTooltipText: "There is no area defined for this icon",
            infoItemHoverText: "Click for Details<span style=\'font-size:11px; display:block;\'> Right click with the mouse to delete the Item</span>",
            infoClearAllTitle: "Cleaned",
            infoClearAllText: "There was no {0} on the skeleton. However, the menu is still marked ",
            infoFileDeletedText: "File deleted",
            infoINeedYourHelpTitle: "I need your help",
            infoINeedYourHelpText: "You need to delete the following records in order to unmark {0} <br/><br/>",
            errUnknownFileTitle: 'Unknown file',
            errUnknownFileText: 'The file you are looking for may have been deleted, but you can not get to the file temporarily'
        }


        lang.change = function(ln) {
            lang.current = eval(ln);
        }

        lang.change(_.Request.lang || 'TR');

    });

})(Skeleton);
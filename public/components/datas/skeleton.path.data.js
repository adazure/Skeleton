/////////////////////////////////////////////////////////////////////////
//          SKELETON PATH DATA
/////////////////////////////////////////////////////////////////////////

(function (_) {


    _.MODULE(function () {

        var data = _.path.data;



        //....................................................................................



        // Sahne üzerinde bulunan path nesnelerinin alabilecekleri menulist parametrelerini burada tanımlıyoruz
        // keyname : sahne üzerinde yer alan path/rect/circle gibi herhangi tanımlanmış nesnenin ID bilgisini içerir. Benzersiz bir ad olmalı.
        // keyname.title : fare ile nesne üzerine gelindiğinde gösterilecek metin
        // keyname.data : array tipindedir ve keyname.data içerisinde yazılan tüm isimler menu data içindeki keyname değerlerine denk gelmektedir.

        // _.data, içinde tanımlı olan keyname'ler, ilgili SVG dosyasında bulunan ID isimleridir
        // bu liste içinde ki ID değerleri herhangi bir SVG dosyası içinde de olabilir. Yani ayrı SVG dosyaları ama aynı path isimlerine sahip olabilir.
        // dosya1.svg içinde path1 adında ID'e sahip nesne olabilir. Buradaki data bilgisindeki değerler kullanılır
        // dosya2.svg içinde de path1 adında ID'e sahip bir nesne olursa o da bu değerleri ortak kullabilir
        // dikkat aynı isimdekiler aynı değerleri kullanırlar.
        // isim tanımlamaları isteğe göre yapılabilir. 1,2,3 diye gitmek zorunda değildir. anlaşılması için bu şekilde yapılmıştır.
        // Uygulama çalıştırıldığı anda tüm _.data okunup sahne üzerinde taranır. Var olan isimlere ait tüm datalar aktarılır.

        data = {


            'path1': { title: '', data: ['icn1', 'icn2', 'icn3', 'icn4'] },
            'path2': { title: '', data: ['icn4', 'icn2'] },
            'path3': { title: 'Üst Özefagus Sfinkteri', data: ['luminal_darlik', 'icn2'] },
            'path4': { title: 'Hipofarenks', data: ['luminal_darlik'] },
            'path5': { title: 'custom path name', data: ['luminal_darlik', 'icn2'] },
            'path6': { title: 'custom path name', data: ['luminal_darlik', 'icn9', 'icn10'] },
            'path7': { title: 'Proksimal Çıkan Kolon', data: ['polip', 'icn7', 'icn11'] },
            'path8': { title: 'custom path name', data: ['polip', 'luminal_darlik', 'icn12'] },
            'path9': { title: 'Proksimal Sigmoid Kolon', data: ['polip', 'icn2'] },
            'path10': { title: 'Distal İnen Kolon', data: ['polip'] },
            'path11': { title: 'Proksimal İnen Kolon', data: ['polip'] },
            'path12': { title: '', data: ['polip', 'icn2', 'icn3'] },
            'path13': { title: '', data: ['polip', 'icn2', 'icn3'] },
            'path14': { title: 'Hepatik Fleksura', data: ['icn3', 'icn2', 'icn3'] },
            'path15': { title: 'Distal Çekum', data: ['icn3', 'icn2', 'icn3'] },
            'path16': { title: 'Proksimal Çekum', data: ['icn3', 'icn2', 'icn3'] },
            'path17': { title: 'Duedonum 3. Kısım', data: ['icn3', 'icn2', 'icn3'] },
            'path18': { title: 'Duedonum 4. Kısım', data: ['icn3', 'icn2', 'icn3'] },
            'path19': { title: '', data: ['icn3', 'icn2', 'icn3'] },
            'path20': { title: '', data: ['icn3', 'icn2', 'icn3'] },
            'path21': { title: 'Terminal İleum', data: ['icn3', 'icn2', 'icn3'] },
            'path22': { title: 'Distal İleum', data: ['icn3', 'icn2', 'icn3'] },
            'path23': { title: 'Proksimal İleum', data: ['icn3', 'icn2', 'icn3'] },
            'path24': { title: 'Distal Jejunum', data: ['icn3', 'icn2', 'icn3'] },
            'path25': { title: 'Proksimal Jejunum', data: ['icn3', 'icn2', 'icn3'] },
            'path26': { title: '', data: ['cobble_stone', 'icn2', 'icn3'] },
            'path27': { title: '', data: ['cobble_stone', 'icn2', 'icn3'] },
            'path28': { title: '', data: ['cobble_stone', 'icn2', 'icn3'] },
            'path29': { title: 'Duedonum 2. Kısım', data: ['ulser_izole'] },
            'path30': { title: '', data: ['cobble_stone', 'icn2', 'icn3'] },
            'path31': { title: '', data: ['cobble_stone', 'icn2', 'icn3'] },
            'path32': { title: '', data: ['cobble_stone', 'icn2', 'icn3'] },
            'path33': { title: 'Distal Sigmoid Kolon', data: ['icn3', 'icn2', 'icn3'] },
            'path34': { title: 'Splenik Fleksura', data: ['icn3', 'icn2', 'icn3'] },
            'path35': { title: 'Distal Çıkan Kolon', data: ['icn3', 'icn2', 'icn3'] },
            'path36': { title: 'Bulbus', data: ['ulser_izole'] },
            'path37': { title: 'Antrum – Büyük Kurvatu', data: ['ulser_izole'] },
            'path38': { title: 'Antrum – KüçükKurvatu', data: ['ulser_izole'] },
            'path39': { title: 'Korpus – Küçük Kurvatur', data: ['ulser_izole'] },
            'path40': { title: 'Korpus – Büyük Kurvatur', data: ['ulser_izole'] },
            'path41': { title: 'Distal Özefagus', data: ['ulser_izole'] },
            'path42': { title: 'Fundus – Küçük Kurvatur', data: ['ulser_izole'] },
            'path43': { title: 'Pilor', data: ['ulser_izole'] },
            'path44': { title: 'Kardiyoözefagiyal Sfinkter', data: ['ulser_izole'] },
            'path45': { title: 'Fundus – Büyük Kurvatur', data: ['ulser_izole'] },
            'path46': { title: 'Proksimal Özefagus', data: ['ulser_izole'] },
            'path47': { title: 'Oral Kavite', data: ['icn3', 'icn2', 'icn3'] },
            'path48': { title: '', data: ['icn3', 'icn2', 'icn3'] },
            'path49': { title: '', data: ['icn3', 'icn2', 'icn3'] },
            'path50': { title: '', data: ['icn3', 'icn2', 'icn3'] },
            'path51': { title: '', data: ['icn3', 'icn2', 'icn3'] },
            'path52': { title: '', data: ['icn3', 'icn2', 'icn3'] },
            'path53': { title: '', data: ['icn3', 'icn2', 'icn3'] },
            'path54': { title: 'Nazofarenks', data: ['icn3', 'icn2', 'icn3'] },



            //....................................................................................



            //ayrı bir SVG dosyasındaki tanımlamalar
            'group1': { title: 'Yüz Sağ Üst', data: ['icn3', 'icn2', 'icn3'] },
            'group2': { title: '', data: ['icn3', 'icn2', 'icn3'] },
            'group3': { title: 'Alın Sol', data: ['icn3', 'icn2', 'icn3'] },
            'group4': { title: 'Alın Sağ', data: ['icn3', 'icn2', 'icn3'] },
            'group5': { title: 'Sol Submandibular Medial', data: ['icn3', 'icn2', 'icn3'] },
            'group6': { title: 'Sağ Supraklaviküler Lateral', data: ['icn3', 'icn2', 'icn3'] },
            'group7': { title: 'Sağ Submandibular Medial', data: ['icn3', 'icn2', 'icn3'] },
            'group8': { title: 'Sağ Submandibular Lateral', data: ['icn3', 'icn2', 'icn3'] },
            'group9': { title: 'Yüz Sağ Alt', data: ['icn3', 'icn2', 'icn3'] },
            'group10': { title: 'Yüz Sol Alt', data: ['icn3', 'icn2', 'icn3'] },
            'group11': { title: 'Sağ Supraklaviküler Medial', data: ['icn3', 'icn2', 'icn3'] },
            'group12': { title: 'Sol Supraklaviküler Medial', data: ['icn3', 'icn2', 'icn3'] },
            'group13': { title: 'Sol Supraklaviküler Lateral', data: ['icn3', 'icn2', 'icn3'] },
            'group14': { title: 'Sol Submandibular Lateral', data: ['icn3', 'icn2', 'icn3'] },
            'group15': { title: 'Yüz Sol Üst', data: ['icn3', 'icn2', 'icn3'] },



            //....................................................................................



            //ayrı bir SVG dosyasındaki tanımlamalar
            'front1': { title: 'Sol Diz Üstü Distal', data: ['icn3', 'icn2', 'icn3'] },
            'front2': { title: 'Sağ Meme', data: ['icn3', 'icn2', 'icn3'] },
            'front3': { title: 'Sol Toraks Medial', data: ['icn3', 'icn2', 'icn3'] },
            'front4': { title: 'Sağ Toraks Medial', data: ['icn3', 'icn2', 'icn3'] },
            'front5': { title: 'Sol Ayak Distal ', data: ['icn3', 'icn2', 'icn3'] },
            'front6': { title: 'Sol Diz Altı Proksimal', data: ['icn3', 'icn2', 'icn3'] },
            'front7': { title: 'Sol Diz Altı Distal', data: ['icn3', 'icn2', 'icn3'] },
            'front8': { title: 'Sol Ayak Proksimal', data: ['icn3', 'icn2', 'icn3'] },
            'front9': { title: 'Sol Kasık', data: ['icn3', 'icn2', 'icn3'] },
            'front10': { title: 'Sol Diz Üstü Proksimal', data: ['icn3', 'icn2', 'icn3'] },
            'front11': { title: 'Sol Meme', data: ['icn3', 'icn2', 'icn3'] },
            'front12': { title: 'Sol Kostal Kenar Üst', data: ['icn3', 'icn2', 'icn3'] },
            'front13': { title: 'Sol Kol Proksimal', data: ['icn3', 'icn2', 'icn3'] },
            'front14': { title: 'Sol Kol Distal', data: ['icn3', 'icn2', 'icn3'] },
            'front15': { title: 'Sol Ön Kol Proksimal', data: ['icn3', 'icn2', 'icn3'] },
            'front16': { title: 'Sol Klavikula Altı', data: ['icn3', 'icn2', 'icn3'] },
            'front17': { title: 'Sol Omuz', data: ['icn3', 'icn2', 'icn3'] },
            'front18': { title: 'Sol Ön Kol Distal', data: ['icn3', 'icn2', 'icn3'] },
            'front19': { title: 'Sol El Proksimal', data: ['icn3', 'icn2', 'icn3'] },
            'front20': { title: 'Sol El Distal', data: ['icn3', 'icn2', 'icn3'] },
            'front21': { title: 'Sağ Kol Proksimal', data: ['icn3', 'icn2', 'icn3'] },
            'front22': { title: 'Sağ Omuz', data: ['icn3', 'icn2', 'icn3'] },
            'front23': { title: 'Sağ Diz Altı Proksimal', data: ['icn3', 'icn2', 'icn3'] },
            'front24': { title: 'Sağ Ön Kol Proksimal', data: ['icn3', 'icn2', 'icn3'] },
            'front25': { title: 'Sağ El Proksimal', data: ['icn3', 'icn2', 'icn3'] },
            'front26': { title: 'Sağ El Distal', data: ['icn3', 'icn2', 'icn3'] },
            'front27': { title: 'Sağ Ön Kol Distal', data: ['icn3', 'icn2', 'icn3'] },
            'front28': { title: 'Sağ Kol Distal', data: ['icn3', 'icn2', 'icn3'] },
            'front29': { title: 'Sağ Koltuk Altı', data: ['icn3', 'icn2', 'icn3'] },
            'front30': { title: 'Sol Koltuk Altı', data: ['icn3', 'icn2', 'icn3'] },
            'front31': { title: 'Sağ Kostal Kenar Üst', data: ['icn3', 'icn2', 'icn3'] },
            'front32': { title: 'Batın', data: ['icn3', 'icn2', 'icn3'] },
            'front33': { title: 'Sağ Kasık', data: ['icn3', 'icn2', 'icn3'] },
            'front34': { title: 'Sağ Diz Üstü Proksimal', data: ['icn3', 'icn2', 'icn3'] },
            'front35': { title: 'Sağ Diz Üstü Distal', data: ['icn3', 'icn2', 'icn3'] },
            'front36': { title: 'Sağ Ayak Proksimal', data: ['icn3', 'icn2', 'icn3'] },
            'front37': { title: 'Sağ Ayak Distal', data: ['icn3', 'icn2', 'icn3'] },
            'front38': { title: 'Sağ Diz Altı Distal', data: ['icn3', 'icn2', 'icn3'] },
            'front39': { title: 'Sağ Klavikula Altı', data: ['icn3', 'icn2', 'icn3'] },
            'front40': { title: 'Genital', data: ['icn3', 'icn2', 'icn3'] },
            'front41': { title: 'Genital', data: ['icn3', 'icn2', 'icn3'] },



            //....................................................................................



            //ayrı bir SVG dosyasındaki tanımlamalar
            'back1': { title: 'Sol Kürek Kemik Bölgesi', data: ['icn3', 'icn2', 'icn3'] },
            'back2': { title: 'Sol Omuz Arka', data: ['icn3', 'icn2', 'icn3'] },
            'back3': { title: 'Sağ Omuz Arka', data: ['icn3', 'icn2', 'icn3'] },
            'back4': { title: 'Sağ Kürek Kemik Bölgesi', data: ['icn3', 'icn2', 'icn3'] },
            'back5': { title: 'Sol Sırt Alt', data: ['icn3', 'icn2', 'icn3'] },
            'back6': { title: 'Sağ Sırt Alt', data: ['icn3', 'icn2', 'icn3'] },
            'back7': { title: 'Sol Bel Üst', data: ['icn3', 'icn2', 'icn3'] },
            'back8': { title: 'Sağ Bel Üst', data: ['icn3', 'icn2', 'icn3'] },
            'back9': { title: 'Sol Kalça', data: ['icn3', 'icn2', 'icn3'] },
            'back10': { title: 'Sağ Kalça', data: ['icn3', 'icn2', 'icn3'] },
            'back11': { title: 'Oksipital', data: ['icn3', 'icn2', 'icn3'] },
            'back12': { title: 'Sağ Boyun Arka', data: ['icn3', 'icn2', 'icn3'] },
            'back13': { title: 'Sol Boyun Arka', data: ['icn3', 'icn2', 'icn3'] }

        }

        _.path.data = data;
        
    }); // MODULE

})(SkeletonAction);
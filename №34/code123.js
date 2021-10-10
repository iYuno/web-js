class Comment{
    constructor(user, text, rating){
        [
            this.user,
            this.text_comment,
            this.rating
        ]
        =
        [
            user,
            text,
            rating
        ];
    }
}

class Movie{
    


    constructor(name,text, country, genre, screenwriter, producer, operator, composer, budget, fees, rating, durat, date, poster, ...director){
        [
            this.name ,
            this.text,
            this.country ,
            this.genre ,
            this.director ,
            this.screenwriter ,
            this.producer ,
            this.operator ,
            this.composer ,
            this.budget ,
            this.fees  ,
            this.rating ,
            this.durat ,
            this.date,
            this.poster,
            
        ]
        = [
            name,
            text,
            country,
            genre,
            director,
            screenwriter,
            producer,
            operator,
            composer,
            budget,
            fees,
            rating,
            durat,
            converDate(date),
            poster
            ];
            this.comment = new Array();
    }
    addComment(c){
        this.comment.push(c);
        save();
        console.log(c);
    }
}

let countriesString = "Австралия, Австрия, Азербайджан, Албания"+
', Алжир, Ангола, Андорра, Антигуа и Барбуда, Аргентина, Армения'+
', Афганистан, Багамские Острова, Бангладеш, Барбадос, Бахрейн'+
', Белиз, Белоруссия, Бельгия, Бенин, Болгария, Боливия, Босния '+
'и Герцеговина, Ботсвана, Бразилия, Бруней, Буркина-Фасо, Бурунди'+
', Бутан, Вануату, Ватикан, Великобритания, Венгрия, Венесуэла'+
', Восточный Тимор, Вьетнам, Габон, Гаити, Гайана, Гамбия, Гана'+
', Гватемала, Гвинея, Гвинея-Бисау, Германия, Гондурас, Гренада'+
', Греция, Грузия, Дания, Джибути, Доминика, Доминиканская Республика'+
', ДР Конго, Египет, Замбия, Зимбабве, Израиль, Индия, Индонезия'+
', Иордания, Ирак, Иран, Ирландия, Исландия, Испания, Италия, Йемен'+
', Кабо-Верде, Казахстан, Камбоджа, Камерун, Канада, Катар, Кения'+
', Кипр, Киргизия, Кирибати, Китай, КНДР, Колумбия, Коморские Острова'+
", Коста-Рика, Кот-д'Ивуар, Куба, Кувейт, Лаос, Латвия, Лесото, Либерия"+
', Ливан, Ливия, Литва, Лихтенштейн, Люксембург, Маврикий, Мавритания'+
', Мадагаскар, Малави, Малайзия, Мали, Мальдивские Острова, Мальта'+
', Марокко, Маршалловы Острова, Мексика, Мозамбик, Молдавия, Монако'+
', Монголия, Мьянма, Намибия, Науру, Непал, Нигер, Нигерия, Нидерланды'+
', Никарагуа, Новая Зеландия, Норвегия, ОАЭ, Оман, Пакистан, Палау'+
', Панама, Папуа - Новая Гвинея, Парагвай, Перу, Польша, Португалия'+
', Республика Конго, Республика Корея, Россия, Руанда, Румыния'+
', Сальвадор, Самоа, Сан-Марино, Сан-Томе и Принсипи, Саудовская Аравия'+
', Северная Македония, Сейшельские Острова, Сенегал, Сент-Винсент '+
'и Гренадины, Сент-Китс и Невис, Сент-Люсия, Сербия, Сингапур, Сирия'+
', Словакия, Словения, Соломоновы Острова, Сомали, Судан, Суринам, США'+
', Сьерра-Леоне, Таджикистан, Таиланд, Танзания, Того, Тонга, Тринидад '+
'и Тобаго, Тувалу, Тунис, Туркмения, Турция, Уганда, Узбекистан, Украина'+
', Уругвай, Федеративные Штаты Микронезии, Фиджи, Филиппины, Финляндия'+
', Франция, Хорватия, ЦАР, Чад, Черногория, Чехия, Чили, Швейцария'+
', Швеция, Шри-Ланка, Эквадор, Экваториальная Гвинея, Эритрея, Эсватини'+
', Эстония, Эфиопия, ЮАР, Южный Судан, Ямайка, Япония';

let countryArray = countriesString.split(", ");

countryArray.forEach(function(item, i){
    let opt = document.createElement("option");
    opt.text = item;
    document.getElementById("form_country").appendChild(opt);
})



document.getElementById("load_img").addEventListener('click', function(){
    load_img();
})


function load_img(){
    document.getElementById("poster").src = document.getElementById("link_img").value;
    
    //console.log(document.getElementById("poster").src);
    //console.log(document.getElementById("link_img").value);
}


document.getElementById("close_form").addEventListener('click', function(){
    document.getElementById("container_form").style.display = "none";
})
document.getElementById("plus_film").addEventListener('click', function(){
    document.getElementById("container_form").style.display = "flex";
})


let List_Film = new Array(
    new Movie ("Гинтама Финал", "Основанный на манге и аниме-сериале « Гинтама », фильм является завершением сюжетной линии аниме-сериала.",
    "Япония", "Комедия", "Тидзуру Мияваки","Хидэаки Сорати","Тидзуру Мияваки","Тидзуру Мияваки","100000","$16 971 401","16+","108 мин","08-01-2021","https://avatars.mds.yandex.net/get-kinopoisk-image/1900788/5d6140c4-20d1-45ad-b19b-a29c811511da/300x450","Синдзи Такамацу","Тидзуру Мияваки","Ёити Фудзита"),
    new Movie("Зеленая Книга", "1960-е годы. После закрытия нью-йоркского ночного клуба на ремонт вышибала Тони по прозвищу Болтун ищет подработку на пару месяцев. Как раз в это время Дон Ширли, утонченный светский лев, богатый и талантливый чернокожий музыкант, исполняющий классическую музыку, собирается в турне по южным штатам, где ещё сильны расистские убеждения и царит сегрегация. Он нанимает Тони в качестве водителя, телохранителя и человека, способного решать текущие проблемы. У этих двоих так мало общего, и эта поездка навсегда изменит жизнь обоих.",
        "США", "комедия", "Ник Валлелонга", "Джим Бёрк","Шон Портер", "Крис Бауэрс","$23 000 000","$321 752 656","16+","130 мин","11-09-2018","https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/4b27e219-a8a5-4d85-9874-57d6016e0837/300x450", "Питер Фаррелли"),
    new Movie("Семь жизней", "Инженер Бен отправляется в необычное путешествие. В ходе своей поездки он встречает семерых незнакомцев, включая смертельно больную Эмили, которая называет себя девушкой с подбитыми крыльями. Бен неожиданно влюбляется в нее, что сильно усложняет его первоначальный план. Сможет ли он разгадать послание судьбы?",
        "США", "драма", "Грант Нипорте", "Тодд Блэк","Филипп Ле Сурд", "Анхело Мильи","$55 000 000"," $168 168 201","16+","118 мин","19-12-2008","https://kinopoisk-ru.clstorage.net/P289yi452/ae314e0q/8HFpi3MrXK_Tp6wnxFePx_7F2qa8aLSxZ6ktuYMrxaAcgf_DEKnPbNirNkOcRR9L15Uk_QbL3BDwMO3SJBWM3kS1SY9DHqgeFhJpxqXSCkfbkRsDDHy1deLNbGi2_nBS74N84YeLrJ5aqfBX-EEe3hJgkPkmey0QIZHcpQKB6E6TYLq4AEqPKkMl_9C3J33Wr5QdJj94gRJ2yDv4oum0ML_xvMNVWg_MOJvQNenTKmwz8sAZBRl_sebRXoQR5tmfAiIomJOKH0kRxO5xBKUOh132v-bM-ZKzRtl4SmA4BvO_Ya4jF1lNXLl4QSYZkoksAqEimTZ7fyLVoh1HsuR7LQAjiKuz2V_5YVc_MCW0naT-FuwlL3vA0dfLWksSuwdBrEEvwQToXo3KuDE2KFLLL5Fg06oViP5B9tIfR1AFCP5AAwuo0gvdO-HHT9N1Zo_FjndvBT1awPM3aPj70SpWAG_yzaA2m8wu6dkgRBmgCPwAwlBJNRrM08cS3nRhJbheovLb2kCYnyqQdZxxNRXNBrxWLPfNWuICZzsYyBEZx2BdY-2TFRhNDorKUtRJ0_ifAeJSeHYZXaHmcO2XYYXKzoAjedqhy1yJwndP05TU7XV_tOxXLnnBMzVZCwlDC-fDPpDuIYSIH4z6-fD3KjD7LsBw0wtWaw-hBPI8puIkSr-gwPu4Eer_CkDnbVAG189k_jScZn1pcOFXeTg6Uak0Q07RfFG2qj8eSOgwRBnAWJ-R8RIZtai8Q5XwH-TAZKvMgCEJ-LAYXhuiRw8h92YMhL8VHMVcCFLCR9tJiFPKN5A9Uu3gxohergq6Ibb7oArMs3HheqSrnxAHUM7GAzaqraNiqJoB-Ow6oAScMHbVT2UcpH72fuqi46SKuZmRWLUzDkBOM7V77jw5-3GHqGM7TwFSUlr1KTzg12PchrGluL2hEsqpEniNucH0znAHFo1GntVs5o6b4xN3uTo6M5nUE73hXGO1Sxwc-IsixAmwKm4jYKGYxbqOoEXT7IRzpyiMglGI-5O6bhoDV8wyhUdvpL4HfnbeauAyJcqqSgIYB3NdA_3AhGverptb0gZrI-ousqLTShUbrpGFUf3mgxabzVJwiBmTSh76QEcd8bXlzKVcJW6nXbhh0TfL-9hBGLfwfIJcAyRID53Zu8BkmRNoHaPQgCrkmv0wFjLdhhIXWH5SsVjpoFhd6-IXP9AWpI4lDBTMVX760FK0yLt5kPmn8_8h3rN2aP3v2DhB5wmjy77wwfEo9vl_IQYz3QWCNWnNkWGKCwFpT4vhVn9QpWfd5NwlLLV_SaNR5Kp6C1P4ZjJ_4Z9zFUgP3doL0AQLQRqc0VMzm0cZDtMVEnzUsGWKnMCjCBijSp8JcEc8YWe3f7X8FzyFD0rxElaIixuQy2TQffP98XVJvx9KWTA2WbD5XwAg8KqXm67yh5IutqNnix-SoJi4Yiv_OpNWfXMFRr90Pzd_5LxbMWF1KkvKIeinI36hDCH2q47smEsx1fsRyB_gwNN7FLitQ_UhfzShppi-Y3KqisFarNojV4-ghwbcBI5G_SbtqzESNzv72_KJdYPf4j9RRLr_n5pL4NYYUgq9kVATqATbTRDHAa5WkVdYjuFCOXpjamzJ8ycd46dnDxSuJLzEzlljQ3Uby1qxajQB7XDOo2S5D1z4WuBH6UAqLzIgkug3y90wx9NslBJmSR4zIpn7YyivuKDmzlEHR70E_RQMZrz54gAnSKlKY4gUcS5BfINlSn09SnvRtjnxCx6SwtKpZOsO0OYyLaYj9qlNQuNZ-aApfQpTtLxgF0bfB9-GLLZsu5MyNwjISFOpleOOs87jZivPLNpZQHSZYniN01EiSOf6zUI2Yqxm4OcqvpCwubtBai8p0_c-MnSFPnTeFr5kHwvQgiVKeDmR64Wyv_Fd41RLzh9qmACV-wPoXlDTU0rX-q1SNyLuVpGn241S8yr5IJpP6CH1_3I3Z08H_tTcVszbIXM12Qjr8ps3g80xT-DVak3c-8ky5ykA2mwiwDE7Bhq-8hVB_eSCNWiMMeC6qXN5PIsS5P0hN4e9ZJ40H3dPezBSFXt7mwLb1yN-88_A1to93ni68FYocssdgAAS6xQKvEDEcm73YufZjQFCyrsjGz_LIBVsQiZm3CWuZvy0LkuC0Ub4qioiy2VDneG-E4QqHp1auXAHq-BIXkHjU6oHC42AdhG_BYEXG_yzQWl4o2oOi-BGr3KEZT4lz-QNNwx7YvF2WRkYYqs38C6RjkMES81vyPpCZenROs8iotN5hwotckTxrSSgNLl9Y0Nby2FabbkD901gVLc-ds03DsSuitCgNrtZ6wD5p-E-wTyh5KvtTHiZ0uRpoQjds4DyiEQrPQIXM96k4UbYr3KgGDsBuM15cdUOEnUFTwSdth_kzssAgcUrODqQyzfjXPG_8Ya7Dj6biCG06pLbHwOxMqg0mU5AF_AupDEVCVxzYEqaIBrt-aP0TyKmVD11_YafVT4o4CJ1qFobwolUw-xBTtO2-82NagrBhxlBOhyxcyJpFNvPgzWg39Vyd9q8EhJKiuJbfvui933h5uYcJxx23IZtqTMjp1triBMrRkIfcu3Bhkkc7ngbsJQ58IttsHHxeRcJDnO1wN12M7RKvPHhCDsha0_pEiZMk3amv6cu5Lx2DylQ86TI6GnheEVDrVEvczX5r_66qfOlCLB6rZHj0aqnK54AZfCdBAP3-b8DU6g4E9l-y2NHPiEU5r833IafFE0JIOF3W_pZIwnXEyyBHHGHWF6euKkgNMlQqI2jgAOoR_sM4jWzzrQh5yktozN7ylI6v-kCRR5xNSe_hwx0Poacm4HjhbgaGXH7x2I88szAhXn9T-qboRcLgJpc4uAwyIWaLOEVUGx0sSX77uEgicqwGS7YYQVcIrdUPGU-VBzW3Ihw00UoCEuR2BUhTXBekVX4bd34a0H2q6I7TJJBcBtEyQ2jhwCdM", "Габриэле Муччино"),
    new Movie("Любовь и голуби", "Ликвидируя неисправность лебедки, Василий Кузякин получил травму и путевку на юг. Встретил роковую женщину Раису Захаровну и... вернулся Вася с курорта не к себе в деревню, а в дом Раисы Захаровны. Началась для него новая жизнь, в которой было много непонятного и интересного, но не было дома, где остались Надя, дети и голуби...",
        "СССР", "мелодрамма", "Владимир Гуркин", "Александр Литвинов","Юрий Невский", "Валентин Левашов","","","12+","107 мин","07-01-1985","https://kinopoisk-ru.clstorage.net/P289yi452/ae314e0q/8HFpi3MrXK_Tp6wnxFePx_7F2qa8aLSxZ6ktuYMrxaAcgf_DEKnPbNirNkOcZf-rp9X0_Wa-iUCFIN2SJOWJ-xS1TOoDXq2-IzK5xrDHyrKr9BtDaSywZeLNbGi2_nBS74N84YeLrJ5aqfBX-EEe3hJgkPkmey0QIZHcpQKB6E6TYLq4AEqPKkMl_9C3J33Wr5QdJj94gRJ2yDv4oum0ML_xvMNVWg_MOJvQNenTKmwz8sAZBRl_sebRXoQR5tmfAiIomJOKH0kRxO5xBKUOh132v-bM-ZKzRtl4SmA4BvO_Ya4jF1lNXLl4QSYZkoksAqEimTZ7fyLVoh1HsuR7LQAjiKuz2V_5YVc_MCW0naT-FuwlL3vA0dfLWksSuwdBrEEvwQToXo3KuDE2KFLLL5Fg06oViP5B9tIfR1AFCP5AAwuo0gvdO-HHT9N1Zo_FjndvBT1awPM3aPj70SpWAG_yzaA2m8wu6dkgRBmgCPwAwlBJNRrM08cS3nRhJbheovLb2kCYnyqQdZxxNRXNBrxWLPfNWuICZzsYyBEZx2BdY-2TFRhNDorKUtRJ0_ifAeJSeHYZXaHmcO2XYYXKzoAjedqhy1yJwndP05TU7XV_tOxXLnnBMzVZCwlDC-fDPpDuIYSIH4z6-fD3KjD7LsBw0wtWaw-hBPI8puIkSr-gwPu4Eer_CkDnbVAG189k_jScZn1pcOFXeTg6Uak0Q07RfFG2qj8eSOgwRBnAWJ-R8RIZtai8Q5XwH-TAZKvMgCEJ-LAYXhuiRw8h92YMhL8VHMVcCFLCR9tJiFPKN5A9Uu3gxohergq6Ibb7oArMs3HheqSrnxAHUM7GAzaqraNiqJoB-Ow6oAScMHbVT2UcpH72fuqi46SKuZmRWLUzDkBOM7V77jw5-3GHqGM7TwFSUlr1KTzg12PchrGluL2hEsqpEniNucH0znAHFo1GntVs5o6b4xN3uTo6M5nUE73hXGO1Sxwc-IsixAmwKm4jYKGYxbqOoEXT7IRzpyiMglGI-5O6bhoDV8wyhUdvpL4HfnbeauAyJcqqSgIYB3NdA_3AhGverptb0gZrI-ousqLTShUbrpGFUf3mgxabzVJwiBmTSh76QEcd8bXlzKVcJW6nXbhh0TfL-9hBGLfwfIJcAyRID53Zu8BkmRNoHaPQgCrkmv0wFjLdhhIXWH5SsVjpoFhd6-IXP9AWpI4lDBTMVX760FK0yLt5kPmn8_8h3rN2aP3v2DhB5wmjy77wwfEo9vl_IQYz3QWCNWnNkWGKCwFpT4vhVn9QpWfd5NwlLLV_SaNR5Kp6C1P4ZjJ_4Z9zFUgP3doL0AQLQRqc0VMzm0cZDtMVEnzUsGWKnMCjCBijSp8JcEc8YWe3f7X8FzyFD0rxElaIixuQy2TQffP98XVJvx9KWTA2WbD5XwAg8KqXm67yh5IutqNnix-SoJi4Yiv_OpNWfXMFRr90Pzd_5LxbMWF1KkvKIeinI36hDCH2q47smEsx1fsRyB_gwNN7FLitQ_UhfzShppi-Y3KqisFarNojV4-ghwbcBI5G_SbtqzESNzv72_KJdYPf4j9RRLr_n5pL4NYYUgq9kVATqATbTRDHAa5WkVdYjuFCOXpjamzJ8ycd46dnDxSuJLzEzlljQ3Uby1qxajQB7XDOo2S5D1z4WuBH6UAqLzIgkug3y90wx9NslBJmSR4zIpn7YyivuKDmzlEHR70E_RQMZrz54gAnSKlKY4gUcS5BfINlSn09SnvRtjnxCx6SwtKpZOsO0OYyLaYj9qlNQuNZ-aApfQpTtLxgF0bfB9-GLLZsu5MyNwjISFOpleOOs87jZivPLNpZQHSZYniN01EiSOf6zUI2Yqxm4OcqvpCwubtBai8p0_c-MnSFPnTeFr5kHwvQgiVKeDmR64Wyv_Fd41RLzh9qmACV-wPoXlDTU0rX-q1SNyLuVpGn241S8yr5IJpP6CH1_3I3Z08H_tTcVszbIXM12Qjr8ps3g80xT-DVak3c-8ky5ykA2mwiwDE7Bhq-8hVB_eSCNWiMMeC6qXN5PIsS5P0hN4e9ZJ40H3dPezBSFXt7mwLb1yN-88_A1to93ni68FYocssdgAAS6xQKvEDEcm73YufZjQFCyrsjGz_LIBVsQiZm3CWuZvy0LkuC0Ub4qioiy2VDneG-E4QqHp1auXAHq-BIXkHjU6oHC42AdhG_BYEXG_yzQWl4o2oOi-BGr3KEZT4lz-QNNwx7YvF2WRkYYqs38C6RjkMES81vyPpCZenROs8iotN5hwotckTxrSSgNLl9Y0Nby2FabbkD901gVLc-ds03DsSuitCgNrtZ6wD5p-E-wTyh5KvtTHiZ0uRpoQjds4DyiEQrPQIXM96k4UbYr3KgGDsBuM15cdUOEnUFTwSdth_kzssAgcUrODqQyzfjXPG_8Ya7Dj6biCG06pLbHwOxMqg0mU5AF_AupDEVCVxzYEqaIBrt-aP0TyKmVD11_YafVT4o4CJ1qFobwolUw-xBTtO2-82NagrBhxlBOhyxcyJpFNvPgzWg39Vyd9q8EhJKiuJbfvui933h5uYcJxx23IZtqTMjp1triBMrRkIfcu3Bhkkc7ngbsJQ58IttsHHxeRcJDnO1wN12M7RKvPHhCDsha0_pEiZMk3amv6cu5Lx2DylQ86TI6GnheEVDrVEvczX5r_66qfOlCLB6rZHj0aqnK54AZfCdBAP3-b8DU6g4E9l-y2NHPiEU5r833IafFE0JIOF3W_pZIwnXEyyBHHGHWF6euKkgNMlQqI2jgAOoR_sM4jWzzrQh5yktozN7ylI6v-kCRR5xNSe_hwx0Poacm4HjhbgaGXH7x2I88szAhXn9T-qboRcLgJpc4uAwyIWaLOEVUGx0sSX77uEgicqwGS7YYQVcIrdUPGU-VBzW3Ihw00UoCEuR2BUhTXBekVX4bd34a0H2q6I7TJJBcBtEyQ2jhwCdM",   "Владимир Меньшов")
);


console.log(document.getElementById('AddFlm'));




function addFilm(){
    
    List_Film.push(
        new Movie(
            document.getElementById("form_name").value,
            document.getElementById("text_film").value,
            document.getElementById("form_country").options[document.getElementById("form_country").options.selectedIndex].text,

            document.getElementById("form_screenwriter").value,
            document.getElementById("form_genre").value,
            document.getElementById("form_producer").value,
            document.getElementById("form_operator").value,
            document.getElementById("form_composer").value,
            document.getElementById("form_budget").value,
            document.getElementById("form_fees").value,
            document.getElementById("form_rating").options[document.getElementById("form_rating").options.selectedIndex].text,
            document.getElementById("form_durat").value,
            document.getElementById("form_date").value,
            document.getElementById("link_img").value,
            document.getElementById("form_director").value
        )
    );
    
    console.log(List_Film.length);
    load_fiml(List_Film[List_Film.length-1]);      
    clear_films();
    filter();  
    clearForm();
    save();
    


   

}


function load_films(){
    List_Film.forEach(function(item,i){
        //console.log(item);
        load_fiml(item);
    });
}

function load_fiml(item){

    let body = document.getElementsByClassName("list_film")[0];
    
   // console.log(item);

    let movie = document.createElement("div");
    movie.className = "movie";
    let img = document.createElement("img");
    img.className = "photo";
    img.src = item.poster;

    let film_info = document.createElement("div");
    film_info.className = "film_info";

    let name = document.createElement("h2");
    name.className = "name";
    name.innerText =item.name;

    let more_info = document.createElement("div");
    more_info.className = "more_info";



    let country_container = document.createElement("div");
    country_container.className = "country_container"

    let p_country_container = document.createElement("p");
    p_country_container.innerText = "Страна:";
    
    let country = document.createElement("p");
    country.className = "country";
    country.innerText = item.country;

    country_container.appendChild(p_country_container);
    country_container.appendChild(country);
    more_info.appendChild(country_container);




    let genre_container = document.createElement("div");
    genre_container.className = "genre_container"

    let p_genre_container = document.createElement("p");
    p_genre_container.innerText = "Жанр:";
    
    let genre = document.createElement("p");
    genre.className = "genre";
    genre.innerText = item.genre;

    genre_container.appendChild(p_genre_container);
    genre_container.appendChild(genre);
    more_info.appendChild(genre_container);




    let director_container = document.createElement("div");
    director_container.className = "director_container"

    let p_director_container = document.createElement("p");
    p_director_container.innerText = "Режисёр:";
    
    let director = document.createElement("p");
    director.className = "director";
    let arr = new Array();
    arr = item.director;
    director.innerText = arr.toString().replace(new RegExp(",",'g'),", ");

    director_container.appendChild(p_director_container);
    director_container.appendChild(director);
    more_info.appendChild(director_container);




    let screenwriter_container = document.createElement("div");
    screenwriter_container.className = "screenwriter_container"

    let p_screenwriter_container = document.createElement("p");
    p_screenwriter_container.innerText = "Сценарист:";
    
    let screenwriter = document.createElement("p");
    screenwriter.className = "screenwriter";
    screenwriter.innerText = item.screenwriter;

    screenwriter_container.appendChild(p_screenwriter_container);
    screenwriter_container.appendChild(screenwriter);
    more_info.appendChild(screenwriter_container);

    



    let producer_container = document.createElement("div");
    producer_container.className = "producer_container"

    let p_producer_container = document.createElement("p");
    p_producer_container.innerText = "Продюссер:";
    
    let producer = document.createElement("p");
    producer.className = "producer";
    producer.innerText = item.producer;

    producer_container.appendChild(p_producer_container);
    producer_container.appendChild(producer);
    more_info.appendChild(producer_container);



    let operator_container = document.createElement("div");
    operator_container.className = "operator_container"

    let p_operator_container = document.createElement("p");
    p_operator_container.innerText = "Оператор:";
    
    let operator = document.createElement("p");
    operator.className = "producer";
    operator.innerText = item.operator;

    operator_container.appendChild(p_operator_container);
    operator_container.appendChild(operator);
    more_info.appendChild(operator_container);



    let composer_container = document.createElement("div");
    composer_container.className = "composer_container"

    let p_composer_container = document.createElement("p");
    p_composer_container.innerText = "Композитор:";
    
    let composer = document.createElement("p");
    composer.className = "composer";
    composer.innerText = item.composer;

    composer_container.appendChild(p_composer_container);
    composer_container.appendChild(composer);
    more_info.appendChild(composer_container);



    let budget_container = document.createElement("div");
    budget_container.className = "budget_container"

    let p_budget_container = document.createElement("p");
    p_budget_container.innerText = "Бюджет:";
    
    let budget = document.createElement("p");
    budget.className = "budget";
    budget.innerText = item.budget;

    budget_container.appendChild(p_budget_container);
    budget_container.appendChild(budget);
    more_info.appendChild(budget_container);




    let fees_container = document.createElement("div");
    fees_container.className = "fees_container"

    let p_fees_container = document.createElement("p");
    p_fees_container.innerText = "Сборы:";
    
    let fees = document.createElement("p");
    fees.className = "fees";
    fees.innerText = item.fees;

    fees_container.appendChild(p_fees_container);
    fees_container.appendChild(fees);
    more_info.appendChild(fees_container);



    let rating_container = document.createElement("div");
    rating_container.className = "fees_container"

    let p_rating_container = document.createElement("p");
    p_rating_container.innerText = "Возрастной рейтинг:";
    
    let rating = document.createElement("p");
    rating.className = "rating";
    rating.innerText = item.rating;

    rating_container.appendChild(p_rating_container);
    rating_container.appendChild(rating);
    more_info.appendChild(rating_container);




    let durat_container = document.createElement("div");
    durat_container.className = "durat_container"

    let p_durat_container = document.createElement("p");
    p_durat_container.innerText = "Длительность:";
    
    let durat = document.createElement("p");
    durat.className = "durat";
    durat.innerText = item.durat;

    durat_container.appendChild(p_durat_container);
    durat_container.appendChild(durat);
    more_info.appendChild(durat_container);



    let date_container = document.createElement("div");
    date_container.className = "date_container"

    let p_date_container = document.createElement("p");
    p_date_container.innerText = "Дата выхода:";
    
    let date = document.createElement("p");
    date.className = "date";
    date.innerText = item.date;

    date_container.appendChild(p_date_container);
    date_container.appendChild(date);
    more_info.appendChild(date_container);


    film_info.appendChild(name);
    film_info.appendChild(more_info);

    movie.appendChild(img);
    movie.appendChild(film_info);


    body.appendChild(movie);


}




function clearForm(){
    document.getElementById("form_name").value = "";
    document.getElementById("form_country").options.selectedIndex = 0;
    document.getElementById("form_screenwriter").value = "";
    document.getElementById("form_genre").value = "";
    document.getElementById("form_producer").value= "";
    document.getElementById("form_operator").value = "";
    document.getElementById("form_composer").value = "";
    document.getElementById("form_budget").value = "";
    document.getElementById("form_fees").value = "";
    document.getElementById("form_rating").options.selectedIndex = 0;
    document.getElementById("form_durat").value = ""; 
    document.getElementById("form_date").value ="";
    document.getElementById("link_img").value ="";
    document.getElementById("form_director").value = "";
    document.getElementById("text_film").value = "";
    document.getElementById("container_form").style.display = "none";
}

let active_film;

let Name_Film = setInterval(() => {
    Array.from(document.getElementsByClassName("name")).forEach((item,i)=>item.onclick = () => more_information_film_load(i));
   // console.log(Name_Film);
}, 1000);




function more_information_film_load(index){
    console.log(index);
    active_film = index;
    document.getElementById("photo_more").src = List_Film[index].poster;
    document.getElementById("name_more").innerText = List_Film[index].name;
    document.getElementById("country_more").innerText = List_Film[index].country;
    document.getElementById("genre_more").innerText = List_Film[index].genre;
    document.getElementById("director_more").innerText = List_Film[index].director;
    document.getElementById("screenwriter_more").innerText = List_Film[index].screenwriter;
    document.getElementById("producer_more").innerText = List_Film[index].producer;
    document.getElementById("operator_more").innerText = List_Film[index].operator;
    document.getElementById("composer_more").innerText = List_Film[index].composer;
    document.getElementById("budget_more").innerText = List_Film[index].budget;
    document.getElementById("fees_more").innerText = List_Film[index].fees;
    document.getElementById("rating_more").innerText = List_Film[index].rating;
    document.getElementById("durat_more").innerText = List_Film[index].durat;
    document.getElementById("date_more").innerText = List_Film[index].date;
    document.getElementById("scene_text").innerText = List_Film[index].text;

    if (List_Film[index].comment.length != 0){
        List_Film[index].comment.forEach((item,i) => {
            console.log(item);
            load_comment(item);
        })
    }
    

    document.getElementById("film_more_info").style.display = "flex";
}


document.getElementById("delete").addEventListener('click', () => {
    document.getElementsByClassName('movie')[active_film].remove();
    List_Film.splice(active_film,1);
    document.getElementById('film_more_info').style.display = 'none';
    save();
    clearComment();
})

document.getElementById("add_comment").addEventListener('click', () => document.getElementsByClassName('write_comment')[0].style.height = '200px')

document.getElementById('end_comment').addEventListener('click', () => {
    List_Film[active_film].addComment(new Comment(
        document.getElementById('my_nick').value,
        document.getElementById('new_com').value,
        document.getElementById('marks').options[document.getElementById("marks").options.selectedIndex].text
    ))
    document.getElementById('my_nick').value='',
    document.getElementById('new_com').value='',
    document.getElementById("marks").options.selectedIndex = 0;
    document.getElementsByClassName('write_comment')[0].style.height = '0';
    load_comment(List_Film[active_film].comment[List_Film[active_film].comment.length-1]);
})

function load_comment(LF){
    //console.log(LF);


    let all_c = document.getElementById('all_comments');
    let hr = document.createElement('hr');

    let full_com = document.createElement('div');
    full_com.className = 'full_comment';

    let name_rat = document.createElement('div');
    name_rat.className='name_rat';

    let nick = document.createElement('div');
    nick.className = 'nick';
    let p_nick = document.createElement('p');
    p_nick.innerText = LF.user;
    nick.appendChild(p_nick);

    let rat = document.createElement('div');
    rat.className = 'rat';
    let p = document.createElement('p');
    p.innerText = 'Оценка:';
    let p_rat = document.createElement('p');
    p_rat.innerText = LF.rating;
    rat.appendChild(p);
    rat.appendChild(p_rat);

    let commment = document.createElement('div');
    commment.className = 'commment';
    let p_commment = document.createElement('p');
    p_commment.innerText = LF.text_comment;
    commment.appendChild(p_commment);


    name_rat.appendChild(nick);
    name_rat.appendChild(rat);
    full_com.appendChild(hr);
    full_com.appendChild(name_rat);
    full_com.appendChild(commment);
    all_c.appendChild(full_com);
}

document.getElementsByClassName("close_film")[0].addEventListener('click', () => {
    document.getElementById("film_more_info").style.display = "none";
    clearComment();
})

function clearComment(){
   let full_c =  document.getElementsByClassName("full_comment");
   //full_c.forEach((item, i) => item.remove());
   for (i=full_c.length-1; i>=0; i--){
       full_c[i].remove();
   }
}



function clear_films() {

    let arr = Array.from(document.getElementsByClassName("movie"));
    for (i=arr.length-1; i>=0; i--){
        document.getElementsByClassName("movie")[i].remove();
    }


}

function filter(){
    let ger = document.getElementById("filter_gerne").value;
    if (ger == null || ger == undefined) ger = "";
    console.log(ger);
    let count = document.getElementById("filter_country").value;
    if (count == null || count == undefined) count = "";
    console.log(count);
    let dat = document.getElementById("filter_date").value;
    if (dat == null || dat == undefined) {
        dat = "";
    }
    //else dat = converDate(dat);
    
    console.log(dat);

    
    
    for (i = 0; i<List_Film.length; i++){
        if (ger!=""&& List_Film[i].genre != ger){
           // arr.slice(i,i);
            console.log(i);
            continue;
        }
        if (count!=""&& List_Film[i].country != count){
            //arr.slice(i,i);
            console.log(i);
            continue;
        }
        if (dat!=""&& List_Film[i].date.substr(6) != dat){
            //arr.slice(i,i);
            console.log(i);
            continue;
        }
        load_fiml(List_Film[i])
            
        //console.log(arr[i]);
    }
    //arr.forEach((x)=>load_fiml(x));

}

document.getElementById("filter_button").addEventListener("click", () => {
    clear_films();
    filter();
})


function converDate(data){
    if(data === undefined) return "";
    let str = data.split("-");
    data=str[0]+"."+str[1]+"."+str[2];
    return data;
}


function save(){
    localStorage.setItem("movies", JSON.stringify(List_Film));
}


function load_save(){
    if(localStorage.getItem("movies"))
        List_Film = JSON.parse(localStorage.getItem("movies"));
    load_films()
}

let str
navigator.geolocation.getCurrentPosition(function(position) {
    let lat = position.coords.latitude;
    let lng = position.coords.longitude;
    console.log(lat+" "+lng);
    str = "http://api.openweathermap.org/data/2.5/weather?&lat="+lat+"&lon="+lng+"&appid=9cda97cbf9e1bfab64346f9d59136220";
})

//fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=94686ec08a38f6265fa2c8db18adab77`)
function API(){
    fetch(str)
        .then(function(resp) {return resp.json() })
        .then(function(data){
            console.log(data);
            let icon = data.weather[0]['icon'];
            //let img_str = '<img src="http://openweathermap.org/img/wn/'+icon+'@2x.png>"';
            let img = document.createElement('img');
            img.src = "http://openweathermap.org/img/wn/"+icon+"@2x.png";

            document.getElementsByClassName("city")[0].innerText = data.name;
            document.getElementsByClassName("icon")[0].appendChild(img);
            document.getElementsByClassName("grad")[0].innerHTML = Math.round(data.main.temp - 273)+'&deg';
        })
        .catch((e) => console.error(e))
}


document.getElementById("weathe_info").addEventListener('click', () =>{
    document.getElementById("weathe_info").style.display="none";
    document.getElementsByClassName("weather")[0].style.display = "flex";
    API();
})
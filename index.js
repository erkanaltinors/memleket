function Memleket({
    formId,
    provinceId,
    countyId,
    townId,
    districtId,
    streetId,
    provinceSort,
    loadStyle
}){
    const cities = [
        {
            city: "Adana",
            id: 1,
            populationId: 4
        },
        {
            city: "Adıyaman",
            id: 2,
            populationId: 5
        },
        {
            city: "Afyonkarahisar",
            id: 3,
            populationId: 6
        },
        {
            city: "Ağrı",
            id: 4,
            populationId: 7
        },
        {
            city: "Aksaray",
            id: 5,
            populationId: 8
        },
        {
            city: "Amasya",
            id: 6,
            populationId: 9
        },
        {
            city: "Ankara",
            id: 7,
            populationId: 2
        },
        {
            city: "Antalya",
            id: 8,
            populationId: 10
        },
        {
            city: "Ardahan",
            id: 9,
            populationId: 11
        },
        {
            city: "Artvin",
            id: 10,
            populationId: 12
        },
        {
            city: "Aydın",
            id: 11,
            populationId: 13
        },
        {
            city: "Balıkesir",
            id: 12,
            populationId: 14
        },
        {
            city: "Bartın",
            id: 13,
            populationId: 15
        },
        {
            city: "Batman",
            id: 14,
            populationId: 16
        },
        {
            city: "Bayburt",
            id: 15,
            populationId: 17
        },
        {
            city: "Bilecik",
            id: 16,
            populationId: 18
        },
        {
            city: "Bingöl",
            id: 17,
            populationId: 19
        },
        {
            city: "Bitlis",
            id: "18",
            populationId: "20"
        },
        {
            city: "Bolu",
            id: "19",
            populationId: "21"
        },
        {
            city: "Burdur",
            id: "20",
            populationId: "22"
        },
        {
            city: "Bursa",
            id: "21",
            populationId: "23"
        },
        {
            city: "Çanakkale",
            id: "22",
            populationId: "24"
        },
        {
            city: "Çankırı",
            id: "23",
            populationId: "25"
        },
        {
            city: "Çorum",
            id: "24",
            populationId: "26"
        },
        {
            city: "Denizli",
            id: "25",
            populationId: "27"
        },
        {
            city: "Diyarbakır",
            id: "26",
            populationId: "28"
        },
        {
            city: "Düzce",
            id: "27",
            populationId: "29"
        },
        {
            city: "Edirne",
            id: "28",
            populationId: "30"
        },
        {
            city: "Elazığ",
            id: "29",
            populationId: "31"
        },
        {
            city: "Erzincan",
            id: "30",
            populationId: "32"
        },
        {
            city: "Erzurum",
            id: "31",
            populationId: "33"
        },
        {
            city: "Eskişehir",
            id: "32",
            populationId: "34"
        },
        {
            city: "Gaziantep",
            id: "33",
            populationId: "35"
        },
        {
            city: "Giresun",
            id: "34",
            populationId: "36"
        },
        {
            city: "Gümüşhane",
            id: "35",
            populationId: "37"
        },
        {
            city: "Hakkâri",
            id: "36",
            populationId: "38"
        },
        {
            city: "Hatay",
            id: "37",
            populationId: "39"
        },
        {
            city: "Iğdır",
            id: "38",
            populationId: "40"
        },
        {
            city: "Isparta",
            id: "39",
            populationId: "41"
        },
        {
            city: "İstanbul",
            id: "40",
            populationId: "1"
        },
        {
            city: "İzmir",
            id: "41",
            populationId: "3"
        },
        {
            city: "Kahramanmaraş",
            id: "42",
            populationId: "42"
        },
        {
            city: "Karabük",
            id: "43",
            populationId: "43"
        },
        {
            city: "Karaman",
            id: "44",
            populationId: "44"
        },
        {
            city: "Kars",
            id: "45",
            populationId: "45"
        },
        {
            city: "Kastamonu",
            id: "46",
            populationId: "46"
        },
        {
            city: "Kayseri",
            id: "47",
            populationId: "47"
        },
        {
            city: "Kilis",
            id: "48",
            populationId: "48"
        },
        {
            city: "Kırıkkale",
            id: "49",
            populationId: "49"
        },
        {
            city: "Kırklareli",
            id: "50",
            populationId: "50"
        },
        {
            city: "Kırşehir",
            id: "51",
            populationId: "51"
        },
        {
            city: "Kocaeli",
            id: "52",
            populationId: "52"
        },
        {
            city: "Konya",
            id: "53",
            populationId: "53"
        },
        {
            city: "Kütahya",
            id: "54",
            populationId: "54"
        },
        {
            city: "Malatya",
            id: "55",
            populationId: "55"
        },
        {
            city: "Manisa",
            id: "56",
            populationId: "56"
        },
        {
            city: "Mardin",
            id: "57",
            populationId: "57"
        },
        {
            city: "Mersin",
            id: "58",
            populationId: "58"
        },
        {
            city: "Muğla",
            id: "59",
            populationId: "59"
        },
        {
            city: "Muş",
            id: "60",
            populationId: "60"
        },
        {
            city: "Nevşehir",
            id: "61",
            populationId: "61"
        },
        {
            city: "Niğde",
            id: "62",
            populationId: "62"
        },
        {
            city: "Ordu",
            id: "63",
            populationId: "63"
        },
        {
            city: "Osmaniye",
            id: "64",
            populationId: "64"
        },
        {
            city: "Rize",
            id: "65",
            populationId: "65"
        },
        {
            city: "Sakarya",
            id: "66",
            populationId: "66"
        },
        {
            city: "Samsun",
            id: "67",
            populationId: "67"
        },
        {
            city: "Şanlıurfa",
            id: "68",
            populationId: "68"
        },
        {
            city: "Siirt",
            id: "69",
            populationId: "69"
        },
        {
            city: "Sinop",
            id: "70",
            populationId: "70"
        },
        {
            city: "Sivas",
            id: "71",
            populationId: "71"
        },
        {
            city: "Şırnak",
            id: "72",
            populationId: "72"
        },
        {
            city: "Tekirdağ",
            id: "73",
            populationId: "73"
        },
        {
            city: "Tokat",
            id: "74",
            populationId: "74"
        },
        {
            city: "Trabzon",
            id: "75",
            populationId: "75"
        },
        {
            city: "Tunceli",
            id: "76",
            populationId: "76"
        },
        {
            city: "Uşak",
            id: "77",
            populationId: "77"
        },
        {
            city: "Van",
            id: "78",
            populationId: "78"
        },
        {
            city: "Yalova",
            id: "79",
            populationId: "79"
        },
        {
            city: "Yozgat",
            id: "80",
            populationId: "80"
        },
        {
            city: "Zonguldak",
            id: "81",
            populationId: "81"
        }
    ];
    this.formId = formId;
    this.provinceId = provinceId;
    this.countyId = countyId;
    this.townId = townId;
    this.districtId = districtId;
    this.streetId = streetId;
    this.provinceSort = provinceSort;
    this.loadStyle = loadStyle;

    const cityFormElement = document.querySelector(`#${this.formId} #${this.provinceId}`); 


    if(cityFormElement){
        switch(this.provinceSort){
            case 'population':
                cities.sort((a,b) => a.populationId - b.populationId);
                cities.map(city => {
                    let cityOption = document.createElement("option");
                    let cityValue = document.createTextNode(`${city.city}`);
                    cityOption.value = city.city;
                    cityOption.setAttribute("role", "option");
                    cityOption.appendChild(cityValue);
                    cityFormElement.appendChild(cityOption);
                });
                break;
            case 'alphabetical':
                cities.map(city => {
                    let cityOption = document.createElement("option");
                    let cityValue = document.createTextNode(`${city.city}`);
                    cityOption.value = city.city;
                    cityOption.appendChild(cityValue);
                    cityFormElement.appendChild(cityOption);
                });
                break;
            default:
                cities.map(city => {
                    let cityOption = document.createElement("option");
                    let cityValue = document.createTextNode(`${city.city}`);
                    cityOption.value = city.city;
                    cityOption.appendChild(cityValue);
                    cityFormElement.appendChild(cityOption);
                });
        }
    }
}

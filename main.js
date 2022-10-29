//CIA YRA VIENMACIAI MASYVAI
//Sugeneruokite masyvą iš 30 elementų (indeksai nuo 0 iki 29), kurių reikšmės yra atsitiktiniai skaičiai nuo 5 iki 25.

console.log("VIENMACIAI MASYVAI 1 uzduotis");
let arrayNum = [];
let arrayNumLength = 30;
let max4 = 25;
let min4 = 5;
for (let i = 0; i < arrayNumLength; i++) {
    arrayNum[i] = Math.round(Math.random() * (max4 - min4) + min4);
}
console.log(arrayNum);


console.log("2 uzduotis");
//Suskaičiuokite kiek masyve yra reikšmių didesnių už 10;

let didesniUz10 = 0;
for (let i = 0; i < arrayNum.length; i++) {
    if (arrayNum[i] > 10) {
        didesniUz10++;
    }
}
console.log("Didesniu uz 10 masyve yra : " + didesniUz10);


console.log("3 uzduotis");
//Raskite didžiausią masyvo reikšmę;





let didziausiaMasyvoReiksme = 0;
//let didziausiosReiksmesIndeksas = 0;

for (let i = 0; i < arrayNum.length; i++) {
    if (arrayNum[i] > didziausiaMasyvoReiksme) {
        didziausiaMasyvoReiksme = arrayNum[i];
        //didziausiosReiksmesIndeksas = i;
    }
}
console.log('Didžiausia masyvo reikšme:', didziausiaMasyvoReiksme);


console.log("4 uzduotis");
//Suskaičiuokite visų reikšmių sumą;

let = reiksmiuSuma = 0;

for (let i = 0; i < arrayNum.length; i++) {
    reiksmiuSuma += arrayNum[i];

}
console.log('Reiksmiu suma : ' + reiksmiuSuma);

console.log("4 uzduotis");
//Sukurkite naują masyvą, kurio reikšmės yra 1 uždavinio masyvo reikšmes minus tos reikšmės indeksas;


let naujasMasyvas = [];
for (let i = 0; i < arrayNum.length; i++) {
    naujasMasyvas[i] = arrayNum[i] - i;
}
console.log(naujasMasyvas);

console.log("5 uzduotis");
//Papildykite masyvą papildomais 10 elementų su reikšmėmis nuo 5 iki 25, kad bendras masyvas padidėtų iki indekso 39;


let arraylength = arrayNum.length;
let reiksme = Math.floor(Math.random() * (20)) + 5;
for (let i = arraylength; i < arraylength.length; i++) {
    arrayNum[i] = reiksme;

}

console.log("6 uzduotis");
//Iš masyvo elementų sukurkite du naujus masyvus. Vienas turi būti sudarytas iš neporinių indekso reikšmių, o kitas iš porinių;

let masyvasPorinis = [];
let masyvasNeporinis = [];

for (let i = 0; i < arrayNum.length; i++) {
    if (i % 2 === 0) {
        masyvasPorinis.push(arrayNum[i])
    } else {
        masyvasNeporinis.push(arrayNum[i])
    }
}

console.log(masyvasPorinis, masyvasNeporinis);


console.log("7 uzduotis");
//Masyvo elementus su poriniais indeksais padarykite lygius 0 jeigu jie didesni už 15;


console.log('Pirminis masyvas:', arrayNum);

for (var i = 0; i < arrayNum.length; i++) {
    if (!(i % 2) && (arrayNum[i] > 15)) {
        arrayNum[i] = 0;
    }
}
console.log('Masyvas po pakeitimų:', arrayNum);

console.log("8 uzduotis");
//Suraskite pirmą (mažiausią) indeksą, kurio elemento reikšmė didesnė už 10;

let maziausiasIndeksas = 0;
for (let i = 0; i < arrayNum.length; i++) {
    if (arrayNum[i] > 10) {
        maziausiasIndeksas = i;
        break;

    }
}

console.log("indeksas pirmo elemento kuris yra didesnis uz 10: " + maziausiasIndeksas);

console.log("9 uzduotis");
//Naudodami funkciją unset() iš masyvo ištrinkite visus elementus turinčius porinį indeksą;

for (let i = 0; i < arrayNum.length; i++) {
    if (i % 2 == 0) {
        delete arrayNum[i];
    }
}
console.log(arrayNum);


console.log("3 uzduotis");
//Sugeneruokite masyvą, kurio reikšmės atsitiktinės raidės A, B, C ir D, o ilgis 200. Suskaičiuokite kiek yra kiekvienos raidės.

let raidziuMasyvas = []; // deklaruotas Objektas(Masyvas) ;



let a = 0; // deklaruotas kintamasis, kuriame sumuosime raides A;
let b = 0; // deklaruotas kintamasis, kuriame sumuosime raides B;
let c = 0; // deklaruotas kintamasis, kuriame sumuosime raides C;
let d = 0; // deklaruotas kintamasis, kuriame sumuosime raides D;



for (let i = 0; i < 200; i++) {
    randomNumberOfElements = Math.floor(Math.random() * (4 - 1 + 1) + 1);
    // generuojame atsitiktini Elementu skaiciu Objektui "ath.floor(Math.random() * (4 - 1 + 1) + 1)";
    if (randomNumberOfElements === 0) {
        raidziuMasyvas[i] = 'A';
        a++;
    } else if (randomNumberOfElements === 1) {
        raidziuMasyvas[i] = 'B';
        b++;
    } else if (randomNumberOfElements === 2) {
        raidziuMasyvas[i] = 'C';
        c++;
    } else {
        raidziuMasyvas[i] = 'D';
        d++;
    }
}
console.log(raidziuMasyvas);
console.log(`Masyve yra ${a} A, ${b} B, ${c} C ir ${d} D raides.`);

console.log("4 uzduotis");
//Išrūšiuokite 3 uždavinio masyvą pagal abecėlę.

console.log(raidziuMasyvas.sort());

console.log("5 uzduotis");
//Sugeneruokite 3 masyvus pagal 3 uždavinio sąlygą. Sudėkite masyvus, sudėdami atitinkamas reikšmes. Paskaičiuokite kiek unikalių reikšmių kombinacijų gavote.


console.log("6 uzduotis");

//Sugeneruokite du masyvus, kurių reikšmės yra atsitiktiniai skaičiai nuo 100 iki 999. Masyvų ilgiai 100. Masyvų reikšmės turi būti unikalios savo masyve (t.y. neturi kartotis).
let combinedArray = "";
let combinedArray2 = [];
let arrays = [[], [], []];
let newNum = 0;


for (let a = 0; a < 200; a++) {
    for (let i = 0; i < arrays.length; i++) {
        newNum++;
        combinedArray += arrays[i][a];
    }
    combinedArray += " ";
}
console.log(arrays);
console.log(newNum);
console.log(combinedArray);
combinedArray2 = combinedArray.split(" ");

console.log(combinedArray2);

let min5 = 100;
let max5 = 999;
let length = 100;
let array4 = [];
let array5 = [];


function createArray(array) {
    for (let i = 0; i < length; i++) {
        let randomNum = Math.round(Math.random() * (max5 - min5) + min5);
        array[i] = randomNum
    }
}

function getUniqueArray(_array) {
    // in the newArray get only the elements which pass the test implemented by the filter function.
    // the test is to check if the element's index is same as the index passed in the argument.
    let newArray = _array.filter((element, index, array) => array.indexOf(element) === index);
    return newArray
}


while (true) {
    createArray(array4);
    array4 = getUniqueArray(array4);
    if (array4.length == length) {
        console.log(array4);
        break;
    }
}

while (true) {
    createArray(array5);
    array5 = getUniqueArray(array5);
    if (array5.length == length) {
        console.log(array5);
        break;
    }
}


console.log("10 uzduotis");

//Sugeneruokite 10 skaičių masyvą pagal taisyklę: Du pirmi skaičiai- atsitiktiniai nuo 5 iki 25. Trečias, pirmo ir antro suma. Ketvirtas- antro ir trečio suma. Penktas trečio ir ketvirto suma ir t.t.
let taisykle = [];
for (let i = 0; i < 10; i++) {
    if (i < 2) {
        taisykle[i] = Math.round(Math.random() * (20) + 5);;
    } else {
        taisykle[i] = taisykle[i - 1] + taisykle[i - 2];
    }
}
console.log(taisykle);
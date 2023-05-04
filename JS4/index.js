
// (function () 
// { 

//   var skaicius = 0;


//   while (skaicius < 5) {
//     var tekstas = document.getElementById('info-div').textContent;
//     document.getElementById('info-div').textContent = tekstas + 'Hi';
//     skaicius++;

//   }



// })();



var number_1 = 5.187;
// Math veiksmas, sukurti random skaičių nuo 0 iki 1 ir padauginam iš 100, kad pakeltumėme skaičių iki 100var random_100 = Math.random() * 100// Su apvaliname rezultatą į reiksmę be kableliovar rounded = Math.round(random_100)
// While loopo skaičiaus salyga, su pradine reikmše - 1var skaicius_while = 1;
// While ciklas kuris suka viduje kodą kol salyga gražina teigiamaiwhile (skaicius_while <= 5) {
console.log('Dabartinis skaicius ', skaicius_while)
  // Pridedame prie pradinės salygos 1 kiekvieną kartą bevygdant kodui.  skaicius_while++;
// }
// While do skaičiaus pradinė reikmšėvar skaicius_do = 1;
// Do visada įsivygdo vieną kartą ir tik tada tikrina ar salyga atitinkado {
console.log('Dabartinis skaicius ', skaicius_do)
skaicius_do++;
// While (kol) salyga atitinka teigiamai} while (skaicius_do <= 5)
// Pasiimame document. objektą, iš jo panaudojame fukncija kuri pasiima elementą pagal IDvar byId = document.getElementById('unikalus_divas');
// Pasiima elementus pagal klasę// Jeigu norėčiau pasiimti specifinį elementa, galiu nurodyti gale [SKAIČIUS nuo 0 iki kiek elementų]var byClassName = document.getElementsByClassName('divas-skaicius');
// Universali fukncija, kuri pasiima elementą pagal CSS formuotę// Pasiima pirmą pasitaikusįvar querySelector = document.querySelector('.divas-skaicius');
// Pasiima taip pat kaip ir viršutinę, tik ima visus rastus elementusvar querySelectorAll = document.querySelectorAll('div.divas-skaicius:nth-child(3)');
// Tekstas taip pat gali būti aprašytas tilde - `var kintamasis_tekstas = `Tekstas`;
// Nustato vidinį HTML į nurodyta, automatiškai atvaizduoja HTMLdocument.getElementById('unikalus_divas').innerHTML = '<span style="color: red;"><h1>Hello</h1></span>';
// Nustato teksto reikšmę suradus elementą pagal IDdocument.getElementById('unikalus_divas').textContent = 'Hello';



// UZDUOTIS1

// let vardas = "Rolandas";
// let combo = "";
// let times = 0;

// while (times<5 ) {
//   combo += vardas;
//   times++;
//   console.log (combo)
// }



// UZDUOTIS2
// random1 = Math.floor (Math.random() * 5) +1 ;
// console.log(random1)

// random2= Math.floor (Math.random() *8) +5;
// console.log(random2)

// random3= Math.floor (Math.random() *5 ) +1 ;
// if (random3==1) {
//   alert ("Jus laimejote!!!")
// } else {
//   alert ("Jus pralaimejote :(")
// }
// console.log(random3)



//UZDUOTIS3
//  document.querySelector("bluetext > span").textContent ="style=color: red;";


// let bmw= document.querySelector("ol>li:first-child");
// let vw = document.querySelector("ol>li:nth-child(2)");

// bmw = vw.textContent;
// vw = bmw.textContent;





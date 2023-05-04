

// Ar mano skaicius yra pilna reiksme (Float / Integer)
Number.isInteger()


// Konvertuoja mano kintamajy y float arba integery

Number.parseFloat()
Number.parseInt()

// NaN - Not A Number
// Patikrinti ar tai nera skaicius
isNaN()


// Suapvalina float reiskme y kiek nurodau y parametra
12.1515.toFixed(2)


// ==================== STRINGAI
// Stringas taip pat turi length kintamajy
// Taip pat galiu pasiekti indexa su []const
str = ''
// Iskaido sarasa y array per kablely (Nurodyta parametra)
str.split(',')



// Pavercia stringa y lower arba upper case 
str.toLowerCase()
str.toUpperCase()


// Ar mano stringe yra stringas "tekstas"
str.includes('tekstas') // Grazina true/false boolean


// Suranda mano simbolio indexa
str.indexOf('s')
str.lastIndexOf('a')



// Pakeicia strino reikmes daly su surastu pirmu parametru y antra nurodyta parametra
// Pakeis Hi y Labas
'Hi Jonas'.replace('Hi', 'Labas')


// Nukopijuoja daly teksto tarp paremtruose duotu indexu
str.slice(0, -1)
// Nukopijuoja daly teksto naudojant indexa kaip pirma parametra
// antra kaip ilgy kiek kopijuoti
str.substr()

// Suranda mano simboly pagal indexa kury nurodau parametruose
// Palaiko ir - reiksme (Iesko nuo galo)
str.at()
// Suranda pagal indexa - alternatyviai []
str.charAt()

// Sujungia str stringa su nurodytais paremtruose
// Priima taip pat ir array
str.concat()


// Kartoja tapaty stringa kelis kartus (Kiek nurodome paramatre)
str.repeat()


// Patikrina ar prasideda, baigiasi pagal parametra
// Taip pat priima indexa nuo kurio ieskoti
str.startsWith()
str.endsWith()


// Istrina tarpus pradzioje ir gale
str.trim()
str.trimStart()
str.trimEnd()

// konvertuoti skaicu (integer, float), boolean y stringa
12.15.toString()








let isLegalAge = true;

console.log(isLegalAge)
console.log(isLegalAge.toString());



// function milkPrice (price) {

// if (Number.isInteger(price)) {
//   alert ("Centu nereikia")
// } else {
//   alert ("Centu reikia")
// }
// }

// milkPrice(1.79)


// function milkPrice (price) {

//   if (Number.isInteger(price)) {
//     alert (price.toFixed(2) + " Centu nereikia")
//   } else {
//     alert (price.toFixed(2) + " Centu reikia")
//   }
//   }

//   milkPrice(2.5);

// ------------------------------------------------------------------------------


// document.querySelector("form").addEventListener("submit" , myFunction)



// function myFunction (event) {
//   event.preventDefault();
//   const price = document.querySelector("input[name=price]").value;
//   const fuel = document.querySelector("input[name=fuel]").value;

//   const result = price * fuel

//   const fuelPrice = document.createElement("h1")

//   fuelPrice.textContent = result.toFixed(2) + " Eur"
//   document.body.append(fuelPrice)

// }

// ------------------------------------------------------------------------------


// document.querySelector("form").addEventListener("submit" , myFunction1)


// function myFunction1(event) {
// event.preventDefault();

// const personName = document.querySelector("input[name=name]").value;
// const yourNumber =Number(document.querySelector("input[name=number]").value);


// const text = document.createElement("h1");

// if (Number.isInteger(yourNumber)) {
//   text.textContent = personName.repeat(yourNumber)
//   document.body.append(text)
// } else {
//   alert ("Skaicius yra nesveikas")

// }



// }


// ------------------------------------------------------------------------------// ------------------------------------------------------------------------------


// document.querySelector("form").addEventListener("submit", myFunction2)



// function myFunction2(event) {
//   event.preventDefault();



//   const myName = document.querySelector("input[name=name]").value;

//   alert(myName.trim() + myName.length)


// }

// ------------------------------------------------------------------------------//


// document.querySelector("form").addEventListener("submit", myFunction3)


// function myFunction3(event) {

//   event.preventDefault();
//   const myName = document.querySelector("input[name=name]").value;

//   const name = document.createElement("h1")
//   const lastName = document.createElement("h1")

//   splitName = myName.split(" ")

//   name.textContent = splitName[0]
//   lastName.textContent = splitName[1]

//   document.body.append(name)
//   document.body.append(lastName)



// }


// ----------------------------------------------------------------------------



  

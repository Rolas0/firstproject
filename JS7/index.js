// PRATIMAI
// 1

// document.querySelector(".form_a").addEventListener("submit" , myFunction)

// function myFunction (event) {
//   event.preventDefault();
//   const personAge = document.querySelector("input[name=age]").value
//   const workBonus = document.querySelector("h1")


//   const bonus = 50;
//   let age = Number (personAge);

//   if (age >= 10 && age <20) {
//     return workBonus.textContent ="Jusu bonusas " + (bonus + 50);
//   } else if (age >=20) {
//     return workBonus.textContent ="Jusu bonusas " + (bonus + 150);
//   } else {
//     return workBonus.textContent ="Jusu bonusas " + bonus;
//   }

// }


// 2
// document.addEventListener("DOMContentLoaded", () => {
//   document.querySelector(".form_b").addEventListener("submit", myFunction1);
// })



// function myFunction1(event) {
//   event.preventDefault();
//   const typeYear = document.querySelector("input[name=year]").value;
//   const leapYear = document.querySelector("h2");

//   let years = Number(typeYear);

//   if ((years % 400 === 0) || (years % 100 != 0) && (years % 4 === 0)) {
//     return document.querySelector("h2").textContent = "Sie metai yra keliamieji";
//   } else {
//     return document.querySelector("h2").textContent = "Sie metai nera keliamieji";
//   }
// }


// 3

// document.addEventListener("DOMContentLoaded", () => {
//     document.querySelector(".form_c").addEventListener("submit", myFunction2);
// })

// function myFunction2(event) {
//   event.preventDefault();

//   const typeC = document.querySelector("input[name=temp]").value;
//   const farenH = document.querySelector("h2");

//   let result = (typeC * 1.8) +32;

//    return farenH.textContent = result;

// }

// 4

// document.addEventListener("DOMContentLoaded", () => {
//   document.querySelector(".form_d").addEventListener("submit", myFunction3);
// })

// function myFunction3(event) {
//   event.preventDefault();

//   const personEmail = document.querySelector("input[name=email]").value;
//   const result = document.querySelector("h2");
//   const checkBox = document.querySelector(".check_box")
//   const email = personEmail;
//   let newCheck = checkBox.checked;


//   if (newCheck == false) {
//     return result.textContent = "Registracija nesėkminga"
//   } else {
//     return result.textContent= "El. paštas "+ personEmail + " sėkmingai užregistruotas"
//   }



// }


5
document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".form_e").addEventListener("submit", myFunction4);
})

function myFunction4(event) {
  event.preventDefault();
  let myList = document.querySelector("ul");
  const myName = document.querySelector("input[name=name]").value;
  const myNumbers = document.querySelector(".number").value;

  let myNumberList = Number(myNumbers)


  for (let i = 0; i < myNumberList; i++) {
    debugger;
    let list = document.createElement("li")
    list.textContent = myName;
    myList.appendChild(list)

  }
}


// document.addEventListener("DOMContentLoaded", () => {
//   document.querySelector(".form_f").addEventListener("submit", myFunction5);
// })

// function myFunction5(event) {
//   event.preventDefault();
// let myNumber = document.querySelector("input[name=number]").value;
// let result = document.querySelector("div");
// let number = Number(myNumber);
// let textCont = "*";
// for (let i = textCont; i.length <number ; i+= textCont ) {
//   let triangle = document.createElement("p")
//   triangle.textContent= i
//   result.appendChild(triangle)
// }
// }







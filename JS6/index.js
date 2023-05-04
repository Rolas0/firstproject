// let name = "Vardas"
// let age = 35;



// function hello (personName,personAge) {
//   console.log(personName,personAge);
// return "Hello" + personName + "Your age is" + personAge;

// }

// name = "Petras"
// age= 60;



// const greetings = hello(name,age);
// console.log (greetings)


// const ages = [15, 6, 25, 90 , 16, 2, 54, 60]

// for(let i = 0; i<ages.length; i++) {
//   console.log(ages[i]);
// }




// const ages = [15, 6, 25, 90 , 16, 2, 54, 60]

// function massives (newAges) {
//  let newArray = [];
//   for(let i = 0; i<newAges.length -1; i++) {
//     const element = newAges[i];
//     newArray.push(Element);
// }
// return newArray
// }

// const myFunction = massives(newAges);
// console.log(myFunction)



// parasyti function, kuri priema per parametrus masyva, ir kita funkcija.
// function turi grazinti nauja masyva
// naujo masyvo elementai yra
// priimtos funkcijos rezultatas su seno masyvo elementais


// function fn(arr, callBack) {
//  let newFn = [];

//   for (let i = 0; i < arr.length; i++) {
//     const oldElement = arr[i];
//     const newElement = callBack(oldElement);
//     newFn.push(newElement);
//   }
//    return newFn;

// } 


// function addTen(a) { 
//   return a +10;
//  }



//    const array = [1,2,3]
//    const newArray = fn(array, addTen) 
//    console.log(newArray) 




// parasyti function, kuri priema per parametrus masyva, ir kita funkcija. 
// function turi grazinti nauja masyva 
// i nauja masyva ieina tik tie seno masyvo elementai, su kuriais 
// iskvietus per parametra paduota funkcija grazina true 







// function fn(arr, callBack) {
//   const newFn = [];

//   for (let i = 0; i < arr.length; i++) {
//     const oldElement = arr[i];
//     const newElement = callBack(oldElement);
//     if (newElement) {
//       newFn.push(oldElement);
//     }

//   }
//   return newFn
// }


// function isMoreThan20(a) {
//   return a > 20;
// }

// const array = [10, 25, 30, 15];
// const newArray = fn(array, isMoreThan20);
// console.log(newArray); // [ 25, 30,] 
// console.log(array); // [10, 25, 30, 15]





// Sukurti array "students", kuriame būtų objektai su name, age ir grade nuo 1 - 10
// Turėtų būti array kuris turi daugiau nei vieną objektą viduje
// Sukurti fuknciją, "avrageGrade" kuris priima "students" kaip parametrą
// Ir grąžina visų mokiinių pažimių vidurkį.
// Sukurti dar vieną fuknciją kuri grąžintų vyriausią studentą


// const students = [{
//   name: "John",
//   age: 19,
//   grade: 8,
// },
// {
//   name: "Kevin",
//   age: 18,
//   grade: 7
// },
// {
//   name: "Jimmy",
//   age: 20,
//   grade: 9
// },
// {
//   name: "Kate",
//   age: 21,
//   grade: 5
// }
// ]

// function averageGrade(grades) {
//   let sum = 0;
//   for (let i = 0; i < grades.length; i++) {
//     sum += grades[i].grade;
//   }

//   const newAverage = sum / grades.length;

//   return newAverage

// }
// const newArray = averageGrade(students);
// console.log(newArray);





// let students = document.querySelectorAll(".students div");

// function averageGrade(students) {
//   let sum = 0;
//   for (let i = 0; i < students.length; i++) {

//     }


//   }

//   const newAverage = sum / grades.length;

//   return newAverage

// }
// const newArray = averageGrade(students);
// console.log(newArray);



// document.addEventListener('DOMContentLoaded', () => {
//   document.querySelector('a.my-a').addEventListener('click', (event) => {
//     event.preventDefault();
//     console.log(event);
//   })
//   const formsAll = document.querySelectorAll('form')
//   for (let i = 0; i < formsAll.length; i++) {
//     formsAll[i].addEventListener('submit', (event) => {
//       event.preventDefault();
//       console.log(event)
//       console.log(event.submitter);
//       // console.log(event.target) 
//       // console.log('test', event.target.querySelector('input[name=fname]').value)
//       // console.log(document.querySelector('input[name=fname]'))  
//       const name = document.querySelector('input[name=fname]').value
//       const nameTarget = event.target.querySelector('input').value
//       console.log('be target', name)
//       console.log('su target', nameTarget)
//     })
//   }
// })




// 6 PAMOKA

// 1 uzduotis 
// 1
// document.querySelector("form").addEventListener("submit" , myFunction)

// function myFunction(event) {
//   event.preventDefault();
//   const name = event.target.querySelector("input").value;
//   alert  (name)
//   console.log(name)

// }



// 2
// document.querySelector("form").addEventListener("submit", myFunction2)

// function myFunction2(event) {
//   event.preventDefault();
//   const age = event.target.querySelector("input").value;

//   document.querySelector("h1 > span").textContent = age;
// }




// UZDUOTIS 2
// 1
// document.querySelector("form").addEventListener("submit", myFunction4)


// function myFunction4 (event) {
//    event.preventDefault()
// let personAge = document.querySelector('input[name=age]').value
// let howMuch = document.querySelector("h1")
// const price = 6;
// const age = Number(personAge)

// if (age <=16) {
//  return howMuch.textContent = (price * (50 / 100))
// } else if (age >= 60) {
//   return howMuch.textContent = (1/3 * price);
// } else {
//  return howMuch.textContent = price ;
// }

// }

// 2
document.querySelector("form").addEventListener("submit", myFunction5)

function myFunction5 (event) {
  event.preventDefault();
  const checkbox = document.querySelector(".check_box[name=check]")
  const personAge = document.querySelector('input[name=age]').value;
   let newCheck = checkbox.checked
  const age = Number(personAge)

  if (age >= 18 && age <= 30 && !newCheck){
 return document.querySelector("h1").textContent = "Atitinka reikalvimus"
} else {
  return document.querySelector("h1").textContent =  "Neatitinka reikalvimus"
} 
}



















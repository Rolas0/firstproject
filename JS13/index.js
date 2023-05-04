
// const string = "labas";


// console.log(string);

// function myFunction(str) {
//   let letter = str.charAt(0).toUpperCase();
//   let newWord = str.slice(1).toLowerCase();

//   let newW = letter + newWord;

//   return newW



// }

// console.log(myFunction(string));



//  su for kuri priema per parametra masyva ir grazina masyva objektu kuri turi varda ir gimimo metus 
// grazinti nauja masyva kurie tures name ir year


const persons = [
  {
    name: "John",
    lastname: "Doe",
    id: 1001,
    birthday: new Date("1990-01-15")
  },
  {
    name: "Jane",
    lastname: "Smith",
    id: 1002,
    birthday: new Date("1985-06-30")
  },
  {
    name: "Alice",
    lastname: "Johnson",
    id: 1003,
    birthday: new Date("1992-11-21")
  },
  {
    name: "Bob",
    lastname: "Brown",
    id: 1004,
    birthday: new Date("1978-03-12")
  },
  {
    name: "Charlie",
    lastname: "Davis",
    id: 1005,
    birthday: new Date("2000-08-24")
  }
];


const morePersons = [
  {
    name: "Emily",
    lastname: "Taylor",
    id: 1006,
    birthday: new Date("1987-04-10")
  },
  {
    name: "Oliver",
    lastname: "Lee",
    id: 1007,
    birthday: new Date("1994-09-17")
  },
  {
    name: "Sophia",
    lastname: "Gonzalez",
    id: 1008,
    birthday: new Date("1999-12-06")
  },
  {
    name: "Lucas",
    lastname: "Lopez",
    id: 1009,
    birthday: new Date("1976-05-22")
  },
  {
    name: "Zoe",
    lastname: "Morris",
    id: 1010,
    birthday: new Date("2001-07-14")
  }
];





// function myFunction1(arr) {



//   const newPersons = [];

//   for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     const newObject = {}
//     newObject.name = element.name
//     newObject.year = element.birthday.getFullYear()

//     newPersons.push(newObject);
//   }

//   console.log(newPersons);
// }

// myFunction(persons);

// //  Perdaryti  atlikti su masyvo metoda ,kad neatliktu ciklo






// function myF1(name) {
//   alert(name)
// }

// function myF2(name) {
//   console.log(name)
// }

// function myF3(name,callback) {
// const nameChar = name.charAt(0).toUpperCase();
// const nameSlice = name.slice(1).toLowerCase();

// const newName = nameChar + nameSlice;

// callback(newName)

// }

// myF3("labas",myF1)









const cars = ["BMW", "VW", "Audi"];


const newCars = cars.map(myFunct)

function myFunct(v, i) {
  return v + i;
};

console.log(newCars)




const friendArr = ["peTras", "Jonas", "aNTanaS", "juOzAs"]
const newFriends = friendArr.map(myFriendsArr)

function myFriendsArr(str) {

  let friend = str.charAt(0).toUpperCase();
  let sliceFriend = str.slice(1).toLowerCase();
  let newF = friend + sliceFriend;

  return newF
}
console.log(newFriends)




const ageArray = [, 1, 5, 6, 11, 12, 15, 16, 17, 25, 35, 36, 45, 50, 54, 87];

const ageFilter = ageArray.filter(myFilter)

function myFilter(v) {
  return v >= 18;
}

console.log(ageFilter)




const cityArr = ["Vilniuis", "Kaunas", "Kernave"]
const findCity = cityArr.find(findFunction);

function findFunction(str) {
  return str.charAt(0) === "K";
}
console.log(findCity)



const cityArr2 = ["Vilniuis", "kaunas", "Kernave"]
const someCity = cityArr2.some(someFunction);

function someFunction(str) {
  return str.charAt(0) === str.charAt(0).toLowerCase();
}
console.log(someCity)



const cityArr3 = ["Kilniuis", "kaunas", "Kernave"]
const someCity2 = cityArr3.every(someFunction2);

function someFunction2(str) {
  return str.charAt(0) === str.charAt(0).toUpperCase();
}
console.log(someCity2)










const persons1 = persons.map(myFunction1);

function myFunction1(arr) {
  

  const newObject = {

    name: arr.name,
    year: arr.birthday.getFullYear()
  }


  
  return newObject
}

console.log(persons1)






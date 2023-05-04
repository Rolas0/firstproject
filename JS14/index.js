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






const body = document.querySelector("body")
const div = document.querySelector("div")
div.style.display = "flex"
div.style.flexDirection = "column"
div.style.gap = "5px"
div.style.width = "190px"


persons.forEach(person => {
  // Zmogaus Vardas ir pavarde HTMLe
  const personSpan = document.createElement("span")

  personSpan.textContent = person.name + " " + person.lastname + " :";
  personSpan.style.display = "flex"
  personSpan.style.justifyContent = "space-between"

  div.appendChild(personSpan)

  // Button 
  const button = document.createElement("button");
  button.textContent = "Show More"
  personSpan.appendChild(button)


  // Button funkcija
  button.addEventListener("click", () => {

    const result = document.createElement("ul")
    let list = document.createElement("li")

    list.textContent = person.name + "  " + person.lastname + " ID: " + person.id + " Birthday " + person.birthday.getFullYear();

    result.appendChild(list)
    body.append(result)


  });


});











const friends = ["John", "Paul", "Ross"]
friends.sort();
console.log(friends)


const friends1 = ["John", "Paul", "Ross", "c", "d ", "f", "e"]
friends1.sort((a, b) => {
  if (b > a) {

  } else {
    return -1
  }
})

console.log(friends1)




// SORT

const myArray = [5, 10, 20, 11, 12, 1, 0, 14, 25]

myArray.sort((a, b) =>
  b - a
)
console.log(myArray)


const myArray1 = [10, 5, 20, 4]

myArray1.sort((a, b) =>
  b - a
)
console.log(myArray1[0])


// REDUCE

const myArray2 = [10, 5, 20, 4, 6]
const arr = myArray2.reduce((a, b) =>
  a + b)
console.log(arr)


const cars = ["BMW", "MCB", "VWG", "Toyota", "AUDI"]



const newCars = cars.reduce((a, b) => {
  if (b.length === 3) {
    return a + 1
  } else {
    return a
  }
})
console.log(newCars)


const numbers = [5, 10, 20, 4, 11, 13];

const newNumbers = numbers.reduce((a, b) => {
  if (a) {

  }
})
console.log(newNumbers)






// Pratimai su JS masyvu metodais


const people = [
  {
    name: "Petras",
    age: "18"
  },
  {
    name: "Jonas",
    age: 15
  },
  {
    name: "Antanas",
    age: 20
  },
  {
    name: "Urtė",
    age: 10
  },
  {
    name: "Diana",
    age: 25
  },
  {
    name: "Ieva",
    age: 16
  }
];


const newPeople = people.filter(pplFilter)


function pplFilter(v) {
  return v.age >= 18;

}
console.log(newPeople)



const newPeople2 = people.filter(pplFilter2).map(v => v.name)


function pplFilter2(v) {
  return v.age >= 18;

}
console.log(newPeople2)



const newPeople3 = people.filter(pplFilter3).map(v => v.name).sort()


function pplFilter3(v) {
  return v.age >= 18;

}
console.log(newPeople3)




const soda = [
  {
    name: "lemonade",
    price: 50
  },

  {
    name: "lime",
    price: 10
  }
]


function myFn(items) {

  items.sort((a, b) => a.price - b.price);


}

console.log(myFn(soda))




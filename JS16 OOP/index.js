// const arr = [1, 60, -100, 2000, 5, 10150, -666, 5555];

// const initialReduceValue = { min: undefined, max: undefined };

// function callbackFn(previousValue, currentArrElement) {
//   if (
//     previousValue.max === undefined ||
//     currentArrElement > previousValue.max
//   ) {
//     previousValue.max = currentArrElement;
//   } else if (
//     previousValue.min === undefined ||
//     currentArrElement < previousValue.min
//   ) {
//     previousValue.min = currentArrElement;
//   }
//   return previousValue;
// }

// const finalResult = arr.reduce(callbackFn, initialReduceValue);

// console.log(finalResult);

// const persons = [
//   { name: "John", lastname: "Doe", id: 1001, birthday: new Date("1990-01-15") },
//   {
//     name: "Jane",
//     lastname: "Smith",
//     id: 1002,
//     birthday: new Date("1985-06-30"),
//   },
//   {
//     name: "Alice",
//     lastname: "Johnson",
//     id: 1003,
//     birthday: new Date("1992-11-21"),
//   },
//   {
//     name: "Bob",
//     lastname: "Brown",
//     id: 1004,
//     birthday: new Date("1978-03-12"),
//   },
//   {
//     name: "Charlie",
//     lastname: "Davis",
//     id: 1005,
//     birthday: new Date("2000-08-24"),
//   },
// ];

// const morePersons = [
//   {
//     name: "Emily",
//     lastname: "Taylor",
//     id: 1006,
//     birthday: new Date("1987-04-10"),
//   },
//   {
//     name: "Oliver",
//     lastname: "Lee",
//     id: 1007,
//     birthday: new Date("1994-09-17"),
//   },
//   {
//     name: "Sophia",
//     lastname: "Gonzalez",
//     id: 1008,
//     birthday: new Date("1999-12-06"),
//   },
//   {
//     name: "Lucas",
//     lastname: "Lopez",
//     id: 1009,
//     birthday: new Date("1976-05-22"),
//   },
//   {
//     name: "Zoe",
//     lastname: "Morris",
//     id: 1010,
//     birthday: new Date("2001-07-14"),
//   },
// ];

// const empty = {};

// function callbackFn2(previousValue, currentArrElement) {
//   const nameLetter = currentArrElement.name.charAt(0);
//   const lastNameLetter = currentArrElement.lastname.charAt(0);

//   if (!previousValue[nameLetter]) {
//     previousValue[nameLetter] = [];
//   }
//   if (!previousValue[lastNameLetter]) {
//     previousValue[lastNameLetter] = [];
//   }
//   if (!previousValue[nameLetter].find((e) => e.id === currentArrElement.id)) {
//     previousValue[nameLetter].push(currentArrElement);
//   }
//   if (
//     !previousValue[lastNameLetter].find((e) => e.id === currentArrElement.id)
//   ) {
//     previousValue[lastNameLetter].push(currentArrElement);
//   }

//   // const newArray = letter + letter2;
//   // const newPersons = {
//   //   name: currentArrElement.name,
//   //   lastname: currentArrElement.lastname,
//   //   id: currentArrElement.id,
//   // };
//   // previousValue[newArray].push(newPersons);

//   return previousValue;
// }

// const finalResult2 = persons.reduce(callbackFn2, empty);

// console.log(finalResult2);

// Html ul container
// Subcribe form event
// Create Todo element
// Append child to ul
///

const form = document.querySelector("form");
const toDoDiv = document.querySelector("div");
const toDoUl = document.querySelector("ul");
const button = document.querySelector("button");
const body = document.querySelector("body");
const toDoInput = document.querySelector("input[name=text]");
const todoList = [];

form.addEventListener("submit", addTODO);

function addTODO(event) {
  event.preventDefault();
  const inputValue = toDoInput.value;

  if (inputValue === "") {
    alert("Please enter the text");
    return;
  }
  const todo = {
    name: "",
    completed: false,
    id: new Date().getTime(),
  };
  todoList.push(todo);

  console.log(todoList);

  const list = document.createElement("li");
  list.textContent = inputValue;
  toDoUl.appendChild(list);

  todo.name = list.textContent;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "X";
  deleteBtn.addEventListener("click", () => {
    list.remove();
  });

  const checkBox = document.createElement("input");
  checkBox.type = "checkbox";
  checkBox.addEventListener("change", (e) => {
    if (checkBox.checked) {
    }
  });
  list.appendChild(checkBox);
  list.appendChild(deleteBtn);
  toDoInput.value = "";
}

function deleteTODO() {}

function markAsDone() {}

function displayTODO() {}

// class Person {
//   constructor(name, age, lastName) {
//     this.name = name;
//     this.age = age;
//     this.lastName = lastName;
//   }
//   sayHello() {
//     console.log(`Hello, my name is ${this.name}`);
//   }
//   setAge(newAge) {
//     this.age = newAge;
//   }
//   getAge() {
//     return this.age;
//   }
// }
// const person1 = new Person("John", 25, "Stevenson");
// const person2 = new Person("Steve", 35, "Stevenson");
// console.log(person1.getAge());
// person1.setAge(27);
// console.log(person1.getAge());
// //BankAccount -> name, number, balance, withdraw, deposit, getBalance;

// class BankAcc {
//   constructor(name, number, balance) {
//     this.name = name;
//     this.number = number;
//     this.balance = balance;
//   }

//   Withdraw(num) {
//     this.balance = this.balance - num;
//   }

//   Deposit(num) {
//     this.balance = this.balance + num;
//   }

//   getBalance() {
//     return this.balance;
//   }
// }

// const BankAccount = new BankAcc("Petras", 199875, 100);
// console.log(BankAccount);

// console.log(BankAccount.getBalance());
// BankAccount.Withdraw(30);

// console.log(BankAccount.getBalance());
// BankAccount.Deposit(30);

// // knyga tures pavadinima,autoriu,puslapiu skaiciu
// //biblioteka tures  knygas,paimt ,atiduot, knygu sarasa

// class Book {
//   constructor(name, author, pages) {
//     this.name = name;
//     this.author = author;
//     this.pages = pages;
//   }
// }

// class Library {
//   constructor() {
//     this.books = [];
//   }

//   addBook(book) {
//     this.books.push(book);
//   }

//   takeBook(title) {
//     const remainingBooks = this.books.filter((book) => book.name !== title);

//     this.books = remainingBooks;
//   }
//   returnedBook() {}

//   bookList() {
//     return this.books;
//   }
// }
// const newLibrary = new Library();

// const book1 = new Book("Pirma knyga", "Nezinomas", 138);
// const book2 = new Book("Antra knyga", "Nezinomas2", 555);
// const book3 = new Book("Trecia knyga", "Nezinomas3", 335);

// newLibrary.addBook(book1);
// newLibrary.addBook(book2);
// newLibrary.addBook(book3);
// console.log(newLibrary.bookList());

// newLibrary.takeBook("Antra knyga");
// console.log(newLibrary.bookList());

// newLibrary.returnBook("Antra knyga");
// console.log(newLibrary.books);

// newLibrary.bookList();
// console.log(newLibrary.books);

//--------------------------------------------------------------------------//
//SEKANCIOS UZDUOTYS CAO.lt

// class Car {
//   constructor(brand, model, engine, BasePrice) {
//     this.brand = brand;
//     this.model = model;
//     this.engine = engine;
//     this.BasePrice = BasePrice;
//   }
//   getPrice() {
//     if (this.engine === "Diesel") {
//       this.BasePrice = this.BasePrice + 5000;
//     } else if (this.engine === "Electric") {
//       this.BasePrice = this.BasePrice + 10000;
//     }
//     return this.BasePrice;
//   }

//   getBalance() {
//     return this.BasePrice;
//   }
// }

// const newCar = new Car("Bmw", "3series", "Diesel", 20000);
// const newCar2 = new Car("Vw", "Golf", "Electric", 20000);
// const newCar3 = new Car("Audi", "RS6", "Petrol", 20000);
// console.log(newCar);
// console.log(newCar2);
// console.log(newCar3);

// newCar.engine = "Electric";
// console.log(newCar.getPrice());

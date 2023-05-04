// const personTable = document.querySelector(".thead");
// const newTr = document.createElement("tr");

// class Person {
//   constructor(name, lastName) {
//     this.name = name;
//     this.lastName = lastName;
//   }

//   showPerson(event) {
//     const name1 = document.createElement("td");
//     name1.textContent = this.name;

//     const lastName1 = document.createElement("td");
//     lastName1.textContent = this.lastName;

//     personTable.appendChild(newTr);

//     newTr.appendChild(name1);
//     newTr.appendChild(lastName1);
//   }
// }

// function lowerToUperCase(str) {
//   return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
// }

// function newPerson(event) {
//   event.preventDefault();

//   const nameInput = document.querySelector("#fullname");
//   const fullName = nameInput.value.trim();
//   const splitName = fullName.split(" ");
//   const person2 = new Person(splitName[0], splitName[1]);
//   person2.showPerson();
// }

// document.querySelector("form").addEventListener("submit", newPerson);

// // Antra uzd.

// const allCars = document.querySelector(".all_cars");

// class carInfo {
//   constructor(brand, model, mileage, price, image) {
//     this.brand = brand;
//     this.model = model;
//     this.mileage = mileage;
//     this.price = price;
//     this.image = image;
//   }

//   listItem() {
//     const carDiv = document.createElement("div");

//     const carImage = document.createElement("img");
//     carImage.classList.add("img");
//     carImage.setAttribute("alt", "car");
//     carImage.src = this.image;
//     carImage.addEventListener("click", (e) => {
//       alert(`Car price is : ${this.price} $`);
//     });

//     const carTitle = document.createElement("p");
//     carTitle.textContent = this.brand + " " + this.model;

//     allCars.append(carDiv);

//     carDiv.appendChild(carImage);
//     carDiv.appendChild(carTitle);
//   }
// }

// function newCar(e) {
//   e.preventDefault();

//   // const allInputs = document.querySelectorAll(".form2 > input").value;
//   const carBrand = document.querySelector("#brand").value;
//   const carModel = document.querySelector("#model").value;
//   const carMileage = document.querySelector("#mileage").value;
//   const carPrice = document.querySelector("#price").value;
//   const carImage = document.querySelector("#url").value;

//   const newCarInfo = new carInfo(
//     carBrand,
//     carModel,
//     carMileage,
//     carPrice,
//     carImage
//   );
//   newCarInfo.listItem();
// }

// document.querySelector(".form2").addEventListener("submit", newCar);

// ///trecia

// class Array {
//   constructor(numbers) {
//     this.numbers = numbers;
//   }

//   duplicates(numbers) {
//     this.numbers = this.numbers.reduce((a, b) => {
//       if (a.includes(b)) {
//         return a;
//       } else {
//         return a.concat(b);
//       }
//     }, []);
//   }
// }

// const newArray = new Array([1, 3, 3, 5, 5, 5]);
// newArray.duplicates();
// console.log(newArray);

//--------------------------------------------------------------------------------//

// Sukurti klasę pavadinimu Vehicle, viduje turėtų turėti tokius propsus:
// make - Stringas
// model - Stringas
// year - Numeris

// Metodus
// - start - console.log "[Year] [Make] [Model] užsikūrė"

// Sukurti extendintą (child) klasę - Car - su propsais:
// - numDoors - Numeris
// - numSeats - Numeris
// Metodus:
// - drive - console.log "[Year] [Make] [Model] pradėjo važiuoti"

// Sukurti dar vieną extendintą klasę - Motorcycle - su propsais:
// - numWheels - Numeris
// - hasHelmet - boolean
// Metodus:
// - ride - console.log "[Year] [Make] [Model] juda miškais"
// Sukurti Car ir Motorcycle instancus, iškviesti start(), drive(), ride();

// Užduotis apibendrinus (Galite kurti ne nurodytą programą, tačiau kitokį principą, svarbu kad būtų Vehicles klase ir dvi klasės kurios extendinasi iš vehicle)
// Ir iškvietus metodą start (išsikviestų iš originalios klases) kiti metodai drive ir ride, išsikviestų iš sub klasių.

class Vehicle {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = Number(year);
  }

  start() {
    console.log(this.make + " " + this.model + " " + this.year + " uzsikure");
  }
}

class Car extends Vehicle {
  constructor(make, model, year, numDoors, numSeats) {
    super(make, model, year);
    this.numDoors = Number(numDoors);
    this.numSeats = Number(numSeats);
  }

  drive() {
    console.log(
      this.make + " " + this.model + " " + this.year + " pradėjo važiuoti"
    );
  }
}

class Motorcycle extends Vehicle {
  constructor(make, model, year, numWheels, hasHelmet) {
    super(make, model, year);
    this.numWheels = Number(numWheels);
    this.hasHelmet = Boolean(hasHelmet);
  }

  ride() {
    console.log(
      this.make + " " + this.model + " " + this.year + " juda miškais"
    );
  }
}

const newCar = new Car("Volkswagen", "Golf", 2023, 4, 5);
newCar.start();
newCar.drive();
console.log(newCar);

const newMoto = new Motorcycle("Make", "Model", 1996, 2, 0);

newMoto.start();
newMoto.ride();
console.log(newMoto);

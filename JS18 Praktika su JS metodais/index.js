class Person {
  constructor(name, age) {
    this.name = name;
    this.age = Number(age);
  }

  checkAge() {
    if (this.age >= 18) {
      return console.log(this.name + " is old enough to drink");
    } else {
      return console.log(this.name + " is not old enough to drink");
    }
  }
}

const newPerson = new Person("Petras", 17);
console.log(newPerson);
newPerson.checkAge();

///2
class OnlyNumbers {
  constructor(numbers) {
    this.numbers = numbers;
  }

  TakeNumbers() {
    this.numbers = this.numbers.reduce((a, b) => {
      if (typeof b === "number") {
        return a.concat(b);
      } else {
        return a;
      }
    }, []);
  }
}

const newNumbers = new OnlyNumbers([
  "a",
  "b",
  3,
  "c",
  5,
  "c",
  "d",
  1,
  2,
  3,
  3,
  4,
]);

newNumbers.TakeNumbers();
console.log(newNumbers);
////3
class onlyLetters {
  constructor(string) {
    this.string = string;
  }

  takeLetters() {
    this.string = this.string
      .split("")
      .map((v) => {
        if (v.match(/^[a-zA-Z]/i)) {
          return v.repeat(2);
        } else {
          return v;
        }
      })
      .join("");
  }
}

const Person3 = new onlyLetters("Jonas 123 Balionas");
Person3.takeLetters();
console.log(Person3);

//4

class postCode {
  constructor(postCode) {
    this.postCode = postCode;
  }

  code() {
    return this.postCode.match(/^[0-9]{5}$|^[0-9]{3}[a-zA-Z]{2}$/i);
  }
}
const myPostCode = new postCode("123ab");
console.log(myPostCode.code());

//5

class Array1 {
  constructor(arr) {
    this.arr = arr;
  }

  changeArray() {
    this.arr = this.arr.map((v) => {
      if (!v.endsWith(7)) {
        return v + 7;
      }
    });
  }
}

const newArray = new Array1(["G", "F", "C", "Vb"]);
newArray.changeArray();
console.log(newArray);

// 1
function myFn(n) {
  const num = Number(n);
  return num * 60 + " seconds";
}
console.log(myFn(5));

//2
function myFn1(n) {
  const num = Number(n);
  return num * 365 + " days";
}
console.log(myFn1(2));

//3
const myFn2 = (num) => num * num;
console.log(myFn2(5));

//4
const myFn3 = (a, b) => (a * b) / 2;
console.log(myFn3(10, 10));

//5

const myStr = "Labas";

function myFn4(e) {
  return e.charAt(4);
}
console.log(myFn4(myStr));

//6

const myStr1 = "Labas";

function myFn5(e) {
  return e.split(" ").reverse().join(" ").toLowerCase();
}
console.log(myFn5(myStr1));

//7

const myNums = [-1, -100, -5, 10, 0, 11];

function myFn6(nums) {
  const filterNums = nums.filter((num) => num < 0);
  const sortNums = nums.sort((a, b) => a - b);
  return sortNums[0];
}

console.log(myFn6(myNums));

//8

function myFn7(num) {
  const numArr = [];
  for (let i = 0; i < num; i++) {
    const randomNum = Math.floor(Math.random() * 10 + 1);
    numArr.push(randomNum);
  }
  return numArr;
}
console.log(myFn7(3));

//9

const myFn8 = (a, b) => {
  if (a + b >= 100) {
    return true;
  } else {
    return false;
  }
};
console.log(myFn8(60, 50));

//10

const personArr = [
  {
    name: "Petras",
    age: 15,
  },
  {
    name: "Jonas",
    age: 15,
  },
  {
    name: "Antanas",
    age: 25,
  },
  {
    name: "Urtė",
    age: 10,
  },
  {
    name: "Diana",
    age: 25,
  },
  {
    name: "Ieva",
    age: 16,
  },
];

const newPersonArr = personArr.sort(myFn9).map((e) => e.name);
function myFn9(a, b) {
  if (a.age === b.age) {
    return a.name;
  }
}
console.log();

// 11

function myFn10(e) {
  const dayOff = [
    new Date("2023-04-09"),
    new Date("2023-01-01"),
    new Date("2023-12-24"),
    new Date("2022-012-25"),
  ];

  for (let i = 0; i < dayOff.length; i++) {
    if (e.getTime() === dayOff[i].getTime()) {
      return true;
    } else {
      return false;
    }
  }
}

console.log(myFn10(new Date("2023-12-24")));

//12

const numberArr = [1, 2, 4, 6];
function myFn11(arr) {
  arr.sort((a, b) => {
    return a - b;
  });

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== i + 1) {
      return i + 1;
    }
  }
}
console.log(myFn11(numberArr));

//Sekanti uzduotis
//1

const data = [
  {
    id: 1,
    first_name: "Lief",
    gender: "Female",
    car_model: "Corolla",
    car_year: 2002,
    shirt_size: "3XL",
  },
  {
    id: 2,
    first_name: "Danya",
    gender: "Male",
    car_model: "911",
    car_year: 2008,
    shirt_size: "XS",
  },
  {
    id: 3,
    first_name: "Marsha",
    gender: "Male",
    car_model: "V50",
    car_year: 2009,
    shirt_size: "XL",
  },
  {
    id: 4,
    first_name: "Clim",
    gender: "Genderqueer",
    car_model: "Sebring",
    car_year: 2000,
    shirt_size: "XS",
  },
  {
    id: 5,
    first_name: "Merlina",
    gender: "Polygender",
    car_model: "Corvette",
    car_year: 2012,
    shirt_size: "2XL",
  },
  {
    id: 6,
    first_name: "Danila",
    gender: "Genderfluid",
    car_model: "1 Series",
    car_year: 2011,
    shirt_size: "3XL",
  },
  {
    id: 7,
    first_name: "Homere",
    gender: "Male",
    car_model: "Sunbird",
    car_year: 1983,
    shirt_size: "S",
  },
  {
    id: 8,
    first_name: "Dayna",
    gender: "Non-binary",
    car_model: "Sigma",
    car_year: 1989,
    shirt_size: "2XL",
  },
  {
    id: 9,
    first_name: "Chickie",
    gender: "Agender",
    car_model: "Esteem",
    car_year: 1997,
    shirt_size: "L",
  },
  {
    id: 10,
    first_name: "Haley",
    gender: "Bigender",
    car_model: "Neon",
    car_year: 1999,
    shirt_size: "XL",
  },
  {
    id: 11,
    first_name: "Ajay",
    gender: "Genderqueer",
    car_model: "Edge",
    car_year: 2012,
    shirt_size: "3XL",
  },
  {
    id: 12,
    first_name: "Cyb",
    gender: "Bigender",
    car_model: "Tahoe",
    car_year: 2009,
    shirt_size: "XS",
  },
  {
    id: 13,
    first_name: "Ewell",
    gender: "Agender",
    car_model: "9-7X",
    car_year: 2007,
    shirt_size: "XS",
  },
  {
    id: 14,
    first_name: "Charyl",
    gender: "Genderqueer",
    car_model: "Sidekick",
    car_year: 1994,
    shirt_size: "XL",
  },
  {
    id: 15,
    first_name: "Ottilie",
    gender: "Genderfluid",
    car_model: "Continental GTC",
    car_year: 2012,
    shirt_size: "M",
  },
  {
    id: 16,
    first_name: "Sammy",
    gender: "Genderqueer",
    car_model: "Sonata",
    car_year: 2013,
    shirt_size: "XS",
  },
  {
    id: 17,
    first_name: "Giorgio",
    gender: "Genderfluid",
    car_model: "S40",
    car_year: 2011,
    shirt_size: "2XL",
  },
  {
    id: 18,
    first_name: "Cedric",
    gender: "Agender",
    car_model: "Thunderbird",
    car_year: 2006,
    shirt_size: "S",
  },
  {
    id: 19,
    first_name: "Holli",
    gender: "Non-binary",
    car_model: "Prius c",
    car_year: 2012,
    shirt_size: "2XL",
  },
  {
    id: 20,
    first_name: "Neil",
    gender: "Genderqueer",
    car_model: "Taurus",
    car_year: 2003,
    shirt_size: "M",
  },
  {
    id: 21,
    first_name: "Lynnett",
    gender: "Female",
    car_model: "Mirage",
    car_year: 1994,
    shirt_size: "M",
  },
  {
    id: 22,
    first_name: "Thacher",
    gender: "Genderqueer",
    car_model: "Navigator L",
    car_year: 2012,
    shirt_size: "S",
  },
  {
    id: 23,
    first_name: "Glenna",
    gender: "Non-binary",
    car_model: "Aero 8",
    car_year: 2008,
    shirt_size: "2XL",
  },
  {
    id: 24,
    first_name: "Nicol",
    gender: "Agender",
    car_model: "GTO",
    car_year: 1968,
    shirt_size: "XS",
  },
  {
    id: 25,
    first_name: "Bernadine",
    gender: "Non-binary",
    car_model: "928",
    car_year: 1991,
    shirt_size: "S",
  },
  {
    id: 26,
    first_name: "Joanna",
    gender: "Genderqueer",
    car_model: "S60",
    car_year: 2013,
    shirt_size: "XS",
  },
  {
    id: 27,
    first_name: "Celesta",
    gender: "Female",
    car_model: "Esprit",
    car_year: 2001,
    shirt_size: "L",
  },
  {
    id: 28,
    first_name: "Adi",
    gender: "Agender",
    car_model: "RAV4",
    car_year: 2008,
    shirt_size: "S",
  },
  {
    id: 29,
    first_name: "Nan",
    gender: "Non-binary",
    car_model: "Town Car",
    car_year: 2007,
    shirt_size: "3XL",
  },
  {
    id: 30,
    first_name: "Reynold",
    gender: "Female",
    car_model: "Blackwood",
    car_year: 2003,
    shirt_size: "2XL",
  },
  {
    id: 31,
    first_name: "Raina",
    gender: "Non-binary",
    car_model: "Tempo",
    car_year: 1987,
    shirt_size: "S",
  },
  {
    id: 32,
    first_name: "Eward",
    gender: "Non-binary",
    car_model: "Milan",
    car_year: 2008,
    shirt_size: "2XL",
  },
  {
    id: 33,
    first_name: "Teresa",
    gender: "Genderqueer",
    car_model: "Econoline E150",
    car_year: 1997,
    shirt_size: "3XL",
  },
  {
    id: 34,
    first_name: "Delmar",
    gender: "Female",
    car_model: "Legend",
    car_year: 1990,
    shirt_size: "XL",
  },
  {
    id: 35,
    first_name: "Koral",
    gender: "Agender",
    car_model: "B-Series",
    car_year: 1992,
    shirt_size: "3XL",
  },
  {
    id: 36,
    first_name: "Karil",
    gender: "Non-binary",
    car_model: "MR2",
    car_year: 1986,
    shirt_size: "S",
  },
  {
    id: 37,
    first_name: "Stepha",
    gender: "Polygender",
    car_model: "Daewoo Magnus",
    car_year: 2004,
    shirt_size: "S",
  },
  {
    id: 38,
    first_name: "Jaclyn",
    gender: "Genderfluid",
    car_model: "Grand Marquis",
    car_year: 2000,
    shirt_size: "M",
  },
  {
    id: 39,
    first_name: "Peria",
    gender: "Polygender",
    car_model: "Evora",
    car_year: 2011,
    shirt_size: "2XL",
  },
  {
    id: 40,
    first_name: "Cecelia",
    gender: "Genderfluid",
    car_model: "Accent",
    car_year: 1998,
    shirt_size: "L",
  },
  {
    id: 41,
    first_name: "Katha",
    gender: "Female",
    car_model: "RDX",
    car_year: 2011,
    shirt_size: "XS",
  },
  {
    id: 42,
    first_name: "Beverie",
    gender: "Male",
    car_model: "Probe",
    car_year: 1992,
    shirt_size: "2XL",
  },
  {
    id: 43,
    first_name: "Pavla",
    gender: "Polygender",
    car_model: "Colt",
    car_year: 1994,
    shirt_size: "XL",
  },
  {
    id: 44,
    first_name: "Sonnie",
    gender: "Non-binary",
    car_model: "Impreza",
    car_year: 2012,
    shirt_size: "3XL",
  },
  {
    id: 45,
    first_name: "Jordan",
    gender: "Genderqueer",
    car_model: "Cougar",
    car_year: 1994,
    shirt_size: "2XL",
  },
  {
    id: 46,
    first_name: "Court",
    gender: "Female",
    car_model: "Civic",
    car_year: 2005,
    shirt_size: "2XL",
  },
  {
    id: 47,
    first_name: "Berton",
    gender: "Female",
    car_model: "xB",
    car_year: 2012,
    shirt_size: "2XL",
  },
  {
    id: 48,
    first_name: "Maryl",
    gender: "Bigender",
    car_model: "LaCrosse",
    car_year: 2010,
    shirt_size: "XS",
  },
  {
    id: 49,
    first_name: "Robinson",
    gender: "Non-binary",
    car_model: "Dakota",
    car_year: 1992,
    shirt_size: "XS",
  },
  {
    id: 50,
    first_name: "Nerissa",
    gender: "Male",
    car_model: "F150",
    car_year: 2002,
    shirt_size: "3XL",
  },
];

//1
console.log(data.filter((v) => v.gender === "Male"));

//2
console.log(
  data.filter((v) => v.car_year > 2000).map((e) => e.first_name + " ID:" + e.id)
);

//3
function myFn12(filt) {
  return filt
    .filter((e) => e.shirt_size === "XS" || e.shirt_size === "S")
    .sort((a, b) => {
      if (a.first_name < b.first_name) {
        return -1;
      } else if (a.first_name > b.first_name) {
        return 1;
      } else {
        return 0;
      }
    });
}
console.log(myFn12(data));

//4
// function myFn13(filt) {
//    return filt.filter(e => e.shirt_size === "XS" || e.shirt_size === "S").map(v => v.first_name + " ID:" + v.id + " Sirt Size:" +v.shirt_size ).sort((a,b)=> {
//   if(a.first_name < b.first_name) {
//     return -1;
//   } else if (a.first_name > b.first_name) {
//     return 1;
//   } else {
//     return 0;
//   }
// })
// }

// console.log(myFn13(data))

function myFn13(filt) {
  return filt
    .filter((e) => e.shirt_size === "XS" || e.shirt_size === "S")
    .sort((a, b) => {
      if (a.first_name < b.first_name) {
        return -1;
      } else if (a.first_name > b.first_name) {
        return 1;
      } else {
        return 0;
      }
    })
    .map((v) => v.first_name + " ID:" + v.id + " Sirt Size:" + v.shirt_size);
}
console.log(myFn13(data));

//------------------------------------------------------------------------------------------------------
//  < !--Papildoma užduotisSukurti TODO tvarkyklę.TODO tvarkyklei,

//   reikalingi:
// - TODO pridėjimas
//   - TODO trinimas
//     - TODO pažymėjimas kaip įvygdyta.
//   - Atvaizduoti visus TODO.

//   Žingsniai.Sukurti tuščią array, "todo"
//   Sukurkite fuknciją pavadinimu "addTODO"
//   Sukurti fuknciją pavadinimu "deleteTODO"
//   Sukurti funckiją pavadinimu - "markAsDone"
//   Sukurti funkciją "displayTODO"

//   HTMLe turėtų būti input'as ir submit mygtukas, kur prirašius pavadinimą, pridėtų prie sąrašo.
//   Formai pridėti eventą, kuris pridetų(pushintų) naują TODO į sąrašą.
//   - Pridedant tapatį pavadinimą, turėtų mesti klaidą
//   - Vedant tuščią pavadinima, taip pat mestų klaidą

//   HTML Taip pat turėtų būti automatinis atvaizdavimas sąrašo.
//    Kitaip tariant, po kiekvieno užduoties pavadinimo, HTML atvaizdavimas turėtų ištrinti
//    senus rezultatus ir pridėti naujus HTML'e.
//   (Turint atskirą displayTODO fuknciją, turėtų būti, gan paprasta)
//    Kiekvienas sąrašo elementas turėtų turėti checkboxą, kurį paspaudus pakeistų statusą
//    į "done" ar altikta, ar completed: true

//    Pvyzdinė array objekto struktūra -
//    const todo = [
//   {
//     name: 'Some todo',
//     completed: false,
//   },
//   {
//     name: 'Some other todo',
//     completed: true,
//   }]

//     Taip pat, keikvienas elementas turėtų tūrėti, mygtuką su value - x - kurią paspaudus,
//   išmestų iš sąrašo paspaustą elementą. -- >

const todo = [];

function addTODO() {
  const input = document.querySelector("input[name=text]");
  const name = input.value;

  if (!name) {
    alert("Input is empty");
    return;
  }

  const nameDuplicate = todo.findIndex((item) => item.name === name);

  if (nameDuplicate !== -1) {
    alert("This TODO already exists");
    return;
  }

  const newTODO = {
    name,
    completed: false,
    id: new Date().getTime(),
  };
  todo.push(newTODO);

  displayTODO();
  input.value = "";
}

function deleteTODO(val) {
  todo.splice(val, 1);
  displayTODO();
}

function markAsDone(index) {
  const item = todo[index];
  item.completed = !item.completed;
  displayTODO();
}

function displayTODO() {
  const list = document.querySelector("ul");
  list.innerHTML = "";

  todo.forEach((item, index) => {
    const listItem = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = item.completed;
    checkbox.addEventListener("change", () => markAsDone(index));
    listItem.appendChild(checkbox);

    const label = document.createElement("label");
    label.textContent = item.name;
    listItem.appendChild(label);

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "x";
    deleteButton.addEventListener("click", () => deleteTODO(index));
    listItem.appendChild(deleteButton);

    list.appendChild(listItem);
  });
}

const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  addTODO();
});

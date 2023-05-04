// // cookies pasiekiam per dokumenta. Jie laikomi formatu "pavadinimas=reiksme;pavainimas2=reiskme2"
// // Taip pat galiu vienam cookie priskirti kitus dalykus kaip path, expires etc..
// // Expires automatiskai istrina sukakus laikui
// // Norint panaikinti cookie, reikia atnaujinti ta paty pavadinima atbuline data.
// document.cookie = "cookie2=;expires=Wed, 31 Oct 2024 08:50:17 GMT;";
// // Norint issivaliduoti ar susinormalizuoti cookius
// // reikia apsirasyti metoda, splitinti per "; ", tada mapinti ir reducinti kad butu objektas array sarase.
// document.cookie.split("; ").map((ele) => ele.split("="));

// // Local storage nusistato ir kinta siais metodais.localStorage.setItem('testas1', 'testoReiksme')
// localStorage.getItem("testas1");
// localStorage.removeItem("testas1");

// const todo = localStorage.getItem("todoInfo")
//   ? JSON.parse(localStorage.getItem("todoInfo"))
//   : [];

// // localStorage.setItem('todoInfo', JSON.stringify([]))
// const todoFromStorage = JSON.parse(localStorage.getItem("todoInfo"));

// // Nustato lokaliai reiksme pagal rakta raktas = reiksme
// localStorage.setItem("Raktas", "Reiksme");
// // Istrina
// localStorage.removeItem("Raktas");
// // Pasiimti reiksme
// localStorage.getItem("Raktas");

// // Issaugo tik tam sessione (uzdarius taba isnyksta)
// // Taciau veikia analogiskai kaip ir localStorage
// sessionStorage.getItem();
// sessionStorage.setItem(JSON.stringify([]));
// sessionStorage.removeItem();

// // Turint Javascript array ar objekta (JSON) mes galime konvertuoti jy y stringa
// // JSON Klase turi metoda stringify, JSON klase globali.
// // Parametre ydedame json objekta
// JSON.stringify(JSONAS);

// // Turint JSON objekta stringe, mes galime jy konvertuoti atgal y objekta JSON
// // Kitaip tariant - isparsinti
// JSON.parse(JSONSTRINGAS);
// //===============================================================================================//

// //uzduotys2

const myInfo = {
  name: "Vardenis",
  lastname: "Pavardenis",
  description:
    " Lorem ipsum dolor sit amet consectetur adipisicing elit. Em in similique reiciendis, ab magnam exercitatione ",
  url: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80",
};
localStorage.setItem("Person1", JSON.stringify(myInfo));

//trecia
class Person {
  constructor(name, lastName) {
    this.name = name;
    this.lastName = lastName;
  }

  showPerson() {
    const persons = JSON.parse(localStorage.getItem("persons")) || [];

    persons.forEach((person) => {
      const newTr = document.createElement("tr");

      const name1 = document.createElement("td");
      name1.textContent = person.name;

      const lastName1 = document.createElement("td");
      lastName1.textContent = person.lastName;

      document.querySelector(".thead").appendChild(newTr);

      newTr.appendChild(name1);
      newTr.appendChild(lastName1);
    });
  }
}

function newPerson(event) {
  event.preventDefault();

  const nameInput = document.querySelector("#fullName");
  const fullName = nameInput.value.trim();
  const splitName = fullName.split(" ");
  const person2 = new Person(splitName[0], splitName[1]);

  const persons = JSON.parse(localStorage.getItem("persons")) || [];

  persons.push(person2);
  localStorage.setItem("persons", JSON.stringify(persons));

  person2.showPerson();
}

const form = document.querySelector("form");
form.addEventListener("submit", newPerson);

///1

const form2 = document.querySelector(".form2");
const nameInput = document.querySelector("#name");
const saveBtn = document.querySelector("#save");
const spanName = document.querySelector("#spanName");
const deleteBtn = document.querySelector("#btn2");

form2.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = nameInput.value;
  const existingName = getCookie("name");
  if (existingName) {
    spanName.textContent = `${existingName}`;

    deleteBtn.addEventListener("click", () => {
      document.cookie = "name=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      spanName.textContent = "";
      nameInput.value = "";
    });
  } else {
    document.cookie = `name=${name}`;
    spanName.textContent = `Hello, ${name}!`;
  }
});

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

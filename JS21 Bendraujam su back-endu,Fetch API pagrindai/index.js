//1. Jums paskambino pažinčių portalas – jiems reikia greitai sukurti front-endą,
//kuris pasiimtų duomenis iš https://randomuser.me/api/ ir juos atvaizduotų juos puslapyje.
// Duomenys galėtų būti atvaizduoti panašioje kortelėje. Svarbu atvaizduoti nuotrauką, vardą, amžių ir el. pašto adresą.

const body = document.querySelector("body");

function displayPerson(json) {
  fetch("https://randomuser.me/api/")
    .then((take) => take.json())
    .then((data) => {
      const personDiv = document.createElement("div");
      const personName = document.createElement("h2");
      const personEmail = document.createElement("h4");
      const personImg = document.createElement("img");

      body.append(personDiv);
      personDiv.appendChild(personImg);

      personDiv.appendChild(personName);

      personDiv.appendChild(personEmail);

      personImg.src = data.results[0].picture.large;
      const text = data.results[0].name;
      const age = data.results[0].dob.age;
      personName.textContent = `${text.title}. ${text.first} ${text.last}, ${age} years old`;
      personEmail.textContent = data.results[0].email;
      console.log(data.results[0]);
    })
    .catch((error) => console.error(error));
}

displayPerson();

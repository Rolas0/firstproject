// const body = document.querySelector("body");

// fetch("https://magnetic-melon-yam.glitch.me/")
//   .then((response) => response.json())
//   .then((data) => {
//     const form = document.createElement("form");

//     const vipLabel = document.createElement("label");
//     vipLabel.setAttribute("for", "vipCheck");
//     vipLabel.textContent = "VIP Persons";
//     const checkBox = document.createElement("input");
//     checkBox.setAttribute("id", "vipCheck");
//     checkBox.type = "checkbox";

//     const searchPerson = document.createElement("input");
//     searchPerson.type = "text";
//     searchPerson.setAttribute("id", "search");

//     const searchBtn = document.createElement("button");
//     searchBtn.type = "submit";
//     searchBtn.textContent = "Search";

//     const table = document.createElement("table");
//     const thead = document.createElement("thead");
//     const tbody = document.createElement("tbody");

//     body.append(vipLabel);
//     body.append(checkBox);
//     body.append(form);
//     body.append(table);
//     form.appendChild(searchPerson);
//     form.appendChild(searchBtn);
//     table.appendChild(thead);
//     table.appendChild(tbody);

//     const theadTR = document.createElement("tr");
//     const theadId = document.createElement("th");
//     const theadName = document.createElement("th");
//     const theadLastname = document.createElement("th");
//     const theadCity = document.createElement("th");
//     const theadColor = document.createElement("th");
//     const theadImage = document.createElement("th");

//     thead.appendChild(theadTR);
//     theadTR.appendChild(theadId);
//     theadTR.appendChild(theadImage);
//     theadTR.appendChild(theadName);
//     theadTR.appendChild(theadLastname);
//     theadTR.appendChild(theadCity);
//     theadTR.appendChild(theadColor);

//     theadId.textContent = "ID:";
//     theadImage.textContent = "Image";
//     theadName.textContent = "Name:";
//     theadLastname.textContent = "Last Name:";
//     theadCity.textContent = "City:";
//     theadColor.textContent = "Favorite Color:";

//     checkBox.addEventListener("change", (e) => {
//       const checkedBox = e.target.checked;

//       if (checkedBox) {
//         const vipData = data.filter((person) => person.vip);
//       } else {
//       }
//     });

//     data.forEach((person) => {
//       const personTR = document.createElement("tr");

//       const personId = document.createElement("td");
//       personId.textContent = person.id;
//       personTR.appendChild(personId);

//       const personImage = document.createElement("img");
//       personImage.src = person.image;
//       personImage.setAttribute("alt", "Person Picture");
//       personTR.appendChild(personImage);

//       const splitName = person.name.split(" ");

//       const personName = document.createElement("td");
//       personName.textContent = splitName[0];
//       personTR.appendChild(personName);

//       const personLastname = document.createElement("td");
//       personLastname.textContent = splitName[1];
//       personTR.appendChild(personLastname);

//       const personCity = document.createElement("td");
//       personCity.textContent = person.city;
//       personTR.appendChild(personCity);

//       const personColor = document.createElement("td");
//       personColor.textContent = person.fav_color;
//       personTR.appendChild(personColor);

//       tbody.appendChild(personTR);
//     });
//   });
const body = document.querySelector("body");

fetch("https://magnetic-melon-yam.glitch.me/")
  .then((response) => response.json())
  .then((data) => {
    const form = document.createElement("form");

    const vipLabel = document.createElement("label");
    vipLabel.setAttribute("for", "vipCheck");
    vipLabel.textContent = "VIP Persons";
    const checkBox = document.createElement("input");
    checkBox.setAttribute("id", "vipCheck");
    checkBox.type = "checkbox";

    const searchPerson = document.createElement("input");
    searchPerson.type = "text";
    searchPerson.setAttribute("id", "search");

    const searchBtn = document.createElement("button");
    searchBtn.type = "submit";
    searchBtn.textContent = "Search";

    const table = document.createElement("table");
    const thead = document.createElement("thead");
    const tbody = document.createElement("tbody");

    body.append(vipLabel);
    body.append(checkBox);
    body.append(form);
    body.append(table);
    form.appendChild(searchPerson);
    form.appendChild(searchBtn);
    table.appendChild(thead);
    table.appendChild(tbody);

    const theadTR = document.createElement("tr");
    const theadId = document.createElement("th");
    const theadName = document.createElement("th");
    const theadLastname = document.createElement("th");
    const theadCity = document.createElement("th");
    const theadColor = document.createElement("th");
    const theadImage = document.createElement("th");

    thead.appendChild(theadTR);
    theadTR.appendChild(theadId);
    theadTR.appendChild(theadImage);
    theadTR.appendChild(theadName);
    theadTR.appendChild(theadLastname);
    theadTR.appendChild(theadCity);
    theadTR.appendChild(theadColor);

    theadId.textContent = "ID:";
    theadImage.textContent = "Image";
    theadName.textContent = "Name:";
    theadLastname.textContent = "Last Name:";
    theadCity.textContent = "City:";
    theadColor.textContent = "Favorite Color:";

    checkBox.addEventListener("change", (e) => {
      const checkedBox = e.target.checked;
      tbody.innerHTML = "";
      if (checkedBox) {
        const vipData = data.filter((person) => person.vip);
        vipData.forEach((person) => displayPerson(person, tbody));
      } else {
        data.forEach((person) => displayPerson(person, tbody));
      }
    });

    searchBtn.addEventListener("click", (e) => {
      e.preventDefault();
      const searchValue = searchPerson.value.toLowerCase();
      const filteredData = data.filter((person) => {
        const personFullName =
          `${person.name} ${person.lastname}`.toLowerCase();
        return personFullName.includes(searchValue);
      });
      tbody.innerHTML = "";
      filteredData.forEach((person) => displayPerson(person, tbody));
    });

    data.forEach((person) => displayPerson(person, tbody));
  });

function displayPerson(person, tbody) {
  const personTR = document.createElement("tr");

  const personId = document.createElement("td");
  personId.textContent = person.id;
  personTR.appendChild(personId);

  const personImage = document.createElement("img");
  personImage.src = person.image;
  personImage.setAttribute("alt", "Person Picture");
  personTR.appendChild(personImage);

  const splitName = person.name.split(" ");

  const personName = document.createElement("td");
  personName.textContent = splitName[0];
  personTR.appendChild(personName);

  const personLastname = document.createElement("td");
  personLastname.textContent = splitName[1];
  personTR.appendChild(personLastname);

  const personCity = document.createElement("td");
  personCity.textContent = person.city;
  personTR.appendChild(personCity);

  const personColor = document.createElement("td");
  personColor.textContent = person.fav_color;
  personTR.appendChild(personColor);

  tbody.appendChild(personTR);
}

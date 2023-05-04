const tbody = document.querySelector("tbody");
const cars = "https://olive-bead-glazer.glitch.me";

fetch(cars)
  .then((response) => response.json())
  .then((data) => {
    data.forEach((cars) => addCars(cars, tbody));
  });

function addCars(cars, bodyTr) {
  const tr = document.createElement("tr");

  tbody.appendChild(tr);

  const carBrand = document.createElement("td");
  carBrand.textContent = cars.brand;
  tr.appendChild(carBrand);

  const carModel = document.createElement("td");
  carModel.textContent = cars.model;
  tr.appendChild(carModel);
}

const form = document.querySelector("form");
const cars = "https://olive-bead-glazer.glitch.me";
const brandInput = document.querySelector("#brand");
const modelInput = document.querySelector("#model");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const addCar = {
    brand: brandInput.value,
    model: modelInput.value,
  };

  fetch(cars, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(addCar),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      if (data.error) {
        console.log(data.error);
        return;
      }

      if (data.msg) {
        notification(data);
        return;
      }
    });
});

function notification(data) {
  const added = document.createElement("h1");
  added.style.color = "green";
  added.textContent = data.msg;
  document.querySelector("body").appendChild(added);
}

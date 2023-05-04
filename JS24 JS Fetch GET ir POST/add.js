const form = document.querySelector("form");
const imageInput = document.querySelector("#image");
const priceInput = document.querySelector("#price");
const descriptionInput = document.querySelector("#description");
const cityValues = document.querySelector("#city");

const flats = "https://robust-safe-crafter.glitch.me/";

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const flat = {
    image: imageInput.value,
    city: cityValues.value,
    price: priceInput.value,
    description: descriptionInput.value,
  };

  fetch(flats, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(flat),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      if (data.error) {
        console.log(data.error);
        return;
      }
    });
});

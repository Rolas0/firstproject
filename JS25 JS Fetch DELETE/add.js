const form = document.querySelector("form");
const imageInput = document.querySelector("#url");
const priceInput = document.querySelector("#price");
const titleInput = document.querySelector("#title");

const products = " https://golden-whispering-show.glitch.me";

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const product = {
    image: imageInput.value,
    price: priceInput.value,
    title: titleInput.value,
  };

  fetch(products, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(product),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      if (data.error) {
        console.log(data.error);
        return;
      }
      if (data.msg) {
        alert(data.msg);
        redirect();
        return;
      }
    });

  function redirect() {
    window.location.replace("index.html");
  }
});

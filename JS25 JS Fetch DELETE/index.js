const productContainer = document.querySelector(".products");
let product = [];

async function getProducts() {
  try {
    const response = await fetch("https://golden-whispering-show.glitch.me", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(),
    });

    const jsonPost = await response.json();
    product = jsonPost;
    if (response.ok) {
      product.forEach((post) => {
        addProduct(post);
      });
    }
    console.log(product);
  } catch (error) {
    console.log(error);
  }
}

getProducts();

function addProduct(post) {
  const productDiv = document.createElement("div");
  productDiv.classList.add("product_div");

  const productInfo = document.createElement("div");
  productInfo.classList.add("product_info");

  const image = document.createElement("img");
  image.setAttribute("alt", "Product Picture");
  image.src = post.image;

  const title = document.createElement("p");
  title.textContent = post.title;

  const price = document.createElement("h3");
  price.textContent = "\u20AC" + post.price;
  price.style.color = "red";

  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("btn");
  deleteBtn.type = "submit";
  deleteBtn.textContent = "Ištrinti.";

  productContainer.appendChild(productDiv);

  productDiv.appendChild(image);
  productDiv.appendChild(productInfo);

  productInfo.appendChild(title);
  productInfo.appendChild(price);
  productInfo.appendChild(deleteBtn);

  deleteBtn.addEventListener("click", () => {
    const productId = post.id;
    fetch(`https://golden-whispering-show.glitch.me/products/${productId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        // if (response.ok) {
        console.log("Produktas pašalinkas sėkmingai");

        // const index = product.indexOf(post);
        // product.splice(index, 1);

        productDiv.remove();
        // location.reload();
        // }
      })
      .catch((error) => {
        console.log(error);
      });
  });
}

const postsContainer = document.querySelector(".posts");
const divFilters = document.querySelector(".filter_buttons");

let myPosts = [];

async function getPosts() {
  console.log("1");
  try {
    const response = await fetch("https://robust-safe-crafter.glitch.me/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(),
    });
    console.log("2");
    const jsonPosts = await response.json();
    myPosts = jsonPosts;
    if (response.ok) {
      myPosts
        .sort((a, b) => a.price - b.price)
        .forEach((post) => {
          addDisplay(post);
        });

      const noDuplicates = [...new Set(myPosts.map((post) => post.city))];
      noDuplicates.forEach((city) => {
        createFilterButton(city);
      });
    }
    console.log(myPosts);
  } catch (error) {
    console.log(error);
  }
}

function addDisplay(post) {
  const cardDiv = document.createElement("div");
  cardDiv.classList.add("card_div");

  const cardInfo = document.createElement("div");
  cardInfo.classList.add("info_container");

  const cardImg = document.createElement("img");
  cardImg.setAttribute("alt", "Post Picture");
  cardImg.src = post.image;

  const cardPrice = document.createElement("h4");
  cardPrice.textContent = "\u20AC" + post.price;

  const cardCity = document.createElement("p");
  cardCity.textContent = post.city;

  const cardDescription = document.createElement("p");
  cardDescription.textContent = post.description;

  postsContainer.appendChild(cardDiv);

  cardDiv.appendChild(cardImg);
  cardDiv.appendChild(cardInfo);

  cardInfo.appendChild(cardPrice);
  cardInfo.appendChild(cardCity);
  cardInfo.appendChild(cardDescription);
}

function createFilterButton(city) {
  const filterButtons = document.createElement("div");
  divFilters.appendChild(filterButtons);

  const button = document.createElement("button");
  button.classList.add("filter_btn");
  button.textContent = city;

  filterButtons.appendChild(button);

  button.addEventListener("click", () => {
    if (button.classList.contains("active")) {
      button.classList.remove("active");
      showAllPosts();
    } else {
      button.classList.add("active");
      filterPosts(city);
    }
  });
}

function filterPosts(cityName) {
  const filteredPosts = myPosts.filter((myPost) => myPost.city === cityName);
  postsContainer.innerHTML = "";
  filteredPosts.forEach((post) => {
    addDisplay(post);
  });
}

function showAllPosts() {
  postsContainer.innerHTML = "";
  myPosts
    .sort((a, b) => a.price - b.price)
    .forEach((post) => {
      addDisplay(post);
    });
}

getPosts();

const baseUrl = "https://robust-safe-crafter.glitch.me/";
let listing = null;

// magic
document.addEventListener("DOMContentLoaded", () => {
    getData();

    // Event listeners to show / hide backdrop and submit form
    document.querySelector(".add-button").addEventListener("click", showBackdrop);
    document.querySelector(".backdrop").addEventListener("click", hideBackdrop);
    document.querySelector("form").addEventListener("submit", addPropertyHandler);
});

class PropertyCard {
    constructor(city, price, description, image) {
        this.city = city;
        this.price = price;
        this.description = description;
        this.image = image;
    }

    render() {
        const cardContainer = document.querySelector(".card-container");
        const card = document.createElement("div");
        card.classList.add("card");
        const cardImg = document.createElement("img");
        cardImg.setAttribute("src", this.image);
        cardImg.setAttribute("alt", this.city);
        cardImg.classList.add("card-img");
        const priceCity = document.createElement("div");
        const cardBody = document.createElement("div");
        cardBody.classList.add("card-body");
        const cardTitle = document.createElement("p");
        cardTitle.classList.add("card-title");
        cardTitle.innerText = this.city;
        const cardText = document.createElement("p");
        cardText.classList.add("card-text");
        cardText.innerText = this.description;
        const cardPrice = document.createElement("p");
        cardPrice.classList.add("card-price");
        cardPrice.innerText = `€${Number(this.price).toLocaleString()}`;
        priceCity.appendChild(cardPrice);
        priceCity.appendChild(cardTitle);
        cardBody.appendChild(priceCity);
        cardBody.appendChild(cardText);
        card.appendChild(cardImg);
        card.appendChild(cardBody);
        cardContainer.appendChild(card);
    }
}

class Listing {
    constructor() {
        this.properties = [];
    }

    add(property) {
        this.properties.push(property);
    }

    renderFilter() {
        const cities = [...new Set(this.properties.map((property) => property.city))].sort();
        const filterDiv = document.querySelector(".filter-items");
        filterDiv.innerHTML = "";
        cities.forEach((el) => {
            const input = document.createElement("input");
            input.setAttribute("type", "checkbox");
            input.setAttribute("name", "city");
            input.setAttribute("value", el);
            input.setAttribute("id", el);
            const label = document.createElement("label");
            label.setAttribute("for", el);
            label.classList.add("btn", "unselectable");
            label.innerText = el;
            filterDiv.appendChild(input);
            filterDiv.appendChild(label);
            input.addEventListener("change", (e) => {
                // event listener to filter cards based on checked cities
                const checked = [...document.querySelectorAll("input[name=city]:checked")].map((el) => el.value);
                this.renderCards(checked);
            });
        });
    }

    renderCards(cityArr) {
        // render cards based on cityArr
        const cardContainer = document.querySelector(".card-container");
        cardContainer.innerHTML = "";
        if (cityArr.length) {
            this.properties.filter((el) => cityArr.map((el) => el.toLowerCase()).includes(el.city.toLowerCase())).forEach((el) => el.render());
            return;
        }
        this.properties.forEach((el) => el.render());
    }
}

function getData() {
    fetch(baseUrl)
        .then((resp) => resp.json())
        .then((data) => {
            // create new instance, populate propertylist, render cities filter and all properties
            listing = new Listing();
            data.forEach(({ city, price, description, image }) => {
                listing.add(new PropertyCard(city, price, description, image));
            });
            listing.renderFilter();
            listing.renderCards([]);
        })
        .catch((err) => console.log(`error: ${err}\nOh no! spaghetti-o's!`));
}

function addPropertyHandler(event) {
    event.preventDefault();
    const city = document.querySelector("#city").value;
    const price = Number(document.querySelector("#price").value);
    const description = document.querySelector("#description").value;
    const image = document.querySelector("#img").value;
    fetch(baseUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ city, price, description, image }),
    })
        .then((resp) => resp.json())
        .then((data) => {
            renderMessage(data);
            getData();
        })
        .catch((err) => {
            renderMessage(err);
            console.log(`error: ${err}\nOh no! spaghetti-o's!`);
        });
    document.querySelector("form").reset();
}

function showBackdrop() {
    document.querySelector(".add-property").classList.remove("hidden");
}

function hideBackdrop(event) {
    // if the backdrop is clicked and not the form
    const message = document.querySelector("#message");
    if (event.target === document.querySelector(".backdrop")) {
        document.querySelector(".add-property").classList.add("hidden");
        if (message) {
            message.remove();
        }
    }
}

function renderMessage(data) {
    const message = document.querySelector("#message");
    if (message) {
        message.remove();
    }
    const div = document.createElement("div");
    div.setAttribute("id", "message");
    div.classList.add(data.msg ? "success" : "error");
    div.textContent = data.msg ? data.msg : data.error ? data.error : "Something went wrong";
    document.querySelector("form").appendChild(div);
}

const expUrl = "https://zany-skitter-caper.glitch.me/experiences";

async function fetchData(url, callback) {
  try {
    const response = await fetch(
      "https://zany-skitter-caper.glitch.me/experiences",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(),
      }
    );
    const expJson = await response.json();
    url = expJson;

    if (response.ok) {
      url.forEach((element) => {
        callback(element);
      });
    }
  } catch (error) {
    console.log(error);
  }
}
fetchData(expUrl, renderExp);

function renderExp(exp) {
  const experiencesDiv = document.createElement("div");
  const title = document.createElement("h3");
  const ul = document.createElement("ul");
  const list = document.createElement("li");

  experiencesDiv.style.display = "flex";
  experiencesDiv.style.flexDirection = "column";
  title.textContent = exp.position;
  list.textContent = [
    exp.companyName,
    exp.description,
    exp.startYear,
    exp.finishYear,
  ];

  document.querySelector("body").append(experiencesDiv);
  experiencesDiv.appendChild(title);
  experiencesDiv.appendChild(ul);
  ul.appendChild(list);
}

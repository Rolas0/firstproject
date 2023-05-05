export function carsFn(app) {
  const carArray = ["BMW", "VW", "AUDI", "MB"];
  const newArray = `<ul>${carArray
    .map((item) => `<li>${item}</li>`)
    .join("")}</ul>`;

  app.innerHTML += newArray;
}

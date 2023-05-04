const workPositionDiv = document.querySelector(".position");
const workPosition = document.querySelector(".work_position");
const expDiv = document.querySelector(".experience_div");
let experience = [];

const experiencesUrl = "https://zany-skitter-caper.glitch.me/experiences";
const skillsUrl = "https://zany-skitter-caper.glitch.me/skills";
async function personExperience() {
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
    experience = expJson;

    if (response.ok) {
      experience.forEach((element) => {
        addExperience(element);
      });
    }
  } catch (error) {
    console.log(error);
  }
}

personExperience();

function addExperience(exp) {
  const workInfoDiv = document.createElement("div");
  workInfoDiv.classList.add("work_position");

  const allWorkYears = document.createElement("div");
  allWorkYears.classList.add("all_work_years");
  const workYear = document.createElement("h3");
  workYear.classList.add("start_year");

  let currentDate = new Date().getFullYear();
  if (exp.finishYear === currentDate) {
    workYear.textContent = `${exp.startYear} - Current`;
  } else {
    workYear.textContent = `${exp.startYear} - ${exp.finishYear}`;
  }
  const companyName = document.createElement("p");
  companyName.classList.add("company", "grey");
  companyName.textContent = exp.companyName;

  // work positions
  const aboutWork = document.createElement("div");
  aboutWork.classList.add("about_work");
  const positionTitle = document.createElement("h3");
  positionTitle.classList.add("position_title");
  positionTitle.textContent = exp.position;
  const description = document.createElement("p");
  description.classList.add("description");
  description.textContent = exp.description;

  allWorkYears.appendChild(workYear);
  allWorkYears.appendChild(companyName);
  aboutWork.appendChild(positionTitle);
  aboutWork.appendChild(description);
  workInfoDiv.appendChild(allWorkYears);
  workInfoDiv.appendChild(aboutWork);
  workPositionDiv.appendChild(workInfoDiv);
}

let skills = [];

async function addSkills() {
  try {
    const response = await fetch(
      "https://zany-skitter-caper.glitch.me/skills",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(),
      }
    );
    const jsonSkills = await response.json();
    skills = jsonSkills;

    if (response.ok) {
      skills.forEach((element) => {
        personSkills(element);
      });
    }
  } catch (error) {
    console.log(error);
  }
}

addSkills();

const codingDiv = document.querySelector(".coding_div");

const skillLevel = document.querySelector(".level");
const levelContainer = document.querySelector(".level_container");

function personSkills(skill) {
  const skillDiv = document.createElement("div");
  skillDiv.classList.add("skill");

  const title = document.createElement("h4");
  title.classList.add("title");
  title.textContent = skill.title;

  const levelTitle = document.createElement("p");
  levelTitle.classList.add("grey", "level_title");
  levelTitle.textContent = `${skill.level}%`;

  const titleDiv = document.createElement("div");
  titleDiv.classList.add("title_div");

  const level = document.createElement("div");
  level.classList.add("level");
  level.style.width = `${skill.level}%`;

  const levelContainer = document.createElement("div");
  levelContainer.classList.add("level_container");

  titleDiv.appendChild(title);
  titleDiv.appendChild(levelTitle);
  levelContainer.appendChild(level);
  skillDiv.appendChild(titleDiv);
  skillDiv.appendChild(levelContainer);
  // codingDiv.appendChild(titleDiv);
  codingDiv.appendChild(skillDiv);
}

// async function newGetResult() {
//   const { experiences, skills } = await getResults();

//   experiences.forEach((element) => {
//     addExperience(element);
//   });

//   skills.forEach((element) => {
//     personSkills(element);
//   });
// }

// newGetResult();

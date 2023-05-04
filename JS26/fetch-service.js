const experiencesUrl = "https://zany-skitter-caper.glitch.me/experiences";
const skillsUrl = "https://zany-skitter-caper.glitch.me/skills";

// export async function getResults() {
//   const experienceFetch = fetch(experiencesUrl).then((response) =>
//     response.json()
//   );
//   const skillsFetch = fetch(skillsUrl).then((response) => response.json());

//   const [experiences, skills] = await Promise.all([
//     experienceFetch,
//     skillsFetch,
//   ])
//     .then(([experiences, skills]) => {
//       experiences.forEach((element) => {
//         addExperience(element);
//       });

//       skills.forEach((element) => {
//         personSkills(element);
//       });
//       console.log(experiences);
//       console.log(skills);
//       return [experiences, skills];
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// }

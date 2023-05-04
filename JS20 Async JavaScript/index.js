// const myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     alert("yes, veikia!");
//   }, 5000);
// });

// const myPromise2 = new Promise((resolve, reject) => {
//   const chance = Math.floor(Math.random() * 5) + 1;
//   if (chance === 5) {
//     setTimeout(() => {
//       resolve(alert("yes, veikia!"));
//     }, 5000);
//   } else if (chance === 1) {
//     setTimeout(() => {
//       reject(alert("oops, nutiko klaida!"));
//     }, 5000);
//   }
// });

const myPromise3 = new Promise((resolve, reject) => {
  const chance = Math.floor(Math.random() * 5) + 1;
  if (chance === 5) {
    setTimeout(() => {
      resolve();
    }, 1000);
  } else {
    setTimeout(() => {
      reject();
    }, 1000);
  }
});

myPromise3
  .then(() => "this is message")
  .then((message) => {
    alert(message);
  })
  .catch(() => {
    alert("Ops, iviko klaida");
  });

let myArray = [1, 2, 3, 4, 5];
let myNumber = 0;
function myPromiseFunction() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(myArray[myNumber]);
      myNumber++;
    }),
      2000;
  });
}

async function myFunction() {
  console.log("pradzia");

  for (let i = 0; i < myArray.length; i++) {}

  console.log("pabaiga");
}

myFunction();

// programa kuri sugeneruotu random skaiciu ir isvestu 1sec intervalu i console.log()

function randomNumber() {
  const randomNum = Math.floor(Math.random() * 5) + 1;
  return console.log(randomNum);
}

async function call(n) {
  for (let i = 0; i < n; i++) {
    await new Promise((resolve) => {
      setTimeout(() => {
        resolve(randomNumber());
      }, 1000);
    });
  }
}
call(5);
//==============================================================================================================//
// Sukuria promise (Pazada)
// Priima callbackine fukncija su parametrais resolve, reject
// Resolve grazina kas nutinka po sekmes
// reject atmeta (klaida)
// const myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     // resolve su papildomu data JSON Stringify tarkim.
//     resolve(JSON.stringify([]));
//   });
// });
// // .then nusirodo kas buna kai sekmingai grazina
// // Then galima chainint - tai reiskia, kad galiu apdoroti pirmu etapu
// // pvz - isparsinti savo JSON string
// // toliau isconsole loginti.
// myPromise
//   .then((data) => JSON.parse(data))
//   .then((data) => console.log(data))
//   // Catch naudojamas kai kodas nubega netinkama linkme, ir grazino klaida
//   .catch((error) => console.error(error));
// // Async nusirodo javascirptui, kad suprastu
// // jog jis veiks siektiek kitaip,
// // vygdys asyncoriniskai

// async function myFunction() {
//   // await, nusirodo kai mes norime sulaukti grazinamo duomens
//   // naudojamas kai turime promise
//   console.log(await myPromise);
//   // Galime ir nusirodyti await su then.
//   // Tokiu atveju, kodas palauks kol yvygdysime promisa
//   // bet taip pat izoliuosime jo sekme .then
//   await myPromise.then((data) => JSON.parse(data));
// }
// //======================================================================================================================================//

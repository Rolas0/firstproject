// funckija krui priema objekta ir i console print object kintamuju reiksmes

// const info = {
//   name :"John",
//   lastName : "Johnson",
// }

// function myFunction() {
  
// const keys = Object.keys(info);

// for (let i = 0; i < keys.length ; i++) {
//   const key = keys[i];
//   console.log(info[key])
// }

// }

// console.log(myFunction(info))


// grazina nauja objekta kurio keys bus seno objekto values o reiksmes keys


// const info = {
//   name :"John",
//   lastName : "Johnson",
// }
// console.log(info)




// function myFunction(a) {
  
//   const keys = Object.keys(a);
//   let newInfo = {};
//   for (let i = 0; i < keys.length ; i++) {

//     const key = keys[i];

//     const newKey = a[key];

//     newInfo[newKey] = key;
   
//   }
//    console.log(newInfo);
//   }
  
//   console.log(myFunction(info))

// 1
// document.querySelector("h1").style.cursor= "pointer"
// document.querySelector("h1").addEventListener("click", myFunction)

// function myFunction (event) {
//   document.querySelector("h1").style.width= "100%"
// document.querySelector("h1").style.height= "100vh"
// document.querySelector("h1").style.display="flex"
// document.querySelector("h1").style.justifyContent="center"
// document.querySelector("h1").style.alignItems = "center"
// document.querySelector("h1").style.justifyContent = "center"
// document.querySelector("h1").style.color="red"
// document.querySelector("h1").style.fontSize="100px"

// }



// 2



// document.querySelector("button").addEventListener("click", myFunction1)
// document.querySelector("button").style.position="absolute"
// document.querySelector("button").style.top="10px"
// document.querySelector("button").style.left="10px"

// l
// function myFunction1() {

// document.querySelector("button").style.position="absolute"
// document.querySelector("button").style.bottom="10px"
// document.querySelector("button").style.right="10px"
 

// }




// 4 

// document.querySelector("input[name=text]").addEventListener("input", color)

// function color() {
//   const change = document.querySelector("input[name=text]").value;
//   if (change.length < 3) {
//     document.body.style.backgroundColor = "red"
//   } else {
//     document.body.style.backgroundColor = "green"
//   }

// }

// 5

// document.querySelector("button").addEventListener("click", colors)
// const myColors = ["red", "green", "blue", "yellow"]

// function colors(event) {
//   event.preventDefault();

//   for (let i = 0; i < myColors.length; i++) {
//     let randomColor = myColors[i]
//   randomColor = Math.floor( Math.random()) * 4 ;
//   document.querySelector("button").style.backgroundColor = myColors[randomColor];
//   }
// }


// document.querySelector("button").addEventListener("click", colors)

// const rgb = "rgb"
// function colors(event){
  // event.preventDefault();

//   let r= Math.floor( Math.random()* 255) ;
//   let g= Math.floor( Math.random()* 255) ;
//   let b= Math.floor( Math.random()* 255) ;

//   const newColor = rgb + "(" + r + "," + g + "," + b + ")"
//   document.querySelector("button").style.backgroundColor = newColor;
  
// }







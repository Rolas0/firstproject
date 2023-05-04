// const persons = [{ name: 'Alice', surname: 'Johnson', age: 32, gender: 'female' },
// { name: 'Bob', surname: 'Smith', age: 45, gender: 'male' },
// { name: 'Cathy', surname: 'Brown', age: 28, gender: 'female' },
// { name: 'David', surname: 'Miller', age: 39, gender: 'male' },
// { name: 'Eva', surname: 'Garcia', age: 24, gender: 'female' },
// { name: 'Frank', surname: 'Martinez', age: 50, gender: 'male' },
// { name: 'Grace', surname: 'Rodriguez', age: 35, gender: 'female' },
// { name: 'Henry', surname: 'Perez', age: 42, gender: 'male' },
// { name: 'Isabella', surname: 'Wilson', age: 29, gender: 'female' },
// { name: 'Jack', surname: 'Taylor', age: 36, gender: 'male' },
// { name: 'Katie', surname: 'Anderson', age: 27, gender: 'female' },
// { name: 'Leo', surname: 'Thomas', age: 47, gender: 'male' },
// { name: 'Mia', surname: 'Jackson', age: 31, gender: 'female' },
// { name: 'Nathan', surname: 'White', age: 40, gender: 'male' },
// { name: 'Olivia', surname: 'Harris', age: 22, gender: 'female' },
// { name: 'Paul', surname: 'Martin', age: 38, gender: 'male' },
// { name: 'Quinn', surname: 'Thompson', age: 25, gender: 'female' },
// { name: 'Robert', surname: 'Gonzalez', age: 44, gender: 'male' },
// { name: 'Sophia', surname: 'Lee', age: 30, gender: 'female' },
// { name: 'Tom', surname: 'Hernandez', age: 41, gender: 'male' },];


// const result = document.querySelector("ul")


// function myFunction(event) {



//   for (let i = 0; i < persons.length; i++) {

//     const person = persons[i];

//     let list = document.createElement("li")

//     list.textContent = person.name + " " + person.surname + " " + person.age + " " + person.gender

//     result.appendChild(list)

//     console.log(person)

//   }

// }
// myFunction();





// const persons = [{ name: 'Alice', surname: 'Johnson', age: 32, gender: 'female' },
// { name: 'Bob', surname: 'Smith', age: 45, gender: 'male' },
// { name: 'Cathy', surname: 'Brown', age: 28, gender: 'female' },
// { name: 'David', surname: 'Miller', age: 39, gender: 'male' },
// { name: 'Eva', surname: 'Garcia', age: 24, gender: 'female' },
// { name: 'Frank', surname: 'Martinez', age: 50, gender: 'male' },
// { name: 'Grace', surname: 'Rodriguez', age: 35, gender: 'female' },
// { name: 'Henry', surname: 'Perez', age: 42, gender: 'male' },
// { name: 'Isabella', surname: 'Wilson', age: 29, gender: 'female' },
// { name: 'Jack', surname: 'Taylor', age: 36, gender: 'male' },
// { name: 'Katie', surname: 'Anderson', age: 27, gender: 'female' },
// { name: 'Leo', surname: 'Thomas', age: 47, gender: 'male' },
// { name: 'Mia', surname: 'Jackson', age: 31, gender: 'female' },
// { name: 'Nathan', surname: 'White', age: 40, gender: 'male' },
// { name: 'Olivia', surname: 'Harris', age: 22, gender: 'female' },
// { name: 'Paul', surname: 'Martin', age: 38, gender: 'male' },
// { name: 'Quinn', surname: 'Thompson', age: 25, gender: 'female' },
// { name: 'Robert', surname: 'Gonzalez', age: 44, gender: 'male' },
// { name: 'Sophia', surname: 'Lee', age: 30, gender: 'female' },
// { name: 'Tom', surname: 'Hernandez', age: 41, gender: 'male' },];


document.querySelector("form").addEventListener("submit", myFunction)



function myFunction(event) {

  event.preventDefault();

  const result = document.querySelector("ul")
  const mySelect = document.querySelector("option:checked").value;



  let selected = []


  for (let i = 0; i < persons.length; i++) {
    const person = persons[i];

    if (mySelect === "women" && person.gender === "female") {

      let list = document.createElement("li");
      list.textContent = person.name + " " + person.surname;
      result.appendChild(list);
      selected.push(person);
      console.log(person)


    } else if (mySelect === "men" && person.gender === "male") {

      let list = document.createElement("li");
      list.textContent = person.name + " " + person.surname;
      result.appendChild(list);
      selected.push(person);

    } else if (mySelect === "name") {

      let list = document.createElement("li");
      list.textContent = person.name;
      result.appendChild(list);
      selected.push(person);

    } else if (mySelect === "surname") {

      let list = document.createElement("li");
      list.textContent = person.surname;
      result.appendChild(list);
      selected.push(person);
    }
    
  }
  return selected
}


















// SEKANTI PAMOKA





// PVZ--------------------------------------------------------------------------------------

// const myArray = ['1', '2', '3', '4'];

// const myUl = document.createElement('ul');

// append// prepend
// document.createElement// Sukuria elementa
// *HTMLelement*.append // Prideda y gala
// *HTMLelement*.prepend // Prideda y pradzia.

// *HTMLelement*.classList // CSS Klasiu sarasas, manimupliujamas su // .remove ir .add


// *HTMLelement*.setAttribute // Nustato atributa grieztai (Peraso jeigu egzistuoja)
// *HTMLelement*.getAttribute // Gauna atributa
// *HTMLelement*.removeAttribute // Pnanaikina atributa


// document.addEventListener('DOMContentLoaded', () => {
  // Loope sukuria myLi constanta ir prependina (Prideda y pradzia)    
  // Jo HTMLElementa    
  // for(let i = 0; i < myArray.length; i++) {
  //     const myLi = document.createElement('li');
  //     myLi.textContent = myArray[i];
  //     myLi.setAttribute('index', i);
  //     myUl.prepend(myLi);
  // }


 // Pire document.body kintamojo (HTML Elemento) prideda UL sukurta    
 // elementa paciame gale.   
  // document.body.append(myUl)
    // Prisitaiko ir prideda norima stiliu kiekviena karta   

  //  myUl.style.backgroundColor = 'red';
  //   myUl.style.fontSize = '18px';

    // Naudojant setAttribute metodu, peraso kas jau yra, del to    
    // keisti stiliu per kelis kartus neiseina    
    // myUl.setAttribute('style', 'background-color: red;')   
     // myUl.setAttribute('style', 'font-size: 18px;')


// Galime pridei, isimti ir patikrinti - klases    myUl.classList.add('my-ul');
// myUl.classList.remove('my-ula');
// myUl.classList.contains('my-ul');


// nustato, grazina    myUl.setAttribute('name', 'my-ul-element');
// myUl.getAttribute('myAttribute');
// myUl.removeAttribute('my-attribute');





 //  Sukuriame paveiklsiuka ir priskiriame jy image kintamajui   
  // const image = document.createElement('img');

  // Priskiriam atributa src     
  // image.setAttribute('src', "images/image.jpg")
    // Pridedame image kintamajy y paty gala    
    // document.body.append(image);


    // const myForm = document.createElement('form');

    // document.querySelector('.wrapper').prepend(myForm);

    // const myWrapper = document.querySelector('.wrapper');


    // Sukuriame formos labely ir duodame jam textContent ir For   
    //  const nameLabel = document.createElement('label')
    // nameLabel.textContent = 'Name checkbox'    
    // nameLabel.htmlFor = 'check-box'   
    
    // Sukuirame checkboxa ir duodame jam atributus   
    //  const nameCheckbox = document.createElement('input')
    // nameCheckbox.type = 'checkbox'    
    // nameCheckbox.id = 'check-box' 

    // Appendiname abu dalykus (pridedame y paty gala)  
      // myForm.append(nameLabel)
    // myForm.append(nameCheckbox)
// })


// -----------------------------------------------------------------------------------



















// document.addEventListener('DOMContentLoaded', () => {

// const myBody = document.querySelector("body")
// const mySection = document.createElement("section")
// const myDiv = document.createElement("div")
// const myImg = document.createElement("img")
// const myName = document.createElement("h2")
// const myInfo = document.createElement("p")
// const myInfo2 = document.createElement("p")
// document.body.append(mySection);
// mySection.append(myDiv);

// //div container
// myDiv.append(myImg);
// myDiv.append(myName);
// myDiv.append(myInfo);
// myDiv.append(myInfo2);


// myBody.style.display="flex"
// myBody.style.alignItems="center"
// myBody.style.justifyContent="center"
// myBody.style.flexDirection= "column"
// myBody.style.height="100vh"
// mySection.style.backgroundColor="white"
// mySection.style.width= "500px"
// mySection.style.height = "200px"
// mySection.style.borderRadius = "10px"
// mySection.style.display="flex"
// mySection.style.alignItems="center"
// mySection.style.justifyContent="center"
// mySection.style.flexDirection="column"


// // divas
// myImg.setAttribute('src', "https://spng.pngfind.com/pngs/s/676-6764065_default-profile-picture-transparent-hd-png-download.png")
// myImg.style.width="100px"
// myImg.style.height="90px"
// myImg.style.backgroundColor="white"
// // myImg.style.position="absolute"
// myImg.style.top= " 0px"
// myImg.style.borderRadius = "50%"
// myName.textContent ="Trent Walton"
// myInfo.textContent ="Founder & 1/3 of @paravelinc"
// myInfo2.textContent ="Austin, TX"
// myDiv.style.textAlign="center"

// myInfo.style.color="grey"
// myInfo2.style.color="grey"




// myBody.style.backgroundColor = "lightblue"








// })







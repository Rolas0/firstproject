document.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".form_a").addEventListener("submit", myFunction);
  })

  function myFunction(event) {
    event.preventDefault();
    const letterSize = document.querySelector("input[name=number]").value;
    let result = document.querySelector("div")
    let sNumber = Number(letterSize); 
    let letter = "L";

    for (i = 0; i < sNumber ; i++) {
        let list = document.createElement("p")
        list.textContent = letter
        result.appendChild(list)
      
     }

    }
  
    



  


 
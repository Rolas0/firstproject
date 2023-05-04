// JS POST JavaScript

// fetch priima du parametrus
// fetch('URL' {}) URL ir objektą aprašymo, ką mūsų fetchas atliks
{ method: "POST" || "GET" || "DELETE" etc.. Nurodo kreipimosi tipą 
headers: {// Nusirodo objektas aprašyti mūsų užklausą 
  // Pavyzdžiui, nusirodo "Content-Type": "application/json" 
  // Nurodo, kad mūsų užklausos payload (Siuntinys / body) 
  // Bus validus JSON schemos 
 body: JSON.stringify(...) // Nusirodo stringas bet kokio contento. 
  // Tai reiškia - kad mums reikia atsižvelgti ką mes nurodome content-type 
  // Jeigu nurodome json, tada galime pridėti stringą, kuri 
  // Būtų validi JSON - JSON.stringify(...) 
  // Turint content type text/html, galime nurodyti teksta arba HTML.
} }

// Dauguma aprašymų, būna validuojami serveryje (Kur kreipiamės)
// Tai turėtumėme vadovautis būtent, kaip aprašytas siuntimas
// Iš serverio pusės.// Nusiųsti duomeinis į serverį, dažnai naudojamas POST
// REFFERENCES:
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers
//https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Type



//Fetch   JavaScript//
//===============================================//

function apdorojimas(json) { fetch('https://randommm-data-api.com/api/users/random_user?size=3') 
.then((gryzta) => gryzta.json()) 
.then(apdorojimas) .catch(klaidosFunkcija) 
async function doRequest() 
  // try catch bloke mes nurodom tapaty kas butu su then, catch 
  try {
    console.log("start"); 
    // darome fetch su await. 
    const data = await fetch( "https://random-data-api.com/api/users/random_user?size=5" );
     console.log("got data", data); 
     const myJson = await data.text(); 
     console.log(myJson); 
     
     
     // Pasitikriname struktura ir validuojame pagal save 
     myJson.forEach((element) => { 
      console.log(element.first_name);
     });
    // 
  } catch (errro) { 
    // console.log(errro)
     alert("Klaida"); return; }
     } 
     doRequest(); 
     // Fetch -> siuncia uzklausa y nurodyta URL ir grazina Response promisa, 
     // Response promisas, turi metodus json, text, ir begale kitu. 
     // zinant kad grazina json, galime issiparsinti JSONa
     // taip pat async funkcija, reikia parsinti jsona su awaitu.


    //  Promises -> async / await avaScript
     //=================================////

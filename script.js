const button = document.querySelector("#button")
const getalVeld = document.querySelector("h1")
const powerup = document.querySelector("#powerup")
const power2 = document.querySelector("#power2")
const power3 = document.querySelector("#power3")
const evolve = document.querySelector("#evolve")
const click = document.querySelector("#countperclick")
const sec = document.querySelector("#countpersec")
const win = document.querySelector("#win")
const geluid = document.querySelector("#click-geluid")

let getal = 0;
let getalperklik = 1;
let getalPerSec = 0;
let imgVeranderd = false;

function updateDisplay(){
    getalVeld.textContent = getal;
}

function verhoogGetal() {
    getal += getalperklik
    getalVeld.textContent = getal
    geluid.play();
}

function verhoogpower() { 
    if (getal >= 30) {
        getal -= 30
        getalperklik += 1;
        console.log("wel genoeg punten");
        click.textContent = getalperklik
        updateDisplay();
    } else {
        console.log("niet genoeg punten");
    }
}

function autoclicker() {
    if (getal >= 100) {
        getal -= 100;
      getalPerSec += 1;
      alert("Auto-clicker gekocht! Je hebt er nu " + getalPerSec);
      sec.textContent = getalPerSec
      updateDisplay();
    }
  }

  function autockicker2(){
     if (getal >= 50){
        getal -= 50;
        getalPerSec += 2
        alert ("Auto-clicker gekocht! Je hebt er nu " + getalPerSec);
        sec.textContent = getalPerSec
        updateDisplay();
     }
  }

    setInterval(() => {
        if (getalPerSec > 0) {
        getal += getalPerSec;
          updateDisplay();
    }
}, 1000);

function veranderimg(){
    if(getal>= 300)
        getal -= 300;
    button.src = "images/2321-Shiny-Wailord.webp";
    document.body.style.backgroundColor = "#14193C";
    imgVeranderd = true
}

function speeluit(){
    if(!imgVeranderd){
        alert("Evolve eerst je Pokémon!");
        return;
    }
    if(getal >= 500)
    getal -= 500;
    button.src="images/pngtree-comic-speech-bubbles-with-text-you-win-png-image_4729144.jpeg";
    document.body.style.backgroundColor = "#14193C";
    updateDisplay();
}

button.addEventListener('click', verhoogGetal)
powerup.addEventListener('click', verhoogpower)
power2.addEventListener('click', autoclicker)
power3.addEventListener('click', autockicker2)
evolve.addEventListener('click', veranderimg)
win.addEventListener('click', speeluit)

// Bronnen
// ik heb op google 4 afbeeldingen opgezocht die allemaal copy richt free zijn.
// dit zijn de achtergrond
// en alle 3 de plaatjes die gelinkt zijn aan de buttons
// Verder heb ik chat GPT gebruikt om sommige dingen duidelijker uit te leggen en of te corrigeren.
// het geluid van het klikken komt ook uit google.

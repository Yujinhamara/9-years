const emailScreen = document.getElementById("emailScreen");
const envelopeScreen = document.getElementById("envelopeScreen");
const letterScreen = document.getElementById("letterScreen");
const fireScreen = document.getElementById("fireScreen");

const envelope = document.getElementById("envelope");
const readButton = document.getElementById("readButton");
const lastButton = document.getElementById("lastButton");
const burningPaper = document.getElementById("burningPaper");


// EMAIL → ENVELOPE

setTimeout(() => {

    emailScreen.classList.add("hidden");
    envelopeScreen.classList.remove("hidden");

}, 5000);


// OPEN ENVELOPE

readButton.addEventListener("click", () => {

    envelope.classList.add("open");

    readButton.style.opacity = "0";
    readButton.style.pointerEvents = "none";

    setTimeout(() => {

        envelopeScreen.classList.add("hidden");
        letterScreen.classList.remove("hidden");

    }, 2600);

});


// LAST BUTTON → FIRE

lastButton.addEventListener("click", () => {

    letterScreen.classList.add("hidden");

    fireScreen.classList.remove("hidden");

});


// AFTER BURNING

burningPaper.addEventListener("animationend", () => {

    burningPaper.style.display = "none";

});
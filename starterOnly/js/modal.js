// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const burgerBtn = document.getElementById('burger-btn');
const closeBtn = document.getElementById('close-btn');

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// Affichage et désaffichage du menu mobile au click
burgerBtn.addEventListener('click', () => {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
})

// Fermeture du modal
closeBtn.addEventListener('click', () => modalbg.style.display = "none")
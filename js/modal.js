// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const burgerBtn = document.getElementById('burger-btn');
const closeBtn = document.getElementById('close-btn');
var topNav = document.getElementById("myTopnav");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// Affichage et désaffichage du menu mobile au click
burgerBtn.addEventListener('click', () => {
  if (topNav.className === "topnav") {
    topNav.className += " responsive";
  } else {
    topNav.className = "topnav";
  }
})

// Fermeture du modal
closeBtn.addEventListener('click', () => modalbg.style.display = "none")
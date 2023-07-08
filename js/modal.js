// DOM Elements
const closeBtn = document.getElementById('close-btn')
const modalbg = document.querySelector('.bground')
const modalBtn = document.querySelectorAll('.modal-btn')
const formData = document.querySelectorAll('.formData')
const burgerButton = document.getElementById('burger-btn')
var topNav = document.getElementById('myTopnav')
const overlayModal = document.getElementById('overlay-modal')
const cross = document.getElementById('cross')

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener('click', launchModal))

// launch modal form
function launchModal() {
	modalbg.style.display = 'block'
}

// Affichage et désaffichage du menu mobile au click
burgerButton.addEventListener('click', () => {
	if (topNav.className === 'topnav') {
		topNav.className += ' responsive'
	} else {
		topNav.className = 'topnav'
	}
})

// Fermeture du modal
closeBtn.addEventListener('click', () => {
	modalbg.style.display = 'none'
	form.reset()
})

// Fermeture du modal de confirmation d'inscription
cross.addEventListener('click', () => {
	overlayModal.setAttribute('style', 'display: none')
	form.reset()
})

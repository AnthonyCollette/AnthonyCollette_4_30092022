// Récupération des éléments du DOM
const submitBtn = document.getElementById('btn-submit')
const first = document.getElementById('first')
const last = document.getElementById('last')
const email = document.getElementById('email')
const quantity = document.getElementById('quantity')
const location1 = document.getElementById('location1')
const location2 = document.getElementById('location2')
const location3 = document.getElementById('location3')
const location4 = document.getElementById('location4')
const location5 = document.getElementById('location5')
const location6 = document.getElementById('location6')
const checkbox = document.getElementById('checkbox1')
const birthdate = document.getElementById('birthdate')
const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
const actualYear = new Date().getFullYear()
const form = document.getElementById('form')
const errorFirst = document.getElementById('error-first')
const errorLast = document.getElementById('error-last')
const errorEmail = document.getElementById('error-email')
const errorLocation = document.getElementById('error-location')
const errorBirthdate1 = document.getElementById('error-birthdate-1')
const errorBirthdate2 = document.getElementById('error-birthdate-2')
const errorCheckbox = document.getElementById('error-checkbox')
const errorQuantity = document.getElementById('error-quantity')
const location1Input = document.getElementById('location1-input')
const location2Input = document.getElementById('location2-input')
const location3Input = document.getElementById('location3-input')
const location4Input = document.getElementById('location4-input')
const location5Input = document.getElementById('location5-input')
const location6Input = document.getElementById('location6-input')
const checkboxConditions = document.getElementById('checkbox-conditions')
const modal = document.getElementById('overlay-modal')
const h2Modal = document.getElementById('h2-modal')
const formParent = document.getElementById('bground')
const burgerBtn = document.getElementById('burger-btn')

// let validatedForm = false
// let validatedFirstName = true
// let validatedLastName = true
// let validatedEmail = true
// let validatedBirthday = true
// let validatedTournaments = true
// let validatedLocations = true
// let validatedCheckbox = true

// Enlever le lien du burger button
burgerBtn.addEventListener('click', (e) => e.preventDefault())

// Lancement de la fonction validate() au submit du formulaire
form.addEventListener('submit', () => {
	return validate()
})

let checkFirstName = (data) => {
	if (data.length < 2 || data === '' || !/\S/.test(data)) {
		return false
	}
	return true
}
let checkLastName = (data) => {
	if (data.length < 2 || data === '' || !/\S/.test(data)) {
		return false
	}
	return true
}
let checkEmail = (data) => {
	if (data === '' || !regex.test(data)) {
		return false
	}
	return true
}
let checkBirthday = (data) => {
	if (
		actualYear - new Date(data).getFullYear() < 18 ||
		isNaN(new Date(data).getFullYear())
	) {
		return false
	}
	if (actualYear - new Date(birthdate.value).getFullYear() > 122) {
		return false
	}
	return true
}
let checkTournaments = (data) => {
	if (isNaN(data) || data === '' || data < 0) {
		return false
	}
	return true
}
let checkLocation = () => {
	if (!location1.checked &&
		!location2.checked &&
		!location3.checked &&
		!location4.checked &&
		!location5.checked &&
		!location6.checked) {
			return false
	}
	return true
}
let checkCheckbox = () => {
	if (!checkbox.checked) {
		return false
	}
	return true
}

// Lancement de la fonction au clic du bouton d'envoi du formulaire
submitBtn.addEventListener('click', (e) => {
	e.preventDefault()
	// Reset des styles
	first.removeAttribute('style', 'border')
	errorFirst.removeAttribute('style', 'display')
	last.removeAttribute('style', 'border')
	errorLast.removeAttribute('style', 'display')
	email.removeAttribute('style', 'border')
	errorEmail.removeAttribute('style', 'display')
	birthdate.removeAttribute('style', 'border')
	errorBirthdate1.removeAttribute('style', 'display')
	errorBirthdate2.removeAttribute('style', 'display')
	quantity.removeAttribute('style', 'border')
	errorQuantity.removeAttribute('style', 'display')
	location1Input.removeAttribute('style', 'border')
	location2Input.removeAttribute('style', 'border')
	location3Input.removeAttribute('style', 'border')
	location4Input.removeAttribute('style', 'border')
	location5Input.removeAttribute('style', 'border')
	location6Input.removeAttribute('style', 'border')
	errorLocation.removeAttribute('style', 'display')
	checkbox.removeAttribute('style', 'border')
	errorCheckbox.removeAttribute('style', 'display')

	let validatedForm = false
	// let validatedFirstName = true
	// let validatedLastName = true
	// let validatedEmail = true
	// let validatedBirthday = true
	// let validatedTournaments = true
	// let validatedLocations = true
	// let validatedCheckbox = true



	// Vérification des données

	// Vérification que le prénom fasse au moins 2 caractères
	// if (first.value.length < 2 || first.value === '') {
	// 	first.setAttribute('style', 'border: 2px solid red')
	// 	errorFirst.setAttribute('style', 'display: block')
	// }
	// Vérification que le nom fasse au moins 2 caractères
	// else if (last.value.length < 2 || last.value === '') {
	// 	last.setAttribute('style', 'border: 2px solid red')
	// 	errorLast.setAttribute('style', 'display: block')
	// }
	// Vérification du format de l'adresse mail
	// else if (email.value === '' || !regex.test(email.value)) {
	// 	email.setAttribute('style', 'border: 2px solid red')
	// 	errorEmail.setAttribute('style', 'display: block')
	// }
	// Vérification de l'âge de l'utilisateur
	// else if (
	// 	actualYear - new Date(birthdate.value).getFullYear() < 18 ||
	// 	isNaN(new Date(birthdate.value).getFullYear())
	// ) {
	// 	if ((errorBirthdate2.style.display = 'block')) {
	// 		errorBirthdate2.style.display = 'none'
	// 	}
	// 	birthdate.setAttribute('style', 'border: 2px solid red')
	// 	errorBirthdate1.setAttribute('style', 'display: block')
	// } else if (actualYear - new Date(birthdate.value).getFullYear() > 122) {
	// 	if ((errorBirthdate1.style.display = 'block')) {
	// 		errorBirthdate1.style.display = 'none'
	// 	}
	// 	birthdate.setAttribute('style', 'border: 2px solid red')
	// 	errorBirthdate2.setAttribute('style', 'display: block')
	// }
	// Vérification du format de la quantité envoyée
	// else if (isNaN(quantity.value) || quantity.value === '') {
	// 	quantity.setAttribute('style', 'border: 2px solid red')
	// 	errorQuantity.setAttribute('style', 'display: block')
	// }
	// Vérification qu'une ville soit sélectionnée
	// else if (
	// 	!location1.checked &&
	// 	!location2.checked &&
	// 	!location3.checked &&
	// 	!location4.checked &&
	// 	!location5.checked &&
	// 	!location6.checked
	// ) {
	// 	location1Input.setAttribute('style', 'border: 2px solid red')
	// 	location2Input.setAttribute('style', 'border: 2px solid red')
	// 	location3Input.setAttribute('style', 'border: 2px solid red')
	// 	location4Input.setAttribute('style', 'border: 2px solid red')
	// 	location5Input.setAttribute('style', 'border: 2px solid red')
	// 	location6Input.setAttribute('style', 'border: 2px solid red')
	// 	errorLocation.setAttribute('style', 'display: block')
	// }
	// Vérification que la checkbox des conditions d'utilisation soit cochée
	// else if (!checkbox.checked) {
	// 	checkboxConditions.setAttribute('style', 'border: 2px solid red')
	// 	errorCheckbox.setAttribute('style', 'display: block')
	// } else {

	// checkFirstName(first.value)
	// checkLastName(last.value)
	// checkEmail(email.value)
	// checkBirthday(birthdate.value)
	// checkTournaments(quantity.value)
	// checkLocation()
	// checkCheckbox()

	if (checkFirstName(first.value) && checkLastName(last.value) && checkEmail(email.value) && checkBirthday(birthdate.value) && checkTournaments(quantity.value) && checkLocation() && checkCheckbox()) {
		validatedForm = true
	}
	console.log(validatedForm)
	if (!validatedForm) {
		console.log('Formulaire non valide !')
		validatedForm = false
	}

	if (validatedForm) {
		console.log('formulaire envoyé !')
		const firstName = first.value
		const locations = [
			location1,
			location2,
			location3,
			location4,
			location5,
			location6
		]

		// Création du formulaire à envoyer
		const formSend = new FormData()
		// Récupération de la ville sélectionnée
		const locationSelected = locations.filter((location) => location.checked)
		// Ajout des valeurs souhaitées au formulaire
		formSend.append('first', firstName)
		formSend.append('location', locationSelected[0].value)
		// Récupération des valeurs ajoutées au formulaire
		const displayFirst = formSend.get('first')
		const displayCity = formSend.get('location')
		// Affichage des informations dynamiques
		h2Modal.innerHTML = `Merci ${displayFirst} de vous être enregitré⸱e ! <br /> Nous vous retrouverons bientôt à ${displayCity} !`
		modal.setAttribute('style', 'display: flex')
		formParent.setAttribute('style', 'display: none')
		validatedForm = ''
	}


}
)


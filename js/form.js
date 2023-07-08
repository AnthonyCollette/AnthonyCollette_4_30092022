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
const errorBirthdate = document.getElementById('error-birthdate')
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
const closeModalBtn = document.getElementById('close-btn')

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

let resetStyles = () => {
	first.removeAttribute('style', 'border')
	errorFirst.removeAttribute('style', 'display')
	errorFirst.innerHTML = ''

	last.removeAttribute('style', 'border')
	errorLast.removeAttribute('style', 'display')
	errorLast.innerHTML = ''

	email.removeAttribute('style', 'border')
	errorEmail.removeAttribute('style', 'display')
	errorEmail.innerHTML = ''

	birthdate.removeAttribute('style', 'border')
	birthdate.removeAttribute('style', 'display')
	errorBirthdate.innerHTML = ''

	quantity.removeAttribute('style', 'border')
	errorQuantity.removeAttribute('style', 'display')
	errorQuantity.innerHTML = ''

	location1Input.removeAttribute('style', 'border')
	location2Input.removeAttribute('style', 'border')
	location3Input.removeAttribute('style', 'border')
	location4Input.removeAttribute('style', 'border')
	location5Input.removeAttribute('style', 'border')
	location6Input.removeAttribute('style', 'border')
	errorLocation.removeAttribute('style', 'display')
	errorLocation.innerHTML = ''

	checkboxConditions.removeAttribute('style', 'border')
	errorCheckbox.removeAttribute('style', 'display')
	errorCheckbox.innerHTML = ''
}

closeModalBtn.addEventListener('click', () => {
	resetStyles()
})

// Lancement de la fonction validate() au submit du formulaire
form.addEventListener('submit', () => {
	return validate()
})

let checkFirstName = (data) => {

	if (data.length < 2 || data === '' || !/\S/.test(data)) {
		first.setAttribute('style', 'border: 2px solid red')
		errorFirst.setAttribute('style', 'display: block')
		errorFirst.innerHTML = `Veuillez entrer 2 caractères ou plus pour le champ du prénom.`
		return false
	}
	return true
}
let checkLastName = (data) => {

	if (data.length < 2 || data === '' || !/\S/.test(data)) {
		last.setAttribute('style', 'border: 2px solid red')
		errorLast.setAttribute('style', 'display: block')
		errorLast.innerHTML = `Veuillez entrer 2 caractères ou plus pour le champ du nom.`
		return false
	}
	return true
}
let checkEmail = (data) => {

	if (data == '') {
		email.setAttribute('style', 'border: 2px solid red')
		errorEmail.setAttribute('style', 'display: block')
		errorEmail.innerHTML = `Veuillez renseigner votre adresse email.`
		return false
	}
	if (!regex.test(data)) {
		email.setAttribute('style', 'border: 2px solid red')
		errorEmail.setAttribute('style', 'display: block')
		errorEmail.innerHTML = `Veuillez renseigner une adresse email valide.`
		return false
	}
	return true
}
let checkBirthday = (data) => {
	const splitDate = data.split("-")
	let year = splitDate[0]
	let month = splitDate[1]
	let day = splitDate[2]
	let isValidDate = (year, month, day) => {
		var d = new Date(year, month, day);
		if (d.getFullYear() == year && d.getMonth() == month && d.getDate() == day) {
			return true;
		}
		return false;
	}

	if (!isValidDate(year, month, day)) {
		console.log('NOPE')
		birthdate.setAttribute('style', 'border: 2px solid red')
		errorBirthdate.setAttribute('style', 'display: block')
		errorBirthdate.innerHTML = `Vous devez entrer une date existante.`
		return false
	}

	if (data === '') {
		birthdate.setAttribute('style', 'border: 2px solid red')
		errorBirthdate.setAttribute('style', 'display: block')
		errorBirthdate.innerHTML = `Vous devez entrer votre date de naissance.`
		return false
	}
	if (actualYear - new Date(data).getFullYear() < 18) {
		birthdate.setAttribute('style', 'border: 2px solid red')
		errorBirthdate.setAttribute('style', 'display: block')
		errorBirthdate.innerHTML = `Vous n'avez pas l'âge requis.`
		return false
	}
	if (actualYear - new Date(birthdate.value).getFullYear() > 122) {
		birthdate.setAttribute('style', 'border: 2px solid red')
		errorBirthdate.setAttribute('style', 'display: block')
		errorBirthdate.innerHTML = `Vous devez être la personne la plus âgée sur Terre.`
		return false
	}
	return true
}
let checkTournaments = (data) => {

	if (isNaN(data)) {
		quantity.setAttribute('style', 'border: 2px solid red')
		errorQuantity.setAttribute('style', 'display: block')
		errorQuantity.innerHTML = `Merci de renseigner un chiffre.`
		return false
	}
	if (data === '') {
		quantity.setAttribute('style', 'border: 2px solid red')
		errorQuantity.setAttribute('style', 'display: block')
		errorQuantity.innerHTML = `Merci de renseigner le nombre de tournois déjà effectués.`
		return false
	}
	if (data < 0) {
		quantity.setAttribute('style', 'border: 2px solid red')
		errorQuantity.setAttribute('style', 'display: block')
		errorQuantity.innerHTML = `Merci de renseigner un chiffre correct.`
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
		location1Input.setAttribute('style', 'border: 2px solid red')
		location2Input.setAttribute('style', 'border: 2px solid red')
		location3Input.setAttribute('style', 'border: 2px solid red')
		location4Input.setAttribute('style', 'border: 2px solid red')
		location5Input.setAttribute('style', 'border: 2px solid red')
		location6Input.setAttribute('style', 'border: 2px solid red')
		errorLocation.setAttribute('style', 'display: block')
		errorLocation.innerHTML = `Vous devez choisir une option.`
		return false
	}
	return true
}
let checkCheckbox = () => {

	if (!checkbox.checked) {
		checkboxConditions.setAttribute('style', 'border: 2px solid red')
		errorCheckbox.setAttribute('style', 'display: block')
		errorCheckbox.innerHTML = `Vous devez vérifier que vous acceptez les termes et conditions.`
		return false
	}
	return true
}


// Lancement de la fonction au clic du bouton d'envoi du formulaire
submitBtn.addEventListener('click', (e) => {
	e.preventDefault()
	resetStyles()
	let validatedForm = false

	checkFirstName(first.value)
	checkLastName(last.value)
	checkEmail(email.value)
	checkBirthday(birthdate.value)
	checkTournaments(quantity.value)
	checkLocation()
	checkCheckbox()

	if (checkFirstName(first.value) && checkLastName(last.value) && checkEmail(email.value) && checkBirthday(birthdate.value) && checkTournaments(quantity.value) && checkLocation() && checkCheckbox()) {
		validatedForm = true
	}

	if (!validatedForm) {
		validatedForm = false
	}

	if (validatedForm) {
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


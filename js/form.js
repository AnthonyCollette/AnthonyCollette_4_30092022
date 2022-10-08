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
const modal = document.getElementById('overlay-modal')
const h2Modal = document.getElementById('h2-modal')
const formParent = document.getElementById('bground')

submitBtn.addEventListener('click', (e) => {
	e.preventDefault()
	// Reset des styles
	if (first.getAttribute('style', 'border: 2px solid red')) {
		first.removeAttribute('style', 'border')
		errorFirst.removeAttribute('style', 'display')
	}
	if (last.getAttribute('style', 'border: 2px solid red')) {
		last.removeAttribute('style', 'border')
		errorLast.removeAttribute('style', 'display')
	}
	if (email.getAttribute('style', 'border: 2px solid red')) {
		email.removeAttribute('style', 'border')
		errorEmail.removeAttribute('style', 'display')
	}
	if (birthdate.getAttribute('style', 'border: 2px solid red')) {
		birthdate.removeAttribute('style', 'border')
		errorBirthdate1.removeAttribute('style', 'display')
		errorBirthdate2.removeAttribute('style', 'display')
	}
	if (quantity.getAttribute('style', 'border: 2px solid red')) {
		quantity.removeAttribute('style', 'border')
		errorQuantity.removeAttribute('style', 'display')
	}
	if (location1Input.getAttribute('style', 'border: 2px solid red')) {
		location1Input.removeAttribute('style', 'border')
		location2Input.removeAttribute('style', 'border')
		location3Input.removeAttribute('style', 'border')
		location4Input.removeAttribute('style', 'border')
		location5Input.removeAttribute('style', 'border')
		location6Input.removeAttribute('style', 'border')
		errorLocation.removeAttribute('style', 'display')
	}
	if (checkbox.getAttribute('style', 'border: 2px solid red')) {
		checkbox.removeAttribute('style', 'border')
		errorCheckbox.removeAttribute('style', 'display')
	}

	// Vérification des données
	if (first.value.length < 2 || first.value === '') {
		first.setAttribute('style', 'border: 2px solid red')
		errorFirst.setAttribute('style', 'display: block')
	} else if (last.value.length < 2 || last.value === '') {
		last.setAttribute('style', 'border: 2px solid red')
		errorLast.setAttribute('style', 'display: block')
	} else if (email.value === '' || !regex.test(email.value)) {
		email.setAttribute('style', 'border: 2px solid red')
		errorEmail.setAttribute('style', 'display: block')
	} else if (
		actualYear - new Date(birthdate.value).getFullYear() < 18 ||
		isNaN(new Date(birthdate.value).getFullYear())
	) {
		if ((errorBirthdate2.style.display = 'block')) {
			errorBirthdate2.style.display = 'none'
		}
		birthdate.setAttribute('style', 'border: 2px solid red')
		errorBirthdate1.setAttribute('style', 'display: block')
	} else if (actualYear - new Date(birthdate.value).getFullYear() > 122) {
		if ((errorBirthdate1.style.display = 'block')) {
			errorBirthdate1.style.display = 'none'
		}
		birthdate.setAttribute('style', 'border: 2px solid red')
		errorBirthdate2.setAttribute('style', 'display: block')
	} else if (isNaN(quantity.value) || quantity.value === '') {
		quantity.setAttribute('style', 'border: 2px solid red')
		errorQuantity.setAttribute('style', 'display: block')
	} else if (
		!location1.checked &&
		!location2.checked &&
		!location3.checked &&
		!location4.checked &&
		!location5.checked &&
		!location6.checked
	) {
		location1Input.setAttribute('style', 'border: 2px solid red')
		location2Input.setAttribute('style', 'border: 2px solid red')
		location3Input.setAttribute('style', 'border: 2px solid red')
		location4Input.setAttribute('style', 'border: 2px solid red')
		location5Input.setAttribute('style', 'border: 2px solid red')
		location6Input.setAttribute('style', 'border: 2px solid red')
		errorLocation.setAttribute('style', 'display: block')
	} else if (!checkbox.checked) {
		checkbox.setAttribute('style', 'border: 2px solid red')
		errorCheckbox.setAttribute('style', 'display: block')
	} else {
		// localStorage.setItem('firstname', first.value)
		const firstName = first.value
		const locations = [
			location1,
			location2,
			location3,
			location4,
			location5,
			location6,
		]
		const locationSelected = locations.filter((location) => location.checked)
		h2Modal.innerHTML = `Merci ${firstName} de vous être enregitré⸱e ! <br /> Nous vous retrouverons bientôt à ${locationSelected[0].value} !`
		modal.setAttribute('style', 'display: flex')
		formParent.setAttribute('style', 'display: none')
	}
})

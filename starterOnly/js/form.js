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

submitBtn.addEventListener('click', (e) => {
	e.preventDefault()
	// let year = new Date(birthdate.value).getFullYear()
	// let age =
	// Vérification des données
	if (first.value.length < 3 || first.value === '') {
		alert('Merci de renseigner votre prénom')
	} else if (last.value.length < 3 || last.value === '') {
		alert('Merci de renseigner votre nom')
	} else if (email.value === '' || !regex.test(email.value)) {
		alert('Merci de renseigner votre adresse mail')
	} else if (isNaN(quantity.value) || quantity.value === '') {
		alert('Merci de renseigner un chiffre')
	} else if (
		!location1.checked &&
		!location2.checked &&
		!location3.checked &&
		!location4.checked &&
		!location5.checked &&
		!location6.checked
	) {
		alert('Merci de séléctionner une destination')
	} else if (!checkbox.checked) {
		alert("Merci d'accepeter les conditions d'utilisation")
	} else if (actualYear - new Date(birthdate.value).getFullYear() < 18) {
		alert("Vous n'avez pas l'âge requis")
	} else if (actualYear - new Date(birthdate.value).getFullYear() > 122) {
		alert('Il semblerait que vous soyez la personne la plus âgée sur Terre !')
	} else {
		alert('Merci ! Votre réservation a été reçue.')
		form.reset()
	}
})

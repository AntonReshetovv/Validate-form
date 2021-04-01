import { isValidate, isValidPassword, isValidEmail, isValidConfirmPassword } from './utils'
import './css/style.css'

const form = document.getElementById('form')
const email = document.getElementById('inputEmail')
const password = document.getElementById('inputPassword')
const confirmPassword = document.getElementById('inputConfirmPassword')

email.addEventListener('blur', () => {
    isValidEmail(email)
})

password.addEventListener('blur', () => {
    isValidPassword(password)
})

confirmPassword.addEventListener('blur', () => {
    isValidConfirmPassword(password, confirmPassword)
})

form.addEventListener('submit', (event) => {
    event.preventDefault()
    isValidate(email, password, confirmPassword)
})
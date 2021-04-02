import { isValidate, isValidPassword, isValidEmail, isValidConfirmPassword } from './utils'
import './css/style.css'

const form = document.getElementById('form')
const email = document.getElementById('inputEmail')
const password = document.getElementById('inputPassword')
const confirmPassword = document.getElementById('inputConfirmPassword')
const btn = document.getElementById('submit')

email.addEventListener('blur', () => {
    isValidEmail(email)
    btn.disabled = !isValidEmail(email)
})

password.addEventListener('blur', () => {
    isValidPassword(password)
    btn.disabled = !isValidPassword(password)
})

confirmPassword.addEventListener('blur', () => {
    isValidConfirmPassword(password, confirmPassword)
    btn.disabled = !isValidConfirmPassword(password,confirmPassword)
})


form.addEventListener('submit', (event) => {
    event.preventDefault()
    isValidate(email, password, confirmPassword)

    const person = {
        email: isValidEmail(email),
        password: isValidPassword(password),
        confirmPassword: (password.value === confirmPassword.value) ? true : false,
    }

    console.log(person)

    btn.disabled = true
    email.value = ""
    password.value = ""
    confirmPassword.value = ""
    btn.disabled = false
})
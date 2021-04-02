
const regExpEmail = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i
const regExpPassword = /^.{6,}$/

export function isValidate(email, password, confirmPassword) {
    isValidEmail(email)
    isValidPassword(password)
    isValidConfirmPassword(password, confirmPassword)
}

export function isValidEmail(email) {
    if (email.value === '') {
        email.nextElementSibling.textContent = "Необходимо заполнить «Электронную почту»"
    } else if (!regExpEmail.test(email.value)) {
        email.nextElementSibling.textContent = 'Значение «Электронной почты» не является правильным адресом «Электронной почты»'
    } else {
        email.nextElementSibling.textContent = ""
        return email.value
    }
}

export function isValidPassword(password) {
    if (password.value === '') {
        password.nextElementSibling.textContent = "Необходимо заполнить «Пароль»"
    } else if (!regExpPassword.test(password.value)) {
        password.nextElementSibling.textContent = "Значение «Пароль» должно содержать минимум 6 символов"
    } else {
        password.nextElementSibling.textContent = ""
        return password.value
    }
}

export function isValidConfirmPassword(password, confirmPassword) {
    if (confirmPassword.value === "") {
        confirmPassword.nextElementSibling.textContent = "Необходимо заполнить «Повторите пароль»"
    } else if (confirmPassword.value !== password.value) {
        confirmPassword.nextElementSibling.textContent = "Пароли не совпадают"
    } else {
        confirmPassword.nextElementSibling.textContent = ""
        return confirmPassword.value
    }
}
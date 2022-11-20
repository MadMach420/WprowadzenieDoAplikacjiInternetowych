const password = document.getElementById("password")
const repeat = document.getElementById("repeat")
const eightChars = document.getElementById("8-chars")
const specialChar = document.getElementById("special-char")
const capitalChar = document.getElementById("capital-char")
const digit = document.getElementById("digit")
const passwordVisibility = document.querySelector("#button-password")
const repeatVisibility = document.querySelector("#button-repeat")

passwordVisibility.addEventListener("click", (event) => {
    event.preventDefault()
    const elementToToggle = password

    if (elementToToggle.type == "password") {
        elementToToggle.type = "text"
    } else {
        elementToToggle.type = "password"
    }
})

repeatVisibility.addEventListener("click", (event) => {
    event.preventDefault()
    const elementToToggle = repeat

    if (elementToToggle.type == "password") {
        elementToToggle.type = "text"
    } else {
        elementToToggle.type = "password"
    }
})

password.addEventListener("input", (event) => {
    let text = password.value
    let conditions = [checkEightChars(text), checkSpecialCharacter(text), checkCapitalLetter(text), checkDigit(text)]

    if (conditions[0] && conditions[1] && conditions[2] && conditions[3]) {
        password.setCustomValidity("")
    } else {
        password.setCustomValidity("Conditions not fulfilled")
    }

    repeat.dispatchEvent(new CustomEvent("input"))
})

repeat.addEventListener("input", (event) => {
    if (repeat.value == password.value) {
        repeat.setCustomValidity("")
    } else {
        repeat.setCustomValidity("Passwords not identical")
    }
})

function checkEightChars(text) {
    if (text.length >= 8) {
        eightChars.classList.add("fulfilled")
        return true
    } else {
        eightChars.classList.remove("fulfilled")
        return false
    }
}

function checkSpecialCharacter(text) {
    if (text.match(/[^A-Za-z0-9]/)) {
        specialChar.classList.add("fulfilled")
        return true
    } else {
        specialChar.classList.remove("fulfilled")
        return false
    }
}

function checkCapitalLetter(text) {
    if (text.match(/[A-Z]/)) {
        capitalChar.classList.add("fulfilled")
        return true
    } else {
        capitalChar.classList.remove("fulfilled")
        return false
    }
}

function checkDigit(text) {
    if (text.match(/[0-9]/)) {
        digit.classList.add("fulfilled")
        return true
    } else {
        digit.classList.remove("fulfilled")
        return false
    }
}

const nameInput = document.getElementById("name")
const phoneInput = document.getElementById("phone")
const form = document.getElementById("form")
const phonebook = document.getElementById("phonebook")

nameInput.addEventListener("input", (event) => {
    let regex = /^\p{Lu}\p{Ll}*(-\p{Lu}\p{Ll}*)? \p{Lu}\p{Ll}*(-\p{Lu}\p{Ll}*)?$/u
    if (event.target.value.match(regex)) {
        nameInput.setCustomValidity("")
    } else {
        nameInput.setCustomValidity("Invalid value")
    }
})

phoneInput.addEventListener("input", (event) => {
    let regex = /^\+?([0-9]{3})?(\s*[0-9]\s*){9}$/
    if (event.target.value.match(regex)) {
        phoneInput.setCustomValidity("")
    } else {
        phoneInput.setCustomValidity("Invalid value")
    }
})

form.addEventListener("submit", (event) => {
    event.preventDefault()

    const data = {}
    new FormData(event.target).forEach((value, key) => {
        data[key] = value
    })
    data["phone"] = parsePhone(data["phone"])

    createRecord(data)

    nameInput.value = ""
    phoneInput.value = ""
})

function parsePhone(phoneNo) {
    phoneNo = phoneNo.replace(/\s/g, '')
    if (phoneNo[0] === '+') {
        return '+' + phoneNo.substring(1).replace(/.{3}(?!$)/g, "$& ")
    } else {
        return phoneNo.replace(/.{3}(?!$)/g, "$& ")
    }
}

function createRecord(data) {
    const record = document.createElement("div")
    record.classList.add("record")

    const nameAndPhone = document.createElement("div")
    nameAndPhone.classList.add("name-phone")

    const name = document.createElement("div")
    name.innerText = data["name"]
    name.classList.add("record-name")
    nameAndPhone.appendChild(name)

    const phone = document.createElement("div")
    phone.innerText = data["phone"]
    phone.classList.add("record-phone")
    nameAndPhone.appendChild(phone)

    record.appendChild(nameAndPhone)

    const del = document.createElement("button")
    del.classList.add("del")
    const image = document.createElement("img")
    image.src = "./trash.png"
    del.appendChild(image)
    record.appendChild(del)

    del.addEventListener("click", (event) => {
        del.parentElement.remove()
    })

    phonebook.appendChild(record)
}
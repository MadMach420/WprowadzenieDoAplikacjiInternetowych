const incrementButton = document.getElementById("increment")
const onButton = document.getElementById("on")
const offButton = document.getElementById("off")
const showCounter = document.getElementById("counter")
let counter = 0

function turnOnCounter () {
    incrementButton.addEventListener("click", increment)
    showCounter.innerText = "Włączono licznik"
}

function turnOffCounter () {
    incrementButton.removeEventListener("click", increment)
    showCounter.innerText = "Wyłączono licznik"
}

function increment() {
    counter++
    showCounter.innerText = `Wynik: ${counter}`
}

onButton.addEventListener("click", turnOnCounter)
offButton.addEventListener("click", turnOffCounter)

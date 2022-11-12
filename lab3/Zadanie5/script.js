const blue = document.getElementById("blue")
const red = document.getElementById("red")
const yellow = document.getElementById("yellow")
const resetButton = document.getElementById("reset")
const stopStartButton = document.getElementById("stop-start")
const switchButton = document.getElementById("switch")
const counter = document.getElementById("counter")
const info = document.getElementById("info")

let points = 0
let propagation = true
let displayedInfo = false

function changePropagation() {
    propagation = !propagation
}

function reset() {
    [blue, red, yellow].forEach(element => {
        element.removeEventListener("click", addPoints)
        element.addEventListener("click", addPoints)
    })

    points = 0
    propagation = true
    red.style.backgroundColor = "red"
    yellow.style.backgroundColor = "yellow"

    displayPoints()
    info.innerText = ""
}

function checkPoints() {
    if (points > 30) {
        red.removeEventListener("click", addPoints)
        red.style.backgroundColor = "grey"
        if (points > 50) {
            yellow.removeEventListener("click", addPoints)
            yellow.style.backgroundColor = "grey"
        }
    }
}

function addPoints(event) {
    switch (event.currentTarget.id) {
        case "blue":
            points += 1
            break;
        case "red":
            points += 2
            break;
        case "yellow":
            points += 5
            break;
    
        default:
            break;
    }

    if (!displayedInfo) {
        if (event.target === event.currentTarget || event.currentTarget.contains(event.target)) {
            displayedInfo = true
            displayInfo(event.currentTarget.id)
        }
    }

    if (!propagation) {
        event.stopPropagation()
    }

    if (event.currentTarget.id === "blue" || !propagation) {
        displayedInfo = false
        checkPoints()
        displayPoints()
    }
}

function displayPoints() {
    counter.innerText = `Punkty: ${points}`
}

function displayInfo(target) {
    switch (target) {
        case "blue":
            info.innerText = "nacisnąłeś niebieski o wartości 1"
            break;
        case "red":
            info.innerText = "nacisnąłeś czerwony o wartości 2"
            break;
        case "yellow":
            info.innerText = "nacisnąłeś zółty o wartości 5"
            break;
    
        default:
            break;
    }
}

[blue, red, yellow].forEach(element => {
    element.addEventListener("click", addPoints)
})
stopStartButton.addEventListener("click", changePropagation)
resetButton.addEventListener("click", reset)
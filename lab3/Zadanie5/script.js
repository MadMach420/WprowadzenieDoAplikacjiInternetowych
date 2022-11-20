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
let switchCall = false
let lastDiv = "blue"
let displayedInfo = false

function changePropagation() {
    propagation = !propagation
}

function reset() {
    [blue, red, yellow].forEach(element => {
        element.removeEventListener("click", addPoints, true)
        element.removeEventListener("click", addPoints, false)
        element.addEventListener("click", addPoints, false)
    })

    points = 0
    propagation = true
    switchCall = false
    red.style.backgroundColor = "red"
    yellow.style.backgroundColor = "yellow"

    displayPoints()
    info.innerText = ""
}

function switchCallOrder() {
    switchCall = !switchCall;
    [blue, red, yellow].forEach(element => {
        element.removeEventListener("click", addPoints, !switchCall)
        element.addEventListener("click", addPoints, switchCall)
    })
    if (switchCall) {
        lastDiv = "yellow"
    } else {
        lastDiv = "blue"
    }
    checkPoints()
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
    
    if (!propagation) {
        event.stopPropagation()
    }


    if (!displayedInfo) {
        if (event.currentTarget.contains(event.target) || event.target === event.currentTarget) {
            displayedInfo = true
            displayInfo(event.currentTarget.id)
        }
    }

    if (event.currentTarget.id === lastDiv || !propagation || switchCall) {
        displayedInfo = false
        // checkPoints()
        displayPoints()

        if (event.currentTarget.id === lastDiv || !propagation) {
            checkPoints()
        }
    }
}

function checkPoints() {
    if (points > 30) {
        red.removeEventListener("click", addPoints,false)
        red.removeEventListener("click", addPoints, true)
        red.style.backgroundColor = "grey"
        if (points > 50) {
            yellow.removeEventListener("click", addPoints, false)
            yellow.removeEventListener("click", addPoints, true)
            yellow.style.backgroundColor = "grey"
        }
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
    element.addEventListener("click", addPoints, false)
})
stopStartButton.addEventListener("click", changePropagation)
resetButton.addEventListener("click", reset)
switchButton.addEventListener("click", switchCallOrder)
const e = require("express")

function getCities() {
    const req = new XMLHttpRequest()

    req.onload = (event) => {
        const data = JSON.parse(req.response)
        taskA(data)
        taskB(data)
        taskC(data)
        taskD(data)
        taskE(data)
        taskF(data)
        taskG(data)
    }

    req.open("GET", "http://localhost:3000/cities")
    req.send()
}

function taskA(data) {
    let text = "a) "
    data.forEach(element => {
        if (element.province === "małopolskie") {
            text += element.name + ", "
        }
    })
    document.getElementById("a").innerText = text
}

function taskB(data) {
    let text = "b) "
    data.forEach(element => {
        if (element.name.match(/[Aa].*[Aa]/)) {
            text += element.name + ", "
        }
    })
    text += "\n\nZakładam, że miałem wyświetlić miasta które mają co najmniej 2 a, jeśli ma mieć dokładnie 2, to trzeba zmienić regex na: /^[^Aa]*[Aa][^Aa]*[Aa][^Aa]*$/"
    document.getElementById("b").innerText = text
}

function taskC(data) {
    data.sort((a, b) => {
        return b.dentensity - a.dentensity
    })
    let text = `c) ${data[4].name}`
    document.getElementById("c").innerText = text
}

function taskD(data) {
    let text = "d) "
    data.forEach(element => {
        if (element.people > 100000) {
            text += element.name + " city, "
        } else {
            text += element.name + ", "
        }
    })
    document.getElementById("d").innerText = text
}

function taskE(data) {
    let over = under = 0
    let text = "e) "
    data.forEach(element => {
        if (element.people > 80000) {
            over += 1
        } else {
            under += 1
        }
    })
    let winner = over > under ? "powyżej" : "poniżej"
    text += `Powyżej 80000: ${over}, poniżej 80000 ${under}.\nWięcej jest miast ${winner} 80000 mieszkańców.`
    document.getElementById("e").innerText = text
}

function taskF(data) {
    let text = "f) "
    let totalArea = 0
    let divisor = 0
    data.forEach(element => {
        if (element.township[0] === 'p') {
            totalArea += element.area
            divisor++
        }
    })
    text += totalArea / divisor
    document.getElementById("f").innerText = text
}

function taskG(data) {
    let text = "g) "
    let allOver5000 = true
    let counter = 0
    data.forEach(element => {
        if (element.province === "pomorskie" ) {
            if (element.people <= 5000) {
                allOver5000 = false
            } else {
                counter += 1
            }
        }
    })
    if (allOver5000) {
        text += "Wszystkie miasta w województwie pomorskim są większe od 5000 osób"
    } else {
        text += "Nie wszystkie miasta w województwie pomorskim są większe od 5000 osób"
    }
    text += `\nLiczba miast większych: ${counter}`
    document.getElementById("g").innerText = text
}
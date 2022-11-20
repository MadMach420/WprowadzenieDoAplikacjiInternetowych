const leftButton = document.getElementById("left")
const rightButton = document.getElementById("right")
const randomButton = document.getElementById("random")
const cardContainer = document.getElementById("card-container")
const employees = [
    {name: "Krzysztof Mach", position: "Backend developer", img: "./images/avatar.png", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat eveniet ratione distinctio tempore ducimus facilis, quis officia fugiat magni dolor."},
    {name: "Jan Kowalski", position: "Frontend developer", img: "./images/avatar.png", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat eveniet ratione distinctio tempore ducimus facilis, quis officia fugiat magni dolor."},
    {name: "Mrzysztof Kach", position: "Project manager", img: "./images/avatar.png", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat eveniet ratione distinctio tempore ducimus facilis, quis officia fugiat magni dolor."}
]
let index = 0

function mod(n, m) {
    return ((n % m) + m) % m
}

function createCard() {
    const card = document.createElement("div")
    card.classList.add("card")

    const photo = document.createElement("img")
    photo.src = employees[index].img
    card.appendChild(photo)

    const name = document.createElement("div")
    name.classList.add("name")
    name.innerText = employees[index].name
    card.appendChild(name)

    const position = document.createElement("div")
    position.classList.add("position")
    position.innerText = employees[index].position
    card.appendChild(position)

    const description = document.createElement("div")
    description.classList.add("description")
    description.innerText  = employees[index].description
    card.appendChild(description)
    
    return card
}

function rightCard() {
    leftButton.removeEventListener("click", leftCard)
    rightButton.removeEventListener("click", rightCard)
    randomButton.removeEventListener("click", randomCard)

    const previousCard = cardContainer.childNodes[0]
    previousCard.style.transition = "all 0.5s ease-in-out"
    previousCard.style.opacity = "0"
    previousCard.style.transform = "translateX(20vw)"
    previousCard.addEventListener("transitionend", (event) => {
        previousCard.remove()
        const newCard = createCard()
        newCard.classList.add("slide-in-left")
        cardContainer.insertBefore(newCard, cardContainer.childNodes[0])
        newCard.addEventListener("animationend", () => {
            leftButton.addEventListener("click", leftCard)
            rightButton.addEventListener("click", rightCard)
            randomButton.addEventListener("click", randomCard)
        })
    }, {once: true})
    index = mod((index + 1), employees.length)
    setTimeout(()=>{}, 1000)
}

function leftCard() {
    leftButton.removeEventListener("click", leftCard)
    rightButton.removeEventListener("click", rightCard)
    randomButton.removeEventListener("click", randomCard)

    const previousCard = cardContainer.childNodes[0]
    previousCard.style.transition = "all 0.5s ease-in-out"
    previousCard.style.opacity = "0"
    previousCard.style.transform = "translateX(-20vw)"
    previousCard.addEventListener("transitionend", (event) => {
        previousCard.remove()
        const newCard = createCard()
        newCard.classList.add("slide-in-right")
        cardContainer.insertBefore(newCard, cardContainer.childNodes[0])
        newCard.addEventListener("animationend", () => {
            leftButton.addEventListener("click", leftCard)
            rightButton.addEventListener("click", rightCard)
            randomButton.addEventListener("click", randomCard)
        })
    }, {once : true})
    index = mod((index - 1), employees.length)
}

function randomCard() {
    leftButton.removeEventListener("click", leftCard)
    rightButton.removeEventListener("click", rightCard)
    randomButton.removeEventListener("click", randomCard)

    const previousCard = cardContainer.childNodes[0]
    previousCard.style.transition = "all 0.5s ease-in-out"
    previousCard.style.opacity = "0"
    previousCard.style.transform = "translateX(20vw)"
    previousCard.addEventListener("transitionend", (event) => {
        previousCard.remove()
        index = Math.floor(Math.random() * employees.length)
        const newCard = createCard()
        newCard.classList.add("slide-in-left")
        cardContainer.insertBefore(newCard, cardContainer.childNodes[0])
        newCard.addEventListener("animationend", () => {
            leftButton.addEventListener("click", leftCard)
            rightButton.addEventListener("click", rightCard)
            randomButton.addEventListener("click", randomCard)
        })
    }, {once : true})
    index = mod((index + 1), employees.length)
}

leftButton.addEventListener("click", leftCard)
rightButton.addEventListener("click", rightCard)
randomButton.addEventListener("click", randomCard)

const initCard = createCard()
initCard.classList.add("slide-in-left")
cardContainer.insertBefore(initCard, cardContainer.childNodes[0])

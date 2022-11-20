const container = document.getElementById("container")
const circle = document.getElementById("circle")
const text = document.getElementById("text")

document.body.addEventListener("click", (event) => {
    text.innerText = "Naciśnięto poza dozwolonym obszarem"
})

container.addEventListener("click", (event) => {
    event.stopPropagation()
    text.innerText = ""
    circle.style.left = event.clientX - container.offsetLeft + "px"
    circle.style.top = event.clientY - container.offsetTop + "px"
})
const photos = ["./images/img1", "./images/img2", "./images/img3"]
let currIndex = 1

function foo() {
    document.getElementById("photo").src = photos[currIndex]
    currIndex = (currIndex + 1) % photos.length
}

document.getElementById("change-photo").addEventListener("click", foo)

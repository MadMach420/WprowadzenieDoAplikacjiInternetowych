const list =  document.getElementById("list")

function modifyList(add) {
    if (add) {
        const newChild = document.createElement("li")
        newChild.innerText = "hehe"
        list.appendChild(newChild)
        console.log("child appended")
    } else {
        if (list.firstChild == null) return
        list.removeChild(list.firstChild)
        console.log("child removed")
    }
}
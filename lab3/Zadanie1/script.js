function buttonPrompt() {
    let name  = prompt("Tu wpisz swoje imię", "Saul Goodman")
    let text
    if (name[name.length - 1] == 'a') {
        text = `Witam panią ${name}`
    } else {
        text = `Witam pana ${name}`
    }
    document.getElementById("hello").innerText = text
}
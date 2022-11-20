const board = document.querySelector(".board");
const cursor = document.querySelector("#cursor");
const table = document.querySelector("#table")
const restart = document.querySelector("#restart")
const scoreboard = document.querySelector("#scoreboard")
const nick = document.querySelector("#nick")

const zombieSet = new Set();

let framesPerSecond = 10
let startTime, previousFrameTime, lastSpawn;
let hitPoints;
let playerName = "";


class Points {
    static pointsDisplay = document.querySelector("#points");
    static points = 0;

    /**
     * Event handler, adds or subtracts points depending on what was clicked.
     */
    static changePoints(event) {
        if (event.currentTarget.className === "zombie") {
            Points.points = Math.min(99999, Points.points + 12);
        } else {
            Points.points = Math.max(0, Points.points - 6);
        }
        Points.updateDisplay();
    }

    /**
     * Displays number of points.
     */
    static updateDisplay() {
        let text = ("0000" + Points.points).slice(-5);
        Points.pointsDisplay.innerText = text;
    }
}

class Zombie {
    /**
     * Creates zombie DOM element, gives it random parameters (speed, size, spawn height).
     */
    constructor() {
        this.element = document.createElement("div");
        zombieSet.add(this);
        this.element.classList.add("zombie");

        this.speed = (Math.floor(Math.random() * 5) + 1.5);
        this.element.style.animationDuration = this.speed + "s";

        let sizeScale = Math.random() * (1.25 - 0.75) + 0.75;
        this.widthOfSprite = 200 * sizeScale;
        this.element.style.width = this.widthOfSprite + "px";
        this.element.style.height = 312 * sizeScale + "px";

        this.element.style.bottom = Math.floor(Math.random() * (window.innerHeight - 500)) + 100 + "px";

        this.element.addEventListener("mousedown", this.shootZombie.bind(this));
        this.element.addEventListener("animationend", this.zombieAttack.bind(this));

        this.framesShown = 1;

        board.appendChild(this.element);
    }

    /**
     * Event handler, removes zombie and adds points when zombie is clicked.
     */
    shootZombie(event) {
        zombieSet.delete(this);
        this.element.remove();
        event.stopPropagation();
        Points.changePoints(event);
    }

    /**
     * Event handler, fires when a zombie reaches left side of the screen.
     * Lowers HP, removes zombie.
     */
    zombieAttack(event) {
        hitPoints--;
        zombieSet.delete(this);
        this.element.remove();
    }

    /**
     * Displays next zombie sprite (frame).
     */
    move() {
        if (this.framesShown < 10) {
            this.element.style.backgroundPositionX = -this.framesShown * this.widthOfSprite + "px";
            this.framesShown++;
        } else {
            this.element.style.backgroundPositionX = 0 + "px";
            this.framesShown = 1;
        }
    }
}


/**
 * Callback for window.requestAnimationFrame()
 * Main game loop, draws frames (in set intervals) and spawns zombies (intervals and RNG).
 */
function mainLoop(timestamp) {
    if (startTime === undefined) {
        requestPlayerName();
        startTime = timestamp;
        previousFrameTime = timestamp;
        lastSpawn = timestamp;
        startGame();
    }
    
    let timeElapsed = timestamp - previousFrameTime;
    let timeSinceLastSpawn = timestamp - lastSpawn;
    if (timeElapsed >= 1000 / framesPerSecond) {
        if (timeSinceLastSpawn >= 500 && Math.random() > 0.5) {
            new Zombie();
            lastSpawn = timestamp;
        }
        zombieSet.forEach(element => element.move());
        previousFrameTime = timestamp;
    } 

    if (!gameEnd()) {
        window.requestAnimationFrame(mainLoop);
    }
}


/**
 * Resets cursor, parameters, event listeners.
 * Called at the beggining of the game.
 */
function startGame() {
    document.body.style.cursor = "none";
    Points.points = 0;
    Points.updateDisplay();
    zombieSet.clear();
    hitPoints = 3;
    board.addEventListener("mousemove", moveGameCursor);
    board.addEventListener("click", Points.changePoints);
}


/**
 * Checks if the game should end based on hit points.
 * On game end removes zombies, resets some parameters, calls function to display highscores.
 */
function gameEnd() {
    if (hitPoints > 0) {
        return false;
    } else {
        zombieSet.forEach(elem => {
            elem.element.remove();
        });
        startTime = undefined;
        board.removeEventListener("mousemove", moveGameCursor);
        cursor.style.display = "none";
        highscores();
        return true;
    }
}


/**
 * Event handler, moves cursor.
 */
function moveGameCursor(event) {
    cursor.style.display = "block";
    cursor.style.left = event.clientX + "px";
    cursor.style.top = event.clientY + "px";
}


/**
 * Asks the player to enter their nick, displays it.
 */
function requestPlayerName() {
    while(playerName.match(/^\s*$/)) {
        playerName = prompt("What's your nick?");
    }
    nick.innerText = playerName;
}


/**
 * GETs highscores, adds current player's data, calls function to display top 7 scores, PUTs updated highscores.
 */
function highscores() {
    document.body.style.cursor = "auto";

    const playerScore = {nick: playerName, points: Points.points, date: new Date()};

    let url = "https://jsonblob.com/api/jsonBlob/1043543622351601664";
    const req = new XMLHttpRequest();
    const req2 = new XMLHttpRequest();

    req.addEventListener("load", (event) => {
        const data = JSON.parse(req.response);
        data.highscores.push(playerScore);
        data.highscores.sort((a, b) => {return b.points - a.points});

        displayHighscores(data.highscores.slice(0, Math.min(7, data.highscores.length)));

        req2.open("PUT", url);
        req2.send(new Blob([JSON.stringify(data)]));
    });

    req.open("GET", url);
    req.send();
}


/**
 * Displays table with top 7 scores.
 */
function displayHighscores(highscoresArray) {
    const headerRow = document.createElement("tr");

    const positionCell = document.createElement("th");
    positionCell.innerText = "Position";

    const nickCell = document.createElement("th");
    nickCell.innerText = "Nick";

    const pointsCell = document.createElement("th");
    pointsCell.innerText = "Score";

    const dateCell = document.createElement("th");
    dateCell.innerText = "Date";

    headerRow.appendChild(positionCell);
    headerRow.appendChild(nickCell);
    headerRow.appendChild(pointsCell);
    headerRow.appendChild(dateCell);
    table.appendChild(headerRow);

    for (let i = 0; i < highscoresArray.length; i++) {
        const row = document.createElement("tr");

        const positionCell = document.createElement("td");
        positionCell.innerText = i + 1;

        const nickCell = document.createElement("td");
        nickCell.innerText = highscoresArray[i].nick;

        const pointsCell = document.createElement("td");
        pointsCell.innerText = highscoresArray[i].points;

        const dateCell = document.createElement("td");
        dateCell.innerText = (new Date(highscoresArray[i].date)).toUTCString();

        row.appendChild(positionCell);
        row.appendChild(nickCell);
        row.appendChild(pointsCell);
        row.appendChild(dateCell);
        table.appendChild(row);
    }

    scoreboard.style.height = "auto";
}


/**
 * Restarts game.
 */
restart.addEventListener("click", (event) => {
    playerName = "";
    scoreboard.style.height = "0";
    table.innerHTML = "";

    window.requestAnimationFrame(mainLoop);
})


/**
 * Starts game on page load.
 */
window.addEventListener("DOMContentLoaded", (event) => {
    window.requestAnimationFrame(mainLoop);
});

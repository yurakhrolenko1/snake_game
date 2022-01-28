import {
    drawFood,
    updateFood
} from "./food.js"

let lastRanderTime = 0
const SNAKE_SPEED = 2  // updates of gameloop per second
const gameBoard = document.getElementById("game-grid")

function main(carentTimestamp) {
    window.requestAnimationFrame(main)
    let secondsSinceLastRender = (carentTimestamp - lastRanderTime) / 1000
    if (secondsSinceLastRender < 1 / SNAKE_SPEED) return

    lastRanderTime = carentTimestamp

    update()
    draw()

}

window.requestAnimationFrame(main)

function update() {
    updateFood()
}

function draw() {
    gameBoard.innerHTML = ""
    drawFood(gameBoard)
}




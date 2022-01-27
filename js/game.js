import {
    SNAKE_SPEED,
    updateSnake,
    drawSnake
} from "./snake.js"

let lastRanderTime = 0
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
    updateSnake()
}

function draw() {
    drawSnake(gameBoard)
}




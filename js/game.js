import {
    drawFood,
    updateFood
} from "./food.js"
import {
    SNAKE_SPEED,
    getShakeHead,
    updateSnake,
    drawSnake
} from "./snake.js"
import {
    outsideGrid
} from "./grid.js"

let gameOver = false
let lastRanderTime = 0
const gameBoard = document.getElementById("game-grid")


function main(carentTimestamp) {
    checkDeath()
    if (gameOver) {
        console.log("you lose")
        gameOver = false
        return alert("you lose")
    }

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
    updateSnake()
}

function draw() {
    gameBoard.innerHTML = ""
    drawFood(gameBoard)
    drawSnake(gameBoard)
}


function checkDeath() {
    let snakeHead = getShakeHead()
    gameOver = outsideGrid(snakeHead)
}


import {
    drawFood,
    updateFood
} from "./food.js"
import {
    SNAKE_SPEED,
    getShakeHead,
    snakeIntersection,
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
    if (gameOver) {
        if (confirm("You lost. Press ok to restart.")){
            window.location = '/snake_game/index.html'
        }
        return
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
    checkDeath()
}

function draw() {
    gameBoard.innerHTML = ""
    drawFood(gameBoard)
    drawSnake(gameBoard)
}


function checkDeath() {
    let snakeHead = getShakeHead()
    gameOver = outsideGrid(snakeHead) || snakeIntersection()
}


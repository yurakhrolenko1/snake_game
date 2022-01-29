import {
    onSnake,
    expendSnake
} from './snake.js'
import {
    randomPosition
} from './grid.js'

const EXPENTION_RATE = 1
let foodCoords = getRandomCoords()


export function updateFood() {
    // if snake on food move food to new coords
    if (onSnake(foodCoords)) {
        expendSnake(EXPENTION_RATE)
        foodCoords = getRandomCoords()
    }
}

export function drawFood(gameBoard) {
    let foodElement = document.createElement("div")
    foodElement.classList.add("food")
    foodElement.style.gridRowStart = foodCoords.y
    foodElement.style.gridColumnStart = foodCoords.x
    gameBoard.appendChild(foodElement)
}


function getRandomCoords() {
    let newPosition
    while (newPosition == null || onSnake(newPosition)) {
        newPosition = randomPosition()
    }
    console.log(newPosition)
    return newPosition

}
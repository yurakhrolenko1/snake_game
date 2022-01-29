import {
    onSnake
} from './snake.js'


let foodCoords = {x: 5, y: 5}


export function updateFood() {
    // if snake on food move food to new coords
    if (onSnake(foodCoords)) {
        foodCoords = {x: 15, y: 15}
        console.log("on top")
    }
    // then add new segment to snake

}

export function drawFood(gameBoard) {
    let foodElement = document.createElement("div")
    foodElement.classList.add("food")
    foodElement.style.gridRowStart = foodCoords.x
    foodElement.style.gridColumnStart = foodCoords.y
    gameBoard.appendChild(foodElement)
}


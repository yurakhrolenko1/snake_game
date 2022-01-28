import { getDirection } from "./input.js"

export const SNAKE_SPEED = 1  // updates of gameloop per second
const snakeBody = [
    {"x": 11,"y": 11}
]


export function updateSnake() {
    const inputDirection = getDirection()
    for (let i = snakeBody.length -2 ; i >= 0; i--) {
        snakeBody[i + 1] = { ...snakeBody[i] }
    }
    snakeBody[0].x += inputDirection.x
    snakeBody[0].y += inputDirection.y
}

export function drawSnake(gameBoard) {
    snakeBody.forEach(segment => {
        const snakeElement = document.createElement("div")
        snakeElement.style.gridRowStart = segment.y
        snakeElement.style.gridColumnStart = segment.x
        snakeElement.classList.add("snake")
        gameBoard.appendChild(snakeElement)
    })
}



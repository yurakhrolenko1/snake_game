export const SNAKE_SPEED = 2  // updates of gameloop per second
const snakeBody = [
    {"x": 11,"y": 11}
]


export function updateSnake() {

}

export function drawSnake(gameBoard) {
    snakeBody.forEach(segment => {
        const snakeElement = document.createElement("div")
        snakeElement.style.gridRowStart = segment.x
        snakeElement.style.gridColumnStart = segment.y
        snakeElement.classList.add("snake")
        gameBoard.appendChild(snakeElement)
    })
}



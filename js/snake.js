import { getDirection } from "./input.js"


let newSegments = 0
export const SNAKE_SPEED = 3  // updates of gameloop per second
const snakeBody = [
    {"x": 11,"y": 11}
]

export function updateSnake() {
    addSegments()

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


export function onSnake(position, { ignoreHead = false } = {}) {
    return snakeBody.some( (segment, index) => {
        if ( ignoreHead && index === 0 ) return false
        return equalPositions(segment, position)
    })
}

function equalPositions(pos1, pos2) {
    return pos1.x === pos2.x && pos1.y === pos2.y
}


export function expendSnake(amount) {
    newSegments += amount
}

function addSegments() {
    for (let i = 0; i < newSegments; i++) {
        snakeBody.push({ ...snakeBody[snakeBody.length - 1] })
    }
    newSegments = 0
}

export function getShakeHead() {
    return snakeBody[0]
}

export function snakeIntersection() {
    let snakeHead = getShakeHead()
    return onSnake(snakeHead, { ignoreHead: true })
}


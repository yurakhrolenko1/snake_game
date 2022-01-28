
let foodCoords = {x: 0, y: 0}


export function updateFood() {

}

export function drawFood(gameBoard) {
    let foodElement = document.createElement("div")
    foodElement.classList.add("food")
    foodElement.style.gridRowStart = foodCoords.x
    foodElement.style.gridColumnStart = foodCoords.y
    gameBoard.appendChild(foodElement)
}


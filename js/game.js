let lastRanderTime = 0
const SNAKE_SPEED = 2  // updates of gameloop per second


function main(carentTimestamp) {
    window.requestAnimationFrame(main)
    let secondsSinceLastRender = (carentTimestamp - lastRanderTime) / 1000
    if (secondsSinceLastRender < 1 / SNAKE_SPEED) return

    lastRanderTime = carentTimestamp
    console.log(secondsSinceLastRender)

    update()
    draw()

}

window.requestAnimationFrame(main)

function update() {

}

function draw() {

}




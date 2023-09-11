
function setPos(obj, x, y) {
    obj.style.top = `${y}px`
    obj.style.left = `${x}px`
}

function setDim(obj, width, height) {
    obj.style.width = `${width}px`
    obj.style.height = `${height}px`
}


const catEl = document.querySelector("#cat")
const catPos = [0, 0]
const catDim = [100, 100]
const speed = 10

setDim(catEl, catDim[0], catDim[1])
setPos(catEl, catPos[0], catPos[1])

function clickCat(e) {
    alert("Du trykket på katten.")
}

catEl.onclick = clickCat

function catMove(deltaX, deltaY) {

    if (catPos[0] + deltaX < 0) return
    if (catPos[1] + deltaY < 0) return
    if (catPos[0] + deltaX + catDim[0] > window.innerWidth) return
    if (catPos[1] + deltaY + catDim[1] > window.innerHeight) return

    catPos[0] += deltaX
    catPos[1] += deltaY

    setPos(catEl, catPos[0], catPos[1])
}









const epleEl = document.querySelector("#eple")
const epleDim = [100, 100]
const eplePos = [(window.innerWidth - epleDim[0]) / 2, (window.innerHeight - epleDim[1]) / 2]
const epleTime = 10
const epleSpeed = 30


setDim(epleEl, epleDim[0], epleDim[1])
setPos(epleEl, eplePos[0], eplePos[1])

function moveEple() {
    
    let deltaX = Math.floor(Math.random() * epleSpeed) - (epleSpeed / 2) + .5
    let deltaY = Math.floor(Math.random() * epleSpeed) - (epleSpeed / 2) + .5

    if (eplePos[0] + deltaX < 0) deltaX = -deltaX
    if (eplePos[1] + deltaY < 0) deltaY = -deltaY
    if (eplePos[0] + deltaX + epleDim[0] > window.innerWidth) deltaX = -deltaX
    if (eplePos[1] + deltaY + epleDim[1] > window.innerHeight) deltaY = -deltaY
    
    eplePos[0] += deltaX
    eplePos[1] += deltaY

    setPos(epleEl, eplePos[0], eplePos[1])
}

const epleInterval = setInterval(moveEple, epleTime)



function arrowPress(e) {
    
    switch (e.key) {
        case "ArrowLeft":
            catMove(-speed, 0)
            break;

        case "ArrowDown":
            catMove(0, speed)
            break;

        case "ArrowUp":
            catMove(0, -speed)
            break;
        
        case "ArrowRight":
            catMove(speed, 0)
            break;
    }

}

document.addEventListener("keydown", arrowPress)


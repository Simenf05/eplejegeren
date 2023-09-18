
function setPos(obj, x, y) {
    obj.style.top = `${y}px`
    obj.style.left = `${x}px`
}

function setDim(obj, width, height) {
    obj.style.width = `${width}px`
    obj.style.height = `${height}px`
}


let poeng = 0
const poengEl = document.querySelector("#poeng")
poengEl.value = poeng


const catEl = document.querySelector("#cat")
const catPos = [0, 0]
const catDim = [100, 100]
const speed = 10

setDim(catEl, catDim[0], catDim[1])
setPos(catEl, catPos[0], catPos[1])


function catMove(deltaX, deltaY) {

    if (catPos[0] + deltaX < 0) return
    if (catPos[1] + deltaY < 0) return
    if (catPos[0] + deltaX + catDim[0] > window.innerWidth) return
    if (catPos[1] + deltaY + catDim[1] > window.innerHeight) return

    catPos[0] += deltaX
    catPos[1] += deltaY

    setPos(catEl, catPos[0], catPos[1])
    checkOverlap()
}









const epleEl = document.querySelector("#eple")
const epleDim = [100, 100]
const eplePos = [(window.innerWidth - epleDim[0]) / 2, (window.innerHeight - epleDim[1]) / 2]
let epleTime = 100
let epleSpeed = 100

function changeTime() {
    clearInterval(epleInterval)
    epleInterval = setInterval(moveEple, epleTime)
}

function lett() {
    epleTime = 100
    changeTime()
    console.log("lett");
    activateButton('lett');

}
function middels() {
    epleTime = 50
    changeTime()
    console.log("middels")
    activateButton('middels');
}
function vanskelig() {
    epleTime = 20
    changeTime()
    console.log("vanskelig")
    activateButton('vanskelig');
}



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
    checkOverlap()
}

let epleInterval = setInterval(moveEple, epleTime)



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
        case "32":
            checkHit();
            console.log("knapp")
            break;
    }

}

let catPosX;
let catPosY;
let eplePosX;
let eplePosY;
let poengsum = 0;


function checkOverlap(e) {

    const catRect = catEl.getBoundingClientRect()
    const epleRect = epleEl.getBoundingClientRect()
    
    const overlap = !(
        catRect.right < epleRect.left ||
        catRect.left > epleRect.right ||
        catRect.bottom < epleRect.top ||
        catRect.top > epleRect.bottom
    )    

    if (overlap) {


        poeng += 1
        poengEl.value = `${poeng}`


        if (catRect.left < (window.innerWidth - catRect.right)) {
            catPos[0] = (window.innerWidth - catDim[0])
        }
        else {
            catPos[0] = 0
        }

        if (catRect.top < (window.innerHeight - catRect.bottom)) {
            catPos[1] = (window.innerHeight - catDim[1])
        }
        else {
            catPos[1] = 0
        }
        
        setPos(catEl, catPos[0], catPos[1])

    }
}


function checkHit() {
    catPosX = document.getElementById("cat").style.left;
    catPosY = document.getElementById("cat").style.top;
    eplePosX = document.getElementById("eple").style.left;
    eplePosY = document.getElementById("eple").style.top;
    catPosX = catPosX.replace("px", "");
    catPosY = catPosY.replace("px", "");
    eplePosX = eplePosX.replace("px", "");
    eplePosY = eplePosY.replace("px", "");
    catPosX = Number(catPosX);
    catPosY = Number(catPosY);
    eplePosX = Number(eplePosX);
    eplePosY = Number(eplePosY);

    if(
        catPosX >= (eplePosX) && 
        catPosX <= (eplePosX + 40) && 
        catPosY >= (eplePosY) && 
        catPosY <= (eplePosY + 40)
    ) 
    {
        poengsum = Number(poengsum) + 1;
        document.getElementById("poeng").innerHTML = poengsum;
    }
}

document.addEventListener("keydown", arrowPress)

function activateButton(buttonId) {
    document.getElementById('lett').classList.remove('active');
    document.getElementById('middels').classList.remove('active');
    document.getElementById('vanskelig').classList.remove('active');

    document.getElementById(buttonId).classList.add('active');
}


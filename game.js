let souls = 5000;
let clickMult = 1.3;
let autoMult = 1.5;

let clickUp = {
    sharpen: {
        price: 50,
        quantity: 0,
        multiplier: 1,
    }
};

let autoUp = {
    absorb: {
        price: 100,
        quantity: 0,
        multiplier: 10
    }
};

function harvest() {
    souls++
    souls += clickUp.sharpen.quantity * clickUp.sharpen.multiplier
    drawSouls()
};

function buySharpen() {
    if (souls >= clickUp.sharpen.price) {
        clickUp.sharpen.quantity++
        souls -= clickUp.sharpen.price
        clickUp.sharpen.price *= clickMult
        drawSouls()
    }
    document.getElementById('sharpPrice').innerText = clickUp.sharpen.price.toFixed(0)
    document.getElementById('sharpTotal').innerText = clickUp.sharpen.quantity
}

function buyAbsorb() {
    if (souls >= autoUp.absorb.price) {
        autoUp.absorb.quantity++
        souls -= autoUp.absorb.price
        autoUp.absorb.price *= autoMult
        drawSouls()
    }
    document.getElementById('absorbPrice').innerText = autoUp.absorb.price.toFixed(0)
    document.getElementById('absorbTotal').innerText = autoUp.absorb.quantity
}

function drawSouls() {
    document.getElementById('souls').innerText = souls.toFixed(0)
}

function collectAutoUpgrades() {
    souls += autoUp.absorb.quantity * autoUp.absorb.multiplier
    drawSouls()
}






setInterval(collectAutoUpgrades, 2000);


drawSouls()
let clickUp = {
    scythe: {
        price: 50,
        quantity: 0,
        multiplier: 1,
    },
    weight: {
        price: 100,
        quantity: 0,
        multiplier: 5,
    }
};

let autoUp = {
    absorb: {
        price: 150,
        quantity: 0,
        multiplier: 10
    },
    minion: {
        price: 1000,
        quantity: 0,
        multiplier: 50,
    }
};

let souls = 0000;
let clickMult = 1.25;
let autoMult = 1.75;


function harvest() {
    souls++
    souls += clickUp.scythe.quantity * clickUp.scythe.multiplier
    souls += clickUp.weight.quantity * clickUp.weight.multiplier
    drawSouls()
};

function buyClick(key) {
    if (souls >= clickUp[key].price) {
        clickUp[key].quantity++
        souls -= clickUp[key].price
        clickUp[key].price *= clickMult
        drawSouls()
    }
    document.getElementById(`${key}Price`).innerText = clickUp[key].price.toFixed(0)
    document.getElementById(`${key}Total`).innerText = clickUp[key].quantity
    document.getElementById(`${key}Mult`).innerText = clickUp[key].multiplier * clickUp[key].quantity
}

function buyAuto(key) {
    if (souls >= autoUp[key].price) {
        autoUp[key].quantity++
        souls -= autoUp[key].price
        autoUp[key].price *= autoMult
        drawSouls()
    }
    document.getElementById(`${key}Price`).innerText = autoUp[key].price.toFixed(0)
    document.getElementById(`${key}Total`).innerText = autoUp[key].quantity
    document.getElementById(`${key}Mult`).innerText = autoUp[key].multiplier * autoUp[key].quantity
}

// function buyScythe() {
//     if (souls >= clickUp.scythe.price) {
//         clickUp.scythe.quantity++
//         souls -= clickUp.scythe.price
//         clickUp.scythe.price *= clickMult
//         drawSouls()
//     }
//     document.getElementById('sharpPrice').innerText = clickUp.scythe.price.toFixed(0)
//     document.getElementById('sharpTotal').innerText = clickUp.scythe.quantity
// }

// function buyWeight() {
//     if (souls >= clickUp.weight.price) {
//         clickUp.weight.quantity++
//         souls -= clickUp.weight.price
//         clickUp.weight.price *= clickMult
//         drawSouls()
//     }
//     document.getElementById('weightPrice').innerText = clickUp.weight.price.toFixed(0)
//     document.getElementById('weightTotal').innerText = clickUp.weight.quantity
// }

// function buyAbsorb() {
//     if (souls >= autoUp.absorb.price) {
//         autoUp.absorb.quantity++
//         souls -= autoUp.absorb.price
//         autoUp.absorb.price *= autoMult
//         drawSouls()
//     }
//     document.getElementById('absorbPrice').innerText = autoUp.absorb.price.toFixed(0)
//     document.getElementById('absorbTotal').innerText = autoUp.absorb.quantity
// }

// function buyMinion() {
//     if (souls >= autoUp.minion.price) {
//         autoUp.minion.quantity++
//         souls -= autoUp.minion.price
//         autoUp.minion.price *= autoMult
//         drawSouls()
//     }
//     document.getElementById('minionPrice').innerText = autoUp.minion.price.toFixed(0)
//     document.getElementById('minionTotal').innerText = autoUp.minion.quantity
// }

function drawSouls() {
    document.getElementById('souls').innerText = souls.toFixed(0)
}

function collectAutoUpgrades() {
    souls += autoUp.absorb.quantity * autoUp.absorb.multiplier
    souls += autoUp.minion.quantity * autoUp.minion.multiplier
    drawSouls()
}






setInterval(collectAutoUpgrades, 1000);
drawSouls()
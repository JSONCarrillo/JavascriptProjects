function add() {
    let addition = 32 + 24;
    return document.getElementById('add-math').innerHTML = '32 + 24 = ' + addition;

}

function subtract() {
    let subtractNum = 76 - 34;
    return document.getElementById('sub-math').innerHTML = '76 - 34 = ' + subtractNum;
}

function multiply() {
    let multiplyNum = 17 * 9;
    return document.getElementById('mult-math').innerHTML = '17 x 9 = ' + multiplyNum;
}

function divide() {
    let divideNum = 48 / 12;
    return document.getElementById('divide-math').innerHTML = '48 / 12 = ' + divideNum;
}

function longMath() {
    let pemdas = (1 - 2) * 3 / 7;
    return document.getElementById('pemdas').innerHTML = '(1-2) * 3 / 7 = ' + pemdas;
}

function modulo() {
    let moduloNum = 7 % 6;
    return document.getElementById('modulus').innerHTML = "7 %(Mod) 6 = " + moduloNum;
}

function negation() {
    let negationNum = 12;
    return document.getElementById('negation').innerHTML = -negationNum
}
function increment() {
    let x = 12;
    x++
    return document.getElementById('increment').innerHTML = x
}
function decrement() {
    let y = 8;
    y--
    return document.getElementById('decrement').innerHTML = y
}

function random() {
    document.getElementById('randomize').innerHTML = parseInt(Math.random() * 100)
}

function piOperate() {
    document.getElementById('piOperator').innerHTML = 'Pi is roughly ' + Math.PI;
}

console.log('What are you doing here?')


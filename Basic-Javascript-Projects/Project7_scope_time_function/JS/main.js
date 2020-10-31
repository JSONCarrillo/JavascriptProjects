let x = 10;

function globalEx() {
    y = x * 10
    return console.log(y)
}

function localEx() {
    return console.log(y)
}
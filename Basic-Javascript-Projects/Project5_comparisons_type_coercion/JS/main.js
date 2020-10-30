//function that adds a 'break' when called
function docBreak() {
    document.write('<br>')
};

//claiming variables for data type/value section
let a = '24';
let i = 24;

//Displays Number in browser
document.write(typeof 4);
docBreak();
//Displays NaN in browser
document.write(0 / 0);
docBreak();
//Displays false in browser
document.write(isNaN(00));
docBreak();
//Displays True in browser
document.write(isNaN('String'));
docBreak();
//Displays True in Browser
document.write(12 > 3);
docBreak();
//Displays False in browser
document.write(12 > 24);
docBreak();
//Displays True for ==
document.write(10 == 10);
docBreak();
//Displays False for ==
document.write(12 == 10);
docBreak();
//Displays True for matching data type and value
document.write(i === i);
docBreak();
//Displays false for different data type and value
document.write(23 === '16');
docBreak();
//Displays false for different data type and same value
document.write(a === i);
docBreak();
//Displays false for same data type and different value
document.write(14 === 16);
docBreak();
//Displays true and false for && operator respectively
document.write(23 > 12 && 12 > 7);
docBreak();
document.write(23 > 12 && 12 < 7);
docBreak();
//Displays true and false for || operator respectively
document.write(23 > 12 || 12 == 7);
docBreak();
document.write(23 < 12 || 12 == 7);
docBreak();
//Displays true and false using !(NOT) operator respectively
document.write(!(23 < 12));
docBreak();
document.write(!(6 > 4));
docBreak();

//Displays Infinity in browser when ID='Inf' button is clicked
function Inf() {
    document.getElementById('Inf').innerHTML = 2E340
};


//Displays -Infinity in browser when ID='negInf' button is clicked
function negInf() {
    document.getElementById('negInf').innerHTML = -2E340
};

//Function passes an X and Y argument and returns the console log of x and y
function logMath(x, y) {
    return console.log(x + y)

};

//Calls the function with parameters 3 as x and 2 as y in the console
logMath(3, 2);

//**Challenge** Display false in console.log using boolean logic
console.log(isNaN(23));
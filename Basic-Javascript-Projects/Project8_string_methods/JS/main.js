let string1 = 'A long '
let string2 = 'time ago '
let string3 = 'in a galaxy '
let string4 = 'far far '
let string5 = 'away... '

function fullSentence() {
    let sentence = string1.concat(string2, string3, string4, string5)
    document.getElementById('concatenate').innerHTML = sentence;
}

function sliceFunct() {
    let sentence = "Hello there, my old friend. Not so long ago it was till the end.";
    let section = sentence.slice(12, 26);
    document.getElementById('slice').innerHTML = section;
}

function upperFunct() {
    let sentence = 'it\'s only screaming when it\'s upper-cased!';
    let upperCase = sentence.toUpperCase();
    document.getElementById('upper').innerHTML = upperCase;
}

function searchFunct() {
    let sentence = 'I am not a robot';
    let search = sentence.search('robot');
    document.getElementById('search').innerHTML = search;
}

function numString() {
    let x = 222;
    document.getElementById('num-to-string').innerHTML = x.toString();
}

function precisionFunct() {
    let x = 123.456789
    document.getElementById('precision').innerHTML = x.toPrecision(5);
}

function fixFunct() {
    let x = 22.45;
    document.getElementById('tofixed').innerHTML = x.toFixed(2);
}
function valueFunct() {
    let x = 'Jason';
    document.getElementById('value').innerHTML = x.valueOf();
}
//assignment 1
let x = 10;

function globalEx() {
    x *= 10
    return console.log(x) + console.log(y);
}

function localEx() {
    y = 12
    return console.log(y)
}

//assignment 2
function timeHours() {
    if (new Date().getHours() > 0 && new Date().getHours() < 12) {
        document.getElementById('showHour').innerHTML = "Good Morning! it is currently " + new Date().getHours() + " hours military time."
    }
    else {
        document.getElementById('showHour').innerHTML = 'Good Afternoon! It is currently about ' + new Date().getHours() + " hours military time."
    }
}

//Assignment 3

function ageCheck() {
    if (document.getElementById('ageVerify').value >= 18) {
        document.getElementById('ageMessage').innerHTML = 'You are over 18!'
    }
    else {
        document.getElementById('ageMessage').innerHTML = 'You are not over 18, you are ' + document.getElementById('ageVerify').value +
            ' years old!'
    }
}

//Assignment 4

function answerCheck() {
    if (document.getElementById('answerInput').value == 3) {
        document.getElementById('answerMessage').innerHTML = 'You are correct!';
    }
    else {
        document.getElementById('answerMessage').innerHTML = 'Try again.';
    }
}

//Assignment 5
function Time_function() {
    var Time = new Date().getHours();
    var reply;
    if (Time < 12 == Time > 0) {
        reply = "It's morning time!";
    }
    else if (Time > 12 == Time < 18) {
        reply = "It's the afternoon!";
    }
    else {
        reply = "It's evening time!";
    }
    document.getElementById('Time_of_Day').innerHTML = reply;
}
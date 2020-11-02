function callLoop() {
    x = 0;
    //while loop has x equal to 0 and then increases x by 1 every iteration until it is not longer less than 5
    while (x < 5) {
        x++
    }
    //displays x (will display 5)
    document.getElementById('loop').innerHTML = x;
}

function stringLength() {
    str = 'Kept you waiting huh?'
    //gets the length of the string including the question mark
    n = str.length
    document.getElementById('stringLength').innerHTML = 'The string "' + str + '" is ' + n + ' characters long!'
}

function forLoop() {
    let instruments = ['Guitar', 'Bass', 'Drums', 'Keyboard']
    //content is saved as an empty string for use of modifying in the loop
    let content = '';
    // y is used to mark a point in an index of 'instruments beginning at 0 which is 'guitar'
    let y;
    // the loop goes index by index and modifies the content variable to concatenate the next iteration that writes in the given index
    for (y = 0; y < instruments.length; y++) {
        content += instruments[y] + '<br>'
    }
    document.getElementById('instrument-list').innerHTML = content
}

function arrayFunct() {
    //cat is saved as an empty array so that later additions to the array can be added
    let cat = [];
    cat[0] = 'Black'
    cat[1] = 'Calico'
    cat[2] = 'Scottish Fold'
    //writes 'scottish fold' in the p element with the Id of array
    document.getElementById('array').innerHTML = cat[2]
}

function constFunct() {
    /*making this object a const prevents the variable and its properties from being chaned, 
    but allows values to be changed and properties to be added*/
    const manOne = { name: 'Jason', age: 21, birthday: 'February 22, 1999' }
    document.getElementById('constant').innerHTML = manOne.name
    manOne.age = 22
    manOne.favoritePerson = 'Taya'
    document.getElementById('constant').innerHTML = manOne.age
    document.getElementById('constant').innerHTML = manOne.favoritePerson
}
//function that factorialized a number Ex: 5! = 5 x 4 x 3 x 2 x 1 = 120
//Num is used as the argument taken from the input on the html document
function returnFunct(num) {
    //if statement that enforces factorialize rules, factorialize negative numbers and 0 both equal 0
    if (num <= 0) {
        num = 0
    }
    else {
        /*for loop that takes i and makes it 1 less than the num argument it will then take 'num' which is equal to whatever the 
        input was and multiply it by itself minus 1, i then gets reduced by 1 again and is multiplied by the 2nd iteration of num until
        i is no longer less than 0 by which it returns the final iteration of num and places it in the p element with the id = 'return'*/
        for (i = num - 1; i > 0; i--) {
            num *= i
        }
    }
    //returns num into the element with the id of 'return'
    return document.getElementById('return').innerHTML = num
}

//dog is saved as an object
let dog = {
    breed: 'Corgi',
    coatLength: 'Medium',
    coatColor: 'Brown and White',
    // the description property uses a function that returns a full sentence containing properties and their respective value
    description: function () { return 'This ' + this.breed + ' has ' + this.coatLength + ' hair length and a ' + this.coatColor + ' fur color.' }
}

document.getElementById('object').innerHTML = dog.description()

//simple function that utilizes 'break'
function breakFunct() {
    let i;
    // text is saved as an empty string to be modified later
    let text = '';
    for (i = 0; i < 10; i++) {
        /*until i == 3 the loop will modify the text element and add additions after each iteration until it equals 3 by which it breaks the 
        loop and returns text*/
        if (i == 3) { break; } {
            text += 'This is the ' + (i + 1) + ' break' + '<br>'
        }
    }
    return text
}

document.getElementById('break').innerHTML = breakFunct()
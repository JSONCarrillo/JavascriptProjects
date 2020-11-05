//sets active player to X and selectedSquares to undefined by default
let activePlayer = 'X';
//stores an array of moves
let selectedSquares = [];

//function used for placing X or O in a square
function PlaceXOrO(squareNumber) {
    //condition makes sure no square is selected already
    //the .some() method is used to check each element of selectedSquares array
    // to see if it contains a square number clicked on 
    if (!selectedSquares.some(element => element.includes(squareNumber))) {
        //retrieves html id of the square clicked
        let select = document.getElementById(squareNumber)
        //Condition checks to see who's turn it is
        if (activePlayer == 'X') {
            //places an X image on places where X clicks
            select.style.backgroundImage = 'url("images/x.png")'
        }
        // ensures either player must be X or O
        else {
            //Places O image for places O clicks
            select.style.backgroundImage = 'url("images/o.png")'
        }

        //squareNumber and active player are concatenated together and placed in the array
        selectedSquares.push(squareNumber + activePlayer)
        //calls the checkWinConditions function
        checkWinConditions();
        //condition switches players X and O, after X clicks O becomes the active player and vice versa
        if (activePlayer == 'X') {
            activePlayer = 'O'
        }

        else {
            activePlayer = 'X'
        }
        // calls audio function and plays the 'place' sound effect
        audio('./media/place.mp3');
        // disables the cursor click during O's turn
        if (activePlayer === 'O') {
            disableClick();
            // function allows for 1 second to pass for O places and enables clicking
            setTimeout(function () { computersTurn(); }, 1000)
        }
        // return true is needed for computersTurn function to work
        return true;
    }

    //function results in a random square being selected
    function computersTurn() {
        //boolean needed for the while loop
        let success = false;
        //variable stores random number 0-8
        let pickASquare;
        //loop allows for computer to keep trying if a square is already selected
        while (!success) {
            pickASquare = String(Math.floor(Math.random() * 9))
            //if random number evaluated returns true, the square hasn't been selected yet
            if (PlaceXOrO(pickASquare)) {
                //this line calls function
                PlaceXOrO(pickASquare);
                // success becomes true and ends the loop
                success = true;
            };
        }
    }
}
//parses through given sets of win conditions and then calls the drawWinLine function if the parameters are matched
function checkWinConditions() {

    if (arrayIncludes('0X', '1X', '2X')) { drawWinLine(50, 100, 558, 100); }

    else if (arrayIncludes('3X', '4X', '5X')) { drawWinLine(50, 304, 558, 304) }

    else if (arrayIncludes('6X', '7X', '8X')) { drawWinLine(50, 508, 558, 508) }

    else if (arrayIncludes('0X', '3X', '6X')) { drawWinLine(100, 50, 100, 558) }

    else if (arrayIncludes('1X', '4X', '7X')) { drawWinLine(304, 50, 304, 558) }

    else if (arrayIncludes('2X', '5X', '8X')) { drawWinLine(508, 50, 508, 558) }

    else if (arrayIncludes('6X', '4X', '2X')) { drawWinLine(100, 508, 510, 90) }

    else if (arrayIncludes('0X', '4X', '8X')) { drawWinLine(100, 100, 520, 520) }

    else if (arrayIncludes('0O', '1O', '2O')) { drawWinLine(50, 100, 558, 100); }

    else if (arrayIncludes('3O', '4O', '5O')) { drawWinLine(50, 304, 558, 304) }

    else if (arrayIncludes('6O', '7O', '8O')) { drawWinLine(50, 508, 558, 508) }

    else if (arrayIncludes('0O', '3O', '6O')) { drawWinLine(100, 50, 100, 558) }

    else if (arrayIncludes('1O', '4O', '7O')) { drawWinLine(304, 50, 304, 558) }

    else if (arrayIncludes('2O', '5O', '8O')) { drawWinLine(508, 50, 508, 558) }

    else if (arrayIncludes('6O', '4O', '2O')) { drawWinLine(100, 508, 510, 90) }

    else if (arrayIncludes('0O', '4O', '8O')) { drawWinLine(100, 100, 520, 520) }

    //this condition checks for a tie by which it then plays the respective sound effect
    //it then calls the reset game function
    else if (selectedSquares >= 9) {
        audio('./media/tie.mp3');

        setTimeout(function () { resetGame(); }, 1000)
    }
    //this function checks if there are 3 strings in the array
    function arrayIncludes(squareA, squareB, squareC) {
        const a = selectedSquares.includes(squareA);
        const b = selectedSquares.includes(squareB);
        const c = selectedSquares.includes(squareC);
        //if all 3 strings return true then our else if executes drawWinLine function
        if (a === true && b === true && c === true) { return true; }
    }
}

//makes body element temporarily unclickable
function disableClick() {
    body.style.pointerEvents = 'none';

    setTimeout(function () { body.style.pointerEvents = 'auto'; }, 1000)
}
//function allows for playing of audio taking in a string parameter matching its respective file
function audio(audioURL) {
    let audio = new Audio(audioURL);

    audio.play();
}

//function used for drawing win lines on the canvas element
function drawWinLine(coordX1, coordY1, coordX2, coordY2) {
    //access our html element
    const canvas = document.getElementById('win-lines')
    //gives us access to use canvas properties and methods
    const c = canvas.getContext('2d')

    //sets variables as respected coordinents passed through an argument
    let x1 = coordX1
    x2 = coordX2
    y1 = coordY1
    y2 = coordY2
    x = x1
    y = y1

    //function interacts with the canvas
    function animateLineDrawing() {
        //creates the loop for when the game ends
        const animationLoop = requestAnimationFrame(animateLineDrawing);
        //clears content from last loop iteration
        c.clearRect(0, 0, 608, 608);
        //method starts a new path
        c.beginPath();
        //method indicates starting point for the line
        c.moveTo(x1, y1);
        //method indicates ending point
        c.lineTo(x, y);
        //sets line width
        c.lineWidth = 10;
        //sets stroke color
        c.strokeStyle = 'rgba(70,  255, 33, 0.6)';
        //draws everything layed out above
        c.stroke();

        //checks if we've reached an endpoint
        if (x1 <= x2 && y1 <= y2) {
            if (x < x2) { x += 10; }
            if (y < y2) { y += 10; }
            if (x >= x2 && y >= y2) { cancelAnimationFrame(animationLoop); }

        }

        if (x1 <= x2 && y1 >= y2) {
            if (x < x2) { x += 10; }
            if (y > y2) { x -= 10; }
            if (x >= x2 && y <= y2) { cancelAnimationFrame(animationLoop) }
        }
    }
    //function clears canvas after win is drawn
    function clear() {
        const animationLoop = requestAnimationFrame(clear);

        c.clearRect(0, 0, 608, 608)

        cancelAnimationFrame(animationLoop);
    }
    //disables clicking
    disableClick();
    //plays winning game sound 
    audio('./media/winGame.mp3')
    //calls main animation loop
    animateLineDrawing()

    setTimeout(function () { clear(); resetGame(); }, 1000)
}

//function resets the game 
function resetGame() {
    //loop iterates through each html element
    for (i = 0; i < 9; i++) {
        //gets html element for i
        let square = document.getElementById(String(i))
        //removes elements background image
        square.style.backgroundImage = ''
    }
    //resets selected squares back to an empty array
    selectedSquares = []
}
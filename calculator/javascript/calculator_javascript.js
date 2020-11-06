//creates object to track values
const calculator = {
    //displays 0 on the screen
    Display_Value: '0',
    //holds first operand
    First_Operand: null,
    // checks second operand input
    Wait_Second_Operand: false,
    //holds operator
    Operator: null,
};

//modifies values every time a button is clicked
function inputDigit(digit) {
    //checks wait second operand is true and set Display_value to the key that is clicked
    const { Display_Value, Wait_Second_Operand } = calculator
    if (Wait_Second_Operand == true) {
        calculator.Display_Value = digit;
        calculator.Wait_Second_Operand = false;
    } else {
        //overwrites display value if current value is 0 otherwise it will be added to it
        calculator.Display_Value = Display_Value === '0' ? digit : Display_Value + digit
    }
}

function inputDecimal(dot) {
    //this ensures accidental clicking of the decimal doesn't cause bugs
    if (calculator.Wait_Second_Operand === true) return;
    if (!calculator.Display_Value.includes(dot)) {
        //if statement makes it so that if we click the decimal button it will ad a decimal as long as one isn't already present
        calculator.Display_Value += dot;
    }
}

///Handles operators
function handleOperator(Next_Operator) {
    const { First_Operand, Display_Value, Operator } = calculator;
    /*when operator key is pressed, the current number on the display screen is converted 
    and then store the result into first operand if it does not already exist*/
    const Value_of_Input = parseFloat(Display_Value);
    //checks if operator already exists and if wait second operand is true
    // it then updates the operator and exits the function
    if (Operator && calculator.Wait_Second_Operator) {
        calculator.Operator = Next_Operator;
        return;
    }
    if (First_Operand == null) {
        calculator.First_Operand = Value_of_Input;
    } else if (Operator) {//checks if operator already exists
        const Value_Now = First_Operand || 0;
        //if operator exists, property lookup is performed for the operator
        //in the Perform_Calculation object is and the function matching the 
        //operator is executed
        let result = performCalculation[Operator](Value_Now, Value_of_Input)
        //here we add a fixed amount of numbers allowed after decimal
        result = Number(result).toFixed(9);
        //removes trailing 0s
        result = (result * 1).toString();
        calculator.First_Operand = parseFloat(result);
        calculator.Display_Value = parseFloat(result);
    }
    calculator.Wait_Second_Operand = true;
    calculator.Operator = Next_Operator;
}

const performCalculation = {
    '/': (First_Operand, Second_Operand) => First_Operand / Second_Operand,
    '*': (First_Operand, Second_Operand) => First_Operand * Second_Operand,
    '+': (First_Operand, Second_Operand) => First_Operand + Second_Operand,
    '-': (First_Operand, Second_Operand) => First_Operand - Second_Operand,
    '=': (First_Operand, Second_Operand) => Second_Operand,
};

function calculatorReset() {
    calculator.Display_Value = '0';
    calculator.First_Operand = null;
    calculator.Wait_Second_Operand = false;
    calculator.Operator = null;
}

//updates content of display with Display Value
function updateDisplay() {
    const display = document.querySelector('.calculator-screen')
    display.value = calculator.Display_Value;
}

updateDisplay()

//this section monitors button clicks
const keys = document.querySelector('.calculator-keys');
keys.addEventListener('click', (event) => {
    //target variable is an object that represents the button that was clicked
    const { target } = event;

    //if element clicked is not a button exits the function
    if (!target.matches('button')) {
        return;
    }
    if (target.classList.contains('operator')) {
        handleOperator(target.value);
        updateDisplay();
        return;
    }
    if (target.classList.contains('decimal')) {
        inputDecimal(target.value);
        updateDisplay();
        return;
    }

    //ensures AC clears all numbers from the screen
    if (target.classList.contains('all-clear')) {
        calculatorReset();
        updateDisplay()
        return;
    }

    inputDigit(target.value);
    updateDisplay();
})
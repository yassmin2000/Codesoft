// Get the display element
const display = document.getElementById('display');

// Store current input and operator
let currentInput = '';
let operator = '';
let previousInput = '';

// Function to handle button clicks
function handleButtonClick(value) {
    if (!isNaN(value)) {
        // If value is a number, append it to currentInput
        currentInput += value;
        display.innerText = currentInput;
    } else if (value === 'C') {
        // Clear everything
        currentInput = '';
        previousInput = '';
        operator = '';
        display.innerText = '';
    } else if (value === '=') {
        // Perform calculation
        if (currentInput !== '' && previousInput !== '' && operator !== '') {
            const result = evaluate(previousInput, operator, currentInput);
            display.innerText = result;
            currentInput = result;
            previousInput = '';
            operator = '';
        }
    } else {
        // Operator button was clicked
        if (currentInput !== '') {
            if (previousInput === '') {
                previousInput = currentInput;
            } else if (operator) {
                previousInput = evaluate(previousInput, operator, currentInput);
                display.innerText = previousInput;
            }
            operator = value;
            currentInput = '';
        }
    }
}

// Function to evaluate the expression
function evaluate(num1, operator, num2) {
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);
    switch (operator) {
        case '+':
            return number1 + number2;
        case '-':
            return number1 - number2;
        case '*':
            return number1 * number2;
        case '/':
            return number1 / number2;
        default:
            return 0;
    }
}

// Add event listeners to all buttons
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', () => {
        handleButtonClick(button.getAttribute('data-value'));
    });
});

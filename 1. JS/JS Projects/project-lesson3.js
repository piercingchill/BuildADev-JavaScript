// Re-do Project 1 with Functions
// Project Title: Simple Calculator V2


// To prompt the user to provide the numbers
let num1 = parseInt(prompt("Please input a Number."))
let num2 = parseInt(prompt("Please input another Number."))

// Addition
function add(num1, num2) {
    return num1 + num2
}

// Subtraction
function subtract(num1, num2) {
    return num1 - num2
}

// Multiplication
function multiply(num1, num2) {
    return num1 * num2
}

// Division 
function divide(num1, num2) {
    return num1 / num2
}

// Use Console Method to display the results
let calculate = prompt("Please enter your choice between add, subtract, multiply, and divide.")

switch (calculate) {
    case "add":
        console.log(num1 + num2)
        break
    case "subtract":
        console.log(num1 - num2)
        break
    case "multiply": 
        console.log(num1 * num2)
        break
    case "divide":
        console.log(num1 / num2)
        break
    default:
        console.log("Please choose the correct operator.")
        break;
}



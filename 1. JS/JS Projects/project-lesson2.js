// Project, Lesson 2 - Guessing Game

let r_num // Random Number 
let u_num // User's Guess
let a_num // Number of Attempts 
let replay // Whether the user wants to play again.

// Generate a random number.
r_num = Math.floor(Math.random() * 100) + 1

// To get the number of attempts.
a_num = 0

// If replay is 1 it will replay otherwise it will stop.
replay = 1

// While method to prompt the user to if they want to replay. 
// All the other conditions nested inside the While loop.
while (replay = 1) {
    u_num = parseInt(prompt("Please select a number between 1 and 100.")) // Prompt user to give a Number. 

    if (u_num === r_num) {
        a_num++         
        alert("Great! You guess the number correctly. It took you " + a_num + " attempts to guess the number correctly.")
        replay = confirm("Would you like to replay the game?")
        a_num = 0 // To reset the count of the number of attempts if the user guesses the number correctly.

    } else if (u_num > r_num) {
        a_num++
        alert("Please choose a number lower that your current guess.")
    } else (u_num < r_num) {
        a_num++
        alert("Please choose a number higher that your current guess.")
    }
}














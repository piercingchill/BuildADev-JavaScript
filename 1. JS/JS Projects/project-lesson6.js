/*
Project 6 
The goal of this project is to write a function that reverses the order of the array.

Step 1: Define the function
Create a function called reverseArray that takes in an array as a parameter and returns a new
array with the same elements in reverse order.

Step 2: Test the function
Test the reverseArray function with some sample arrays to see if it works correctly.

Step 3: Implement the function as a method on the Array object
You can also implement the reverseArray function as a method on the Array object so that you
can use it directly on any array. 

Step 4: Test the method
Test the reverseArray method by calling it on some sample arrays.
*/

// Step 1
function reverseArray(array) {
  return array.reverse();
}

// Step 2
let exampleArray = [1, 2, 3, 4, 5];
let reverseExampleArray = reverseArray(exampleArray);
console.log(reverseExampleArray);

/* Found this while working on the problem.
- The JavaScript prototype property allows you to add new properties to object constructors 
- The JavaScript prototype property also allows you to add new methods to objects constructors
*/

// Step 3
// Needed some help online here
Array.prototype.reverseArray = function () {
  return this.reverse();
};

// Step 4
let exampleArray2 = [5, 6, 7, 8, 9, 10];
let reverseExampleArray2 = exampleArray2.reverseArray();
console.log(reverseExampleArray2);

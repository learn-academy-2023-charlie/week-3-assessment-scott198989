// ASSESSMENT 3: Coding Practical Questions with Jest

const { log } = require("console")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// I had to have ALOT of help on this first one.  I used chatGPT and I can see why the code makes sense.  I will outline the basic idea in psuedocode then explain line by line.
// Pseudocode:
//1. Create a jest test that displays good failure.
// inout : Create the code that will pass. The passing code will be a function that takes in a number
// Output : An array of the variable length (6) of numbers from the fibonacci sequence.
// Process described below, also the code passes Jest test.

// a) Create a test with expect statements for each of the variables provided.

// FAIL  ./code-challenges.test.js
// fibFunc
//   ✕ returns an array of Fibonacci sequence with length 6
//   ✕ returns null for input less than or equal to 2
//   ✕ returns the correct sequence for an input greater than 2

// ● fibFunc › returns an array of Fibonacci sequence with length 6

//   ReferenceError: fibFunc is not defined
// The test failed at the correct spot, the expect, because the function was not yet written.  
// describe('fibFunc', () => { // The function is being declaired as fibFunc
//   it('returns an array of Fibonacci sequence with length 6', () => { // This is the input of the function
//     const expected = [0, 1, 1, 2, 3, 5]; // An array of the expected output
//     expect(fibFunc(6)).toEqual(expected);
//   })

//   it('returns null for input less than or equal to 2', () => { // This is the conditional portion of the fibFunc.  Since I do not want a number less than 2, I used null to return absolute nothing.  
//     expect(fibFunc(1)).toBeNull(); // verifies that if the input is 1, the output will be null
//     expect(fibFunc(2)).toBeNull(); // verifies that if the input is 2, the output will be null
//   })

//   it('returns the correct sequence for an input greater than 2', () => {// this is the expected output statement 
//     const expected = [0, 1, 1, 2, 3, 5, 8, 13]; // created a array just for this test, it looks cleaner.
//     expect(fibFunc(8)).toEqual(expected);
//   })
// })

const fibLength1 = 6
const fibFunc = (number) => {// The name of my function with the parameter of number.
  if (number <= 2) {// If the inputed number is less than or equal to 2 statement is the boolean value true, return nothing (null).  
    return null
  }
const fibonacciSequence = [0, 1] // a variable containing the fibonacci sequence
for (let i = 2; i < number; i++) { // Setting up a for loop here.  I researched alternative methods and found out I could have done a while, and a do-while loop but this is already confusing enough so I am sticking with the for loop.  I want to define i as equal to 2.   
    const previous1 = fibonacciSequence[i - 1] // We are storing the fibonacciSequence array and for loop into new variables, and passing a argument of i(which is 2) being subracted by 1 and 2 which would have a output of 0, and 1
    const previous2 = fibonacciSequence[i - 2]
    fibonacciSequence.push(previous1 + previous2)// using the .push method to add the results of these two variables and adding them to the array.
  }
 return fibonacciSequence;
}
// console.log(fibFunc(6));
// Output: [0, 1, 1, 2, 3, 5]

// I know my psuedocode is a bit longer this time I just wanted to go more in depth and hope I did better this time.  

  // b) Write a test that passes

  // PASS  ./code-challenges.test.js
// fibFunc
//   ✓ returns an array of Fibonacci sequence with length 6 (1 ms)
//   ✓ returns null for input less than or equal to 2
//   ✓ returns the correct sequence for an input greater than 2

// Repeated the above

const fibLength2 = 10

const fibFunc2 = (length) => {
  if (length <= 2) {
    return null
  }

  const fibonacciSequence2 = [0, 1];

  for (let i = 2; i < length; i++) {
    const old1 = fibonacciSequence2[i - 1];
    const old2 = fibonacciSequence2[i - 2];
    fibonacciSequence2.push(old1 + ld2);
  }

  return fibonacciSequence2;
}
console.log(fibFunc2(10));

// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

// b) Create the function that makes the test pass.

// --------------------2) Create a function that takes in an object and returns an array of the values sorted from least to greatest.
// Hint: Check out this resource: Object.values() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values

// a) Create a test with expect statements for each of the variables provided.

const studyMinutesWeek1 = {
  sunday: 90,
  monday: 30,
  tuesday: 20,
  wednesday: 15,
  thursday: 30,
  friday: 15,
  saturday: 60
}
// Expected output: [15, 15, 20, 30, 30, 60, 90]

const studyMinutesWeek2 = {
  sunday: 100,
  monday: 10,
  tuesday: 45,
  wednesday: 60,
  thursday: 20,
  friday: 15,
  saturday: 65
}
// Expected output: [10, 15, 20, 45, 60, 65, 100]

// b) Create the function that makes the test pass.

// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.

const accountTransactions1 = [100, -17, -23, -9]
// Expected output: [100, 83, 60, 51]

const accountTransactions2 = [250, -89, 100, -96]
// Expected output: [250, 161, 261, 165]

const accountTransactions3 = []
// Expected output: []

// b) Create the function that makes the test pass.

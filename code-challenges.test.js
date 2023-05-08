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
//     const expectxed = [0, 1, 1, 2, 3, 5]; // An array of the expected output
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

// Create a test that sees Good failure
// FAIL  ./code-challenges.test.js
// fibFunc2
// The test failed at the correct spot, the expect, because the function was not yet written.  
// describe('fibFunc2', () => { // The function is being declaired as fibFunc
//   it('returns an array of fibonacci sequence with length 10', () => { // This is the input of the function
//     const expected = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]; // An array of the expected output
//     expect(fibFunc2(10)).toEqual(expected);
//   })

//   it('returns null for input less than or equal to 2', () => { // This is the conditional portion of the fibFunc.  Since I do not want a number less than 2, I used null to return absolute nothing.  
//     expect(fibFunc2(1)).toBeNull(); // verifies that if the input is 1, the output will be null
//     expect(fibFunc2(2)).toBeNull(); // verifies that if the input is 2, the output will be null
//   })

//   it('returns the correct sequence for an input greater than 2', () => {// this is the expected output statement 
//     const expected = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]; // created a array just for this test, it looks cleaner.
//     expect(fibFunc2(10)).toEqual(expected);
//   })
// })
const fibFunc2 = (number) => {// The name of my function with the parameter of number.
  if (number <= 2) {// If the inputed number is less than or equal to 2 statement is the boolean value true, return nothing (null).  
    return null
  }
const fibonacciSequence2 =  [1,1] // a variable containing the fibonacci sequence
for (let i = 2; i < number; i++) { // Setting up a for loop here.  I researched alternative methods and found out I could have done a while, and a do-while loop but this is already confusing enough so I am sticking with the for loop.  I want to define i as equal to 2.   
    const old1 = fibonacciSequence2[i - 1] // We are storing the fibonacciSequence2 array and for loop into new variables, and passing a argument of i(which is 2) being subracted by 1 and 2 which would have a output of 1 and 1
    const old2 = fibonacciSequence2[i - 2]
    fibonacciSequence2.push(old1 + old2)// using the .push method to add the results of these two variables and adding them to the array.
  }
 return fibonacciSequence2
}
// console.log(fibFunc2(10))

// b) Create the function that makes the test pass.
// PASS  ./code-challenges.test.js
// fibFunc2
//   ✓ returns an array of fibonacci sequence with length 10 (1 ms)
//   ✓ returns null for input less than or equal to 2
//   ✓ returns the correct sequence for an input greater than 2 (1 ms)
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]



// --------------------2) Create a function that takes in an object and returns an array of the values sorted from least to greatest.
// Hint: Check out this resource: Object.values() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values

// a) Create a test with expect statements for each of the variables provided.
//Psudeo Code
// Input : take in an object
// Output : return a sorted array of values from least to greatest
// Process outlined line by line 

// Create a test in Jest that will produce Good Failure
// FAIL  ./code-challenges.test.js
// studyLog
  // ✕ a function that takes in a object (1 ms)
// describe('studyLog', () => {
// it(`a function that takes in a object`, () => { 
// expect(`array of values sorted from least to greatest`).toEqual[15, 15, 20, 30, 30, 60, 90];
//     });
//   });

const studyMinutesWeek1 = { // the given data
  sunday: 90,
  monday: 30,
  tuesday: 20,
  wednesday: 15,
  thursday: 30,
  friday: 15,
  saturday: 60
}

// Using the information provided from the URL I learned that the Object.values is essentially a short handed way to iterate over an object with out having to write out a entire for loop. We reference the object (studyMinutesWeek1), and access the values (the numbers), and use the .sort method to sort from largest to greatest.}
// console.log(studyLog(studyMinutesWeek1))
// Expected output: [15, 15, 20, 30, 30, 60, 90]

// See the test pass
// PASS  ./code-challenges.test.js
// studyLog
//   ✓ a function that takes in a object (1 ms)

//Psuedocode: I repeated the same process as above, only changed the name of the function and the output in the Jest Test statement. 


// Create a test in jest to produce Good Failure
// FAIL  ./code-challenges.test.js
// studyLog2
  // ✕ a function that takes in a object (1 ms)
  // this test failed because the function was not created below
  // / describe('studyLog2', () => {//declare a function called studyLog and assign a parameter of `time`.
  //   it(`a function that takes in a object`, () => {// describing the action my function will complete. 
  //   expect(`array of values sorted from least to greatest`).toEqual[10, 15, 20, 45, 60, 65, 100];// the expected output 
//   //       });
//   //     });

// const studyMinutesWeek2 = {
//   sunday: 100,
//   monday: 10,
//   tuesday: 45,
//   wednesday: 60,
//   thursday: 20,
//   friday: 15,
//   saturday: 65
// }
// // Expected output: [10, 15, 20, 45, 60, 65, 100]
// // PASS  ./code-challenges.test.js
// // studyLog2
// //   ✓ a function that takes in a object (1 ms)


// const studyLog2 = (time) => {
//   return Object.values(time).sort((a,b) => a-b)
// }
// console.log(studyLog2(studyMinutesWeek2));
// b) Create the function that makes the test pass.

// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.
// Psuedocode:
// input : a function that takes in a array
// output ; return an array of the accumilatied sum.  Empty arrays will return empty arrays.
// process: will be described line by line 

// a) Create a test with expect statements for each of the variables provided.
// Create a jest test to produce Good Failure.

// FAIL  ./code-challenges.test.js
// acct1
//   ✕ takes in an array and returns an array of the accumulating sum (1 ms)

// describe('acct1', () => { 
//   it(`takes in an array and returns an array of the accumulating sum`, () => { 
//       expect(acct1([100, -17, -23, -9])).toEqual([100, 83, 60, 50])
//     })
// })

  

const accountTransactions1 = [100, -17, -23, -9]
// Expected output: [100, 83, 60, 51]
const acct1 = [accountTransactions1[0]]// declared a function named acct1.  Initialize the given array at the first element index
for (let i = 1; i < accountTransactions1.length; i++) {// iterate over each each element with a for loop.  Started with letting i = 0, and returned NaN.  Adjusted i = 1 and returned correct output.
  acct1.push(acct1[i - 1] + accountTransactions1[i]);// after iteration, use the .push method adds the sum of acct1 and accountTransactions1 to acct1. the [i-1] will accesses the previous element in the previous array. The [i] accesses the current element in that array.
  // acct1[i - 1] + accountTransactions1[i] as a whole will add the previous element to the current element. 
}

// console.log(acct1); //used to check
// Psuedocode: Repeated the same process as above, only changed the function name.

// Create a test in jest to produce Good Failure
// FAIL  ./code-challenges.test.js
// acct2
//   ✕ takes in an array and returns an array of the accumulating sum

// ● acct2 › takes in an array and returns an array of the accumulating sum

//   ReferenceError: acct2 is not defined
// Psuedocode:
// input : take in an array
// output : return an array with the sum of the accumilated numbers
// Process : line by line below
// describe('acct2', () => { 
//   it(`takes in an array and returns an array of the accumulating sum`, () => { 
//       expect(acct2([250, -89, 100, -96])).toEqual([250, 161, 261, 165])
//     })
// })

const accountTransactions2 = [250, -89, 100, -96]
// Expected output: [250, 161, 261, 165]

const acct2 = (accountTransactions2) => {// declared a function named acct2, used the given array as a parameter.
  let runningTotal = [accountTransactions2[0]]// created a new variable to hold the pushed values later on 
  for (let i = 1; i < accountTransactions2.length; i++) {// for loop to iterate over the entire length of the given array
    runningTotal.push(runningTotal[i - 1] + accountTransactions2[i])// after iteration, use the .push method adds the sum of acct2 and accountTransactions1 to acct2. the [i-1] will accesses the previous element in the previous array. The [i] accesses the current element in that array.
    // acct2i - 1] + accountTransactions1[i] as a whole will add the previous element to the current element. 
  }
  return runningTotal;
}


// console.log(acct2) used to check output 

// Psuedocode:
// Input : take in a empty array
// Output : a empty array
// Process: This one is simple.  I will exlain here, I delcared a function called arrayChecker, used the parameter of array, and set up a conditional statement to check the length of the accountTransactions3 array.  If it was nothing, then return nothing.  

const accountTransactions3 = []
const arrayChecker = (array) => {
  if (accountTransactions3.length === 0) {
  }
    return []
}
// console.log(arrayChecker([])) used to check output 
// Expected output: []

// b) Create the function that makes the test pass.

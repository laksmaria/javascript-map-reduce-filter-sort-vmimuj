// Array Map function
let numbers = [15, 2, 55, 5, 1, 9, 10];

console.log(numbers.map(number => number * 2)); // Doubling each number in array => result is [30, 4, 110, 10, 2, 18, 20]


// Array Reduce function
let numbers = [15, 2, 55, 5, 1, 9, 10];
const initialValue = 0;
console.log(numbers.reduce((total, number) => total + number, initialValue)); // Adding all numbers in array => result is 97
// The array reduce() method in JavaScript is used to reduce the array to a single value and executes a provided function for each value of the array (from left-to-right) and the return value of the function is stored in an accumulator.


// Array Filter function
let numbers = [15, 2, 50, 55, 90, 5, 4, 9, 10];
console.log(numbers.filter(number => number % 2 == 1)); // Filtering odd numbers => result is [15, 55, 5, 9]


// Array Sort function
let numbers = [15, 2, 50, 55, 90, 5, 4, 9, 10];
console.log(numbers.sort((num1, num2) => num1 - num2)); // Sorting numbers in accending order => result is [2, 4, 5, 9, 10, 15, 50, 55, 90]


// Chaining all above four functions(Map, Sort, Filter and Reduce funtions)
let numbers = [15, 2, 50, 55, 90, 5, 4, 9, 10];
let initialValue = 5;
const result = numbers
              .map(number => number * 2)  // [30, 4, 100, 110, 180, 10, 8, 18, 20]// 
              .sort((num1, num2) => num1 - num2) // [4, 8, 10, 18, 20, 30, 100, 110, 180]
              .filter(number => number > 20) // [30, 100, 110, 180]
              .reduce((total, number) => total + number, initialValue); //425

console.log(result); // Answer is 425
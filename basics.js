// 1. variables

// thisIsCorrectExampleOfCamelCase
let intermediateResult = 89 / 12;
// 1. variable's declaration:     let intermediateResult
// 2. variable's initialization:  intermediateResult = 89 / 12;

intermediateResult = 42;

// 2. math

const a = 42;
console.log("🚀 ~ file: basics.js:13 ~ a:", a);
const b = 7;
console.log("🚀 ~ file: basics.js:15 ~ b:", b);

let result;
result = a + b;
console.log("🚀 ~ file: basics.js:17 ~ result of +:", result);

result = a - b;
console.log("🚀 ~ file: basics.js:20 ~ result of -:", result);

result = a * b;
console.log("🚀 ~ file: basics.js:23 ~ result of *:", result);

result = a / b;
console.log("🚀 ~ file: basics.js:26 ~ result of /:", result);

result = a % b;
console.log("🚀 ~ file: basics.js:29 ~ result of %:", result);

result = a ** b;
console.log("🚀 ~ file: basics.js:32 ~ result of **:", result)


// 3. conditions

const value1 = 15;
const value2 = 12;
const value3 = 21;
const value4 = '15';

const compareResult = value1 === value4;
console.log("🚀 ~ file: basics.js:44 ~ compareResult:", compareResult);

const valueFromUser = prompt('please enter a number from 1 to 10');  // '5'
const numberFromUser = parseInt(valueFromUser);  // 5
console.log("🚀 ~ file: basics.js:55 ~ numberFromUser:", numberFromUser)
const oneMoreValueFromUser = +prompt('please enter a number from 1 to 10');
console.log("🚀 ~ file: basics.js:56 ~ oneMoreValueFromUser:", oneMoreValueFromUser);

if (numberFromUser > oneMoreValueFromUser) {
  console.log('value1 is greater than value2');
} else {
  console.log('value1 is less than value2');
}



// functions
// loops
// arrays
// objects
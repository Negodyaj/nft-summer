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

const phrase = `He told me: "I don't like winter"`;

const valueFromUser = 42;
//const valueFromUser = +prompt('please enter a number from 1 to 10');  // '5'

if (valueFromUser === 1) {
  console.log('one');
}

if (valueFromUser === 2) {
  console.log('two');
}

if (valueFromUser === 3) {
  console.log('three');
}

if (valueFromUser > 3) {
  console.log("we don't know this number");
}

// version 2

if (valueFromUser === 1) {
  console.log('one');
} else if (valueFromUser === 2) {
  console.log('two');
} else if (valueFromUser === 3) {
  console.log('three');
} else if (valueFromUser === 4 || valueFromUser === 5 || valueFromUser === 6) {
  console.log('please try another number');
} else {
  console.log("we don't know this number");
}

// version 3

switch (valueFromUser) {
  case 1:
    console.log('one');
    break;
  case 2:
    console.log('two');
    break;
  case 3:
    console.log('three');
    break;
  case 4:
  case 5:
  case 6:
    console.log('please try another number');
    break;
  default:
    console.log("we don't know this number");
    break;
  }

let isInEditMode = true; // it might be true also
let isRoadStopInRoad = true;
let roadDirection = 4;
const circleRoadDirection = 4;
let isSelectedRoadStopEqualsToFirstRoadStopInRoad = true;

console.log((isInEditMode) && (!isRoadStopInRoad || (roadDirection === circleRoadDirection && isSelectedRoadStopEqualsToFirstRoadStopInRoad)));

// ALT + SHIFT + F


// functions

function sumTwoNumbers() {
  const result = getNumberFromUser('please enter a number from 1 to 10') + getNumberFromUser('please enter a number from -5 to 5');
  return result;
}

function getNumberFromUser(message) {
  let convertedValue;
  do {
    const valueFromUser = prompt(message);
    convertedValue = parseInt(valueFromUser);
  }
  while (isNaN(convertedValue))
   
  return convertedValue;
}

console.log(sumTwoNumbers());

// loops

let counter = 10;

console.log('before the loop');

while (counter < 10) {
  console.log(counter + 1);
  counter++;
}

console.log('after the loop');

// arrays
// objects

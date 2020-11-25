/* eslint-disable no-console */
const add = require('./add');
const subtract = require('./subtract');
const multiply = require('./multiply');
const divide = require('./divide');

let [, , num1, op, num2] = process.argv;

num1 = parseInt(num1);
num2 = parseInt(num2);

let result;

if (op === 'plus') {
  result = add.sum(num1, num2);
}
if (op === 'minus') {
  result = subtract.difference(num1, num2);
}
if (op === 'times') {
  result = multiply.product(num1, num2);
}
if (op === 'over') {
  result = divide.quotient(num1, num2);
}

console.log('result:', result);

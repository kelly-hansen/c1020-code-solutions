/* eslint-disable no-unused-vars, no-console */

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const names = [
  'Ada',
  'Hedy',
  'Jean',
  'Grace',
  'Evelyn',
  'Joan',
  'Elizabeth',
  'Janese',
  'Donna'
];

const evenNumbers = numbers.filter(n => n % 2 === 0);
const overFive = numbers.filter(n => n > 5);
const startWithE = names.filter(n => n[0] === 'E');
const haveD = names.filter(n => {
  for (let i = 0; i < n.length; i++) {
    if (n[i] === 'D' || n[i] === 'd') {
      return true;
    }
  }
  return false;
});

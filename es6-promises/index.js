/* eslint-disable no-unused-vars, no-console */
const takeAChance = require('./take-a-chance');

const p1 = takeAChance('Kelly');

p1.then(value => {
  console.log(value);
}, reason => {
  console.error(reason);
});

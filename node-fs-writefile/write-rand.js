const fs = require('fs');

const randomNum = Math.ceil(Math.random() * 100);

fs.writeFile('random.txt', randomNum, err => {
  if (err) throw err;
});

/* eslint-disable no-console */
const fs = require('fs');

const resultObj = {};
for (let i = 2; i < process.argv.length; i++) {
  fs.readFile(`./${process.argv[i]}`, 'utf8', (err, data) => {
    if (err) throw err;
    resultObj[i] = data;
    let complete = true;
    for (let x = 2; x < process.argv.length; x++) {
      if (!resultObj[x]) {
        complete = false;
        break;
      }
    }
    if (complete) {
      let result = '';
      for (let x = 2; x < process.argv.length; x++) {
        result += resultObj[x];
      }
      console.log(result);
    }
  });
}

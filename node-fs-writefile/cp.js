const fs = require('fs');

fs.readFile(process.argv[2], 'utf-8', (err, d) => {
  if (err) throw err;
  fs.writeFile(process.argv[3], d, err2 => {
    if (err2) throw err2;
  });
});

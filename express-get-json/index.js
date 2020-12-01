const express = require('express');

const array = [
  {
    id: 1,
    name: 'Vincent Vega',
    course: 'Sociology',
    grade: 9001
  },
  {
    id: 2,
    name: 'Marcellus Wallace',
    course: 'Financial Literacy',
    grade: 8050
  }
];

const app = express();

app.get('/api/grades', (req, res) => {
  res.json(array);
});

app.listen(3000, () => {
  process.stdout.write('Express server listening on port 3000\n');
});

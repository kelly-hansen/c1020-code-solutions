const express = require('express');

const app = express();

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

app.get('/api/grades', (req, res) => {
  res.json(array);
});

app.delete('/api/grades/:id', (req, res) => {
  for (let i = 0; i < array.length; i++) {
    if (parseInt(req.params.id) === array[i].id) {
      array.splice(i, 1);
      res.sendStatus(204);
      break;
    }
  }
});

app.listen(3000, () => {
  process.stdout.write('Express server listening on port 3000\n');
});

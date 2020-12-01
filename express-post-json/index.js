const express = require('express');

const grades = [];
let nextId = 1;

const app = express();

app.use(express.json());

app.get('/api/grades', (req, res) => {
  res.json(grades);
});

app.post('/api/grades', (req, res) => {
  const newGrade = req.body;
  newGrade.id = nextId;
  newGrade.grade = parseInt(newGrade.grade, 10);
  grades.push(newGrade);
  res.status(201).send(newGrade);
  nextId++;
});

app.listen(3000, () => {
  process.stdout.write('Express server listening on port 3000\n');
});

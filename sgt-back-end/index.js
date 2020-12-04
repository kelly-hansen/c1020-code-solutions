const express = require('express');

const pg = require('pg');

const db = new pg.Pool({
  connectionString: 'postgres://dev:lfz@localhost/studentGradeTable'
});

const app = express();

app.use(express.json());

app.get('/api/grades', (req, res) => {
  const sql = `
    select *
      from "grades";
  `;
  db.query(sql)
    .then(result => {
      res.status(200).json(result.rows);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'An unexpected error has occurred' });
    });
});

app.post('/api/grades', (req, res) => {
  const newName = req.body.name;
  const newCourse = req.body.course;
  const newScore = parseInt(req.body.score, 10);
  if (newName === undefined || newCourse === undefined || isNaN(newScore)) {
    res.status(400).json({ error: 'name, course, and score are required fields' });
    return;
  }
  if (!Number.isInteger(newScore) || newScore < 1 || newScore > 100) {
    res.status(400).json({ error: 'score must be an integer 1-100' });

  }

});

app.listen(3000, () => {
  process.stdout.write('Express server listening on port 3000\n');
});

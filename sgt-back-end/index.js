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
  const newScore = req.body.score;
  console.log(newName, newCourse, newScore);
});

app.listen(3000, () => {
  process.stdout.write('Express server listening on port 3000\n');
});

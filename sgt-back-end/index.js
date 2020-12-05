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
  let newScore;
  if (req.body.score) {
    newScore = parseInt(req.body.score, 10);
  }
  if (newName === undefined || newCourse === undefined || newScore === undefined) {
    res.status(400).json({ error: 'name, course, and score are required fields' });
    return;
  }
  if (!Number.isInteger(newScore) || newScore < 1 || newScore > 100) {
    res.status(400).json({ error: 'score must be an integer 1-100' });
    return;
  }
  const sql = `
    insert into "grades" ("name", "course", "score")
         values ($1, $2, $3)
      returning *;
  `;
  const values = [newName, newCourse, newScore];
  db.query(sql, values)
    .then(result => {
      res.status(201).json(result.rows[0]);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'An unexpected error has occurred' });
    });
});

app.put('/api/grades/:gradeId', (req, res) => {
  const id = parseInt(req.params.gradeId, 10);
  const newName = req.body.name;
  const newCourse = req.body.course;
  let newScore;
  if (req.body.score) {
    newScore = parseInt(req.body.score, 10);
  }
  if (!Number.isInteger(id) || id < 1) {
    res.status(400).json({ error: 'gradeId must be a positive integer' });
    return;
  }
  if (newName === undefined || newCourse === undefined || newScore === undefined) {
    res.status(400).json({ error: 'name, course, and score are required fields' });
    return;
  }
  if (!Number.isInteger(newScore) || newScore < 1 || newScore > 100) {
    res.status(400).json({ error: 'score must be an integer 1-100' });
    return;
  }
  const sql = `
    update "grades"
       set "name"   = $2
           "course" = $3
           "score"  = $4
     where "gradeId" = $1
  `;
  const values = [id, newName, newCourse, newScore];
});

app.listen(3000, () => {
  process.stdout.write('Express server listening on port 3000\n');
});

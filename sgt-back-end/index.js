const express = require('express');

const pg = require('pg');

const db = new pg.Pool({
  connectionString: 'postgres://dev:lfz@localhost/studentGradeTable'
});

const app = express();

app.get('/api/grades', (req, res) => {
  const sql = `
    select *
      from "grades";
  `;
  db.query(sql)
    .then(result => {
      const grades = result.rows;
      if (!grades) {
        res.status(500).json({ error: 'An unexpected error has occurred' });
      } else {
        res.status(200).json(grades);
      }
    });
});

app.listen(3000, () => {
  process.stdout.write('Express server listening on port 3000\n');
});

require('dotenv/config');
const path = require('path');
const express = require('express');
const pg = require('pg');

const db = new pg.Pool({
  connectionString: process.env.DATABASE_URL
});

const publicPath = path.join(__dirname, 'public');
const staticMiddleware = express.static(publicPath);

const app = express();

app.use(staticMiddleware);

const jsonMiddleware = express.json();

app.use(jsonMiddleware);

app.get('/api/todos', (req, res) => {
  const sql = `
    select *
      from "todos"
     order by "todoId"
  `;
  db.query(sql)
    .then(result => {
      res.json(result.rows);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'an unexpected error occurred'
      });
    });
});

app.post('/api/todos', (req, res) => {
  const { task, isCompleted = false } = req.body;
  if (!task || typeof isCompleted !== 'boolean') {
    res.status(400).json({
      error: 'task (string) and isCompleted (boolean) are required fields'
    });
  }
  const sql = `
    insert into "todos" ("task", "isCompleted")
    values ($1, $2)
    returning *
  `;
  const params = [task, isCompleted];
  db.query(sql, params)
    .then(result => {
      const [todo] = result.rows;
      res.status(201).json(todo);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'an unexpected error occurred'
      });
    });
});

app.patch('/api/todos/:todoId', (req, res) => {
  const todoId = parseInt(req.params.todoId, 10);
  if (!Number.isInteger(todoId) || todoId < 1) {
    res.status(400).json({
      error: 'todoId must be a positive integer'
    });
    return;
  }
  const { isCompleted } = req.body;
  if (typeof isCompleted !== 'boolean') {
    res.status(400).json({
      error: 'isCompleted (boolean) is a required field'
    });
  }
  const sql = `
    update "todos"
       set "updatedAt"   = now(),
           "isCompleted" = $1
     where "todoId" = $2
     returning *
  `;
  const params = [isCompleted, todoId];
  db.query(sql, params)
    .then(result => {
      const [todo] = result.rows;
      res.json(todo);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'an unexpected error occurred'
      });
    });
});

app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`express server listening on port ${process.env.PORT}`);
});

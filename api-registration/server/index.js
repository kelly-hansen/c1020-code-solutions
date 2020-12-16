require('dotenv/config');
const pg = require('pg');
const argon2 = require('argon2'); // eslint-disable-line
const express = require('express');
const ClientError = require('./client-error');
const errorMiddleware = require('./error-middleware');

const db = new pg.Pool({ // eslint-disable-line
  connectionString: process.env.DATABASE_URL
});

const app = express();

const jsonMiddleware = express.json();

app.use(jsonMiddleware);

app.post('/api/auth/sign-up', (req, res, next) => {
  const { username, password } = req.body;
  if (!username || !password) {
    throw new ClientError(400, 'username and password are required fields');
  }

  /* your code starts here */
  argon2
    .hash(password)
    .then(hashedPassword => {
      const sql = `
      insert into "users" ("username", "hashedPassword")
      values ($1, $2)
      returning ("userId", "username", "createdAt");
      `;
      const params = [username, hashedPassword];
      db.query(sql, params)
        .then(result => {
          const resultStr = result.rows[0].row;
          const resultArr = resultStr.slice(1, resultStr.length - 1).split(',');
          const resultUserId = parseInt(resultArr[0], 10);
          const resultUsername = resultArr[1];
          const resultCreatedAt = resultArr[2].slice(1, resultArr[2].length - 1);
          res.json({
            createdAt: resultCreatedAt,
            userId: resultUserId,
            username: resultUsername
          });
        })
        .catch(err => console.error(err));
    })
    .catch(err => console.error(err));
  /**
   * Hash the user's password with `argon2.hash()`
   * Then, 😉
   *   Insert the user's "username" and "hashedPassword" into the "users" table.
   *   Then, 😉
   *     Respond to the client with a 201 status code and the new user's "userId", "username", and "createdAt" timestamp.
   *   Catch any errors.
   * Catch any errors.
   *
   * Hint: Insert statements can include a `returning` clause to retrieve the insterted row(s).
   */

});

app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`express server listening on port ${process.env.PORT}`);
});

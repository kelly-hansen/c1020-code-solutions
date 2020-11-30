const express = require('./node_modules/express/index');
const app = express();

app.use((req, res) => {
  res.send('We Live In a Twilight World');
});

app.listen(3000, () => {
  process.stdout.write('Express server listening on port 3000\n');
});

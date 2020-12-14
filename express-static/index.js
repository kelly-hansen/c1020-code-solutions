const express = require('express');
const path = require('path');

const app = express();

const publicDir = path.join(__dirname, 'public');

const servePublic = express.static(publicDir);

app.use(servePublic);

app.listen(3000, () => {
  console.log('Express server listening on port 3000');
});

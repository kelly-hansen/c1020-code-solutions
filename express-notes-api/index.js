const express = require('express');
const data = require('./data.json');

const app = express();

app.get('/api/notes', (req, res) => {
  const notes = [];
  for (let i = 1; i < data.nextId; i++) {
    notes.push(data.notes[i]);
  }
  res.status(200).json(notes);
});

app.get('/api/notes/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  if (!Number.isInteger(id) || id <= 0) {
    res.status(400).json({ error: 'id must be a positive integer' });
  } else if (data.notes[id]) {
    res.status(200).json(data.notes[id]);
  } else if (!data.notes[id]) {
    res.status(404).json({ error: `cannot find note with id ${id}` });
  }
});

app.listen(3000, () => {
  process.stdout.write('Express server listening on port 3000\n');
});

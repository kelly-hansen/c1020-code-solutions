const express = require('express');
const fs = require('fs');
const data = require('./data.json');

const app = express();

app.use(express.json());

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

app.post('/api/notes', (req, res) => {
  const newNote = req.body.content;
  if (!newNote) {
    res.status(400).json({ error: 'content is a required field' });
  } else {
    const noteId = data.nextId;
    data.notes[noteId] = {};
    data.notes[noteId].content = newNote;
    data.notes[noteId].id = data.nextId;
    data.nextId++;
    const newData = JSON.stringify(data, null, 2);
    fs.writeFile('./data.json', newData, 'utf8', err => {
      if (err) {
        res.status(500).json({ error: 'An unexpected error occurred.' });
      } else {
        res.status(201).json(data.notes[noteId]);
      }
    });
  }
});

app.delete('/api/notes/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  if (!Number.isInteger(id) || id <= 0) {
    res.status(400).json({ error: 'id must be a positive integer' });
  } else if (!data.notes[id]) {
    res.status(404).json({ error: `cannot find note with id ${id}` });
  } else {
    delete data.notes[id];
    const newData = JSON.stringify(data, null, 2);
    fs.writeFile('./data.json', newData, 'utf8', err => {
      if (err) {
        res.status(500).json({ error: 'An unexpected error occurred.' });
      } else {
        res.sendStatus(204);
      }
    });
  }
});

app.put('/api/notes/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const newNote = req.body.content;
  if (!Number.isInteger(id) || id <= 0) {
    res.status(400).json({ error: 'id must be a positive integer' });
  } else if (!newNote) {
    res.status(400).json({ error: 'content is a required field' });
  } else if (!data.notes[id]) {
    res.status(404).json({ error: `cannot find note with id ${id}` });
  } else {
    data.notes[id].content = newNote;
    const newData = JSON.stringify(data, null, 2);
    fs.writeFile('./data.json', newData, 'utf8', err => {
      if (err) {
        res.status(500).json({ error: 'An unexpected error occurred.' });
      } else {
        res.status(200).json(data.notes[id]);
      }
    });
  }
});

app.listen(3000, () => {
  process.stdout.write('Express server listening on port 3000\n');
});

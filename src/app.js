const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const movies = [];
const series = [];

app.get('/movies/:id', (req, res) => {
  const { id } = req.params;
  if (id < movies.length) {
      res.json(movies[id]);
  } else {
      res.status(404).json({ message: 'Movie not found' });
  }
  });

app.post('/movies', (req, res) => {
  const data = req.body;
  movies.push(data);
  res.status(201).json(data);
});

app.put('/movies/:id', (req, res) => {
  const { id } = req.params;
  const data = req.body;
  if (movies[id]) {
    movies[id] = data;
    res.json(data);
  } else {
    res.status(404).json({ message: 'Movie not found' });
  }
});

app.delete('/movies/:id', (req, res) => {
  const { id } = req.params;
  if (movies[id]) {
    const deletedMovie = movies.splice(id, 1)[0];
    res.json(deletedMovie);
  } else {
    res.status(404).json({ message: 'Movie not found' });
  }
});

app.get('/series/:id', (req, res) => {
  const { id } = req.params;
  if (id < series.length) {
      res.json(series[id]);
  } else {
      res.status(404).json({ message: 'Series not found' });
  }
  });

app.post('/series', (req, res) => {
  const data = req.body;
  series.push(data);
  res.status(201).json(data);
});

app.put('/series/:id', (req, res) => {
  const { id } = req.params;
  const data = req.body;
  if (series[id]) {
    series[id] = data;
    res.json(data);
  } else {
    res.status(404).json({ message: 'Series not found' });
  }
});

app.delete('/series/:id', (req, res) => {
  const { id } = req.params;
  if (series[id]) {
    const deletedSeries = series.splice(id, 1)[0];
    res.json(deletedSeries);
  } else {
    res.status(404).json({ message: 'Series not found' });
  }
});

module.exports = app;

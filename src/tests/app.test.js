const request = require('supertest');
const app = require('../app');

describe('Movie API', () => {
  
  it('should add a new movie', async () => {
    const newMovie = { title: 'New Movie', year: 2023 };
    const response = await request(app).post('/movies').send(newMovie);
    expect(response.statusCode).toBe(201);
    expect(response.body.title).toBe(newMovie.title);
    expect(response.body.year).toBe(newMovie.year);
  });

  it('should update a movie', async () => {
    const updatedMovie = { title: 'Updated Movie', year: 2024 };
    const response = await request(app).put('/movies/0').send(updatedMovie);
    expect(response.statusCode).toBe(200);
    expect(response.body.title).toBe(updatedMovie.title);
    expect(response.body.year).toBe(updatedMovie.year);
  });

  it('should delete a movie', async () => {
    const response = await request(app).delete('/movies/0');
    expect(response.statusCode).toBe(200);
    expect(response.body.title).toBe('Updated Movie'); // Assuming the movie was updated previously
  });

  it('should return 404 for non-existent movie', async () => {
    const response = await request(app).get('/movies/999');
    expect(response.statusCode).toBe(404);
    expect(response.body.message).toBe('Movie not found');
  });

  it('should fail to update a non-existent movie', async () => {
    const updatedMovie = { title: 'Updated Movie', year: 2024 };
    const response = await request(app).put('/movies/999').send(updatedMovie);
    expect(response.statusCode).toBe(404);
    expect(response.body.message).toBe('Movie not found');
  });

  it('should fail to delete a non-existent movie', async () => {
    const response = await request(app).delete('/movies/999');
    expect(response.statusCode).toBe(404);
    expect(response.body.message).toBe('Movie not found');
  });

  it('should return 404 for non-existent movie in GET request', async () => {
    const response = await request(app).get('/movies/999');
    expect(response.statusCode).toBe(404);
    expect(response.body.message).toBe('Movie not found');
  });
});

//Séries

describe('Series API', () => {

  it('should add a new series', async () => {
    const newSeries = {
      title: 'New Series',
      seasons: 3,
      episodes: 24,
    };
    const response = await request(app).post('/series').send(newSeries);
    expect(response.statusCode).toBe(201);
    expect(response.body.title).toBe(newSeries.title);
    expect(response.body.seasons).toBe(newSeries.seasons);
    expect(response.body.episodes).toBe(newSeries.episodes);
  });

  it('should update a series', async () => {
    const updatedSeries = {
      title: 'Updated Series',
      seasons: 4,
      episodes: 30,
    };
    const response = await request(app).put('/series/0').send(updatedSeries);
    expect(response.statusCode).toBe(200);
    expect(response.body.title).toBe(updatedSeries.title);
    expect(response.body.seasons).toBe(updatedSeries.seasons);
    expect(response.body.episodes).toBe(updatedSeries.episodes);
  });

  it('should delete a series', async () => {
    const response = await request(app).delete('/series/0');
    expect(response.statusCode).toBe(200);
    expect(response.body.title).toBe('Updated Series'); // Assuming the series was updated previously
  });

  it('should return 404 for non-existent series', async () => {
    const response = await request(app).get('/series/999');
    expect(response.statusCode).toBe(404);
    expect(response.body.message).toBe('Series not found');
  });

  it('should fail to update a non-existent series', async () => {
    const updatedSeries = {
      title: 'Updated Series',
      seasons: 4,
      episodes: 30,
    };
    const response = await request(app).put('/series/999').send(updatedSeries);
    expect(response.statusCode).toBe(404);
    expect(response.body.message).toBe('Series not found');
  });

  it('should fail to delete a non-existent series', async () => {
    const response = await request(app).delete('/series/999');
    expect(response.statusCode).toBe(404);
    expect(response.body.message).toBe('Series not found');
  });

  it('should return 404 for non-existent series in GET request', async () => {
    const response = await request(app).get('/series/999');
    expect(response.statusCode).toBe(404);
    expect(response.body.message).toBe('Series not found');
  });
});
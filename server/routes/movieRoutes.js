const express = require('express');

const getAllMovies = require('../controllers/movieController').getAllMovies;
const createMovie = require('../controllers/movieController').createMovie;
const updateMovie = require('../controllers/movieController').updateMovie;
const deleteMovie = require('../controllers/movieController').deleteMovie;

const movieRouter = express.Router();

// setup router
movieRouter.route('/').get(getAllMovies).post(createMovie);
movieRouter.route('/:id').patch(updateMovie).delete(deleteMovie);

module.exports = movieRouter;

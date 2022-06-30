const express = require('express');

const getAllMovies = require('../controllers/movieController').getAllMovies;
const createMovie = require('../controllers/movieController').createMovie;

const movieRouter = express.Router();

// setup router
movieRouter.route('/').get(getAllMovies).post(createMovie);

module.exports = movieRouter;

const movieModel = require('../models/movies');

// get all movies
exports.getAllMovies = async (req, res) => {
  const movies = await movieModel.find({});

  try {
    res.status(200).json({
      status: 'success',
      results: movies.length,
      data: {
        movies,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'error',
      message: err,
    });
  }
};

// post a new movie
exports.createMovie = async (req, res) => {
  try {
    const movie = await movieModel.create(req.body);

    res.status(201).json({
      status: 'success',
      data: {
        movie,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'error',
      message: err,
    });
  }
};

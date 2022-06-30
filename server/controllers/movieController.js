const movieModel = require('../models/movies');

// get all movies
exports.getAllMovies = async (req, res) => {
  const movies = await movieModel.find({});

  try {
    res.status(200).json(movies);
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

    res.status(201).json(movie);
  } catch (err) {
    res.status(400).json({
      status: 'error',
      message: err,
    });
  }
};

// update a movie
exports.updateMovie = async (req, res) => {
  try {
    const updatedMovie = await movieModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );

    res.status(200).json(updatedMovie);
  } catch (err) {
    res.status(400).json({
      status: 'error',
      message: err,
    });
  }
};

// delete a movie
exports.deleteMovie = async (req, res) => {
  try {
    await movieModel.findByIdAndDelete(req.params.id);

    res.status(204).json(null);
  } catch (err) {
    res.status(400).json({
      status: 'error',
      message: err,
    });
  }
};

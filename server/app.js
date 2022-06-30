const express = require('express');
const cors = require('cors');

const movieRouter = require('./routes/movieRoutes');

// setup express app
const app = express();

// setup middleware
app.use(express.json());
app.use(cors());
app.use('/api/movie', movieRouter);

module.exports = app;

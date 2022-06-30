import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import MovieItem from '../MovieItem';

const MovieList = () => {
  const movieList = useSelector((state) => state.movie.data);

  const renderedMovieList = movieList.map((movie) => {
    return (
      <div key={movie._id} className='movie-item'>
        <MovieItem {...movie} />
        <Link className='view' to={`/${movie._id}`}>
          View
        </Link>
      </div>
    );
  });

  return <div className='movie-list'>{renderedMovieList}</div>;
};

export default MovieList;

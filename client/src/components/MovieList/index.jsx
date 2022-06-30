import React from 'react';
import { useSelector } from 'react-redux';

import SearchMovie from '../SearchMovie';

const MovieList = () => {
  const movieList = useSelector((state) => state.movie.data);

  return (
    <div className='movie-list'>
      <SearchMovie />
      {console.log(movieList)}
    </div>
  );
};

export default MovieList;

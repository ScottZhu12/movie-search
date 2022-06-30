import React from 'react';

const MovieItem = (props) => {
  const { title, description, releaseYear, duration, rating } = props;

  return (
    <div>
      <h2 className='heading'>{title}</h2>
      <div className='movie-info'>
        <p className='paragraph'>{description}</p>
        <div className='movie-info__detail'>
          <span className='year'>Release Year: {releaseYear}</span>
          <span className='duration'>Duration: {duration}</span>
          <span className='rating'>Rating: {rating}</span>
        </div>
      </div>
    </div>
  );
};

export default MovieItem;

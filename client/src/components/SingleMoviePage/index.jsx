import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import MovieItem from '../MovieItem';
import { deleteMovie } from '../../features/movieSlice';

const SingleMoviePage = () => {
  const { movieId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const moviesList = useSelector((state) => state.movie.data);
  const movieFound = moviesList.find((movie) => movie._id === movieId);

  const onEditBtnClicked = () => {
    navigate(`/edit/${movieId}`, { replace: true });
  };

  const onDeleteBtnClick = () => {
    dispatch(deleteMovie({ id: movieId }));

    navigate('/', { replace: true });
  };

  let content = (
    <div className='single-movie-page'>
      <MovieItem {...movieFound} />
      <button type='button' className='btn' onClick={onEditBtnClicked}>
        Edit
      </button>
      <button type='button' className='btn' onClick={onDeleteBtnClick}>
        Delete
      </button>
    </div>
  );

  return <>{movieFound && content}</>;
};

export default SingleMoviePage;

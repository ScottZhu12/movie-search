import React, { useState } from 'react';
import { DebounceInput } from 'react-debounce-input';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updateMovie } from '../../features/movieSlice';

const EditMovieForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { movieId } = useParams();

  const moviesList = useSelector((state) => state.movie.data);
  const movieFound = moviesList.find((movie) => movie._id === movieId);

  const [description, setDescription] = useState(movieFound.description);
  const [rating, setRating] = useState(String(movieFound.rating));

  const onBtnClicked = (e) => {
    e.preventDefault();

    dispatch(updateMovie({ id: movieId, description, rating: Number(rating) }));

    navigate(`/${movieId}`, { replace: true });
  };

  return (
    <form className='edit-movie-form'>
      <div className='edit-movie-form__field'>
        <label htmlFor='description'>Description</label>
        <DebounceInput
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          debounceTimeout={300}
          element='textarea'
          className='input'
        />
      </div>

      <div className='edit-movie-form__field'>
        <label htmlFor='rating'>rating</label>
        <DebounceInput
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          debounceTimeout={300}
          className='input'
        />
      </div>

      <button type='submit' className='btn' onClick={onBtnClicked}>
        Update
      </button>
    </form>
  );
};

export default EditMovieForm;

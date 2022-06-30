import React, { useState } from 'react';
import { DebounceInput } from 'react-debounce-input';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { addNewMovie } from '../../features/movieSlice';

const AddMovieForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [releaseYear, setReleaseYear] = useState('');
  const [duration, setDuration] = useState('');
  const [rating, setRating] = useState('');

  const onFormSubmit = (e) => {
    e.preventDefault();

    dispatch(
      addNewMovie({
        title,
        description,
        releaseYear: Number(releaseYear),
        duration,
        rating: Number(rating),
      })
    );

    navigate('/', { replace: true });
  };

  return (
    <form className='add-movie-form'>
      <div className='add-movie-form__field'>
        <label htmlFor='title'>Title</label>
        <DebounceInput
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          debounceTimeout={300}
          className='input'
        />
      </div>

      <div className='add-movie-form__field'>
        <label htmlFor='description'>Description</label>
        <DebounceInput
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          debounceTimeout={300}
          element='textarea'
          className='input'
        />
      </div>

      <div className='add-movie-form__field'>
        <label htmlFor='releaseYear'>Release Year</label>
        <DebounceInput
          value={releaseYear}
          onChange={(e) => setReleaseYear(e.target.value)}
          debounceTimeout={300}
          className='input'
        />
      </div>

      <div className='add-movie-form__field'>
        <label htmlFor='duration'>duration</label>
        <DebounceInput
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          debounceTimeout={300}
          className='input'
        />
      </div>

      <div className='add-movie-form__field'>
        <label htmlFor='rating'>rating</label>
        <DebounceInput
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          debounceTimeout={300}
          className='input'
        />
      </div>

      <button type='submit' className='btn' onClick={onFormSubmit}>
        Add Movie
      </button>
    </form>
  );
};

export default AddMovieForm;

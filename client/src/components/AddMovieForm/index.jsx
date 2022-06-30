import React, { useState } from 'react';
import { DebounceInput } from 'react-debounce-input';
import { useDispatch } from 'react-redux';

import { addNewMovie } from '../../features/movieSlice';

const AddMovieForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [releaseYear, setReleaseYear] = useState(null);
  const [duration, setDuration] = useState('');
  const [rating, setRating] = useState(null);

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
  };

  return (
    <form className='add-movie-form'>
      <label htmlFor='title'>Title</label>
      <DebounceInput
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        debounceTimeout={300}
      />

      <label htmlFor='description'>Description</label>
      <DebounceInput
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        debounceTimeout={300}
        element='textarea'
      />

      <label htmlFor='releaseYear'>Release Year</label>
      <DebounceInput
        value={releaseYear}
        onChange={(e) => setReleaseYear(e.target.value)}
        debounceTimeout={300}
      />

      <label htmlFor='duration'>duration</label>
      <DebounceInput
        value={duration}
        onChange={(e) => setDuration(e.target.value)}
        debounceTimeout={300}
      />

      <label htmlFor='rating'>rating</label>
      <DebounceInput
        value={rating}
        onChange={(e) => setRating(Number(e.target.value))}
        debounceTimeout={300}
      />

      <button type='submit' onClick={onFormSubmit}>
        Add Movie
      </button>
    </form>
  );
};

export default AddMovieForm;

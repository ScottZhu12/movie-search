import React, { useState } from 'react';
import { DebounceInput } from 'react-debounce-input';
import axios from 'axios';

const AddMovieForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [releaseYear, setReleaseYear] = useState('');
  const [duration, setDuration] = useState('');
  const [rating, setRating] = useState(null);

  const onFormSubmit = (e) => {
    e.preventDefault();

    axios.post('http://localhost:5000/api/movie', {
      title,
      description,
      releaseYear,
      duration,
      rating,
    });
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

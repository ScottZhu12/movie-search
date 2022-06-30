import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Layout from './components/Layout';
import MovieList from './components/MovieList';
import AddMovieForm from './components/AddMovieForm';
import SingleMoviePage from './components/SingleMoviePage';
import EditMovieForm from './components/EditMovieForm';
import { fetchMovies } from './features/movieSlice';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<MovieList />} />

          <Route path='create'>
            <Route index element={<AddMovieForm />} />
            <Route path=':movieId' element={<SingleMoviePage />} />
            <Route path='edit/:movieId' element={<EditMovieForm />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};

export default App;

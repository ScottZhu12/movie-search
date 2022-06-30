import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from './components/Layout';
import MovieList from './components/MovieList';
import AddMovieForm from './components/AddMovieForm';
import SingleMoviePage from './components/SingleMoviePage';
import EditMovieForm from './components/EditMovieForm';

const App = () => {
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

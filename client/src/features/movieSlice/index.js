import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchMovies = createAsyncThunk('movie/fetchMovies', async () => {
  try {
    const res = await axios.get('http://localhost:5000/api/movie');

    return res.data;
  } catch (err) {
    return err.message;
  }
});

export const addNewMovie = createAsyncThunk(
  'movie/addNewMovie',
  async (newMovie) => {
    try {
      const res = await axios.post('http://localhost:5000/api/movie', newMovie);

      return res.data;
    } catch (err) {
      return err.message;
    }
  }
);

export const updateMovie = createAsyncThunk(
  'movie/updateMovie',
  async (updateFields) => {
    try {
      const { id, description, rating } = updateFields;
      const res = await axios.patch(`http://localhost:5000/api/movie/${id}`, {
        description,
        rating,
      });

      return res.data;
    } catch (err) {
      return err.message;
    }
  }
);

export const deleteMovie = createAsyncThunk(
  'movie/deleteMovie',
  async (movie) => {
    try {
      const { id } = movie;
      await axios.delete(`http://localhost:5000/api/movie/${id}`);

      return id;
    } catch (err) {
      return err.message;
    }
  }
);

const initialState = {
  data: [],
};

const movieSlice = createSlice({
  name: 'movie',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.data = state.data.concat(action.payload);
      })
      .addCase(addNewMovie.fulfilled, (state, action) => {
        state.data.push(action.payload);
      })
      .addCase(updateMovie.fulfilled, (state, action) => {
        const id = action.payload._id;
        const filteredList = state.data.filter((movie) => movie._id !== id);

        state.data = [...filteredList, action.payload];
      })
      .addCase(deleteMovie.fulfilled, (state, action) => {
        const id = action.payload;
        const moviesList = state.data.filter((movie) => movie._id !== id);

        state.data = moviesList;
      });
  },
});

export default movieSlice.reducer;

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

const initialState = {
  data: [],
};

const movieSlice = createSlice({
  name: 'movie',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchMovies.fulfilled, (state, action) => {
      state.data = state.data.concat(action.payload);
    });
    builder.addCase(addNewMovie.fulfilled, (state, action) => {
      state.data.push(action.payload);
    });
  },
});

export default movieSlice.reducer;

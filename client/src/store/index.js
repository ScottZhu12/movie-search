import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from '@reduxjs/toolkit';

import movieReducer from '../features/movieSlice';

const reducer = combineReducers({
  movie: movieReducer,
});

const store = configureStore({
  reducer,
});

export default store;

import { configureStore } from "@reduxjs/toolkit";
import { songsReducer, addSong, removeSong } from "./slices/songsSlice";
import {
  moviesReducer,
  addMovie,
  removeMovie,
  reset,
} from "./slices/moviesSlice";
import { resetAll } from "./actions";

const store = configureStore({
  reducer: {
    songs: songsReducer,
    movies: moviesReducer,
  },
});

export { store };
export { addSong, removeSong, addMovie, removeMovie, reset, resetAll };

import { createSlice } from "@reduxjs/toolkit";
import { resetAll } from "../actions";

const songsSlice = createSlice({
  name: "song",
  initialState: [],
  reducers: {
    addSong(state, action) {
      state.push(action.payload);
    },
    removeSong(state, action) {
      const index = state.indexOf(action.payload);
      state.splice(index, 1);
    },
  },
  extraReducers(builder) {
    // builder.addCase("movie/reset", (state, action) => []);
    // builder.addCase(moviesSlice.actions.reset, (state, action) => []);

    builder.addCase(resetAll, (state, action) => []);
  },
});

export const { addSong, removeSong } = songsSlice.actions;
export const songsReducer = songsSlice.reducer;

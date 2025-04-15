import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    gptMovieName: null,
    gptMovieResult: null,
    isSearchClick: false,
  },

  reducers: {
    toggleGptSearch: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
    resetGptState: (state) => {
      state.showGptSearch = false;
      state.gptMovieName = null;
      state.gptMovieResult = null;
      state.isSearchClick = false;
    },
    
    addGptMovieResult: (state, action) => {
      const { movieName, movieResult } = action.payload;
      state.gptMovieName = movieName
      state.gptMovieResult = movieResult
    },

    resetGptMovieResult: (state) => {
      state.gptMovieName = null
      state.gptMovieResult = null;
    },

    setSearchClick: (state, action) => {
      state.isSearchClick = action.payload;
    },
  },
});

export const gptReducer = gptSlice.reducer;
export const { toggleGptSearch, resetGptState, addGptMovieResult, resetGptMovieResult, setSearchClick } = gptSlice.actions;

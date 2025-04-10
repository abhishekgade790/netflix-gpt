import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
    },
    reducers: {
        setNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
    },
});

export const { setNowPlayingMovies } = moviesSlice.actions;
export const moviesReducer = moviesSlice.reducer;

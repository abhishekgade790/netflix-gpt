import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        popularMovies: null,
        topRatedMovies: null,
        upcomingMovies: null,
        trailorVideo: null,
    },
    reducers: {
        setNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },

        setPopularMovies: (state, action) => {
            state.popularMovies = action.payload;
        },

        setTopRatedMovies: (state, action) => {
            state.topRatedMovies = action.payload;
        },

        setUpcomingMovies: (state, action) => {
            state.upcomingMovies = action.payload;
        },

        setTrailorVideo: (state, action) => {
            state.trailorVideo = action.payload;
        }
    },
});

export const { setNowPlayingMovies, setPopularMovies, setTopRatedMovies, setUpcomingMovies, setTrailorVideo } = moviesSlice.actions;
export const moviesReducer = moviesSlice.reducer;

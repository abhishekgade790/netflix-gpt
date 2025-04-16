import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        popularMovies: null,
        topRatedMovies: null,
        upcomingMovies: null,
        trailorVideo: null,
        detailTrailerVideo: null,
        detailMovieInfo: null,
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
        },
        setDetailTrailerVideo: (state, action) => {
            state.detailTrailerVideo = action.payload;
        },
        setDetailMovieInfo: (state, action) => {
            state.detailMovieInfo = action.payload;
        }

    },
});

export const { setNowPlayingMovies, setPopularMovies, setDetailTrailerVideo, setTopRatedMovies, setUpcomingMovies, setTrailorVideo ,setDetailMovieInfo} = moviesSlice.actions;
export const moviesReducer = moviesSlice.reducer;

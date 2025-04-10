import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        trailorVideo:null,
    },
    reducers: {
        setNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },

        setTrailorVideo:(state,action)=>{
            state.trailorVideo=action.payload;
        }
    },
});

export const { setNowPlayingMovies,setTrailorVideo } = moviesSlice.actions;
export const moviesReducer = moviesSlice.reducer;

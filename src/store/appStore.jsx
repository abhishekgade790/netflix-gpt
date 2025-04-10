import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./userSlice";
import { moviesReducer } from "./moviesSlice";

const appStore = configureStore({
    reducer: {
        user: userReducer,
        movies: moviesReducer,
    },
    devTools: true,
});

export default appStore;

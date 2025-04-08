import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./userSlice";

const appStore = configureStore({
    reducer: {
        user: userReducer,
    },
    devTools: true,
})

export default appStore;
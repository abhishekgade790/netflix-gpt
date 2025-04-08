import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: null,
    reducers: {
        login: (state, action) => {
            return action.payload;  // Store user object directly
        },
        logout: () => {
            return null;
        }
    }
});


export const { login, logout } = userSlice.actions;
export const userReducer = userSlice.reducer;
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
        },
        updateUser: (state, action) => {
            return { ...state, ...action.payload };
          }
          
    }
});


export const { login, logout,updateUser } = userSlice.actions;
export const userReducer = userSlice.reducer;
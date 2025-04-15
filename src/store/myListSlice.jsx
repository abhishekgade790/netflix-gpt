import { createSlice } from "@reduxjs/toolkit";

const myListSlice = createSlice({
  name: "myList",
  initialState: [],
  reducers: {
    addToList(state, action) {
      state.push(action.payload);
    },
    removeFromList(state, action) {
      return state.filter(item => item.id !== action.payload);
    },
    removeAll() {
      return [];
    }
  }
});

export const { addToList, removeFromList, removeAll } = myListSlice.actions;
export const myListReducer = myListSlice.reducer;

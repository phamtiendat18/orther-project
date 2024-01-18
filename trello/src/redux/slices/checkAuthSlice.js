import { createSlice } from "@reduxjs/toolkit";
const initialState = false;

export const checkAuthSlice = createSlice({
  name: "checkAuth",
  initialState,
  reducers: {
    updateAuth: (state, action) => {
      state = action.payload;
    },
  },
});

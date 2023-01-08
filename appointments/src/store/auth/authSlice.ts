import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    accessToken: "",
    isLoggedIn: false,
  },
  reducers: {
    loginUser(state, action) {
      state.accessToken = action.payload.accessToken;
      state.isLoggedIn = action.payload.accessToken !== "";
    },
    logoutUser(state) {
      state.accessToken = "";
      state.isLoggedIn = false;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice;

import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    accessToken: "",
    isLoggedIn: false,
    username: "",
  },
  reducers: {
    loginUser(state, action) {
      state.accessToken = action.payload.accessToken;
      state.isLoggedIn = action.payload.accessToken !== "";
      state.username = action.payload.username;
    },
    logoutUser(state) {
      state.accessToken = "";
      state.isLoggedIn = false;
      state.username = "";
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice;

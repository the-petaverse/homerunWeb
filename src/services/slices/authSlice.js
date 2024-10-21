import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  accessToken: null,
  user: null,
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAccessToken: (state, action) => {
      state.accessToken = action.payload;
    },
    addUserAuth(state, action) {
      state.user = { accessToken: action.payload, isLoggedIn: true };
    },
    logout: (state) => {
      state.accessToken = null;
      state.user = null;
    },
  },
});

export const { addUserAuth, setAccessToken, logout } = authSlice.actions;
export default authSlice.reducer;
export const selectAccessToken = (state) => state.auth.accessToken;

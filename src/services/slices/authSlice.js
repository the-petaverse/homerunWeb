import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  accessToken: null,
  user: null,
  logoutMessage: null,
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
    setLogoutMessage(state, action) {
      state.logoutMessage = action.payload;
    },
    logout: (state) => {
      state.accessToken = null;
      state.user = null;
    },
  },
});

export const { addUserAuth, setAccessToken, logout, setLogoutMessage } =
  authSlice.actions;
export default authSlice.reducer;
export const selectAccessToken = (state) => state.auth.accessToken;

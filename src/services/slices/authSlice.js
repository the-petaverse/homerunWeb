import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  accessToken: null,
  user: null,
  logoutMessage: null,
  passwordResetToken: null,
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAccessToken: (state, action) => {
      state.accessToken = action.payload;
    },
    setPasswordResetToken: (state, action) => {
      state.passwordResetToken = action.payload;
    },
    clearPasswordResetToken: (state, action) => {
      state.passwordResetToken = null;
    },
    addUserAuth(state, action) {
      state.user = { accessToken: action.payload, isLoggedIn: true };
    },
    setLogoutMessage(state, action) {
      state.logoutMessage = action.payload;
    },
    removeLogoutMessage(state, action) {
      state.logoutMessage = null;
    },
    logout: (state) => {
      state.accessToken = null;
      state.user = null;
    },
  },
});

export const {
  addUserAuth,
  setAccessToken,
  logout,
  setLogoutMessage,
  removeLogoutMessage,
  clearAccessToken,
  setPasswordResetToken,
  clearPasswordResetToken,
} = authSlice.actions;
export default authSlice.reducer;
export const selectAccessToken = (state) => state.auth.accessToken;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  auth: null,
};
const authSlice = createSlice({
  name: "user_auth",
  initialState,
  reducers: {
    addUserAuth(state, action) {
      state.auth = { data: action.payload, isLoggedIn: true };
    },
    removeUserAuth(state, action) {
      state.auth = null;
    },
  },
});

export const { addUserAuth, removeUserAuth } = authSlice.actions;
export default authSlice.reducer;

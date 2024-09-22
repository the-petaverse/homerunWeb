import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: localStorage.getItem("currentUser")
    ? JSON.parse(localStorage.getItem("currentUser"))
    : "",
};
const currentUserSlice = createSlice({
  name: "currentUser",
  initialState,
  reducers: {
    addCurrentUser(state, action) {
      const userEmail = action.payload;
      state.currentUser = { userEmail: userEmail, isVerified: false };
      localStorage.setItem("currentUser", JSON.stringify(state.currentUser));
    },
    updateCurrentUser(state, action) {
      state.currentUser = {};
      localStorage.removeItem("currentUser");
    },
  },
});

export const { addCurrentUser, updateCurrentUser } = currentUserSlice.actions;
export default currentUserSlice.reducer;

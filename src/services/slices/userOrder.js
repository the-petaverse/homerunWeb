import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userOrder: localStorage.getItem("user_order")
    ? JSON.parse(localStorage.getItem("user_order"))
    : undefined,
};
const userOrderSlice = createSlice({
  name: "userOrder",
  initialState,
  reducers: {
    addUserOrder(state, action) {
      state.userOrder = { data: action.payload };
      localStorage.setItem("user_order", JSON.stringify(state.userOrder));
    },
  },
});

export const { addUserOrder } = userOrderSlice.actions;
export default userOrderSlice.reducer;

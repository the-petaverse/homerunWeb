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

    removeUserOrder(state, action) {
      state.userOrder = undefined;
      localStorage.removeItem("user_order");
    },
  },
});

export const { addUserOrder, removeUserOrder } = userOrderSlice.actions;
export default userOrderSlice.reducer;

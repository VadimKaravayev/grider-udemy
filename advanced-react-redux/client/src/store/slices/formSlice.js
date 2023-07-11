import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
  name: "form",
  initialState: {
    email: "",
    password: "",
  },
  reducers: {
    changeEmail(state, action) {
      state.email = action.payload;
    },

    changePassword(state, action) {
      state.password = action.payload;
    },
  },
});

export const { changeEmail, changePassword } = formSlice.actions;
export { formSlice };

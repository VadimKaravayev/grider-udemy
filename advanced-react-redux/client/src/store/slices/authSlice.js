import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    authenticated: localStorage.getItem("token"),
    errorMessage: "",
  },
  reducers: {
    authUser(state, action) {
      state.authenticated = action.payload.token;
      state.errorMessage = "";
      console.log("state.authenticated", state.authenticated);
    },
    authError(state, action) {
      state.errorMessage = action.payload;
      state.authenticated = "";
      console.log("state.errorMessage", state.errorMessage);
    },
    signout(state, _) {
      localStorage.clear("token");
      state.authenticated = "";
      state.errorMessage = "";
    },
  },
});

export { authSlice };

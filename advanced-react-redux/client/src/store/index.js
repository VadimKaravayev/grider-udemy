import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { authSlice } from "./slices/authSlice";
import { formSlice } from "./slices/formSlice";
import { changeEmail, changePassword } from "./slices/formSlice";
import { authApi } from "./apis/authApi";

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    form: formSlice.reducer,
    authApi: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(authApi.middleware);
  },
});

setupListeners(store.dispatch);

export { store, changeEmail, changePassword };
export { useSignupMutation, useSigninMutation } from "./apis/authApi";
export const { authUser, authError, signout } = authSlice.actions;

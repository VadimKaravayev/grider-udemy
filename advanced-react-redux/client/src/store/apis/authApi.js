import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3090" }),
  endpoints(builder) {
    return {
      signup: builder.mutation({
        query: ({ email, password }) => ({
          url: "/signup",
          method: "POST",
          body: {
            email,
            password,
          },
        }),
      }),
      signin: builder.mutation({
        query: ({ email, password }) => ({
          url: "/signin",
          method: "POST",
          body: {
            email,
            password,
          },
        }),
      }),
    };
  },
});

export { authApi };
export const { useSignupMutation, useSigninMutation } = authApi;

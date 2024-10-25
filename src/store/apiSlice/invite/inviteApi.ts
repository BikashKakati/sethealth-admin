import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const inviteApi = createApi({
  reducerPath: "inviteApi",
  baseQuery: fetchBaseQuery({ baseUrl: `http`, credentials: "include" }),
  endpoints: (builder) => ({
    inviteDoctor: builder.mutation({
      query: (data) => ({
        url: "/invite-doctor",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useInviteDoctorMutation } = inviteApi;

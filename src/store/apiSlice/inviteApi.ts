import { baseUrl } from "@/config";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const inviteApi = createApi({
  reducerPath: "inviteApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${baseUrl}/admin`,credentials: "include"}),
  endpoints: (builder) => ({
    inviteDoctor: builder.mutation({
      query: (data) => ({
        url: "/invite-doctors",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useInviteDoctorMutation } = inviteApi;

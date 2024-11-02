import { baseUrl } from "@/config";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const servicesApi = createApi({
  reducerPath: "servicesApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${baseUrl}/admin`, credentials: "include" }),
  tagTypes:["services"],
  endpoints: (builder) => ({
    createService:builder.mutation({
        query:(data)=>({
            url:`/services/create`,
            method:"POST",
            body:data
        }),
        invalidatesTags:["services"],
    }),
    getAllServices: builder.query({
      query: () => `/services`,
      providesTags:["services"],
    }),
  }),
});

export const {useGetAllServicesQuery, useCreateServiceMutation} = servicesApi;

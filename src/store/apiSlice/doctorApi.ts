import { baseUrl } from "@/config";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const doctorApi = createApi({
    reducerPath:"doctorApi",
    baseQuery:fetchBaseQuery({baseUrl:`${baseUrl}/admin`, credentials:"include"}),
    endpoints:(builder)=>({
        getAllDoctors:builder.query({
            query:()=>"/doctors",
        })
    })
})

export const {useGetAllDoctorsQuery} = doctorApi
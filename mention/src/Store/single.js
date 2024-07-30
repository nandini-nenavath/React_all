import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const singleOrgApi = createApi({
  reducerPath: "singleOrgApi",
  tagTypes:['Organization'],
  baseQuery: fetchBaseQuery({ baseUrl: "https://devapi.finsights.biz/finsightsorgandmastersmanagementapi/" ,prepareHeaders: (headers) => {
    headers.set('Content-Type', 'application/json;charset=UTF-8');
    headers.set('X-Organization-ID', 1020)
    return headers;}}),
  endpoints: (builder) => ({
    
    getSingleOrg:builder?.query({
      query:()=>({
        url:`v1/organizations/2218?userID=233`,
        }),
      providesTags:['Organization']
    }),


    
  }),
});

export const { useGetSingleOrgQuery } = singleOrgApi;

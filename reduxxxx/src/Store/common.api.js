import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

export const commonApi = createApi({
    reducerPath: 'commonApi',
   
    tagTypes: ['Organizations'],
   
    baseQuery: fetchBaseQuery({
      baseUrl:' https://devapi.finsights.biz/finsightsorgandmastersmanagementapi',
      prepareHeaders: (headers) => {
        headers.set('Content-Type', 'application/json;charset=UTF-8');
        headers.set('X-Organization-ID', 1020)
        return headers;
      },
    }),
   
    endpoints: (_) => ({}),
  });
  
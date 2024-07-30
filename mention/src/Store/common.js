import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const orgApi = createApi({
  reducerPath: "orgApi",
  tagTypes:['Organization'],
  baseQuery: fetchBaseQuery({ baseUrl: "https://devapi.finsights.biz/finsightsorgandmastersmanagementapi/" ,prepareHeaders: (headers) => {
    headers.set('Content-Type', 'application/json;charset=UTF-8');
    headers.set('X-Organization-ID', 1020)
    return headers;}}),
  endpoints: (builder) => ({
    getAllOrganizations: builder.query({
      query: () => "v1/organizations?userID=233",
      providesTags:['Organization']
    }),
    updateOrg:builder?.mutation({
      query:(data)=>({
        url:`v1/organizations/${data?.organizationID}?userID=233`,
        method:'PUT',
        body:data
      }),
      invalidatesTags:['Organization']
    }),
    postOrg:builder?.mutation({
      query:(data)=>({
        url:`v1/organizations?userID=233`,
        method:'POST',
        body:data
      }),
      invalidatesTags:['Organization']
    }),
    deleteOrg:builder?.mutation({
      query:(data)=>({
        url:`v1/organizations/${data}?userID=233`,
        method:'DELETE',
        }),
      invalidatesTags:['Organization']
    }),
    getSingleOrg:builder?.query({
      query:(orgid)=>({
        url:`v1/organizations/${orgid}/preferences?userID=233`,
        }),
      providesTags:['Organization']
    }),
    getSingleAddress:builder?.query({
      query:(orgid)=>({
        url:`v1/organizations/${orgid}/addresses`,
        }),
      providesTags:['Organization']
    }),
    updateAddress:builder?.mutation({
      query:({data,addresses})=>({
        url:`v1/organizations/${data}/addresses`,
        method:'PUT',
        body:addresses
      }),
      invalidatesTags:['Organization']
    }),
    getBranding:builder?.query({
      query:(orgid)=>({
        url:`v1/organizations/${orgid}/branding`,
        
      }),
      providesTags:['Organisations']
    }),
    updateBranding:builder?.mutation({
      query:({orgID,brand})=>({
        url:`v1/organizations/${orgID}/branding`,
        method:'PUT',
        body:brand
        
      }),
      invalidatesTags:['Organisations']
    }),
    getGst:builder?.query({
      query:(orgID)=>({
        url:`v1/organizations/${orgID}/gst-details`
      })
    })    
  }),
});

export const { useGetAllOrganizationsQuery,useUpdateOrgMutation,usePostOrgMutation,useDeleteOrgMutation,useGetSingleOrgQuery,useGetSingleAddressQuery,useUpdateAddressMutation,useGetBrandingQuery,useUpdateBrandingMutation,useGetGstQuery } = orgApi;

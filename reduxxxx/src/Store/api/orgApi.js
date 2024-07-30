import { commonApi } from "../common.api";

export const orgApi = commonApi.injectEndpoints({
    overrideExisting:true,
    endpoints:(builder)=>({
        getAllNewOrganizations: builder.query({
            query:()=>({
                url:`v1/organizations?userID=120004`,
                method:'GET'
            }),
            providesTags:['Organizations']
        })
    })
});

export const   {
    useGetAllNewOrganizations
} =commonApi 
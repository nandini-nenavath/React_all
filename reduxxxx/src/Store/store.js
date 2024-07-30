
import commonSlice from "./commonSlice";
import { commonApi } from "./common.api";
import { setupListeners } from '@reduxjs/toolkit/query'
import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";



const rootReducer = combineReducers({
    common:commonSlice,
    [commonApi.reducerPath] :commonApi.reducer
})

export const store= configureStore({
    reducer:{rootReducer},
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware({
        immutableCheck:false,
        serializableCheck:false
    })
    .concat(commonApi.middleware),
    devTools:process.env.NODE_ENV!=='production'
    
});
setupListeners(store.dispatch)
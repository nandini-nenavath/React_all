import { configureStore } from "@reduxjs/toolkit";
import { orgApi } from "./common";
export const store = configureStore({
  reducer: {
    [orgApi.reducerPath]: orgApi.reducer,
    
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(orgApi.middleware),

});
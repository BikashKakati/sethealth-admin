import { configureStore } from "@reduxjs/toolkit";
import { inviteApi } from "./apiSlice/inviteApi";
import { doctorSlice } from "./reducersSlice/Doctor";

export const store = configureStore({
  reducer: {
   [doctorSlice.name]: doctorSlice.reducer,
    [inviteApi.reducerPath]: inviteApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(inviteApi.middleware),
});


export type RootState = ReturnType<typeof store.getState>
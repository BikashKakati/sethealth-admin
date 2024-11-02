import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./apiSlice/authApi";
import { inviteApi } from "./apiSlice/inviteApi";
import { servicesApi } from "./apiSlice/servicesApi";

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]:authApi.reducer,
    [inviteApi.reducerPath]: inviteApi.reducer,
    [servicesApi.reducerPath]: servicesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(inviteApi.middleware,authApi.middleware,servicesApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

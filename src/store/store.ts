import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./apiSlice/authApi";
import { doctorApi } from "./apiSlice/doctorApi";
import { inviteApi } from "./apiSlice/inviteApi";
import { servicesApi } from "./apiSlice/servicesApi";
import { validateTokenMiddleware } from "./middlewares";
import { authSlice } from "./reducersSlice/authSlice";

export const store = configureStore({
  reducer: {
    [authSlice.name]: authSlice.reducer,
    [authApi.reducerPath]:authApi.reducer,
    [inviteApi.reducerPath]: inviteApi.reducer,
    [servicesApi.reducerPath]: servicesApi.reducer,
    [doctorApi.reducerPath]:doctorApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(inviteApi.middleware,authApi.middleware,servicesApi.middleware, doctorApi.middleware, validateTokenMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;

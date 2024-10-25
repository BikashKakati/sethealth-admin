import { configureStore } from "@reduxjs/toolkit";
import { inviteApi } from "./apiSlice/invite/inviteApi";

export const store = configureStore({
  reducer: {
    [inviteApi.reducerPath]: inviteApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(inviteApi.middleware),
});

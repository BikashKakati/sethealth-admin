import { Middleware } from "@reduxjs/toolkit";
import { handleIsAuthendicated } from "./reducersSlice/authSlice";


// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const validateTokenMiddleware: Middleware= (store) => (next) => (action:any) => {
  if(action.type.endsWith('/rejected')){
    const {data} = action.payload || null;

    if(data?.data?.isTokenVerified === false){
      store.dispatch(handleIsAuthendicated(false));
    }
  }
    return next(action);
  };

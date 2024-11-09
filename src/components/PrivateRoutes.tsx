import { RootState } from "@/store/store";
import { ReactNode } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRoutes = ({
  children,
  isAuthPage,
}: {
  children: ReactNode;
  isAuthPage: boolean;
}) => {
  
const {isAuthenticated} = useSelector((state:RootState) => state.authSlice);

  if (isAuthenticated && isAuthPage) {
    return <Navigate to={"/"} replace />;
  }
  if (!isAuthenticated && !isAuthPage) {
    return <Navigate to={"/sign-in"} replace />;
  }

  return children;
};

export default PrivateRoutes;

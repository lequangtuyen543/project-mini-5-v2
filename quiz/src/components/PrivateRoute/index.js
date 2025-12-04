import { Navigate, Outlet } from "react-router-dom";

export const PrivateRoute = () => {
  const isLogin = true;

  return (
    <>
      {isLogin ? <Outlet /> : <Navigate to="/login" />}
    </>
  )
};
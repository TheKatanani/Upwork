import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";
import Nav from "../components/views/Nav";

const PrivateRoute = () => {
  const state = useSelector(state => state.auth)
  return state.isAuthenticated ? <>
    <Nav />
    <Outlet />
  </>
    : <Navigate to='/login' />
};
export default PrivateRoute;
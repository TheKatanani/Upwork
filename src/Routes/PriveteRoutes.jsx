import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";
import AppFooter from "../components/views/AppFooter";
import Nav from "../components/views/Nav";

const PrivateRoute = () => {
  const state = useSelector(state => state.auth)
  return state.isAuthenticated ? <>
    <Nav />
    <Outlet />
    <AppFooter/>
  </>
    : <Navigate to='/login' />
};
export default PrivateRoute;
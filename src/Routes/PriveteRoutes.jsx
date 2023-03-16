import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";
import AppFooter from "../components/views/AppFooter";
import Header from "../components/views/Header";
import CardPortal from "../components/views/JobCard/CardPortal";

const PrivateRoute = () => {
  const state = useSelector(state => state.auth)
  return state.isAuthenticated ? <>
    <Header />
    <Outlet />
    <AppFooter />
    <CardPortal />
  </>
    : <Navigate to='/login' />
};
export default PrivateRoute;
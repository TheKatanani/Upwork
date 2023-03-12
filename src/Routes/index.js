import { lazy, Suspense } from "react"
import { Route, Routes, Navigate } from "react-router-dom"
import Loading from "../components/common/Loading"
import { useSelector } from "react-redux"
import FindWork from "../Pages/FindWork"
const Signup = lazy(()=>import("../Pages/Signup"))
const Login = lazy(()=>import("../Pages/Login"))
const PageNotFound = lazy(()=>import("../Pages/PageNotFound"))
const JobDetails = lazy(()=>import("../Pages/JobDetails"))
// const Page3 = lazy(()=>import("../Pages/Page3"))
// const Page4 = lazy(()=>import("../Pages/Page4"))
const PrivateRoute = lazy(()=>import("./PriveteRoutes"))
const MyRoutes = ()=>{
    const state=useSelector(state => state.auth)
    return (
      <Suspense fallback={<Loading/>}>
        <Routes>
          <Route index element={<Navigate to='/login' />} />
          <Route path="/login" element={state.isAuthenticated?<Navigate to='/Home' />:<Login/>} />
          <Route path="/signUp" element={state.isAuthenticated?<Navigate to='/Home' />:<Signup />} />
          <Route path="/Home" element={<PrivateRoute/>}>
            <Route index element={<FindWork/>}  />
            <Route path="details/:id" element={<JobDetails/>}  />
            <Route path="*" element={<PageNotFound/>} />
          </Route>
            <Route path="/*" element={<PageNotFound/>} />
        </Routes>
      </Suspense>
    )
}
export default MyRoutes;
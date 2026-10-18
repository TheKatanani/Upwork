import { lazy, Suspense } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Loading from '../components/common/Loading';
import FindWork from '../Pages/FindWork';
import MostResent from '../components/views/MostRecent';
import BestMatches from '../components/views/BestMatches';
import SevedJob from '../components/views/SevedJob';
import SevedSearch from '../components/views/SevedSearch';

const Profile = lazy(() => import('../Pages/Profile'));
const Signup = lazy(() => import('../Pages/Signup'));
const Login = lazy(() => import('../Pages/Login'));
const Search = lazy(() => import('../Pages/Search'));
const PageNotFound = lazy(() => import('../Pages/PageNotFound'));
const JobDetails = lazy(() => import('../Pages/JobDetails'));
const PrivateRoute = lazy(() => import('./PriveteRoutes'));

const MyRoutes = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        {/* Landing page goes directly to Home/bestMatches for guest browsing */}
        <Route index element={<Navigate to="/Home/bestMatches" replace />} />
        
        {/* Auth routes without broken backend */}
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<Signup />} />

        {/* Main application pages - accessible freely by guests and authenticated users */}
        <Route path="/Home" element={<PrivateRoute />}>
          <Route path="" element={<FindWork />}>
            <Route index path="bestMatches" element={<BestMatches />} />
            <Route path="mostRecent" element={<MostResent />} />
            <Route path="saved" element={<SevedJob />} />
          </Route>
          <Route path="details/:id" element={<JobDetails />} />
          <Route path="profile" element={<Profile />} />
          <Route path="Search">
            <Route index element={<Search />} />
            <Route path="seved" element={<SevedSearch />} />
          </Route>

          <Route path="*" element={<PageNotFound />} />
        </Route>

        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </Suspense>
  );
};

export default MyRoutes;
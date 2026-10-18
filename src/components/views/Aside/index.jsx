import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { mainApi } from '../../../API';
import useFetch from '../../../hook/useFetch';
import Avater from '../../common/Avater';
import Loading from '../../common/Loading';
import ProfileComplete from '../../ui/ProfileComplete';
import AsideItem from './AsideItem';
import { StyledAside } from './styled';

function Aside() {
  const { data, isLoading, error } = useFetch(`${mainApi}user/1`);
  const name = useSelector((state) => state.auth.user);

  if (isLoading) {
    return <Loading />;
  }

  if (error && !data) {
    return <p>{error?.message || 'Error loading profile'}</p>;
  }

  const userTitle = data?.title || 'Frontend Developer';

  return (
    <StyledAside>
      <div className="avaterArea">
        <Avater />
        <Link to="/home/profile">{name || 'Freelancer'}</Link>
        <p className="jobTitle">{userTitle}</p>
      </div>
      <ProfileComplete />
      <div className="conectsNum">
        <Link to="#">120 Available Connects</Link>
      </div>
      <main>
        <AsideItem title="Hours per week">
          <p>More than 30 hrs/week</p>
        </AsideItem>
        <AsideItem title="Profile Visibility">
          <p>Public</p>
        </AsideItem>
        <AsideItem title="Job Preference">
          <p>No preference set</p>
        </AsideItem>
      </main>
      <footer>
        <AsideItem title="My Categories " />
        <Link to="#">Web Development</Link>
      </footer>
    </StyledAside>
  );
}

export default Aside;
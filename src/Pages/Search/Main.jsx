import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { SecondaryButton } from '../../assets/styled-components/components';
import Loading from '../../components/common/Loading';
import JobCard from '../../components/views/JobCard';
import SearchBox from '../../components/views/SearchForJob/SearchBox';
import { fetchSearchResults, selectSearchResults, selectStatus } from '../../redux/reducers/jobs';
import { MainStyled } from './styled';

const Main = () => {
  const dispatch = useDispatch();
  const searchResults = useSelector(selectSearchResults);
  const status = useSelector(selectStatus);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchSearchResults(''));
    }
  }, [dispatch, status]);

  return (
    <MainStyled>
      <header>
        <ul>
          <li>
            <NavLink to="/home/search">search</NavLink>
          </li>
          <li>
            <NavLink to="/home/Search/seved">Saved jobs <span className="saved"></span></NavLink>
          </li>
        </ul>
        <div className='search'>
          <SearchBox />
          <SecondaryButton>Save search</SecondaryButton>
        </div>
        <Link to="#">Advanced Search</Link>
      </header>
      <div className='content'>
        {status === 'loading' && <Loading />}
        {status === 'failed' && <p>Failed to load search results</p>}
        {status === 'succeeded' && (
          searchResults && searchResults.length > 0 ? (
            searchResults.map((el) => {
              return <JobCard key={el.id} data={el} />
            })
          ) : (
            <p>No jobs found</p>
          )
        )}
      </div>
    </MainStyled>
  );
};

export default Main;
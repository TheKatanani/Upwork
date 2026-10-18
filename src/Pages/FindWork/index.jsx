import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Container } from '../../assets/styled-components/components';
import Aside from '../../components/views/Aside';
import JobsMightLike from '../../components/views/JobsMightLike';
import SearchForJob from '../../components/views/SearchForJob';
import { StyledFindWork } from './styled';

function FindWork() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const currentPath = location.pathname.toLowerCase().replace(/\/$/, '');
    if (currentPath === '/home' || currentPath === '') {
      navigate('/Home/bestMatches', { replace: true });
    }
  }, [location.pathname, navigate]);

  return (
    <StyledFindWork>
      <Container className='container'>
        <main>
          <SearchForJob />
          <JobsMightLike />
        </main>
        <Aside />
      </Container>
    </StyledFindWork>
  );
}

export default FindWork;
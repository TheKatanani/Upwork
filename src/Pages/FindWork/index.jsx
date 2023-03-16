import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Container } from '../../assets/styled-components/components'
import Aside from '../../components/views/Aside'
import JobsMightLike from '../../components/views/JobsMightLike'
import SearchForJob from '../../components/views/SearchForJob'
import { StyledFindWork } from './styled'

function FindWork() {
  const navigate=useNavigate()
  useEffect(()=>{
    navigate('/home/bestMatches')
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  return (
    <StyledFindWork>
      <Container className='container'>
        <main>
          <SearchForJob/>
          <JobsMightLike/>
        </main>
        <Aside />
      </Container>
    </StyledFindWork>
  )
}

export default FindWork
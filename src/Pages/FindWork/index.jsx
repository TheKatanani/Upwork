import React from 'react'
import { Container } from '../../assets/styled-components/components'
import AppFooter from '../../components/views/AppFooter'
import Aside from '../../components/views/Aside'
import JobsMightLike from '../../components/views/JobsMightLike'
import SearchForJob from '../../components/views/SearchForJob'
import { StyledFindWork } from './styled'

function FindWork() {
  return (
    <StyledFindWork>
      <Container className='container'>
        <main>
          <SearchForJob/>
          <JobsMightLike/>
        </main>
        <Aside />
      </Container>
      <AppFooter/>
    </StyledFindWork>
  )
}

export default FindWork
import React from 'react'
import { NavLink } from 'react-router-dom'
import { Container } from '../../../assets/styled-components/components'
import { MainStyled } from '../../../Pages/Search/styled'
import SevedJob from '../SevedJob'

const SevedSearch = () => {
  return (
    <Container>

    <MainStyled>
      <header>
      <ul>
            <li>
              <NavLink to="/home/search/">search</NavLink>
            </li>
            <li>
              <NavLink to="/home/Search/seved">Saved jobs <span className="saved"></span></NavLink>
            </li>
          </ul>
        
      </header>
      <div className='content'>
        <SevedJob/>
      </div>
    </MainStyled>
    </Container>
  )
}

export default SevedSearch
import React from 'react'
import {  NavLink, Outlet } from 'react-router-dom'
import { JobsMightLikeStyled } from './styled'
const JobsMightLike = () => {
  return (
    <JobsMightLikeStyled>
      <header>
        <h2>Jobs you might like</h2>
        <nav>
          <ul>
            <li>
              <NavLink to="bestMatches">Best Matches</NavLink>
            </li>
            <li>
              <NavLink to="mostRecent">Most Recent</NavLink>
            </li>
            <li>
              <NavLink to="saved">Saved jobs <span className="saved"></span></NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </JobsMightLikeStyled>
  )
}

export default JobsMightLike
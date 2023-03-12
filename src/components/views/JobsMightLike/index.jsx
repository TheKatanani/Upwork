import React from 'react'
import {  NavLink } from 'react-router-dom'
import useFetch from '../../../hook/useFetch'
import JobCard from '../JobCard'
import Loading from '../../common/Loading'
import { JobsMightLikeStyled } from './styled'
import { mainApi } from '../../../API'
const JobsMightLike = () => {
  const { data, isLoading, error } = useFetch(`${mainApi}products`);
  return (
    <JobsMightLikeStyled>
      <header>
        <h2>Jobs you might like</h2>
        <nav>
          <ul>
            <li>
              <NavLink to="/home">Best Matches</NavLink>
            </li>
            <li>
              <NavLink to="/">Most Recent</NavLink>
            </li>
            <li>
              <NavLink to="/">Saved jobs <span className="saved"></span></NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <p>Browse jobs that match your experience to a client's hiring preferences. Ordered by most relevant.</p>
        {
          isLoading ? <Loading /> : (
            error ? <span>{error}</span> :
              data.map((el) => {
                return <JobCard key={el.id} data={el} />
              })
          )
        }
      </main>
    </JobsMightLikeStyled>
  )
}

export default JobsMightLike
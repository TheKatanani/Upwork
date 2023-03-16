import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { mainApi } from '../../../API'
import useFetch from '../../../hook/useFetch'
import Avater from '../../common/Avater'
import Loading from '../../common/Loading'
import ProfileComplete from '../../ui/ProfileComplete'
import AsideItem from './AsideItem'
import { StyledAside } from './styled'

function Aside() {
  const {data ,isLoading,error} = useFetch(`${mainApi}user/1`)
  const name = useSelector(state=>state.auth.user)
  if(isLoading){
    return <Loading/>
  }
  if(error){
    return <p>{error.messige}</p>
  }
  return (
    <StyledAside>
      <div className="avaterArea">
        <Avater/>
        <Link to="/home/profile">{name}</Link>
        <p className="jobTitle">{data.title}</p>
      </div>
      <ProfileComplete/>
      <div className="conectsNum">
        <Link to="">120 Available Connects</Link>
      </div>
      <main>
        <AsideItem title="Hours per week">
          <p>More than 30 hrs/week</p>
        </AsideItem>
        <AsideItem title="Profile Visibility">
          <p>Public</p>
        </AsideItem>
        <AsideItem title="Job Preference">
          <p>No prefernce set</p>
        </AsideItem>
      </main>
      <footer>
        <AsideItem title="My Categories "/>
        <Link to="">Web Development</Link>
      </footer>
    </StyledAside>
  )
}

export default Aside
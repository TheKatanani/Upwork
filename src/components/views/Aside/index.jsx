import React from 'react'
import { Link } from 'react-router-dom'
import Avater from '../../common/Avater'
import ProfileComplete from '../../ui/ProfileComplete'
import AsideItem from './AsideItem'
import { StyledAside } from './styled'
const mook = {
  name:'Mohammed k.',
  jobTitle:'Frontend Developer'
}
function Aside() {
  return (
    <StyledAside>
      <div className="avaterArea">
        <Avater/>
        <Link to="/profile">{mook.name}</Link>
        <p className="jobTitle">{mook.jobTitle}</p>
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
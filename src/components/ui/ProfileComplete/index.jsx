import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Progres from '../../common/Progres'
const StyledComplete =styled.div`
  background-color: ${(props)=>props.theme.palette.ColorApp.up_green_light};
  padding: 20px 30px;
  a{
    text-decoration: none;
    display: block;
    padding:10px 0;
  }
`
function ProfileComplete() {
  return (
    <StyledComplete className="profileCompleteness">
      <Link to=''>Profile Completeness</Link>
      <Progres width={80} />
    </StyledComplete>)
}

export default ProfileComplete
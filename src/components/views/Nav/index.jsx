import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Contracts, Help, Notification, UpNav } from '../../../assets/Icons'
import DropDownMenu from '../../ui/DropDownMenu'
import SearchBox from '../../ui/SearchBox'
import Avater from '../../common/Avater'
import AvaterDropDown from '../../common/AvaterDropDown'
import { StyledUl } from './styled'
import { findWorkDropDown } from '../../../mock'

const Nav = () => {
  const [show , setShow] = useState(false)
  return (
    <StyledUl>
        <li className='dropdown'>
          <NavLink to='/home'>Find Work <UpNav/></NavLink>
          <DropDownMenu items={findWorkDropDown}/>
        </li>
        <li className='dropdown'>
          <NavLink to="/myjobs">My jobs <UpNav/></NavLink>
          </li>
        <li className='dropdown'>
          <NavLink to="/reports">Reports <UpNav/></NavLink>
          </li>
        <li><NavLink to="/messages">Messages </NavLink></li>
        <li className="searchBox">
          <SearchBox/>
        </li>
        <li><Help/></li>
        <li><Contracts/></li>
        <li><Notification/></li>
        <li className='avater' >
          <div  onClick={()=>setShow(prev=>!prev)}>
            <Avater/>
          </div>
          {show&&<AvaterDropDown />}
        </li>
      </StyledUl>
  )
}

export default Nav
import { NavLink } from 'react-router-dom'
import { Contracts, Help, Notification, UpNav } from '../../../assets/Icons'
import Avater from '../../common/Avater'
import Logo from '../../common/Logo'
import DropDownMenu from '../../ui/DropDownMenu'
import { StyledHeader } from './styled'
import SearchBox from '../../ui/SearchBox'
import AvaterDropDown from '../../common/AvaterDropDown'
import { useState } from 'react'
const mook = [
  {path:'/home/bestMatches',text:"finde work"},
  {path:'/home/mostRecent',text:"mostRecent"},
  {path:'/home/saved',text:"saved"},
  {path:'/home/Profile',text:"Profile"},
  {path:'/home/Search',text:"Search"},
]
const Header = () => {
  const [show , setShow] = useState(false)
  return (
    <StyledHeader>
      <div className="logo">
        <Logo/>
      </div>
      <ul>
        <li className='dropdown'>
          <NavLink to='/home'>Find Work <UpNav/></NavLink>
          <DropDownMenu items={mook}/>
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
      </ul>
    </StyledHeader>
  )
}

export default Header
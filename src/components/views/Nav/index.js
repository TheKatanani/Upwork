import { NavLink } from 'react-router-dom'
import { Contracts, Help, Notification, UpNav } from '../../../assets/Icons'
import Avater from '../../common/Avater'
import Logo from '../../common/Logo'
import DropDownMenu from '../../ui/DropDownMenu'
import { StyledNav } from './styled'
import SearchBox from '../../ui/SearchBox'

const Nav = () => {
  return (
    <StyledNav>
      <div className="logo">
        <Logo/>
      </div>
      <ul>
        <li className='dropdown'>
          <NavLink to='/home'>Find Work <UpNav/></NavLink>
          <DropDownMenu items={['test','test','test','test']}/>
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
        <li><Avater/></li>
      </ul>
    </StyledNav>
  )
}

export default Nav
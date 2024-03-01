
import Logo from '../../common/Logo'
import { StyledHeader } from './styled'
import Nav from '../Nav'
import MenuMobileIcon from '../../common/MenuMobileIcon'
import { Search2 } from '../../../assets/Icons'
import MobileMenue from '../../ui/MobileMenu'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  const [show, setShow] = useState(false)
  const handleMenu =()=>{
    setShow((prev)=>(!prev))
  }
  const exitMenu =()=>{
    setShow(false)
  }
  return (
    <StyledHeader>
      <div className='menuLogoContainer'>
        <MenuMobileIcon onClick={handleMenu} onAbort={exitMenu}/>
        <MobileMenue showMenu={show}/>
        <div className="logo">
          <Logo />
        </div>
      </div>
      <Link to='/home/Search' className="searchIcon">
        <Search2/>
      </Link>
      <Nav />
      {show&&<div className="layout" onClick={()=>setShow(false)}/>}
    </StyledHeader>
  )
}

export default Header
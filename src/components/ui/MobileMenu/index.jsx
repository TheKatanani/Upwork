import React, { useState } from 'react'
import { Contracts, Help, Logout, Notification, Setings, UpNav } from '../../../assets/Icons'
import { NavLink } from 'react-router-dom'
import Avater from '../../common/Avater'
import { StyledMobileMenue } from './StyledMobileMenue'
import ActiveHandling from '../../common/ActiveHandling'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../../redux/reducers/auth'
import DropDownMenu from '../DropDownMenu'
import { findWorkDropDown } from '../../../mock'

const MobileMenue = ({showMenu}) => {
  const [show, setShow] = useState([])
  const user = useSelector(state => state.auth.user)
  const dispatch = useDispatch()
  const showHandling = (id) => {
    const currentRow = show.find((el) => el.id === id)
    console.log(currentRow)
    if (currentRow) {
      currentRow.status = !currentRow.status 
      setShow((prev)=>(prev.map(el=>el.id===currentRow.id?currentRow:el)))
    } else {
      setShow([...show, { id, status: true }])
    }
  }
  return (
    <StyledMobileMenue show={showMenu} showRow={show}>
      <div className='avater' >
        <header>
          <Avater />
          <div className="info">
            <p className="userName">{user}</p>
            <p className="jobtitle">Freelancer</p>
          </div>
        </header>
        <main>
          <ActiveHandling />
        </main>
      </div>
      <ul>
        <li className='dropdown' id='findWork' onClick={() => showHandling('findWork')}>
          <NavLink to='/home' className='findWork'>Find Work <UpNav /></NavLink>
          {
            show?.find((el) => el.id === 'findWork')?.status && (
              <DropDownMenu mobile items={findWorkDropDown} />
              )
            }
            <DropDownMenu mobile items={findWorkDropDown} />
        </li>
        <li className='dropdown' id='myJobs' onClick={() => showHandling('myJobs')}>
          <NavLink to="/myJobs">My jobs <UpNav /></NavLink>
          {/*
          // if there is a items put it here the functionality is ready
          {
            show?.find((el) => el.id === 'myJobs')?.status && (
              <DropDownMenu mobile items={findWorkDropDown} />
            )
          } */}
        </li>
        <li className='dropdown'>
          <NavLink to="/reports">Reports <UpNav /></NavLink>
        </li>
        <li><NavLink to="/messages">Messages </NavLink></li>
        <li><NavLink to='/Notification'>Notification<Notification /></NavLink></li>
        <li><NavLink to='/Contracts'>Contracts<Contracts /></NavLink></li>
        <li><NavLink to='/Help'>Help<Help /></NavLink></li>
        <li><NavLink to='/Setings'> Setings<Setings /></NavLink></li>
        <li className='logout' onClick={() => dispatch(logout())}><Logout /> Logout</li>
      </ul>
    </StyledMobileMenue>
  )
}

export default MobileMenue
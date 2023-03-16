import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Logout, Setings } from '../../../assets/Icons'
import { MainButton } from '../../../assets/styled-components/components'
import { logout } from '../../../redux/reducers/auth'
import Avater from '../Avater'
import { DropStyled } from './styled'

const AvaterDropDown = () => {
  const [active, setActive] = useState(false)
  const user = useSelector(state => state.auth.user)
  const dispatch = useDispatch()
  return (
    <DropStyled direction='right' className='dropDown'>
      <header>
        <Avater />
        <Link to="/home/Profile" className='user'>{user}</Link>
        <p>Freelancer</p>
        <div className="buttons">
          <MainButton className={active && `active`} onClick={() => setActive(true)}>Online</MainButton>
          <MainButton className={!active && `active`} onClick={() => setActive(false)}>Invisible</MainButton>
        </div>
      </header>
      <li><Setings /> Setings</li>
      <li onClick={() => dispatch(logout())}><Logout /> Logout</li>
    </DropStyled>
  )
}

export default AvaterDropDown
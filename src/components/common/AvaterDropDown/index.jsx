import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Logout, Setings } from '../../../assets/Icons'
import { logout } from '../../../redux/reducers/auth'
import Avater from '../Avater'
import { DropStyled } from './styled'
import ActiveHandling from '../ActiveHandling'

const AvaterDropDown = () => {
  const user = useSelector(state => state.auth.user)
  const dispatch = useDispatch()
  return (
    <DropStyled direction='right' className='dropDown'>
      <header>
        <Avater />
        <Link to="/home/Profile" className='user'>{user}</Link>
        <p>Freelancer</p>
        <ActiveHandling/>
      </header>
      <li><Setings /> Setings</li>
      <li onClick={() => dispatch(logout())}><Logout /> Logout</li>
    </DropStyled>
  )
}

export default AvaterDropDown
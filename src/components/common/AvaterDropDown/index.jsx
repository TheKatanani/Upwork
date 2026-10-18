import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Logout, Setings } from '../../../assets/Icons';
import { logout } from '../../../redux/reducers/auth';
import Avater from '../Avater';
import { DropStyled } from './styled';
import ActiveHandling from '../ActiveHandling';

const AvaterDropDown = () => {
  const { user, isAuthenticated } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  return (
    <DropStyled direction="right" className="dropDown">
      <header>
        <Avater />
        <Link to="/home/Profile" className="user">
          {user || 'Guest'}
        </Link>
        <p>{isAuthenticated ? 'Freelancer' : 'Guest Mode'}</p>
        <ActiveHandling />
      </header>
      {isAuthenticated ? (
        <>
          <li>
            <Setings /> Settings
          </li>
          <li onClick={() => dispatch(logout())}>
            <Logout /> Logout
          </li>
        </>
      ) : (
        <>
          <li>
            <Link to="/login" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'inherit', textDecoration: 'none' }}>
              <Logout /> Log In
            </Link>
          </li>
          <li>
            <Link to="/signUp" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'inherit', textDecoration: 'none' }}>
              <Setings /> Sign Up
            </Link>
          </li>
        </>
      )}
    </DropStyled>
  );
};

export default AvaterDropDown;
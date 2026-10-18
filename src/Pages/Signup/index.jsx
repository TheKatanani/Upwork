import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Apple, Goolge } from '../../assets/Icons';
import { AppleButton, GoogleButton } from '../../assets/styled-components/components';
import Logo from '../../components/common/Logo';
import Or from '../../components/common/Or';
import SignupForm from '../../components/views/Auth/Signup/SignupForm';
import { login, setUser } from '../../redux/reducers/auth';
import { SignupStyled } from './styled';

function Signup() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSocialLogin = (socialName) => {
    const mockToken = 'mock-social-token-' + Date.now();
    dispatch(login({ token: mockToken, name: socialName }));
    dispatch(setUser({ name: socialName }));
    navigate('/Home/bestMatches');
  };

  return (
    <>
      <SignupStyled>
        <div className="logoBox">
          <Logo />
        </div>
        <h2>Sign up to hire talent</h2>
        <AppleButton className="apple" onClick={() => handleSocialLogin('Apple User')}>
          <Apple /> Continue with Apple
        </AppleButton>
        <div className="google" onClick={() => handleSocialLogin('Google User')}>
          <Goolge />
          <GoogleButton className="google"> Continue with Google</GoogleButton>
        </div>
        <Or />
        <SignupForm />
      </SignupStyled>
    </>
  );
}

export default Signup;
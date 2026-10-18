import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { FormStyled, InputBox } from './styled';
import {
  handleInputChange,
  loading,
  error,
  showPassword,
} from '../../../../redux/reducers/login';
import { login, setUser } from '../../../../redux/reducers/auth';
import { SchemaLogin } from '../Schema';
import { Apple, Goolge, Password, ShowPassword, UnShowPassword, User } from '../../../../assets/Icons';
import Input from '../../../common/Input';
import ErrorForm from '../../../common/ErrorForm';
import { AppleButton, GoogleButton, PrimaryButton, SecondaryButton } from '../../../../assets/styled-components/components';
import Or from '../../../common/Or';

const LoginForm = () => {
  const formState = useSelector((state) => state.login);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleInputChangeFun = (event) => {
    const { id, value } = event.target;
    dispatch(handleInputChange({ id, value }));
  };

  const handleClickShowPassword = () => dispatch(showPassword());

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(loading(true));
    dispatch(error(null));
    try {
      await SchemaLogin.validate(formState, { abortEarly: false });
      
      // Standalone Login without external backend
      const userName = formState.email ? formState.email.split('@')[0] : 'Freelancer';
      const mockToken = 'mock-token-' + Date.now();
      
      dispatch(login({ token: mockToken, name: userName }));
      dispatch(setUser({ name: userName }));
      navigate('/Home/bestMatches');
    } catch (e) {
      const errors = e.inner?.reduce((acc, { path, message }) => {
        acc[path] = message;
        return acc;
      }, {});
      dispatch(error(errors));
    } finally {
      dispatch(loading(false));
    }
  };

  const handleSocialLogin = (socialName) => {
    const mockToken = 'mock-social-token-' + Date.now();
    dispatch(login({ token: mockToken, name: socialName }));
    dispatch(setUser({ name: socialName }));
    navigate('/Home/bestMatches');
  };

  const handleGuestLogin = () => {
    dispatch(login({ token: 'guest-token', name: 'Guest' }));
    dispatch(setUser({ name: 'Guest' }));
    navigate('/Home/bestMatches');
  };

  return (
    <FormStyled onSubmit={handleSubmit}>
      {formState.error?.email && <ErrorForm>{formState.error?.email}</ErrorForm>}
      <InputBox>
        <User />
        <Input
          onChange={handleInputChangeFun}
          id="email"
          type="text"
          placeholder="Email or Username (e.g. demo@upwork.com)"
          value={formState.email}
        />
      </InputBox>
      {/* *************************** */}
      {formState.error?.password && <ErrorForm>{formState.error?.password}</ErrorForm>}
      <InputBox>
        <Password />
        <div className={`logInPassword`}>
          <span className="icon" onClick={handleClickShowPassword}>
            {!formState.showPassword ? <ShowPassword /> : <UnShowPassword />}
          </span>
          <Input
            onChange={handleInputChangeFun}
            id="password"
            type={formState.showPassword ? 'text' : 'password'}
            placeholder="Password (min 6 chars)"
            value={formState.password}
          />
        </div>
      </InputBox>
      <PrimaryButton type="submit" className="email">
        {formState.isLoading ? `...Loading` : `Login with Email`}
      </PrimaryButton>

      <div style={{ marginTop: '12px', width: '100%' }}>
        <SecondaryButton
          type="button"
          onClick={handleGuestLogin}
          style={{ width: '100%', borderColor: '#108a00', color: '#108a00', fontWeight: 'bold' }}
        >
          Continue as Guest (تصفح كزائر)
        </SecondaryButton>
      </div>

      <Or />
      <div className="google" onClick={() => handleSocialLogin('Google User')}>
        <Goolge />
        <GoogleButton type="button" className="google">
          Continue with Google
        </GoogleButton>
      </div>
      <AppleButton type="button" className="apple" onClick={() => handleSocialLogin('Apple User')}>
        <Apple /> Continue with Apple
      </AppleButton>
      <Or text=" Don't have an Upwork account? " />
      <Link to="/signUp">
        <SecondaryButton className="signUp">Sign Up</SecondaryButton>
      </Link>
    </FormStyled>
  );
};

export default LoginForm;
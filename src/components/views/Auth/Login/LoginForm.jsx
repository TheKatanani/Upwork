import React from 'react'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { FormStyled, InputBox } from './styled';
import {
  handleInputChange,
  loading,
  error,
  showPassword
} from '../../../../redux/reducers/login';
import { login, setUser } from '../../../../redux/reducers/auth';
import { SchemaLogin } from '../Schema';
import axios from 'axios'; 
import { Apple, Goolge, Password, ShowPassword, UnShowPassword, User } from '../../../../assets/Icons';
import Input from '../../../common/Input';
import ErrorForm from '../../../common/ErrorForm';
import { AppleButton, GoogleButton, PrimaryButton, SecondaryButton } from '../../../../assets/styled-components/components';
import Or from '../../../common/Or';
const LoginForm = () => {
  const formState = useSelector(state => state.login);
  const dispatch = useDispatch()
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
      // const res = await axios.post(`${authApi}/users/login`, {
      //   email: formState.email,
      //   password: formState.password,
      // });
      const res = await axios.post(`https://project-perfume.000webhostapp.com/api/login`, {
        data: {
          email: "api2@gmail.com",
          password: "password"
        },
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded'
      });
      if (res.data) {
        localStorage.setItem('token', res.data.token);
        dispatch(login({ token: res.data.token }))
        dispatch(setUser({ name: res.data.name }))
      }
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
  return (
    <FormStyled onSubmit={handleSubmit}>
      {formState.error?.email && <ErrorForm>{formState.error?.email}</ErrorForm>}
      <InputBox>
        <User />
        <Input
          onChange={handleInputChangeFun}
          id="email"
          type="text"
          placeholder="Email or Username"
          value={formState.email}
        />
      </InputBox>
      {/* *************************** */}
      {formState.error?.password && <ErrorForm>{formState.error?.password}</ErrorForm>}
      <InputBox>
        <Password />
        <div className={`logInPassword`}>
          <span className='icon' onClick={handleClickShowPassword}>
            {!formState.showPassword ? <ShowPassword /> : <UnShowPassword />}
          </span>
          <Input
            onChange={handleInputChangeFun}
            id="password"
            type={formState.showPassword ? 'text' : 'password'}
            placeholder="password"
            value={formState.password}
          />
        </div>
      </InputBox>
      <PrimaryButton type='submit' className='email'>{formState.isLoading ? `...Loading` : `Login with Email`}</PrimaryButton>
      <Or />
      <div className="google">
        <Goolge />
        <GoogleButton type='button' className='google'>Continue with Google</GoogleButton>
      </div>
      <AppleButton type='button' className='apple'><Apple /> Continue with Apple</AppleButton>
      <Or text=" Don't have an Upwork account? " />
      <Link to='/signUp'> <SecondaryButton className='signUp'>Sign Up</SecondaryButton></Link>
    </FormStyled>
  )
}

export default LoginForm
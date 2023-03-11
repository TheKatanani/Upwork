import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../rtk/reducers/auth';
import { handleInputChange, loading, showPassword, error } from '../../rtk/reducers/login';
import axios from 'axios';
import {  authApi } from '../../API';
import Logo from '../../components/common/Logo';
import ErrorForm from '../../components/common/ErrorForm';
import Input from '../../components/common/Input';
import Or from '../../components/common/Or';
import Footer from '../../components/views/Footer';
import { Apple, Goolge, Password, ShowPassword, UnShowPassword, User } from '../../assets/Icons';
import { AppleButton, GoogleButton, PrimaryButton, SecondaryButton } from '../../assets/styled-components/components';
import { validationSchemaSignIn } from '../../utils/validationSchema';
import { InputBox, LoginStyled } from './styled';

function LoginFormPage() {
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
            await validationSchemaSignIn.validate(formState, { abortEarly: false });
            const res = await axios.post(`${authApi}/users/login`, {
                email: formState.email,
                password: formState.password,
            });
            if (res.data) {
                localStorage.setItem('token', res.data.token);
                dispatch(login({ token: res.data.token }))
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
        <>
            <LoginStyled>
                <div className="logoBox">
                    <Logo />
                </div>
                <h2>Log in to Upwork</h2>
                <form onSubmit={handleSubmit}>
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
                </form>
            </LoginStyled>
            <Footer>
                <p> &copy; 2015 - 2023 Upwork® Global Inc. • Privacy Policy</p>
            </Footer>
        </>
    );
}

export default LoginFormPage;
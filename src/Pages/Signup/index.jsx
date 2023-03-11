import React from 'react';
import Logo from '../../components/common/Logo';
import ErrorForm from '../../components/common/ErrorForm';
import Input from '../../components/common/Input';
import Checkbox from '../../components/common/Checkbox';
import { SignupStyled } from './styled';
import { useDispatch, useSelector } from 'react-redux';
import {  handleInputChange, showPassword,handleCheckBoxChange, error, loading } from '../../rtk/reducers/signup';
import { Apple, Goolge, ShowPassword, UnShowPassword } from '../../assets/Icons';
import Or from '../../components/common/Or';
import { AppleButton, GoogleButton, PrimaryButton } from '../../assets/styled-components/components';
import { validationSchemaRegister } from '../../utils/validationSchema';
import {  authApi } from '../../API';
import axios from 'axios';
import { login } from '../../rtk/reducers/auth';
import { Link } from 'react-router-dom';

function Signup() {
    const formState = useSelector(state => state.signup);
    const dispatch = useDispatch()
    // // // // // // // // /// // // // // // // // // /// // // // // // // // // /// 
    const handleInputChangeFunc = (event) => {
        const { id, value } = event.target;
        dispatch(handleInputChange({ id, value }));
    };
    // // // // // // // // /// // // // // // // // // /// // // // // // // // // /// 
    const handleCheckBoxChangeFunc = (e) => dispatch(handleCheckBoxChange( {id:e.target.id,checked:e.target.checked}));
    // // // // // // // // /// // // // // // // // // /// // // // // // // // // /// 
    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch(loading(true));
        dispatch(error({errors:null}));
        try {
            await validationSchemaRegister.validate(formState, { abortEarly: false });
            const res = await axios.post(`${authApi}/users/signup`, {
                name:`${formState.fname} ${formState.lname}`,
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
            dispatch(error({...{errors}}));
        } finally {
            dispatch(loading(false));
        }
    };
    // // // // // // // // /// // // // // // // // // /// // // // // // // // // /// 
    return (
        <>
            <SignupStyled>
                <div className="logoBox">
                    <Logo />
                </div>
                <h2>Sign up to hire talent</h2>
                <AppleButton className='apple'><Apple /> Continue with Apple</AppleButton>
                <div className="google">
                    <Goolge />
                    <GoogleButton className='google'> Continue with Google</GoogleButton>
                </div>
                <Or />
                <form onSubmit={handleSubmit}>
                    {/* *************************** */}
                    {formState.error?.fname && <ErrorForm>{formState.error?.fname}</ErrorForm>}
                    {formState.error?.lname && <ErrorForm>{formState.error?.lname}</ErrorForm>}
                    <div className='nameBox'>
                        <Input
                            onChange={handleInputChangeFunc}
                            id="fname"
                            type="text"
                            placeholder="First name"
                            value={formState.fname}
                        />
                        <Input
                            onChange={handleInputChangeFunc}
                            id="lname"
                            type="text"
                            placeholder="Last name"
                            value={formState.lname}
                        />
                    </div>
                    {/* *************************** */}

                    {formState.error?.email && <ErrorForm>{formState.error?.email}</ErrorForm>}
                    <Input
                        onChange={handleInputChangeFunc}
                        id="email"
                        type="email"
                        placeholder="Work email address"
                        value={formState.email}
                    />

                    {/* *************************** */}
                    {formState.error?.password && <ErrorForm>{formState.error?.password}</ErrorForm>}
                    <div className={'logInPassword'}>
                        <span className='icon' onClick={() => dispatch(showPassword())}>
                            {!formState.showPassword ? <ShowPassword /> : <UnShowPassword />}
                        </span>
                        <Input
                            onChange={handleInputChangeFunc}
                            id="password"
                            type={formState.showPassword ? 'text' : 'password'}
                            placeholder="password (8 or more chracters)"
                            value={formState.password}
                        />
                    </div>
                    {/* *************************** */}
                    <Input
                        onChange={handleInputChangeFunc}
                        id="addres"
                        type="text"
                        placeholder="addres"
                        value={formState.addres}
                    />
                    {/* *************************** */}
                    {formState.error?.agree && <ErrorForm>{formState.error?.agree}</ErrorForm>}
                    <Checkbox id="sendEmail" children="Send me emails with tips on how to find talent that fits my needs."
                        onChange={handleCheckBoxChangeFunc} />
                    <Checkbox id="agree" onChange={handleCheckBoxChangeFunc}>
                        Yes, I understand and agree to the <a href='https://www.upwork.com/legal#terms' target='_blank' rel="noreferrer">  Upwork Terms of Service </a>, including the <a href='https://www.upwork.com/legal#useragreement' target='_blanck' rel="noreferrer"> User Agreement </a>and <a href='https://www.upwork.com/legal#privacy' target='_blanck' rel="noreferrer">Privacy Policy </a> . "
                    </Checkbox>
                    <PrimaryButton className='create' type='submit'>{formState.isLoading?`...Loading`:`Create my account`}</PrimaryButton>
                    <p className='already'>Already have an account? <Link to='/login'>Log In</Link></p>
                </form>
            </SignupStyled>
        </>
    );
}

export default Signup;
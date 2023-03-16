import React from 'react';
import { Apple, Goolge } from '../../assets/Icons';
import { AppleButton, GoogleButton } from '../../assets/styled-components/components';
import Logo from '../../components/common/Logo';
import Or from '../../components/common/Or';
import SignupForm from '../../components/views/Auth/Signup/SignupForm';
import { SignupStyled } from './styled'
function Signup() {
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
                <SignupForm />
            </SignupStyled>
        </>
    );
}

export default Signup;
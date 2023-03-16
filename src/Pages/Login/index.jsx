import React from 'react';
import Logo from '../../components/common/Logo';
import LoginForm from '../../components/views/Auth/Login/LoginForm';
import Footer from '../../components/views/Footer';

import { LoginStyled } from './styled';

function LoginFormPage() {
    return (
        <>
            <LoginStyled>
                <div className="logoBox">
                    <Logo />
                </div>
                <h2>Log in to Upwork</h2>
                <LoginForm />
            </LoginStyled>
            <Footer>
                <p> &copy; 2015 - 2023 Upwork® Global Inc. • Privacy Policy</p>
            </Footer>
        </>
    );
}

export default LoginFormPage;
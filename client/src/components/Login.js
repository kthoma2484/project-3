import React from 'react';
import styled from 'react-emotion';

const LoginWrapper = styled('div')({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 30,
})

const Login = () => (
    <LoginWrapper>
        User or Create User Account
    </LoginWrapper>
)
  
export default Login
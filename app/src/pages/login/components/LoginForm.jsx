import React from 'react'
import LoginButton from '../../../components/Button/LoginButton'
import LoginFormConainer from './LoginFormContainer'

export default function LoginForm() {
    return (
        <LoginFormConainer>
            <p>TodoApp</p>
            <LoginButton onClick={() => localStorage.setItem('token', 'this is my token')}>login</LoginButton>
        </LoginFormConainer>
    )
}
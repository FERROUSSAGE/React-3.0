import React from 'react'
import styled from 'styled-components';

import logoImg from '../assets/img/logo.svg';
import userImg from '../assets/img/header/user.svg';

const NavBarStyled = styled.header`
    position: fidex;
    top: 0;
    left: 0;
    z-index: 999;
    height: 80px;
    width: 100vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    background-color: #299B01;
    color: white;
`;

const Logo = styled.div`
    display: flex;
    align-items: center;
`;

const H1 = styled.h1`
    font-size: 24px;
    margin-left: 15px;
`;

const Img = styled.img`
    width: 50px;
    height: 50px;
`;

const Button = styled.button`
    background: transparent;
    border: 0;
    outline: 0;
    display: inline-flex;
    flex-direction: column;

    img{
        height: 25px;
        margin-bottom: 5px; 
    }
`;

const NavBar = () => {
    return <NavBarStyled>
        <Logo>
            <Img src={logoImg} alt="Logo MrDonalds"/>   
            <H1>MrDonalds</H1> 
        </Logo>
        <Button>
            <Img src={userImg} alt="Icon user"/>
            Войти
        </Button>
    </NavBarStyled>
}

export default NavBar;
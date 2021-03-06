import React from 'react'
import styled from 'styled-components';

import ListItem from './ListItem'

import useFetch from '../Hooks/useFetch';

import bannerImg from '../../assets/img/Menu/banner.png';

const MenuStyled = styled.main`
    background-color: #ccc;
    margin-top: 80px;
    margin-left: 380px;
`;

const SectionMenu = styled.section`
    padding: 30px;
`;

const BannerMenu = styled.div`
    position: relative;
    height: 210px;
    width: 100%;
    background-image: url(${bannerImg});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    z-index: 1;
    &:after {
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        background-color: black;
        opacity: 20%;
        z-index: -1;
    }
`;

const Preloader = styled.div`
    width: 120px;
    height: 120px;
    margin: 0 auto;
    background: transparent url('//i.gifer.com/Xqg8.gif') no-repeat center center;
`;

const Menu = ({ setOpenItem }) => {

    const result = useFetch(),
        DBMenu = result.response;
        
    return <MenuStyled>
        <BannerMenu/>
        { DBMenu ?
        <>
            <SectionMenu>
            <h2>Бургеры</h2>
            <ListItem 
                itemList={DBMenu.burger}
                setOpenItem={setOpenItem}/>
            </SectionMenu>
            <SectionMenu>
                <h2>Закуски / Напитки</h2>
                <ListItem 
                    itemList={DBMenu.other}
                    setOpenItem={setOpenItem}/>
            </SectionMenu>
        </> : result.error ? 
        <div>Не получается загрузить меню!:(</div> :
        <Preloader/>}
    </MenuStyled>
}

export default Menu;
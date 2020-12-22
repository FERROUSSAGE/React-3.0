import React from 'react';
import styled from 'styled-components';

import CountItem from "./CountItem";
import useCount from "../Hooks/useCount";

import { rubString, TotalPriceItems } from "../../assets/js/functions";

const Overlay = styled.div`
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center; 
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    
    background-color: rgba(0, 0, 0, .5);
    z-index: 999;
`;

const Modal = styled.div`
    background-color: white;
    width: 600px;
    height: 600px;
    position: relative;
`;

const Banner = styled.div`
    width: 100%;
    height: 200px;
    background-image: ${({ img }) => `url('img${img}')`};
    background-size: cover;
    background-position: center;
    margin-bottom: 20px;
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 50px;
    
    div {
        display: flex;
        justify-content: space-between;
    }
    
`;

const Button = styled.button`
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0);
    bottom: 0;
    width: 250px;
    height: 65px;
    padding: 20px 70px;
    margin-bottom: 40px;
    color: white;
    background-color: #299B01;
    border: 0;
    outline: 0;
    transition: opacity .3s ease;

    &:hover {
        opacity: .8;
    }

    &:active {
        opacity: .5
    }
`;

const TotalPriceItem = styled.div`
    display: flex;
    justify-content: space-between;
`;

const ModalItem = ({ openItem, setOpenItem, orders, setOrders }) => {

    const counter = useCount();

    const closeModal = e => {
        const target = e.target;
        if(target.matches('#overlay'))
            setOpenItem(null);
    }

    const order = { ...openItem, count: counter.count};

    const addToOrder = () => {
        setOrders([...orders, order]);
        setOpenItem(null);
    };

    return <Overlay id="overlay" onClick={closeModal}>
        <Modal>
            <Banner img={openItem.img}></Banner>
            <Content>
                <div>
                    <h3>{openItem.name}</h3>
                    <h3>{openItem.price.toLocaleString('ru-RU', {style: 'currency', currency: 'RUB'})}</h3>
                </div>
                <CountItem {...counter}/>
                <TotalPriceItem>
                    <span>Цена: </span>
                    <span>{ rubString(TotalPriceItems(order))}</span>
                </TotalPriceItem>
            </Content>
            <Button onClick={addToOrder}>Добавить</Button>
        </Modal>
    </Overlay>
};

export default ModalItem;
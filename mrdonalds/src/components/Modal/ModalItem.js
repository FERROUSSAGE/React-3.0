import React from 'react';
import styled from 'styled-components';

import CountItem from "./CountItem";
import Toppings from './Toppings';
import Choices from './Choices'

import useCount from "../Hooks/useCount";
import useToppings from '../Hooks/useTopping';
import useChoices from '../Hooks/useChoices';

import { Context, ContextItem } from '../Context/context';

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

    &:disabled {
        background: red;
    }
`;

const TotalPriceItem = styled.div`
    display: flex;
    justify-content: space-between;
`;

const ModalItem = () => {

    const { openItem: { openItem, setOpenItem }, orders: {orders, setOrders} } = React.useContext(Context);

    const counter = useCount(openItem.count);
    const toppings = useToppings(openItem);
    const choices = useChoices();
    const isEdit = openItem.index > -1;

    const closeModal = e => {
        const target = e.target;
        if(target.matches('#overlay'))
            setOpenItem(null);
    }

    const order = { 
        ...openItem,
        count: counter.count, 
        topping: toppings.toppings,
        choice: choices.choice
    };

    const addToOrder = () => {
        setOrders([...orders, order]);
        setOpenItem(null);
    };

    const editOrder = () => {
        const newOrders = [...orders];
        newOrders[openItem.index] = order;
        setOrders(newOrders);
        setOpenItem(null);
    };

    return <ContextItem.Provider value={{counter, toppings, choices, openItem:openItem}}>
        <Overlay id="overlay" onClick={closeModal}>
            <Modal>
                <Banner img={openItem.img}></Banner>
                <Content>
                    <div>
                        <h3>{openItem.name}</h3>
                        <h3>{openItem.price.toLocaleString('ru-RU', {style: 'currency', currency: 'RUB'})}</h3>
                    </div>
                    <CountItem />
                    {openItem.toppings ? <Toppings /> : ''}
                    {openItem.choices ? <Choices /> : ''}
                    <TotalPriceItem>
                        <span>Цена: </span>
                        <span>{ rubString(TotalPriceItems(order))}</span>
                    </TotalPriceItem>
                </Content>
                <Button 
                    onClick={isEdit ? editOrder : addToOrder}
                    disabled={order.choices && !choices.choice}>{isEdit ? "Редактировать" : "Добавить"}</Button>
            </Modal>
        </Overlay>
    </ContextItem.Provider>
};

export default ModalItem;
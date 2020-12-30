import React from 'react';
import styled from 'styled-components';

import OrderListItem from "./OrderListItem";
import { rubString, TotalPriceItems } from "../../assets/js/functions";

const OrderStyled = styled.section`
    position: fixed;
    display: flex;
    flex-direction: column;
    top: 80px;
    left: 0;
    background: white;
    width: 380px;
    height: calc(100% - 80px);
    box-shadow: 3px 4px 5px rgba(0, 0, 0, .25);
    padding: 20px;
`;

const OrderTitle = styled.h2`
    text-align: center;
    margin-bottom: 30px;
`;

const OrderContent = styled.div`
    flex-grow: 1;
`;

const OrderList = styled.ul`
    
`;

const Total = styled.div`
    display: flex;
    margin: 10px 0 30px 0;
    & span:first-child {
        flex-grow: 1;
    }
`;

const TotalPrice = styled.span`
    text-align: right;
    min-width: 65px;
    margin-left: 20px;
`;

const Button = styled.button`
    transform: translateX(18%);
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

const EmptyList = styled.p`
    text-align: center;
`;

const Order = ({ orders, setOrders, setOpenItem }) => {

    const total = orders && orders.reduce((result, order) => TotalPriceItems(order) + result, 0);
    
    const totalCounter = orders && orders.reduce((result, order) => order.count + result, 0);
    
    const deleteItem = index => {
        const newOrders = [...orders];
        newOrders.splice(index, 1);
        setOrders(newOrders);
    }

    return <OrderStyled>
        <OrderTitle>ВАШ ЗАКАЗ</OrderTitle>
        <OrderContent>
            { orders && orders.length ?  <OrderList>
                { orders.map((order, i) => <OrderListItem key={i} order={order} index={i} setOpenItem={setOpenItem} deleteItem={deleteItem}/>) }
            </OrderList> :
                <EmptyList>Список заказов пуст!</EmptyList> }
        </OrderContent>
        <Total>
            <span>Итого</span>
            <span>{totalCounter}</span>
            <TotalPrice>{ rubString(total) }</TotalPrice>
        </Total>
        <Button>Оформить</Button>
    </OrderStyled>
};

export default Order;
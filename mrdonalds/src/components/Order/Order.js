import React from 'react';
import styled from 'styled-components';

import OrderListItem from "./OrderListItem";
import { rubString, TotalPriceItems } from "../../assets/js/functions";
import { OrderTitle, TotalPrice, Total, Button } from '../Styled/OrderStyle';
import { Context } from '../Context/context'

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

const OrderContent = styled.div`
    flex-grow: 1;
`;

const EmptyList = styled.p`
    text-align: center;
    margin-top: 50%;
    font-size: 32px;
`;

const Order = () => {

    const { orders: { orders, setOrders }, 
        openItem: { setOpenItem }, 
        auth: { authentication, logIn }, 
        orderConfirm: { setOpenOrderConfirm } } = React.useContext(Context);

    const total = orders && orders.reduce((result, order) => TotalPriceItems(order) + result, 0);
    
    const totalCounter = orders && orders.reduce((result, order) => order.count + result, 0);
    
    const deleteItem = index => {
        const newOrders = [...orders];
        newOrders.splice(index, 1);
        setOrders(newOrders);
    }

    const orderConfirm = () => authentication ? orders.length > 0 ? setOpenOrderConfirm(true) : alert('Для начала выберите товар:)') : logIn();

    return <OrderStyled>
        <OrderTitle>ВАШ ЗАКАЗ</OrderTitle>
        <OrderContent>
            { orders && orders.length ?  <div>
                { orders.map((order, i) => <OrderListItem key={i} order={order} index={i} setOpenItem={setOpenItem} deleteItem={deleteItem}/>) }
            </div> :
                <EmptyList>Список заказов пуст!</EmptyList> }
        </OrderContent>
        { orders.length > 0 &&
            <>
            <Total>
                <span>Итого</span>
                <span>{totalCounter}</span>
                <TotalPrice>{ rubString(total) }</TotalPrice>
            </Total>
            <Button onClick={orderConfirm}>Оформить</Button>
            </> }
    </OrderStyled>
};

export default Order;
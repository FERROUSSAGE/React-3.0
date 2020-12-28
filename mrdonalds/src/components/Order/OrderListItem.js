import React from 'react';
import styled from 'styled-components';

import trashImage from '../../assets/img/order/trash.svg';
import { rubString, TotalPriceItems } from "../../assets/js/functions";

const OrderItemStyled = styled.li`
    display: flex;
    margin: 15px 0;
`;

const ItemName = styled.span`
   flex-grow: 1;
    
`;

const ItemPrice = styled.span`
    margin-left: 20px;
    margin-right: 10px;
    min-width: 65px;
    text-align: right;
`;

const TrashButton = styled.button`
    width: 24px;
    height: 24px;
    border: 0;
    outline: 0;
    background: transparent;
    background-image: url(${trashImage});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 150px;
`;

const ToppingList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    max-width: 100%;
`;

const ToppingItem = styled.li`
    font-size: 12px;
    margin: 0 2px;
`;

const OrderCount = styled.span`
    margin-left: 10px;
`;

const OrderListItem = ({ order }) => {

    return <OrderItemStyled>
        <Wrapper>
            <ItemName>{order.name}</ItemName>
            {order.topping && <ToppingList>{order.topping.map((item, i) => (
                item.checked && <ToppingItem key={i}>{item.name}</ToppingItem>
            ))}</ToppingList>}
        </Wrapper>
        <OrderCount>{order.count}</OrderCount>
        <ItemPrice>{ rubString(TotalPriceItems(order)) }</ItemPrice>
        <TrashButton/>
    </OrderItemStyled>
};

export default OrderListItem;

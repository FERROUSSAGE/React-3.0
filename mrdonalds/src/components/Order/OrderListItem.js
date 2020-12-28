import React from 'react';
import styled from 'styled-components';

import trashImage from '../../assets/img/order/trash.svg';
import { rubString, TotalPriceItems } from "../../assets/js/functions";

const OrderItemStyled = styled.li`
    display: flex;
    margin: 15px 0;
    flex-wrap: wrap;
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

const Toppings = styled.div`
    color: #9a9a9a;
    font-size: 12px;
`;

const OrderListItem = ({ order, index, deleteItem }) => {

    const toppingString = order.topping && order.topping.filter(item => item.checked)
        .map(item => item.name).join(', ');

    return <OrderItemStyled>
        <ItemName>{order.name}</ItemName>
        <span>{order.count}</span>
        <ItemPrice>{ rubString(TotalPriceItems(order)) }</ItemPrice>
        <TrashButton onClick={() => deleteItem(index)}/>
        <Toppings>{toppingString}</Toppings>
    </OrderItemStyled>
};

export default OrderListItem;

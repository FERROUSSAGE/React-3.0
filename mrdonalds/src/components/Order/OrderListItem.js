import React from 'react';
import styled from 'styled-components';

import trashImage from '../../assets/img/order/trash.svg';

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

const OrderListItem = ({ order }) => {
    return <OrderItemStyled>
        <ItemName>{order.name}</ItemName>
        <span>2</span>
        <ItemPrice>{order.price.toLocaleString('ru-RU',
            { style: 'currency', currency: 'RUB' })}</ItemPrice>
        <TrashButton/>
    </OrderItemStyled>
};

export default OrderListItem;
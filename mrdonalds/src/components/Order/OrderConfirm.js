import React from 'react'
import styled from 'styled-components';

import { rubString, TotalPriceItems, projection } from '../../assets/js/functions';
import { Overlay, OrderTitle, TotalPrice, Total, Button } from '../Styled/OrderStyle';

import { Context } from '../Context/context';



const Modal = styled.div`
    background: white;
    width: 320px;
    padding: 10px;
    position: relative;
`;

const Text = styled.h3`
    text-align: center;
    margin-bottom: 30px;
`;

const rulesData = {
    name: ['name'],
    price: ['price'],
    count: ['count'],
    topping: ['topping', item => item.filter(obj => obj.checked).map(obj => obj.name), arr => arr.length ? arr : ""],
    choice: ['choice', item => item ? item : ""]
};



const OrderConfirm = () => {

    const { orders: { orders, setOrders }, auth: { authentication }, orderConfirm: { setOpenOrderConfirm }, database } = React.useContext(Context);

    const total = orders && orders.reduce((result, order) => TotalPriceItems(order) + result, 0);
    const sendOrder = (target) => {
        if(orders.length === 0){
            setOpenOrderConfirm(false);
            return;
        }
        const newOrder = orders.map(projection(rulesData));
        database.ref('orders').push().set({
            name: authentication.displayName,
            email: authentication.email,
            totalPrice: total,
            order: newOrder
        });
    
        setOrders([]);
        setTimeout(() => setOpenOrderConfirm(false), 5000);
    }
    
    return <Overlay>
        <Modal>
            <OrderTitle>{authentication.displayName}</OrderTitle>
            <Text>{orders.length > 0 ? "Осталось только подтвердить Ваш заказ!" : "Спасибо за Ваш заказ!"}</Text>
            {orders.length > 0 && <Total>
                <span>Итого:</span>
                <TotalPrice>{rubString(total)}</TotalPrice>
            </Total>}
            <Button onClick={(e) => sendOrder(e.target)}>{orders.length > 0 ? "Подтвердить" : 'Спасибо!'}</Button>
        </Modal>
    </Overlay>
};

export default OrderConfirm;
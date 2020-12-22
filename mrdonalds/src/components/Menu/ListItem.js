import React from 'react'
import styled from 'styled-components';

import { rubString } from "../../assets/js/functions";

const List = styled.ul`
    display: flex;
    justify-content: space-arround;
    flex-wrap: wrap;
`;

const Item = styled.li`
    position: relative;
    width: 400px;
    height: 155px;
    background-image: ${({ img }) => `url('img${img}')`};
    background-position: center;
    background-size: cover;
    margin: 15px;
    padding: 15px;
    color: white;
    z-index: 1;

    &:after {
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        background-color: black;
        opacity: 30%;
        z-index: -1;
    }

    &:hover {
        cursor: pointer;
        box-shadow: inset 0 0 100px 10px black;
        &:after {
            opacity: 0;
        }
    }
`;

const ListItem = ({ itemList, setOpenItem }) => {
    return <List>
        {itemList.map(item => {
            return <Item key={item.id} img={item.img} onClick={() => setOpenItem(item)}>
                <p>{item.name}</p>
                <p>{ rubString(item.price) }</p>
            </Item>
        })}
    </List>
}

export default ListItem;
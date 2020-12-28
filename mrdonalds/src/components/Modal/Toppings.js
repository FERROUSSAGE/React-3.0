import React from 'react'
import styled from 'styled-components';

const ToppingWrap = styled.div`
    display: flex;
    column-gap: 33%;
    flex-wrap: wrap;
`;

const ToppingLabel = styled.label`
    cursor: pointer;
    display: inline-block;
`;

const ToppingCheckbox = styled.input`
    cursor: pointer;
    margin-right: 5px;
`;

const Toppings = ({ toppings, checkToppings }) => {
    return <>
        <h3>Добавки:</h3>
        <ToppingWrap>
            {toppings && toppings.map((item, i) => {
                return <ToppingLabel key={i}>
                    <ToppingCheckbox 
                        type="checkbox"
                        checked={item.checked}
                        onChange={() => checkToppings(i)}/>
                    {item.name}
                </ToppingLabel>
            })}
        </ToppingWrap>
    </>
};

export default Toppings;
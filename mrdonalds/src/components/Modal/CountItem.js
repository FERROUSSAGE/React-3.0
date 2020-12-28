import React from 'react';
import styled from 'styled-components';

const CountWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const CountInput = styled.input`
    width: 70px;
    font-size: 20px;
    margin: 0 10px 0 10px;
    margin-right: 5px;
`;

const ButtonCount = styled.button`
    background-color: transparent;
    border: 0;
    outline: 0;
    color: black;
    font-size: 24px;
`;

const CountItem = ({ count, setCount, onChange }) => {

    return <CountWrapper>
        <span>Количество</span>
        <div>
            <ButtonCount
                disabled={count <= 1}
                onClick={() => setCount(count - 1)}>-</ButtonCount>
            <CountInput
                type='number'
                min='1'
                max='100'
                value={count <= 1 ? 1 : count >= 100 ? 100 : count} onChange={onChange}></CountInput>
            <ButtonCount
                style={{marginRight: "-7px"}}
                onClick={() => setCount(count + 1)}>+</ButtonCount>
        </div>
    </CountWrapper>
};

export default CountItem;
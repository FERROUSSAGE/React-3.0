import styled from 'styled-components';

const Wrap = styled.div`
    display: flex;
    column-gap: 33%;
    flex-wrap: wrap;
`;

const Label = styled.label`
    cursor: pointer;
    display: inline-block;
`;

const Input = styled.input`
    cursor: pointer;
    margin-right: 5px;
`;

export { Wrap, Label, Input };
import React from 'react'

import { Wrap, Label, Input } from '../Styled/Choice&Topping'

const Toppings = ({ toppings, checkToppings }) => {
    return <>
        <h3>Добавки:</h3>
        <Wrap>
            {toppings && toppings.map((item, i) => {
                return <Label key={i}>
                    <Input 
                        type="checkbox"
                        checked={item.checked}
                        onChange={() => checkToppings(i)}/>
                    {item.name}
                </Label>
            })}
        </Wrap>
    </>
};

export default Toppings;
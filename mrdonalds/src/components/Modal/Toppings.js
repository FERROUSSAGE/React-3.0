import React from 'react'
import { ContextItem } from '../Context/context';

import { Wrap, Label, Input } from '../Styled/Choice&Topping'

const Toppings = () => {

    const { toppings: { toppings, checkToppings } } = React.useContext(ContextItem);

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
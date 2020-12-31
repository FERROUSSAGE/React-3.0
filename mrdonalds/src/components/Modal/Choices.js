import React from 'react'
import { ContextItem } from '../Context/context';

import { Wrap, Label, Input } from '../Styled/Choice&Topping'

const Choices = () => {

    const { choices: {changeChoices, choice}, openItem } = React.useContext(ContextItem);

    return <>
        <h3>Выбирайте: </h3>
        <Wrap>
            {openItem.choices && openItem.choices.map((item, i) => {
                return <Label key={i}>
                    <Input 
                        type="radio"
                        name="choices"
                        checked={choice === item}
                        value={item}
                        onChange={changeChoices}/>
                    {item}
                </Label>
            })}
        </Wrap>
    </>
};

export default Choices;
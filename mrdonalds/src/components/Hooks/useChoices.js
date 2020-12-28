import { useState } from 'react'

const useChoices = () => {

    const [choice, setChoice] = useState();

    const changeChoices = (e) => setChoice(e.target.value);

    return { choice, changeChoices };
};

export default useChoices;
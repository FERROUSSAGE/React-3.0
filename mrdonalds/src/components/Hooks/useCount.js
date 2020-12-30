import { useState } from 'react';

const useCount = (cnt = 1) => {
    const [count, setCount] = useState(cnt),
        onChange = (e) => setCount(e.target.value);

    return { count, setCount, onChange };
};

export default useCount;

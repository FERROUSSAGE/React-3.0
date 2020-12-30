import React, { useEffect } from 'react'

const useFetch = () => {
    const [response, setResponse] = React.useState(null);
    const [error, setError] = React.useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const json = await fetch('DB.json');
                const res = await json.json();
                setResponse(res);
            } catch (error) {
                setError(error);
            }
        }
        fetchData();
    }, []);

    return { response, error };
};

export default useFetch;
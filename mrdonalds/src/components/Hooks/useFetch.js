import React from 'react'

const useFetch = (database) => {
    const [data, setData] = React.useState(null);
    React.useEffect(() => {
        const refDB = database.ref('goods');
        refDB.on('value', snapshot => {
            setData(snapshot.val());
        })
    }, [database]);

    return data;
};

export default useFetch;
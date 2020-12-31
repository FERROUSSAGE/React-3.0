import React from 'react'

const useOrderConfirm = () => {

    const [openOrderConfirm, setOpenOrderConfirm] = React.useState(false);
    return { openOrderConfirm, setOpenOrderConfirm };
};

export default useOrderConfirm;
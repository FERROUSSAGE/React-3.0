import React from 'react'

const useTitle = (openItem) => 
    React.useEffect(() => document.title = openItem ? openItem.name : 'MrDonalds', [openItem]);

export default useTitle;
import { useState } from 'react';

const useOrders = () => {
  const [orders, setOrders] = useState([]);
  return { orders, setOrders };
};

export { useOrders };
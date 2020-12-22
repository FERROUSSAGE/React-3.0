
const rubString = (string) => {
  return string.toLocaleString('ru-RU',
      {style: 'currency', currency: 'RUB'});
};

const TotalPriceItems = (order) => order.price * order.count;

export { rubString, TotalPriceItems };
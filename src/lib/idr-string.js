const idrFormatter = new Intl.NumberFormat('id', {
  style: 'currency',
  currency: 'IDR',
});

const formatToIdr = (num) => {
  return idrFormatter.format(num);
};

export default formatToIdr;
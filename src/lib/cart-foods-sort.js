const cartFoodsSort = (cartFoods) => {
  return [...cartFoods].sort((a, b) => {
    if (a.checked && !b.checked) {
      return -1;
    }
    if (!a.checked && b.checked) {
      return 1;
    }

    return 0;
  });
};

export default cartFoodsSort;
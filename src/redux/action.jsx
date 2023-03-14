export const addToCart = (payload) => {
  return {
    type: "addToCart",
    payload,
  };
};

export const removeFromCart = (payload) => {
  return {
    type: "removeFromCart",
    payload,
  };
};

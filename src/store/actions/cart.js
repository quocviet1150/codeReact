export const AddToCart = (products) => {
  return {
    type: "ADD_TO_CART",
    payload: products,
  };
};

export const deleteCart = (id) => {
  return {
    type: "DELETE_CART",
    payload: id,
  };
};

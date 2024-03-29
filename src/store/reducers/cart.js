const initState = {
  products: localStorage.getItem("newItem") ? localStorage.getItem("newItem") : []
}

const cartReducer = (state = initState, { payload, type }) => {
  switch (type) {
    case "ADD_TO_CART":
      state.products.push(payload)
      localStorage.setItem("newItem", JSON.stringify(state.products))
      return { ...state }
    case "DELETE_CART":
      state.products = deleteCart(state.products, payload)
      localStorage.setItem("newItem", JSON.stringify(state.products))
      return { ...state }
    default:
      return state;
  }
};

const deleteCart = (products, cartId) => {
  console.log(products.filter(p => p.cartId != cartId));
  console.log(cartId);
  console.log(products);
  return products.filter(p => p.cartId != cartId);
};

export default cartReducer;

const initState = {
  productSearch: [],
  products: localStorage.getItem("newItem") ? localStorage.getItem("newItem") : [],
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
    case "SEARCH_CART":
      state.productSearch = searchCart(state.products, payload)
      return { ...state }
    case "SEARCH_CART_START":
        state.productSearch =[]
        return {...state} 
    default:
      return state;
  }
};

const deleteCart = (products, cartId) => {
  return products.filter(p => p.cartId != cartId);
};

const searchCart = (products, name) => {
  console.log(product => product.name.toLowerCase().includes(name.toLowerCase()));
  return products.filter(product => product.name.toLowerCase().includes(name.toLowerCase()));
};

export default cartReducer;

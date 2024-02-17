const initialState = {
    cart:  [],
  };

  const cartReducer = (state = initialState, action) => {
    switch (action.type) {
      case "ADD_TO_CART":
        localStorage.setItem('cart', JSON.stringify([...state.cart, action.payload]));
        return { ...state, cart: [...state.cart, action.payload] };
      case "REMOVE_FROM_CART":
        const updatedCart = state.cart.filter(item => item.id !== action.payload);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        return { ...state, cart: updatedCart };
      default:
        return state;
    }
  };
  
  export default cartReducer;
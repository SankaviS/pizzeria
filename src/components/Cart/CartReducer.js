import { ShowHide, Add, Remove } from "./Types";
const CartReducer = (state, action) => {
  switch (action.type) {
    case ShowHide: {
      return {
        ...state,
        showCart: !state.showCart,
      };
    }
    case Add: {
      return {
        ...state,
        cartitems: [...state.cartItems, action.payload],
      };
    }
    case Remove: {
      return {
        ...state,
        cartitems: [
          ...state.cartItems.filter((item) => item.id !== action.payload),
        ],
      };
    }
    default:
      return state;
  }
};
export default CartReducer;

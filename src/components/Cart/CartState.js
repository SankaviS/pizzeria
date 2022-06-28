import { useReducer } from "react";
import CartContext from "./CartContext";
import { ShowHide, Add, Remove } from "./Types";
import CartReducer from "./CartReducer";
const CartState = ({ children }) => {
  const initialState = {
    showCart: false,
    cartItems: [],
  };

  const [state, dispatch] = useReducer(CartReducer, initialState);

  const addtoCart = (item) => {
    dispatch({ type: Add, payload: item });
  };

  const showHideCart = () => {
    dispatch({ type: ShowHide });
  };

  const removeCart = (id) => {
    dispatch({ type: Remove, payload: id });
  };

  return (
    <CartContext.Provider
      value={{
        showCart: state.showCart,
        cartItems: state.cartItems,
        addtoCart,
        showHideCart,
        removeCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
export default CartState;

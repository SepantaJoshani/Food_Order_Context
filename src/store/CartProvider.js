import { useReducer } from "react";
import CartContext from "./cart-context";

const initialState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      const updatedTotalAmount =
        state.totalAmount + action.item.price * action.item.amount;

      const exisitngItemIndex = state.items.findIndex(
        (item) => item.id === action.item.id
      );
      const exsitingItem = state.items[exisitngItemIndex];
      let updatedItems;
      if (exsitingItem) {
        const updatedItem = {
          ...exsitingItem,
          amount: exsitingItem.amount + action.item.amount,
        };
        updatedItems = [...state.items];
        updatedItems[exisitngItemIndex] = updatedItem;
      } else {
        updatedItems = state.items.concat(action.item);
      }

      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      };
    default:
      return initialState;
  }
};

const CartProvider = (props) => {
  const [cartState, dispatch] = useReducer(cartReducer, initialState);

  const addItemHandler = (item) => {
    dispatch({ type: "ADD", item: item });
  };
  const removeItemHandler = (id) => {
    dispatch({ type: "REMOVE", id: id });
  };

  const cartcontext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };

  return (
    <CartContext.Provider value={cartcontext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;

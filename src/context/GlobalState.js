import React, { createContext, useReducer } from "react";

const GlobalState = createContext({
  items: [], // Rename to match the reducer state
  addItem: () => {},
  removeItem: () => {},
  clearCart: () => {},
});

function AppReducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM": {
      const existingCartItemIndex = state.items.findIndex(
        (item) => item.id === action.item.id
      );

      let updatedItems = [...state.items];

      if (existingCartItemIndex > -1) {
        // If the item already exists, increment its quantity
        const existingItem = updatedItems[existingCartItemIndex];
        updatedItems[existingCartItemIndex] = {
          ...existingItem,
          quantity: (existingItem.quantity || 1) + action.item.quantity, 
        };
      } else {
        // Add a new item with an initial quantity
        updatedItems.push({ ...action.item, quantity: action.item.quantity || 1 });
      }

      return { ...state, items: updatedItems };
    }

    case "DELETE_ITEM": {
      const updatedItems = state.items.filter((item) => item.id !== action.id);
      return { ...state, items: updatedItems };
    }

    case "REMOVE_ITEM": {
      const existingCartItemIndex = state.items.findIndex(
        (item ) => item.id === action.id
      );

      let updatedItems = [...state.items];

      if (existingCartItemIndex > -1) {
        const existingItem = updatedItems[existingCartItemIndex];
        if (existingItem.quantity > 1) {
          // Decrease the quantity
          updatedItems[existingCartItemIndex] = {
            ...existingItem,
            quantity: existingItem.quantity - 1,
          };
        } else {
          // Remove the item if quantity becomes zero
          updatedItems.splice(existingCartItemIndex, 1);
        }
      }

      return { ...state, items: updatedItems };
    }

    

    case "CLEAR_CART": {
      return { ...state, items: [] };
    }

    default:
      return state; // Default case for unknown actions
  }
}



export function GlobalStateProvider({ children }) {
  const [state, dispatch] = useReducer(AppReducer, { items: [] });

  const addItem = (item) => dispatch({ type: "ADD_ITEM", item });
  const removeItem = (id) => dispatch({ type: "REMOVE_ITEM", id });
  const deleteItem = (id) => dispatch({ type: "DELETE_ITEM", id });
  const clearCart = () => dispatch({ type: "CLEAR_CART" });

  return (
    <GlobalState.Provider value={{ ...state, addItem, removeItem, deleteItem, clearCart }}>
      {children}
    </GlobalState.Provider>
  );
}

export default GlobalState;

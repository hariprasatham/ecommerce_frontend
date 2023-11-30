import { cartItemsProps } from "@/lib/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [] as cartItemsProps[],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<cartItemsProps>) => {
      const existingItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        state.cartItems = state.cartItems.map((item) => {
          if (item.id === existingItem.id) {
            return {
              ...item,
              quantity: item.quantity + 1,
            };
          } else {
            return item;
          }
        });
      } else {
        state.cartItems.push(action.payload);
      }
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
    },
    clearCart: (state) => {
      state.cartItems = [];
    },
    incrementQuantity: (state, action: PayloadAction<number>) => {
      state.cartItems = state.cartItems.map((item) => {
        if (item.id === action.payload) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
    },
    decrementQuantity: (state, action: PayloadAction<number>) => {
      state.cartItems = state.cartItems.map((item) => {
        if (item.id === action.payload) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      });
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  clearCart,
  incrementQuantity,
  decrementQuantity,
} = cartSlice.actions;
export default cartSlice.reducer;

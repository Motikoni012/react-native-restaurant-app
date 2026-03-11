import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state: any, action) => {
      const item = action.payload;

      const existingItem = state.items.find(
        (i: any) => i.id === item.id
      );

      if (existingItem) {
        existingItem.quantity += item.quantity;
      } else {
        state.items.push({
          ...item,
          quantity: item.quantity,
        });
      }
    },

    removeFromCart: (state: any, action) => {
      state.items = state.items.filter(
        (item: any) => item.id !== action.payload
      );
    },

    clearCart: (state: any) => {
      state.items = [];
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
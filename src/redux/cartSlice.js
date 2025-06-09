import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],
  totalQuantity: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existing = state.cartItems.find(p => p.id === item.id);
      if (!existing) {
        state.cartItems.push({ ...item, quantity: 1 });
        state.totalQuantity++;
        state.totalPrice += item.price;
      }
    },
    increment: (state, action) => {
      const item = state.cartItems.find(p => p.id === action.payload);
      if (item) {
        item.quantity++;
        state.totalQuantity++;
        state.totalPrice += item.price;
      }
    },
    decrement: (state, action) => {
      const item = state.cartItems.find(p => p.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity--;
        state.totalQuantity--;
        state.totalPrice -= item.price;
      }
    },
    remove: (state, action) => {
      const index = state.cartItems.findIndex(p => p.id === action.payload);
      if (index !== -1) {
        const item = state.cartItems[index];
        state.totalQuantity -= item.quantity;
        state.totalPrice -= item.quantity * item.price;
        state.cartItems.splice(index, 1);
      }
    },
  },
});

export const { addToCart, increment, decrement, remove } = cartSlice.actions;
export default cartSlice.reducer;
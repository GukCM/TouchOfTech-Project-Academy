// redux/slices/cartSlice.js
import { createSlice } from '@reduxjs/toolkit'
import { CartState, Product } from '../../types'

const initialState: CartState = {
  items: [],
  totalItems: 0,
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, {payload}: {payload:Product}) => {
      if (state.items.length === 0) {
        state.items = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart') as string) : state.items;
      }

      const findProductIndex = state.items.findIndex((product:Product) => product.item_id === payload.item_id);

      if (findProductIndex < 0) {
        state.items.push({...payload, quantity: 1});
      } else {
        state.items[findProductIndex] = {...state.items[findProductIndex], quantity: state.items[findProductIndex].quantity + 1};
      }

      localStorage.setItem('cart', JSON.stringify(state.items));
    },
    decreaseToCart: (state, {payload}) => {
      if (state.items.length === 0) {
        state.items = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart') as string) : state.items;
      }

      const findProductIndex = state.items.findIndex((product:Product) => product.item_id === payload);

      if (findProductIndex !== -1) {
        if (state.items[findProductIndex].quantity === 1) {
          state.items.splice(findProductIndex, 1);
        } else {
          state.items[findProductIndex] = {...state.items[findProductIndex], quantity: state.items[findProductIndex].quantity - 1};
        }
      }

      localStorage.setItem('cart', JSON.stringify(state.items));
    },
    clearCart: (state) => {
      state.items = [];
      localStorage.removeItem('cart');
    }
  }
})

export const { addToCart, decreaseToCart, clearCart } = cartSlice.actions

export default cartSlice.reducer

import { createSlice } from '@reduxjs/toolkit'
import { CartState, Product } from '../../types'

const initialState: CartState = {
  items: [],
  totalItems: 0,
}

// Los reduicers funcionan como los useReducer de React, pero en lugar de usar un switch case, se usa un objeto con funciones
export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, {payload}: {payload:Product}) => {
      // state es el estado actual del slice
      // action (el segundo argumento) es el payload que se pasa al reducer, en este caso, el producto que se quiere agregar al carrito

      if (state.items.length === 0) {
        state.items = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart') as string) : state.items;
      }

      const findProductIndex = state.items.findIndex((product:Product) => product.item_id === payload.item_id);

      // if findProductIndex is -1, it means that the product is not in the cart
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
          // Delete 1 element from the array starting from index findProductIndex
          state.items.splice(findProductIndex, 1);
        } else {
          state.items[findProductIndex] = {...state.items[findProductIndex], quantity: state.items[findProductIndex].quantity - 1};
        }
      }

      localStorage.setItem('cart', JSON.stringify(state.items));
    },
  },
})

// Action creators are generated for each case reducer function
export const { addToCart, decreaseToCart } = cartSlice.actions

export default cartSlice.reducer
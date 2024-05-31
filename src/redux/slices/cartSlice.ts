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

      const findProductIndex = state.items.findIndex((product:Product) => product.id === payload.id);

      // if findProductIndex is -1, it means that the product is not in the cart
      if (findProductIndex < 0) {
        state.items.push({...payload, quantity: 1});
        return;
      } else {
        state.items[findProductIndex] = {...state.items[findProductIndex], quantity: state.items[findProductIndex].quantity + 1};
        return;
      }
    },
    decreaseToCart: (state, {payload}) => {
      const findProductIndex = state.items.findIndex((product:Product) => product.id === payload);
      console.log("findProductIndex");

      if (findProductIndex !== -1) {
        if (state.items[findProductIndex].quantity === 1) {
          // Delete 1 element from the array starting from index findProductIndex
          state.items.splice(findProductIndex, 1);
        } else {
          state.items[findProductIndex] = {...state.items[findProductIndex], quantity: state.items[findProductIndex].quantity - 1};
        }
      }
    },
  },
})

// Action creators are generated for each case reducer function
export const { addToCart, decreaseToCart } = cartSlice.actions

export default cartSlice.reducer
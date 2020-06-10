import { createSlice } from '@reduxjs/toolkit';
import dummyPizzas from './dummyPizzas';

export const pizzaSlice = createSlice({
  name: 'pizza',
  initialState: {
    pizzas: [],
  },
  reducers: {
    load: (state, action) => {
      state.pizzas = action.payload;
    },
  },
});

const { load } = pizzaSlice.actions;

export const loadPizzas = () => dispatch => {
  setTimeout(() => {
    console.log("Dispatching pizzas ...");
    dispatch(load(dummyPizzas));
  }, 5000);
};


export const selectPizzas = state => state.pizza.pizzas;

export default pizzaSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';
import PizzaApi from './api';

export const pizzaSlice = createSlice({
  name: 'pizza',
  initialState: {
    pizzas: [],
    errorFetching: false
  },
  reducers: {
    load: (state, action) => {
      state.pizzas = action.payload;
    },
    setErrorFetching: (state, action) => {
      state.errorFetching = action.payload;
    }
  },
});

const { load, setErrorFetching } = pizzaSlice.actions;


export const loadPizzas = () => dispatch => {

  return PizzaApi.getAllPizzas().then(response => {

    if(response.success){
      response.data.then(pizzas=>{                
        dispatch(load(pizzas));
      });            
    }
    else{
      dispatch(setErrorFetching(true));
    }
    
  }).catch(error => {
    dispatch(setErrorFetching(true));
  });

};


export const selectPizzas = state => state.pizza.pizzas;
export const selectErrorFetching = state => state.pizza.errorFetching;

export default pizzaSlice.reducer;

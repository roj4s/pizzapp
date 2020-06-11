import { createSlice } from '@reduxjs/toolkit';


export const orderSlice = createSlice({
  name: 'order',
  initialState: {
    pizzas: {},
    orderTotal: 0
  },
  reducers: {
    addOrderPizza: (state, action) => {

      const id = action.payload.id;

      if(state.pizzas.hasOwnProperty(id)){
        
        state.pizzas[id].quantity += 1;
        console.log("Added pizza existed");

      }
      else{

        state.pizzas[id] = {
          pizza: action.payload,
          quantity: 1
        };
        console.log("Added pizza new");

      }

      state.orderTotal += action.payload.price;
    },
    deleteOrderPizza: (state, action) => {

      const id = action.payload.id;
      if(state.pizzas.hasOwnProperty(id))
      {
        const quantity = state.pizzas[id].quantity;
        const price = state.pizzas[id].price;
        delete state.pizzas[id];
        state.orderTotal -= price * quantity;
      }
      if(state.orderTotal < 0){
        state.orderTotal = 0;
      }

    },
    minusOneOrderPizza: (state, action) => {

      const id = action.payload.id;
      if(state.pizzas.hasOwnProperty(id))
      {
        state.pizzas[id].quantity -= 1;
        state.orderTotal -= state.pizzas[id].pizza.price;
        
        if(state.pizzas[id].quantity == 0){
          delete state.pizzas[id];
        }

        if(state.orderTotal < 0){
          state.orderTotal = 0;
        }

      }

    }

  },
});

export const { addOrderPizza, minusOneOrderPizza, deleteOrderPizza } = orderSlice.actions;
export const selectOrderPizzas = state => state.order.pizzas;
export const selectOrderTotal = state => state.order.orderTotal;

export default orderSlice.reducer;

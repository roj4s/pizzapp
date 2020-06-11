import { configureStore } from '@reduxjs/toolkit';
import pizzaReducer from '../features/pizza/pizzaSlice';
import orderReducer from '../features/order/orderSlice';

export default configureStore({
  reducer: {
    pizza: pizzaReducer,
    order: orderReducer
  },
});

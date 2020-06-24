import { configureStore } from '@reduxjs/toolkit';
import pizzaReducer from '../features/pizza/pizzaSlice';
import orderReducer from '../features/order/orderSlice';
import userReducer from '../features/user/userSlice';
import loadingReducer from '../features/common/loadingIcon/loadingSlice';
import floatNotificationReducer from '../features/common/FloatingSnackBar/floatingNotificationSlice';

export default configureStore({
  reducer: {
    pizza: pizzaReducer,
    order: orderReducer,
    user: userReducer,
    loading: loadingReducer,
    floatingNotification: floatNotificationReducer
  },
});

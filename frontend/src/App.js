import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PizzaGrid from './features/pizza/PizzaGrid';
import {
  loadPizzas
} from './features/pizza/pizzaSlice';
import OrderConfirmModal from './features/order/orderConfirmModal/OrderConfirmModal';
import FloatingSnackBar from './features/common/FloatingSnackBar/FloatingSnackBar';

import { 
  selectShowPersistingModal
} from './features/order/orderSlice';

import { 
  selectShowLoginForm
   } from './features/user/userSlice';

import {
  selectNotificationShow,
  selectNotificationSeverity,
  selectNotificationMessage
} from './features/common/FloatingSnackBar/floatingNotificationSlice';

import './App.css';
import NavBar from './features/navbar/NavBar';
import UserLoginFormModal from './features/user/UserLoginForm/UserLoginFormModal';

function App() {

  const dispatch = useDispatch();
  dispatch(loadPizzas());
  
  const showOrderConfirmationModal = useSelector(selectShowPersistingModal);
  const showLoginForm = useSelector(selectShowLoginForm);
  const showSnackNotification = useSelector(selectNotificationShow);
  const floatNotificationSeverity = useSelector(selectNotificationSeverity);
  const floatNotificationMessage = useSelector(selectNotificationMessage);

  console.log(showOrderConfirmationModal);


  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <div className="PizzaGridContainer">
          <PizzaGrid />
        </div>
      </header>
      {showOrderConfirmationModal && <OrderConfirmModal /> 
      }
      { showLoginForm && <UserLoginFormModal />}
      { showSnackNotification && <FloatingSnackBar 
                                    message={floatNotificationMessage}
                                    severity={floatNotificationSeverity}
                                        />}
    </div>
  );
}

export default App;

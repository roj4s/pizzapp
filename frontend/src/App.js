import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PizzaGrid from './features/pizza/PizzaGrid';
import {
  loadPizzas
} from './features/pizza/pizzaSlice';
import OrderConfirmModal from './features/order/orderConfirmModal/OrderConfirmModal';

import { selectShowPersistingModal } from './features/order/orderSlice';

import './App.css';
import NavBar from './features/navbar/NavBar';

function App() {

  const dispatch = useDispatch();
  dispatch(loadPizzas());


  const showModal = useSelector(selectShowPersistingModal);


  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <div>
          <PizzaGrid />
        </div>
      </header>
      <OrderConfirmModal 
                visible={showModal}
            /> 
    </div>
  );
}

export default App;

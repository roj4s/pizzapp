import React from 'react';
import { useDispatch } from 'react-redux';
import PizzaGrid from './features/pizza/PizzaGrid';
import {
  loadPizzas
} from './features/pizza/pizzaSlice';

import './App.css';
import Orders from './features/order/Orders';

function App() {

  const dispatch = useDispatch();
  dispatch(loadPizzas());

  console.log(process.env.PATH);

  return (
    <div className="App">
      <header className="App-header">
        <PizzaGrid />
        <Orders />
      </header>
    </div>
  );
}

export default App;

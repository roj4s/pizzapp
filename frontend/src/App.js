import React from 'react';
import { useDispatch } from 'react-redux';
import PizzaGrid from './features/pizza/PizzaGrid';
import {
  loadPizzas
} from './features/pizza/pizzaSlice';

import './App.css';

function App() {

  const dispatch = useDispatch();
  dispatch(loadPizzas());

  return (
    <div className="App">
      <header className="App-header">
        <PizzaGrid />
      </header>
    </div>
  );
}

export default App;

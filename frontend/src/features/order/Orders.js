import React from 'react';
import { useSelector } from 'react-redux';
import {
    selectOrderPizzas,
    selectOrderTotal
} from './orderSlice';


export default function Orders(){

    const orderTotal = useSelector(selectOrderTotal);
    const pizzas = useSelector(selectOrderPizzas);

    return (
        <div>
            {
                pizzas && Object.values(pizzas).length ? Object.values(pizzas).map(pizza=>(
                             <div key={pizza.pizza.id}>
                                 {pizza.pizza.name}-{pizza.quantity}
                             </div>
                         ))
                : (<div>No items added to cart</div>)
            }
            <p>Total: {Math.floor(orderTotal * 100) / 100} </p>
        </div>
    );

}
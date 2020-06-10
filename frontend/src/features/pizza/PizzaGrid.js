import React from 'react';
import { useSelector } from 'react-redux';

import {
    selectPizzas
} from './pizzaSlice';



export default function PizzaGrid(){

    const pizzas = useSelector(selectPizzas);    

    return (
            <ul>
                { 
                    pizzas && pizzas.length ? pizzas.map((pizza, i) => 
                        (<li key={i}>
                            <p>{pizza.name}</p>
                        </li>)
                    ) : (<li><p> Loading ...</p></li>)
                }    
            </ul>
              
    );

}
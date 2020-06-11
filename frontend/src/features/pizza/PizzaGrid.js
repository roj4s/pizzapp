import React from 'react';
import { useSelector } from 'react-redux';
import PizzaCard  from './PizzaCard'; 

import {
    selectPizzas
} from './pizzaSlice';

import './PizzaGrid.css';


export default function PizzaGrid(){

    const pizzas = useSelector(selectPizzas);    

    return (
            <div className='PizzaGrid'>
                { 
                    pizzas && pizzas.length ? pizzas.map((pizza, i) => 
                        (
                        <span className="Card" key={pizza.id}>
                            <PizzaCard 
                                pizza={pizza}
                            />
                        </span>)
                    ) : (<div><p> Loading ...</p></div>)
                }    
            </div>
              
    );

}
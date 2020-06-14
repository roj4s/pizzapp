import React from 'react';
import { useSelector } from 'react-redux';
import PizzaCard  from './pizzaCard/PizzaCard'; 
import LoadingIcon from '../common/loadingIcon/LoadingIcon';
import NotificationPanel from '../common/notificationPanel/NotificationPanel';

import {
    selectPizzas, selectErrorFetching
} from './pizzaSlice';

import './PizzaGrid.css';


export default function PizzaGrid(){

    const pizzas = useSelector(selectPizzas);  
    const errorFetching = useSelector(selectErrorFetching);

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
                    ) : (errorFetching ? (                        
                            <NotificationPanel 
                                success={false}
                                message="Error fetching data ;(" />
                        ) : (
                                <LoadingIcon />
                            ))
                }    
            </div>
              
    );

}
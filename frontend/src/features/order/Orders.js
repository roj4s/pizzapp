import React from 'react';
import { useSelector } from 'react-redux';
import {
    selectOrderPizzas,
    selectOrderTotal
} from './orderSlice';
import { Typography } from '@material-ui/core';
import OrderCardsContainer from './orderCardsContainer/OrderCardsContainer';

import './Order.css';



export default function Orders(){

    const orderTotal = useSelector(selectOrderTotal);
    const pizzas = useSelector(selectOrderPizzas);

    return (
        <div className="OrdersContainer">
            {
                pizzas && Object.values(pizzas).length ? (
                    <OrderCardsContainer
                        pizzas={Object.values(pizzas)}
                        orderTotal={orderTotal}
                    />
                    )
                : (
                <Typography variant="body1" color="textSecondary" component="p">
                    <i>Cart is empty</i>
                </Typography>)
            }
                       
        </div>
    );

}
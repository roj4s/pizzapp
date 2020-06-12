import React from 'react';
import { useSelector } from 'react-redux';
import {
    selectOrderPizzas,
    selectOrderTotal,
    selectShowPersistingModal
} from './orderSlice';
import { Typography } from '@material-ui/core';
import OrderCardsContainer from './orderCardsContainer/OrderCardsContainer';
import OrderConfirmModal from './orderConfirmModal/OrderConfirmModal';


import { useDispatch } from 'react-redux';
import './Order.css';



export default function Orders(){

    const dispatch = useDispatch();
    const orderTotal = useSelector(selectOrderTotal);
    const pizzas = useSelector(selectOrderPizzas);
    const showModal = useSelector(selectShowPersistingModal);

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
            <OrderConfirmModal 
                visible={showModal}
            />            
        </div>
    );

}
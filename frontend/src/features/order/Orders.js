import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import {
    selectOrderPizzas,
    selectOrderTotal,
    persistOrder,
    selectPersistingOrder,
    selectErrorPersistingOrder
} from './orderSlice';

import Modal from 'react-modal';

import OrderCard from './OrderCard';
import { useDispatch } from 'react-redux';
import './Order.css';

Modal.setAppElement('#root');

export default function Orders(){

    const [modalIsOpen,setModalIsOpen] = useState(false);
     
    function closeModal(){
        setModalIsOpen(false);
    }

    const dispatch = useDispatch();
    const orderTotal = useSelector(selectOrderTotal);
    const pizzas = useSelector(selectOrderPizzas);
    const persistingOrder = useSelector(selectPersistingOrder);
    const isErrorPersisting = useSelector(selectErrorPersistingOrder);

    return (
        <div>
            {
                pizzas && Object.values(pizzas).length ? Object.values(pizzas).map(pizza=>(
                            <div key={pizza.pizza.id} className="OrderCard">
                                <OrderCard
                                    
                                    pizza={pizza}
                                />
                             </div>
                         ))
                : (<div>No items added to cart</div>)
            }
            <p>Total: {Math.floor(orderTotal * 100) / 100} </p>
            {
                pizzas && Object.values(pizzas).length && 
                    (<button onClick={
                        ()=>
                        {
                            setModalIsOpen(true);
                            const data = {
                                pizzas: Object.values(pizzas),
                                totalPrice: orderTotal,
                                currency: 'USD'
                            };
                            dispatch(persistOrder(data));
                        }}>Submit</button>)
            }
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Persisting Order"
                >
                    <div>
                        {
                          persistingOrder && (<p>Persisting order ...</p>)
                        }
                        {
                          !persistingOrder && isErrorPersisting && (<p>Error persisting order ...</p>)
                        }
                        {
                          !persistingOrder && !isErrorPersisting && (<p>Order persisted succesfully ...</p>)
                        }
                        <button 
                            onClick={closeModal}
                            disabled={persistingOrder}
                            >Close</button>
                    </div>
            </Modal>
        </div>
    );

}
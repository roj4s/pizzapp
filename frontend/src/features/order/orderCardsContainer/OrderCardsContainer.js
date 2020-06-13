import React from 'react';
import { useDispatch } from 'react-redux';
import { 
    setShowPersistingModal
} from '../orderSlice';
import OrderCard from '../OrderCard';
import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

import './OrderCardsContainer.css';

const useStyles = makeStyles((theme) => ({
    button: {
        marginLeft: 'auto'
    }
  }));

export default function OrderCardsContainer({ pizzas, orderTotal}){

    const dispatch = useDispatch(); 
    const classes = useStyles();
    const triggerConfirmOrder = () => {

            dispatch(setShowPersistingModal(true));
            
        };

    return (
        <div>
            <div className="OrderCardsContainer">{ Object.values(pizzas).map(pizza=>(
                    <div key={pizza.pizza.id} className="OrderCard">
                        <OrderCard
                            pizza={pizza}
                        />
                    </div>
                ))}
            </div>
            <div className="ToolBar">
                <div>
                    <Typography variant="subtitle2" color="textSecondary" component="span">
                        Total: {`${Math.floor(orderTotal * 100) / 100}`}  
                    </Typography>
                </div>
                <Button 
                    className={classes.button}
                    variant="contained" 
                    color="primary" 
                    component="span"
                    onClick={triggerConfirmOrder}
                    >
                    Confirm
                </Button>
            </div>
        </div>
        );

}
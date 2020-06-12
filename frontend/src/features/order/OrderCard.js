import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Add from '@material-ui/icons/Add';
import Remove from '@material-ui/icons/Remove';
import Typography from '@material-ui/core/Typography';

import PizzaApi from '../pizza/api';

import { useDispatch } from 'react-redux';
import {
    addOrderPizza,
    minusOneOrderPizza
  } from '../order/orderSlice';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'row',
        height: '130px'
    },
    media: {
        width: '150px'        
    },
    content: {
        width: '200px',
        height: '100%',
        padding: '5px',        
        textAlign: 'start',
        marginLeft: '10px',
        position: 'relative'
    },
    buttonsCardActions: {
        position: 'absolute',
        padding: '5px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center', 
        bottom: '30px',
        right: '5px'
    }
  }));

export default function OrderCard(props){

    const dispatch = useDispatch();

    const classes = useStyles();
    const pizza = props.pizza.pizza;
    const quantity = props.pizza.quantity;
    
    return (
        <Card className={classes.root}>
            <CardMedia
                className={classes.media}
                image={PizzaApi.getImageUrlFromImageName(pizza.image)}
            />
            <div>
            <CardContent className={classes.content}>
                <Typography component="h6" variant="h6">
                    {pizza.name}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                    {`${quantity}x`}
                </Typography>

                <div 
                className={classes.buttonsCardActions}
                >
                    <IconButton 
                        onClick={()=>dispatch(addOrderPizza(pizza))}
                        >
                        <Add />
                    </IconButton>
                    <IconButton 
                        onClick={()=>dispatch(minusOneOrderPizza(pizza))}
                        >
                        <Remove />
                    </IconButton>
                </div>
                
            </CardContent>
            
            </div>
        </Card>
    );


}
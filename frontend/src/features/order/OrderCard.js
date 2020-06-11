import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
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
        flexDirection: 'row'
    },
    media: {
        width: 100        
    },
    content: {
        width: 200,
        padding: '5px',        
        textAlign: 'start',
        marginLeft: '10px'
    },
    iconButton:{
        marginLeft: 'auto'
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
                
            </CardContent>
            <CardActions>
                    <IconButton 
                        className={classes.iconButton}
                        onClick={()=>dispatch(addOrderPizza(pizza))}
                        >
                        <Add />
                    </IconButton>
                    <IconButton 
                        className={classes.iconButton}
                        onClick={()=>dispatch(minusOneOrderPizza(pizza))}
                        >
                        <Remove />
                    </IconButton>
                </CardActions>
            </div>
        </Card>
    );


}
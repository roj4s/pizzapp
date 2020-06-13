import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { useDispatch } from 'react-redux';

import { getCurrentViewPortSize } from '../common/common';

import PizzaApi from './api';

import {
  addOrderPizza
} from '../order/orderSlice';

const vpSize = getCurrentViewPortSize();

const useStyles = makeStyles((theme) => ({
  root: {
    width: vpSize.width < 600 ? 300 : 200
  },
  media: {
    height: 150,
    objectFit: 'cover'
  },
  addIcon: {
      marginLeft: 'auto'
  },
  content: {
    height: 50,
    overflow: 'hidden',
    textAlign: 'start'
  }
}));

export default function PizzaCard(props) {

  const dispatch = useDispatch();

  const pizza = props.pizza;
  const classes = useStyles();
  const contentMaxChars = 80;

  return (
    <Card className={classes.root}>      
      <CardMedia
        className={classes.media}
        image={PizzaApi.getImageUrlFromImageName(pizza.image)}
      />
      <CardContent className={classes.content}>
        <Typography variant="body2" color="textSecondary" component="p">
          { pizza.description.length > contentMaxChars 
                ? `${pizza.description.slice(0,contentMaxChars)} ...` : pizza.description }
        </Typography>
      </CardContent>
      <CardActions >        
        <IconButton
            className={classes.addIcon} 
            onClick={()=>{ dispatch(addOrderPizza(props.pizza)); }}
            aria-label="add">
          <AddShoppingCartIcon />
        </IconButton>        
      </CardActions>      
    </Card>
  );
}

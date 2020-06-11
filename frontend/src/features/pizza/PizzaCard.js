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

import {
  addOrderPizza
} from '../order/orderSlice';


const useStyles = makeStyles((theme) => ({
  root: {
    width: 200
  },
  media: {
    height: 150,
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
        image="https://image.freepik.com/fotos-gratis/gotas-de-oleo-na-imagem-abstrata-padrao-psicodelico-de-agua_23-2148290141.jpg"
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

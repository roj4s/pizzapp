import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Badge from '@material-ui/core/Badge';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import { useSelector, useDispatch } from 'react-redux';
import Orders from '../order/Orders'; 

import {
    selectItemsTotal,    
    selectShowOrdersContainer,
    setShowOrdersContainer
} from '../order/orderSlice';

import './NavBar.css';

export default function NavBar(){

    const dispatch = useDispatch();
    const totalItems = useSelector(selectItemsTotal);
    const showOrdersContainer = useSelector(selectShowOrdersContainer);

    const toggleShowOrders = () => {
        dispatch(setShowOrdersContainer(!showOrdersContainer));
    }

    return (
        <div className="NavBar">
            <AppBar position="fixed">              
              <div className="NavBarContent">
              
                <Toolbar>
                <img className="NavBarBrand" src="favicon.ico" />
                  <Typography variant="h6">
                    PizzaVery
                  </Typography>
                  <div className="NavBarCartButtons">
                    <IconButton  
                        className="CartButton"                  
                        aria-label="cart items" 
                        color="inherit"
                        onClick={toggleShowOrders}
                        >
                        <Badge badgeContent={totalItems} color="secondary">
                            <ShoppingCartIcon />                        
                        </Badge>                    
                    </IconButton>
                      
                    </div>
                    
                </Toolbar>
               </div>
               {
                        showOrdersContainer && <Orders />
                      } 
            </AppBar>
            
        </div>
      );

}
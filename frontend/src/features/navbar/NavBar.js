import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Badge from '@material-ui/core/Badge';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import { useSelector, useDispatch } from 'react-redux';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import Orders from '../order/Orders'; 
import UserNavBarMenu from '../user/UserNavBarMenu/UserNavBarMenu';

import {
  selectUser
} from '../user/userSlice'

import {
    selectItemsTotal,    
    selectShowOrdersContainer,
    setShowOrdersContainer,
    setShowUserMenu,
    selectShowUserMenu
} from '../order/orderSlice';

import './NavBar.css';

export default function NavBar(){

    const dispatch = useDispatch();
    const totalItems = useSelector(selectItemsTotal);
    const showOrdersContainer = useSelector(selectShowOrdersContainer);
    const user = useSelector(selectUser);
    const showUserMenu = useSelector(selectShowUserMenu);

    const toggleShowOrders = () => {
        dispatch(setShowOrdersContainer(!showOrdersContainer));
    }

    const toggleShowUserMenu = () => {
      
      dispatch(setShowUserMenu(!showUserMenu));
      
    }
  
  return (
        <div className="NavBar">
            <AppBar position="fixed">              
              <div className="NavBarContent">
              
                <Toolbar>
                <img alt='brand' className="NavBarBrand" src="favicon.ico" />
                  <Typography variant="h6">
                    PizzaVery
                  </Typography>
                  <div className="NavBarCartButtons">
                    <IconButton  
                        className="NavBarIcon"                  
                        aria-label="cart items" 
                        color="inherit"
                        onClick={toggleShowOrders}
                        >
                        <Badge badgeContent={totalItems} color="secondary">
                            <ShoppingCartIcon />                        
                        </Badge>                    
                    </IconButton>
                    <IconButton 
                      color="inherit"
                      className="NavBarIcon"
                      onClick={toggleShowUserMenu}
                    >
                      <AccountCircleRoundedIcon />
                    </IconButton>
                      
                    </div>
                    
                </Toolbar>
               </div>
               {
                        showOrdersContainer && <Orders />
                      } 
                      {
                        showUserMenu && <UserNavBarMenu user={user} />
                      }
            </AppBar>
            
        </div>
      );

}
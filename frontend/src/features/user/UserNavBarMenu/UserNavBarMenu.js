import React from 'react';
import { useDispatch } from 'react-redux';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import TimelineIcon from '@material-ui/icons/Timeline';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';

import {
    logIn, 
    logOut,
    toggleShowLoginForm
} from '../userSlice';

import {
    setShowUserMenu
} from '../../order/orderSlice';


import './UserNavBarMenu.css';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      maxWidth: 360,      
      backgroundColor: theme.palette.background.paper,
      position: 'fixed',
      top: 64,
      right: 0,
      boxShadow: "8px 10px 25px 0px rgba(0,0,0,0.29)",
      borderRadius: '2%',
      padding: 10
    },
    listItem: {
        width: '100%'
    },
    listItemUser: {
        height: 100,
        width: "100%"
    },
    userAvatar: {
        width: theme.spacing(10),
        height: theme.spacing(10),
    },
    userTextItem: {
        margin: 10
    },
    divider: {
        marginTop: 10,
        marginBottom: 10
    }
  }),
);

export default function UserNavbarMenu({user}){

    const dispatch = useDispatch();
    const classes = useStyles();

    const login = () => {

        dispatch(toggleShowLoginForm());        
        dispatch(setShowUserMenu(false));
  
    }
  
      const logout = () => {
  
        console.log("loggin out ...");
        dispatch(logOut());
        dispatch(setShowUserMenu(false));
  
    }

    return (
        <div>
            {
                user.email && 
                    <List className={classes.root}>
                        <ListItem
                         className={classes.listItemUser}
                         >
                            <ListItemAvatar>
                                <Avatar 
                                    className={classes.userAvatar}
                                    src="https://media-exp1.licdn.com/dms/image/C5603AQEpNvxTb3Q2iA/profile-displayphoto-shrink_400_400/0?e=1598486400&v=beta&t=_3BpR17XOooZmyEzv0YCAOdL8oNsNp0v9UKHvhSqz4s" />                                                                                                   
                            </ListItemAvatar>
                            <ListItemText 
                                className={classes.userTextItem}
                                primaryTypographyProps={{color: 'textPrimary'}} 
                                primary={user.name}
                                secondary={user.email} 
                                />
                        </ListItem>
                        <Divider
                            className={classes.divider} 
                            variant="middle"/>
                        <ListItem
                         className={classes.listItem}
                         button>
                            <ListItemAvatar>
                                <Avatar>
                                    <TimelineIcon color='inherit'/>
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText 
                                primaryTypographyProps={{color: 'textPrimary'}} 
                                primary="Previous Orders" />
                        </ListItem>
                        <ListItem
                         className={classes.listItem}
                         onClick={logout}
                         button>
                            <ListItemAvatar>
                                <Avatar>
                                    <ExitToAppIcon color='inherit'/>
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText 
                                primaryTypographyProps={{color: 'textPrimary'}} 
                                primary="Logout" />
                        </ListItem>
                    </List>
            }
            {
                !user.email && <List className={classes.root} >
                <ListItem 
                    button 
                    className={classes.listItem}
                     
                    onClick={login}>
                    <ListItemAvatar>
                        <Avatar>
                            <ExitToAppIcon color='inherit' />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primaryTypographyProps={{color: 'textPrimary'}} primary="Login" />
                </ListItem>
            </List>
            }
        </div>
    );

}
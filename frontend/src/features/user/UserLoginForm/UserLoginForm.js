import React, { useState } from 'react';
import { TextField, Button, Typography } from "@material-ui/core";
import { useDispatch, useSelector } from 'react-redux';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import InputAdornment from '@material-ui/core/InputAdornment';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import {
    selectLoading
} from '../../common/loadingIcon/loadingSlice';

import LoadingIcon from '../../common/loadingIcon/LoadingIcon';

import {
    logIn,
    selectUser
} from '../userSlice';

import './UserLoginForm.css';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

const useStyles = makeStyles((theme) => ({    
    icon: {
      width: 200,
      height: 200,
      margin: 50        
    },
    button: {
        margin: 50
    },
    textField: {
        margin: 20
    }
  }));

export default function UserLoginForm() {

    const [ user, setUser ] = useState({});
    const [ showPassword, setShowPassword ] = useState(false);
    const [ submited, setSubmited ] = useState(false);
    const classes = useStyles();
    const dispatch = useDispatch();
    const loading = useSelector(selectLoading);
    const sessUser = useSelector(selectUser);

    const handleChange = (e) => {

        const newUser = Object.assign({}, user);
        newUser[e.target.id] = e.target.value;
        setUser(newUser);

    }

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    }

    const handleMouseDownPassword = (e) => {
        e.preventDefault();
      };

    const submit = () => {
        setSubmited(true);
        dispatch(logIn(user));
    }

    return (
        <div className="UserLoginForm">
                { loading && <LoadingIcon />  }
                {
                    !loading && 
                        submited && 
                        !sessUser.email && 
                        <Alert severity="error">Couldn't login, check credentials</Alert>
                }
            
            <AccountCircleRoundedIcon 
                className={classes.icon}
                color="primary"/>  
                <Typography variant="overline">Email: user@email.com, Password: password</Typography> 
                <div className="UserLoginFormInputs">
                    <TextField
                        className={classes.textField}
                        id="email"                       
                        value={user.email}
                        onChange={handleChange}
                        label="Email"    
                        fullWidth     
                        variant="outlined"  
                        placeholder="user@email.com"                            
                    />
                    <TextField
                        id="password" 
                        placeholder="password" 
                        fullWidth                     
                        value={user.password}
                        onChange={handleChange}
                        label="Password" 
                        variant="outlined"
                        type={showPassword ? 'text' : 'password'}    
                        InputProps={{
                        endAdornment:
                            <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={toggleShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                            >
                                {showPassword ? <Visibility /> : <VisibilityOff />}
                            </IconButton>
                            </InputAdornment>
                        }}     
                    />
                </div>
             <Button  
                className={classes.button}
                variant="contained" 
                color="primary" 
                onClick={submit}>
                    Submit
                </Button>             
        </div>
    );

    

}
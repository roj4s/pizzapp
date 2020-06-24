import React, { useState } from 'react';
import { Typography, TextField } from "@material-ui/core";
import { useSelector, useDispatch } from 'react-redux';

import './OrderContactInfoForm.css';

import {
    selectUser,
    setUser,
    selectUserValidField
} from '../../orderSlice';



export default function OrderContactInfoForm(params) {

    const [focused, setFocused] = useState({});
    const user = useSelector(selectUser);
    const fieldValidators = useSelector(selectUserValidField);
    const dispath = useDispatch();

    const validField = (fieldName) => {
        if(!focused || !focused[fieldName])
            return true;
        
        console.log(fieldValidators[fieldName]);
        return fieldValidators[fieldName];
    }

    const handleFocus = (e) => {

        let newFocused = Object.assign({}, focused);
        newFocused[e.target.id] = true;
        setFocused(newFocused);
        
        
    }

    const handleChange = (e) => {

        const newUser = Object.assign({}, user);
        newUser[e.target.id] = e.target.value;
        dispath(setUser(newUser));

    }
    
    return (
        <div className="OrderContactInfoForm">
            <Typography variant='h4' component='h4'>
                Please let us know how to reach you
            </Typography>
            <div className='FormContainer'>
                    <TextField
                        id="email"  
                        error={!validField('email')}                      
                        value={user.email}
                        onChange={handleChange}
                        onFocus={handleFocus}
                        label="Email"
                        variant="outlined"
                        className="TextField"                        
                    />
                    <TextField
                        required
                        id="name"
                        error={!validField('name')}
                        value={user.name}
                        onChange={handleChange}
                        onFocus={handleFocus}
                        label="Full Name"
                        variant="outlined"
                    />
                    <TextField
                        required
                        id="phone"
                        error={!validField('phone')}
                        value={user.phone}
                        onChange={handleChange}
                        onFocus={handleFocus}
                        label="Phone"
                        variant="outlined"
                    />
                    <TextField
                        required
                        id="address"
                        error={!validField('address')}
                        value={user.address}
                        onChange={handleChange}
                        onFocus={handleFocus}
                        label="Address"
                        variant="outlined"
                    />
            </div>
        </div>
    );

}
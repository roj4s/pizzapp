import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

import {
  resetFloatingNotification
} from './floatingNotificationSlice';


function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }


export default function FloatingSnackBar({ message, severity="info" }) {

    const [open, setOpen] = useState(true);
    const dispatch = useDispatch();

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpen(false);
        dispatch(resetFloatingNotification());
      };

    return (
        <Snackbar 
            anchorOrigin={
                {vertical: 'bottom', horizontal: 'right'}
            }
            open={open} 
            autoHideDuration={6000} 
            onClose={handleClose}>
            <Alert onClose={handleClose} severity={severity}>
            {message}
            </Alert>
      </Snackbar>
    );

}
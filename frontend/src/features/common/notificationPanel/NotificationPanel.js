import React from 'react';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import Typography from '@material-ui/core/Typography';
import { green } from '@material-ui/core/colors';
import { red } from '@material-ui/core/colors';

import './NotificationPanel.css';

import { getCurrentViewPortSize } from '../../common/common';


export default function NotificationPanel({success, message}){

    const vSize = getCurrentViewPortSize();

    return (
        <div className="NotificationPanel">
            <div className="NotificationIcon">
                {
                    
                        success ? <CheckCircleOutlineIcon style={{
                            width: 200,
                            height: 200,
                            color: green[500]
                        }} /> 
                                : <ErrorOutlineIcon style={{
                                    width: 200,
                                    height: 200,
                                    color: red[500]
                                }} />
                    
                }
            </div>
            {
               vSize.width > 600 && (<Typography 
                    variant='h4' 
                    component='h4'>
                    { message }
                </Typography>)
            }
        </div>
    );

}
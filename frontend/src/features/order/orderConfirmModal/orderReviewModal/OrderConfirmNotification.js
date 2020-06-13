import React from 'react';
import { useSelector } from 'react-redux';

import NotificationPanel from '../../../common/notificationPanel/NotificationPanel';

import {
    selectPersistingOrder,
    selectErrorPersistingOrder
} from '../../orderSlice';

export default function OrderConfirmNotification(){

    const persistingOrder = useSelector(selectPersistingOrder);
    const errorPersistingOrder = useSelector(selectErrorPersistingOrder);

    return (
        <div>
            {
                persistingOrder && (<p>Submiting Order </p>)
            }
            {
                !persistingOrder && errorPersistingOrder && (
                    <NotificationPanel
                        success={false}
                        message="There was an error persisting your order, plase try later"
                        />
                    )
            }
            {
                !persistingOrder && !errorPersistingOrder && (
                    <NotificationPanel
                        success={true}
                        message="Order was submitted successfully"
                    />
                )
            }
        </div>
    );

}
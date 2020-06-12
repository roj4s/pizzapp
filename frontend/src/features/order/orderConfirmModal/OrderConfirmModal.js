import React from 'react';
import { useDispatch, useSelector} from 'react-redux';
import {
    setShowPersistingModal,
    selectErrorPersistingOrder,
    selectPersistingOrder
} from '../orderSlice';

import Modal from 'react-modal';
Modal.setAppElement('#root');


export default function OrderConfirmModal({visible}){
    const dispatch = useDispatch();
    const persistingOrder = useSelector(selectPersistingOrder);
    const isErrorPersisting = useSelector(selectErrorPersistingOrder);

    const closeModal = () => {
        dispatch(setShowPersistingModal(false));
    }

    return(
        <Modal
            isOpen={visible}
            onRequestClose={closeModal}
            contentLabel="Persisting Order"
            >
                <div>
                    {
                        persistingOrder && (<p>Persisting order ...</p>)
                    }
                    {
                        !persistingOrder && isErrorPersisting && (<p>Error persisting order ...</p>)
                    }
                    {
                        !persistingOrder && !isErrorPersisting && (<p>Order persisted succesfully ...</p>)
                    }
                    <button 
                        onClick={closeModal}
                        disabled={persistingOrder}
                        >Close</button>
                </div>
        </Modal>);

}
import React, { useState } from 'react';
import Modal from 'react-modal';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import { getCurrentViewPortSize } from '../common';
import { makeStyles } from '@material-ui/core/styles';
import './CustomModal.css';

const useStyles = makeStyles((theme) => ({    
    closeButton: {
      width: 40,
      height: 40      
    }
  }));



export default function CustomModal({children, onClose}){

    const classes = useStyles();
    const [ open, setOpen ] = useState(true);

    const closeModal = () => {
        setOpen(false);
        if(onClose)
            onClose();
    }

    const vpSize = getCurrentViewPortSize();

    const modalCustomStyles = { content: vpSize.width > 600 ? {
            width: '50%',
            height: '85%',
            left: '25%',
            top: '10%',
            zIndex: 100,
            padding: 5
            } : {
                width: '85%',
                left:'2%',
                top:'10%',
                height: '80%',
                padding: '20px'
                }
            };

    return (
        <Modal
            isOpen={open}
            onRequestClose={closeModal}
            style={modalCustomStyles}
        >
            <div className='ModalCloseIcon'>
                  <IconButton onClick={closeModal}>
                    <CloseIcon
                      color="disabled" 
                      className={classes.closeButton} />
                  </IconButton>
                </div>
            <div className="CustomModalContent">
                {
                    children
                }
            </div>
        </Modal>
    );

}
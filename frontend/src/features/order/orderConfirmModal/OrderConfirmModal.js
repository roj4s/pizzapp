import React from 'react';
import { useDispatch, useSelector} from 'react-redux';
import {
    setShowPersistingModal,
    persistOrder,
    selectOrderPizzas,
    selectOrderTotal,
    selectUser,
    selectModalActiveStep,
    setNextModalActiveStep,
    setPrevModalActiveStep,
    setModalActiveStep,
    selectvalidUser    
} from '../orderSlice';

import {
    getCurrentViewPortSize
} from '../../common/common';

import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import OrderContactInfoForm from './orderContactInfoForm/OrderContactInfoForm';

import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';

import OrderReviewModal from './orderReviewModal/OrderReviewModal';

import './OrderConfirmModal.css';

import Modal from 'react-modal';
import OrderConfirmNotification from './orderReviewModal/OrderConfirmNotification';
Modal.setAppElement('#root');

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      height: '90%'
    },
    backButton: {
      marginRight: theme.spacing(1),
    },
    closeButton: {
      width: 40,
      height: 40      
    }
  }));

  

  const getSteps = () => {
    return ['Contact Information', 'Review Order', 'Order Confirmation'];
  }
  
  const getStepContent =(stepIndex) => {
    switch (stepIndex) {
      case 0:
        return <OrderContactInfoForm />;
      case 1:
        return <OrderReviewModal />;
      case 2:
        return <OrderConfirmNotification />;
      case 3:
        return <OrderConfirmNotification />;
      default:
        return 'Unknown stepIndex';
    }
  }
  

export default function OrderConfirmModal({visible}){
    const dispatch = useDispatch();
    const data = {
      user: useSelector(selectUser),
      totalPrice: useSelector(selectOrderTotal),
      pizzas: useSelector(selectOrderPizzas)
    };

    const classes = useStyles();
    const activeStep = useSelector(selectModalActiveStep);
    const validUser = useSelector(selectvalidUser);
    const steps = getSteps();

    const handleNext = () => {

        if(activeStep === 3){          
          dispatch(setShowPersistingModal(false));          
        }

        if(activeStep < 3 ){
          dispatch(setNextModalActiveStep());
        }

        if(activeStep === 1){
          dispatch(persistOrder(data));
          dispatch(setModalActiveStep(3));
        }   

    };

    const handleBack = () => {
        dispatch(setPrevModalActiveStep());
    };

    const closeModal = () => {
        dispatch(setShowPersistingModal(false));
    }

    const getNextButtonText = (currentStep) => {

      switch(currentStep){
        case 0:
          return 'Next';
        case 1:
          return 'Submit';
        default:
          return 'Close';
      }


    }

    const vpSize = getCurrentViewPortSize;

    const modalCustomStyles = {
        content: vpSize.width > 600 ? {
          width: '50%',
          height: '50%',
          left: '25%',
          top: '10%',
          zIndex: 100,
          padding: 5
        } : {
            width: '80%',
             left:'5%',
             top:'10%',
             height: '80%',
             padding: '20px'
            }
    };

    return(
        <Modal
            isOpen={visible}
            onRequestClose={closeModal}
            contentLabel="Persisting Order"
            style={modalCustomStyles}
            >
                <div className='CloseIcon'>
                  <IconButton onClick={closeModal}>
                    <CloseIcon
                      color="disabled" 
                      className={classes.closeButton} />
                  </IconButton>
                </div>
                <div className={classes.root}>
                    <Stepper activeStep={activeStep} alternativeLabel>
                        {steps.map((label) => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                        ))}
                    </Stepper>
                    <div className="ModalContent">
                        <div className="ModalContentInfo">
                          {
                            getStepContent(activeStep)
                          }
                        </div>
                        
                      </div> 
                      <div className="Buttons">
                          {
                            activeStep === 1 && (
                                        <Button
                                            disabled={activeStep === 0 || activeStep === 2}
                                            onClick={handleBack}
                                            className={classes.backButton}
                                        >
                                            Back
                                        </Button>)
                          }
                          {
                            activeStep !== 3 && (
                              <Button 
                                disabled={!validUser} 
                                variant="contained" 
                                color="primary" 
                                onClick={handleNext}>
                                  {getNextButtonText(activeStep)}
                              </Button>
                            )
                          }
                        </div>
                </div>
        </Modal>);

}
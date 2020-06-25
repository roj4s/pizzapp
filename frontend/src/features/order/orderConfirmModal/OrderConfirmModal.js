import React from 'react';
import { useDispatch, useSelector} from 'react-redux';
import {
    setShowPersistingModal,
    persistOrder,
    selectOrderPizzas,
    selectOrderTotal,
    selectModalActiveStep,
    setNextModalActiveStep,
    setModalActiveStep,  
} from '../orderSlice';

import UserLoginForm from '../../user/UserLoginForm/UserLoginForm';
import {
  selectUser
} from '../../user/userSlice';

import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';

import OrderReviewModal from './orderReviewModal/OrderReviewModal';

import './OrderConfirmModal.css';

import Modal from 'react-modal';
import OrderConfirmNotification from './orderReviewModal/OrderConfirmNotification';
import CustomModal from '../../common/CustomModal/CustomModal';

Modal.setAppElement('#root');

  const getSteps = () => {
    return ['Contact Information', 'Review Order', 'Order Confirmation'];
  }
  
  const getStepContent =(stepIndex) => {
    switch (stepIndex) {
      case 0:
        return <UserLoginForm />;
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
  

export default function OrderConfirmModal(){
    const dispatch = useDispatch();
    const data = {
      user: useSelector(selectUser),
      totalPrice: useSelector(selectOrderTotal),
      pizzas: useSelector(selectOrderPizzas)
    };

    if(!data.user.email){
      dispatch(setModalActiveStep(0));
    }

    const activeStep = useSelector(selectModalActiveStep);
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

    return(
      <CustomModal 
        onClose={() => { dispatch(setShowPersistingModal(false)); }}
      >
        <div>
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
              {
                activeStep !== 0 &&
                <div className="OrderConfirmModalButtons">
                      {
                        activeStep !== 3 && (
                          <Button 
                            disabled={!data.user.email} 
                            variant="contained" 
                            color="primary" 
                            onClick={handleNext}>
                              {getNextButtonText(activeStep)}
                          </Button>
                        )
                      }
                  </div>
            }              
          </div>           
        </div>
      </CustomModal>);

}
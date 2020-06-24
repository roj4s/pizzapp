import React from 'react';
import UserLoginForm from './UserLoginForm';
import CustomModal from '../../common/CustomModal/CustomModal';
import { useDispatch } from 'react-redux';
import {
    setShowLoginForm
} from '../userSlice';

export default function UserLoginFormModal(){
    
    const dispatch = useDispatch();    

    return (
        <CustomModal 
            onClose={()=>dispatch(setShowLoginForm(false))}
            >
            <UserLoginForm />            
        </CustomModal>        
    );

}
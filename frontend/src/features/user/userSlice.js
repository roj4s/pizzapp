import { createSlice } from '@reduxjs/toolkit';
import UserApi from './api';
import {
  setLoading
} from '../common/loadingIcon/loadingSlice';

import {
  setNotificationMessage,
  setNotificationSeverity, 
  setShowNotification
} from '../common/FloatingSnackBar/floatingNotificationSlice';

export const userSlice = createSlice({
    name: 'user',
    initialState: {
      user: {},
      showLoginForm: false
    },
    reducers: {
      setUser: (state, action) => {
        state.user = action.payload;
        
        if(state.user.email){
          state.showLoginForm = false;
        }
      },
      toggleShowLoginForm: (state, action) => {
        state.showLoginForm = !state.showLoginForm;
      },
      setShowLoginForm: (state, action) => {
        state.showLoginForm = action.payload;
      }
    },
  });

  export const { 
    setUser, 
    toggleShowLoginForm,
    setShowLoginForm
  } = userSlice.actions;

  export const selectUser = state => state.user.user;
  export const selectShowLoginForm = state => state.user.showLoginForm;

  export const getLoggedIn = () => dispatch => {

    return UserApi.getLoggedIn().then(response => {
  
      if(response.success){
        response.data.then(user=>{                
          dispatch(setUser(user));          
        });            
      }
      
    }).catch(error => {
      console.log(error);
    });
  
  };

  export const logIn = (user) => dispatch => {

    dispatch(setLoading(true));
    return UserApi.logIn(user).then(response => {
  
      if(response.success){
        response.data.then(user=>{                
          dispatch(setUser(user));
          dispatch(setNotificationMessage(`Welcome back ${user.name}`));
          dispatch(setShowNotification(true));
          dispatch(setNotificationSeverity("success"));
          dispatch(setLoading(false))
        });            
      }
      else {
        dispatch(setUser({}));
        dispatch(setLoading(false))
      }
      
    }).catch(error => {
      console.log(error);
      dispatch(setUser({}));
      dispatch(setLoading(false));
    });
  
  };

  export const logOut = (user) => dispatch => {

    return UserApi.logOut().then(response => {
  
      if(response.success){
        dispatch(setUser({}));            
      }
      
    }).catch(error => {
      console.log(error);
    });
  
  };

  export default userSlice.reducer;
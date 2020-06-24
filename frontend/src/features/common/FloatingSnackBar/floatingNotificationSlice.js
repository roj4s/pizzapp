import { createSlice } from '@reduxjs/toolkit';

export const floatingNotificationSlice = createSlice({
    name: 'floatingNotification',
    initialState: {
        message: '',
        severity: 'info',
        show: false
    },
    reducers: {
      setNotificationMessage: (state, action) => {
        state.message = action.payload;
      },
      setNotificationSeverity: (state, action) => {
        state.severity = action.payload;
      },
      setShowNotification: (state, action) => {
          state.show = action.payload;          
      },
      resetFloatingNotification: (state, action) => {
        state.show = false;
        state.message = "";
        state.severity = "info";
      }
    },
  });


  export const {
      setNotificationMessage,
      setNotificationSeverity, 
      setShowNotification,
      resetFloatingNotification
  } = floatingNotificationSlice.actions;

  export const selectNotificationMessage = state => state.floatingNotification.message;
  export const selectNotificationSeverity = state => state.floatingNotification.severity;
  export const selectNotificationShow = state => state.floatingNotification.show;

  export default floatingNotificationSlice.reducer;
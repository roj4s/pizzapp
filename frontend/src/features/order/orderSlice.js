import { createSlice } from '@reduxjs/toolkit';
import OrderApi from './api';

export const orderSlice = createSlice({
  name: 'order',
  initialState: {
    pizzas: {},
    orderTotal: 0,
    persistingOrder: false,
    errorPersistingOrder: false,
    showPersistingModal: false,
    itemsTotal: 0,
    showOrdersContainer: false,
    showUserMenu: false,
    taxRate: .1,
    modalActiveStep: 0
  },
  reducers: {
    addOrderPizza: (state, action) => {

      const id = action.payload.id;

      if(state.pizzas.hasOwnProperty(id)){
        
        state.pizzas[id].quantity += 1;

      }
      else{

        state.pizzas[id] = {
          pizza: action.payload,
          quantity: 1
        };

      }

      state.orderTotal += action.payload.price;
      state.itemsTotal += 1;
    },
    deleteOrderPizza: (state, action) => {

      const id = action.payload.id;
      if(state.pizzas.hasOwnProperty(id))
      {
        const quantity = state.pizzas[id].quantity;
        const price = state.pizzas[id].price;
        delete state.pizzas[id];
        state.orderTotal -= price * quantity;
        state.itemsTotal -= quantity;
      }
      if(state.orderTotal < 0){
        state.orderTotal = 0;
      }

    },
    minusOneOrderPizza: (state, action) => {

      const id = action.payload.id;
      if(state.pizzas.hasOwnProperty(id))
      {
        state.pizzas[id].quantity -= 1;
        state.orderTotal -= state.pizzas[id].pizza.price;
        
        if(state.pizzas[id].quantity === 0){
          delete state.pizzas[id];
        }

        if(state.orderTotal < 0){
          state.orderTotal = 0;
        }
        
        state.itemsTotal -= 1;

      }

    },
    setPersistingOrder: (state, action) => {

      state.persistingOrder = action.payload;

    },
    setErrorPersistingOrder: (state, action) => {

      state.errorPersistingOrder = action.payload;

    },
    setShowPersistingModal: (state, action) => {

      console.log(`Setting to ${action.payload}`);

      state.showPersistingModal = action.payload;
      if(action.payload)
      {
        state.showOrdersContainer = false;
      }
      else{
        state.modalActiveStep = 1;
      }

    },
    setShowOrdersContainer: (state, action) => {

      state.showOrdersContainer = action.payload;
      if(action.payload){
        state.showUserMenu = false;
      }

    },
    setShowUserMenu: (state, action) => {

      state.showUserMenu = action.payload;
      if(action.payload){
        state.showOrdersContainer = false;
      }

    },
    clean: (state, action) => {
      state.pizzas = {};
      state.orderTotal = 0;
      state.itemsTotal = 0;     
    },
    setNextModalActiveStep: (state, action) => {
      state.modalActiveStep += 1;
    },
    setPrevModalActiveStep: (state, action) => {
      state.modalActiveStep -= 1;
    },
    setModalActiveStep: (state, action) => {
      console.log(`Setting modal active step ${action.payload}`);
      state.modalActiveStep = action.payload;
    }
  },
});



export const { 
  addOrderPizza, 
  minusOneOrderPizza, 
  deleteOrderPizza, 
  setPersistingOrder, 
  setErrorPersistingOrder, 
  clean,
  setShowPersistingModal,
  setShowOrdersContainer,
  setModalActiveStep,
  setPrevModalActiveStep,
  setNextModalActiveStep,
  setShowUserMenu
 } = orderSlice.actions;

export const selectOrderPizzas = state => state.order.pizzas;
export const selectOrderTotal = state => state.order.orderTotal;
export const selectErrorPersistingOrder = state => state.order.errorPersistingOrder;
export const selectPersistingOrder = state => state.order.persistingOrder;
export const selectShowPersistingModal = state => state.order.showPersistingModal;
export const selectItemsTotal = state => state.order.itemsTotal;
export const selectShowOrdersContainer = state => state.order.showOrdersContainer;
export const selectTaxRate = state => state.order.taxRate;
export const selectModalActiveStep = state => state.order.modalActiveStep;
export const selectShowUserMenu = state => state.order.showUserMenu;

export const persistOrder = (data) => dispatch => {
  
  dispatch(setErrorPersistingOrder(false));
  dispatch(setPersistingOrder(true));

  return OrderApi.createOrder(data).then(response => {
    
    if(response.success){
      dispatch(setErrorPersistingOrder(false));
      dispatch(clean());
    }
    else{
      dispatch(setErrorPersistingOrder(true));
    }    
  })
  .catch(error => dispatch(setErrorPersistingOrder(true)))
  .finally(()=>dispatch(setPersistingOrder(false)));
  

};

export default orderSlice.reducer;

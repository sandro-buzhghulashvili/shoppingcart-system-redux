import { configureStore } from '@reduxjs/toolkit';
import itemsReducer from './items';
import cartReducer from './cart';
import uiSlice from './ui-slice';

const store = configureStore({
  reducer: { items: itemsReducer, cart: cartReducer, ui : uiSlice.reducer },
});

export default store;

import { combineReducers } from '@reduxjs/toolkit';
import { itemsReducer } from '../redux/contactsSlice';
import { filtersReducer } from '../redux/filtersSlice';

export const rootReducer = combineReducers({
  items: itemsReducer,
  filters: filtersReducer,
});

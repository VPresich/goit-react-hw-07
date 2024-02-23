import { configureStore } from '@reduxjs/toolkit';
import { itemsReducer } from '../redux/contactsSlice';
import { filtersReducer } from '../redux/filtersSlice';

const store = configureStore({
  reducer: {
    items: itemsReducer,
    filters: filtersReducer,
  },
});

export default store;

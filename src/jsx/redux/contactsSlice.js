import { createSlice } from '@reduxjs/toolkit';

import { fetchContacts } from './operations';

const contactsSlice = createSlice({
  name: 'contactss',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },

  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const contactsReducer = contactsSlice.reducer;

// import { createSlice, nanoid } from '@reduxjs/toolkit';
// import { CONTACTS_SLICE, defaultContactsState } from './constants';

// const contactsSlice = createSlice({
//   name: CONTACTS_SLICE,
//   initialState: defaultContactsState,
//   reducers: {
//     addItem: {
//       reducer(state, action) {
//         state.items.push(action.payload);
//       },
//       prepare(values) {
//         return {
//           payload: {
//             ...values,
//             id: nanoid(),
//           },
//         };
//       },
//     },
//     deleteItem(state, action) {
//       const index = state.items.findIndex(item => item.id === action.payload);
//       if (index !== -1) {
//         state.items.splice(index, 1);
//       }
//     },
//   },
// });

// export const { addItem, deleteItem } = contactsSlice.actions;
// export const contactsReducer = contactsSlice.reducer;

// import { createSlice, nanoid } from '@reduxjs/toolkit';
// import { CONTACTS_SLICE, defaultContactsState } from './constants';

// const contactsSlice = createSlice({
//   name: CONTACTS_SLICE,
//   initialState: defaultContactsState,
//   reducers: {
//     addItem: {
//       reducer(state, action) {
//         //state.push(action.payload);
//         return {
//           ...state,
//           items: [...state.items, action.payload],
//         };
//       },
//       prepare(values) {
//         return {
//           payload: {
//             ...values,
//             id: nanoid(),
//           },
//         };
//       },
//     },
//     deleteItem(state, action) {
//       // const index = state.findIndex(task => task.id === action.payload);
//       // state.splice(index, 1);
//       return {
//         ...state,
//         items: state.items.filter(item => item.id !== action.payload),
//       };
//     },
//   },
// });

// export const { addItem, deleteItem } = contactsSlice.actions;
// export const contactsReducer = contactsSlice.reducer;

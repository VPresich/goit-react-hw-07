import { createAsyncThunk } from '@reduxjs/toolkit';
import { BASE_URL, END_POINT } from './constants';

import axios from 'axios';

axios.defaults.baseURL = BASE_URL;

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(END_POINT);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// export const addContact = createAsyncThunk(
//   'contacts/add',
//   async (text, thunkAPI) => {
//     try {
//       const response = await axios.post('/contacts', { text });
//       return response.data;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );

// export const deleteContact = createAsyncThunk(
//   'contacts/delete',
//   async (taskId, thunkAPI) => {
//     try {
//       const response = await axios.delete(`/contacts/${taskId}`);
//       return response.data;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );

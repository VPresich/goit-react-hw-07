import { createAsyncThunk } from '@reduxjs/toolkit';
import { BASE_URL, END_POINT, CONTACTS_SLICE } from './constants';

import axios from 'axios';

axios.defaults.baseURL = BASE_URL;

export const fetchContacts = createAsyncThunk(
  `${CONTACTS_SLICE}/fetchAll`,
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(END_POINT);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  `${CONTACTS_SLICE}/addContact`,
  async (values, thunkAPI) => {
    try {
      const response = await axios.post(END_POINT, values);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  `${CONTACTS_SLICE}/deleteContact`,
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`${END_POINT}/${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import AsyncStorageLib from '@react-native-async-storage/async-storage';
import axios from 'axios';

const baseUrl = 'http://203.190.153.22:1639/api/v1';
const initialState = {
  status: '',
  error: [],
  loading: false,
};

export const sendMessage = createAsyncThunk(
  'sendMessage',
  async (data, {rejectWithValue}) => {
    const token = await AsyncStorageLib.getItem('token');
    console.log(data, 'data');
    try {
      const response = await axios({
        method: 'post',
        headers: {Authorization: `Bearer ${token}`},
        url: `${baseUrl}/help/contact`,
        data: {
          name: data.name,
          email: data.email,
          reference: data.reference,
          news: data.news,
        },
      });
      console.log(response, 'lang');
      return response.data.message;
    } catch (err) {
      return rejectWithValue(Object.values(err.response.data));
    }
  },
);

export const ContactReducer = createSlice({
  name: 'ContactReducer',
  initialState,
  reducers: {
    resetError(state, action) {
      (state.status = ''), (state.error = []);
    },
  },
  extraReducers: {
    [sendMessage.fulfilled]: (state, action) => {
      state.status = action.payload;
      state.loading = false;
      state.error = [];
    },
    [sendMessage.pending]: (state, action) => {
      state.status = '';
      state.loading = true;
      state.error = [];
    },
    [sendMessage.rejected]: (state, action) => {
      state.status = '';
      state.loading = false;
      state.error = action.payload;
    },
  },
});
export const {resetError} = ContactReducer.actions;
export default ContactReducer.reducer;

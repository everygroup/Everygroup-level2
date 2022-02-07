import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';

import AsyncStorageLib from '@react-native-async-storage/async-storage';

const baseUrl = 'http://203.190.153.22:1639/api/v1';

const initialState = {
  loading: false,
  notificationData: {},
  error: '',
};

export const getNotification = createAsyncThunk(
  'getNotification',
  async (data, {rejectWithValue}) => {
    const token = await AsyncStorageLib.getItem('token');
    try {
      const response = await axios({
        method: 'get',
        headers: {Authorization: `Bearer ${token}`},
        url: `${baseUrl}/notifications`,
      });

      return response.data;
    } catch (err) {
      return rejectWithValue(Object.values(err.response.data));
    }
  },
);

export const updateNotification = createAsyncThunk(
  'updateNotification',
  async (data, {rejectWithValue}) => {
    console.log(data);
    const token = await AsyncStorageLib.getItem('token');
    try {
      const response = await axios({
        method: 'post',
        headers: {Authorization: `Bearer ${token}`},
        url: `${baseUrl}/notifications`,
        data,
      });
      console.log(response, 'no');
      return data;
    } catch (err) {
      console.log(err.response, 'error');
      return rejectWithValue(Object.values(err.response.data));
    }
  },
);

export const NotificationReducer = createSlice({
  name: 'NotificationReducer',
  initialState,
  reducers: {},
  extraReducers: {
    [getNotification.fulfilled]: (state, action) => {
      state.notificationData = action.payload;
    },
    [getNotification.pending]: (state, action) => {},
    [getNotification.rejected]: (state, action) => {},
    [updateNotification.fulfilled]: (state, action) => {
      const value = Object.keys(action.payload);
      const value2 = Object.values(action.payload);
      console.log(value[0]);
      state.notificationData[value[0]] = value2[0];
    },
    [updateNotification.pending]: (state, action) => {},
    [updateNotification.rejected]: (state, action) => {},
  },
});

export default NotificationReducer.reducer;

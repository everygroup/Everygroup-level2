import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';

import AsyncStorageLib from '@react-native-async-storage/async-storage';

const baseUrl = 'http://203.190.153.22:1639/api/v1';

const initialState = {
  loading: false,
  notificationData: {},
  error: '',
  boostListNotify: [],
  muteSuccess: '',
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

      return data;
    } catch (err) {
      return rejectWithValue(Object.values(err.response.data));
    }
  },
);

export const boostNotificationList = createAsyncThunk(
  'boostNotificationList',
  async (data, {rejectWithValue}) => {
    const token = await AsyncStorageLib.getItem('token');
    try {
      const response = await axios({
        method: 'get',
        headers: {Authorization: `Bearer ${token}`},
        url: `${baseUrl}/group/boost-user`,
      });

      return response.data.results;
    } catch (err) {
      return rejectWithValue(Object.values(err.response.data));
    }
  },
);

export const removeBoostNotificationList = createAsyncThunk(
  'removeBoostNotificationList',
  async (data, {rejectWithValue}) => {
    const token = await AsyncStorageLib.getItem('token');
    try {
      const response = await axios({
        method: 'patch',
        headers: {Authorization: `Bearer ${token}`},
        url: `${baseUrl}/group/boost-user/${data.itemId}`,
        data: {
          notification: data.status,
        },
      });
      console.log(response, 'response');
      return response.data;
    } catch (err) {
      console.log(err.response, 'error asdf');
      return rejectWithValue(Object.values(err.response.data));
    }
  },
);

export const NotificationReducer = createSlice({
  name: 'NotificationReducer',
  initialState,
  reducers: {
    resetMuteStatus(state, action) {
      state.muteSuccess = '';
    },
  },
  extraReducers: {
    [getNotification.fulfilled]: (state, action) => {
      state.notificationData = action.payload;
    },
    [getNotification.pending]: (state, action) => {},
    [getNotification.rejected]: (state, action) => {},
    [updateNotification.fulfilled]: (state, action) => {
      const value = Object.keys(action.payload);
      const value2 = Object.values(action.payload);

      state.notificationData[value[0]] = value2[0];
    },
    [updateNotification.pending]: (state, action) => {},
    [updateNotification.rejected]: (state, action) => {},
    [boostNotificationList.fulfilled]: (state, action) => {
      state.boostListNotify = action.payload;
    },
    [removeBoostNotificationList.fulfilled]: (state, action) => {
      state.muteSuccess = 'success';
      state.boostListNotify.splice(
        state.boostListNotify.findIndex(el => el.id == action.payload.id),
      );
    },
    [removeBoostNotificationList.pending]: (state, action) => {
      state.muteSuccess = '';
    },
    [removeBoostNotificationList.rejected]: (state, action) => {
      state.muteSuccess = '';
    },
  },
});
export const {resetMuteStatus} = NotificationReducer.actions;
export default NotificationReducer.reducer;

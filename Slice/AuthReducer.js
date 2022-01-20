import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AsyncStorageLib from '@react-native-async-storage/async-storage';

const baseUrl = 'http://203.190.153.22:1639/api/v1';

const initialState = {
  token: '',
  error: '',
  loading: false,
  register: '',
  forgotResponse: '',
  remember_snapchat: true,
};

export const signInUser = createAsyncThunk(
  'signIn',
  async (data, {rejectWithValue}) => {
    try {
      const response = await axios({
        method: 'post',
        url: `${baseUrl}/login`,
        data: {
          email: data.email,
          password: data.password,
        },
      });
      console.log(response, 'signin Response');
      await AsyncStorageLib.setItem('token', response.data.access);
      return response.data;
    } catch (err) {
      console.log(err, 'signin');
      return rejectWithValue(Object.values(err.response.data).toString());
    }
  },
);

export const registerUser = createAsyncThunk(
  'register',
  async (data, {rejectWithValue}) => {
    try {
      const response = await axios({
        method: 'post',
        url: `${baseUrl}/register`,
        data: {
          username: data.userName,
          email: data.email,
          password: data.password,
          promotable: data.promotional,
        },
      });
      console.log(response, 'auth resposne');
    } catch (err) {
      console.log(err.response, 'error');
      const errorr = err.response.data;

      return rejectWithValue(errorr);
    }
  },
);

export const forgotPassword = createAsyncThunk(
  'forgotPassword',
  async (data, {rejectWithValue}) => {
    try {
      const response = await axios({
        method: 'post',
        url: `${baseUrl}/forgot-password`,
        data: {
          email: data.email,
        },
      });
    } catch (err) {
      return rejectWithValue(Object.values(err.response.data).toString());
    }
  },
);

export const updateRememberSnapChat = createAsyncThunk(
  'UpdateRememberSnapChat',
  async (data, {rejectWithValue}) => {
    const token = await AsyncStorage.getItem('token');
    try {
      const response = await axios({
        headers: {Authorization: `Bearer ${token}`},
        method: 'post',
        url: `${baseUrl}/remember-snapchat`,
      });
      return response.data;
    } catch (err) {
      return rejectWithValue(Object.values(err.response.data).toString());
    }
  },
);

export const authReducer = createSlice({
  name: 'user',
  initialState,
  reducers: {
    resetToken(state, action) {
      state.token = '';
    },
    resetForgotResponse(state, action) {
      state.forgotResponse = '';
    },
  },
  extraReducers: {
    [signInUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.token = action.payload.access;
      state.remember_snapchat = action.payload.remember_snapchat;
    },
    [signInUser.pending]: (state, action) => {
      state.loading = true;
      state.error = '';
      state.token = '';
    },
    [signInUser.rejected]: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    [registerUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.error = [];
      state.register = 'success';
    },
    [registerUser.pending]: (state, action) => {
      state.loading = true;
      state.error = [];
      state.token = '';
    },
    [registerUser.rejected]: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    [forgotPassword.fulfilled]: (state, action) => {
      state.loading = false;
      state.error = [];
      state.forgotResponse = 'success';
    },
    [forgotPassword.pending]: (state, action) => {
      state.loading = true;
      state.error = [];
    },
    [forgotPassword.rejected]: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    [updateRememberSnapChat.fulfilled]: (state, action) => {
      state.remember_snapchat = action.payload.remember_snapchat;
    },
  },
});

export const {resetToken, resetForgotResponse} = authReducer.actions;

export default authReducer.reducer;

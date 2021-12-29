import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';

const baseUrl = 'http://203.190.153.22:1639/api/v1';

const initialState = {
  token: '',
  error: '',
  loading: false,
  register: '',
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
      return response.data;
    } catch (err) {
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
    } catch (err) {
      const errorr = err.response.data;

      return rejectWithValue(errorr);
    }
  },
);

export const authReducer = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: {
    [signInUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.token = action.payload.access;
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
  },
});

export default authReducer.reducer;

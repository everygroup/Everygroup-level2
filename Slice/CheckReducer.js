import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const baseUrl = 'http://203.190.153.22:1639/api/v1';

const initialState = {
  loading: false,
  error: '',
  value: '',
};

export const checkPassword = createAsyncThunk(
  'checkPassword',
  async (data, {rejectWithValue}) => {
    const token = await AsyncStorage.getItem('token');
    try {
      const response = await axios({
        method: 'post',
        headers: {Authorization: `Bearer ${token}`},
        url: `${baseUrl}/check-password`,
        data: {
          password: data.passwordText,
        },
      });

      return response.data;
    } catch (err) {
      return rejectWithValue(Object.values(err.response.data));
    }
  },
);

export const checkReducer = createSlice({
  name: 'checkUserPassword',
  initialState,
  reducers: {},
  extraReducers: {
    [checkPassword.fulfilled]: (state, action) => {
      state.loading = false;
      state.value = 'success';
    },
    [checkPassword.pending]: (state, action) => {
      state.loading = true;
      state.error = '';
      state.value = '';
    },
    [checkPassword.rejected]: (state, action) => {
      state.error = action.payload;
      state.loading = false;
      state.value = '';
    },
  },
});

export default checkReducer.reducer;

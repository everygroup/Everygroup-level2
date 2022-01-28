import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import AsyncStorageLib from '@react-native-async-storage/async-storage';

const baseUrl = 'http://203.190.153.22:1639/api/v1';

const initialState = {
  token: '',
  error: '',
  loading: false,
  remember_snapchat: true,
};

export const ActivateUser = createAsyncThunk(
  'activateUser',
  async (data, {rejectWithValue}) => {
    try {
      const response = await axios({
        method: 'post',
        url: `${baseUrl}/user-activate`,
        data: {
          user_id: data,
          is_active: true,
        },
      });
      await AsyncStorageLib.setItem('token', response.data.access);
      await AsyncStorageLib.setItem(
        'tutorial',
        response.data.random_mode_tutorial_status.toString(),
      );
      return response.data;
    } catch (err) {
      console.log(err.response, 'activate error');

      return rejectWithValue(Object.values(err.response.data).toString());
    }
  },
);

export const ActivateUserReducer = createSlice({
  name: 'ActivateUserReducer',
  initialState,
  reducers: {},
  extraReducers: {
    [ActivateUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.token = action.payload.access;
      state.remember_snapchat = action.payload.remember_snapchat;
    },
    [ActivateUser.pending]: (state, action) => {
      state.loading = true;
      state.error = '';
    },
    [ActivateUser.rejected]: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export default ActivateUserReducer.reducer;

import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const baseUrl = 'http://203.190.153.22:1639/api/v1';

const initialState = {
  loading: false,
  error: '',
  value: '',
};

export const changeProfile = createAsyncThunk(
  'changeProfile',
  async (data, {rejectWithValue}) => {
    const token = await AsyncStorage.getItem('token');
    try {
      const response = await axios({
        method: 'patch',
        headers: {Authorization: `Bearer ${token}`},
        url: `${baseUrl}/change-profile-details`,
        data: {
          password: data.password,
          email: data.emailText,
          username: data.userNameText,
        },
      });

      return response.data;
    } catch (err) {
      return rejectWithValue(Object.values(err.response.data));
    }
  },
);

export const ProfileReducer = createSlice({
  name: 'ProfileReducer',
  initialState,
  reducers: {},
  extraReducers: {
    [changeProfile.fulfilled]: (state, action) => {
      state.loading = false;
      state.value = 'success';
    },
    [changeProfile.pending]: (state, action) => {
      state.loading = true;
      state.error = '';
      state.value = '';
    },
    [changeProfile.rejected]: (state, action) => {
      state.error = action.payload;
      state.loading = false;
      state.value = '';
    },
  },
});

export default ProfileReducer.reducer;

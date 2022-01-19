import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const baseUrl = 'http://203.190.153.22:1639/api/v1';

const initialState = {
  userGroupData: [],
  error: '',
  loading: false,
};

export const getUserGroup = createAsyncThunk(
  'getUserGroup',
  async (data, {rejectWithValue}) => {
    const token = await AsyncStorage.getItem('token');

    try {
      const response = await axios({
        method: 'get',
        headers: {Authorization: `Bearer ${token}`},
        url: `${baseUrl}/group/`,
      });
      return response.data.results;
    } catch (err) {
      return rejectWithValue(Object.values(err.response.data));
    }
  },
);

export const deleteGroup = createAsyncThunk(
  'deleteGroup',
  async (data, {rejectWithValue}) => {
    const token = await AsyncStorage.getItem('token');
    try {
      const response = await axios({
        method: 'delete',
        headers: {Authorization: `Bearer ${token}`},
        url: `${baseUrl}/group/${data}`,
      });
      return data;
    } catch (err) {
      return rejectWithValue(err.response.data.detail);
    }
  },
);

export const UserGroupReducer = createSlice({
  name: 'UserGroupReducer',
  initialState,
  reducers: {},
  extraReducers: {
    [getUserGroup.fulfilled]: (state, action) => {
      state.userGroupData = action.payload;
      state.loading = false;
    },
    [getUserGroup.pending]: (state, action) => {
      state.loading = true;
      state.error = '';
    },
    [getUserGroup.rejected]: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    [deleteGroup.fulfilled]: (state, action) => {
      state.userGroupData.splice(
        state.userGroupData.findIndex(el => el.id === action.payload),
        1,
      );
      state.loading = false;
    },
  },
});

export default UserGroupReducer.reducer;

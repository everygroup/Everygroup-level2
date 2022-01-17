import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const baseUrl = 'http://203.190.153.22:1639/api/v1';

const initialState = {
  otherUserGroupList: [],
  error: '',
  loading: false,
};

export const getOtherUserGroup = createAsyncThunk(
  'getOtherUserGroupList',
  async (data, {rejectWithValue}) => {
    const token = await AsyncStorage.getItem('token');

    try {
      const response = await axios({
        method: 'get',
        headers: {Authorization: `Bearer ${token}`},
        url: `${baseUrl}/group/user/${data}`,
      });
      console.log(response, 'list response');
      return response.data.results;
    } catch (err) {
      console.log(err.response, 'reposef');
      return rejectWithValue(Object.values(err.response.data));
    }
  },
);

export const OtherUserGroupReducer = createSlice({
  name: 'OtherUserGroupReducer',
  initialState,
  reducers: {},
  extraReducers: {
    [getOtherUserGroup.fulfilled]: (state, action) => {
      state.otherUserGroupList = action.payload;
      state.loading = false;
    },
    [getOtherUserGroup.pending]: (state, action) => {
      state.loading = true;
      state.error = '';
    },
    [getOtherUserGroup.rejected]: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export default OtherUserGroupReducer.reducer;

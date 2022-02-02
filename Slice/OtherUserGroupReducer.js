import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const baseUrl = 'http://203.190.153.22:1639/api/v1';

const initialState = {
  otherUserGroupList: [],
  error: '',
  loader: false,
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

      return response.data.results;
    } catch (err) {
      return rejectWithValue(Object.values(err.response.data));
    }
  },
);

export const OtherUserGroupReducer = createSlice({
  name: 'OtherUserGroupReducer',
  initialState,
  reducers: {},
  extraReducers: {
    [getOtherUserGroup.pending]: (state, action) => {
      state.loader = true;
      state.error = '';
    },
    [getOtherUserGroup.fulfilled]: (state, action) => {
      state.otherUserGroupList = action.payload;
      state.loader = false;
    },

    [getOtherUserGroup.rejected]: (state, action) => {
      state.error = action.payload;
      state.loader = false;
    },
  },
});

export default OtherUserGroupReducer.reducer;

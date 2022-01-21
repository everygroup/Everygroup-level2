import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import AsyncStorageLib from '@react-native-async-storage/async-storage';

const baseUrl = 'http://203.190.153.22:1639/api/v1';

const initialState = {
  groupData: [],
  error: '',
  loading: false,
  similarGroupList: [],
};

export const getAllGroup = createAsyncThunk(
  'getAllGroup',
  async (data, {rejectWithValue}) => {
    const token = await AsyncStorageLib.getItem('token');

    try {
      const response = await axios({
        method: 'get',
        headers: {Authorization: `Bearer ${token}`},
        url: `${baseUrl}/group/all`,
      });

      return response.data.results;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  },
);

export const getSimilarGroupList = createAsyncThunk(
  'getSimilarGroup',
  async (data, {rejectWithValue}) => {
    console.log(data, 'data');
    const token = await AsyncStorageLib.getItem('token');
    const cat = data.map(value => value.slug);
    console.log(cat.toString(), 'cat', token);

    try {
      const response = await axios({
        method: 'get',
        headers: {Authorization: `Bearer ${token}`},
        url: `${baseUrl}/group/similar-category?q=${cat.toString()}`,
      });
      console.log(response, 'similar result');
      return response.data.results;
    } catch (err) {
      console.log(err, 'similar error');
      return rejectWithValue(err.response.data);
    }
  },
);

export const AllGroupListReducer = createSlice({
  name: 'AllGroupListReducer',
  initialState,
  reducers: {},
  extraReducers: {
    [getAllGroup.fulfilled]: (state, action) => {
      state.loading = false;
      state.groupData = action.payload;
    },
    [getAllGroup.pending]: (state, action) => {
      state.loading = true;
      state.error = '';
      state.groupData = [];
    },
    [getAllGroup.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.groupData = [];
    },
    [getSimilarGroupList.fulfilled]: (state, action) => {
      state.similarGroupList = action.payload;
    },
  },
});

export default AllGroupListReducer.reducer;

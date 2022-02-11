import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import AsyncStorageLib from '@react-native-async-storage/async-storage';

const baseUrl = 'http://203.190.153.22:1639/api/v1';

const initialState = {
  groupData: [],
  error: '',
  loading: false,
  similarGroupList: [],
  trendingData: [],
  trendingError: '',
  nextUrl: '',
  previousUrl: '',
};

export const getAllGroup = createAsyncThunk(
  'getAllGroup',
  async (data, {rejectWithValue}) => {
    const token = await AsyncStorageLib.getItem('token');

    try {
      const response = await axios({
        method: 'get',
        headers: {Authorization: `Bearer ${token}`},
        url: data != undefined ? data : `${baseUrl}/group/all?limit=8`,
      });

      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  },
);
export const getTrendingGroup = createAsyncThunk(
  'getTrendingGroup',
  async (data, {rejectWithValue}) => {
    const token = await AsyncStorageLib.getItem('token');

    try {
      const response = await axios({
        method: 'get',
        headers: {Authorization: `Bearer ${token}`},
        url: `${baseUrl}/group/all`,
      });
      const array = response.data.results.filter(el => {
        return el.trend_status !== false;
      });
      return array;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  },
);

export const getSimilarGroupList = createAsyncThunk(
  'getSimilarGroup',
  async (data, {rejectWithValue}) => {
    const token = await AsyncStorageLib.getItem('token');
    const cat = data.map(value => value.slug);

    try {
      const response = await axios({
        method: 'get',
        headers: {Authorization: `Bearer ${token}`},
        url: `${baseUrl}/group/similar-category?q=${cat.toString()}`,
      });

      return response.data.results;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  },
);

export const AllGroupListReducer = createSlice({
  name: 'AllGroupListReducer',
  initialState,

  reducers: {
    updateUserFavStatusInlist(state, action) {
      state.groupData = state.groupData.map(el => {
        if (el.id == action.payload.groupId) {
          el.group_favourite_status = action.payload.data;
        }
        return el;
      });
    },
  },
  extraReducers: {
    [getAllGroup.fulfilled]: (state, action) => {
      // state.loading = false;
      (state.nextUrl = action.payload.next),
        (state.previousUrl = action.payload.previous),
        (state.groupData = action.payload.results);
    },
    [getAllGroup.pending]: (state, action) => {
      // state.loading = true;
      state.error = '';
    },
    [getAllGroup.rejected]: (state, action) => {
      // state.loading = false;
      state.error = action.payload;
    },
    [getSimilarGroupList.fulfilled]: (state, action) => {
      state.similarGroupList = action.payload;
    },
    [getTrendingGroup.fulfilled]: (state, action) => {
      state.trendingData = action.payload;
      state.loading = false;
    },
    [getTrendingGroup.pending]: (state, action) => {
      state.trendingError = '';
      state.loading = true;
    },
    [getTrendingGroup.rejected]: (state, action) => {
      state.trendingError = action.payload;
      state.loading = false;
    },
  },
});

export const {updateUserFavStatusInlist} = AllGroupListReducer.actions;

export default AllGroupListReducer.reducer;

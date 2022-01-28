import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const baseUrl = 'http://203.190.153.22:1639/api/v1';

const initialState = {
  randomeList: [],
  loading: false,
  error: '',
  fromDate: '',
};

export const getRandomeList = createAsyncThunk(
  'getRandomeList',
  async (data, {rejectWithValue}) => {
    const token = await AsyncStorage.getItem('token');

    try {
      const response = await axios({
        params: {
          from_date: data.fromDate,
          language: data.systemLang,
          group_type: data.groupType,
        },
        method: 'get',
        headers: {Authorization: `Bearer ${token}`},
        url: `${baseUrl}/group/feed`,
      });
      console.log(response, 'feed page');
      return response.data;
    } catch (err) {
      console.log(err.response, 'error page');
      return rejectWithValue(err.response.data.message);
    }
  },
);

export const seenGroup = createAsyncThunk(
  'seenGroup',
  async (data, {rejectWithValue}) => {
    const token = await AsyncStorage.getItem('token');

    try {
      const response = await axios({
        method: 'post',
        headers: {Authorization: `Bearer ${token}`},
        url: `${baseUrl}/group/seen-feed`,
        data: {
          group: data,
        },
      });

      return response.data;
    } catch (err) {
      return rejectWithValue(err.response);
    }
  },
);

export const RandomeReducer = createSlice({
  name: 'RandomeReducer',
  initialState,
  reducers: {
    resetErrorValue(state, action) {
      state.error = '';
    },
  },
  extraReducers: {
    [getRandomeList.fulfilled]: (state, action) => {
      state.randomeList = action.payload.result;
      state.loading = false;
      state.fromDate = action.payload.from_date;
      state.error = '';
    },
    [getRandomeList.pending]: (state, action) => {
      state.loading = true;
      state.error = '';
    },
    [getRandomeList.rejected]: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const {resetErrorValue} = RandomeReducer.actions;

export default RandomeReducer.reducer;

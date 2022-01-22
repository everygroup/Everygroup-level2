import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const baseUrl = 'http://203.190.153.22:1639/api/v1';

const initialState = {
  randomeList: [],
  loading: false,
  error: '',
};

export const getRandomeList = createAsyncThunk(
  'getRandomeList',
  async (data, {rejectWithValue}) => {
    const token = await AsyncStorage.getItem('token');

    try {
      const response = await axios({
        method: 'get',
        headers: {Authorization: `Bearer ${token}`},
        url: `${baseUrl}/group/feed`,
      });

      return response.data.results;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  },
);

export const RandomeReducer = createSlice({
  name: 'RandomeReducer',
  initialState,
  reducers: {},
  extraReducers: {
    [getRandomeList.fulfilled]: (state, action) => {
      state.randomeList = action.payload;
      state.loading = false;
    },
    [getRandomeList.pending]: (state, action) => {
      state.randomeList = [];
      state.loading = true;
      state.error = '';
    },
    [getRandomeList.rejected]: (state, action) => {
      state.error = action.payload;
      state.loading = false;
      state.randomeList = [];
    },
  },
});

export default RandomeReducer.reducer;

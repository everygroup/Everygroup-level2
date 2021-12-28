import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const baseUrl = 'http://203.190.153.22:1639/api/v1';

const initialState = {
  categoryArray: [],
  error: '',
  loading: false,
};

export const getCategory = createAsyncThunk(
  'getCategory',
  async (data, {rejectWithValue}) => {
    // console.log(data);

    const token = await AsyncStorage.getItem('token');
    console.log(token, 'token');
    try {
      const response = await axios({
        method: 'get',
        headers: {Authorization: `Bearer ${token}`},
        url: `${baseUrl}/group/category`,
      });
      console.log(response, 'category');
      return response.data.results;
    } catch (err) {
      console.log(err);
      return rejectWithValue(Object.values(err.response.data));
    }
  },
);

export const CategoryReducer = createSlice({
  name: 'CategoryReducer',
  initialState,
  reducers: {},
  extraReducers: {
    [getCategory.fulfilled]: (state, action) => {
      state.categoryArray = action.payload;
    },
    [getCategory.pending]: (state, action) => {
      state.loading = true;
      state.error = '';
    },
    [getCategory.rejected]: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export default CategoryReducer.reducer;

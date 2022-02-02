import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import AsyncStorageLib from '@react-native-async-storage/async-storage';

const baseUrl = 'http://203.190.153.22:1639/api/v1';

const initialState = {
  searchResult: [],
  error: '',
  loading: false,
};

export const getSearchResult = createAsyncThunk(
  'getResult',
  async (data, {rejectWithValue}) => {
    const token = await AsyncStorageLib.getItem('token');

    try {
      const response = await axios({
        method: 'post',
        headers: {Authorization: `Bearer ${token}`},
        url: `${baseUrl}/group/search`,
        data: {
          query: data.query,
          group_type: data.selectedMessenger,
          group_category: data.shortCategory,
          group_language: data.shortLanguage,
        },
      });
      console.log(response, 'se resul');
      return response.data.results;
    } catch (err) {
      console.log(err.response, 'error');
      return rejectWithValue(Object.values(err.response.data));
    }
  },
);

export const SearchResultReducer = createSlice({
  name: 'SearchResultReducer',
  initialState,
  reducers: {},
  extraReducers: {
    [getSearchResult.fulfilled]: (state, action) => {
      state.searchResult = action.payload;
      state.loading = false;
    },
    [getSearchResult.pending]: (state, action) => {
      state.loading = true;
      state.error = '';
    },
    [getSearchResult.rejected]: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export default SearchResultReducer.reducer;

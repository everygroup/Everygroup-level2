import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const baseUrl = 'http://203.190.153.22:1639/api/v1';

const initialState = {
  getAllSearch: [],
  error: [],
  loading: false,
  searchSuccess: false,
};

export const saveSearch = createAsyncThunk(
  'saveSearch',
  async (data, {rejectWithValue}) => {
    const token = await AsyncStorage.getItem('token');

    try {
      const response = await axios({
        method: 'post',
        headers: {Authorization: `Bearer ${token}`},
        url: `${baseUrl}/favourite-search`,
        data: {
          query: data.query,
          group_type: data.groupType,
          group_category: data.groupCategory,
          group_language: data.groupLanguage,
        },
      });

      return response.status;
    } catch (err) {
      return rejectWithValue(Object.values(err.response.data));
    }
  },
);
export const getSearch = createAsyncThunk(
  'getSearch',
  async (data, {rejectWithValue}) => {
    const token = await AsyncStorage.getItem('token');
    try {
      const response = await axios({
        method: 'get',
        headers: {Authorization: `Bearer ${token}`},
        url: `${baseUrl}/favourite-search`,
      });
      console.log(response, 'get all search');
      return response.data.results;
    } catch (err) {
      return rejectWithValue(Object.values(err.response.data));
    }
  },
);

export const deleteSearch = createAsyncThunk(
  'deleteSearch',
  async (data, {rejectWithValue}) => {
    const token = await AsyncStorage.getItem('token');
    try {
      const response = await axios({
        method: 'delete',
        headers: {Authorization: `Bearer ${token}`},
        url: `${baseUrl}/favourite-search/${data}`,
      });

      return data;
    } catch (err) {
      return rejectWithValue(Object.values(err.response.data));
    }
  },
);

export const SearchReducer = createSlice({
  name: 'SearchReducer',
  initialState,
  reducers: {
    resetSearchValue(state, action) {
      state.error = [];
    },
  },
  extraReducers: {
    [saveSearch.fulfilled]: (state, action) => {
      state.categoryArray = action.payload;
      state.loading = false;
      state.searchSuccess = true;
    },
    [saveSearch.pending]: (state, action) => {
      state.loading = true;
      state.error = '';
    },
    [saveSearch.rejected]: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    [getSearch.fulfilled]: (state, action) => {
      state.getAllSearch = action.payload;
      state.loading = false;
    },
    [getSearch.pending]: (state, action) => {
      state.loading = true;
      state.error = '';
    },
    [getSearch.rejected]: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    [deleteSearch.fulfilled]: (state, action) => {
      state.loading = false;
      state.getAllSearch.splice(
        state.getAllSearch.findIndex(el => el.id === action.payload),
        1,
      );
    },
    [deleteSearch.pending]: (state, action) => {
      state.loading = true;
      state.error = '';
    },
    [deleteSearch.rejected]: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});
export const {resetSearchValue} = SearchReducer.actions;
export default SearchReducer.reducer;

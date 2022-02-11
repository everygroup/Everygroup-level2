import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import AsyncStorageLib from '@react-native-async-storage/async-storage';

const baseUrl = 'http://203.190.153.22:1639/api/v1';

const initialState = {
  favouriteGroupList: [],
  favouriteError: '',
  value: '',
  loading: '',
  dataLoading: false,
};

export const favouriteGroup = createAsyncThunk(
  'favouriteGroup',
  async (data, {rejectWithValue}) => {
    const token = await AsyncStorageLib.getItem('token');
    try {
      const response = await axios({
        method: 'post',
        headers: {Authorization: `Bearer ${token}`},
        url: `${baseUrl}/favourite-group`,
        data: {
          group_id: data,
        },
      });

      return response.data.favourite_group;
    } catch (err) {
      return rejectWithValue(Object.values(err.response.data));
    }
  },
);

export const getFavouriteGroup = createAsyncThunk(
  'getFavouriteGroup',
  async (data, {rejectWithValue}) => {
    const token = await AsyncStorageLib.getItem('token');
    try {
      const response = await axios({
        method: 'get',
        headers: {Authorization: `Bearer ${token}`},
        url: `${baseUrl}/favourite-group`,
      });

      return response.data.results;
    } catch (err) {
      return rejectWithValue(Object.values(err.response.data));
    }
  },
);
export const deleteFavouriteGroup = createAsyncThunk(
  'deleteFavouriteGroup',
  async (data, {rejectWithValue}) => {
    const token = await AsyncStorageLib.getItem('token');
    try {
      const response = await axios({
        method: 'delete',
        headers: {Authorization: `Bearer ${token}`},
        url: `${baseUrl}/favourite-group/${data}`,
      });

      return data;
    } catch (err) {
      return rejectWithValue(Object.values(err.response.data));
    }
  },
);

export const FavouriteGroupReducer = createSlice({
  name: 'FavouriteGroupReducer',
  initialState,
  reducers: {
    resetFavStatus(state, action) {
      state.value = '';
    },
  },
  extraReducers: {
    [favouriteGroup.fulfilled]: (state, action) => {
      state.value = 'success';
      state.favouriteError = '';
      state.loading = false;
    },
    [favouriteGroup.pending]: (state, action) => {
      state.value = '';
      state.favouriteError = '';
      state.loading = true;
    },
    [favouriteGroup.rejected]: (state, action) => {
      state.favouriteError = action.payload;
      state.value = '';
      state.loading = false;
    },
    [getFavouriteGroup.fulfilled]: (state, action) => {
      state.favouriteGroupList = action.payload;
      state.dataLoading = false;
    },
    [getFavouriteGroup.pending]: (state, action) => {
      state.favouriteGroupList = [];
      state.dataLoading = true;
    },
    [getFavouriteGroup.rejected]: (state, action) => {
      state.favouriteGroupList = [];
      state.dataLoading = false;
    },

    [deleteFavouriteGroup.fulfilled]: (state, action) => {
      state.favouriteGroupList.splice(
        state.favouriteGroupList.findIndex(el => el.id === action.payload),
        1,
      );
      // state.favouriteGroupList = action.payload;
    },
  },
});
export const {resetFavStatus} = FavouriteGroupReducer.actions;
export default FavouriteGroupReducer.reducer;

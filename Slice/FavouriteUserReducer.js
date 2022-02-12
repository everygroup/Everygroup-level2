import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import AsyncStorageLib from '@react-native-async-storage/async-storage';

const baseUrl = 'http://203.190.153.22:1639/api/v1';

const initialState = {
  loading: false,
  error: '',
  value: '',
  getDataError: '',
  getDataLoading: false,
  getFavouriteData: [],
  deleteLoading: false,
  deleteError: '',
  deleteUser: '',
};

export const favouriteUser = createAsyncThunk(
  'favouriteUser',
  async (data, {rejectWithValue}) => {
    const token = await AsyncStorageLib.getItem('token');
    try {
      const response = await axios({
        method: 'post',
        headers: {Authorization: `Bearer ${token}`},
        url: `${baseUrl}/favourite-person`,
        data: {
          favourite_user_id: data,
          notification: true,
        },
      });

      return response.data;
    } catch (err) {
      return rejectWithValue(Object.values(err.response.data));
    }
  },
);

export const getFavouriteUsers = createAsyncThunk(
  'getFavouriteUsers',
  async (data, {rejectWithValue}) => {
    const token = await AsyncStorageLib.getItem('token');
    try {
      const response = await axios({
        method: 'get',
        headers: {Authorization: `Bearer ${token}`},
        url: `${baseUrl}/favourite-person`,
      });

      return response.data.results;
    } catch (err) {
      return rejectWithValue(Object.values(err.response.data));
    }
  },
);

export const deleteFavouriteUser = createAsyncThunk(
  'deleteFavouriteUser',
  async (data, {rejectWithValue}) => {
    const token = await AsyncStorageLib.getItem('token');
    try {
      const response = await axios({
        method: 'delete',
        headers: {Authorization: `Bearer ${token}`},
        url: `${baseUrl}/favourite-person/${data}`,
      });

      return data;
    } catch (err) {
      return rejectWithValue(Object.values(err.response.data));
    }
  },
);

export const updatePersonNotification = createAsyncThunk(
  'updatePersonNotification',
  async (data, {rejectWithValue}) => {
    const token = await AsyncStorageLib.getItem('token');
    try {
      const response = await axios({
        method: 'patch',
        headers: {Authorization: `Bearer ${token}`},
        url: `${baseUrl}/favourite-person/${data.id}`,
        data: {
          notification: data.value,
        },
      });

      return data;
    } catch (err) {
      return rejectWithValue(Object.values(err.response.data));
    }
  },
);

export const FavouriteUserReducer = createSlice({
  name: 'FavouriteUserReducer',
  initialState,
  reducers: {
    resetFavouriteValue(state, action) {
      state.value = '';
      state.error = '';
    },
  },
  extraReducers: {
    [favouriteUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.value = 'success';
    },
    [favouriteUser.pending]: (state, action) => {
      state.loading = true;
      state.error = '';
      state.value = '';
    },
    [favouriteUser.rejected]: (state, action) => {
      state.error = action.payload;
      state.loading = false;
      state.value = '';
    },
    [getFavouriteUsers.fulfilled]: (state, action) => {
      state.getDataLoading = false;
      state.getFavouriteData = action.payload;
    },
    [getFavouriteUsers.pending]: (state, action) => {
      state.getDataLoading = true;
      state.getDataError = '';
    },
    [getFavouriteUsers.rejected]: (state, action) => {
      state.getDataError = action.payload;
      state.getDataLoading = false;
    },
    [deleteFavouriteUser.fulfilled]: (state, action) => {
      state.deleteLoading = false;
      state.deleteUser = 'success';
      state.getFavouriteData.splice(
        state.getFavouriteData.findIndex(el => el.id === action.payload),
        1,
      );
    },
    [deleteFavouriteUser.pending]: (state, action) => {
      state.deleteLoading = true;
      state.deleteError = '';
    },
    [deleteFavouriteUser.rejected]: (state, action) => {
      state.deleteError = action.payload;
      state.deleteLoading = false;
    },

    [updatePersonNotification.fulfilled]: (state, action) => {
      state.getDataLoading = false;
      state.getFavouriteData.map(el => {
        if (el.id == action.payload.id) {
          el.notification = action.payload.value;
        }
        return el;
      });
    },
    [updatePersonNotification.pending]: (state, action) => {},
    [updatePersonNotification.rejected]: (state, action) => {},
  },
});

export const {resetFavouriteValue} = FavouriteUserReducer.actions;

export default FavouriteUserReducer.reducer;

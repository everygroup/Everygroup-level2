import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const baseUrl = 'http://203.190.153.22:1639/api/v1';

const initialState = {
  deleteOption: [],
};

export const getDeleteOption = createAsyncThunk(
  'getDeleteOption',
  async (data, {rejectWithValue}) => {
    const token = await AsyncStorage.getItem('token');

    try {
      const response = await axios({
        method: 'get',
        headers: {Authorization: `Bearer ${token}`},
        url: `${baseUrl}/reason`,
      });
      console.log(response, 'delete responser');
      return response.data.results;
    } catch (err) {
      console.log(err.response, 'error delete');
      return rejectWithValue(Object.values(err.response.data));
    }
  },
);

export const GetDeleteUserOptionReducer = createSlice({
  name: 'GetDeleteUserOptionReducer',
  initialState,
  reducers: {},
  extraReducers: {
    [getDeleteOption.fulfilled]: (state, action) => {
      state.deleteOption = action.payload;
    },
    [getDeleteOption.pending]: (state, action) => {},
    [getDeleteOption.rejected]: (state, action) => {},
  },
});

export default GetDeleteUserOptionReducer.reducer;

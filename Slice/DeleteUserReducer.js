import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const baseUrl = 'http://203.190.153.22:1639/api/v1';

const initialState = {
  deleteAccount: '',
};

export const deleteUser = createAsyncThunk(
  'deleteUser',
  async (data, {rejectWithValue}) => {
    const token = await AsyncStorage.getItem('token');

    try {
      const response = await axios({
        method: 'post',
        headers: {Authorization: `Bearer ${token}`},
        url: `${baseUrl}/delete-user`,
        data: {
          reason: data.selectedReason,
          other_reason_description: data.otherText,
        },
      });

      return response.status;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  },
);

export const DeleteUserReducer = createSlice({
  name: 'DeleteUserReducer',
  initialState,
  reducers: {},
  extraReducers: {
    [deleteUser.fulfilled]: (state, action) => {
      state.deleteAccount = 'success';
    },
    [deleteUser.pending]: (state, action) => {},
    [deleteUser.rejected]: (state, action) => {},
  },
});

export default DeleteUserReducer.reducer;

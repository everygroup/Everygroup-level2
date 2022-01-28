import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const baseUrl = 'http://203.190.153.22:1639/api/v1';

const initialState = {
  deleteAccount: '',
  error: '',
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
      console.log(response, 'delete user');
      return response.status;
    } catch (err) {
      console.log(err.response, 'error delete');
      return rejectWithValue(Object.values(err.response.data).toString());
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
    [deleteUser.rejected]: (state, action) => {
      state.error = action.payload;
    },
  },
});

export default DeleteUserReducer.reducer;

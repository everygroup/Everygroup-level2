import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import AsyncStorageLib from '@react-native-async-storage/async-storage';

const baseUrl = 'http://203.190.153.22:1639/api/v1';

const initialState = {
  flagError: '',
  flagLoading: false,
  status: '',
};

export const reportGroup = createAsyncThunk(
  'reportGroup',
  async (data, {rejectWithValue}) => {
    const token = await AsyncStorageLib.getItem('token');

    try {
      const response = await axios({
        method: 'post',
        headers: {Authorization: `Bearer ${token}`},
        url: `${baseUrl}/group/report`,
        data: {
          report_type: data.value.selectedOption,
          group_id: data.groupId,
          description: data.value.otherText,
        },
      });
      console.log(response, 'resnlasdf');
      return response.data;
    } catch (err) {
      console.log(err.response, 'erora dlk');
      return rejectWithValue(err.response.data);
    }
  },
);

export const ReportGroupReducer = createSlice({
  name: 'ReportGroupReducer',
  initialState,
  reducers: {},
  extraReducers: {
    [reportGroup.fulfilled]: (state, action) => {
      state.flagLoading = false;
      state.status = 'success';
    },
    [reportGroup.pending]: (state, action) => {
      state.flagLoading = true;
      state.flagError = '';
      state.status = '';
    },
    [reportGroup.rejected]: (state, action) => {
      state.flagError = action.payload;
      state.flagLoading = false;
      state.status = '';
    },
  },
});

export default ReportGroupReducer.reducer;

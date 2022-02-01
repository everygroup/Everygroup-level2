import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import AsyncStorageLib from '@react-native-async-storage/async-storage';

const baseUrl = 'http://203.190.153.22:1639/api/v1';

const initialState = {
  boostError: '',
  boostLoading: false,
  boostStatus: '',
  oneXStatus: 0,
  fiveXStatus: 0,
};

export const boostGroup = createAsyncThunk(
  'boostGroup',
  async (data, {rejectWithValue}) => {
    const token = await AsyncStorageLib.getItem('token');

    try {
      const response = await axios({
        method: 'post',
        headers: {Authorization: `Bearer ${token}`},
        url: `${baseUrl}/group/boost-user`,
        data: {
          booster_points_1x: data.oneX,
          booster_points_5x: data.fiveX,
          group: data.groupId,
        },
      });
      console.log(response, 'resposne');
      return data;
    } catch (err) {
      console.log(err.response, 'erroro boost');
      return rejectWithValue(err.response.data);
    }
  },
);

export const BoosterGroupReducer = createSlice({
  name: 'BoosterGroupReducer',
  initialState,
  reducers: {
    resetBoostValue(state, action) {
      (state.oneXStatus = 0), (state.fiveXStatus = 0);
    },
  },
  extraReducers: {
    [boostGroup.fulfilled]: (state, action) => {
      state.boostLoading = false;
      state.oneXStatus = action.payload.oneX;
      state.fiveXStatus = action.payload.fiveX;
    },
    [boostGroup.pending]: (state, action) => {
      state.boostloading = true;
      state.boostError = '';
      state.oneXStatus = 0;
      state.fiveXStatus = 0;
    },
    [boostGroup.rejected]: (state, action) => {
      state.boostLoading = false;
      state.boostStatus = 'failure';
    },
  },
});

export const {resetBoostValue} = BoosterGroupReducer.actions;

export default BoosterGroupReducer.reducer;

import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const baseUrl = 'http://203.190.153.22:1639/api/v1';

const initialState = {
  groupDetail: {},
  error: '',
  loading: false,
};

export const getGroupDetail = createAsyncThunk(
  'getGroupDetali',
  async (data, {rejectWithValue}) => {
    const token = await AsyncStorage.getItem('token');

    try {
      const response = await axios({
        method: 'get',
        headers: {Authorization: `Bearer ${token}`},
        url: `${baseUrl}/group/detail/${data}`,
      });

      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  },
);

export const GroupDetailReducer = createSlice({
  name: 'GroupDetailReducer',
  initialState,
  reducers: {
    updateNotifyId(state, action) {
      state.groupDetail.boosted_mute_id = action.payload.notifyId;
      state.groupDetail.boosted_mute_status = action.payload.notifyStatus;
    },

    updateGroupBoostNotification(state, action) {
      state.groupDetail.boosted_mute_status = action.payload.status;
    },

    updateOtherUserFavStatus(state, action) {
      state.groupDetail.group_favourite_status = action.payload;
    },
  },
  extraReducers: {
    [getGroupDetail.fulfilled]: (state, action) => {
      state.groupDetail = action.payload;
      state.loading = false;
    },
    [getGroupDetail.pending]: (state, action) => {
      state.groupDetail = {};
      state.loading = true;
      state.error = '';
    },
    [getGroupDetail.rejected]: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const {
  updateOtherUserFavStatus,
  updateGroupBoostNotification,
  updateNotifyId,
} = GroupDetailReducer.actions;

export default GroupDetailReducer.reducer;

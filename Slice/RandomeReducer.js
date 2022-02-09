import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import AsyncStorageLib from '@react-native-async-storage/async-storage';

const baseUrl = 'http://203.190.153.22:1639/api/v1';

const initialState = {
  randomeList: [],
  loading: false,
  error: '',
  fromDate: '',
  boostError: '',
  boostLoading: false,
  boostStatus: '',
  oneXStatus: 0,
  fiveXStatus: 0,
  reportStatus: '',
  reportId: '',
};

export const getRandomeList = createAsyncThunk(
  'getRandomeList',
  async (data, {rejectWithValue}) => {
    const token = await AsyncStorageLib.getItem('token');

    try {
      const response = await axios({
        params: {
          from_date: data.fromDate,
          language: data.systemLang,
          group_type: data.groupType,
        },
        method: 'get',
        headers: {Authorization: `Bearer ${token}`},
        url: `${baseUrl}/group/feed`,
      });
      console.log(response, 'feed page');
      return response.data;
    } catch (err) {
      console.log(err.response, 'error page');
      return rejectWithValue(err.response.data.message);
    }
  },
);

export const seenGroup = createAsyncThunk(
  'seenGroup',
  async (data, {rejectWithValue}) => {
    const token = await AsyncStorageLib.getItem('token');

    try {
      const response = await axios({
        method: 'post',
        headers: {Authorization: `Bearer ${token}`},
        url: `${baseUrl}/group/seen-feed`,
        data: {
          group: data,
        },
      });

      return response.data;
    } catch (err) {
      return rejectWithValue(err.response);
    }
  },
);

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

      return data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  },
);

export const reportGroupRandomeList = createAsyncThunk(
  'reportGroupRandomeList',
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
      console.log(response, 'flagres');
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  },
);

export const RandomeReducer = createSlice({
  name: 'RandomeReducer',
  initialState,
  reducers: {
    resetReportRandomeList(state, action) {
      state.reportStatus = '';
    },
    resetErrorValue(state, action) {
      state.error = '';
    },
    resetBoostValue(state, action) {
      (state.oneXStatus = 0), (state.fiveXStatus = 0);
    },

    updateUserFavStatusInRandomeList(state, action) {
      state.randomeList = state.randomeList.map(el => {
        if (el.id == action.payload.groupId) {
          el.group_favourite_status = true;
        }
        return el;
      });
    },
  },
  extraReducers: {
    [getRandomeList.fulfilled]: (state, action) => {
      state.randomeList = action.payload.result;
      state.loading = false;
      state.fromDate = action.payload.from_date;
      state.error = '';
    },
    [getRandomeList.pending]: (state, action) => {
      state.loading = true;
      state.error = '';
    },
    [getRandomeList.rejected]: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },

    [boostGroup.fulfilled]: (state, action) => {
      state.boostLoading = false;
      state.oneXStatus = action.payload.oneX;
      state.fiveXStatus = action.payload.fiveX;

      state.randomeList = state.randomeList.map(el => {
        if (el.id === action.payload.groupId) {
          if (action.payload.oneX > 0) {
            el.booster_points_1x_status = false;
          } else if (action.payload.fiveX > 0) {
            el.booster_points_5x_status = false;
          }
        }
        return el;
      });
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

    [reportGroupRandomeList.fulfilled]: (state, action) => {
      console.log(action, 'acion');
      // const index = state.randomeList.findIndex(el=>el.id==action.payload.group_id)
      // state.randomeList[index]=state.randomeList.group_report_status
      state.randomeList.map(el => {
        if (el.id == action.payload.group_id) {
          el.group_report_status = true;
        }
        return el;
      });
      state.reportStatus = 'success';
      state.reportId = action.payload.group_id;
    },
    [reportGroupRandomeList.pending]: (state, action) => {
      state.flagLoading = true;
      state.flagError = '';
      state.reportStatus = '';
    },
    [reportGroupRandomeList.rejected]: (state, action) => {
      state.flagError = action.payload;
      state.flagLoading = false;
      state.reportStatus = '';
    },
  },
});

export const {
  resetErrorValue,
  resetBoostValue,
  updateUserFavStatusInRandomeList,
  resetReportRandomeList,
} = RandomeReducer.actions;

export default RandomeReducer.reducer;

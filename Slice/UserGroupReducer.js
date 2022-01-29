import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const baseUrl = 'http://203.190.153.22:1639/api/v1';

const initialState = {
  userGroupData: [],
  error: '',
  loading: false,
  updateGroup: '',
  boostSuccess: '',
  boostError: '',
  boostGroupId: '',
  couponResError: '',
  couponSuccess: '',
};

export const getUserGroup = createAsyncThunk(
  'getUserGroup',
  async (data, {rejectWithValue}) => {
    const token = await AsyncStorage.getItem('token');

    try {
      const response = await axios({
        method: 'get',
        headers: {Authorization: `Bearer ${token}`},
        url: `${baseUrl}/group/`,
      });
      return response.data.results;
    } catch (err) {
      return rejectWithValue(Object.values(err.response.data));
    }
  },
);

export const deleteGroup = createAsyncThunk(
  'deleteGroup',
  async (data, {rejectWithValue}) => {
    const token = await AsyncStorage.getItem('token');
    try {
      const response = await axios({
        method: 'delete',
        headers: {Authorization: `Bearer ${token}`},
        url: `${baseUrl}/group/${data}`,
      });
      return data;
    } catch (err) {
      return rejectWithValue(err.response.data.detail);
    }
  },
);

export const updateGroup = createAsyncThunk(
  'updateGroup',
  async (data, {rejectWithValue}) => {
    const token = await AsyncStorage.getItem('token');
    try {
      const response = await axios({
        method: 'patch',
        headers: {Authorization: `Bearer ${token}`},
        url: `${baseUrl}/group/${data.groupId}`,
        data: {
          title: data.titel,
          languages: data.selectedLanguage,
          join_languages: data.joinLanguage,
          categories: data.selectedCategory,
          tags: data.tags,
          description: data.description,
          visible_status: data.visible,
        },
      });

      return response.data;
    } catch (err) {
      console.log(err.response, 'error update');
      return rejectWithValue(err.response.data.detail);
    }
  },
);

export const boostOwnGroup = createAsyncThunk(
  'boostOwnGroup',
  async (data, {rejectWithValue}) => {
    const token = await AsyncStorage.getItem('token');
    console.log(data, 'own data');
    try {
      const response = await axios({
        method: 'post',
        headers: {Authorization: `Bearer ${token}`},
        url: `${baseUrl}/group/boost/${data}`,
      });
      console.log(response, 'boost data');
      return {result: response.data, id: data};
    } catch (err) {
      console.log(err.response);
      return rejectWithValue(Object.values(err.response.data).toString());
    }
  },
);
export const applyCoupon = createAsyncThunk(
  'applyCoupon',
  async (data, {rejectWithValue}) => {
    const token = await AsyncStorage.getItem('token');
    console.log(data, 'coupon data');
    try {
      const response = await axios({
        method: 'post',
        headers: {Authorization: `Bearer ${token}`},
        url: `${baseUrl}/coupon/`,
        data: {
          coupon_no: data,
        },
      });

      return response.data.result[0];
    } catch (err) {
      return rejectWithValue(Object.values(err.response.data).toString());
    }
  },
);

export const UserGroupReducer = createSlice({
  name: 'UserGroupReducer',
  initialState,
  reducers: {
    updateSuccessValue(state, action) {
      state.updateGroup = '';
    },
    resetCouponValue(state, action) {
      (state.couponResError = ''), (state.couponSuccess = '');
    },
  },
  extraReducers: {
    [getUserGroup.fulfilled]: (state, action) => {
      state.userGroupData = action.payload;
      state.loading = false;
    },
    [getUserGroup.pending]: (state, action) => {
      state.loading = true;
      state.error = '';
    },
    [getUserGroup.rejected]: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    [deleteGroup.fulfilled]: (state, action) => {
      state.userGroupData.splice(
        state.userGroupData.findIndex(el => el.id === action.payload),
        1,
      );
      state.loading = false;
    },
    [updateGroup.fulfilled]: (state, action) => {
      const updateIndex = state.userGroupData.findIndex(
        el => el.id == action.payload.id,
      );
      state.userGroupData[updateIndex] = action.payload;
      state.loading = false;
      state.updateGroup = 'success';
    },
    [boostOwnGroup.fulfilled]: (state, action) => {
      const index = state.userGroupData.findIndex(
        el => el.id == action.payload.id,
      );
      state.userGroupData[index] = action.payload.result.result[0];
    },
    [boostOwnGroup.pending]: (state, action) => {
      state.boostSuccess = '';
      state.boostError = '';
    },
    [boostOwnGroup.rejected]: (state, action) => {
      state.boostError = action.payload;
    },

    [applyCoupon.fulfilled]: (state, action) => {
      state.couponSuccess = action.payload;
      state.couponResError = '';
    },
    [applyCoupon.pending]: (state, action) => {
      state.couponSuccess = '';
      state.couponResError = '';
    },
    [applyCoupon.rejected]: (state, action) => {
      state.couponResError = action.payload;
    },
  },
});
export const {updateSuccessValue, resetCouponValue} = UserGroupReducer.actions;
export default UserGroupReducer.reducer;

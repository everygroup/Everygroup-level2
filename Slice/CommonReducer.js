import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import AsyncStorageLib from '@react-native-async-storage/async-storage';
import axios from 'axios';

const baseUrl = 'http://203.190.153.22:1639/api/v1';
const initialState = {
  allLang: [
    {code: 'en', language: 'Englisch'},
    {code: 'de', language: 'Deutsch'},
    {code: 'en_IN', language: 'Englisch'},
    {code: 'de_IN', language: 'Deutsch'},

    ,
  ],
  systemLang: {code: 'en', language: 'English'},
};

export const setSystemLang = createAsyncThunk(
  'setSystemLang',
  async (data, {rejectWithValue}) => {
    const token = await AsyncStorageLib.getItem('token');

    try {
      const response = await axios({
        method: 'post',
        headers: {Authorization: `Bearer ${token}`},
        url: `${baseUrl}/user-language`,
        data: {
          language_code: data.substring(0, 2),
        },
      });
      console.log(response, 'lang');
      return data;
    } catch (err) {
      console.log(err.response);
      return rejectWithValue(Object.values(err.response.data));
    }
  },
);

export const CommonReducer = createSlice({
  name: 'CommonReducer',
  initialState,
  reducers: {},
  extraReducers: {
    [setSystemLang.fulfilled]: (state, action) => {
      state.loading = false;
      state.systemLang = state.allLang.find(el => el.code == action.payload);
    },
    [setSystemLang.pending]: (state, action) => {
      state.loading = true;
      state.error = [];
      state.value = '';
    },
    [setSystemLang.rejected]: (state, action) => {
      state.error = action.payload;
      state.loading = false;
      state.value = '';
    },
  },
});

export default CommonReducer.reducer;

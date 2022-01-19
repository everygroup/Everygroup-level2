import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const baseUrl = 'http://203.190.153.22:1639/api/v1';

const initialState = {
  languageArray: [],
  joinLanguageArray: [],
  error: '',
  loading: false,
};

export const getLanguage = createAsyncThunk(
  'getLanguage',
  async (data, {rejectWithValue}) => {
    const token = await AsyncStorage.getItem('token');

    try {
      const response = await axios({
        method: 'get',
        headers: {Authorization: `Bearer ${token}`},
        url: `${baseUrl}/group/language?q=${data}`,
      });

      return response.data.results;
    } catch (err) {
      return rejectWithValue(Object.values(err.response.data));
    }
  },
);

export const LanguageReducer = createSlice({
  name: 'LanguageReducer',
  initialState,
  reducers: {},
  extraReducers: {
    [getLanguage.fulfilled]: (state, action) => {
      state.languageArray = action.payload;
    },
    [getLanguage.pending]: (state, action) => {
      state.languageArray = [];
      state.loading = true;
      state.error = '';
    },
    [getLanguage.rejected]: (state, action) => {
      state.error = action.payload;
      state.loading = false;
      state.languageArray = [];
    },
  },
});

export default LanguageReducer.reducer;

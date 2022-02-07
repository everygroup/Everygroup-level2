import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {NativeModules, Platform} from 'react-native';
const initialState = {
  allLang: [
    {code: 'en', language: 'English'},
    {code: 'de', language: 'Deutsch'},
    {code: 'hi', language: 'Hindi'},
    ,
  ],
  systemLang: {code: 'hi', language: 'Hindi'},
};

export const CommonReducer = createSlice({
  name: 'CommonReducer',
  initialState,
  reducers: {
    setSystemLang(state, action) {
      state.systemLang = state.allLang.find(el => el.code == action.payload);
    },
  },
  extraReducers: {},
});

export const {setSystemLang} = CommonReducer.actions;
export default CommonReducer.reducer;

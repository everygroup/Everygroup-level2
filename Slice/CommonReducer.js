import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {NativeModules, Platform} from 'react-native';
const initialState = {systemLang: ''};

const getSystemLang = () => {
  value =
    Platform.OS === 'ios'
      ? NativeModules.SettingsManager.settings.AppleLocale ||
        NativeModules.SettingsManager.settings.AppleLanguages[0] // iOS 13
      : NativeModules.I18nManager.localeIdentifier;

  //   return value;
};

export const CommonReducer = createSlice({
  name: 'CommonReducer',
  initialState,
  reducers: {},
  extraReducers: {
    [getSystemLang.fulfilled]: (state, action) => {
      state.systemLang = action.payload;
    },

    [getSystemLang.rejected]: (state, action) => {
      state.systemLang = action.payload;
    },
  },
});

export default CommonReducer.reducer;

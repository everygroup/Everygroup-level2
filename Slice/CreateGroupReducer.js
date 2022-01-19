import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const baseUrl = 'http://203.190.153.22:1639/api/v1';

const initialState = {
  createGroupLoading: false,
  errorLoading: false,
  error: '',
  data: '',
  createSuccess: '',
};

export const createGroup = createAsyncThunk(
  'createGroup',
  async (data, {rejectWithValue}) => {
    const token = await AsyncStorage.getItem('token');

    try {
      const response = await axios({
        method: 'post',
        headers: {Authorization: `Bearer ${token}`},
        url: `${baseUrl}/group/`,
        data: {
          title: data.titel,
          group_link: data.groupLink,
          languages: data.selectedLanguage,
          join_languages: data.joinLanguage,
          categories: data.selectedCategory,
          tags: data.hashArray,
          confirm_rules: data.checkedConductRules,
          confirm_terms: data.checkedTerms,
          description: data.description,
        },
      });

      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  },
);

export const CreateGroupReducer = createSlice({
  name: 'CreateGroupReducer',
  initialState,
  reducers: {
    resetErroLoading(state, action) {
      (state.errorLoading = false), (state.createSuccess = '');
    },
  },
  extraReducers: {
    [createGroup.fulfilled]: (state, action) => {
      state.data = action.payload;
      state.createSuccess = 'success';
      state.createGroupLoading = false;
    },
    [createGroup.pending]: (state, action) => {
      state.data = '';
      state.createGroupLoading = true;
      state.error = '';
      state.createSuccess = '';
      state.errorLoading = true;
    },
    [createGroup.rejected]: (state, action) => {
      state.error = action.payload;
      state.createGroupLoading = false;
      state.data = '';
      state.createSuccess = '';
      state.errorLoading = false;
    },
  },
});

export const {resetErroLoading} = CreateGroupReducer.actions;

export default CreateGroupReducer.reducer;

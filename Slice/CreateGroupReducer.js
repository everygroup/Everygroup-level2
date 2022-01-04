import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const baseUrl = 'http://203.190.153.22:1639/api/v1';

const initialState = {
  loading: false,
  error: '',
  data: '',
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
          tags: ['tag3'],
          confirm_rules: data.checkedConductRules,
          confirm_terms: data.checkedTerms,
          description: data.description,
        },
      });
      console.log(response);
      return response.data;
    } catch (err) {
      console.log(err.response);
      return rejectWithValue(err.response.data);
    }
  },
);

export const CreateGroupReducer = createSlice({
  name: 'CreateGroupReducer',
  initialState,
  reducers: {},
  extraReducers: {
    [createGroup.fulfilled]: (state, action) => {
      state.data = action.payload;
    },
    [createGroup.pending]: (state, action) => {
      state.data = '';
      state.loading = true;
      state.error = '';
    },
    [createGroup.rejected]: (state, action) => {
      state.error = action.payload;
      state.loading = false;
      state.data = '';
    },
  },
});

export default CreateGroupReducer.reducer;

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
    console.log(data, 'create Group');
    try {
      const response = await axios({
        method: 'post',
        headers: {Authorization: `Bearer ${token}`},
        url: `${baseUrl}/group/`,
        // data: {
        //   title: 'new Group',
        //   group_link:
        //     'https://www.django-rest-framework.org/api-guide/paiation/',
        //   group_languages: ['spanisch'],
        //   group_join_languages: ['spanisch'],
        //   group_categories: ['sport'],
        //   tags: ['tag'],
        //   confirm_rules: true,
        //   confirm_terms: true,
        //   description: 'Here is Group details.',
        // },
      });

      return response.data;
    } catch (err) {
      return rejectWithValue(Object.values(err.response.data));
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

import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const baseUrl = 'http://203.190.153.22:1639/api/v1';

const initialState = {
  groupDetail: {
    titel: '',
    groupLink: '',
    selectedCategory: '',
    description: '',
    hashArray: '',
    selectedLanguage: '',
    joinLanguage: '',
    checkedTerms: '',
    checkedConductRules: '',
  },
  error: '',
  loading: false,
};

// export const updateGroupDetail = createAsyncThunk(
//   'updateGroupDetail',
//   async (data, {rejectWithValue}) => {
//     const token = await AsyncStorage.getItem('token');

//     try {
//       const response = await axios({
//         method: 'patch',
//         headers: {Authorization: `Bearer ${token}`},
//         url: `${baseUrl}/group/${data}`,
//       });
//       console.log(response, 'response update');
//       return response.data;
//     } catch (err) {
//       console.log(err.response, 'error update');
//       return rejectWithValue(err.response.data);
//     }
//   },
// );

export const AddGroupReducer = createSlice({
  name: 'AddGroupReducer',
  initialState,
  reducers: {
    updateGroupDetail(state, action) {
      console.log(action, 'action');

      state.groupDetail.titel = action.payload.groupName;

      state.groupDetail.description = action.payload.description;
    },
  },
  extraReducers: {},
});
export const {updateGroupDetail} = AddGroupReducer.actions;
export default AddGroupReducer.reducer;

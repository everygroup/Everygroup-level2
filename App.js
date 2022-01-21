import React from 'react';
import {View} from 'react-native';
import RootNavigator from './src/Navigation/RootNavigator';
import {configureStore} from '@reduxjs/toolkit';
import {Provider} from 'react-redux';
import authReducer from './Slice/AuthReducer';
import checkReducer from './Slice/CheckReducer';
import ProfileReducer from './Slice/ProfileReducer';
import CategoryReducer from './Slice/CategoryReducer';
import LanguageReducer from './Slice/LanguageReducer';
import CreateGroupReducer from './Slice/CreateGroupReducer';
import UserGroupReducer from './Slice/UserGroupReducer';
import GroupDetailReducer from './Slice/GroupDetailReducer';
import SearchReducer from './Slice/SearchReducer';
import SearchResultReducer from './Slice/SearchResultReducer';
import FavouriteUserReducer from './Slice/FavouriteUserReducer';
import OtherUserGroupReducer from './Slice/OtherUserGroupReducer';
import ReportGroupReducer from './Slice/ReportGroupReducer';
import AllGroupListReducer from './Slice/AllGroupListReducer';
import FavouriteGroupReducer from './Slice/FavouriteGroupReducer';
import GetDeleteUserOptionReducer from './Slice/GetDeleteUserOptionReducer';
import DeleteUserReducer from './Slice/DeleteUserReducer';
const store = configureStore({
  reducer: {
    user: authReducer,
    check: checkReducer,
    changeProfile: ProfileReducer,
    getCategory: CategoryReducer,
    getLanguage: LanguageReducer,
    createGroup: CreateGroupReducer,
    UserGroupReducer,
    GroupDetailReducer,
    SearchReducer,
    SearchResultReducer,
    FavouriteUserReducer,
    OtherUserGroupReducer,
    ReportGroupReducer,
    AllGroupListReducer,
    FavouriteGroupReducer,
    GetDeleteUserOptionReducer,
    DeleteUserReducer,
  },
});

const App = () => {
  return (
    <Provider store={store}>
      <View style={{flex: 1}}>
        <RootNavigator />
      </View>
    </Provider>
  );
};

export default App;

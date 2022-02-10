import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Dashboard from '../Screens/HomeScreen/Dashboard';
import MyGroup from '../Screens/UserScreens/MyGroups';
import MyFavorite from '../Screens/UserScreens/MyFavorite';

import Language from '../Screens/UserScreens/Language';
import Interface from '../Screens/HomeScreen/InterFace';

import Contact from '../Screens/HelpScreens/Contact';
import GroupDetail from '../Screens/HomeScreen/GroupDetail';
import OtherUserScreen from '../Screens/HomeScreen/OtherUserScreen';
import EditGroup from '../Screens/UserScreens/EditGroup';
import SearchScreen from '../Screens/HomeScreen/SearchScreen';
import DeletePage from '../Screens/HomeScreen/DeletePage';
const HomeStackScreen = createStackNavigator();

export const HomeNavigator = () => {
  return (
    <HomeStackScreen.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
      }}
      initialRouteName="Dashboard">
      <HomeStackScreen.Screen name="Dashboard" component={Dashboard} />
      <HomeStackScreen.Screen name="DeletePage" component={DeletePage} />
      <HomeStackScreen.Screen name="SearchScreen" component={SearchScreen} />

      <HomeStackScreen.Screen name="MyGroup" component={MyGroup} />
      <HomeStackScreen.Screen name="MyFavorite" component={MyFavorite} />

      <HomeStackScreen.Screen name="Language" component={Language} />

      <HomeStackScreen.Screen name="Interface" component={Interface} />

      <HomeStackScreen.Screen name="Contact" component={Contact} />
      <HomeStackScreen.Screen name="GroupDetail" component={GroupDetail} />
      <HomeStackScreen.Screen
        name="OtherUserScreen"
        component={OtherUserScreen}
      />
      <HomeStackScreen.Screen name="EditGroup" component={EditGroup} />
    </HomeStackScreen.Navigator>
  );
};

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
const HomeStackScreen = createStackNavigator();

export const HomeNavigator = () => {
  return (
    <HomeStackScreen.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Dashboard">
      <HomeStackScreen.Screen
        name="Dashboard"
        component={Dashboard}
        options={{gestureEnabled: false}}
      />
      <HomeStackScreen.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{gestureEnabled: false}}
      />

      <HomeStackScreen.Screen
        name="MyGroup"
        component={MyGroup}
        options={{gestureEnabled: false}}
      />
      <HomeStackScreen.Screen
        name="MyFavorite"
        component={MyFavorite}
        options={{gestureEnabled: false}}
      />

      <HomeStackScreen.Screen
        name="Language"
        component={Language}
        options={{gestureEnabled: false}}
      />

      <HomeStackScreen.Screen
        name="Interface"
        component={Interface}
        options={{gestureEnabled: false}}
      />

      <HomeStackScreen.Screen
        name="Contact"
        component={Contact}
        options={{gestureEnabled: false}}
      />
      <HomeStackScreen.Screen
        name="GroupDetail"
        component={GroupDetail}
        options={{gestureEnabled: false}}
      />
      <HomeStackScreen.Screen
        name="OtherUserScreen"
        component={OtherUserScreen}
        options={{gestureEnabled: false}}
      />
      <HomeStackScreen.Screen
        name="EditGroup"
        component={EditGroup}
        options={{gestureEnabled: false}}
      />
    </HomeStackScreen.Navigator>
  );
};

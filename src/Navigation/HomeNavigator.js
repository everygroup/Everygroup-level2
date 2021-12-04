import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Dashboard from '../Screens/Home/Dashboard';
import Profile from '../Screens/UserScreens/Profile';
import MyGroup from '../Screens/UserScreens/MyGroups';
import MyFavorite from '../Screens/UserScreens/MyFavorite';
import Help from '../Screens/UserScreens/Help';
import Language from '../Screens/UserScreens/Language';
import AccountData from '../Screens/UserScreens/AccountData';
import Notification from '../Screens/UserScreens/Notification';
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
        name="Profile"
        component={Profile}
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
        name="Help"
        component={Help}
        options={{gestureEnabled: false}}
      />
      <HomeStackScreen.Screen
        name="Language"
        component={Language}
        options={{gestureEnabled: false}}
      />
      <HomeStackScreen.Screen
        name="AccountData"
        component={AccountData}
        options={{gestureEnabled: false}}
      />
      <HomeStackScreen.Screen
        name="Notification"
        component={Notification}
        options={{gestureEnabled: false}}
      />
    </HomeStackScreen.Navigator>
  );
};

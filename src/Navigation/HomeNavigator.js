import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Dashboard from '../Screens/Home/Dashboard';

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
    </HomeStackScreen.Navigator>
  );
};

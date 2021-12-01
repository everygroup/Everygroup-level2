import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SignIn from '../Screens/AuthScreens/SignIn';
import SingUp from '../Screens/AuthScreens/SignUp';
import VerifyMail from '../Screens/AuthScreens/VerifyMail';
import SplashScreen from '../Screens/AuthScreens/SplashScreen';
import {HomeNavigator} from './HomeNavigator';
import ConfirmationScreen from '../Screens/AuthScreens/ConfirmationScreen';

const AuthStackScreen = createStackNavigator();

export const AuthNavigator = () => {
  return (
    <AuthStackScreen.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="SplashScreen">
      <AuthStackScreen.Screen
        name="SignIn"
        component={SignIn}
        options={{gestureEnabled: false}}
      />
      <AuthStackScreen.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{gestureEnabled: false}}
      />
      <AuthStackScreen.Screen
        name="SignUp"
        component={SingUp}
        options={{gestureEnabled: false}}
      />
      <AuthStackScreen.Screen
        name="VerifyMail"
        component={VerifyMail}
        options={{gestureEnabled: false}}
      />
      <AuthStackScreen.Screen
        name="ConfirmationScreen"
        component={ConfirmationScreen}
        options={{gestureEnabled: false}}
      />
      <AuthStackScreen.Screen name="HomeNavigator" component={HomeNavigator} />
    </AuthStackScreen.Navigator>
  );
};

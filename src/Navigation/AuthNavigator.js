import React, {useEffect, useState} from 'react';
import {View, Alert, Linking} from 'react-native';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import {useNavigation, useNavigationState} from '@react-navigation/native';
import SignIn from '../Screens/AuthScreens/SignIn';
import SingUp from '../Screens/AuthScreens/SignUp';
import VerifyMail from '../Screens/AuthScreens/VerifyMail';
import SplashScreen from '../Screens/AuthScreens/SplashScreen';
import {HomeNavigator} from './HomeNavigator';
import {UserNavigator} from './UserNavigator';
import {HelpNavigator} from './HelpNavigator';
import ConfirmationScreen from '../Screens/AuthScreens/ConfirmationScreen';
import BehaviourRules from '../Screens/RulesPages/BehaviourRules';
import ForgotPassword from '../Screens/AuthScreens/ForgotPassword';
import HeaderAuth from '../Screens/AuthScreens/HeaderAuth';
import ForgotMailVerify from '../Screens/AuthScreens/ForgotMailVerify';
import TestPage from '../Screens/AuthScreens/TestPage';
import AsyncStorageLib from '@react-native-async-storage/async-storage';

const AuthStackScreen = createStackNavigator();

export const AuthNavigator = () => {
  const navigation = useNavigation();
  const [initialUrl, setInitialUrl] = useState('');
  const [token, setToken] = useState('');
  const current = useNavigationState(state => state);

  const routes = navigation.getState()?.routes
    ? navigation.getState()?.routes
    : [];
  const currentRoute = routes[routes.length - 1];
  const prevRoute = routes[routes.length - 2];
  useEffect(() => {
    getToken();
    if (token != '') {
      navigation.navigate('HomeNavigator');
    }
  }, [token]);

  const getToken = async () => {
    setToken(await AsyncStorageLib.getItem('token'));
  };

  useEffect(() => {
    getUrlAsync();
    if (initialUrl === null) {
      return;
    }
    if (initialUrl.includes('ConfirmationScreen')) {
      const userId = initialUrl.split('=')[1];
      navigation.navigate('ConfirmationScreen', {userId});
    }
  }, [initialUrl]);

  const getUrlAsync = async () => {
    // Get the deep link used to open the app
    setInitialUrl(await Linking.getInitialURL());
  };

  return (
    <View style={{flex: 1}}>
      {currentRoute ? (
        currentRoute.name == 'BehaviourRules' ||
        currentRoute.name == 'HomeNavigator' ||
        currentRoute.name == 'UserNavigator' ||
        currentRoute.name == 'HelpNavigator' ? null : (
          <HeaderAuth currentRoute={currentRoute} prevRoute={prevRoute} />
        )
      ) : (
        <HeaderAuth currentRoute={currentRoute} prevRoute={prevRoute} />
      )}
      <AuthStackScreen.Navigator
        screenOptions={{
          headerShown: false,
          gestureEnabled: false,
        }}
        initialRouteName="SplashScreen">
        <AuthStackScreen.Screen
          name="SignIn"
          component={SignIn}
          options={{
            gestureEnabled: false,
            cardStyleInterpolator:
              CardStyleInterpolators.forFadeFromBottomAndroid,
          }}
        />
        <AuthStackScreen.Screen name="SplashScreen" component={SplashScreen} />
        <AuthStackScreen.Screen
          name="SignUp"
          component={SingUp}
          options={{
            cardStyleInterpolator:
              CardStyleInterpolators.forFadeFromBottomAndroid,
          }}
        />
        <AuthStackScreen.Screen name="VerifyMail" component={VerifyMail} />
        <AuthStackScreen.Screen
          name="ConfirmationScreen"
          component={ConfirmationScreen}
        />
        <AuthStackScreen.Screen
          name="BehaviourRules"
          component={BehaviourRules}
        />
        <AuthStackScreen.Screen
          name="ForgotPassword"
          component={ForgotPassword}
        />
        <AuthStackScreen.Screen
          name="ForgotMailVerify"
          component={ForgotMailVerify}
        />

        <AuthStackScreen.Screen name="SignOut" component={SignIn} />

        <AuthStackScreen.Screen
          name="HomeNavigator"
          component={HomeNavigator}
        />
        <AuthStackScreen.Screen
          name="UserNavigator"
          component={UserNavigator}
        />
        <AuthStackScreen.Screen
          name="HelpNavigator"
          component={HelpNavigator}
        />
        <AuthStackScreen.Screen name="TestPage" component={TestPage} />
      </AuthStackScreen.Navigator>
    </View>
  );
};

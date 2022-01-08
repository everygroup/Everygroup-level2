import React from 'react';
import {View} from 'react-native';
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

const AuthStackScreen = createStackNavigator();

export const AuthNavigator = () => {
  const navigation = useNavigation();
  const current = useNavigationState(state => state);

  const routes = navigation.getState()?.routes
    ? navigation.getState()?.routes
    : [];
  const currentRoute = routes[routes.length - 1];
  const prevRoute = routes[routes.length - 2];

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
        }}
        initialRouteName="TestPage">
        <AuthStackScreen.Screen
          name="SignIn"
          component={SignIn}
          options={{
            gestureEnabled: false,
            cardStyleInterpolator:
              CardStyleInterpolators.forFadeFromBottomAndroid,
          }}
        />
        <AuthStackScreen.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{gestureEnabled: false}}
        />
        <AuthStackScreen.Screen
          name="SignUp"
          component={SingUp}
          options={{
            gestureEnabled: false,
            cardStyleInterpolator:
              CardStyleInterpolators.forFadeFromBottomAndroid,
          }}
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
        <AuthStackScreen.Screen
          name="BehaviourRules"
          component={BehaviourRules}
          options={{gestureEnabled: false}}
        />
        <AuthStackScreen.Screen
          name="ForgotPassword"
          component={ForgotPassword}
          options={{gestureEnabled: false}}
        />
        <AuthStackScreen.Screen
          name="ForgotMailVerify"
          component={ForgotMailVerify}
          options={{gestureEnabled: false}}
        />

        <AuthStackScreen.Screen
          name="SignOut"
          component={SignIn}
          options={{gestureEnabled: false}}
        />

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

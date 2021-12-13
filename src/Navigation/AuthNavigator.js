import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import {
  useRoute,
  useNavigation,
  useNavigationState,
  getFocusedRouteNameFromRoute,
} from '@react-navigation/native';
import SignIn from '../Screens/AuthScreens/SignIn';
import SingUp from '../Screens/AuthScreens/SignUp';
import VerifyMail from '../Screens/AuthScreens/VerifyMail';
import SplashScreen from '../Screens/AuthScreens/SplashScreen';
import {HomeNavigator} from './HomeNavigator';
import ConfirmationScreen from '../Screens/AuthScreens/ConfirmationScreen';
import BehaviourRules from '../Screens/AuthScreens/BehaviourRules';
import ForgotPassword from '../Screens/AuthScreens/ForgotPassword';
import ChangePassword from '../Screens/AuthScreens/ChangePassword';
import UpdatePassword from '../Screens/AuthScreens/UpdatePassword';
import ChangeUserName from '../Screens/AuthScreens/ChangeUserName';
import UpdateUserName from '../Screens/AuthScreens/UpdateUserName';
import ChangeEmail from '../Screens/AuthScreens/ChangeEmail';
import UpdateEmail from '../Screens/AuthScreens/UpdateEmail';
import SentEmail from '../Screens/AuthScreens/SentEmail';
import HeaderAuth from '../Screens/AuthScreens/HeaderAuth';

const AuthStackScreen = createStackNavigator();

export const AuthNavigator = () => {
  const currentRoute = useNavigationState(state => state);

  return (
    <View style={{flex: 1}}>
      <HeaderAuth currentRoute={currentRoute} />
      <AuthStackScreen.Navigator
        screenOptions={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forBottomSheetAndroid,
        }}
        initialRouteName="SplashScreen">
        <AuthStackScreen.Screen
          name="SignIn"
          component={SignIn}
          options={{
            gestureEnabled: false,

            transitionSpec: {
              open: {
                animation: 'timing',
                stiffness: 1000,
                damping: 500,
                mass: 3,
                overshootClamping: true,
                restDisplacementThreshold: 0.01,
                restSpeedThreshold: 0.01,
              },
              close: {
                animation: 'timing',
                stiffness: 1000,
                damping: 500,
                mass: 3,
                overshootClamping: true,
                restDisplacementThreshold: 0.01,
                restSpeedThreshold: 0.01,
              },
            },
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
          name="ChangePassword"
          component={ChangePassword}
          options={{gestureEnabled: false}}
        />

        <AuthStackScreen.Screen
          name="UpdatePassword"
          component={UpdatePassword}
          options={{gestureEnabled: false}}
        />
        <AuthStackScreen.Screen
          name="ChangeUserName"
          component={ChangeUserName}
          options={{gestureEnabled: false}}
        />
        <AuthStackScreen.Screen
          name="UpdateUserName"
          component={UpdateUserName}
          options={{gestureEnabled: false}}
        />
        <AuthStackScreen.Screen
          name="ChangeEmail"
          component={ChangeEmail}
          options={{gestureEnabled: false}}
        />
        <AuthStackScreen.Screen
          name="UpdateEmail"
          component={UpdateEmail}
          options={{gestureEnabled: false}}
        />
        <AuthStackScreen.Screen
          name="SignOut"
          component={SignIn}
          options={{gestureEnabled: false}}
        />
        <AuthStackScreen.Screen
          name="SentEmail"
          component={SentEmail}
          options={{gestureEnabled: false}}
        />

        <AuthStackScreen.Screen
          name="HomeNavigator"
          component={HomeNavigator}
        />
      </AuthStackScreen.Navigator>
    </View>
  );
};

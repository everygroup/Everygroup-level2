import React from 'react';
import {View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Header from '../Common/Header';
import Profile from '../Screens/UserScreens/Profile';
import AccountData from '../Screens/UserScreens/AccountData';
import UpdatePassword from '../Screens/UserScreens/UpdatePassword';
import UpdateUserName from '../Screens/UserScreens/UpdateUserName';
import UpdateEmail from '../Screens/UserScreens/UpdateEmail';
import SentEmail from '../Screens/UserScreens/SentEmail';
import Notification from '../Screens/UserScreens/Notification';
import NotificationGroupBooster from '../Screens/UserScreens/NotificationGroupBooster';
import NotificationOwnGroup from '../Screens/UserScreens/NotificationOwnGroup';
import Coupon from '../Screens/UserScreens/Coupon';
import CheckPassword from '../Screens/UserScreens/CheckPassword';

const UserStackScreen = createStackNavigator();

export const UserNavigator = () => {
  return (
    <View style={{flex: 1}}>
      <Header />
      <UserStackScreen.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <UserStackScreen.Screen
          name="Profile"
          component={Profile}
          options={{gestureEnabled: false}}
        />
        <UserStackScreen.Screen
          name="AccountData"
          component={AccountData}
          options={{gestureEnabled: false}}
        />
        {/* <UserStackScreen.Screen
          name="ChangePassword"
          component={ChangePassword}
          options={{gestureEnabled: false}}
        /> */}

        <UserStackScreen.Screen
          name="UpdatePassword"
          component={UpdatePassword}
          options={{gestureEnabled: false}}
        />
        {/* <UserStackScreen.Screen
          name="ChangeUserName"
          component={ChangeUserName}
          options={{gestureEnabled: false}}
        /> */}
        <UserStackScreen.Screen
          name="UpdateUserName"
          component={UpdateUserName}
          options={{gestureEnabled: false}}
        />
        {/* <UserStackScreen.Screen
          name="ChangeEmail"
          component={ChangeEmail}
          options={{gestureEnabled: false}}
        /> */}
        <UserStackScreen.Screen
          name="UpdateEmail"
          component={UpdateEmail}
          options={{gestureEnabled: false}}
        />
        <UserStackScreen.Screen
          name="SentEmail"
          component={SentEmail}
          options={{gestureEnabled: false}}
        />

        <UserStackScreen.Screen
          name="Notification"
          component={Notification}
          options={{gestureEnabled: false}}
        />
        <UserStackScreen.Screen
          name="NotificationOwnGroup"
          component={NotificationOwnGroup}
          options={{gestureEnabled: false}}
        />
        <UserStackScreen.Screen
          name="NotificationGroupBooster"
          component={NotificationGroupBooster}
          options={{gestureEnabled: false}}
        />

        <UserStackScreen.Screen
          name="Coupon"
          component={Coupon}
          options={{gestureEnabled: false}}
        />
        <UserStackScreen.Screen
          name="CheckPassword"
          component={CheckPassword}
          options={{gestureEnabled: false}}
        />
      </UserStackScreen.Navigator>
    </View>
  );
};

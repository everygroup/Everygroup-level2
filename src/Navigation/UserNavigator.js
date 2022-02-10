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
          gestureEnabled: false,
        }}>
        <UserStackScreen.Screen name="Profile" component={Profile} />
        <UserStackScreen.Screen name="AccountData" component={AccountData} />

        <UserStackScreen.Screen
          name="UpdatePassword"
          component={UpdatePassword}
        />

        <UserStackScreen.Screen
          name="UpdateUserName"
          component={UpdateUserName}
        />

        <UserStackScreen.Screen name="UpdateEmail" component={UpdateEmail} />
        <UserStackScreen.Screen name="SentEmail" component={SentEmail} />

        <UserStackScreen.Screen name="Notification" component={Notification} />
        <UserStackScreen.Screen
          name="NotificationOwnGroup"
          component={NotificationOwnGroup}
        />
        <UserStackScreen.Screen
          name="NotificationGroupBooster"
          component={NotificationGroupBooster}
        />

        <UserStackScreen.Screen name="Coupon" component={Coupon} />
        <UserStackScreen.Screen
          name="CheckPassword"
          component={CheckPassword}
        />
      </UserStackScreen.Navigator>
    </View>
  );
};

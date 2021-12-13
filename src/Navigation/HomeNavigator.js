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
import Interface from '../Screens/Home/InterFace';
import Coupon from '../Screens/UserScreens/Coupon';
import Imprint from '../Screens/HelpScreens/Imprint';
import Privacy from '../Screens/HelpScreens/Privacy';
import TermsCondition from '../Screens/HelpScreens/TermsCondition';
import Contact from '../Screens/HelpScreens/Contact';
import GroupDetail from '../Screens/Home/GroupDetail';
import OtherUserScreen from '../Screens/Home/OtherUserScreen';
import EditGroup from '../Screens/UserScreens/EditGroup';
import NotificationOwnGroup from '../Screens/UserScreens/NotificationOwnGroup';
import NotificationGroupBooster from '../Screens/UserScreens/NotificationGroupBooster';
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
      <HomeStackScreen.Screen
        name="Interface"
        component={Interface}
        options={{gestureEnabled: false}}
      />
      <HomeStackScreen.Screen
        name="Coupon"
        component={Coupon}
        options={{gestureEnabled: false}}
      />
      <HomeStackScreen.Screen
        name="Imprint"
        component={Imprint}
        options={{gestureEnabled: false}}
      />
      <HomeStackScreen.Screen
        name="Privacy"
        component={Privacy}
        options={{gestureEnabled: false}}
      />
      <HomeStackScreen.Screen
        name="TermsCondition"
        component={TermsCondition}
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
      <HomeStackScreen.Screen
        name="NotificationOwnGroup"
        component={NotificationOwnGroup}
        options={{gestureEnabled: false}}
      />
      <HomeStackScreen.Screen
        name="NotificationGroupBooster"
        component={NotificationGroupBooster}
        options={{gestureEnabled: false}}
      />
    </HomeStackScreen.Navigator>
  );
};

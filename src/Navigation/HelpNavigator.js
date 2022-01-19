import React from 'react';
import {View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Header from '../Common/Header';
import Help from '../Screens/HelpScreens/Help';
import Contact from '../Screens/HelpScreens/Contact';
import Imprint from '../Screens/HelpScreens/Imprint';
import Privacy from '../Screens/HelpScreens/Privacy';
import TermsCondition from '../Screens/HelpScreens/TermsCondition';
const HelpStackScreen = createStackNavigator();

export const HelpNavigator = () => {
  return (
    <View style={{flex: 1}}>
      <Header />
      <HelpStackScreen.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Help">
        <HelpStackScreen.Screen
          name="Help"
          component={Help}
          options={{gestureEnabled: false}}
        />
        <HelpStackScreen.Screen
          name="Contact"
          component={Contact}
          options={{gestureEnabled: false}}
        />
        <HelpStackScreen.Screen
          name="Imprint"
          component={Imprint}
          options={{gestureEnabled: false}}
        />
        <HelpStackScreen.Screen
          name="Privacy"
          component={Privacy}
          options={{gestureEnabled: false}}
        />
        <HelpStackScreen.Screen
          name="TermsCondition"
          component={TermsCondition}
          options={{gestureEnabled: false}}
        />
      </HelpStackScreen.Navigator>
    </View>
  );
};

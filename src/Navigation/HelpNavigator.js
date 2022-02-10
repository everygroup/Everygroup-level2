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
          gestureEnabled: false,
        }}
        initialRouteName="Help">
        <HelpStackScreen.Screen name="Help" component={Help} />
        <HelpStackScreen.Screen name="Contact" component={Contact} />
        <HelpStackScreen.Screen name="Imprint" component={Imprint} />
        <HelpStackScreen.Screen name="Privacy" component={Privacy} />
        <HelpStackScreen.Screen
          name="TermsCondition"
          component={TermsCondition}
        />
      </HelpStackScreen.Navigator>
    </View>
  );
};

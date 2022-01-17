import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AuthNavigator} from './AuthNavigator';
import Linking from './Linking';

function RootNavigator() {
  return (
    <NavigationContainer linking={Linking}>
      <AuthNavigator />
    </NavigationContainer>
  );
}

export default RootNavigator;

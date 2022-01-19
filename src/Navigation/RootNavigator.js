import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AuthNavigator } from './AuthNavigator';
import { useFonts } from 'expo-font'
import AppLoading from 'expo-app-loading';

function RootNavigator() {
  const [isLoaded] = useFonts({
    'Montserrat-Bold': require('../../src/Assets/Fonts/Montserrat-Bold.ttf'),
    'Montserrat-ExtraBold': require('../../src/Assets/Fonts/Montserrat-ExtraBold.ttf'),
    'Montserrat-Medium': require('../../src/Assets/Fonts/Montserrat-Medium.ttf'),
    'Montserrat-MediumItalic': require('../../src/Assets/Fonts/Montserrat-MediumItalic.ttf'),
    'Montserrat-Regular': require('../../src/Assets/Fonts/Montserrat-Regular.ttf'),
    'Montserrat-SemiBold': require('../../src/Assets/Fonts/Montserrat-SemiBold.ttf'),
    'Poppins-Bold': require('../../src/Assets/Fonts/Poppins-Bold.ttf'),
    'Poppins-Medium': require('../../src/Assets/Fonts/Poppins-Medium.ttf'),
    'Poppins-Medium': require('../../src/Assets/Fonts/Poppins-Medium.ttf'),
    // 'Futura PT Bold': require('../../src/Assets/Fonts/Futura PT Bold.ttf')
  });
  if (!isLoaded) {
    return <AppLoading onError={(err) => console.log(err)} />
  } else {
    return (
      <NavigationContainer>
        <AuthNavigator />
      </NavigationContainer>
    );
  }
}

export default RootNavigator;

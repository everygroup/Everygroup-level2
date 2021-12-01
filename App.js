import React from 'react';
import {View, Text} from 'react-native';
import RootNavigator from './src/Navigation/RootNavigator';

const App = () => {
  return (
    <View style={{flex: 1}}>
      <RootNavigator />
    </View>
  );
};

export default App;

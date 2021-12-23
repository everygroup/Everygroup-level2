import React from 'react';
import {View} from 'react-native';
import RootNavigator from './src/Navigation/RootNavigator';
import {Provider} from 'react-redux';

const App = () => {
  return (
    <View style={{flex: 1}}>
      <RootNavigator />
    </View>
  );
};

export default App;

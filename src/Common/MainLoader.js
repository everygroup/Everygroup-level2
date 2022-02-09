import React from 'react';

import {View, Dimensions, Image} from 'react-native';
const {width, height} = Dimensions.get('window');
const MainLoader = ({heightValue, Spinnerheight, Spinnerwidth}) => {
  return (
    <View
      style={{
        width: width,
        height: height / heightValue,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Image
        source={require('../Assets/animation/350.gif')}
        style={{height: 50, width: 50, resizeMode: 'contain'}}
      />
    </View>
  );
};

export default MainLoader;

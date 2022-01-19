import React, {useState, useRef} from 'react';
import {View, Text, Animated} from 'react-native';

const TestPage = () => {
  const [leftValue] = useState(new Animated.Value(1));

  const textPress = () => {
    Animated.timing(leftValue, {
      toValue: 1,
      duration: 1500,
      useNativeDriver: true,
    }).start();
  };

  const widthInterpolate = leftValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['20%', '50%'],
  });

  const heightInterpolate = leftValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['20%', '30%'],
  });

  const animatedStyle = {
    width: widthInterpolate,
    height: heightInterpolate,
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text onPress={textPress}>Hi how are you</Text>

      <Animated.View style={[animatedStyle]}>
        <Text>asdf</Text>
      </Animated.View>
    </View>
  );
};

// interpolate ///////////////////
// const rotateInterpolate = leftValue.interpolate({
//   inputRange: [0, 360],
//   outputRange: ['0deg', '-45deg'],
// });

// end of interpolate

// transform : [{translateX:leftvalue}]

// animation from vertical & horizontal
// const [position] = useState(new Animated.ValueXY({x: 0, y: 0}));

//   const textPress = () => {
//     Animated.timing(position, {
//       toValue: {x: 200, y: 200},
//       duration: 1500,
//       useNativeDriver: false,
//     }).start();
//   };

// return (
//   <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//     <Text onPress={textPress}>Hi how are you</Text>

//     <Animated.View postion.getLayout()
//       style={
//         {
//           height: 50,
//           width: 50,
//           backgroundColor: 'red',
//
//         },
//       }></Animated.View>
//   </View>
////////////////////////////////////////////
// const textPress = () => {
//   Animated.timing(leftValue, {
//     toValue: 300,
//     duration: 1000,
//     useNativeDriver: false,
//   }).start();
// };

// return (
//   <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//     <Text onPress={textPress}>Hi how are you</Text>

//     <Animated.View
//       style={[
//         {
//           height: 50,
//           width: 50,
//           backgroundColor: 'red',
//           marginLeft: leftValue,
//         },
//       ]}></Animated.View>
//   </View>
// );
// };
// end of animation

// opacity Animation ////////////////////////////////////
// const textPress = () => {
//   Animated.timing(opacity, {
//     toValue: 1,
//     duration: 3000,
//     useNativeDriver: false,
//   }).start();
// };
// end of opacity animation///////////////////////////////

export default TestPage;

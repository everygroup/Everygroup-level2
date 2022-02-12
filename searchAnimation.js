import React, {Component, useState} from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  Animated,
  TouchableWithoutFeedback,
  StyleSheet,
} from 'react-native';

const App = () => {
  const [fadeSearch, setFadeSearch] = useState(new Animated.Value(1));
  // const fadeCross = useState(new Animated.Value(0));
  const [leftViewScale, setLeftViewScale] = useState(new Animated.Value(0));
  const [rightViewScale, setRightViewScale] = useState(new Animated.Value(0));
  const [showingCross, setShowingSearch] = useState(false);

  /////////// fade animation for search icon //////////////////
  const hideSearchbar = () => {
    Animated.timing(fadeSearch, {
      toValue: 0, // Animate to opacity: 1 (opaque)
      duration: 300, // Make it take a while
      useNativeDriver: true,
    }).start(() => {
      setFadeSearch(new Animated.Value(1));
      setShowingSearch(true);

      crossAnimation();
    });
  };
  //////////// cross animation function ///////////
  const crossAnimation = () => {
    Animated.timing(rightViewScale, {
      toValue: 51,
      timing: 100,
    }).start(() =>
      Animated.timing(leftViewScale, {
        toValue: 50,
        timing: 100,
      }).start(),
    );
  };

  //////// fade animation for cross icons ///////////
  const closeCrossIcon = () => {
    Animated.timing(rightViewScale, {
      toValue: 0, // Animate to opacity: 1 (opaque)
      duration: 200, // Make it take a while
      useNativeDriver: false,
    }).start(() => {
      Animated.timing(leftViewScale, {
        toValue: 0,
        timing: 200,
        useNativeDriver: false,
      }).start(() => {
        setShowingSearch(false);
      });
    });
  };

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <View
        style={{
          width: 200,
          height: 200,
          backgroundColor: 'green',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <TouchableOpacity
          style={{
            height: 40,
            width: 40,
          }}
          onPress={() => {
            if (showingCross) {
              closeCrossIcon();
            } else {
              hideSearchbar();
            }
          }}>
          {!showingCross ? (
            <Animated.View style={{opacity: fadeSearch, height: 50, width: 50}}>
              <TouchableWithoutFeedback
                onPress={() => {
                  hideSearchbar();
                }}>
                <Image
                  source={require('./search.png')}
                  style={{width: 50, height: 50, resizeMode: 'contain'}}
                />
              </TouchableWithoutFeedback>
            </Animated.View>
          ) : (
            <View
              style={{
                width: 50,
                height: 50,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'yellow',
              }}>
              <Animated.View
                style={[
                  Styles.box,
                  {
                    width: rightViewScale,
                    transform: [{rotate: '45deg'}],
                    backgroundColor: 'blue',
                    top: 5,
                  },
                ]}></Animated.View>
              <Animated.View
                style={[
                  Styles.box,
                  {
                    width: leftViewScale,
                    transform: [{rotate: '-48deg'}],
                  },
                ]}></Animated.View>
            </View>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default App;

const Styles = StyleSheet.create({
  box: {
    height: 5,
    width: 50,
    backgroundColor: 'red',
    borderRadius: 5,
  },
});

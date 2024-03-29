import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import FontStyle from '../Assets/Fonts/FontStyle';

const Button = ({
  onPress,
  buttonText,
  width,
  borderRadius,
  buttonColor1,
  buttonColor2,
  fontSize,
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <LinearGradient
        colors={
          buttonColor1 ? [buttonColor1, buttonColor2] : ['#FFA420', '#FE7027']
        }
        style={[
          styles.linearGradient,
          {width: width || 206, borderRadius: borderRadius || 20},
        ]}>
        <Text style={[styles.buttonText, {fontSize: fontSize || 19}]}>
          {buttonText}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

var styles = StyleSheet.create({
  linearGradient: {
    minHeight: 40,
    maxHeight: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontFamily: FontStyle.MontExtBold,
    textAlign: 'center',
    color: '#ffffff',
    backgroundColor: 'transparent',
    width: '95%',
    paddingVertical: '1%',
  },
});

export default Button;

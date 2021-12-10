import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import FontStyle from '../Assets/Fonts/FontStyle';

const Button = ({onPress, buttonText, width}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <LinearGradient
        colors={['#FFA420', '#FE7027']}
        style={[styles.linearGradient, {width: width || 206}]}>
        <Text style={styles.buttonText}>{buttonText}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

var styles = StyleSheet.create({
  linearGradient: {
    borderRadius: 20,

    minHeight: 35,
    maxHeight: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontFamily: FontStyle.MontExtBold,
    textAlign: 'center',
    color: '#ffffff',
    backgroundColor: 'transparent',
    width: '95%',
    paddingVertical: '1%',
  },
});

export default Button;

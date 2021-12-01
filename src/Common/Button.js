import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Button = ({onPress, buttonText}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <LinearGradient
        colors={['#FFA420', '#FE7027']}
        style={styles.linearGradient}>
        <Text style={styles.buttonText}>{buttonText}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

var styles = StyleSheet.create({
  linearGradient: {
    borderRadius: 20,
    width: 206,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 1,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
});

export default Button;

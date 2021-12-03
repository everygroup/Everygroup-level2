import React from 'react';
import {StyleSheet, View, TextInput} from 'react-native';
import FontStyle from '../Assets/Fonts/FontStyle';

const Input = ({
  placeholder,
  maxLength,
  placeholderTextColor,
  keyboardType,
  height,
  multiline,
  secureTextEntry,

  onChangeText,
  value,

  marginTop,
}) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholderTextColor={placeholderTextColor || 'grey'}
        multiline={multiline ? multiline : false}
        onChangeText={onChangeText}
        value={value}
        placeholder={placeholder}
        keyboardType={keyboardType}
        maxLength={maxLength || 55}
        secureTextEntry={secureTextEntry}
        autoCorrect={false}
        style={[
          styles.textStyle,
          {
            fontFamily: FontStyle.poppinsMedium,
            height: height || 39,
            textAlignVertical: 'top',
          },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 14,
    width: '80%',
    color: '#205072',
  },
  inputContainer: {
    width: '80%',
    alignItems: 'center',
    borderWidth: 1,
    height: 39,
    borderRadius: 6,
    borderColor: '#205072',
    borderWidth: 2,
    marginVertical: 10,
    alignItems: 'center',
  },
});

export default Input;

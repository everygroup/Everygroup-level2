import React from 'react';
import {StyleSheet, View, TextInput} from 'react-native';
import FontStyle from '../Assets/Fonts/FontStyle';
import Icon from 'react-native-vector-icons/FontAwesome5';
const Input = ({
  placeholder,
  maxLength,
  placeholderTextColor,
  keyboardType,
  height,
  multiline,
  secureTextEntry,
  showPassword,
  onChangeText,
  value,
  iconName,
  iconPress,
  bgColor,
  bdWidth,
}) => {
  return (
    <View
      style={[
        styles.inputContainer,
        {
          backgroundColor: bgColor || null,
          borderWidth: bdWidth || 2,
        },
      ]}>
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
      {iconName ? (
        <Icon
          name={iconName}
          size={showPassword ? 24 : 20}
          color="#205072"
          onPress={iconPress}
        />
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 14,
    width: '85%',
    color: '#205072',
    paddingLeft: 10,
    fontFamily: FontStyle.MontSemiBold,
  },
  inputContainer: {
    width: '80%',
    flexDirection: 'row',
    alignItems: 'center',
    height: 39,
    borderRadius: 6,
    borderColor: '#205072',
    marginVertical: 10,
    alignItems: 'center',
  },
});

export default Input;

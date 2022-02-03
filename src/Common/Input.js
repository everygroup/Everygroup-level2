import React from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import FontStyle from '../Assets/Fonts/FontStyle';
import Icon from 'react-native-vector-icons/Entypo';
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
  icon,
  iconPress,
  bgColor,
  bdWidth,
  borderColor,
  inputWidth,
  iconColor,
  onFocus,
  imageSource,
  imageSource1,
}) => {
  return (
    <View
      style={[
        styles.inputContainer,
        {
          backgroundColor: bgColor || null,
          borderWidth: bdWidth || 2,
          borderColor: borderColor || '#205072',
          width: inputWidth || '80%',
        },
      ]}>
      <TextInput
        onFocus={onFocus}
        placeholderTextColor={placeholderTextColor || 'grey'}
        multiline={multiline ? multiline : false}
        onChangeText={onChangeText}
        value={value}
        placeholder={placeholder}
        keyboardType={keyboardType}
        maxLength={maxLength || 400}
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
      {icon == 'available' ? (
        <TouchableWithoutFeedback onPress={iconPress}>
          {showPassword ? (
            <Image
              source={imageSource}
              style={{height: 18, width: 18, resizeMode: 'contain'}}
            />
          ) : (
            <Image
              source={imageSource1}
              style={{height: 18, width: 18, resizeMode: 'contain'}}
            />
          )}
        </TouchableWithoutFeedback>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 16,
    width: '85%',
    color: '#205072',
    paddingLeft: 10,
    fontFamily: FontStyle.MontSemiBold,
  },
  inputContainer: {
    flexDirection: 'row',
    height: 39,
    borderRadius: 6,
    marginBottom: 10,
    alignItems: 'center',
  },
});

export default Input;

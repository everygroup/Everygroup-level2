import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import FontStyle from '../Assets/Fonts/FontStyle';

const EditInput = ({
  onChangeText,
  value,
  editable,
  height,
  multiline,
  placeholder,
  placeholderTextColor,
  icon,
  iconPress,
  imageSource1,
  onFocus,
  bdWidth,
  borderColor,
}) => {
  return (
    <View
      style={[
        styles.inputContainer,
        {
          backgroundColor: editable ? '#F9F9F9' : '#fff',
          height: height || 42,
          borderWidth: bdWidth ? bdWidth : null,
          borderColor: borderColor ? borderColor : null,
        },
      ]}>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor || '#205072'}
        value={value}
        style={[styles.textInputStyle, {height: height || 42}]}
        onChangeText={onChangeText}
        editable={editable}
        multiline={multiline}
        onFocus={onFocus}
      />
      {icon == 'available' ? (
        <TouchableOpacity onPress={iconPress}>
          <Image
            source={imageSource1}
            style={{height: 18, width: 18, resizeMode: 'contain'}}
          />
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    borderRadius: 7,
    marginVertical: 10,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.27,
    shadowRadius: 2.65,
    elevation: 2,
    paddingHorizontal: '2.5%',
    marginVertical: '2.5%',
  },
  textInputStyle: {
    width: '90%',

    fontFamily: FontStyle.MontSemiBold,
    color: '#205072',
    fontSize: 17,
  },
});

export default EditInput;

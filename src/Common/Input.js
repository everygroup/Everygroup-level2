import React from 'react';
import {StyleSheet} from 'react-native';
import {TextInput} from 'react-native-paper';
// import {FONT} from '../config/theme';
import Icon from 'react-native-vector-icons/FontAwesome';
const Input = ({
  placeholder,
  maxLength,
  iconName,
  keyboardType,
  height,
  multiline,
  secureTextEntry,
  iconPress,
  onChangeText,
  value,
  editable,
  marginTop,
  showPassword,
}) => {
  return (
    <TextInput
      multiline={multiline ? multiline : false}
      onChangeText={onChangeText}
      value={value}
      // label={placeholder}
      placeholder={placeholder}
      keyboardType={keyboardType}
      mode="outlined"
      outlineColor="#205072"
      maxLength={maxLength || 55}
      secureTextEntry={secureTextEntry}
      autoCorrect={false}
      editable={editable}
      theme={{
        colors: {
          placeholder: '#205072',
          text: '#205072',
          primary: '#205072',
          background: '#fff',
        },
      }}
      style={[
        styles.textStyle,
        {
          height: height || 40,

          textAlignVertical: 'top',
          marginTop: marginTop,
        },
      ]}
      right={
        <TextInput.Icon
          name={() => (
            <Icon
              name={iconName}
              size={showPassword ? 24 : 20}
              color={'#205072'}
              onPress={iconPress}
            />
          )}
        />
      }
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 20,
    // fontFamily: FONT.bold,
    width: '70%',
    marginVertical: '2.5%',
  },
});

export default Input;

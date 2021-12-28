import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import FontStyle from '../../Assets/Fonts/FontStyle';
import {useNavigation} from '@react-navigation/core';
import Input from '../../Common/Input';
import Button from '../../Common/Button';
import {useDispatch, useSelector} from 'react-redux';
import {changeProfile} from '../../../Slice/ProfileReducer';
import {HelperText} from 'react-native-paper';
import Styles from './Style';

const UpdatePassword = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [passwordError, setPasswordError] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = useState('');
  const [confirmPasswordErrorMessage, setConfirmPasswordErrorMessage] =
    useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const {error, loading, value} = useSelector(state => {
    return state;
  });

  const submit = () => {
    if (password == '') {
      setPasswordError(true);
      setPasswordErrorMessage('Password should not be blank');
    } else if (confirmPassword == '') {
      setConfirmPasswordError(true);
      setConfirmPasswordErrorMessage('Confirm Password should not be blank');
    } else if (password != confirmPassword) {
      setConfirmPasswordError(true);
      setConfirmPasswordErrorMessage('confirm password not matched');
    } else {
      dispatch(changeProfile({password}));
      // navigation.navigate('SentEmail');
    }
  };

  useSelector(state => {
    console.log(state, 'pass');
    return state;
  });

  return (
    <View
      style={{
        paddingTop: '25%',
        height: '100%',
        backgroundColor: '#fff',
        alignItems: 'center',
      }}>
      <TouchableOpacity
        style={{
          alignSelf: 'flex-start',
          paddingHorizontal: '2.5%',
          marginTop: '5%',
        }}
        onPress={() => navigation.goBack()}>
        <Image
          source={require('../../Assets/Images/back.png')}
          style={{
            width: 23,
            height: 23,
            resizeMode: 'contain',
          }}
        />
      </TouchableOpacity>
      <Text
        style={{
          fontFamily: FontStyle.MontSemiBold,
          fontSize: 20,
          color: '#205072',
          width: '75%',
          textAlign: 'center',
          marginVertical: '5%',
        }}>
        Gib dein neues Passwort ein
      </Text>
      {passwordError == true ? (
        <HelperText
          style={[Styles.helperText, {paddingLeft: '10%'}]}
          type="error">
          {passwordErrorMessage}
        </HelperText>
      ) : null}
      <Input
        placeholder="Neues Passwort"
        placeholderTextColor="#205072"
        iconName={showPassword ? 'eye' : 'eye-with-line'}
        iconPress={() => setShowPassword(!showPassword)}
        secureTextEntry={!showPassword}
        onChangeText={text => {
          setPassword(text), setPasswordError(false);
        }}
      />
      {confirmPasswordError == true ? (
        <HelperText
          style={[Styles.helperText, {paddingLeft: '10%'}]}
          type="error">
          {confirmPasswordErrorMessage}
        </HelperText>
      ) : null}
      <Input
        placeholder="Passwort wiederholen"
        placeholderTextColor="#205072"
        iconName={showConfirmPassword ? 'eye' : 'eye-with-line'}
        iconPress={() => setShowConfirmPassword(!showConfirmPassword)}
        secureTextEntry={!showConfirmPassword}
        onChangeText={text => {
          setConfirmPassword(text), setConfirmPasswordError(false);
        }}
      />
      <View style={{marginVertical: '5%', width: '100%', alignItems: 'center'}}>
        <Button onPress={submit} buttonText="passwort ändern" />
      </View>
      <View
        style={{
          justifyContent: 'flex-end',
          flex: 1,
        }}>
        <Image
          source={require('../../Assets/Images/greyLogo.png')}
          style={{
            width: 94,
            height: 40,
            resizeMode: 'contain',
            alignSelf: 'center',
            bottom: 30,
          }}
        />
      </View>
    </View>
  );
};

export default UpdatePassword;

import React, {useState, useEffect} from 'react';
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
  const [successMessage, setSuccessMessage] = useState('');
  const submit = () => {
    setSuccessMessage('');
    if (password == '') {
      setPasswordError(true);
      setPasswordErrorMessage('Passwort wird benötigt');
    } else if (confirmPassword == '') {
      setConfirmPasswordError(true);
      setConfirmPasswordErrorMessage('Passwort bestätigen ist erforderlich');
    } else if (password != confirmPassword) {
      setConfirmPasswordError(true);
      setConfirmPasswordErrorMessage('Passwörter stimmen nicht überein');
    } else if (password.length < 6) {
      setPasswordError(true);
      setPasswordErrorMessage('Passwort muss mindestens 6 Zeichen haben');
    } else {
      dispatch(changeProfile({password}));
    }
  };

  const {error, loading, value} = useSelector(state => {
    return state.changeProfile;
  });

  useEffect(() => {
    setConfirmPassword(true);
    setConfirmPasswordErrorMessage(error.toString());
  }, [error]);

  useEffect(() => {
    if (value == 'success') {
      setSuccessMessage('Passwort erfolgreich geändert');
    }
  }, [value]);

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
      <View style={Styles.errorContainer}>
        {passwordError == true ? (
          <HelperText
            style={[Styles.helperText, {paddingLeft: '10%'}]}
            type="error">
            {passwordErrorMessage}
          </HelperText>
        ) : null}
      </View>
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
      <View style={Styles.errorContainer}>
        {confirmPasswordError == true ? (
          <HelperText
            style={[Styles.helperText, {paddingLeft: '10%'}]}
            type="error">
            {confirmPasswordErrorMessage}
          </HelperText>
        ) : null}
      </View>
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
      {successMessage != '' ? (
        <Text
          style={{
            alignSelf: 'center',
            fontFamily: FontStyle.poppinsMedium,
            fontSize: 11,
            color: '#06BA63',
          }}>
          {successMessage}
        </Text>
      ) : null}
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

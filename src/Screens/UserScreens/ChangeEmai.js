import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import FontStyle from '../../Assets/Fonts/FontStyle';

import Styles from './Style';
import {useNavigation} from '@react-navigation/core';
import Input from '../../Common/Input';
import Button from '../../Common/Button';
import {HelperText} from 'react-native-paper';

const ChangeEmail = () => {
  const navigation = useNavigation();
  const [showPassword, setShowPassword] = useState(false);
  const [passwordText, setPasswordText] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const submit = () => {
    if (passwordText == '') {
      setEmailError(true);
      setErrorMessage('Passwort wird benötigt');
    } else {
      navigation.navigate('UpdateEmail');
    }
  };

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
          marginVertical: '10%',
        }}>
        Gib dein Passwort ein, um deine E-Mail zu ändern
      </Text>
      <View style={{width: '100%', alignItems: 'center'}}>
        {emailError == true ? (
          <HelperText
            style={[Styles.helperText, {paddingLeft: '10%'}]}
            type="error">
            {errorMessage}
          </HelperText>
        ) : null}
        <Input
          placeholder="passwort"
          placeholderTextColor="#205072"
          iconName={showPassword ? 'eye' : 'eye-with-line'}
          iconPress={() => setShowPassword(!showPassword)}
          secureTextEntry={!showPassword}
          onChangeText={text => {
            setPasswordText(text);
            setEmailError(false);
          }}
        />
      </View>
      <View
        style={{marginVertical: '10%', width: '100%', alignItems: 'center'}}>
        <Button buttonText="Weiter" onPress={submit} />
        <Text style={{fontSize: 17, color: '#0A49E0', marginVertical: '2.5%'}}>
          Passwort vergessen
        </Text>
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

export default ChangeEmail;

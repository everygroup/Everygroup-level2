import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import FontStyle from '../../Assets/Fonts/FontStyle';
import Header from '../../Common/Header';
import Styles from '../UserScreens/Style';
import {useNavigation} from '@react-navigation/core';
import Input from '../../Common/Input';
import Button from '../../Common/Button';

const ChangeEmail = () => {
  const navigation = useNavigation();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View
      style={{
        paddingTop: '25%',
        height: '100%',
        backgroundColor: '#fff',
        alignItems: 'center',
      }}>
      <Header />
      <TouchableOpacity
        style={{alignSelf: 'flex-start', paddingHorizontal: '2.5%'}}
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
          fontSize: 18,
          color: '#205072',
          width: '75%',
          textAlign: 'center',
          marginVertical: '5%',
        }}>
        Gib dein Passwort ein, um deine E-Mail zu ändern
      </Text>
      <Input
        placeholder="passwort"
        placeholderTextColor="#205072"
        iconName={showPassword ? 'eye' : 'eye-slash'}
        iconPress={() => setShowPassword(!showPassword)}
        secureTextEntry={!showPassword}
      />
      <View style={{marginVertical: '5%', width: '100%', alignItems: 'center'}}>
        <Button
          buttonText="Weiter"
          onPress={() => navigation.navigate('UpdateEmail')}
        />
        <Text style={{fontSize: 15, color: '#0A49E0', marginVertical: '2.5%'}}>
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

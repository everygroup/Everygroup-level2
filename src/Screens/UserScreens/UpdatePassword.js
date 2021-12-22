import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import FontStyle from '../../Assets/Fonts/FontStyle';
import {useNavigation} from '@react-navigation/core';
import Input from '../../Common/Input';
import Button from '../../Common/Button';

const UpdatePassword = () => {
  const navigation = useNavigation();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

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
      <Input
        placeholder="Neues Passwort"
        placeholderTextColor="#205072"
        iconName={showPassword ? 'eye' : 'eye-with-line'}
        iconPress={() => setShowPassword(!showPassword)}
        secureTextEntry={!showPassword}
      />
      <Input
        placeholder="Passwort wiederholen"
        placeholderTextColor="#205072"
        iconName={showConfirmPassword ? 'eye' : 'eye-with-line'}
        iconPress={() => setShowConfirmPassword(!showConfirmPassword)}
        secureTextEntry={!showConfirmPassword}
      />
      <View style={{marginVertical: '5%', width: '100%', alignItems: 'center'}}>
        <Button buttonText="passwort ändern" />
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

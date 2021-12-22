import React, {useEffect, useState} from 'react';
import {View, Text, Image, SafeAreaView, TouchableOpacity} from 'react-native';
import Button from '../../Common/Button';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Input from '../../Common/Input';
import {useNavigation} from '@react-navigation/native';
// import FontStyle from '../../Assets/Fonts/FontStyle';
// import HeaderAuth from './HeaderAuth';
const SignIn = () => {
  const [showPassword, setShowPassword] = useState(true);
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const iconPress = () => {
    setShowPassword(!showPassword), setSecureTextEntry(!secureTextEntry);
  };
  const navigation = useNavigation();

  return (
    <SafeAreaView
      style={{backgroundColor: '#fff', flex: 1, alignItems: 'center'}}>
      <View
        style={{
          width: '100%',
          alignItems: 'center',
          height: '30%',
          justifyContent: 'center',
        }}>
        <Input placeholder="E-Mail" placeholderTextColor="#205072" />
        <Input
          placeholder="Passwort"
          placeholderTextColor="#205072"
          iconName={showPassword ? 'eye-with-line' : 'eye'}
          showPassword={showPassword}
          iconPress={iconPress}
          secureTextEntry={secureTextEntry}
        />
      </View>
      <Button
        onPress={() => navigation.navigate('HomeNavigator')}
        buttonText="Anmelden"
      />
      <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
        <Text style={{fontSize: 17, color: '#0A49E0', marginVertical: '5%'}}>
          Passwort vergessen
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default SignIn;

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
      {/* <HeaderAuth /> */}
      {/* <View
        style={{
          flexDirection: 'row',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Icon
          name="chevron-left"
          size={30}
          color="#205072"
          style={{paddingLeft: '4%'}}
          onPress={() => navigation.navigate('SplashScreen')}
        />
        <Image
          source={require('../../Assets/Images/orangeLogo.png')}
          style={{
            height: 31,
            width: 33,
            alignSelf: 'center',
            marginRight: '4%',
          }}
        />
        <View style={{width: '4%'}} />
      </View>
      <Text
        style={{
          color: '#FFA420',
          fontSize: 32,
          fontFamily: FontStyle.FuturaPTBold,
        }}>
        everygroup
      </Text> */}

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
        <Text style={{fontSize: 15, color: '#0A49E0', marginVertical: '5%'}}>
          Passwort vergessen
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default SignIn;

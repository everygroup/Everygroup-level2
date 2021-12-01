import React, {useState} from 'react';
import {View, Text, Image, SafeAreaView} from 'react-native';
import Button from '../../Common/Button';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Input from '../../Common/Input';
import {useNavigation} from '@react-navigation/native';
const SignIn = () => {
  const [showPassword, setShowPassword] = useState(true);
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const iconPress = () => {
    setShowPassword(!showPassword), setSecureTextEntry(!secureTextEntry);
  };
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{flex: 1, alignItems: 'center'}}>
      <View
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
        />
        <Image
          source={require('../../Assets/Images/blueLogo.png')}
          style={{
            height: 31,
            width: 33,
            alignSelf: 'center',
            marginRight: '4%',
          }}
        />
        <View style={{width: '4%'}} />
      </View>
      <Text style={{color: '#FFA420', fontSize: 32}}>everygroup</Text>

      <View
        style={{
          width: '100%',
          alignItems: 'center',
          height: '30%',
          justifyContent: 'center',
        }}>
        <Input placeholder="E-Mail" />
        <Input
          placeholder="Passwort"
          iconName={showPassword ? 'eye-slash' : 'eye'}
          showPassword={showPassword}
          iconPress={iconPress}
          secureTextEntry={secureTextEntry}
        />
      </View>
      <Button
        onPress={() => navigation.navigate('HomeNavigator')}
        buttonText="Anmelden"
      />
      <Text style={{fontSize: 15, color: '#0A49E0', marginVertical: '5%'}}>
        Passwort vergessen
      </Text>
    </SafeAreaView>
  );
};

export default SignIn;

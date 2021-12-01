import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Button from '../../Common/Button';
import {useNavigation} from '@react-navigation/native';

const SplashScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button
        onPress={() => navigation.navigate('SignIn')}
        buttonText="Anmelden"
      />

      <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
        <Text style={{color: '#FFA420', marginVertical: '7%'}}>
          Registrieren
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SplashScreen;

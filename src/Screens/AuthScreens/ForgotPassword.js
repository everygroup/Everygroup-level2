import React, {useState} from 'react';
import {View, Text, Image, SafeAreaView, TouchableOpacity} from 'react-native';
import Button from '../../Common/Button';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Input from '../../Common/Input';
import {useNavigation} from '@react-navigation/native';
import FontStyle from '../../Assets/Fonts/FontStyle';
const ForgotPassword = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView
      style={{flex: 1, alignItems: 'center', backgroundColor: '#fff'}}>
      <View
        style={{
          width: '100%',
          alignItems: 'center',
          height: '30%',
          justifyContent: 'center',
        }}>
        <Text
          style={{
            fontSize: 14,
            fontFamily: FontStyle.MontMedium,
            width: '78%',
            color: '#205072',
            marginVertical: '2.5%',
          }}>
          Gib deine E-Mail ein und wir senden Dir eine Nachricht mit der du dein
          Passwort zurücksetzen kannst.
        </Text>
        <Input placeholder="E-Mail" placeholderTextColor="#205072" />
      </View>
      <Button
        // onPress={() => navigation.navigate('UpdatePassword')}
        buttonText="E-Mail senden"
      />
    </SafeAreaView>
  );
};

export default ForgotPassword;

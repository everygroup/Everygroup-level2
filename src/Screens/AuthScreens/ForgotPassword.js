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
          onPress={() => navigation.goBack()}
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
      </Text>

      <View
        style={{
          width: '100%',
          alignItems: 'center',
          height: '30%',
          justifyContent: 'center',
        }}>
        <Text
          style={{
            fontSize: 13,
            fontFamily: FontStyle.MontMedium,
            width: '70%',
            color: '#205072',
          }}>
          Gib deine E-Mail ein und wir senden Dir eine Nachricht mit der du dein
          Passwort zurücksetzen kannst.
        </Text>
        <Input placeholder="E-Mail" placeholderTextColor="#205072" />
      </View>
      <Button
        onPress={() => navigation.navigate('UpdatePassword')}
        buttonText="E-Mail senden"
      />
    </SafeAreaView>
  );
};

export default ForgotPassword;

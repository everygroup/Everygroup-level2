import React from 'react';
import {View, Text, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const VerifyMail = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{
          width: '100%',
          alignItems: 'center',
          height: '40%',
        }}>
        <Image
          source={require('../../Assets/Images/blueLogo.png')}
          style={{
            height: 31,
            width: 33,
            alignSelf: 'center',
            marginRight: '4%',
          }}
        />
        <Text style={{color: '#FFA420', fontSize: 32}}>everygroup</Text>
      </View>
      <View style={{alignItems: 'center', height: '40%'}}>
        <Text
          style={{
            fontSize: 19,
            color: '#205072',
            width: '42%',
            textAlign: 'center',
          }}>
          Wir haben dir eine E-Mail geschickt. Bitte bestätige sie und dann
          geht`s los!
        </Text>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('ConfirmationScreen')}
        style={{alignItems: 'center', height: '40%'}}>
        <Text
          style={{
            color: '#FF2020',
            width: '40%',
            textAlign: 'center',
            fontSize: 15,
          }}>
          Link in the email leads to the next screen
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default VerifyMail;

import React from 'react';
import {View, Text, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import FontStyle from '../../Assets/Fonts/FontStyle';
import Icon from 'react-native-vector-icons/FontAwesome5';

const VerifyMail = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <View
        style={{
          width: '100%',
          alignItems: 'center',
          height: '15%',
        }}>
        <Image
          source={require('../../Assets/Images/orangeLogo.png')}
          style={{
            height: 31,
            width: 33,
            alignSelf: 'center',
          }}
        />
        <Text style={{color: '#FFA420', fontSize: 32}}>everygroup</Text>
      </View>
      <View style={{alignItems: 'center', height: '70%'}}>
        <Image
          source={require('../../Assets/Images/newLetter.png')}
          style={{width: 200, height: 200}}
        />
        <Text
          style={{
            fontSize: 19,
            color: '#205072',
            width: '48%',
            textAlign: 'center',
            fontFamily: FontStyle.MontBold,
          }}>
          Wir haben dir eine E-Mail geschickt. Bitte bestätige sie und dann
          geht`s los!
        </Text>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('ConfirmationScreen')}
        style={{alignItems: 'center', height: '15%'}}>
        <Text
          style={{
            color: '#FF2020',
            width: '50%',
            textAlign: 'center',
            fontSize: 15,
            fontFamily: FontStyle.MontSemiBold,
          }}>
          Link in the email leads to the next screen
        </Text>
        <Icon name={'long-arrow-alt-right'} size={60} color="#FF3333" />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default VerifyMail;

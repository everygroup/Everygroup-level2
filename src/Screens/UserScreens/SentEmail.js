import React from 'react';
import {View, Text, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import FontStyle from '../../Assets/Fonts/FontStyle';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Header from '../../Common/Header';

const SentEmail = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView
      style={{flex: 1, backgroundColor: '#fff', justifyContent: 'center'}}>
      <Header />
      <View
        style={{alignItems: 'center', height: '90%', justifyContent: 'center'}}>
        <Image
          source={require('../../Assets/Images/newLetter.png')}
          style={{width: 260, height: 200}}
        />
        <Text
          style={{
            fontSize: 25,
            color: '#205072',
            width: '60%',
            textAlign: 'center',
            fontFamily: FontStyle.MontBold,
          }}>
          Wir haben dir eine E-Mail geschickt.
        </Text>

        <Text
          style={{
            fontSize: 17,
            color: '#205072',
            width: '60%',
            textAlign: 'center',
            fontFamily: FontStyle.MontSemiBold,
            marginVertical: '10%',
          }}>
          Bitte bestätige die E-Mail. Solltest du keine erhalten haben dann
          schau mal in deinem Spamordner nach.
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
    </SafeAreaView>
  );
};

export default SentEmail;

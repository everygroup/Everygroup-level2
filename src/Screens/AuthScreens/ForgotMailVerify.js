import React from 'react';
import {View, Text, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import FontStyle from '../../Assets/Fonts/FontStyle';
import Button from '../../Common/Button';

const ForgotMailVerify = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <View style={{alignItems: 'center', height: '70%'}}>
        <Image
          source={require('../../Assets/Images/newLetter.png')}
          style={{
            width: 180,
            height: 213,
            resizeMode: 'contain',
          }}
        />
        <Text
          style={{
            fontSize: 23,
            color: '#205072',
            textAlign: 'center',
            fontFamily: FontStyle.MontBold,
            marginVertical: '3%',
          }}>
          {` Wir haben dir eine\n E-Mail geschickt.`}
        </Text>
        <Text
          style={{
            fontFamily: FontStyle.MontSemiBold,
            color: '#205072',
            fontSize: 15,
            textAlign: 'center',
          }}>
          {`Folge bitte den weiteren Schritten\n in der E-Mail. Solltest du keine\n erhalten dann schau mal in\n deinem Spamordner nach.`}
        </Text>
        <View style={{marginTop: '10%'}}>
          <Button
            buttonText="Anmelden"
            onPress={() => navigation.navigate('SignIn')}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ForgotMailVerify;

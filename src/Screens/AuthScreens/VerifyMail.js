import React from 'react';
import {View, Text, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import FontStyle from '../../Assets/Fonts/FontStyle';
import Icon from 'react-native-vector-icons/FontAwesome5';

const VerifyMail = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
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
        <Icon name={'long-arrow-alt-right'} size={60} color="#FF3333" />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default VerifyMail;

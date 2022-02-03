import React, {useEffect} from 'react';
import {View, Text, SafeAreaView, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import FontStyle from '../../Assets/Fonts/FontStyle';
import AsyncStorageLib from '@react-native-async-storage/async-storage';
import {useDispatch} from 'react-redux';
import {resetToken} from '../../../Slice/AuthReducer';

const SentEmail = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  useEffect(() => {
    AsyncStorageLib.removeItem('token');
    dispatch(resetToken(''));
    setTimeout(() => {
      navigation.navigate('SplashScreen');
    }, 5000);
  }, []);
  return (
    <SafeAreaView
      style={{flex: 1, backgroundColor: '#fff', justifyContent: 'center'}}>
      <View
        style={{alignItems: 'center', height: '90%', justifyContent: 'center'}}>
        <Image
          source={require('../../Assets/Images/newLetter.png')}
          style={{
            width: 220,
            height: 180,
            resizeMode: 'contain',
            marginBottom: 40,
          }}
        />
        <Text
          style={{
            fontSize: 25,
            color: '#205072',
            width: '80%',
            textAlign: 'center',
            fontFamily: FontStyle.MontBold,
          }}>
          {`Wir haben dir eine\n E-Mail geschickt.`}
        </Text>

        <Text
          style={{
            fontSize: 17,
            color: '#205072',
            width: '100%',
            textAlign: 'center',
            fontFamily: FontStyle.MontSemiBold,
            marginVertical: '10%',
          }}>
          {`Bitte bestätige die E-Mail.\n Solltest du keine erhalten haben\n dann schau mal in deinem\n Spamordner nach.`}
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

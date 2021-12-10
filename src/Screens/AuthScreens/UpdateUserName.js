import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import FontStyle from '../../Assets/Fonts/FontStyle';
import Header from '../../Common/Header';
import Styles from '../UserScreens/Style';
import {useNavigation} from '@react-navigation/core';
import Input from '../../Common/Input';
import Button from '../../Common/Button';
import AlertModal from '../../Common/AlertModal';

const UpdateUserName = () => {
  const navigation = useNavigation();
  const [showPassword, setShowPassword] = useState(false);
  const [modalValue, setModalValue] = useState(false);

  const closeModal = () => {
    setModalValue(false);
  };
  return (
    <View
      style={{
        paddingTop: '25%',
        height: '100%',
        backgroundColor: '#fff',
        alignItems: 'center',
      }}>
      <AlertModal modalValue={modalValue} closeModal={closeModal} />
      <Header />
      <TouchableOpacity
        style={{alignSelf: 'flex-start', paddingHorizontal: '2.5%'}}
        onPress={() => navigation.goBack()}>
        <Image
          source={require('../../Assets/Images/back.png')}
          style={{
            width: 23,
            height: 23,
            resizeMode: 'contain',
          }}
        />
      </TouchableOpacity>
      <Text
        style={{
          fontFamily: FontStyle.MontSemiBold,
          fontSize: 18,
          color: '#205072',
          width: '60%',
          textAlign: 'center',
          marginVertical: '5%',
        }}>
        Gib deinen neuen Nutzernamen ein
      </Text>
      <Input placeholder="SuperMan98" placeholderTextColor="#205072" />
      <Text
        style={{
          fontFamily: FontStyle.MontMedium,
          fontSize: 13,
          color: '#205072',
          width: '75%',
        }}>
        Du kannst deinen Nutzernamen nur einmal ändern.
      </Text>
      <View style={{marginVertical: '5%', width: '100%', alignItems: 'center'}}>
        <Button
          buttonText="Nutzernamen ändern"
          onPress={() => setModalValue(!modalValue)}
        />
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
    </View>
  );
};

export default UpdateUserName;

import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import Header from '../../Common/Header';
import Styles from './Style';
import {useNavigation} from '@react-navigation/native';
import Input from '../../Common/Input';
import Button from '../../Common/Button';
import FontStyle from '../../Assets/Fonts/FontStyle';

const Coupon = () => {
  const navigation = useNavigation();

  return (
    <View style={[Styles.mainContainer, {paddingTop: '25%'}]}>
      <Header />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: '5%',
        }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require('../../Assets/Images/back.png')}
            style={{width: 23, height: 23, resizeMode: 'contain'}}
          />
        </TouchableOpacity>
        <Text style={Styles.headingText}>Gutschein</Text>
        <View />
      </View>
      <View style={{alignItems: 'center'}}>
        <Input placeholder="Gutschein" placeholderTextColor="#205072" />
        <Text
          style={{
            fontFamily: FontStyle.MontBold,
            fontSize: 10,
            color: '#C7C7C7',
            width: '75%',
          }}>
          Auf unserem Instagram Account verlosen wir regelmäßig Gutscheine für
          Booster aber auch noch andere tolle Dinge wie Amazon-
          Geschenkgutscheine und vieles mehr!
        </Text>
        <View style={{marginVertical: '10%'}}>
          <Button buttonText="Einlösen" />
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            alignSelf: 'flex-start',
            paddingHorizontal: '10%',
          }}>
          <Image
            source={require('../../Assets/Images/instagram.png')}
            style={{height: 30, width: 30, resizeMode: 'contain'}}
          />
          <Text
            style={{
              fontFamily: FontStyle.MontBold,
              color: '#FFA420',
              fontSize: 15,
              left: 10,
            }}>
            everygroup
          </Text>
        </View>
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

export default Coupon;

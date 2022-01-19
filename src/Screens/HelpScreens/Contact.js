import React from 'react';
import {View, Text, ScrollView, Image, TouchableOpacity} from 'react-native';
import Styles from '../UserScreens/Style';
import Button from '../../Common/Button';
import EditInput from '../../Common/EditInput';
import FontStyle from '../../Assets/Fonts/FontStyle';
import {useNavigation} from '@react-navigation/native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const Contact = () => {
  const navigation = useNavigation();
  return (
    <View style={{paddingTop: '25%', height: '100%', backgroundColor: '#fff'}}>
      <KeyboardAwareScrollView
        keyboardShouldPersistTaps="handled"
        keyboardDismissMode="on-drag"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: '5%',
          paddingBottom: '20%',
          alignItems: 'center',
        }}>
        <View
          style={{
            flexDirection: 'row',
            width: '100%',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              source={require('../../Assets/Images/back.png')}
              style={{width: 23, height: 23, resizeMode: 'contain'}}
            />
          </TouchableOpacity>
          <Text
            style={{
              fontFamily: FontStyle.MontBold,
              fontSize: 26,
              color: '#205072',
              marginTop: '5%',
              marginBottom: '3%',
            }}>
            Kontakt
          </Text>
          <View style={{width: 23}} />
        </View>
        <EditInput
          placeholder="Name (optional)"
          placeholderTextColor="#B5B5B5"
        />

        <EditInput placeholder="E-Mail" placeholderTextColor="#B5B5B5" />

        <EditInput placeholder="Betreff" placeholderTextColor="#B5B5B5" />

        <EditInput
          placeholder="Nachricht"
          placeholderTextColor="#B5B5B5"
          height={144}
          multiline={true}
        />
        <View style={{marginVertical: '10%'}}>
          <Button borderRadius={10} buttonText="Abschicken" />
        </View>
        <View
          style={{
            height: 100,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={require('../../Assets/Images/email.png')}
            style={{height: 22, width: 33}}
          />
          <Text
            style={{
              fontFamily: FontStyle.MontSemiBold,
              fontSize: 17,
              color: '#205072',
            }}>
            hello@everygroup.me
          </Text>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default Contact;

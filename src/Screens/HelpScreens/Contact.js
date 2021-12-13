import React from 'react';
import {View, Text, ScrollView, StyleSheet, Image} from 'react-native';
import Header from '../../Common/Header';
import Styles from '../UserScreens/Style';
import Button from '../../Common/Button';
import EditInput from '../../Common/EditInput';
import FontStyle from '../../Assets/Fonts/FontStyle';

const Contact = () => {
  return (
    <View style={{paddingTop: '25%', height: '100%', backgroundColor: '#fff'}}>
      <Header />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: '5%',
          paddingBottom: '20%',
          alignItems: 'center',
        }}>
        <Text style={Styles.headingText}>Kontakt</Text>
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
              fontSize: 15,
              color: '#205072',
            }}>
            hello@everygroup.me
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default Contact;

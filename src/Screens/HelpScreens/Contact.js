import React from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import Header from '../../Common/Header';
import Input from '../../Common/Input';
import Styles from '../UserScreens/Style';
import Button from '../../Common/Button';

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
        <Input bdWidth={0.5} />
        <Input bdWidth={0.5} />
        <Input bdWidth={0.5} />

        <Button />
      </ScrollView>
    </View>
  );
};

export default Contact;

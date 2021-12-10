import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Button,
} from 'react-native';
import FontStyle from '../../Assets/Fonts/FontStyle';
import Header from '../../Common/Header';
import Input from '../../Common/Input';
import Styles from './Style';

const EditGroup = () => {
  return (
    <View style={{paddingTop: '25%', height: '100%', backgroundColor: '#fff'}}>
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
        <Text style={Styles.headingText}>Gruppe bearbeiten</Text>
        <View />
      </View>
      <View style={{alignItems: 'center'}}>
        <Input bdWidth={0.25} placeholder="Nordsee Gruppe" />
        <Input bdWidth={0.25} placeholder="Nordsee Gruppe" />
        <Input bdWidth={0.25} placeholder="Nordsee Gruppe" />
        <Input bdWidth={0.25} placeholder="Nordsee Gruppe" height={200} />
        <Input bdWidth={0.25} placeholder="#test #test #test #test #test" />

        <Text
          style={{
            fontSize: 15,
            fontFamily: FontStyle.MontBold,
            color: '#205072',
            width: '70%',
            textAlign: 'center',
          }}>
          Welche Sprache wird in dieser Gruppe gesprochen?
        </Text>
        <Input bdWidth={0.25} placeholder="Nordsee Gruppe" />
        <Text
          style={{
            fontSize: 15,
            fontFamily: FontStyle.MontBold,
            color: '#205072',
            width: '75%',
            textAlign: 'center',
          }}>
          Dürfen alle User der Gruppe beitreten, egal welche Sprache sie
          sprechen?
        </Text>
        <View style={{flexDirection: 'row', marginVertical: 10}}>
          <View style={[styles.buttonView, {backgroundColor: '#BECCD6'}]}>
            <Text
              style={{
                fontSize: 12,
                color: '#fff',
                fontFamily: FontStyle.MontBold,
              }}>
              Alle dürfen beitreten
            </Text>
          </View>
          <View style={styles.buttonView}>
            <Text
              style={{
                fontSize: 12,
                color: '#fff',
                fontFamily: FontStyle.MontBold,
              }}>
              Nur folgende Sprachen:
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonView: {
    width: '40%',
    height: 35,
    backgroundColor: '#205072',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: '2.5%',
    borderRadius: 10,
  },
});

export default EditGroup;

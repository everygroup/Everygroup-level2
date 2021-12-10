import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import FontStyle from '../../Assets/Fonts/FontStyle';

const HelpBottom = () => {
  return (
    <View
      style={{
        backgroundColor: '#205072',
        alignItems: 'center',
        paddingVertical: '5%',
        marginTop: '5%',
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        <View style={styles.textView}>
          <Text style={styles.textStyle}>Datenschutz |</Text>
        </View>
        <View style={styles.textView}>
          <Text style={styles.textStyle}>AGB |</Text>
        </View>
        <View style={styles.textView}>
          <Text style={styles.textStyle}>Impressum</Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        <View style={styles.textView}>
          <Text style={styles.textStyle}>Verhaltensregeln |</Text>
        </View>
        <View style={styles.textView}>
          <Text style={styles.textStyle}>Kontakt</Text>
        </View>
      </View>
      <Text
        style={[
          styles.textStyle,
          {
            fontSize: 17,
            fontFamily: FontStyle.MontBold,
            textAlign: 'center',
          },
        ]}>
        Finde deine Gruppe!
      </Text>
      <Text
        style={[
          styles.textStyle,
          {textAlign: 'center', width: '80%', marginVertical: '2.5%'},
        ]}>
        Mit everygroup.me bist du schneller in Gruppen drinnen, als the Flash
        auf Energydrinks. Finde WhatsApp-, WeChat-, Viber-, Line-, Kakao-, und
        Telegramgruppen oder Discordserver, mit nur einem Klick oder poste ganz
        einfach deine eigene öffentliche Gruppe mit deinem Gruppenlink. Finde
        Gruppen mit deinen Interessen und lerne viele neue Leute kennen. Als
        erste Webseite bieten wir dir eine Vielzahl von Gruppen verschiedener
        Plattformen. Entscheide dich unter Tausenden von Gruppen, welche deine
        nächste sein wird.
      </Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          width: '30%',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontFamily: FontStyle.MontBold,
            fontSize: 16,
            color: '#fff',
          }}>
          FAQ
        </Text>
        <Image
          source={require('../../Assets/Images/instagramWhite.png')}
          style={{width: 24, height: 24, resizeMode: 'contain'}}
        />
      </View>
      <Text
        style={{
          fontFamily: FontStyle.MontExtBold,
          fontSize: 10,
          color: '#fff',
        }}>
        Copyright © 2020 by everygroup.me. All rights reserved
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontFamily: FontStyle.MontMedium,
    fontSize: 13,
    color: '#fff',
  },
  textView: {
    // minWidth: 30,
    height: 30,
    marginHorizontal: 5,
    // backgroundColor: 'orange',
    alignItems: 'center',
  },
});

export default HelpBottom;
